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

  // Math-specific: subject must be 'mathematiques'
  if (!exercise.subject || exercise.subject !== 'mathematiques') {
    errors.push('subject invalide');
  }
  // title check (not in base)
  if (!exercise.title) {
    errors.push('title manquant');
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

export function getMathBankValidationSummary(
  exercises: MathExercise[]
): {
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
