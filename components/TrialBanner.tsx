"use client";

import { useEffect, useState } from "react";

type TrialStatus = {
  isPremium: boolean;
  isTrialActive: boolean;
  sessionsUsed: number;
  sessionsLeft: number | null;
  reason: "premium" | "trial_active" | "trial_expired_sessions" | "trial_expired_days";
};

export default function TrialBanner() {
  const [status, setStatus] = useState<TrialStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch("/api/trial-status", { cache: "no-store" });
        if (!res.ok) throw new Error("Erreur chargement trial-status");
        const data = await res.json();
        if (active) setStatus(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  if (loading || !status) return null;

  if (status.isPremium) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
        Vous êtes sur l’offre Premium. Accès illimité activé.
      </div>
    );
  }

  if (status.isTrialActive) {
    return (
      <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
        Il vous reste {status.sessionsLeft} séance{status.sessionsLeft === 1 ? "" : "s"} gratuite{status.sessionsLeft === 1 ? "" : "s"}.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      Votre essai gratuit est terminé. Passez à Premium pour continuer.
    </div>
  );
}