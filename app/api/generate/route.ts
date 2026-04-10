import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { genererExercices, NB_EXERCICES_PAR_DUREE } from "@/lib/claude";
import { selectFrenchExercises } from "@/lib/exercises/french-selector";
import { selectMathExercises } from "@/lib/exercises/maths-selector";
import { selectEnglishExercises } from "@/lib/exercises/english-selector";
import { selectScienceExercises } from "@/lib/exercises/science-selector";
import type { SelectedBankExercise } from "@/lib/exercises/french-selector";
import type { Enfant, ExerciceGenere, Matiere, NotionStats } from "@/lib/types";
import { LIMITE_SESSIONS_GRATUITES } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// Validation stricte des exercices générés par Claude avant insertion en base.
// Applique les mêmes règles que le system prompt (QCM, unicité, anti-méta).
// ─────────────────────────────────────────────────────────────────────────────
function validateExerciceGenere(ex: ExerciceGenere): { valid: boolean; reason?: string } {
  if (!ex.enonce?.trim())           return { valid: false, reason: "énoncé vide" };
  if (!ex.reponse_correcte?.trim()) return { valid: false, reason: "reponse_correcte vide" };
  if (!ex.explication?.trim())      return { valid: false, reason: "explication vide" };

  if (ex.type === "qcm" || ex.type === "vrai_faux") {
    if (!Array.isArray(ex.options) || ex.options.length < 2)
      return { valid: false, reason: "options insuffisantes (< 2)" };

    const normalized = ex.options.map(o => o.trim().toLowerCase()).filter(Boolean);

    if (new Set(normalized).size !== normalized.length)
      return { valid: false, reason: "options dupliquées" };

    if (!normalized.includes(ex.reponse_correcte.trim().toLowerCase()))
      return { valid: false, reason: "bonne réponse absente des options" };
  }

  // Anti-méta : exercices qui décrivent le programme plutôt que de l'appliquer
  const allText = [
    ex.enonce,
    ex.reponse_correcte,
    ...(ex.options ?? []),
    ex.explication,
  ].join(" ").toLowerCase();

  if (
    /du programme (de|du|des)/.test(allText) ||
    /classe de (cp|ce1|ce2|cm1|cm2)/i.test(allText) ||
    /niveau (cp|ce1|ce2|cm1|cm2)/i.test(allText) ||
    /exercice (de|sur) (cp|ce1|ce2|cm1|cm2)/i.test(allText)
  ) {
    return { valid: false, reason: "exercice méta (parle du programme)" };
  }

  return { valid: true };
}

// ─────────────────────────────────────────────────────────────────────────────

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

  // ═══════════════════════════════════════════════════════════════════════════
  // GÉNÉRATION DES EXERCICES
  //
  // Règle absolue :
  //   • Français       → UNIQUEMENT depuis EXERCISE_BANK (bank.ts), jamais d'IA
  //   • Mathématiques  → UNIQUEMENT depuis EXERCISE_BANK_MATHS, jamais d'IA
  //   • Anglais        → UNIQUEMENT depuis EXERCISE_BANK_ENGLISH, jamais d'IA
  //   • Sciences       → UNIQUEMENT depuis EXERCISE_BANK_SCIENCE, jamais d'IA
  //   • Autres matières → Claude (génération IA), avec validation stricte
  //
  // ═══════════════════════════════════════════════════════════════════════════

  const NB_TOTAL = NB_EXERCICES_PAR_DUREE[temps_disponible] ?? 3;
  const inclusFrancais = matieres.includes("Français");
  const inclusMaths    = matieres.includes("Mathématiques");
  const inclusAnglais  = matieres.includes("Anglais");
  const inclusSciences = matieres.includes("Sciences");
  // Matières envoyées à Claude = tout ce qui n'est ni Français, ni Maths, ni Anglais, ni Sciences
  const autresMatieres = matieres.filter(
    (m) => m !== "Français" && m !== "Mathématiques" && m !== "Anglais" && m !== "Sciences"
  ) as Matiere[];
  // Nombre d'exercices par matière (proportionnel au total de la session)
  const nbParMatiere = matieres.length > 1
    ? Math.max(1, Math.round(NB_TOTAL / matieres.length))
    : NB_TOTAL;

  type ExerciceAvecDebug = ExerciceGenere & { _bank_id?: string };

  const exercicesBank: SelectedBankExercise[] = [];
  const exercicesClaude: ExerciceGenere[] = [];

  // ── ÉTAPE 1a : Français depuis bank.ts ────────────────────────────────────
  if (inclusFrancais) {
    const nbFrancais = matieres.length > 1 ? nbParMatiere : NB_TOTAL;

    // Récupérer les IDs d'exercices de bank.ts déjà présentés à cet enfant
    // (5 dernières sessions) pour éviter les répétitions
    let seenBankIds: string[] = [];
    try {
      const { data: sessionsRecentes } = await supabase
        .from("sessions")
        .select("id")
        .eq("enfant_id", enfant_id)
        .neq("id", sessionData.id)          // exclure la session courante
        .order("created_at", { ascending: false })
        .limit(5);

      if (sessionsRecentes && sessionsRecentes.length > 0) {
        const ids = sessionsRecentes.map((s: { id: string }) => s.id);
        const { data: exRecents } = await supabase
          .from("exercices")
          .select("contenu")
          .in("session_id", ids)
          .eq("matiere", "Français");

        seenBankIds = (exRecents ?? [])
          .map((ex: { contenu: { _debug?: { bank_id?: string | null } } }) =>
            ex.contenu?._debug?.bank_id
          )
          .filter((id): id is string => typeof id === "string" && id.length > 0);
      }
    } catch {
      // Non-bloquant — si la requête échoue, on sélectionne sans historique
      console.warn("[EXERCEO] Impossible de récupérer l'historique des exercices vus.");
    }

    const selected = selectFrenchExercises(enfant.classe, nbFrancais, 1, seenBankIds);
    exercicesBank.push(...selected);

    // ── DEBUG LOG ──
    console.log(`\n[EXERCEO DEBUG] ── Session ${sessionData.id} | ${enfant.prenom} (${enfant.classe}) ──`);
    console.log(
      `[EXERCEO DEBUG] Historique : ${seenBankIds.length} exercices vus dans les 5 dernières sessions`
    );
    console.log(`[EXERCEO DEBUG] Français → bank.ts : ${selected.length}/${nbFrancais} exercices sélectionnés`);
    selected.forEach((ex) => {
      console.log(
        `  ✓ source=bank.ts | id=${ex._bank_id} | classe=${ex._debug_classe}`
        + ` | skill=${ex._debug_skill} | validated=true`
      );
    });
    if (selected.length < nbFrancais) {
      console.warn(
        `[EXERCEO DEBUG] ⚠ Seulement ${selected.length}/${nbFrancais} exercices sélectionnés`
      );
    }
  }

  // ── ÉTAPE 1b : Mathématiques depuis EXERCISE_BANK_MATHS ───────────────────
  if (inclusMaths) {
    const nbMaths = autresMatieres.length > 0
      ? nbParMatiere
      : NB_TOTAL - exercicesBank.length;

    let seenMathIds: string[] = [];
    try {
      const { data: sessionsRecentes } = await supabase
        .from("sessions")
        .select("id")
        .eq("enfant_id", enfant_id)
        .neq("id", sessionData.id)
        .order("created_at", { ascending: false })
        .limit(5);

      if (sessionsRecentes && sessionsRecentes.length > 0) {
        const ids = sessionsRecentes.map((s: { id: string }) => s.id);
        const { data: exRecents } = await supabase
          .from("exercices")
          .select("contenu")
          .in("session_id", ids)
          .eq("matiere", "Mathématiques");

        seenMathIds = (exRecents ?? [])
          .map((ex: { contenu: { _debug?: { bank_id?: string | null } } }) =>
            ex.contenu?._debug?.bank_id
          )
          .filter((id): id is string => typeof id === "string" && id.length > 0);
      }
    } catch {
      console.warn("[EXERCEO] Impossible de récupérer l'historique maths.");
    }

    const selected = selectMathExercises(
      enfant.classe,
      nbMaths,
      exercicesBank.length + 1,
      seenMathIds,
    );
    exercicesBank.push(...selected);

    console.log(
      `[EXERCEO DEBUG] Maths → bank : ${selected.length}/${nbMaths} exercices`
      + ` (historique : ${seenMathIds.length} vus)`
    );
    selected.forEach((ex) => {
      console.log(
        `  ✓ source=bank | id=${ex._bank_id} | classe=${ex._debug_classe}`
        + ` | skill=${ex._debug_skill}`
      );
    });
  }

  // ── ÉTAPE 1c : Anglais depuis EXERCISE_BANK_ENGLISH ──────────────────────
  if (inclusAnglais) {
    const nbAnglais = autresMatieres.length > 0
      ? nbParMatiere
      : NB_TOTAL - exercicesBank.length;

    let seenEnglishIds: string[] = [];
    try {
      const { data: sessionsRecentes } = await supabase
        .from("sessions")
        .select("id")
        .eq("enfant_id", enfant_id)
        .neq("id", sessionData.id)
        .order("created_at", { ascending: false })
        .limit(5);

      if (sessionsRecentes && sessionsRecentes.length > 0) {
        const ids = sessionsRecentes.map((s: { id: string }) => s.id);
        const { data: exRecents } = await supabase
          .from("exercices")
          .select("contenu")
          .in("session_id", ids)
          .eq("matiere", "Anglais");

        seenEnglishIds = (exRecents ?? [])
          .map((ex: { contenu: { _debug?: { bank_id?: string | null } } }) =>
            ex.contenu?._debug?.bank_id
          )
          .filter((id): id is string => typeof id === "string" && id.length > 0);
      }
    } catch {
      console.warn("[EXERCEO] Impossible de récupérer l'historique anglais.");
    }

    const selected = selectEnglishExercises(
      enfant.classe,
      nbAnglais,
      exercicesBank.length + 1,
      seenEnglishIds,
    );
    exercicesBank.push(...selected);

    console.log(
      `[EXERCEO DEBUG] Anglais → bank : ${selected.length}/${nbAnglais} exercices`
      + ` (historique : ${seenEnglishIds.length} vus)`
    );
    selected.forEach((ex) => {
      console.log(
        `  ✓ source=bank | id=${ex._bank_id} | classe=${ex._debug_classe}`
        + ` | skill=${ex._debug_skill}`
      );
    });
  }

  // ── ÉTAPE 1d : Sciences depuis EXERCISE_BANK_SCIENCE ─────────────────────
  if (inclusSciences) {
    const nbSciences = autresMatieres.length > 0
      ? nbParMatiere
      : NB_TOTAL - exercicesBank.length;

    let seenScienceIds: string[] = [];
    try {
      const { data: sessionsRecentes } = await supabase
        .from("sessions")
        .select("id")
        .eq("enfant_id", enfant_id)
        .neq("id", sessionData.id)
        .order("created_at", { ascending: false })
        .limit(5);

      if (sessionsRecentes && sessionsRecentes.length > 0) {
        const ids = sessionsRecentes.map((s: { id: string }) => s.id);
        const { data: exRecents } = await supabase
          .from("exercices")
          .select("contenu")
          .in("session_id", ids)
          .eq("matiere", "Sciences");

        seenScienceIds = (exRecents ?? [])
          .map((ex: { contenu: { _debug?: { bank_id?: string | null } } }) =>
            ex.contenu?._debug?.bank_id
          )
          .filter((id): id is string => typeof id === "string" && id.length > 0);
      }
    } catch {
      console.warn("[EXERCEO] Impossible de récupérer l'historique sciences.");
    }

    const selected = selectScienceExercises(
      enfant.classe,
      nbSciences,
      exercicesBank.length + 1,
      seenScienceIds,
    );
    exercicesBank.push(...selected);

    console.log(
      `[EXERCEO DEBUG] Sciences → bank : ${selected.length}/${nbSciences} exercices`
      + ` (historique : ${seenScienceIds.length} vus)`
    );
    selected.forEach((ex) => {
      console.log(
        `  ✓ source=bank | id=${ex._bank_id} | classe=${ex._debug_classe}`
        + ` | skill=${ex._debug_skill}`
      );
    });
  }

  // ── ÉTAPE 2 : Autres matières depuis Claude ────────────────────────────────
  if (autresMatieres.length > 0) {
    const nbClaude = NB_TOTAL - exercicesBank.length;

    console.log(
      `[EXERCEO DEBUG] Claude (${autresMatieres.join(", ")}) → demande de ${nbClaude} exercices`
    );

    let rawClaude: ExerciceGenere[];
    try {
      rawClaude = await genererExercices(
        enfant,
        autresMatieres,
        temps_disponible,
        difficultes,
        faiblesses,
        nbClaude
      );
    } catch (err) {
      await supabase.from("sessions").delete().eq("id", sessionData.id);
      console.error("[EXERCEO] Erreur Claude:", err);
      return NextResponse.json(
        { error: "Erreur lors de la génération des exercices" },
        { status: 500 }
      );
    }

    // Valider chaque exercice Claude avant de l'accepter
    for (const ex of rawClaude) {
      const { valid, reason } = validateExerciceGenere(ex);
      if (valid) {
        exercicesClaude.push(ex);
        console.log(
          `  ✓ source=claude | matiere=${ex.matiere} | type=${ex.type} | validated=true`
        );
      } else {
        console.warn(
          `  ✗ REJETÉ source=claude | matiere=${ex.matiere} | type=${ex.type} | raison="${reason}"`
        );
      }
    }
  }

  // ── ÉTAPE 3 : Fusion et renumérotation ────────────────────────────────────
  const allExercices: ExerciceAvecDebug[] = [
    ...exercicesBank,
    ...exercicesClaude,
  ].map((ex, i) => ({ ...ex, ordre: i + 1 }));

  if (allExercices.length === 0) {
    await supabase.from("sessions").delete().eq("id", sessionData.id);
    return NextResponse.json(
      { error: "Aucun exercice valide disponible" },
      { status: 500 }
    );
  }

  console.log(
    `[EXERCEO DEBUG] Total inséré : ${allExercices.length} exercices`
    + ` (${exercicesBank.length} bank.ts + ${exercicesClaude.length} claude)`
  );

  // ── ÉTAPE 4 : Insertion en base ────────────────────────────────────────────
  const exercicesAInserer = allExercices.map((ex) => ({
    session_id:       sessionData.id,
    ordre:            ex.ordre,
    matiere:          ex.matiere,
    type:             ex.type,
    contenu: {
      enonce:        ex.enonce,
      options:       ex.options,
      explication:   ex.explication,
      sous_matiere:  ex.sous_matiere ?? null,
      // ── DEBUG (temporaire — peut être supprimé) ──
      _debug: {
        source:    ex._bank_id ? "bank.ts" : "claude",
        bank_id:   ex._bank_id ?? null,
        classe:    (ex as SelectedBankExercise)._debug_classe ?? null,
        skill:     (ex as SelectedBankExercise)._debug_skill  ?? null,
        validated: true,
      },
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
