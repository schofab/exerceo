/**
 * lib/exercises/english-selector.ts
 *
 * Sélectionne des exercices d'Anglais UNIQUEMENT depuis EXERCISE_BANK_ENGLISH.
 * Aucune génération IA — source statique, filtrée, validée et dédupliquée.
 * Calqué sur maths-selector.ts.
 *
 * Règles :
 *  - Niveau progressif : CP→CP, CE1→CP+CE1, CE2→CE1+CE2, etc.
 *  - Exercices déjà vus exclus en priorité (fallback si banque insuffisante)
 *  - Diversité des skills garantie
 *  - Jamais d'exercice invalide
 */

import { EXERCISE_BANK_ENGLISH } from "./subjects/english/english.mapping";
import { validateExercise } from "./validator";
import { antiRepeatSort } from "./core/exercise-core.anti-repetition";
import type { Exercise, SousDomaine } from "./types";
import type { ExerciceGenere, Matiere, TypeExercice } from "../types";
import type { SelectedBankExercise } from "./french-selector";

// ─── Progression pédagogique : niveaux autorisés par classe ──────────────────
const NIVEAUX_AUTORISES: Record<string, string[]> = {
  CP:  ["CP"],
  CE1: ["CP",  "CE1"],
  CE2: ["CE1", "CE2"],
  CM1: ["CE2", "CM1"],
  CM2: ["CM1", "CM2"],
};

// ─── Labels d'affichage pour les sous-domaines anglais ───────────────────────
const SOUS_DOMAINE_LABELS_ENGLISH: Partial<Record<SousDomaine, string>> = {
  vocabulaire:   "Vocabulaire",
  grammaire:     "Grammaire",
  comprehension: "Compréhension",
};

// ─── Ordre de priorité des skills pour varier les sessions ───────────────────
const SKILL_PRIORITY_ORDER_ENGLISH: SousDomaine[] = [
  "vocabulaire",
  "grammaire",
  "comprehension",
];

// ─── Fonction principale ──────────────────────────────────────────────────────

/**
 * Sélectionne `count` exercices d'Anglais depuis EXERCISE_BANK_ENGLISH.
 *
 * @param classe       Classe de l'enfant (CP, CE1, CE2, CM1, CM2)
 * @param count        Nombre d'exercices souhaités
 * @param ordreDebut   Numéro d'ordre du premier exercice dans la session
 * @param seenBankIds  IDs déjà présentés dans les sessions récentes (à éviter)
 */
export function selectEnglishExercises(
  classe: string,
  count: number,
  ordreDebut: number = 1,
  seenBankIds: string[] = [],
): SelectedBankExercise[] {
  const niveauxAutorises = NIVEAUX_AUTORISES[classe] ?? [classe];

  const poolComplet = EXERCISE_BANK_ENGLISH.filter(
    (e) => niveauxAutorises.includes(e.niveau) && validateExercise(e)
  );

  if (poolComplet.length === 0) {
    console.error(
      `[EXERCEO] CRITIQUE : aucun exercice anglais valide pour classe=${classe} `
      + `(niveaux : ${niveauxAutorises.join(", ")})`
    );
    return [];
  }

  const seenSet = new Set(seenBankIds);
  const poolNouveaux = poolComplet.filter((e) => !seenSet.has(e.id));
  const poolDejaVus  = poolComplet.filter((e) =>  seenSet.has(e.id));

  console.log(
    `[EXERCEO] Pool Anglais pour ${classe} : `
    + `${poolNouveaux.length} nouveaux + ${poolDejaVus.length} déjà vus`
    + ` (total : ${poolComplet.length}, demandés : ${count})`
  );

  const selected: Exercise[] = [];
  const usedSkills = new Set<string>();

  // Passe A — depuis les nouveaux
  selectWithSkillDiversity(antiRepeatSort(shuffle(poolNouveaux), seenBankIds, EXERCISE_BANK_ENGLISH), count, selected, usedSkills);

  // Passe B — fallback sur les déjà vus
  if (selected.length < count) {
    console.warn(
      `[EXERCEO] Anglais : seulement ${selected.length}/${count} nouveaux, `
      + `fallback sur ${poolDejaVus.length} déjà vus.`
    );
    selectWithSkillDiversity(shuffle(poolDejaVus), count, selected, usedSkills);
  }

  // Passe C — recyclage si banque insuffisante
  if (selected.length < count && poolComplet.length > 0) {
    console.warn(
      `[EXERCEO] Anglais banque insuffisante pour classe=${classe} : `
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

  // Mapper vers SelectedBankExercise
  return selected.slice(0, count).map((e, i): SelectedBankExercise => ({
    ordre:            ordreDebut + i,
    matiere:          "Anglais" as Matiere,
    sous_matiere:     SOUS_DOMAINE_LABELS_ENGLISH[e.sous_domaine] ?? "Anglais",
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

function selectWithSkillDiversity(
  pool: Exercise[],
  count: number,
  selected: Exercise[],
  usedSkills: Set<string>,
): void {
  // Passe 1 : un exercice par skill prioritaire
  for (const skill of SKILL_PRIORITY_ORDER_ENGLISH) {
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
