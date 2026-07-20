import type { BaseExercise } from '../../core/exercise-core.types';

export type HgSkill = 'histoire' | 'geographie';

export interface HgExercise extends BaseExercise<HgSkill> {
  subject: 'histoire_geo';
}
