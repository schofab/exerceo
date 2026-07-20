import type { MathExercise } from '../maths.types';
import { mathsCpNombres10Exercises } from './cp.nombres10.bank';
import { mathsCpNombres20Exercises } from './cp.nombres20.bank';
import { mathsCpNombres30Exercises } from './cp.nombres30.bank';
import { mathsCpAdditionsExercises } from './cp.additions.bank';
import { mathsCpSoustractionsExercises } from './cp.soustractions.bank';
import { mathsCpProblemesExercises } from './cp.problemes.bank';
import { mathsCpFacteurs2Exercises } from './cp.facteurs2.bank';
import { mathsCpGeometrieExercises } from './cp.geometrie.bank';
import { mathsCpGrandeursExercises } from './cp.grandeurs.bank';
import { mathsCpDonneesExercises } from './cp.donnees.bank';

export const mathsCpExercises: MathExercise[] = [
  ...mathsCpNombres10Exercises,
  ...mathsCpNombres20Exercises,
  ...mathsCpNombres30Exercises,
  ...mathsCpAdditionsExercises,
  ...mathsCpSoustractionsExercises,
  ...mathsCpProblemesExercises,
  ...mathsCpFacteurs2Exercises,
  ...mathsCpGeometrieExercises,
  ...mathsCpGrandeursExercises,
  ...mathsCpDonneesExercises,
];
