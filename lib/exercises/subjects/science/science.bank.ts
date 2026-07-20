import type { ScienceExercise } from './science.types';
import { scienceCpExercises } from './cp';
import { scienceCe1Exercises } from './ce1';
import { scienceCe2Exercises } from './ce2';
import { scienceCm1Exercises } from './cm1';
import { scienceCm2Exercises } from './cm2';

export const scienceExercises: ScienceExercise[] = [
  ...scienceCpExercises,
  ...scienceCe1Exercises,
  ...scienceCe2Exercises,
  ...scienceCm1Exercises,
  ...scienceCm2Exercises,
];
