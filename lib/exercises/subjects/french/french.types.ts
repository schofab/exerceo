import type { BaseExercise, DifficultyTier, SchoolPeriod } from '../../core/exercise-core.types';

export type FrenchSkill =
  | 'lecture'
  | 'orthographe'
  | 'grammaire'
  | 'conjugaison'
  | 'vocabulaire'
  | 'expression_ecrite';

export interface FrenchExercise extends BaseExercise<FrenchSkill> {
  subject: 'francais';
  /**
   * Calibrage éditorial de difficulté (foundation | standard | advanced).
   * Distinct de `generalLevel` — voir DifficultyTier dans exercise-core.types.ts.
   * Optionnel : renseigné progressivement par classe, CE2 en premier.
   */
  difficulty_tier?: DifficultyTier;
  /**
   * Période scolaire de pertinence pédagogique (debut | milieu | fin).
   * Optionnel : renseigné progressivement par classe, CE2 en premier.
   */
  school_period?: SchoolPeriod;
  /**
   * Identifiant de compétence au format "francais:{skill}".
   * Strictement aligné sur la convention de la table `enfant_competences`
   * (ex : "francais:lecture", "francais:conjugaison").
   * Optionnel : renseigné progressivement par classe, CE2 en premier.
   */
  skill_id?: string;
}
