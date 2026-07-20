import type { EnglishExercise } from '../english.types';
import { englishCe2VocSalutationsExercises } from './ce2.voc_salutations.bank';
import { englishCe2VocCorpsExercises } from './ce2.voc_corps.bank';
import { englishCe2VocEcoleExercises } from './ce2.voc_ecole.bank';
import { englishCe2VocMeteoExercises } from './ce2.voc_meteo.bank';
import { englishCe2VocJoursExercises } from './ce2.voc_jours.bank';
import { englishCe2GramVerbeEtreExercises } from './ce2.gram_verbe_etre.bank';
import { englishCe2VocFamilleHobbiesExercises } from './ce2.voc_famille_hobbies.bank';
import { englishCe2GramPresentSimpleExercises } from './ce2.gram_present_simple.bank';
import { englishCe2CommExercises } from './ce2.comm.bank';
import { englishCe2VocAnimauxExercises } from './ce2.voc_animaux.bank';
import { englishCe2GramThereIsExercises } from './ce2.gram_there_is.bank';
import { englishCe2CommRoutineExercises } from './ce2.comm_routine.bank';

export const englishCe2Exercises: EnglishExercise[] = [
  ...englishCe2VocSalutationsExercises,
  ...englishCe2VocCorpsExercises,
  ...englishCe2VocEcoleExercises,
  ...englishCe2VocMeteoExercises,
  ...englishCe2VocJoursExercises,
  ...englishCe2GramVerbeEtreExercises,
  ...englishCe2VocFamilleHobbiesExercises,
  ...englishCe2GramPresentSimpleExercises,
  ...englishCe2CommExercises,
  ...englishCe2VocAnimauxExercises,
  ...englishCe2GramThereIsExercises,
  ...englishCe2CommRoutineExercises,
];
