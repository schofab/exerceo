import type { Exercise, SousDomaine } from '../../types';
import type { HgExercise, HgSkill } from './hg.types';
import { hgExercises } from './hg.bank';

export const SKILL_TO_SOUS_DOMAINE_HG: Record<HgSkill, SousDomaine> = {
  histoire:   'histoire',
  geographie: 'geographie',
};

export function mapHgToExercise(e: HgExercise): Exercise | null {
  if (e.format !== 'qcm' || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id:            e.id,
    matiere:       'histoire_geo',
    sous_domaine:  SKILL_TO_SOUS_DOMAINE_HG[e.skill],
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

export const EXERCISE_BANK_HG: Exercise[] = hgExercises
  .map(mapHgToExercise)
  .filter((e): e is Exercise => e !== null);
