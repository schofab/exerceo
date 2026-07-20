import type { HgExercise } from '../hg.types';
import { hgCm1HistoireAvantFranceExercises } from './cm1.histoire_avant_france.bank';
import { hgCm1HistoireTempsRoisExercises } from './cm1.histoire_temps_rois.bank';
import { hgCm1HistoireRevolutionEmpireExercises } from './cm1.histoire_revolution_empire.bank';
import { hgCm1HistoireSourcesExercises } from './cm1.histoire_sources.bank';
import { hgCm1HistoireVieQuotidienneExercises } from './cm1.histoire_vie_quotidienne.bank';
import { hgCm1GeoLieuxHabiteExercises } from './cm1.geo_lieux_habite.bank';
import { hgCm1GeoVivreFranceExercises } from './cm1.geo_vivre_france.bank';
import { hgCm1GeoConsommerFranceExercises } from './cm1.geo_consommer_france.bank';
import { hgCm1GeoEuropeExercises } from './cm1.geo_europe.bank';
import { hgCm1GeoReliefsClimatsExercises } from './cm1.geo_reliefs_climats.bank';
import { hgCm1GeoFluxEchangesExercises } from './cm1.geo_flux_echanges.bank';
import { hgCm1GeoRisquesNaturelsExercises } from './cm1.geo_risques_naturels.bank';

export const hgCm1Exercises: HgExercise[] = [
  ...hgCm1HistoireAvantFranceExercises,
  ...hgCm1HistoireTempsRoisExercises,
  ...hgCm1HistoireRevolutionEmpireExercises,
  ...hgCm1HistoireSourcesExercises,
  ...hgCm1HistoireVieQuotidienneExercises,
  ...hgCm1GeoLieuxHabiteExercises,
  ...hgCm1GeoVivreFranceExercises,
  ...hgCm1GeoConsommerFranceExercises,
  ...hgCm1GeoEuropeExercises,
  ...hgCm1GeoReliefsClimatsExercises,
  ...hgCm1GeoFluxEchangesExercises,
  ...hgCm1GeoRisquesNaturelsExercises,
];
