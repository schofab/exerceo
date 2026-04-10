import type { Exercise, SousDomaine } from '../../types';
import type { EnglishExercise } from './english.types';
import type { EnglishSkill } from './english.types';
import { englishExercises } from './english.bank';

export const SKILL_TO_SOUS_DOMAINE_ENGLISH: Record<EnglishSkill, SousDomaine> = {
  vocabulaire:   'vocabulaire',
  grammaire:     'grammaire',
  comprehension: 'comprehension',
};

export function mapEnglishToExercise(e: EnglishExercise): Exercise | null {
  if (e.format !== 'qcm' || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id: e.id,
    matiere: 'anglais',
    sous_domaine: SKILL_TO_SOUS_DOMAINE_ENGLISH[e.skill],
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

export const EXERCISE_BANK_ENGLISH: Exercise[] = englishExercises
  .map(mapEnglishToExercise)
  .filter((e): e is Exercise => e !== null);
