import {
  validateExerciseBase,
  validateExerciseByFormat,
} from '../../core/exercise-core.validation';
import type { ExerciseValidationResult } from '../../core/exercise-core.types';
import type { EnglishExercise } from './english.types';

export function validateEnglishExercise(
  exercise: EnglishExercise
): ExerciseValidationResult {
  const errors: string[] = [
    ...validateExerciseBase(exercise),
    ...validateExerciseByFormat(exercise),
  ];

  if (!exercise.subject || exercise.subject !== 'anglais') {
    errors.push('subject invalide : doit être "anglais"');
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

export function validateEnglishBank(
  exercises: EnglishExercise[]
): ExerciseValidationResult[] {
  return exercises.map(validateEnglishExercise);
}

export function getEnglishBankValidationSummary(exercises: EnglishExercise[]): {
  total: number;
  valid: number;
  invalid: number;
  invalidExercises: ExerciseValidationResult[];
} {
  const results = validateEnglishBank(exercises);
  const invalidExercises = results.filter((r) => !r.valid);
  return {
    total: results.length,
    valid: results.length - invalidExercises.length,
    invalid: invalidExercises.length,
    invalidExercises,
  };
}
