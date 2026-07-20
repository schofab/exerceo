import type { HgExercise } from '../hg.types';
import { hgCe2HistoireGrandesPeriodeExercises } from './ce2.histoire_grandes_periodes.bank';
import { hgCe2HistoirePersonnagesExercises } from './ce2.histoire_personnages.bank';
import { hgCe2HistoireVieQuotidienneExercises } from './ce2.histoire_vie_quotidienne.bank';
import { hgCe2HistoireRepresChronologieExercises } from './ce2.histoire_reperes_chronologie.bank';
import { hgCe2GeoCarteFranceExercises } from './ce2.geo_carte_france.bank';
import { hgCe2GeoPaysagesExercises } from './ce2.geo_paysages.bank';
import { hgCe2GeocommuneRegionExercises } from './ce2.geo_commune_region.bank';
import { hgCe2GeoDeplacementsExercises } from './ce2.geo_deplacements.bank';
import { hgCe2GeoReliefsFleuveExercises } from './ce2.geo_reliefs_fleuves.bank';
import { hgCe2GeoContinentsOceansExercises } from './ce2.geo_continents_oceans.bank';
import { hgCe2GeoEuropeIntroExercises } from './ce2.geo_europe_intro.bank';
import { hgCe2GeoEnvironnementExercises } from './ce2.geo_environnement.bank';

export const hgCe2Exercises: HgExercise[] = [
  ...hgCe2HistoireGrandesPeriodeExercises,
  ...hgCe2HistoirePersonnagesExercises,
  ...hgCe2HistoireVieQuotidienneExercises,
  ...hgCe2HistoireRepresChronologieExercises,
  ...hgCe2GeoCarteFranceExercises,
  ...hgCe2GeoPaysagesExercises,
  ...hgCe2GeocommuneRegionExercises,
  ...hgCe2GeoDeplacementsExercises,
  ...hgCe2GeoReliefsFleuveExercises,
  ...hgCe2GeoContinentsOceansExercises,
  ...hgCe2GeoEuropeIntroExercises,
  ...hgCe2GeoEnvironnementExercises,
];
