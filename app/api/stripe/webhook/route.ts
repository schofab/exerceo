import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient as createSupabaseAdmin } from "@supabase/supabase-js";
import type Stripe from "stripe";

// Utilise le service role pour bypasser RLS dans le webhook
function getAdminClient() {
  return createSupabaseAdmin(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

async function setPremium(userId: string, value: boolean) {
  const supabase = getAdminClient();
  const { error } = await supabase
    .from("profiles")
    .update({ is_premium: value })
    .eq("id", userId);
  if (error) throw error;
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
      // Checkout complété : l'abonnement (ou l'essai) vient de démarrer
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        if (!userId) {
          console.error("checkout.session.completed : user_id manquant");
          break;
        }
        await setPremium(userId, true);
        console.log(`[stripe] checkout complété — is_premium=true pour ${userId}`);
        break;
      }

      // Abonnement supprimé (résiliation, impayé définitif, etc.)
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.user_id;
        if (!userId) {
          console.error("customer.subscription.deleted : user_id manquant dans metadata");
          break;
        }
        await setPremium(userId, false);
        console.log(`[stripe] abonnement supprimé — is_premium=false pour ${userId}`);
        break;
      }

      // Abonnement mis à jour : on révoque si le statut est annulé
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.user_id;
        if (!userId) break;
        if (sub.status === "canceled") {
          await setPremium(userId, false);
          console.log(`[stripe] abonnement annulé — is_premium=false pour ${userId}`);
        }
        break;
      }

      default:
        // Événement non géré — ignoré silencieusement
        break;
    }
  } catch (err) {
    console.error(`[stripe] erreur traitement ${event.type}:`, err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
