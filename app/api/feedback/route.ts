import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const SIGNAUX_VALIDES = new Set([
  "deja_vu",
  "pas_encore_vu",
  "trop_facile",
  "trop_difficile",
]);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { exercice_id, enfant_id, bank_id, signal } = body;

    if (
      typeof exercice_id !== "string" ||
      typeof enfant_id !== "string" ||
      typeof signal !== "string" ||
      !SIGNAUX_VALIDES.has(signal)
    ) {
      return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
    }

    const supabase = await createClient();

    // Vérification d'appartenance : l'enfant doit appartenir à l'utilisateur courant
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { count } = await supabase
      .from("enfants")
      .select("id", { count: "exact", head: true })
      .eq("id", enfant_id)
      .eq("user_id", user.id);

    if (!count) {
      return NextResponse.json({ error: "Enfant introuvable" }, { status: 403 });
    }

    // Upsert : si un feedback existe déjà pour (exercice_id, enfant_id), on ne fait rien.
    // onConflict sur la contrainte unique — ignoreSomeErrors pour ne pas planter si doublon.
    const { error } = await supabase
      .from("exercise_feedbacks")
      .upsert(
        {
          exercise_id: exercice_id,
          enfant_id,
          bank_id: typeof bank_id === "string" ? bank_id : null,
          signal,
        },
        { onConflict: "exercise_id,enfant_id", ignoreDuplicates: true }
      );

    if (error) {
      console.error("[EXERCEO] Feedback insert error:", error.message);
      return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
