import type { MathExercise } from './maths.types';
import { mathsCpExercises } from './cp';
import { mathsCe1Exercises } from './ce1';
import { mathsCe2Exercises } from './ce2';
import { mathsCm1Exercises } from './cm1';
import { mathsCm2Exercises } from './cm2';

export const mathsExercises: MathExercise[] = [
  ...mathsCpExercises,
  ...mathsCe1Exercises,
  ...mathsCe2Exercises,
  ...mathsCm1Exercises,
  ...mathsCm2Exercises,
];
