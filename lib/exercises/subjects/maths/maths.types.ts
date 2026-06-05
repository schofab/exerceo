import type { BaseExercise, DifficultyTier, SchoolPeriod } from '../../core/exercise-core.types';

// DifficultyTier et SchoolPeriod sont définis dans exercise-core.types.ts
// et re-exportés ici pour la rétrocompatibilité des imports existants.
export type { DifficultyTier, SchoolPeriod };

export type MathSkill =
  | 'numeration'
  | 'calcul'
  | 'geometrie'
  | 'mesures'
  | 'problemes'
  | 'logique';

export interface MathExercise extends BaseExercise<MathSkill> {
  subject: 'mathematiques';
  /**
   * Calibrage éditorial de difficulté (foundation | standard | advanced).
   * Distinct de `generalLevel` — voir `DifficultyTier` pour la différence.
   * Optionnel : renseigné progressivement par classe, CE2 en premier.
   */
  difficulty_tier?: DifficultyTier;
  /**
   * Période scolaire de pertinence pédagogique (debut | milieu | fin).
   * Optionnel : renseigné progressivement par classe, CE2 en premier.
   */
  school_period?: SchoolPeriod;
  /**
   * Identifiant de compétence au format "mathematiques:{skill}".
   * Strictement aligné sur la convention de la table `enfant_competences`
   * (ex : "mathematiques:calcul", "mathematiques:geometrie").
   * Optionnel : renseigné progressivement par classe, CE2 en premier.
   */
  skill_id?: string;
}
