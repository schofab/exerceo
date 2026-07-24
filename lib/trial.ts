// lib/trial.ts

export type ProgressionStage = "early" | "mid" | "late";

const TRIAL_DAYS = 14;

export interface TrialStatus {
  isPremium: boolean;
  isTrialActive: boolean;
  trialDaysTotal: number;
  trialDaysRemaining: number | null; // null si premium
  reason: "premium" | "trial_active" | "trial_expired";
}

export function computeTrialStatus(profile: {
  is_premium: boolean;
  sessions_used: number | null;
  created_at?: string | null;
}): TrialStatus {
  if (profile.is_premium) {
    return {
      isPremium: true,
      isTrialActive: true,
      trialDaysTotal: TRIAL_DAYS,
      trialDaysRemaining: null,
      reason: "premium",
    };
  }

  const createdAt = profile.created_at ? new Date(profile.created_at) : null;
  const now = new Date();
  const daysElapsed = createdAt
    ? Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24))
    : TRIAL_DAYS;
  const daysRemaining = Math.max(0, TRIAL_DAYS - daysElapsed);

  return {
    isPremium: false,
    isTrialActive: daysRemaining > 0,
    trialDaysTotal: TRIAL_DAYS,
    trialDaysRemaining: daysRemaining,
    reason: daysRemaining > 0 ? "trial_active" : "trial_expired",
  };
}

// Utilitaire stage pour les selectors de la banque d'exos
// Un exercice tagué 'mid' est accessible à partir du stade 'mid'.
// Un exercice non tagué (ou 'all') est toujours accessible.
const STAGE_RANK: Record<ProgressionStage, number> = { early: 1, mid: 2, late: 3 };

export function isStageAllowed(
  exerciseStage: ProgressionStage | "all" | undefined,
  enfantStage: ProgressionStage
): boolean {
  if (!exerciseStage || exerciseStage === "all") return true;
  return STAGE_RANK[exerciseStage] <= STAGE_RANK[enfantStage];
}
