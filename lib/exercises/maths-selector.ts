/**
 * lib/exercises/maths-selector.ts
 *
 * Sélectionne des exercices de Mathématiques UNIQUEMENT depuis EXERCISE_BANK_MATHS.
 * Aucune génération IA — source statique, filtrée, validée et dédupliquée.
 *
 * V2 — sélection adaptive :
 *   Si les compétences de l'enfant sont disponibles, l'ordre de priorité des
 *   sous-domaines est recalculé dynamiquement (fragile > progressing > mastered due).
 *   Fallback transparent sur l'ordre statique si aucune donnée de compétence.
 *
 * Règles :
 *  - Niveau progressif : CP→CP, CE1→CP+CE1, CE2→CE1+CE2, etc.
 *  - Exercices déjà vus exclus en priorité (fallback si banque insuffisante)
 *  - Diversité des skills garantie
 *  - Jamais d'exercice invalide
 */

import { EXERCISE_BANK_MATHS } from "./subjects/maths/maths.mapping";
import { validateExercise } from "./validator";
import { antiRepeatSort } from "./core/exercise-core.anti-repetition";
import type { Exercise, SousDomaine } from "./types";
import type { ExerciceGenere, Matiere, TypeExercice } from "../types";
import type { SelectedBankExercise } from "./french-selector";
import type { EnfantCompetence } from "../competences/types";

// ─── Progression pédagogique : niveaux autorisés par classe ──────────────────
const NIVEAUX_AUTORISES: Record<string, string[]> = {
  CP:  ["CP"],
  CE1: ["CP",  "CE1"],
  CE2: ["CE1", "CE2"],
  CM1: ["CE2", "CM1"],
  CM2: ["CM1", "CM2"],
};

// ─── Labels d'affichage pour les sous-domaines maths ─────────────────────────
const SOUS_DOMAINE_LABELS_MATHS: Partial<Record<SousDomaine, string>> = {
  calcul:     "Calcul mental",
  numeration: "Numération",
  geometrie:  "Géométrie",
  mesures:    "Mesures",
  problemes:  "Problèmes",
  logique:    "Logique",
};

// ─── Ordre statique de référence (fallback sans compétences) ─────────────────
const SKILL_PRIORITY_ORDER_MATHS: SousDomaine[] = [
  "calcul",
  "problemes",
  "numeration",
  "geometrie",
  "mesures",
  "logique",
];

// ─── Scores de priorité adaptatifs ───────────────────────────────────────────
//
//   fragile                      → 100  (priorité maximale)
//   progressing                  →  60
//   not_started / inconnu        →  30  (neutre, légèrement sous les fragiles)
//   mastered, révision due/retard →  40
//   mastered, révision dans ≤ 3j →  20
//   mastered, pas encore due      → -10  (déprioritisé, mais jamais exclu)
//
const PRIORITY_SCORES = {
  fragile:          100,
  progressing:       60,
  not_started:       30,
  mastered_due:      40,
  mastered_soon:     20,
  mastered_not_due: -10,
} as const;

// ─── Priorité adaptive des sous-domaines ─────────────────────────────────────

/**
 * Construit l'ordre de priorité des sous-domaines maths à partir des
 * compétences de l'enfant.
 *
 * Retourne SKILL_PRIORITY_ORDER_MATHS inchangé si `competences` est vide.
 */
export function buildMathSkillPriority(
  competences: EnfantCompetence[],
): SousDomaine[] {
  if (competences.length === 0) return SKILL_PRIORITY_ORDER_MATHS;

  const now = Date.now();
  const THREE_DAYS_MS = 3 * 24 * 3600 * 1000;

  // Score initial : not_started pour tous les sous-domaines connus
  const scores = new Map<SousDomaine, number>(
    SKILL_PRIORITY_ORDER_MATHS.map((s) => [s, PRIORITY_SCORES.not_started])
  );

  for (const comp of competences) {
    // skill_id = "mathematiques:calcul" → sous_domaine = "calcul"
    const parts = comp.skill_id.split(":");
    if (parts.length !== 2) continue;
    const sousDomaine = parts[1] as SousDomaine;
    if (!SKILL_PRIORITY_ORDER_MATHS.includes(sousDomaine)) continue;

    let score: number;

    if (comp.status === "fragile") {
      score = PRIORITY_SCORES.fragile;
    } else if (comp.status === "progressing") {
      score = PRIORITY_SCORES.progressing;
    } else if (comp.status === "mastered") {
      if (comp.next_review_at != null) {
        const diffMs = new Date(comp.next_review_at).getTime() - now;
        if (diffMs <= 0) {
          score = PRIORITY_SCORES.mastered_due;      // due ou en retard
        } else if (diffMs <= THREE_DAYS_MS) {
          score = PRIORITY_SCORES.mastered_soon;     // due dans 3j
        } else {
          score = PRIORITY_SCORES.mastered_not_due;  // pas encore due
        }
      } else {
        score = PRIORITY_SCORES.mastered_not_due;
      }
    } else {
      score = PRIORITY_SCORES.not_started;
    }

    scores.set(sousDomaine, score);
  }

  // Tri décroissant ; l'ordre statique sert de tiebreaker
  return [...SKILL_PRIORITY_ORDER_MATHS].sort((a, b) => {
    const diff =
      (scores.get(b) ?? PRIORITY_SCORES.not_started) -
      (scores.get(a) ?? PRIORITY_SCORES.not_started);
    if (diff !== 0) return diff;
    return SKILL_PRIORITY_ORDER_MATHS.indexOf(a) - SKILL_PRIORITY_ORDER_MATHS.indexOf(b);
  });
}

// ─── Fonction principale ──────────────────────────────────────────────────────

/**
 * Sélectionne `count` exercices de Mathématiques depuis EXERCISE_BANK_MATHS.
 *
 * @param classe       Classe de l'enfant (CP, CE1, CE2, CM1, CM2)
 * @param count        Nombre d'exercices souhaités
 * @param ordreDebut   Numéro d'ordre du premier exercice dans la session
 * @param seenBankIds  IDs déjà présentés dans les sessions récentes (à éviter)
 * @param competences  Compétences maths de l'enfant (adapte la priorité des skills)
 */
export function selectMathExercises(
  classe: string,
  count: number,
  ordreDebut: number = 1,
  seenBankIds: string[] = [],
  competences: EnfantCompetence[] = [],
): SelectedBankExercise[] {
  const niveauxAutorises = NIVEAUX_AUTORISES[classe] ?? [classe];

  const poolComplet = EXERCISE_BANK_MATHS.filter(
    (e) => niveauxAutorises.includes(e.niveau) && validateExercise(e)
  );

  if (poolComplet.length === 0) {
    console.error(
      `[EXERCEO] CRITIQUE : aucun exercice maths valide pour classe=${classe} `
      + `(niveaux : ${niveauxAutorises.join(", ")})`
    );
    return [];
  }

  // ── Priorité adaptive ──────────────────────────────────────────────────────
  const skillPriority = buildMathSkillPriority(competences);

  // DEBUG : mapping skill → statut et prochaine révision
  if (competences.length > 0) {
    console.log(`[EXERCEO DEBUG] Maths compétences enfant :`);
    for (const comp of competences) {
      const sd = comp.skill_id.split(":")[1] ?? comp.skill_id;
      console.log(
        `  ${sd} → status=${comp.status}`
        + (comp.next_review_at ? ` | révision=${comp.next_review_at.slice(0, 10)}` : "")
      );
    }
  } else {
    console.log(`[EXERCEO DEBUG] Maths : aucune compétence connue → ordre statique`);
  }

  console.log(
    `[EXERCEO DEBUG] Maths priorité skills : `
    + skillPriority.map((s, i) => `${i + 1}.${s}`).join("  ")
  );

  // ── Anti-répétition ────────────────────────────────────────────────────────
  const seenSet = new Set(seenBankIds);
  const poolNouveaux = poolComplet.filter((e) => !seenSet.has(e.id));
  const poolDejaVus  = poolComplet.filter((e) =>  seenSet.has(e.id));

  console.log(
    `[EXERCEO] Pool Maths pour ${classe} : `
    + `${poolNouveaux.length} nouveaux + ${poolDejaVus.length} déjà vus`
    + ` (total : ${poolComplet.length}, demandés : ${count})`
  );

  const selected: Exercise[] = [];
  const usedSkills = new Set<string>();

  // Passe A — depuis les nouveaux (triés anti-répétition)
  selectWithSkillDiversity(
    antiRepeatSort(shuffle(poolNouveaux), seenBankIds, EXERCISE_BANK_MATHS),
    count,
    selected,
    usedSkills,
    skillPriority,
  );

  // Passe B — fallback sur les déjà vus
  if (selected.length < count) {
    console.warn(
      `[EXERCEO] Maths : seulement ${selected.length}/${count} nouveaux, `
      + `fallback sur ${poolDejaVus.length} déjà vus.`
    );
    selectWithSkillDiversity(
      shuffle(poolDejaVus),
      count,
      selected,
      usedSkills,
      skillPriority,
    );
  }

  // Passe C — recyclage si banque insuffisante (ex : CP avec peu d'exercices)
  if (selected.length < count && poolComplet.length > 0) {
    console.warn(
      `[EXERCEO] Maths banque insuffisante pour classe=${classe} : `
      + `${poolComplet.length} exercices uniques, ${count} demandés. Recyclage.`
    );
    const poolRecyclage = shuffle(poolComplet);
    let i = 0;
    while (selected.length < count) {
      selected.push(poolRecyclage[i % poolRecyclage.length]);
      i++;
      if (i > count * 4) break;
    }
  }

  // DEBUG : sous-domaines finalement sélectionnés
  console.log(
    `[EXERCEO DEBUG] Maths sélection finale (${selected.length}) : `
    + selected.map((e) => e.sous_domaine).join(", ")
  );

  // Mapper vers SelectedBankExercise
  return selected.slice(0, count).map((e, i): SelectedBankExercise => ({
    ordre:            ordreDebut + i,
    matiere:          "Mathématiques" as Matiere,
    sous_matiere:     SOUS_DOMAINE_LABELS_MATHS[e.sous_domaine] ?? "Mathématiques",
    type:             "qcm" as TypeExercice,
    enonce:           `${e.consigne} ${e.question}`,
    options:          e.options,
    reponse_correcte: e.bonne_reponse,
    explication:      e.explication,
    _bank_id:         e.id,
    _debug_classe:    e.niveau,
    _debug_skill:     e.sous_domaine,
  }));
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Sélectionne des exercices en garantissant la diversité des sous-domaines.
 *
 * Passe 1 : un exercice par skill dans `skillPriority` (ordre adaptatif ou statique)
 * Passe 2 : skills non encore couverts
 * Passe 3 : remplissage jusqu'à `count`
 */
function selectWithSkillDiversity(
  pool: Exercise[],
  count: number,
  selected: Exercise[],
  usedSkills: Set<string>,
  skillPriority: SousDomaine[] = SKILL_PRIORITY_ORDER_MATHS,
): void {
  // Passe 1 : un exercice par skill dans l'ordre de priorité
  for (const skill of skillPriority) {
    if (selected.length >= count) break;
    if (usedSkills.has(skill)) continue;
    const candidate = pool.find(
      (e) => e.sous_domaine === skill && !selected.includes(e)
    );
    if (candidate) {
      selected.push(candidate);
      usedSkills.add(skill);
    }
  }

  // Passe 2 : skills restants non encore couverts
  for (const ex of pool) {
    if (selected.length >= count) break;
    if (!usedSkills.has(ex.sous_domaine)) {
      selected.push(ex);
      usedSkills.add(ex.sous_domaine);
    }
  }

  // Passe 3 : compléter si encore insuffisant
  for (const ex of pool) {
    if (selected.length >= count) break;
    if (!selected.includes(ex)) selected.push(ex);
  }
}
