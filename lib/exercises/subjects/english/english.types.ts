import type { BaseExercise } from '../../core/exercise-core.types';

export type EnglishSkill =
  | 'vocabulaire'
  | 'grammaire'
  | 'comprehension';

export interface EnglishExercise extends BaseExercise<EnglishSkill> {
  subject: 'anglais';
}
