/**
 * lib/exercises/french-selector.ts
 *
 * Sélectionne des exercices de Français UNIQUEMENT depuis EXERCISE_BANK (bank.ts).
 * Aucune génération IA — source unique, statique et validée avant affichage.
 */

import { EXERCISE_BANK } from "./bank";
import { validateExercise } from "./validator";
import type { Exercise, SousDomaine } from "./types";
import type { ExerciceGenere, Matiere, TypeExercice } from "../types";

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

/** ExerciceGenere enrichi de son identifiant bank.ts (pour le debug) */
export interface SelectedBankExercise extends ExerciceGenere {
  _bank_id: string;
}

/**
 * Sélectionne `count` exercices de Français depuis EXERCISE_BANK.
 *
 * Garanties :
 * - Filtrés par classe (CP → CM2)
 * - Validés via validateExercise() avant sélection
 * - Diversité de sous-domaines priorisée
 * - Fallback sur toute la banque si pas assez d'exercices pour la classe
 * - Jamais d'exercice invalide retourné
 */
export function selectFrenchExercises(
  classe: string,       // "CP" | "CE1" | "CE2" | "CM1" | "CM2"
  count: number,
  ordreDebut: number = 1,
): SelectedBankExercise[] {
  // 1. Pool filtré par classe + validé
  let pool = EXERCISE_BANK.filter(e => e.niveau === classe && validateExercise(e));

  // 2. Fallback sur toute la banque validée si insuffisant pour la classe
  if (pool.length < count) {
    console.warn(
      `[EXERCEO] Seulement ${pool.length} exercices valides pour classe=${classe}, `
      + `fallback sur toute la banque.`
    );
    pool = EXERCISE_BANK.filter(e => validateExercise(e));
  }

  if (pool.length === 0) {
    console.error("[EXERCEO] CRITIQUE : EXERCISE_BANK vide ou aucun exercice ne passe la validation.");
    return [];
  }

  // 3. Mélange aléatoire
  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  // 4. Sélection avec diversité de sous-domaines (un par domaine en priorité)
  const selected: Exercise[] = [];
  const usedSousDomaines = new Set<string>();

  for (const ex of shuffled) {
    if (selected.length >= count) break;
    if (!usedSousDomaines.has(ex.sous_domaine)) {
      selected.push(ex);
      usedSousDomaines.add(ex.sous_domaine);
    }
  }

  // 5. Compléter si la diversité est épuisée
  for (const ex of shuffled) {
    if (selected.length >= count) break;
    if (!selected.includes(ex)) selected.push(ex);
  }

  // 6. Mapper vers ExerciceGenere
  return selected.slice(0, count).map((e, i): SelectedBankExercise => ({
    ordre:            ordreDebut + i,
    matiere:          "Français" as Matiere,
    sous_matiere:     SOUS_DOMAINE_LABELS[e.sous_domaine] ?? "Français",
    type:             "qcm" as TypeExercice,
    // Consigne + question combinées — affichées telles quelles dans ExerciceCard
    enonce:           `${e.consigne} ${e.question}`,
    options:          e.options,
    reponse_correcte: e.bonne_reponse,
    explication:      e.explication,
    _bank_id:         e.id,
  }));
}
