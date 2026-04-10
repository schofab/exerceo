import type { BaseExercise } from '../../core/exercise-core.types';

export type DecouverteSkill =
  | 'temps'
  | 'espace'
  | 'reperes';

export interface DecouverteExercise extends BaseExercise<DecouverteSkill> {
  subject: 'decouverte_du_monde';
}
