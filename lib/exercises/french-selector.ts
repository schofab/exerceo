/**
 * lib/exercises/french-selector.ts
 *
 * Sélectionne des exercices de Français UNIQUEMENT depuis EXERCISE_BANK (bank.ts).
 * Aucune génération IA — source statique, filtrée, validée et dédupliquée.
 *
 * Règles :
 *  - Niveau strictement progressif : CP→CP, CE1→CP+CE1, CE2→CE1+CE2, etc.
 *  - Exercices déjà vus (sessions récentes) exclus en priorité
 *  - Diversité des skills garantie (lecture, orthographe, grammaire, …)
 *  - Jamais d'exercice invalide
 *  - Fallback sur les déjà vus uniquement si la banque est insuffisante
 */

import { EXERCISE_BANK } from "./bank";
import { validateExercise } from "./validator";
import { antiRepeatSort } from "./core/exercise-core.anti-repetition";
import { sortByAdaptiveCompatibility, enforceAdaptiveCaps } from "./core/exercise-core.adaptive-selection";
import type { Exercise, SousDomaine, ExerciseMeta } from "./types";
import type { ExerciceGenere, Matiere, TypeExercice } from "../types";
import type { GeneralLevel } from "./core/exercise-core.types";
import type { SupportNeeds } from "../types";
import { DEFAULT_SUPPORT_NEEDS } from "../types";

// ─── Progression pédagogique : niveaux autorisés par classe ──────────────────
// Chaque enfant peut accéder à sa classe ET à la classe inférieure (révision).
// Jamais de classe supérieure.
const NIVEAUX_AUTORISES: Record<string, string[]> = {
  CP:  ["CP"],
  CE1: ["CP",  "CE1"],
  CE2: ["CE1", "CE2"],
  CM1: ["CE2", "CM1"],
  CM2: ["CM1", "CM2"],
};

// ─── Labels d'affichage pour les sous-domaines ───────────────────────────────
const SOUS_DOMAINE_LABELS: Partial<Record<SousDomaine, string>> = {
  homophones:        "Orthographe",
  accords:           "Grammaire",
  conjugaison:       "Conjugaison",
  lecture:           "Lecture",
  orthographe:       "Orthographe",
  grammaire:         "Grammaire",
  vocabulaire:       "Vocabulaire",
  expression_ecrite: "Expression écrite",
};

// ─── Filtre par profil élève (difficulty_tier) ────────────────────────────────
//
//   beginner      → foundation seulement        (items guidés, faible ambiguïté)
//   intermediate  → foundation + standard        (cœur du programme)
//   advanced      → standard + advanced          (items discriminants)
//   undefined     → tout le pool                (comportement existant inchangé)
//
// Les items sans difficulty_tier passent toujours (rétrocompatiblité).
//
const TIERS_AUTORISES: Record<GeneralLevel, Set<string>> = {
  beginner:     new Set(['foundation']),
  intermediate: new Set(['foundation', 'standard']),
  advanced:     new Set(['standard', 'advanced']),
};

function filterByGeneralLevel(
  pool: Exercise[],
  generalLevel: GeneralLevel | undefined,
): Exercise[] {
  if (!generalLevel) return pool;
  const allowed = TIERS_AUTORISES[generalLevel];
  return pool.filter((e) => !e.difficulty_tier || allowed.has(e.difficulty_tier));
}

// ─── Ordre de priorité des skills pour varier les sessions ───────────────────
// On tourne sur cet ordre pour garantir la diversité pédagogique.
const SKILL_PRIORITY_ORDER: SousDomaine[] = [
  "orthographe",
  "grammaire",
  "conjugaison",
  "lecture",
  "vocabulaire",
  "homophones",
  "accords",
  "expression_ecrite",
];

// ─── Types exportés ───────────────────────────────────────────────────────────

/** ExerciceGenere enrichi des métadonnées de debug et d'adaptation */
export interface SelectedBankExercise extends ExerciceGenere {
  _bank_id:     string;
  _debug_classe: string;    // niveau de l'exercice dans la banque (CP, CE1…)
  _debug_skill:  string;    // sous_domaine de l'exercice
  meta?:         ExerciseMeta; // tags adaptatifs résolus (textLoad, numericLoad, visualLoad, guidance)
}

// ─── Fonction principale ──────────────────────────────────────────────────────

/**
 * Sélectionne `count` exercices de Français depuis EXERCISE_BANK.
 *
 * @param classe       Classe de l'enfant (CP, CE1, CE2, CM1, CM2)
 * @param count        Nombre d'exercices souhaités
 * @param ordreDebut   Numéro d'ordre du premier exercice
 * @param seenBankIds  IDs déjà présentés dans les sessions récentes (à éviter)
 */
export function selectFrenchExercises(
  classe: string,
  count: number,
  ordreDebut: number = 1,
  seenBankIds: string[] = [],
  generalLevel?: GeneralLevel,
  supportNeeds?: SupportNeeds,
): SelectedBankExercise[] {
  const resolvedNeeds = supportNeeds ?? DEFAULT_SUPPORT_NEEDS;
  // 1. Déterminer les niveaux autorisés pour cette classe
  const niveauxAutorisés = NIVEAUX_AUTORISES[classe] ?? [classe];

  // 2. Pool complet : niveaux autorisés + exercices valides + filtre profil élève
  const poolComplet = filterByGeneralLevel(
    EXERCISE_BANK.filter((e) => niveauxAutorisés.includes(e.niveau) && validateExercise(e)),
    generalLevel,
  );

  if (generalLevel) {
    console.log(
      `[EXERCEO] Français filtre generalLevel=${generalLevel} : `
      + `${poolComplet.length} items dans le profil`
    );
  }

  if (poolComplet.length === 0) {
    console.error(
      `[EXERCEO] CRITIQUE : aucun exercice valide pour classe=${classe} `
      + `(niveaux : ${niveauxAutorisés.join(", ")})`
    );
    return [];
  }

  const seenSet = new Set(seenBankIds);

  // 3. Séparer : non-vus (priorité) vs déjà vus (fallback)
  const poolNouveaux = poolComplet.filter((e) => !seenSet.has(e.id));
  const poolDejaVus  = poolComplet.filter((e) =>  seenSet.has(e.id));

  console.log(
    `[EXERCEO] Pool Français pour ${classe} : `
    + `${poolNouveaux.length} nouveaux + ${poolDejaVus.length} déjà vus`
    + ` (total : ${poolComplet.length}, demandés : ${count})`
  );

  // 4. Sélectionner les exercices avec diversité de skills
  const selected: Exercise[] = [];
  const usedSkills = new Set<string>();

  // Passe A — depuis les nouveaux (shuffle + anti-répétition + tri adaptatif)
  const nouveauxMelanges = sortByAdaptiveCompatibility(
    antiRepeatSort(shuffle(poolNouveaux), seenBankIds, EXERCISE_BANK),
    resolvedNeeds,
  );
  selectWithSkillDiversity(nouveauxMelanges, count, selected, usedSkills);

  // Passe B — depuis les déjà vus si les nouveaux sont insuffisants
  if (selected.length < count) {
    console.warn(
      `[EXERCEO] Seulement ${selected.length}/${count} nouveaux disponibles, `
      + `fallback sur ${poolDejaVus.length} déjà vus.`
    );
    const dejaVusMelanges = shuffle(poolDejaVus);
    selectWithSkillDiversity(dejaVusMelanges, count, selected, usedSkills);
  }

  // Passe C (dernier recours) — recycler si la banque totale est plus petite que le quota demandé.
  // Cas typique : CP n'a que 6 QCM, mais la session en demande 9 ou 12.
  // On réutilise les exercices en tournant sur le pool complet (mélangé différemment).
  if (selected.length < count && poolComplet.length > 0) {
    console.warn(
      `[EXERCEO] Banque insuffisante pour classe=${classe} : `
      + `${poolComplet.length} exercices uniques disponibles, ${count} demandés. `
      + `Recyclage de ${count - selected.length} exercice(s).`
    );
    const poolRecyclage = shuffle(poolComplet);
    let i = 0;
    while (selected.length < count) {
      selected.push(poolRecyclage[i % poolRecyclage.length]);
      i++;
      if (i > count * 4) break; // sécurité anti-boucle infinie
    }
  }

  // 5. Enforcement des plafonds adaptatifs puis mapping
  const finalSelected = enforceAdaptiveCaps(selected.slice(0, count), poolComplet, resolvedNeeds, count);
  return finalSelected.map((e, i): SelectedBankExercise => ({
    ordre:            ordreDebut + i,
    matiere:          "Français" as Matiere,
    sous_matiere:     SOUS_DOMAINE_LABELS[e.sous_domaine] ?? "Français",
    type:             "qcm" as TypeExercice,
    enonce:           `${e.consigne} ${e.question}`,
    options:          e.options,
    reponse_correcte: e.bonne_reponse,
    explication:      e.explication,
    _bank_id:         e.id,
    _debug_classe:    e.niveau,
    _debug_skill:     e.sous_domaine,
    meta:             e.meta,
  }));
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Mélange un tableau de façon aléatoire (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Sélectionne des exercices depuis `pool` en maximisant la diversité des skills.
 * Priorité : skills dans SKILL_PRIORITY_ORDER non encore utilisés.
 * Puis complète avec n'importe quel exercice non encore sélectionné.
 * Modifie `selected` et `usedSkills` en place.
 */
function selectWithSkillDiversity(
  pool: Exercise[],
  count: number,
  selected: Exercise[],
  usedSkills: Set<string>,
): void {
  // Passe 1 : un exercice par skill prioritaire, dans l'ordre de priorité
  for (const skill of SKILL_PRIORITY_ORDER) {
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

  // Passe 2 : skills restants (hors liste de priorité ou déjà couverts mais besoin de plus)
  for (const ex of pool) {
    if (selected.length >= count) break;
    if (!usedSkills.has(ex.sous_domaine)) {
      selected.push(ex);
      usedSkills.add(ex.sous_domaine);
    }
  }

  // Passe 3 : compléter si encore insuffisant (skills déjà couverts autorisés)
  for (const ex of pool) {
    if (selected.length >= count) break;
    if (!selected.includes(ex)) selected.push(ex);
  }
}
