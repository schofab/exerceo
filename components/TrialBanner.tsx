"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TrialStatus = {
  isPremium: boolean;
  isTrialActive: boolean;
  trialDaysTotal: number;
  trialDaysRemaining: number | null;
  reason: "premium" | "trial_active" | "trial_expired";
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

  if (status.isPremium) return null;

  if (status.isTrialActive) {
    const j = status.trialDaysRemaining ?? 0;
    return (
      <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
        Il vous reste <strong>{j} jour{j > 1 ? "s" : ""}</strong> sur votre essai gratuit.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 flex items-center justify-between gap-3 flex-wrap">
      <span>Votre essai gratuit est terminé.</span>
      <Link
        href="/api/stripe/checkout"
        prefetch={false}
        className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90 flex-shrink-0"
        style={{ backgroundColor: "#748bf7" }}
      >
        Passer Premium — 29 €/an
      </Link>
    </div>
  );
}
