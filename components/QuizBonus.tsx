"use client";

import { useState } from "react";
import Image from "next/image";
import type { Matiere } from "@/lib/types";
import { MATIERE_COLORS, MATIERE_LABELS, MATIERE_PICTOS_BLANC } from "@/lib/matieres";

interface QuizQuestion {
  enonce: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
}

interface QuizBonusProps {
  matiere: Matiere;
  classe: string;
}

export default function QuizBonus({ matiere, classe }: QuizBonusProps) {
  const [ouvert, setOuvert]                   = useState(false);
  const [questions, setQuestions]             = useState<QuizQuestion[] | null>(null);
  const [loading, setLoading]                 = useState(false);
  const [error, setError]                     = useState("");
  const [currentQ, setCurrentQ]               = useState(0);
  const [reponseChoisie, setReponseChoisie]   = useState<string | null>(null);
  const [score, setScore]                     = useState(0);
  const [termine, setTermine]                 = useState(false);

  const couleur = MATIERE_COLORS[matiere] ?? { bg: "#748bf7", text: "#ffffff" };
  const picto   = MATIERE_PICTOS_BLANC[matiere];
  const label   = MATIERE_LABELS[matiere] ?? matiere;

  async function handleToggle() {
    // Charger les questions au premier clic
    if (!ouvert && questions === null && !loading) {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/generate/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ matiere, classe }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Erreur");
        setQuestions(data.questions ?? []);
      } catch {
        setError("Impossible de charger le quiz. Réessaie !");
      } finally {
        setLoading(false);
      }
    }
    setOuvert((v) => !v);
  }

  function handleReponse(option: string) {
    if (reponseChoisie !== null) return; // déjà répondu
    setReponseChoisie(option);
    if (option === questions![currentQ].reponse_correcte) {
      setScore((s) => s + 1);
    }
  }

  function handleSuivant() {
    if (currentQ + 1 >= questions!.length) {
      setTermine(true);
    } else {
      setCurrentQ((q) => q + 1);
      setReponseChoisie(null);
    }
  }

  const q = questions?.[currentQ];
  const total = questions?.length ?? 0;

  // Couleur d'un bouton réponse après validation
  function optionStyle(opt: string) {
    if (reponseChoisie === null) {
      return { backgroundColor: "#f5f9ff", borderColor: "#e9ecf8", color: "#071453" };
    }
    if (opt === q!.reponse_correcte) {
      return { backgroundColor: "#6bd6a6", borderColor: "#6bd6a6", color: "#071453" };
    }
    if (opt === reponseChoisie) {
      return { backgroundColor: "#fecaca", borderColor: "#ef4444", color: "#071453" };
    }
    return { backgroundColor: "#f5f9ff", borderColor: "#e9ecf8", color: "#071453", opacity: 0.5 };
  }

  return (
    <div
      className="rounded-2xl overflow-hidden border-2 transition-all duration-300"
      style={{ borderColor: couleur.bg }}
    >
      {/* ── Header cliquable ── */}
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center gap-3 px-4 py-3.5 cursor-pointer transition-opacity hover:opacity-90"
        style={{ backgroundColor: couleur.bg }}
      >
        {picto && (
          <Image src={picto} alt="" width={32} height={32} className="flex-shrink-0" />
        )}
        <div className="flex-1 text-left">
          <p
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: couleur.text, opacity: 0.75 }}
          >
            Quiz bonus
          </p>
          <p className="font-extrabold text-base leading-tight" style={{ color: couleur.text }}>
            {label}
          </p>
        </div>
        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={`flex-shrink-0 transition-transform duration-300 ${ouvert ? "rotate-180" : ""}`}
          style={{ color: couleur.text }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* ── Corps accordéon ── */}
      {ouvert && (
        <div className="px-4 py-4 space-y-4 animate-fade-slide-up">

          {/* Chargement */}
          {loading && (
            <p className="text-center text-sm text-gray-400 py-6">
              Chargement du quiz…
            </p>
          )}

          {/* Erreur */}
          {error && (
            <p className="text-center text-sm text-red-500 py-4">{error}</p>
          )}

          {/* Quiz en cours */}
          {!loading && !error && questions && !termine && q && (
            <div className="space-y-3">

              {/* Progression */}
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-gray-400">Question {currentQ + 1}/{total}</span>
                <span style={{ color: couleur.bg }}>Score : {score}/{currentQ}</span>
              </div>

              {/* Énoncé */}
              <p className="font-bold text-sm leading-snug" style={{ color: "#071453" }}>
                {q.enonce}
              </p>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleReponse(opt)}
                    disabled={reponseChoisie !== null}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all duration-200 cursor-pointer disabled:cursor-default"
                    style={optionStyle(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Explication + bouton suivant */}
              {reponseChoisie !== null && (
                <>
                  <div
                    className="rounded-xl px-4 py-3 text-xs leading-relaxed"
                    style={{ backgroundColor: "#f5f9ff", color: "#071453" }}
                  >
                    <span className="font-bold">Explication : </span>
                    {q.explication}
                  </div>
                  <button
                    type="button"
                    onClick={handleSuivant}
                    className="w-full py-2.5 rounded-full text-sm font-bold cursor-pointer transition-all hover:opacity-90 active:scale-[0.98]"
                    style={{ backgroundColor: couleur.bg, color: couleur.text }}
                  >
                    {currentQ + 1 >= total ? "Voir mon score →" : "Question suivante →"}
                  </button>
                </>
              )}
            </div>
          )}

          {/* Score final */}
          {!loading && !error && termine && questions && (
            <div className="text-center py-4 space-y-2">
              <div className="text-5xl mb-2">
                {score === total
                  ? <Image src="/icons/picto-etoile-pleine.svg" alt="⭐" width={56} height={56} className="mx-auto" />
                  : score >= total / 2
                  ? <Image src="/icons/picto-etoile-pleine.svg" alt="⭐" width={48} height={48} className="mx-auto opacity-80" />
                  : <Image src="/icons/picto-etoile-vide.svg" alt="☆" width={48} height={48} className="mx-auto" />
                }
              </div>
              <p className="font-extrabold text-xl" style={{ color: "#071453" }}>
                {score}/{total}
              </p>
              <p className="text-sm text-gray-500">
                {score === total
                  ? "Parfait, bravo !"
                  : score >= total / 2
                  ? "Bien joué, continue !"
                  : "Continue à t'entraîner !"}
              </p>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
