import type { DecouverteExercise } from '../decouverte_du_monde.types';
import { ddmCm1TempsExercises } from './cm1.temps.bank';
import { ddmCm1EspaceExercises } from './cm1.espace.bank';
import { ddmCm1EspaceFranceExercises } from './cm1.espace_france.bank';
import { ddmCm1EspaceEuropeExercises } from './cm1.espace_europe.bank';
import { ddmCm1ReperesExercises } from './cm1.reperes.bank';
import { ddmCm1SocieteExercises } from './cm1.societe.bank';
import { ddmCm1VivantExercises } from './cm1.vivant.bank';
import { ddmCm1MatiereObjetsExercises } from './cm1.matiere_objets.bank';

export const ddmCm1Exercises: DecouverteExercise[] = [
  ...ddmCm1TempsExercises,
  ...ddmCm1EspaceExercises,
  ...ddmCm1EspaceFranceExercises,
  ...ddmCm1EspaceEuropeExercises,
  ...ddmCm1ReperesExercises,
  ...ddmCm1SocieteExercises,
  ...ddmCm1VivantExercises,
  ...ddmCm1MatiereObjetsExercises,
];
