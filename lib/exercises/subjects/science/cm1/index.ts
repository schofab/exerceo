import type { ScienceExercise } from '../science.types';
import { scienceCm1CorpsExercises } from './cm1.corps.bank';
import { scienceCm1EnvironnementExercises } from './cm1.environnement.bank';
import { scienceCm1MatiereExercises } from './cm1.matiere.bank';
import { scienceCm1TerreExercises } from './cm1.terre.bank';
import { scienceCm1VivantExercises } from './cm1.vivant.bank';

export const scienceCm1Exercises: ScienceExercise[] = [
  ...scienceCm1CorpsExercises,
  ...scienceCm1EnvironnementExercises,
  ...scienceCm1MatiereExercises,
  ...scienceCm1TerreExercises,
  ...scienceCm1VivantExercises,
];
