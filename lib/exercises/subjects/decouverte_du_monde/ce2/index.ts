import type { DecouverteExercise } from '../decouverte_du_monde.types';
import { ddmCe2TempsExercises } from './ce2.temps.bank';
import { ddmCe2EspaceExercises } from './ce2.espace.bank';
import { ddmCe2ReperesExercises } from './ce2.reperes.bank';
import { ddmCe2VivantExercises } from './ce2.vivant.bank';
import { ddmCe2MatiereObjetsExercises } from './ce2.matiere_objets.bank';
import { ddmCe2SocieteExercises } from './ce2.societe.bank';
import { ddmCe2TempsHistoireExercises } from './ce2.temps_histoire.bank';
import { ddmCe2EspaceFranceExercises } from './ce2.espace_france.bank';
import { ddmCe2ReperesOrientationExercises } from './ce2.reperes_orientation.bank';

export const ddmCe2Exercises: DecouverteExercise[] = [
  ...ddmCe2TempsExercises,
  ...ddmCe2EspaceExercises,
  ...ddmCe2ReperesExercises,
  ...ddmCe2VivantExercises,
  ...ddmCe2MatiereObjetsExercises,
  ...ddmCe2SocieteExercises,
  ...ddmCe2TempsHistoireExercises,
  ...ddmCe2EspaceFranceExercises,
  ...ddmCe2ReperesOrientationExercises,
];
