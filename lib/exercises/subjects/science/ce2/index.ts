import type { ScienceExercise } from '../science.types';
import { scienceCe2CorpsExercises } from './ce2.corps.bank';
import { scienceCe2EnvironnementExercises } from './ce2.environnement.bank';
import { scienceCe2MatiereExercises } from './ce2.matiere.bank';
import { scienceCe2TerreExercises } from './ce2.terre.bank';
import { scienceCe2VivantExercises } from './ce2.vivant.bank';

export const scienceCe2Exercises: ScienceExercise[] = [
  ...scienceCe2CorpsExercises,
  ...scienceCe2EnvironnementExercises,
  ...scienceCe2MatiereExercises,
  ...scienceCe2TerreExercises,
  ...scienceCe2VivantExercises,
];
