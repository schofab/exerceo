import type { Exercise, SousDomaine } from '../../types';
import type { DecouverteExercise, DecouverteSkill } from './decouverte_du_monde.types';
import { decouverteDuMondeExercises } from './decouverte_du_monde.bank';

export const SKILL_TO_SOUS_DOMAINE_DECOUVERTE: Record<DecouverteSkill, SousDomaine> = {
  temps:    'temps',
  espace:   'espace',
  reperes:  'reperes',
};

export function mapDecouverteToExercise(e: DecouverteExercise): Exercise | null {
  if (e.format !== 'qcm' || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id:            e.id,
    matiere:       'decouverte_du_monde',
    sous_domaine:  SKILL_TO_SOUS_DOMAINE_DECOUVERTE[e.skill],
    notion:        e.subskill,
    niveau:        e.schoolClass,
    type:          'qcm',
    consigne:      e.instructions,
    question:      e.prompt,
    options:       e.options.map((o) => o.text),
    bonne_reponse: correctOption.text,
    explication:   e.explanation,
  };
}

export const EXERCISE_BANK_DECOUVERTE: Exercise[] = decouverteDuMondeExercises
  .map(mapDecouverteToExercise)
  .filter((e): e is Exercise => e !== null);
