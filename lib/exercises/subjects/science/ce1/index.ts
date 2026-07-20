import type { ScienceExercise } from '../science.types';
import { scienceCe1CorpsExercises } from './ce1.corps.bank';
import { scienceCe1EnvironnementExercises } from './ce1.environnement.bank';
import { scienceCe1MatiereExercises } from './ce1.matiere.bank';
import { scienceCe1TerreExercises } from './ce1.terre.bank';
import { scienceCe1VivantExercises } from './ce1.vivant.bank';

export const scienceCe1Exercises: ScienceExercise[] = [
  ...scienceCe1CorpsExercises,
  ...scienceCe1EnvironnementExercises,
  ...scienceCe1MatiereExercises,
  ...scienceCe1TerreExercises,
  ...scienceCe1VivantExercises,
];
