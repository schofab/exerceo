import {
  validateExerciseBase,
  validateExerciseByFormat,
} from '../../core/exercise-core.validation';
import type { ExerciseValidationResult } from '../../core/exercise-core.types';
import type { FrenchExercise } from './french.types';

export function validateFrenchExercise(
  exercise: FrenchExercise
): ExerciseValidationResult {
  const errors: string[] = [
    ...validateExerciseBase(exercise),
    ...validateExerciseByFormat(exercise),
  ];

  // French-specific: subject must be 'francais'
  if (!exercise.subject || exercise.subject !== 'francais') {
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

export function validateFrenchBank(
  exercises: FrenchExercise[]
): ExerciseValidationResult[] {
  return exercises.map(validateFrenchExercise);
}

export function getFrenchBankValidationSummary(
  exercises: FrenchExercise[]
): {
  total: number;
  valid: number;
  invalid: number;
  errors: ExerciseValidationResult[];
} {
  const results = validateFrenchBank(exercises);
  const invalid = results.filter((r) => !r.valid);
  return {
    total: results.length,
    valid: results.length - invalid.length,
    invalid: invalid.length,
    errors: invalid,
  };
}
