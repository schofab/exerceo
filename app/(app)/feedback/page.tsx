"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const APPAREILS = [
  { value: "telephone", label: "📱 Téléphone" },
  { value: "tablette",  label: "🖥️ Tablette" },
  { value: "ordinateur", label: "💻 Ordinateur" },
];

export default function FeedbackPage() {
  const router = useRouter();
  const [step, setStep] = useState<"form" | "merci">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [prenom, setPrenom] = useState("");
  const [appareil, setAppareil] = useState("");
  const [note, setNote] = useState<number | null>(null);
  const [pointsPositifs, setPointsPositifs] = useState("");
  const [pointsAmeliorer, setPointsAmeliorer] = useState("");
  const [bug, setBug] = useState("");
  const [usageRegulier, setUsageRegulier] = useState<boolean | null>(null);
  const [intentionPayer, setIntentionPayer] = useState<boolean | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!note) { setError("Merci d'attribuer une note."); return; }
    setError("");
    setLoading(true);

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prenom,
        appareil,
        note,
        points_positifs: pointsPositifs,
        points_ameliorer: pointsAmeliorer,
        bug,
        usage_regulier: usageRegulier,
        intention_payer: intentionPayer,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setStep("merci");
    } else {
      setError("Une erreur est survenue. Réessaie.");
    }
  }

  if (step === "merci") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="text-5xl">🙏</div>
        <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
          Merci pour ton retour !
        </h1>
        <p className="text-sm text-gray-500 max-w-xs">
          Tes commentaires nous aident à améliorer exerceō pour tous les enfants.
        </p>
        <button
          onClick={() => router.push("/tableau-de-bord")}
          className="mt-4 text-sm font-semibold px-5 py-2.5 rounded-xl text-white"
          style={{ backgroundColor: "#748bf7" }}
        >
          Retour au tableau de bord
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
          Donner mon avis
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Tu es bêta-testeur — ton retour compte vraiment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Prénom */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            Ton prénom <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            placeholder="Ex : Sophie"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Appareil */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            Tu utilises exerceō sur…
          </label>
          <div className="flex gap-2 flex-wrap">
            {APPAREILS.map((a) => (
              <button
                key={a.value}
                type="button"
                onClick={() => setAppareil(a.value)}
                className="text-sm px-3.5 py-2 rounded-xl border font-medium transition-colors"
                style={{
                  backgroundColor: appareil === a.value ? "#748bf7" : "white",
                  color: appareil === a.value ? "white" : "#071453",
                  borderColor: appareil === a.value ? "#748bf7" : "#e0e7ff",
                }}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            Note globale <span className="text-red-400">*</span>
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNote(n)}
                className="w-10 h-10 rounded-xl text-lg font-bold border transition-colors"
                style={{
                  backgroundColor: note === n ? "#748bf7" : "white",
                  color: note === n ? "white" : "#748bf7",
                  borderColor: note === n ? "#748bf7" : "#e0e7ff",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Points positifs */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            Qu'est-ce qui t'a semblé le plus utile ?
          </label>
          <textarea
            value={pointsPositifs}
            onChange={(e) => setPointsPositifs(e.target.value)}
            rows={3}
            placeholder="Ce que j'ai apprécié…"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          />
        </div>

        {/* Points à améliorer */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            Qu'est-ce qui manque ou pourrait être amélioré ?
          </label>
          <textarea
            value={pointsAmeliorer}
            onChange={(e) => setPointsAmeliorer(e.target.value)}
            rows={3}
            placeholder="Ce que je changerais…"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          />
        </div>

        {/* Bug */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            As-tu rencontré un bug ?
          </label>
          <textarea
            value={bug}
            onChange={(e) => setBug(e.target.value)}
            rows={2}
            placeholder="Décris ce qui s'est passé…"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          />
        </div>

        {/* Usage régulier */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            Utiliserais-tu cette app régulièrement ?
          </label>
          <div className="flex gap-2">
            {[{ v: true, l: "Oui" }, { v: false, l: "Non" }].map(({ v, l }) => (
              <button
                key={l}
                type="button"
                onClick={() => setUsageRegulier(v)}
                className="text-sm px-5 py-2 rounded-xl border font-medium transition-colors"
                style={{
                  backgroundColor: usageRegulier === v ? "#748bf7" : "white",
                  color: usageRegulier === v ? "white" : "#071453",
                  borderColor: usageRegulier === v ? "#748bf7" : "#e0e7ff",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Intention de payer */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold" style={{ color: "#071453" }}>
            Serais-tu prêt(e) à payer 29 €/an pour y accéder ?
          </label>
          <div className="flex gap-2">
            {[{ v: true, l: "Oui" }, { v: false, l: "Non" }].map(({ v, l }) => (
              <button
                key={l}
                type="button"
                onClick={() => setIntentionPayer(v)}
                className="text-sm px-5 py-2 rounded-xl border font-medium transition-colors"
                style={{
                  backgroundColor: intentionPayer === v ? "#748bf7" : "white",
                  color: intentionPayer === v ? "white" : "#071453",
                  borderColor: intentionPayer === v ? "#748bf7" : "#e0e7ff",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-2xl text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: "#748bf7" }}
        >
          {loading ? "Envoi en cours…" : "Envoyer mon avis"}
        </button>
      </form>
    </div>
  );
}
