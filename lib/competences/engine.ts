import type { CompetenceStatus, EnfantCompetence } from "./types";

const RECENT_WINDOW = 5;
const MASTERED_MIN_SCORE = 80;
const PROGRESSING_MIN_SCORE = 50;
const MASTERED_MIN_ATTEMPTS = 3;
const MASTERED_MIN_RECENT_SUCCESS = 0.8; // au moins 4/5 récents corrects

// Intervalles de réactivation croissants pour les notions maîtrisées.
// V1 simple : 7j -> 14j -> 30j -> 30j
const REVIEW_INTERVALS_DAYS = [7, 14, 30] as const;

// ── Helpers ──────────────────────────────────────────────────────
function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function getRecentWindow(results: boolean[]): boolean[] {
  return results.slice(-RECENT_WINDOW);
}

function getRecentSuccessRate(results: boolean[]): number {
  const recent = getRecentWindow(results);
  if (recent.length === 0) return 0;
  return recent.filter(Boolean).length / recent.length;
}

function addDays(baseDate: Date, days: number): Date {
  return new Date(baseDate.getTime() + days * 24 * 3600 * 1000);
}

// ── Calcul du score de maîtrise ──────────────────────────────────
// 60% taux global + 40% taux sur les RECENT_WINDOW dernières réponses
export function computeMasteryScore(
  attemptsTotal: number,
  correctTotal: number,
  recentResults: boolean[]
): number {
  if (attemptsTotal <= 0) return 0;

  const safeAttempts = Math.max(1, attemptsTotal);
  const globalPct = clamp(correctTotal / safeAttempts, 0, 1);

  const recent = getRecentWindow(recentResults);
  const recentPct =
    recent.length === 0
      ? globalPct
      : clamp(recent.filter(Boolean).length / recent.length, 0, 1);

  return Math.round((0.6 * globalPct + 0.4 * recentPct) * 100);
}

// ── Statut de compétence ────────────────────────────────────────
// On durcit légèrement "mastered" :
// - score >= 80
// - au moins 3 tentatives
// - tendance récente suffisante (au moins 4/5 corrects si on a assez d'historique)
export function computeCompetenceStatus(
  masteryScore: number,
  attemptsTotal: number,
  recentResults: boolean[]
): CompetenceStatus {
  if (attemptsTotal <= 0) return "not_started";

  const recent = getRecentWindow(recentResults);
  const recentSuccessRate =
    recent.length === 0 ? 0 : recent.filter(Boolean).length / recent.length;

  const hasStrongRecentTrend =
    recent.length < 5 || recentSuccessRate >= MASTERED_MIN_RECENT_SUCCESS;

  if (
    masteryScore >= MASTERED_MIN_SCORE &&
    attemptsTotal >= MASTERED_MIN_ATTEMPTS &&
    hasStrongRecentTrend
  ) {
    return "mastered";
  }

  if (masteryScore >= PROGRESSING_MIN_SCORE) return "progressing";
  return "fragile";
}

// ── Prochaine révision ──────────────────────────────────────────
// next_review_at sert surtout aux notions maîtrisées.
// Pour fragile/progressing, la priorité vient du moteur de sélection,
// pas d'une date de review dédiée.
export function computeNextReviewAt(
  status: CompetenceStatus,
  reviewStage = 0,
  now = new Date()
): Date | null {
  if (status !== "mastered") return null;

  const safeStage = clamp(reviewStage, 0, REVIEW_INTERVALS_DAYS.length - 1);
  const days = REVIEW_INTERVALS_DAYS[safeStage];
  return addDays(now, days);
}

// Optionnel mais pratique si tu veux faire progresser l'intervalle après une review réussie
export function computeNextReviewStage(
  previousStage: number,
  status: CompetenceStatus,
  wasCorrect: boolean
): number {
  if (status !== "mastered") return 0;
  if (!wasCorrect) return 0;
  return clamp(previousStage + 1, 0, REVIEW_INTERVALS_DAYS.length - 1);
}

// ── Mise à jour du tableau recent_results ───────────────────────
// Conserve les RECENT_WINDOW derniers résultats
export function updateRecentResults(
  previous: boolean[],
  newResult: boolean
): boolean[] {
  return [...previous, newResult].slice(-RECENT_WINDOW);
}

// ── Score de priorité d'un exercice candidat ────────────────────
export interface CandidateContext {
  skillId: string;
  matiere: string;
  competence: EnfantCompetence | null; // null = jamais vu
  reviewDue: boolean;
  seenInSession: string[]; // skill_ids déjà traités dans cette session
  recentBankIds: string[]; // IDs bank vus dans les N dernières sessions
  bankId: string;
  subjectCountInSession: Record<string, number>; // matiere → nb d'exos déjà planifiés
  totalInSession: number;
  difficultyLevel?: number; // 1..3 optionnel
}

export function scoreExerciseCandidate(ctx: CandidateContext): number {
  let score = 1;

  const status = ctx.competence?.status ?? "not_started";

  // Priorité par statut
  if (status === "fragile") score += 4;
  else if (status === "progressing") score += 2;
  else if (status === "not_started") score += 1;
  else if (status === "mastered") score -= 2;

  // Bonus de review uniquement pour une notion maîtrisée arrivée à échéance
  if (status === "mastered" && ctx.reviewDue) score += 2;

  // Pénalités anti-répétition
  if (ctx.recentBankIds.includes(ctx.bankId)) score -= 3;
  if (ctx.seenInSession.includes(ctx.skillId)) score -= 2;

  // Éviter la surreprésentation d'une matière
  const subjectCount = ctx.subjectCountInSession[ctx.matiere] ?? 0;
  const projectedTotal = ctx.totalInSession + 1;
  const projectedSubjectRatio = (subjectCount + 1) / projectedTotal;

  if (projectedTotal >= 3 && projectedSubjectRatio > 0.5) {
    score -= 2;
  } else if (projectedTotal >= 3 && projectedSubjectRatio > 0.4) {
    score -= 1;
  }

  // Ajustement léger selon difficulté si disponible
  if (typeof ctx.difficultyLevel === "number") {
    if (status === "fragile" && ctx.difficultyLevel >= 3) score -= 1;
    if (status === "mastered" && ctx.difficultyLevel <= 1) score -= 1;
  }

  return score;
}