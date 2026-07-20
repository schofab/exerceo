import {
  validateExerciseBase,
  validateExerciseByFormat,
} from '../../core/exercise-core.validation';
import type { ExerciseValidationResult } from '../../core/exercise-core.types';
import type { HgExercise } from './hg.types';

export function validateHgExercise(exercise: HgExercise): ExerciseValidationResult {
  const errors: string[] = [
    ...validateExerciseBase(exercise),
    ...validateExerciseByFormat(exercise),
  ];

  if (!exercise.subject || exercise.subject !== 'histoire_geo') {
    errors.push('subject invalide : doit être "histoire_geo"');
  }
  if (!exercise.title?.trim()) {
    errors.push('title manquant');
  }
  if (!exercise.subskill?.trim()) {
    errors.push('subskill manquant');
  }
  if (!exercise.hint?.trim()) {
    errors.push('hint manquant (recommandé)');
  }
  if (!exercise.adaptations || exercise.adaptations.length === 0) {
    errors.push('adaptations manquantes');
  }
  if (
    typeof exercise.estimatedMinutes !== 'number' ||
    exercise.estimatedMinutes <= 0 ||
    exercise.estimatedMinutes > 15
  ) {
    errors.push('estimatedMinutes invalide (doit être entre 1 et 15)');
  }

  return {
    exerciseId: exercise.id,
    valid: errors.length === 0,
    errors,
  };
}

export function validateHgBank(exercises: HgExercise[]): ExerciseValidationResult[] {
  return exercises.map(validateHgExercise);
}

export function getHgBankValidationSummary(exercises: HgExercise[]): {
  total: number;
  valid: number;
  invalid: number;
  invalidExercises: ExerciseValidationResult[];
} {
  const results = validateHgBank(exercises);
  const invalidExercises = results.filter((r) => !r.valid);
  return {
    total: results.length,
    valid: results.length - invalidExercises.length,
    invalid: invalidExercises.length,
    invalidExercises,
  };
}
