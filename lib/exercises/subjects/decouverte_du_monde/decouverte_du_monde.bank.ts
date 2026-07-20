import type { DecouverteExercise } from './decouverte_du_monde.types';
import { ddmCpExercises } from './cp';
import { ddmCe1Exercises } from './ce1';
import { ddmCe2Exercises } from './ce2';
import { ddmCm1Exercises } from './cm1';
import { ddmCm2Exercises } from './cm2';

export const decouverteDuMondeExercises: DecouverteExercise[] = [
  ...ddmCpExercises,
  ...ddmCe1Exercises,
  ...ddmCe2Exercises,
  ...ddmCm1Exercises,
  ...ddmCm2Exercises,
];
