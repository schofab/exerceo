import type { FrenchExercise } from '../french.types';
import { frenchCe2ConjugaisonExercises } from './ce2.conjugaison.bank';
import { frenchCe2EvalExercises } from './ce2.eval.bank';
import { frenchCe2ExpressionExercises } from './ce2.expression.bank';
import { frenchCe2GrammaireExercises } from './ce2.grammaire.bank';
import { frenchCe2LectureExercises } from './ce2.lecture.bank';
import { frenchCe2OrthographeExercises } from './ce2.orthographe.bank';
import { frenchCe2RevisionExercises } from './ce2.revision.bank';
import { frenchCe2VocabulaireExercises } from './ce2.vocabulaire.bank';

export const frenchCe2Exercises: FrenchExercise[] = [
  ...frenchCe2ConjugaisonExercises,
  ...frenchCe2EvalExercises,
  ...frenchCe2ExpressionExercises,
  ...frenchCe2GrammaireExercises,
  ...frenchCe2LectureExercises,
  ...frenchCe2OrthographeExercises,
  ...frenchCe2RevisionExercises,
  ...frenchCe2VocabulaireExercises,
];
