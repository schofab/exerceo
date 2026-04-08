import type { BaseExercise, ExerciseValidationResult } from './exercise-core.types';

/**
 * Validates QCM options: at least 2, exactly 1 isCorrect, no empty texts, no duplicates,
 * and correctAnswer (if string) present among options.
 */
export function validateQcmOptions(exercise: BaseExercise): string[] {
  const errors: string[] = [];
  if (!exercise.options || exercise.options.length < 2) {
    errors.push('QCM sans options suffisantes');
    return errors;
  }
  const correctOptions = exercise.options.filter((o) => o.isCorrect);
  if (correctOptions.length !== 1) {
    errors.push('QCM invalide : il doit y avoir exactement une seule bonne réponse');
  }
  const optionTexts = new Set<string>();
  for (const option of exercise.options) {
    if (!option.text?.trim()) {
      errors.push(`Option vide dans ${exercise.id}`);
    }
    const normalized = option.text.trim().toLowerCase();
    if (optionTexts.has(normalized)) {
      errors.push(`Options dupliquées dans ${exercise.id}`);
    }
    optionTexts.add(normalized);
  }
  if (typeof exercise.correctAnswer === 'string') {
    const exists = exercise.options.some(
      (o) =>
        o.text.trim().toLowerCase() ===
        (exercise.correctAnswer as string).trim().toLowerCase()
    );
    if (!exists) {
      errors.push("correctAnswer n'est pas présent dans les options");
    }
  }
  return errors;
}

/**
 * Validates mandatory base fields present on any exercise.
 */
export function validateExerciseBase(exercise: BaseExercise): string[] {
  const errors: string[] = [];
  if (!exercise.id) errors.push('id manquant');
  if (!exercise.subject) errors.push('subject manquant');
  if (!exercise.schoolClass) errors.push('schoolClass manquant');
  if (!exercise.generalLevel) errors.push('generalLevel manquant');
  if (!exercise.skill) errors.push('skill manquant');
  if (!exercise.format) errors.push('format manquant');
  if (!exercise.instructions) errors.push('instructions manquantes');
  if (!exercise.prompt) errors.push('prompt manquant');
  if (!exercise.explanation) errors.push('explanation manquante');
  return errors;
}

/**
 * Delegates validation to the appropriate format validator.
 */
export function validateExerciseByFormat(exercise: BaseExercise): string[] {
  switch (exercise.format) {
    case 'qcm':
      return validateQcmOptions(exercise);
    case 'fill_in_blank':
      if (!exercise.correctAnswer || typeof exercise.correctAnswer !== 'string') {
        return ['fill_in_blank sans correctAnswer texte'];
      }
      return [];
    case 'short_answer':
      if (!exercise.correctAnswer) {
        return ['short_answer sans correctAnswer indicatif'];
      }
      return [];
    default:
      return [];
  }
}

