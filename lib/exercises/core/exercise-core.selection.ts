import type {
  GeneralLevel,
  ExerciseOption,
  ExerciseProfileAdaptation,
  StudentProfile,
} from './exercise-core.types';

export const DIVERSITY_CONFIG = {
  /** Pénalité si l'id exact est dans l'historique récent. */
  ID_PENALTY: 100,
  /** Pénalité par occurrence du même subskill dans l'historique récent. */
  SUBSKILL_PENALTY: 25,
  /** Pénalité par tag partagé avec l'historique récent. */
  TAG_PENALTY: 5,
  /** Nombre de candidats scorés conservés avant la sélection gloutonne. */
  CANDIDATE_POOL_SIZE: 20,
  /** Max exercices avec le même subskill dans une même session. */
  MAX_SAME_SUBSKILL: 2,
} as const;

export interface ExerciseSelectionHistory {
  /** IDs des exercices servis récemment (fenêtre décidée par l'appelant). */
  recentExerciseIds: string[];
  /**
   * Subskills vues récemment (optionnel).
   * Si absent, recalculé automatiquement depuis recentExerciseIds + la banque.
   */
  recentSubskills?: string[];
  /**
   * Tags vus récemment (optionnel).
   * Si absent, recalculé automatiquement depuis recentExerciseIds + la banque.
   */
  recentTags?: string[];
}

export function normalizeList(values?: string[]): string[] {
  return (values ?? []).map((v) => v.trim().toLowerCase());
}

export function matchesLevel(
  exerciseLevel: GeneralLevel,
  profileLevel: GeneralLevel
): boolean {
  if (profileLevel === 'beginner') return exerciseLevel === 'beginner';
  if (profileLevel === 'intermediate') {
    return exerciseLevel === 'beginner' || exerciseLevel === 'intermediate';
  }
  return true; // advanced accepte tous les niveaux
}

export function chooseOptionsForProfile(
  options: ExerciseOption[] | undefined,
  adaptation?: ExerciseProfileAdaptation
): ExerciseOption[] | undefined {
  if (!options) return options;
  if (!adaptation?.reducedChoices || !adaptation.maxChoices) return options;
  const correct = options.find((o) => o.isCorrect);
  const incorrect = options.filter((o) => !o.isCorrect);
  if (!correct) return options;
  return [correct, ...incorrect.slice(0, Math.max(0, adaptation.maxChoices - 1))];
}

export function personalizeText(text: string, profile: StudentProfile): string {
  if (!profile.firstName) return text;
  return text.replace(/\bEmma\b/g, profile.firstName);
}
