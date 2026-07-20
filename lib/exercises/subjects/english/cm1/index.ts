import type { EnglishExercise } from '../english.types';
import { englishCm1GramCanCantExercises } from './cm1.gram_can_cant.bank';
import { englishCm1GramArticlesExercises } from './cm1.gram_articles.bank';
import { englishCm1VocPhrasesCoutesExercises } from './cm1.voc_phrases_courtes.bank';
import { englishCm1VocCouleursExercises } from './cm1.voc_couleurs.bank';
import { englishCm1VocMeteoExercises } from './cm1.voc_meteo.bank';
import { englishCm1VocJoursExercises } from './cm1.voc_jours.bank';
import { englishCm1VocHobbiesExercises } from './cm1.voc_hobbies.bank';
import { englishCm1GramPresentContinuExercises } from './cm1.gram_present_continu.bank';
import { englishCm1GramPrepositionsExercises } from './cm1.gram_prepositions.bank';
import { englishCm1CommExercises } from './cm1.comm.bank';
import { englishCm1GramPastSimpleIntroExercises } from './cm1.gram_past_simple_intro.bank';
import { englishCm1VocVilleExercises } from './cm1.voc_ville.bank';
import { englishCm1CompTextesExercises } from './cm1.comp_textes.bank';

export const englishCm1Exercises: EnglishExercise[] = [
  ...englishCm1GramCanCantExercises,
  ...englishCm1GramArticlesExercises,
  ...englishCm1VocPhrasesCoutesExercises,
  ...englishCm1VocCouleursExercises,
  ...englishCm1VocMeteoExercises,
  ...englishCm1VocJoursExercises,
  ...englishCm1VocHobbiesExercises,
  ...englishCm1GramPresentContinuExercises,
  ...englishCm1GramPrepositionsExercises,
  ...englishCm1CommExercises,
  ...englishCm1GramPastSimpleIntroExercises,
  ...englishCm1VocVilleExercises,
  ...englishCm1CompTextesExercises,
];
