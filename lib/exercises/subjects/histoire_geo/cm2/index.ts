import type { HgExercise } from '../hg.types';
import { hgCm2HistoireRepubliqueExercises } from './cm2.histoire_republique.bank';
import { hgCm2HistoireAgeIndustrielExercises } from './cm2.histoire_age_industriel.bank';
import { hgCm2HistoireGuerresUeExercises } from './cm2.histoire_guerres_ue.bank';
import { hgCm2HistoireMemoiresExercises } from './cm2.histoire_memoires.bank';
import { hgCm2HistoireVieQuotidienneExercises } from './cm2.histoire_vie_quotidienne.bank';
import { hgCm2GeoSeDeplacerExercises } from './cm2.geo_se_deplacer.bank';
import { hgCm2GeoCommuniquerInternetExercises } from './cm2.geo_communiquer_internet.bank';
import { hgCm2GeoMieuxHabiterExercises } from './cm2.geo_mieux_habiter.bank';
import { hgCm2GeoMondeVillesExercises } from './cm2.geo_monde_villes.bank';
import { hgCm2GeoMondeFluxExercises } from './cm2.geo_monde_flux.bank';
import { hgCm2GeoInegalitesExercises } from './cm2.geo_inegalites.bank';
import { hgCm2GeoRisquesExercises } from './cm2.geo_risques.bank';

export const hgCm2Exercises: HgExercise[] = [
  ...hgCm2HistoireRepubliqueExercises,
  ...hgCm2HistoireAgeIndustrielExercises,
  ...hgCm2HistoireGuerresUeExercises,
  ...hgCm2HistoireMemoiresExercises,
  ...hgCm2HistoireVieQuotidienneExercises,
  ...hgCm2GeoSeDeplacerExercises,
  ...hgCm2GeoCommuniquerInternetExercises,
  ...hgCm2GeoMieuxHabiterExercises,
  ...hgCm2GeoMondeVillesExercises,
  ...hgCm2GeoMondeFluxExercises,
  ...hgCm2GeoInegalitesExercises,
  ...hgCm2GeoRisquesExercises,
];
