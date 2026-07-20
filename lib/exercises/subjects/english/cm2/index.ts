import type { EnglishExercise } from '../english.types';
import { englishCm2GramPlurielExercises } from './cm2.gram_pluriel.bank';
import { englishCm2GramCanCantExercises } from './cm2.gram_can_cant.bank';
import { englishCm2CompExercises } from './cm2.comp.bank';
import { englishCm2VocSalutationsExercises } from './cm2.voc_salutations.bank';
import { englishCm2VocPhrasesCoutesExercises } from './cm2.voc_phrases_courtes.bank';
import { englishCm2VocMeteoExercises } from './cm2.voc_meteo.bank';
import { englishCm2VocJoursExercises } from './cm2.voc_jours.bank';
import { englishCm2GramComparatifsExercises } from './cm2.gram_comparatifs.bank';
import { englishCm2GramPresentContinuExercises } from './cm2.gram_present_continu.bank';
import { englishCm2VocHobbiesExercises } from './cm2.voc_hobbies.bank';
import { englishCm2CommExercises } from './cm2.comm.bank';
import { englishCm2GramPastSimpleExercises } from './cm2.gram_past_simple.bank';
import { englishCm2VocEnvironmentExercises } from './cm2.voc_environment.bank';
import { englishCm2CompTextesAvancesExercises } from './cm2.comp_textes_avances.bank';

export const englishCm2Exercises: EnglishExercise[] = [
  ...englishCm2GramPlurielExercises,
  ...englishCm2GramCanCantExercises,
  ...englishCm2CompExercises,
  ...englishCm2VocSalutationsExercises,
  ...englishCm2VocPhrasesCoutesExercises,
  ...englishCm2VocMeteoExercises,
  ...englishCm2VocJoursExercises,
  ...englishCm2GramComparatifsExercises,
  ...englishCm2GramPresentContinuExercises,
  ...englishCm2VocHobbiesExercises,
  ...englishCm2CommExercises,
  ...englishCm2GramPastSimpleExercises,
  ...englishCm2VocEnvironmentExercises,
  ...englishCm2CompTextesAvancesExercises,
];
