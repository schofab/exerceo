// lib/trial.ts

export type ProgressionStage = "early" | "mid" | "late";

const TRIAL_SESSIONS = parseInt(process.env.TRIAL_SESSIONS ?? "7", 10);

export interface TrialStatus {
  isPremium: boolean;
  isTrialActive: boolean;
  freeSessionsTotal: number;
  freeSessionsUsed: number;
  freeSessionsRemaining: number | null; // null si premium
  reason: "premium" | "trial_active" | "trial_expired_sessions";
}

export function computeTrialStatus(profile: {
  is_premium: boolean;
  sessions_used: number | null;
  created_at?: string | null;
}): TrialStatus {
  const used = Math.max(0, profile.sessions_used ?? 0);

  if (profile.is_premium) {
    return {
      isPremium: true,
      isTrialActive: true,
      freeSessionsTotal: TRIAL_SESSIONS,
      freeSessionsUsed: used,
      freeSessionsRemaining: null,
      reason: "premium",
    };
  }

  const remaining = Math.max(0, TRIAL_SESSIONS - used);

  return {
    isPremium: false,
    isTrialActive: remaining > 0,
    freeSessionsTotal: TRIAL_SESSIONS,
    freeSessionsUsed: used,
    freeSessionsRemaining: remaining,
    reason: remaining > 0 ? "trial_active" : "trial_expired_sessions",
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