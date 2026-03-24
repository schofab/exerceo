import { EXERCISE_BANK } from "./bank";
import { fallbackExercise } from "./fallback";
import { Exercise, GenerateExerciseParams } from "./types";
import { validateExercise } from "./validator";

const SENSITIVE_NOTIONS = [
  "ses_ces",
  "cest_sest",
  "a_a",
  "et_est",
  "son_sont",
  "on_ont",
];

function pickRandom<T>(items: T[]): T | null {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

export function generateExercise(params: GenerateExerciseParams): Exercise {
  const { niveau, sous_domaine, notion } = params;

  let candidates = EXERCISE_BANK.filter((e) => e.niveau === niveau);

  if (sous_domaine) {
    candidates = candidates.filter((e) => e.sous_domaine === sous_domaine);
  }

  if (notion) {
    candidates = candidates.filter((e) => e.notion === notion);
  }

  // Pour les notions sensibles, on ne sort jamais de la banque validée.
  if (notion && SENSITIVE_NOTIONS.includes(notion)) {
    const secureExercise = pickRandom(candidates);
    if (secureExercise && validateExercise(secureExercise)) {
      return secureExercise;
    }
    return fallbackExercise();
  }

  const exercise = pickRandom(candidates);

  if (exercise && validateExercise(exercise)) {
    return exercise;
  }

  return fallbackExercise();
}