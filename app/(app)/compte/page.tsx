import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import type { Profile } from "@/lib/types";
import { computeTrialStatus } from "@/lib/trial";

export const dynamic = "force-dynamic";
export const metadata = { title: "Mon compte — exerceō" };

export default async function ComptePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single<Profile>();

  const trialStatus = profile ? computeTrialStatus(profile) : null;

  return (
    <div className="space-y-6 pb-10">
      <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
        Mon compte
      </h1>

      {/* Infos compte */}
      <div className="border border-gray-100 rounded-2xl p-5 space-y-3"
        style={{ boxShadow: "0 1px 6px rgba(116,139,247,0.07)" }}>
        <h2 className="text-sm font-bold" style={{ color: "#071453" }}>Informations</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        {trialStatus && (
          <div>
            {trialStatus.isPremium ? (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>
                ✦ Abonnement Premium actif
              </span>
            ) : trialStatus.isTrialActive ? (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "#e8edff", color: "#071453" }}>
                Essai gratuit — {trialStatus.trialDaysRemaining} jour{trialStatus.trialDaysRemaining !== 1 ? "s" : ""} restant{trialStatus.trialDaysRemaining !== 1 ? "s" : ""}
              </span>
            ) : (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>
                Essai expiré
              </span>
            )}
          </div>
        )}
      </div>

      {/* Abonnement */}
      {trialStatus?.isPremium && (
        <div className="border border-gray-100 rounded-2xl p-5 space-y-3"
          style={{ boxShadow: "0 1px 6px rgba(116,139,247,0.07)" }}>
          <h2 className="text-sm font-bold" style={{ color: "#071453" }}>Abonnement</h2>
          <p className="text-sm text-gray-500">
            Tu es abonné(e) à exerceō Premium. Tu peux gérer ou résilier ton abonnement depuis le portail Stripe.
          </p>
          <Link
            href="/api/stripe/portal"
            prefetch={false}
            className="inline-block text-sm font-semibold px-4 py-2.5 rounded-xl border transition-colors hover:bg-gray-50"
            style={{ color: "#071453", borderColor: "#e0e7ff" }}
          >
            Gérer mon abonnement →
          </Link>
        </div>
      )}

      {!trialStatus?.isPremium && (
        <div className="border border-gray-100 rounded-2xl p-5 space-y-3"
          style={{ boxShadow: "0 1px 6px rgba(116,139,247,0.07)" }}>
          <h2 className="text-sm font-bold" style={{ color: "#071453" }}>Passer Premium</h2>
          <p className="text-sm text-gray-500">
            Accès illimité pour toute la famille — 29 €/an, sans engagement.
          </p>
          <Link
            href="/api/stripe/checkout"
            prefetch={false}
            className="inline-block text-sm font-bold px-4 py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#748bf7" }}
          >
            S'abonner →
          </Link>
        </div>
      )}
    </div>
  );
}
