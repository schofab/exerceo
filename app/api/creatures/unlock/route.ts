import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { Creature } from "@/lib/types";

export async function POST(request: Request) {
  const supabase = await createClient();

  // 1. Vérification auth
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  // 2. Lecture du corps
  let enfant_id: string;
  try {
    const body = await request.json();
    enfant_id = body.enfant_id;
    if (!enfant_id) throw new Error("enfant_id manquant");
  } catch {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }

  // 3. Vérifier que l'enfant appartient bien au parent connecté
  const { data: enfant } = await supabase
    .from("enfants")
    .select("id")
    .eq("id", enfant_id)
    .eq("parent_id", user.id)
    .single();

  if (!enfant) {
    return NextResponse.json({ error: "Enfant introuvable" }, { status: 403 });
  }

  // 4. Compter le total d'étoiles via la fonction RPC
  const { data: etoilesData, error: rpcError } = await supabase.rpc(
    "get_etoiles_enfant",
    { p_enfant_id: enfant_id }
  );
  if (rpcError) {
    console.error("[creatures/unlock] Erreur RPC:", rpcError);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
  const totalEtoiles = Number(etoilesData ?? 0);

  // 5. Récupérer les créatures déjà débloquées
  const { data: dejaDebloquees } = await supabase
    .from("enfant_creatures")
    .select("creature_id")
    .eq("enfant_id", enfant_id);

  const dejaIds = (dejaDebloquees ?? []).map(
    (d: { creature_id: string }) => d.creature_id
  );

  // 6. Chercher les créatures maintenant débloquables
  let query = supabase
    .from("creatures")
    .select("*")
    .lte("stars_required", totalEtoiles)
    .order("stars_required");

  if (dejaIds.length > 0) {
    query = query.not("id", "in", `(${dejaIds.join(",")})`);
  }

  const { data: candidates } = await query;
  const nouvelles = (candidates ?? []) as Creature[];

  // 7. Insérer les nouvelles créatures (UNIQUE constraint = idempotent)
  if (nouvelles.length > 0) {
    await supabase.from("enfant_creatures").insert(
      nouvelles.map((c) => ({ enfant_id, creature_id: c.id }))
    );
  }

  return NextResponse.json({
    nouvelles_creatures: nouvelles,
    total_etoiles: totalEtoiles,
  });
}
