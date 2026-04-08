import type { ExerciseProfileAdaptation, LearningProfile } from './exercise-core.types';

export const DEFAULT_ADAPTATIONS: ExerciseProfileAdaptation[] = [
  { profile: 'standard' },
  {
    profile: 'lecture_simplifiee',
    instruction: 'Lis bien la phrase puis réponds.',
    extraHint: 'Prends ton temps, tu peux relire plusieurs fois.',
    reducedChoices: true,
    maxChoices: 2,
  },
  {
    profile: 'attention_courte',
    instruction: 'Lis vite la phrase et choisis ta réponse.',
    extraHint: 'Concentre-toi sur les mots importants.',
    reducedChoices: true,
    maxChoices: 3,
  },
  {
    profile: 'progressif',
    extraHint: 'Cherche les indices dans la phrase.',
  },
  {
    profile: 'defi_avance',
    extraHint: "Explique ensuite ta réponse à l'oral.",
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
