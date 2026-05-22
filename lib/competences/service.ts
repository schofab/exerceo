import { createClient } from "@/lib/supabase/server";
import type {
  CompetenceUpdateInput,
  EnfantCompetence,
  EnfantCompetenceUpsert,
} from "./types";
import {
  computeMasteryScore,
  computeCompetenceStatus,
  computeNextReviewAt,
  computeNextReviewStage,
  updateRecentResults,
} from "./engine";

function isBooleanArray(value: unknown): value is boolean[] {
  return Array.isArray(value) && value.every((item) => typeof item === "boolean");
}

export async function upsertEnfantCompetenceAfterAnswer(
  input: CompetenceUpdateInput
): Promise<void> {
  const supabase = await createClient();

  const { data: existing, error: existingError } = await supabase
    .from("enfant_competences")
    .select("*")
    .eq("enfant_id", input.enfant_id)
    .eq("skill_id", input.skill_id)
    .maybeSingle<EnfantCompetence>();

  if (existingError) {
    throw new Error(
      `Failed to load existing competence: ${existingError.message}`
    );
  }

  const prevAttempts = existing?.attempts_total ?? 0;
  const prevCorrect = existing?.correct_total ?? 0;
  const prevRecentResults = isBooleanArray(existing?.recent_results)
    ? existing.recent_results
    : [];

  const previousStatus = existing?.status ?? "not_started";
  const previousReviewStage = existing?.review_stage ?? 0;

  const attemptsTotal = prevAttempts + 1;
  const correctTotal = prevCorrect + (input.est_correct ? 1 : 0);
  const recentResults = updateRecentResults(prevRecentResults, input.est_correct);

  const masteryScore = computeMasteryScore(
    attemptsTotal,
    correctTotal,
    recentResults
  );

  const status = computeCompetenceStatus(
    masteryScore,
    attemptsTotal,
    recentResults
  );

  const wasDueForReview =
    existing?.next_review_at != null &&
    new Date(existing.next_review_at).getTime() <= Date.now();

  let reviewStage: number | null = null;

  if (status === "mastered") {
    if (previousStatus === "mastered") {
      if (wasDueForReview) {
        reviewStage = computeNextReviewStage(
          previousReviewStage,
          status,
          input.est_correct
        );
      } else {
        reviewStage = previousReviewStage;
      }
    } else {
      reviewStage = 0;
    }
  } else {
    reviewStage = null;
  }

  const nextReviewAt = computeNextReviewAt(
    status,
    reviewStage ?? 0,
    new Date()
  );

  const row: EnfantCompetenceUpsert = {
    enfant_id: input.enfant_id,
    matiere: input.matiere,
    skill_id: input.skill_id,
    skill_label: input.skill_label,
    attempts_total: attemptsTotal,
    correct_total: correctTotal,
    recent_results: recentResults,
    mastery_score: masteryScore,
    status,
    review_stage: reviewStage,
    last_seen_at: new Date().toISOString(),
    next_review_at: nextReviewAt?.toISOString() ?? null,
  };

  const { error: upsertError } = await supabase
    .from("enfant_competences")
    .upsert(row, { onConflict: "enfant_id,skill_id" });

  if (upsertError) {
    throw new Error(`Failed to upsert competence: ${upsertError.message}`);
  }
}