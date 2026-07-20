import type { FrenchExercise } from './french.types';
import { frenchCpExercises } from './cp';
import { frenchCe1Exercises } from './ce1';
import { frenchCe2Exercises } from './ce2';
import { frenchCm1Exercises } from './cm1';
import { frenchCm2Exercises } from './cm2';

export const frenchExercises: FrenchExercise[] = [
  ...frenchCpExercises,
  ...frenchCe1Exercises,
  ...frenchCe2Exercises,
  ...frenchCm1Exercises,
  ...frenchCm2Exercises,
];
