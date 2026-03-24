import { EXERCISE_BANK } from "./bank";
import { Exercise } from "./types";
import { validateExercise } from "./validator";

export function fallbackExercise(): Exercise {
  const safeExercise = EXERCISE_BANK.find(validateExercise);

  if (!safeExercise) {
    throw new Error("Aucun exercice valide trouvé dans EXERCISE_BANK.");
  }

  return safeExercise;
}