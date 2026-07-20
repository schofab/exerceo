import type { EnglishExercise } from './english.types';
import { englishCpExercises } from './cp';
import { englishCe1Exercises } from './ce1';
import { englishCe2Exercises } from './ce2';
import { englishCm1Exercises } from './cm1';
import { englishCm2Exercises } from './cm2';

export const englishExercises: EnglishExercise[] = [
  ...englishCpExercises,
  ...englishCe1Exercises,
  ...englishCe2Exercises,
  ...englishCm1Exercises,
  ...englishCm2Exercises,
];
