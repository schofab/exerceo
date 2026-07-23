/* =====================================================================
   CORE TYPES — shared across all subjects
===================================================================== */

export type SchoolClass = 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2';

/**
 * Niveau de l'élève ciblé par l'exercice — utilisé par les moteurs de
 * sélection adaptatifs (french-selector, maths-selector…) pour filtrer
 * ou pondérer les items selon le profil de l'enfant.
 *
 * ATTENTION — ne pas confondre avec `difficulty_tier` :
 *
 *   `generalLevel`     → profil élève   ("à qui s'adresse cet exercice ?")
 *                         Piloté par le moteur de sélection à l'exécution.
 *                         Valeurs : 'beginner' | 'intermediate' | 'advanced'
 *
 *   `difficulty_tier`  → calibrage éditorial ("quelle est la charge cognitive ?")
 *                         Défini au moment de la rédaction de l'item.
 *                         Valeurs : 'foundation' | 'standard' | 'advanced'
 *
 * Règle éditoriale clé : un item `difficulty_tier: 'foundation'` pour CM1
 * reste du niveau CM1 — il est plus guidé, pas sous-niveau.
 * "foundation" ≠ "facile pour tout le monde" ; c'est "accessible dans
 * le cadre du programme de la classe".
 */
export type GeneralLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Calibrage éditorial de difficulté — taxonomie commune à toutes les matières.
 * À NE PAS CONFONDRE avec `generalLevel` (héritage historique, utilisé par
 * les moteurs de sélection par profil).
 *
 *   - foundation : exercice direct, guidé, faible ambiguïté — entrée ou consolidation.
 *   - standard   : exercice au niveau attendu de la classe.
 *   - advanced   : exercice plus discriminant mais dans le programme (inférence,
 *                  distracteurs fins, plusieurs étapes).
 */
export type DifficultyTier = 'foundation' | 'standard' | 'advanced';

/**
 * Période de l'année scolaire où l'exercice est le plus pertinent.
 * Fenêtre de pertinence pédagogique, pas une date stricte.
 *
 *   - debut  : accessible dès le début d'année.
 *   - milieu : cœur du programme.
 *   - fin    : notions intégrées, transfert plus marqué.
 */
export type SchoolPeriod = 'debut' | 'milieu' | 'fin';

export type LearningProfile =
  | 'standard'
  | 'lecture_simplifiee'
  | 'attention_courte'
  | 'progressif'
  | 'defi_avance';

export interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface ExerciseProfileAdaptation {
  profile: LearningProfile;
  instruction?: string;
  extraHint?: string;
  reducedChoices?: boolean;
  maxChoices?: number;
  challengeExtension?: string;
  shorterContent?: boolean;
  splitSteps?: string[];
}

export interface StudentProfile {
  firstName?: string;
  schoolClass: SchoolClass;
  generalLevel: GeneralLevel;
  learningProfile: LearningProfile;
  strengths?: string[];
  weaknesses?: string[];
}

export type ExerciseFormat = 'qcm' | 'fill_in_blank' | 'short_answer';

/**
 * Niveau de charge cognitive sur un axe donné.
 *   low    → faible charge / impact réduit sur la matière ciblée
 *   medium → charge standard
 *   high   → charge élevée, contexte long, ou multi-étapes
 */
export type LoadLevel = 'low' | 'medium' | 'high';

/**
 * Niveau de guidage de l'exercice.
 *   guided → réponse très cadrée, choix limité (QCM, vrai/faux, texte à trous)
 *   open   → production plus libre, faible contrainte de forme
 */
export type GuidanceLevel = 'guided' | 'open';

/**
 * Métadonnées adaptatives d'un exercice.
 * Tous les champs sont optionnels — la migration est progressive.
 * En l'absence de champ, `getExerciseMeta()` dérive une valeur par heuristique.
 *
 * NE PAS UTILISER pour définir la difficulté pédagogique (→ difficulty_tier)
 * ni le profil élève cible (→ generalLevel). Ces tags décrivent la CHARGE
 * cognitive de l'exercice sur différentes dimensions.
 */
export interface ExerciseMeta {
  /** Charge de lecture : longueur du contexte, densité textuelle. */
  textLoad?: LoadLevel;
  /** Charge numérique : volume et complexité des calculs attendus. */
  numericLoad?: LoadLevel;
  /** Charge visuo-spatiale : repérage, schéma, tableau, carte. */
  visualLoad?: LoadLevel;
  /** Niveau de guidage de la réponse attendue. */
  guidance?: GuidanceLevel;
}

export interface ExerciseValidationResult {
  exerciseId: string;
  valid: boolean;
  errors: string[];
}

export interface BaseExercise<TSkill extends string = string> {
  id: string;
  subject: string;
  title: string;
  schoolClass: SchoolClass;
  generalLevel: GeneralLevel;
  skill: TSkill;
  subskill: string;
  format: ExerciseFormat;
  instructions: string;
  prompt: string;
  options?: ExerciseOption[];
  correctAnswer?: string | string[];
  explanation: string;
  hint?: string;
  tags?: string[];
  estimatedMinutes: number;
  adaptations: ExerciseProfileAdaptation[];
  /** Métadonnées adaptatives. Optionnel — voir `getExerciseMeta()` si absent. */
  meta?: ExerciseMeta;
}
