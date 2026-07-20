import type { DecouverteExercise } from '../decouverte_du_monde.types';
import { ddmCm2TempsExercises } from './cm2.temps.bank';
import { ddmCm2TempsHistoireExercises } from './cm2.temps_histoire.bank';
import { ddmCm2EspaceExercises } from './cm2.espace.bank';
import { ddmCm2EspaceMondeExercises } from './cm2.espace_monde.bank';
import { ddmCm2EspaceEuropeExercises } from './cm2.espace_europe.bank';
import { ddmCm2ReperesExercises } from './cm2.reperes.bank';
import { ddmCm2SocieteExercises } from './cm2.societe.bank';
import { ddmCm2VivantExercises } from './cm2.vivant.bank';
import { ddmCm2MatiereObjetsExercises } from './cm2.matiere_objets.bank';

export const ddmCm2Exercises: DecouverteExercise[] = [
  ...ddmCm2TempsExercises,
  ...ddmCm2TempsHistoireExercises,
  ...ddmCm2EspaceExercises,
  ...ddmCm2EspaceMondeExercises,
  ...ddmCm2EspaceEuropeExercises,
  ...ddmCm2ReperesExercises,
  ...ddmCm2SocieteExercises,
  ...ddmCm2VivantExercises,
  ...ddmCm2MatiereObjetsExercises,
];
