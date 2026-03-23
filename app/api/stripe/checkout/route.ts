import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { stripe } from "@/lib/stripe";
import { PRIX_PREMIUM_CENTIMES } from "@/lib/types";

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

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Minis Exos Premium",
            description:
              "Accès illimité à vie — exercices personnalisés pour vos enfants",
          },
          unit_amount: PRIX_PREMIUM_CENTIMES,
        },
        quantity: 1,
      },
    ],
    metadata: { user_id: user.id },
    success_url: `${appUrl}/succes`,
    cancel_url: `${appUrl}/tableau-de-bord`,
  });

  return NextResponse.redirect(session.url!);
}
