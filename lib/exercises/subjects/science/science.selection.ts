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
import type { ScienceExercise } from './science.types';
import type { ScienceSkill } from './science.types';
import { scienceExercises } from './science.bank';

// ─── Internal helpers ─────────────────────────────────────────────────────────

function computeBaseScore(
  exercise: ScienceExercise,
  profile: StudentProfile
): number {
  const strengths = normalizeList(profile.strengths);
  const weaknesses = normalizeList(profile.weaknesses);
  let score = 0;

  if (weaknesses.includes('sciences') || weaknesses.includes('science')) {
    if (exercise.generalLevel === 'beginner') score += 2;
  }

  if (strengths.includes('sciences') || strengths.includes('science')) {
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
  exercise: ScienceExercise,
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
    for (const ex of scienceExercises) {
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
    for (const ex of scienceExercises) {
      if (idSet.has(ex.id)) {
        for (const t of ex.tags ?? []) recentTagSet.add(t.toLowerCase());
      }
    }
  }

  return { recentSubskillCounts, recentTagSet };
}

function applyProfileAdaptation(
  exercise: ScienceExercise,
  profile: StudentProfile
): ScienceExercise {
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
  scored: Array<{ exercise: ScienceExercise; score: number }>,
  limit: number
): ScienceExercise[] {
  const selected: ScienceExercise[] = [];
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

  greedyPick(freshCandidates, M);
  if (selected.length < limit) greedyPick(scored, M);
  if (selected.length < limit) greedyPick(scored, M * 2);
  if (selected.length < limit) greedyPick(scored, Infinity);

  return selected;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function getScienceExercises(params: {
  profile: StudentProfile;
  skill?: ScienceSkill;
  limit?: number;
  history?: ExerciseSelectionHistory;
}): ScienceExercise[] {
  const { profile, skill, limit = 5, history } = params;

  const pool = scienceExercises.filter(
    (ex) =>
      ex.subject === 'sciences' &&
      ex.schoolClass === profile.schoolClass &&
      matchesLevel(ex.generalLevel, profile.generalLevel) &&
      (!skill || ex.skill === skill)
  );

  if (pool.length === 0) return [];

  const emptyHistory: ExerciseSelectionHistory = { recentExerciseIds: [] };
  const ctx = resolveHistoryContext(history ?? emptyHistory);

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

  const selected = selectWithDiversity(scored, limit);

  return selected.map((ex) => applyProfileAdaptation(ex, profile));
}
