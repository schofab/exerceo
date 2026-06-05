/* =====================================================================
   CORE TYPES — shared across all subjects
===================================================================== */

export type SchoolClass = 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2';

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
}
