import type { BaseExercise } from '../../core/exercise-core.types';

export type ScienceSkill =
  | 'vivant'
  | 'corps'
  | 'environnement'
  | 'matiere';

export interface ScienceExercise extends BaseExercise<ScienceSkill> {
  subject: 'sciences';
}
