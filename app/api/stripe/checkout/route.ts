import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { stripe } from "@/lib/stripe";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(
      new URL("/connexion", process.env.NEXT_PUBLIC_APP_URL!)
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!priceId) {
    console.error("STRIPE_PRICE_ID manquant");
    return NextResponse.redirect(new URL("/tableau-de-bord", appUrl));
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      metadata: { user_id: user.id },
    },
    metadata: { user_id: user.id },
    success_url: `${appUrl}/succes`,
    cancel_url: `${appUrl}/tableau-de-bord`,
  });

  return NextResponse.redirect(session.url!);
}
