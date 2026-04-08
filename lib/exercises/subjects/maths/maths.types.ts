import type { BaseExercise } from '../../core/exercise-core.types';

export type MathSkill =
  | 'numeration'
  | 'calcul'
  | 'geometrie'
  | 'mesures'
  | 'problemes'
  | 'logique';

export interface MathExercise extends BaseExercise<MathSkill> {
  subject: 'mathematiques';
}
