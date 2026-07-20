import type { FrenchExercise } from '../french.types';
import { frenchCe1ConjugaisonExercises } from './ce1.conjugaison.bank';
import { frenchCe1EvalExercises } from './ce1.eval.bank';
import { frenchCe1ExpressionExercises } from './ce1.expression.bank';
import { frenchCe1GrammaireExercises } from './ce1.grammaire.bank';
import { frenchCe1LectureExercises } from './ce1.lecture.bank';
import { frenchCe1OrthographeExercises } from './ce1.orthographe.bank';
import { frenchCe1RevisionExercises } from './ce1.revision.bank';
import { frenchCe1VocabulaireExercises } from './ce1.vocabulaire.bank';

export const frenchCe1Exercises: FrenchExercise[] = [
  ...frenchCe1ConjugaisonExercises,
  ...frenchCe1EvalExercises,
  ...frenchCe1ExpressionExercises,
  ...frenchCe1GrammaireExercises,
  ...frenchCe1LectureExercises,
  ...frenchCe1OrthographeExercises,
  ...frenchCe1RevisionExercises,
  ...frenchCe1VocabulaireExercises,
];
