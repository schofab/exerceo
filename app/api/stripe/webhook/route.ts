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

// Résout l'userId depuis metadata, avec fallback sur stripe_customer_id
async function resolveUserId(
  metadataUserId: string | undefined | null,
  customerId: string | null | undefined
): Promise<string | null> {
  if (metadataUserId) return metadataUserId;
  if (!customerId) return null;

  const supabase = getAdminClient();
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .single();

  return data?.id ?? null;
}

interface ProfilePatch {
  is_premium?: boolean;
  stripe_customer_id?: string | null;
  stripe_subscription_id?: string | null;
  subscription_status?: string | null;
  premium_activated_at?: string | null;
}

async function updateProfile(userId: string, patch: ProfilePatch) {
  const supabase = getAdminClient();
  const { error } = await supabase
    .from("profiles")
    .update(patch)
    .eq("id", userId);
  if (error) throw error;
}

// Récupère premium_activated_at actuel pour ne pas l'écraser si déjà rempli
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
    console.error("Webhook signature invalide:", err);
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        if (!userId) {
          console.error("checkout.session.completed : user_id manquant");
          break;
        }

        // Condition de sécurité explicite : on n'active le premium que si Stripe
        // confirme un paiement réel. "paid" est la seule valeur acceptable ici.
        // Les autres valeurs possibles ("no_payment_required", "unpaid") indiquent
        // soit un coupon 100 %, soit un essai — deux cas où aucune transaction
        // financière n'a eu lieu. Ce guard s'applique indépendamment du flow Stripe
        // utilisé : il ne faut pas présupposer que checkout.session.completed
        // implique toujours un paiement.
        if (session.payment_status !== "paid") {
          console.warn(`[stripe] checkout.session.completed ignoré — payment_status=${session.payment_status} pour ${userId}`);
          break;
        }

        const customerId =
          typeof session.customer === "string"
            ? session.customer
            : session.customer?.id ?? null;

        const subId =
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription?.id ?? null;

        // Ne pas écraser premium_activated_at si déjà rempli (idempotence)
        const existingActivatedAt = await getActivatedAt(userId);

        await updateProfile(userId, {
          is_premium: true,
          stripe_customer_id: customerId,
          stripe_subscription_id: subId,
          subscription_status: "active",
          premium_activated_at: existingActivatedAt ?? new Date().toISOString(),
        });

        console.log(`[stripe] checkout complété — is_premium=true pour ${userId}`);
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const customerId =
          typeof sub.customer === "string" ? sub.customer : sub.customer?.id;

        const userId = await resolveUserId(sub.metadata?.user_id, customerId);
        if (!userId) {
          console.error("customer.subscription.deleted : userId introuvable", { customerId });
          break;
        }

        await updateProfile(userId, {
          is_premium: false,
          stripe_subscription_id: null,
          subscription_status: "canceled",
        });

        console.log(`[stripe] abonnement supprimé — is_premium=false pour ${userId}`);
        break;
      }

      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const customerId =
          typeof sub.customer === "string" ? sub.customer : sub.customer?.id;

        const userId = await resolveUserId(sub.metadata?.user_id, customerId);
        if (!userId) break;

        const INACTIVE = ["canceled", "unpaid", "past_due", "incomplete_expired"];

        if (INACTIVE.includes(sub.status)) {
          await updateProfile(userId, {
            is_premium: false,
            stripe_subscription_id: sub.id,
            subscription_status: sub.status,
          });
          console.log(`[stripe] abonnement ${sub.status} — is_premium=false pour ${userId}`);
        } else if (sub.status === "active") {
          const existingActivatedAt = await getActivatedAt(userId);
          await updateProfile(userId, {
            is_premium: true,
            stripe_subscription_id: sub.id,
            subscription_status: "active",
            premium_activated_at: existingActivatedAt ?? new Date().toISOString(),
          });
          console.log(`[stripe] abonnement réactivé — is_premium=true pour ${userId}`);
        }
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.error(`[stripe] erreur traitement ${event.type}:`, err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
