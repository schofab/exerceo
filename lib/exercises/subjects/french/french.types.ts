import type { BaseExercise } from '../../core/exercise-core.types';

export type FrenchSkill =
  | 'lecture'
  | 'orthographe'
  | 'grammaire'
  | 'conjugaison'
  | 'vocabulaire'
  | 'expression_ecrite';

export interface FrenchExercise extends BaseExercise<FrenchSkill> {
  subject: 'francais';
}
