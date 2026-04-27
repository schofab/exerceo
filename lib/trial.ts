// lib/trial.ts

export type TrialMode = "sessions" | "days";
export type ProgressionStage = "early" | "mid" | "late";

// Configurable par variable d'environnement.
// TRIAL_MODE=sessions (défaut) ou TRIAL_MODE=days
// TRIAL_SESSIONS=7 (défaut) ou autre nombre
// TRIAL_DAYS=14 (défaut) ou autre nombre
const TRIAL_MODE = (process.env.TRIAL_MODE ?? "sessions") as TrialMode;
const TRIAL_SESSIONS = parseInt(process.env.TRIAL_SESSIONS ?? "7", 10);
const TRIAL_DAYS = parseInt(process.env.TRIAL_DAYS ?? "14", 10);

export interface TrialStatus {
  isPremium: boolean;
  isTrialActive: boolean;
  sessionsUsed: number;
  sessionsLeft: number | null; // null si mode 'days' ou premium
  reason: "premium" | "trial_active" | "trial_expired_sessions" | "trial_expired_days";
}

export function computeTrialStatus(profile: {
  is_premium: boolean;
  sessions_used: number;
  created_at: string;
}): TrialStatus {
  if (profile.is_premium) {
    return {
      isPremium: true,
      isTrialActive: true,
      sessionsUsed: profile.sessions_used,
      sessionsLeft: null,
      reason: "premium",
    };
  }

  if (TRIAL_MODE === "days") {
    const elapsed = Date.now() - new Date(profile.created_at).getTime();
    const daysElapsed = elapsed / (1000 * 60 * 60 * 24);
    const active = daysElapsed < TRIAL_DAYS;

    return {
      isPremium: false,
      isTrialActive: active,
      sessionsUsed: profile.sessions_used,
      sessionsLeft: null,
      reason: active ? "trial_active" : "trial_expired_days",
    };
  }

  // Mode "sessions" (par défaut)
  const left = Math.max(0, TRIAL_SESSIONS - profile.sessions_used);

  return {
    isPremium: false,
    isTrialActive: left > 0,
    sessionsUsed: profile.sessions_used,
    sessionsLeft: left,
    reason: left > 0 ? "trial_active" : "trial_expired_sessions",
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