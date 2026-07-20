import type { EnglishExercise } from '../english.types';
import { englishCe1VocCouleursExercises } from './ce1.voc_couleurs.bank';
import { englishCe1VocAnimauxExercises } from './ce1.voc_animaux.bank';
import { englishCe1VocEcoleExercises } from './ce1.voc_ecole.bank';
import { englishCe1VocCorpsExercises } from './ce1.voc_corps.bank';
import { englishCe1VocNombresExercises } from './ce1.voc_nombres.bank';
import { englishCe1VocSalutationsExercises } from './ce1.voc_salutations.bank';
import { englishCe1VocJoursExercises } from './ce1.voc_jours.bank';
import { englishCe1VocFamilleExercises } from './ce1.voc_famille.bank';
import { englishCe1VocNourritureExercises } from './ce1.voc_nourriture.bank';
import { englishCe1CommExercises } from './ce1.comm.bank';
import { englishCe1VocMaisonExercises } from './ce1.voc_maison.bank';
import { englishCe1GramHaveGotExercises } from './ce1.gram_have_got.bank';
import { englishCe1CommDailyLifeExercises } from './ce1.comm_daily_life.bank';

export const englishCe1Exercises: EnglishExercise[] = [
  ...englishCe1VocCouleursExercises,
  ...englishCe1VocAnimauxExercises,
  ...englishCe1VocEcoleExercises,
  ...englishCe1VocCorpsExercises,
  ...englishCe1VocNombresExercises,
  ...englishCe1VocSalutationsExercises,
  ...englishCe1VocJoursExercises,
  ...englishCe1VocFamilleExercises,
  ...englishCe1VocNourritureExercises,
  ...englishCe1CommExercises,
  ...englishCe1VocMaisonExercises,
  ...englishCe1GramHaveGotExercises,
  ...englishCe1CommDailyLifeExercises,
];
