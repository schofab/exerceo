import type { Exercise, SousDomaine } from '../../types';
import type { ScienceExercise, ScienceSkill } from './science.types';
import { scienceExercises } from './science.bank';

export const SKILL_TO_SOUS_DOMAINE_SCIENCE: Record<ScienceSkill, SousDomaine> = {
  vivant:        'vivant',
  corps:         'corps',
  environnement: 'environnement',
};

export function mapScienceToExercise(e: ScienceExercise): Exercise | null {
  if (e.format !== 'qcm' || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id: e.id,
    matiere: 'sciences',
    sous_domaine: SKILL_TO_SOUS_DOMAINE_SCIENCE[e.skill],
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

export const EXERCISE_BANK_SCIENCE: Exercise[] = scienceExercises
  .map(mapScienceToExercise)
  .filter((e): e is Exercise => e !== null);
