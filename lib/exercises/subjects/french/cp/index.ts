import type { FrenchExercise } from '../french.types';
import { frenchCpConjugaisonExercises } from './cp.conjugaison.bank';
import { frenchCpEvalExercises } from './cp.eval.bank';
import { frenchCpExpressionExercises } from './cp.expression.bank';
import { frenchCpGrammaireExercises } from './cp.grammaire.bank';
import { frenchCpLectureExercises } from './cp.lecture.bank';
import { frenchCpOrthographeExercises } from './cp.orthographe.bank';
import { frenchCpRevisionExercises } from './cp.revision.bank';
import { frenchCpVocabulaireExercises } from './cp.vocabulaire.bank';

export const frenchCpExercises: FrenchExercise[] = [
  ...frenchCpConjugaisonExercises,
  ...frenchCpEvalExercises,
  ...frenchCpExpressionExercises,
  ...frenchCpGrammaireExercises,
  ...frenchCpLectureExercises,
  ...frenchCpOrthographeExercises,
  ...frenchCpRevisionExercises,
  ...frenchCpVocabulaireExercises,
];
