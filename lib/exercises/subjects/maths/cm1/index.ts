import type { MathExercise } from '../maths.types';
import { mathsCm1NumerationExercises } from './cm1.numeration.bank';
import { mathsCm1CalculExercises } from './cm1.calcul.bank';
import { mathsCm1GeometrieExercises } from './cm1.geometrie.bank';
import { mathsCm1MesuresExercises } from './cm1.mesures.bank';
import { mathsCm1LogiqueExercises } from './cm1.logique.bank';
import { mathsCm1ProblemesExercises } from './cm1.problemes.bank';
import { mathsCm1StatistiquesExercises } from './cm1.statistiques.bank';

export const mathsCm1Exercises: MathExercise[] = [
  ...mathsCm1NumerationExercises,
  ...mathsCm1CalculExercises,
  ...mathsCm1GeometrieExercises,
  ...mathsCm1MesuresExercises,
  ...mathsCm1LogiqueExercises,
  ...mathsCm1ProblemesExercises,
  ...mathsCm1StatistiquesExercises,
];
