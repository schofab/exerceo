"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

type TrialStatus = {
  isPremium: boolean;
  isTrialActive: boolean;
  trialDaysRemaining: number | null;
  reason: "premium" | "trial_active" | "trial_expired";
};

// Icône de déconnexion (porte avec flèche)
function LogoutIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export default function NavActions() {
  const router = useRouter();
  const [status, setStatus] = useState<TrialStatus | null>(null);

  useEffect(() => {
    fetch("/api/trial-status", { cache: "no-store" })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => { if (data) setStatus(data); })
      .catch(() => {});
  }, []);

  async function handleSignOut() {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2">

      {/* Statut d'essai / Premium */}
      {status && !status.isPremium && status.isTrialActive && (
        <>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
            style={{ backgroundColor: "#e8edff", color: "#071453" }}
          >
            {status.trialDaysRemaining}j gratuits restants
          </span>
          <Link
            href="/api/stripe/checkout"
            prefetch={false}
            className="text-xs font-bold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#748bf7" }}
          >
            Passer Premium
          </Link>
        </>
      )}

      {status && !status.isPremium && !status.isTrialActive && (
        <Link
          href="/api/stripe/checkout"
          prefetch={false}
          className="text-xs font-bold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90 whitespace-nowrap"
          style={{ backgroundColor: "#f59e0b" }}
        >
          Passer Premium
        </Link>
      )}

      {/* Bouton déconnexion — icône uniquement */}
      <button
        onClick={handleSignOut}
        title="Déconnexion"
        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
      >
        <LogoutIcon />
      </button>
    </div>
  );
}
