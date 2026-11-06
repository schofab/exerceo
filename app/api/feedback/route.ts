import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const body = await req.json();

  const { prenom, appareil, note, points_positifs, points_ameliorer, bug, usage_regulier, intention_payer } = body;

  if (!prenom || !note) {
    return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  }

  const { error } = await supabase.from("feedbacks").insert({
    user_id: user?.id ?? null,
    prenom,
    appareil,
    note,
    points_positifs,
    points_ameliorer,
    bug,
    usage_regulier,
    intention_payer,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
