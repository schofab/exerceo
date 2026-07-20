import type { ScienceExercise } from '../science.types';
import { scienceCpCorpsExercises } from './cp.corps.bank';
import { scienceCpEnvironnementExercises } from './cp.environnement.bank';
import { scienceCpMatiereExercises } from './cp.matiere.bank';
import { scienceCpTerreExercises } from './cp.terre.bank';
import { scienceCpVivantExercises } from './cp.vivant.bank';

export const scienceCpExercises: ScienceExercise[] = [
  ...scienceCpCorpsExercises,
  ...scienceCpEnvironnementExercises,
  ...scienceCpMatiereExercises,
  ...scienceCpTerreExercises,
  ...scienceCpVivantExercises,
];
