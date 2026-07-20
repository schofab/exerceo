import type { FrenchExercise } from '../french.types';
import { frenchCm1ConjugaisonExercises } from './cm1.conjugaison.bank';
import { frenchCm1GrammaireExercises } from './cm1.grammaire.bank';
import { frenchCm1OrthographeExercises } from './cm1.orthographe.bank';
import { frenchCm1VocabulaireExercises } from './cm1.vocabulaire.bank';
import { frenchCm1LectureExercises } from './cm1.lecture.bank';
import { frenchCm1ExpressionExercises } from './cm1.expression.bank';

export const frenchCm1Exercises: FrenchExercise[] = [
  ...frenchCm1ConjugaisonExercises,
  ...frenchCm1GrammaireExercises,
  ...frenchCm1OrthographeExercises,
  ...frenchCm1VocabulaireExercises,
  ...frenchCm1LectureExercises,
  ...frenchCm1ExpressionExercises,
];
