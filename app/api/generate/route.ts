import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { genererExercices } from "@/lib/claude";
import type { Enfant, Matiere, NotionStats } from "@/lib/types";
import { LIMITE_SESSIONS_GRATUITES } from "@/lib/types";

export async function POST(request: Request) {
  const supabase = await createClient();

  // Vérifier l'authentification
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  // Récupérer le profil
  const { data: profile } = await supabase
    .from("profiles")
    .select("is_premium, sessions_used")
    .eq("id", user.id)
    .single();

  if (!profile) {
    return NextResponse.json({ error: "Profil introuvable" }, { status: 404 });
  }

  // Vérifier le quota
  if (!profile.is_premium && profile.sessions_used >= LIMITE_SESSIONS_GRATUITES) {
    return NextResponse.json(
      { error: "Quota dépassé", checkout_url: "/api/stripe/checkout" },
      { status: 402 }
    );
  }

  // Parser le corps de la requête
  let body: {
    enfant_id: string;
    matieres: Matiere[];
    temps_disponible: number;
    difficultes?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const { enfant_id, matieres, temps_disponible, difficultes = "" } = body;

  // Récupérer l'enfant (vérifier qu'il appartient au parent)
  const { data: enfant } = await supabase
    .from("enfants")
    .select("*")
    .eq("id", enfant_id)
    .eq("parent_id", user.id)
    .single<Enfant>();

  if (!enfant) {
    return NextResponse.json({ error: "Enfant introuvable" }, { status: 404 });
  }

  // Créer la session en base
  const { data: sessionData, error: sessionError } = await supabase
    .from("sessions")
    .insert({
      parent_id: user.id,
      enfant_id,
      temps_disponible,
      matieres,
      difficultes,
    })
    .select("id")
    .single();

  if (sessionError || !sessionData) {
    return NextResponse.json(
      { error: "Impossible de créer la session" },
      { status: 500 }
    );
  }

  // Récupérer les faiblesses détectées pour cet enfant
  const { data: faiblessesData } = await supabase
    .rpc("get_faiblesses_enfant", { p_enfant_id: enfant_id }) as { data: NotionStats[] | null };
  const faiblesses: NotionStats[] = faiblessesData ?? [];

  // Générer les exercices via Claude
  let exercicesGeneres;
  try {
    exercicesGeneres = await genererExercices(
      enfant,
      matieres,
      temps_disponible,
      difficultes,
      faiblesses
    );
  } catch (err) {
    // Rollback session si Claude échoue
    await supabase.from("sessions").delete().eq("id", sessionData.id);
    console.error("Erreur Claude:", err);
    return NextResponse.json(
      { error: "Erreur lors de la génération des exercices" },
      { status: 500 }
    );
  }

  // Insérer les exercices en base
  const exercicesAInserer = exercicesGeneres.map((ex) => ({
    session_id: sessionData.id,
    ordre: ex.ordre,
    matiere: ex.matiere,
    type: ex.type,
    contenu: {
      enonce: ex.enonce,
      options: ex.options,
      explication: ex.explication,
      sous_matiere: ex.sous_matiere ?? null,
    },
    reponse_correcte: ex.reponse_correcte,
  }));

  const { error: insertError } = await supabase
    .from("exercices")
    .insert(exercicesAInserer);

  if (insertError) {
    await supabase.from("sessions").delete().eq("id", sessionData.id);
    return NextResponse.json(
      { error: "Impossible de sauvegarder les exercices" },
      { status: 500 }
    );
  }

  // Incrémenter le compteur de sessions
  await supabase
    .from("profiles")
    .update({ sessions_used: profile.sessions_used + 1 })
    .eq("id", user.id);

  return NextResponse.json({ session_id: sessionData.id });
}
