// Profil parent (correspond à auth.users + table profiles)
export interface Profile {
  id: string;
  email: string;
  is_premium: boolean;
  sessions_used: number;
  created_at: string;
}

// Profil d'apprentissage
export type LearningProfile =
  | "standard"
  | "lecture_simplifiee"
  | "attention_courte"
  | "progressif"
  | "defi_avance";

// Statistiques par notion (retournées par get_faiblesses_enfant)
export interface NotionStats {
  sous_matiere: string;
  matiere: string;
  nb_exercices: number;
  nb_corrects: number;
  taux_reussite: number;
  est_fragile: boolean;
}

// Profil enfant
export interface Enfant {
  id: string;
  parent_id: string;
  prenom: string;
  age: number;
  classe: Classe;
  niveau: Niveau;
  progression_stage: ProgressionStage;
  facilites: Matiere[];
  lacunes: Matiere[];
  learning_profile: LearningProfile;
  created_at: string;
}

// Session d'exercices
export interface Session {
  id: string;
  parent_id: string;
  enfant_id: string;
  temps_disponible: number; // en minutes
  matieres: Matiere[];
  difficultes: string;
  created_at: string;
}

// Exercice généré par Claude
export interface Exercice {
  id: string;
  session_id: string;
  ordre: number;
  matiere: Matiere;
  type: TypeExercice;
  contenu: ContenuExercice;
  reponse_correcte: string;
  created_at: string;
}

// Réponse donnée par l'enfant
export interface Reponse {
  id: string;
  exercice_id: string;
  reponse_donnee: string;
  est_correct: boolean;
  created_at: string;
}

// Énumérations
export type Classe = "CP" | "CE1" | "CE2" | "CM1" | "CM2";
export type Niveau = "debutant" | "intermediaire" | "avance";
export type ProgressionStage = "early" | "mid" | "late";
export type Matiere =
  | "Mathématiques"
  | "Français"
  | "Sciences"
  | "Histoire-Géographie"
  | "Anglais"
  | "Découverte du monde"
  | "Questionner le monde";
export type TypeExercice =
  | "calcul"
  | "qcm"
  | "texte_a_trous"
  | "vrai_faux"
  | "conjugaison";

// Contenu JSON d'un exercice (stocké en jsonb dans Supabase)
export interface ContenuExercice {
  enonce: string;
  options: string[] | null; // pour QCM
  explication: string;
  sous_matiere?: string; // ex: "Orthographe", "Calcul mental", "Histoire"
  /** Temporaire — informations de debug sur la source de l'exercice (peut être supprimé) */
  _debug?: {
    source:    "bank.ts" | "claude";
    bank_id?:  string | null;  // identifiant dans EXERCISE_BANK si source=bank.ts
    classe?:   string;         // niveau de l'exercice dans la banque (CP, CE1…)
    skill?:    string;         // sous_domaine de l'exercice (orthographe, grammaire…)
    validated: boolean;
    validation_error?: string;
  };
}

// Format attendu de Claude
export interface ExerciceGenere {
  ordre: number;
  matiere: Matiere;
  sous_matiere: string;
  type: TypeExercice;
  enonce: string;
  options: string[] | null;
  reponse_correcte: string;
  explication: string;
}

export interface ReponseClaudeJSON {
  exercices: ExerciceGenere[];
}

// ── Créatures ─────────────────────────────────────────────────

export interface Creature {
  id: string;
  name: string;
  subject: Matiere;
  stars_required: number;
  description: string;
  emoji: string;
  created_at: string;
}

export interface EnfantCreature {
  id: string;
  enfant_id: string;
  creature_id: string;
  unlocked_at: string;
}

// Créature enrichie avec statut de déverrouillage (pour la page collection)
export interface CreatureAvecStatut extends Creature {
  unlocked: boolean;
  unlocked_at: string | null;
}

// ── Limites du plan gratuit ────────────────────────────────────
export const LIMITE_SESSIONS_GRATUITES = 3;
export const LIMITE_ENFANTS_GRATUIT = 1;
export const PRIX_PREMIUM_CENTIMES = 1500; // 15€ en centimes
