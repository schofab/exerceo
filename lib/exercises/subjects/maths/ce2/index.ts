import type { MathExercise } from '../maths.types';
import { mathsCe2NumerationExercises } from './ce2.numeration.bank';
import { mathsCe2CalculExercises } from './ce2.calcul.bank';
import { mathsCe2GeometrieExercises } from './ce2.geometrie.bank';
import { mathsCe2MesuresExercises } from './ce2.mesures.bank';
import { mathsCe2LogiqueExercises } from './ce2.logique.bank';
import { mathsCe2ProblemesExercises } from './ce2.problemes.bank';

export const mathsCe2Exercises: MathExercise[] = [
  ...mathsCe2NumerationExercises,
  ...mathsCe2CalculExercises,
  ...mathsCe2GeometrieExercises,
  ...mathsCe2MesuresExercises,
  ...mathsCe2LogiqueExercises,
  ...mathsCe2ProblemesExercises,
];
