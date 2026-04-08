import type { Exercise, SousDomaine } from '../../types';
import type { FrenchExercise } from './french.types';
import type { FrenchSkill } from './french.types';
import { frenchExercises } from './french.bank';

export const SKILL_TO_SOUS_DOMAINE: Record<FrenchSkill, SousDomaine> = {
  lecture: 'lecture',
  orthographe: 'orthographe',
  grammaire: 'grammaire',
  conjugaison: 'conjugaison',
  vocabulaire: 'vocabulaire',
  expression_ecrite: 'expression_ecrite',
};

export function mapToExercise(e: FrenchExercise): Exercise | null {
  if (e.format !== 'qcm' || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id: e.id,
    matiere: 'francais',
    sous_domaine: SKILL_TO_SOUS_DOMAINE[e.skill],
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

export const EXERCISE_BANK: Exercise[] = frenchExercises
  .map(mapToExercise)
  .filter((e): e is Exercise => e !== null);
