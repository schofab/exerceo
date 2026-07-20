import type { ScienceExercise } from '../science.types';
import { scienceCm2CorpsExercises } from './cm2.corps.bank';
import { scienceCm2EnvironnementExercises } from './cm2.environnement.bank';
import { scienceCm2MatiereExercises } from './cm2.matiere.bank';
import { scienceCm2TerreExercises } from './cm2.terre.bank';
import { scienceCm2VivantExercises } from './cm2.vivant.bank';

export const scienceCm2Exercises: ScienceExercise[] = [
  ...scienceCm2CorpsExercises,
  ...scienceCm2EnvironnementExercises,
  ...scienceCm2MatiereExercises,
  ...scienceCm2TerreExercises,
  ...scienceCm2VivantExercises,
];
