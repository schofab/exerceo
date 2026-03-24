import { Exercise } from "./types";

export function validateExercise(exercise: Exercise): boolean {
  if (!exercise) return false;

  if (!exercise.id.trim()) return false;
  if (!exercise.consigne.trim()) return false;
  if (!exercise.question.trim()) return false;
  if (!exercise.explication.trim()) return false;

  if (!Array.isArray(exercise.options)) return false;
  if (exercise.options.length < 2) return false;

  const normalizedOptions = exercise.options.map((o) => o.trim());
  const uniqueOptions = new Set(normalizedOptions);

  if (uniqueOptions.size !== normalizedOptions.length) return false;
  if (!normalizedOptions.includes(exercise.bonne_reponse.trim())) return false;

  return true;
}