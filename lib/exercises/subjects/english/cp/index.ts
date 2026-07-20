import type { EnglishExercise } from '../english.types';
import { englishCpVocCouleursExercises } from './cp.voc_couleurs.bank';
import { englishCpVocNombresExercises } from './cp.voc_nombres.bank';
import { englishCpVocSalutationsExercises } from './cp.voc_salutations.bank';
import { englishCpVocAnimauxExercises } from './cp.voc_animaux.bank';
import { englishCpVocCorpsExercises } from './cp.voc_corps.bank';
import { englishCpVocEcoleExercises } from './cp.voc_ecole.bank';
import { englishCpVocFamilleExercises } from './cp.voc_famille.bank';
import { englishCpVocNourritureExercises } from './cp.voc_nourriture.bank';
import { englishCpCommExercises } from './cp.comm.bank';
import { englishCpVocMaisonExercises } from './cp.voc_maison.bank';
import { englishCpVocVetementsExercises } from './cp.voc_vetements.bank';
import { englishCpCommClassroomExercises } from './cp.comm_classroom.bank';

export const englishCpExercises: EnglishExercise[] = [
  ...englishCpVocCouleursExercises,
  ...englishCpVocNombresExercises,
  ...englishCpVocSalutationsExercises,
  ...englishCpVocAnimauxExercises,
  ...englishCpVocCorpsExercises,
  ...englishCpVocEcoleExercises,
  ...englishCpVocFamilleExercises,
  ...englishCpVocNourritureExercises,
  ...englishCpCommExercises,
  ...englishCpVocMaisonExercises,
  ...englishCpVocVetementsExercises,
  ...englishCpCommClassroomExercises,
];
