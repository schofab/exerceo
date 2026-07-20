import type { MathExercise } from '../maths.types';
import { mathsCe1NumerationExercises } from './ce1.numeration.bank';
import { mathsCe1CalculExercises } from './ce1.calcul.bank';
import { mathsCe1GeometrieExercises } from './ce1.geometrie.bank';
import { mathsCe1MesuresExercises } from './ce1.mesures.bank';
import { mathsCe1LogiqueExercises } from './ce1.logique.bank';
import { mathsCe1ProblemesExercises } from './ce1.problemes.bank';

export const mathsCe1Exercises: MathExercise[] = [
  ...mathsCe1NumerationExercises,
  ...mathsCe1CalculExercises,
  ...mathsCe1GeometrieExercises,
  ...mathsCe1MesuresExercises,
  ...mathsCe1LogiqueExercises,
  ...mathsCe1ProblemesExercises,
];
