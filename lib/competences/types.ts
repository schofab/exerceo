export type CompetenceStatus =
  | "not_started"
  | "fragile"
  | "progressing"
  | "mastered";

export interface EnfantCompetence {
  id: string;
  enfant_id: string;
  matiere: string;
  skill_id: string;
  skill_label: string;
  attempts_total: number;
  correct_total: number;
  recent_results: boolean[];
  mastery_score: number;
  status: CompetenceStatus;
  review_stage: number | null;
  last_seen_at: string | null;
  next_review_at: string | null;
  created_at: string;
  updated_at: string;
}

// Payload minimal reçu quand une réponse enfant est validée
export interface CompetenceUpdateInput {
  enfant_id: string;
  matiere: string;
  skill_id: string;
  skill_label: string;
  est_correct: boolean;
}

// Optionnel mais utile pour typer les insert / upsert de façon propre
export interface EnfantCompetenceUpsert {
  enfant_id: string;
  matiere: string;
  skill_id: string;
  skill_label: string;
  attempts_total: number;
  correct_total: number;
  recent_results: boolean[];
  mastery_score: number;
  status: CompetenceStatus;
  review_stage: number | null;
  last_seen_at: string;
  next_review_at: string | null;
}