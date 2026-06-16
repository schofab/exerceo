"use client";

import { useState } from "react";

export type FeedbackSignal = "deja_vu" | "pas_encore_vu" | "trop_facile" | "trop_difficile";

interface ExerciceFeedbackProps {
  onFeedback: (signal: FeedbackSignal) => void;
}

const BOUTONS: { signal: FeedbackSignal; label: string }[] = [
  { signal: "trop_facile",    label: "Trop facile" },
  { signal: "trop_difficile", label: "Trop difficile" },
  { signal: "deja_vu",        label: "Déjà vu à l'école" },
  { signal: "pas_encore_vu",  label: "Pas encore vu à l'école" },
];

export default function ExerciceFeedback({ onFeedback }: ExerciceFeedbackProps) {
  const [envoye, setEnvoye] = useState(false);

  function handleClick(signal: FeedbackSignal) {
    if (envoye) return;
    setEnvoye(true);
    onFeedback(signal);
  }

  if (envoye) {
    return (
      <p className="text-xs text-gray-400 text-center mt-3 py-1">
        Merci pour le retour !
      </p>
    );
  }

  return (
    <div className="mt-4 pt-3 border-t border-gray-100">
      <p className="text-xs text-gray-400 mb-2 text-center">
        Comment trouves-tu cet exercice ? <span className="italic">Réponse facultative</span>
      </p>
      <div className="grid grid-cols-2 gap-2">
        {BOUTONS.map(({ signal, label }) => (
          <button
            key={signal}
            type="button"
            onClick={() => handleClick(signal)}
            className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-xs text-gray-500 font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150 active:scale-[0.97] text-center"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
