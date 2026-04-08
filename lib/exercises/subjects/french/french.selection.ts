import {
  DIVERSITY_CONFIG,
  normalizeList,
  matchesLevel,
  chooseOptionsForProfile,
  personalizeText,
} from '../../core/exercise-core.selection';
import type {
  StudentProfile,
  ExerciseProfileAdaptation,
} from '../../core/exercise-core.types';
import type { ExerciseSelectionHistory } from '../../core/exercise-core.selection';
import type { FrenchExercise } from './french.types';
import type { FrenchSkill } from './french.types';
import { frenchExercises } from './french.bank';

// ─── Internal helpers ─────────────────────────────────────────────────────────

function computeBaseScore(
  exercise: FrenchExercise,
  profile: StudentProfile
): number {
  const strengths = normalizeList(profile.strengths);
  const weaknesses = normalizeList(profile.weaknesses);
  let score = 0;

  if (weaknesses.includes('français') || weaknesses.includes('francais')) {
    if (exercise.generalLevel === 'beginner') score += 2;
  }

  if (strengths.includes('français') || strengths.includes('francais')) {
    if (exercise.generalLevel === 'advanced') score += 1;
  }

  if (profile.learningProfile === 'attention_courte') {
    if (exercise.estimatedMinutes <= 2) score += 2;
  }

  if (profile.learningProfile === 'progressif') {
    if (exercise.format === 'fill_in_blank' || exercise.format === 'qcm') score += 1;
  }

  if (profile.learningProfile === 'defi_avance') {
    if (exercise.generalLevel === 'advanced') score += 2;
  }

  return score;
}

function computeDiversityPenalty(
  exercise: FrenchExercise,
  history: ExerciseSelectionHistory,
  recentSubskillCounts: Map<string, number>,
  recentTagSet: Set<string>
): number {
  let penalty = 0;

  if (history.recentExerciseIds.includes(exercise.id)) {
    penalty += DIVERSITY_CONFIG.ID_PENALTY;
  }

  const subskillOccurrences = recentSubskillCounts.get(exercise.subskill) ?? 0;
  penalty += subskillOccurrences * DIVERSITY_CONFIG.SUBSKILL_PENALTY;

  const sharedTags = (exercise.tags ?? []).filter((t) =>
    recentTagSet.has(t.toLowerCase())
  ).length;
  penalty += sharedTags * DIVERSITY_CONFIG.TAG_PENALTY;

  return penalty;
}

function resolveHistoryContext(history: ExerciseSelectionHistory): {
  recentSubskillCounts: Map<string, number>;
  recentTagSet: Set<string>;
} {
  const recentSubskillCounts = new Map<string, number>();
  const recentTagSet = new Set<string>();

  if (history.recentSubskills) {
    for (const s of history.recentSubskills) {
      recentSubskillCounts.set(s, (recentSubskillCounts.get(s) ?? 0) + 1);
    }
  } else {
    const idSet = new Set(history.recentExerciseIds);
    for (const ex of frenchExercises) {
      if (idSet.has(ex.id)) {
        recentSubskillCounts.set(
          ex.subskill,
          (recentSubskillCounts.get(ex.subskill) ?? 0) + 1
        );
      }
    }
  }

  if (history.recentTags) {
    for (const t of history.recentTags) recentTagSet.add(t.toLowerCase());
  } else {
    const idSet = new Set(history.recentExerciseIds);
    for (const ex of frenchExercises) {
      if (idSet.has(ex.id)) {
        for (const t of ex.tags ?? []) recentTagSet.add(t.toLowerCase());
      }
    }
  }

  return { recentSubskillCounts, recentTagSet };
}

function applyProfileAdaptation(
  exercise: FrenchExercise,
  profile: StudentProfile
): FrenchExercise {
  const adaptation = exercise.adaptations.find(
    (a: ExerciseProfileAdaptation) => a.profile === profile.learningProfile
  );
  return {
    ...exercise,
    instructions: personalizeText(
      adaptation?.instruction ?? exercise.instructions,
      profile
    ),
    prompt: personalizeText(exercise.prompt, profile),
    hint: adaptation?.extraHint ?? exercise.hint,
    options: chooseOptionsForProfile(exercise.options, adaptation),
  };
}

function selectWithDiversity(
  scored: Array<{ exercise: FrenchExercise; score: number }>,
  limit: number
): FrenchExercise[] {
  const selected: FrenchExercise[] = [];
  const selectedIds = new Set<string>();
  const subskillCounts = new Map<string, number>();

  function greedyPick(
    candidates: typeof scored,
    maxSameSubskill: number
  ): void {
    for (const { exercise } of candidates) {
      if (selected.length >= limit) break;
      if (selectedIds.has(exercise.id)) continue;
      const count = subskillCounts.get(exercise.subskill) ?? 0;
      if (count >= maxSameSubskill) continue;
      selected.push(exercise);
      selectedIds.add(exercise.id);
      subskillCounts.set(exercise.subskill, count + 1);
    }
  }

  const freshCandidates = scored.filter((s) => s.score >= 0);
  const M = DIVERSITY_CONFIG.MAX_SAME_SUBSKILL;

  greedyPick(freshCandidates, M);            // Passe A
  if (selected.length < limit) greedyPick(scored, M);        // Passe B
  if (selected.length < limit) greedyPick(scored, M * 2);    // Passe C
  if (selected.length < limit) greedyPick(scored, Infinity); // Passe D

  return selected;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Sélectionne des exercices français adaptés au profil de l'élève.
 *
 * Rétrocompatible : les paramètres existants (profile, skill, limit) sont
 * inchangés. Le paramètre `history` est optionnel et active l'anti-répétition.
 */
export function getFrenchExercises(params: {
  profile: StudentProfile;
  skill?: FrenchSkill;
  limit?: number;
  history?: ExerciseSelectionHistory;
}): FrenchExercise[] {
  const { profile, skill, limit = 5, history } = params;

  // 1. Filtrage de base
  const pool = frenchExercises.filter(
    (ex) =>
      ex.subject === 'francais' &&
      ex.schoolClass === profile.schoolClass &&
      matchesLevel(ex.generalLevel, profile.generalLevel) &&
      (!skill || ex.skill === skill)
  );

  if (pool.length === 0) return [];

  // 2. Contexte historique (résolu une seule fois)
  const emptyHistory: ExerciseSelectionHistory = { recentExerciseIds: [] };
  const ctx = resolveHistoryContext(history ?? emptyHistory);

  // 3. Scoring : pertinence pédagogique − pénalités de répétition
  const scored = pool
    .map((exercise) => ({
      exercise,
      score:
        computeBaseScore(exercise, profile) -
        (history
          ? computeDiversityPenalty(
              exercise,
              history,
              ctx.recentSubskillCounts,
              ctx.recentTagSet
            )
          : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(DIVERSITY_CONFIG.CANDIDATE_POOL_SIZE, limit * 3));

  // 4. Sélection gloutonne avec diversité de subskill + fallback
  const selected = selectWithDiversity(scored, limit);

  // 5. Personnalisation finale (profil + prénom)
  return selected.map((ex) => applyProfileAdaptation(ex, profile));
}
