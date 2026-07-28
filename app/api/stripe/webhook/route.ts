import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient as createSupabaseAdmin } from "@supabase/supabase-js";
import type Stripe from "stripe";

function getAdminClient() {
  return createSupabaseAdmin(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Résolution userId : metadata en priorité, fallback via stripe_customer_id en base
async function resolveUserId(
  metadataUserId: string | undefined | null,
  customerId: string | null | undefined
): Promise<string | null> {
  if (metadataUserId) return metadataUserId;
  if (!customerId) return null;

  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .single();

  if (error) {
    console.error(`[stripe] resolveUserId — erreur lookup customer ${customerId}:`, error.message);
    return null;
  }

  return data?.id ?? null;
}

interface ProfilePatch {
  is_premium?: boolean;
  stripe_customer_id?: string | null;
  stripe_subscription_id?: string | null;
  subscription_status?: string | null;
  premium_activated_at?: string | null;
}

async function updateProfile(userId: string, patch: ProfilePatch): Promise<void> {
  const supabase = getAdminClient();
  const { error } = await supabase
    .from("profiles")
    .update(patch)
    .eq("id", userId);
  if (error) {
    throw new Error(`[stripe] updateProfile échoué pour ${userId}: ${error.message}`);
  }
}

async function getActivatedAt(userId: string): Promise<string | null> {
  const supabase = getAdminClient();
  const { data } = await supabase
    .from("profiles")
    .select("premium_activated_at")
    .eq("id", userId)
    .single();
  return data?.premium_activated_at ?? null;
}

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("[stripe] Signature invalide:", err);
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  console.log(`[stripe] event reçu: ${event.type} (${event.id})`);

  try {
    switch (event.type) {

      // ── checkout.session.completed ──────────────────────────────────────────
      // Stocke customer + subscription IDs dès le checkout pour que le fallback
      // resolveUserId fonctionne sur les events suivants.
      // Si payment_status === "paid", active le premium immédiatement.
      // Sinon, l'activation est prise en charge par invoice.paid ci-dessous.
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        const metaUserId = session.metadata?.user_id;
        const customerId =
          typeof session.customer === "string"
            ? session.customer
            : (session.customer as Stripe.Customer | null)?.id ?? null;
        const subId =
          typeof session.subscription === "string"
            ? session.subscription
            : (session.subscription as Stripe.Subscription | null)?.id ?? null;

        console.log(
          `[stripe] checkout.session.completed — payment_status=${session.payment_status} customer=${customerId} sub=${subId} meta_user=${metaUserId}`
        );

        const userId = await resolveUserId(metaUserId, customerId);
        if (!userId) {
          console.error(
            `[stripe] checkout.session.completed — userId introuvable. meta=${metaUserId} customer=${customerId}`
          );
          break;
        }

        const patch: ProfilePatch = {
          stripe_customer_id: customerId,
          stripe_subscription_id: subId,
        };

        if (session.payment_status === "paid") {
          const existingActivatedAt = await getActivatedAt(userId);
          patch.is_premium = true;
          patch.subscription_status = "active";
          patch.premium_activated_at = existingActivatedAt ?? new Date().toISOString();
          console.log(`[stripe] checkout.session.completed — activation immédiate pour ${userId}`);
        } else {
          console.log(
            `[stripe] checkout.session.completed — payment_status=${session.payment_status}, activation déléguée à invoice.paid pour ${userId}`
          );
        }

        await updateProfile(userId, patch);
        console.log(`[stripe] checkout.session.completed — profil mis à jour pour ${userId}`);
        break;
      }

      // ── invoice.paid / invoice.payment_succeeded ────────────────────────────
      // Source d'autorité pour l'activation premium : couvre le paiement initial
      // et tous les renouvellements annuels. Les deux events transportent le même
      // objet Invoice et sont traités avec la même logique.
      case "invoice.paid":
      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;

        const customerId =
          typeof invoice.customer === "string"
            ? invoice.customer
            : (invoice.customer as Stripe.Customer | null)?.id ?? null;
        const subId =
          typeof invoice.subscription === "string"
            ? invoice.subscription
            : (invoice.subscription as Stripe.Subscription | null)?.id ?? null;

        // subscription_details.metadata est propagé depuis subscription_data.metadata du checkout
        const metaUserId =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (invoice as any).subscription_details?.metadata?.user_id ?? null;

        console.log(
          `[stripe] ${event.type} — customer=${customerId} sub=${subId} meta_user=${metaUserId}`
        );

        const userId = await resolveUserId(metaUserId, customerId);
        if (!userId) {
          console.error(
            `[stripe] ${event.type} — userId introuvable. customer=${customerId} sub=${subId}`
          );
          break;
        }

        const existingActivatedAt = await getActivatedAt(userId);
        await updateProfile(userId, {
          is_premium: true,
          stripe_customer_id: customerId,
          stripe_subscription_id: subId,
          subscription_status: "active",
          premium_activated_at: existingActivatedAt ?? new Date().toISOString(),
        });

        console.log(`[stripe] ${event.type} — is_premium=true pour ${userId}`);
        break;
      }

      // ── customer.subscription.updated ───────────────────────────────────────
      // Surveille les changements de statut : réactivation, impayé, annulation.
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;

        const customerId =
          typeof sub.customer === "string"
            ? sub.customer
            : (sub.customer as Stripe.Customer | null)?.id;

        console.log(
          `[stripe] customer.subscription.updated — status=${sub.status} customer=${customerId}`
        );

        const userId = await resolveUserId(sub.metadata?.user_id, customerId);
        if (!userId) {
          console.error(
            `[stripe] customer.subscription.updated — userId introuvable. customer=${customerId}`
          );
          break;
        }

        const INACTIVE = ["canceled", "unpaid", "past_due", "incomplete_expired"];

        if (INACTIVE.includes(sub.status)) {
          await updateProfile(userId, {
            is_premium: false,
            stripe_subscription_id: sub.id,
            subscription_status: sub.status,
          });
          console.log(
            `[stripe] customer.subscription.updated — is_premium=false (${sub.status}) pour ${userId}`
          );
        } else if (sub.status === "active") {
          const existingActivatedAt = await getActivatedAt(userId);
          await updateProfile(userId, {
            is_premium: true,
            stripe_subscription_id: sub.id,
            subscription_status: "active",
            premium_activated_at: existingActivatedAt ?? new Date().toISOString(),
          });
          console.log(
            `[stripe] customer.subscription.updated — is_premium=true (réactivation) pour ${userId}`
          );
        } else {
          console.log(
            `[stripe] customer.subscription.updated — statut non traité: ${sub.status} pour ${userId}`
          );
        }
        break;
      }

      // ── customer.subscription.deleted ───────────────────────────────────────
      // Abonnement résilié définitivement côté Stripe.
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;

        const customerId =
          typeof sub.customer === "string"
            ? sub.customer
            : (sub.customer as Stripe.Customer | null)?.id;

        console.log(
          `[stripe] customer.subscription.deleted — customer=${customerId}`
        );

        const userId = await resolveUserId(sub.metadata?.user_id, customerId);
        if (!userId) {
          console.error(
            `[stripe] customer.subscription.deleted — userId introuvable. customer=${customerId}`
          );
          break;
        }

        await updateProfile(userId, {
          is_premium: false,
          stripe_subscription_id: null,
          subscription_status: "canceled",
        });

        console.log(
          `[stripe] customer.subscription.deleted — is_premium=false pour ${userId}`
        );
        break;
      }

      default:
        console.log(`[stripe] event non géré: ${event.type}`);
        break;
    }
  } catch (err) {
    console.error(`[stripe] erreur traitement ${event.type} (${event.id}):`, err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}