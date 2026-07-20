import type { MathExercise } from '../maths.types';
import { mathsCm2NumerationExercises } from './cm2.numeration.bank';
import { mathsCm2CalculExercises } from './cm2.calcul.bank';
import { mathsCm2GeometrieExercises } from './cm2.geometrie.bank';
import { mathsCm2MesuresExercises } from './cm2.mesures.bank';
import { mathsCm2LogiqueExercises } from './cm2.logique.bank';
import { mathsCm2ProblemesExercises } from './cm2.problemes.bank';
import { mathsCm2StatistiquesExercises } from './cm2.statistiques.bank';
import { mathsCm2ProportionnaliteExercises } from './cm2.proportionnalite.bank';

export const mathsCm2Exercises: MathExercise[] = [
  ...mathsCm2NumerationExercises,
  ...mathsCm2CalculExercises,
  ...mathsCm2GeometrieExercises,
  ...mathsCm2MesuresExercises,
  ...mathsCm2LogiqueExercises,
  ...mathsCm2ProblemesExercises,
  ...mathsCm2StatistiquesExercises,
  ...mathsCm2ProportionnaliteExercises,
];
