import type { DecouverteExercise } from '../decouverte_du_monde.types';
import { ddmCe1TempsExercises } from './ce1.temps.bank';
import { ddmCe1EspaceExercises } from './ce1.espace.bank';
import { ddmCe1ReperesExercises } from './ce1.reperes.bank';
import { ddmCe1VivantExercises } from './ce1.vivant.bank';
import { ddmCe1MatiereObjetsExercises } from './ce1.matiere_objets.bank';
import { ddmCe1SocieteExercises } from './ce1.societe.bank';
import { ddmCe1TempsCalendrierExercises } from './ce1.temps_calendrier.bank';
import { ddmCe1EspacePaysagesExercises } from './ce1.espace_paysages.bank';
import { ddmCe1ReperesCarteExercises } from './ce1.reperes_carte.bank';

export const ddmCe1Exercises: DecouverteExercise[] = [
  ...ddmCe1TempsExercises,
  ...ddmCe1EspaceExercises,
  ...ddmCe1ReperesExercises,
  ...ddmCe1VivantExercises,
  ...ddmCe1MatiereObjetsExercises,
  ...ddmCe1SocieteExercises,
  ...ddmCe1TempsCalendrierExercises,
  ...ddmCe1EspacePaysagesExercises,
  ...ddmCe1ReperesCarteExercises,
];
