import type { DifficultyTier, ExerciseFormat, ExerciseMeta, GuidanceLevel, LoadLevel } from './exercise-core.types';

/**
 * Paramètres minimaux nécessaires pour dériver les métadonnées adaptatives.
 * Compatible avec BaseExercise et toutes ses extensions.
 */
interface ExerciseMetaInput {
  format: ExerciseFormat;
  skill: string;
  subject: string;
  difficulty_tier?: DifficultyTier;
  meta?: ExerciseMeta;
}

/**
 * Retourne les métadonnées adaptatives d'un exercice.
 *
 * Priorité :
 *   1. `meta` explicite sur l'exercice (défini à l'édition)
 *   2. Heuristiques dérivées depuis `format`, `skill`, `subject`, `difficulty_tier`
 *
 * Backward-compatible : fonctionne si `meta` est absent.
 * Les heuristiques sont conservatrices — en cas de doute, le champ est omis.
 */
export function getExerciseMeta(exercise: ExerciseMetaInput): ExerciseMeta {
  if (exercise.meta) return exercise.meta;
  return deriveExerciseMeta(exercise);
}

function deriveExerciseMeta({ format, skill, subject, difficulty_tier }: ExerciseMetaInput): ExerciseMeta {
  const result: ExerciseMeta = {};

  // ── textLoad ──────────────────────────────────────────────────────────────
  // Basé sur le skill et le format. Heuristiques fiables uniquement.
  const textLoadHigh: string[] = ['lecture', 'comprehension'];
  const textLoadMedium: string[] = ['problemes', 'expression_ecrite'];

  if (textLoadHigh.includes(skill)) {
    result.textLoad = 'high';
  } else if (textLoadMedium.includes(skill)) {
    result.textLoad = 'medium';
  } else if (format === 'fill_in_blank' || format === 'short_answer') {
    // Ces formats nécessitent de lire un contexte, même pour des compétences simples
    result.textLoad = 'medium';
  } else {
    // QCM standard, consigne courte
    result.textLoad = 'low';
  }

  // ── numericLoad ───────────────────────────────────────────────────────────
  // Uniquement pour les Maths. Pas de numericLoad artificiel sur les autres matières.
  if (subject === 'mathematiques') {
    if (skill === 'calcul') {
      const map: Record<DifficultyTier, LoadLevel> = {
        foundation: 'low',
        standard: 'medium',
        advanced: 'high',
      };
      result.numericLoad = difficulty_tier ? map[difficulty_tier] : 'medium';
    } else if (skill === 'problemes') {
      result.numericLoad = difficulty_tier === 'advanced' ? 'high' : 'medium';
    } else if (skill === 'numeration') {
      result.numericLoad = 'medium';
    } else if (skill === 'fractions') {
      result.numericLoad = difficulty_tier === 'foundation' ? 'medium' : 'high';
    } else if (skill === 'mesures' || skill === 'geometrie' || skill === 'logique') {
      result.numericLoad = 'low';
    }
    // statistiques, proportionnalite, etc. → non renseigné (trop incertain)
  }

  // ── visualLoad ────────────────────────────────────────────────────────────
  // Uniquement quand la charge visuo-spatiale est clairement impliquée.
  if (skill === 'geometrie') {
    result.visualLoad = difficulty_tier === 'advanced' ? 'high' : 'medium';
  } else if (skill === 'espace' || skill === 'reperes') {
    // DDM : espace et repères impliquent de la lecture de carte ou de plan
    result.visualLoad = 'medium';
  } else if (skill === 'geographie') {
    // HG géographie : cartes, reliefs, régions
    result.visualLoad = 'medium';
  }
  // Les autres skills n'ont pas de charge visuo-spatiale significative → non renseigné

  // ── guidance ──────────────────────────────────────────────────────────────
  if (skill === 'expression_ecrite' || format === 'short_answer') {
    result.guidance = 'open';
  } else {
    // qcm, fill_in_blank, conjugaison → réponse contrainte
    result.guidance = 'guided';
  }

  return result;
}

/**
 * Vérifie si un exercice a une charge textuelle élevée.
 * Utile pour les règles d'adaptation dyslexie / dysorthographie.
 */
export function hasHighTextLoad(exercise: ExerciseMetaInput): boolean {
  return getExerciseMeta(exercise).textLoad === 'high';
}

/**
 * Vérifie si un exercice a une charge numérique élevée.
 * Utile pour les règles d'adaptation dyscalculie.
 */
export function hasHighNumericLoad(exercise: ExerciseMetaInput): boolean {
  return getExerciseMeta(exercise).numericLoad === 'high';
}
