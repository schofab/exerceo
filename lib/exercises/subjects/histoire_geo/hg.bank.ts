import type { HgExercise } from './hg.types';
import { hgCe2Exercises } from './ce2';
import { hgCm1Exercises } from './cm1';
import { hgCm2Exercises } from './cm2';

export const hgExercises: HgExercise[] = [
  ...hgCe2Exercises,
  ...hgCm1Exercises,
  ...hgCm2Exercises,
];
