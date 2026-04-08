import type { ExerciseProfileAdaptation, LearningProfile } from './exercise-core.types';

export const DEFAULT_ADAPTATIONS: ExerciseProfileAdaptation[] = [
  { profile: 'standard' as LearningProfile },
  {
    profile: 'lecture_simplifiee' as LearningProfile,
    instruction: 'Lis bien. Fais un petit exercice à la fois.',
    reducedChoices: true,
    maxChoices: 2,
    shorterContent: true,
    extraHint: 'Prends ton temps.',
  },
  {
    profile: 'attention_courte' as LearningProfile,
    instruction: 'Exercice court. Trouve vite la bonne réponse.',
    reducedChoices: true,
    maxChoices: 2,
    extraHint: 'Concentre-toi sur un seul indice.',
  },
  {
    profile: 'progressif' as LearningProfile,
    instruction: 'Avance étape par étape.',
    splitSteps: ["Lis.", "Cherche l'indice.", "Réponds."],
    extraHint: 'Tu peux relire avant de répondre.',
  },
  {
    profile: 'defi_avance' as LearningProfile,
    instruction: 'Trouve la bonne réponse, puis fais le petit défi bonus.',
    challengeExtension: 'Explique pourquoi ta réponse est correcte.',
  },
];

export function cloneDefaultAdaptations(
  overrides?: Partial<Record<LearningProfile, Partial<ExerciseProfileAdaptation>>>
): ExerciseProfileAdaptation[] {
  if (!overrides) return DEFAULT_ADAPTATIONS.map((a) => ({ ...a }));
  return DEFAULT_ADAPTATIONS.map((a) => {
    const o = overrides[a.profile];
    return o ? { ...a, ...o, profile: a.profile } : { ...a };
  });
}
