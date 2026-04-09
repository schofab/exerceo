import {
  validateExerciseBase,
  validateExerciseByFormat,
} from '../../core/exercise-core.validation';
import type { ExerciseValidationResult } from '../../core/exercise-core.types';
import type { MathExercise } from './maths.types';

export function validateMathExercise(
  exercise: MathExercise
): ExerciseValidationResult {
  const errors: string[] = [
    ...validateExerciseBase(exercise),
    ...validateExerciseByFormat(exercise),
  ];

  // subject
  if (!exercise.subject || exercise.subject !== 'mathematiques') {
    errors.push('subject invalide : doit être "mathematiques"');
  }
  // title
  if (!exercise.title?.trim()) {
    errors.push('title manquant');
  }
  // subskill
  if (!exercise.subskill?.trim()) {
    errors.push('subskill manquant');
  }
  // hint (recommandé)
  if (!exercise.hint?.trim()) {
    errors.push('hint manquant (recommandé)');
  }
  // adaptations
  if (!exercise.adaptations || exercise.adaptations.length === 0) {
    errors.push('adaptations manquantes');
  }
  // estimatedMinutes cohérent
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

export function validateMathBank(
  exercises: MathExercise[]
): ExerciseValidationResult[] {
  return exercises.map(validateMathExercise);
}

export function getMathBankValidationSummary(exercises: MathExercise[]): {
  total: number;
  valid: number;
  invalid: number;
  invalidExercises: ExerciseValidationResult[];
} {
  const results = validateMathBank(exercises);
  const invalidExercises = results.filter((r) => !r.valid);
  return {
    total: results.length,
    valid: results.length - invalidExercises.length,
    invalid: invalidExercises.length,
    invalidExercises,
  };
}
