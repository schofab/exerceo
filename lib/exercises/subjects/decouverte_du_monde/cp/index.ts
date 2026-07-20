import type { DecouverteExercise } from '../decouverte_du_monde.types';
import { ddmCpTempsExercises } from './cp.temps.bank';
import { ddmCpEspaceExercises } from './cp.espace.bank';
import { ddmCpVivantExercises } from './cp.vivant.bank';
import { ddmCpMatiereObjetsExercises } from './cp.matiere_objets.bank';
import { ddmCpReperesExercises } from './cp.reperes.bank';
import { ddmCpTempsMoisExercises } from './cp.temps_mois.bank';
import { ddmCpEspaceHabitatExercises } from './cp.espace_habitat.bank';
import { ddmCpEspacePaysagesExercises } from './cp.espace_paysages.bank';

export const ddmCpExercises: DecouverteExercise[] = [
  ...ddmCpTempsExercises,
  ...ddmCpEspaceExercises,
  ...ddmCpVivantExercises,
  ...ddmCpMatiereObjetsExercises,
  ...ddmCpReperesExercises,
  ...ddmCpTempsMoisExercises,
  ...ddmCpEspaceHabitatExercises,
  ...ddmCpEspacePaysagesExercises,
];
