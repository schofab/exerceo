import type { Exercise, SousDomaine } from '../../types';
import type { MathExercise } from './maths.types';
import type { MathSkill } from './maths.types';
import { mathsExercises } from './maths.bank';

export const SKILL_TO_SOUS_DOMAINE_MATHS: Record<MathSkill, SousDomaine> = {
  numeration: 'numeration',
  calcul: 'calcul',
  geometrie: 'geometrie',
  mesures: 'mesures',
  problemes: 'problemes',
  logique: 'logique',
};

export function mapMathToExercise(e: MathExercise): Exercise | null {
  if (e.format !== 'qcm' || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id: e.id,
    matiere: 'mathematiques',
    sous_domaine: SKILL_TO_SOUS_DOMAINE_MATHS[e.skill],
    notion: e.subskill,
    niveau: e.schoolClass,
    type: 'qcm',
    consigne: e.instructions,
    question: e.prompt,
    options: e.options.map((o) => o.text),
    bonne_reponse: correctOption.text,
    explication: e.explanation,
  };
}

export const EXERCISE_BANK_MATHS: Exercise[] = mathsExercises
  .map(mapMathToExercise)
  .filter((e): e is Exercise => e !== null);
