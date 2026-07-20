import type { FrenchExercise } from '../french.types';
import { frenchCm2ConjugaisonExercises } from './cm2.conjugaison.bank';
import { frenchCm2GrammaireExercises } from './cm2.grammaire.bank';
import { frenchCm2OrthographeExercises } from './cm2.orthographe.bank';
import { frenchCm2VocabulaireExercises } from './cm2.vocabulaire.bank';
import { frenchCm2LectureExercises } from './cm2.lecture.bank';
import { frenchCm2ExpressionExercises } from './cm2.expression.bank';

export const frenchCm2Exercises: FrenchExercise[] = [
  ...frenchCm2ConjugaisonExercises,
  ...frenchCm2GrammaireExercises,
  ...frenchCm2OrthographeExercises,
  ...frenchCm2VocabulaireExercises,
  ...frenchCm2LectureExercises,
  ...frenchCm2ExpressionExercises,
];
