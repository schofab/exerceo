"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { MATIERE_COLORS } from "@/lib/matieres";
import type { Creature, Matiere } from "@/lib/types";

interface Props {
  creatures: Creature[];
  onClose: () => void;
}

const MATIERE_BADGE_COLOR: Record<
  string,
  "blue" | "mint" | "orange" | "yellow" | "purple"
> = {
  "Mathématiques":       "blue",
  "Français":            "mint",
  "Sciences":            "orange",
  "Histoire-Géographie": "yellow",
  "Anglais":             "purple",
};

export default function CreatureUnlockPopup({ creatures, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const current = creatures[index];
  const isLast = index === creatures.length - 1;

  if (!current) return null;

  const couleur = MATIERE_COLORS[current.subject as Matiere] ?? { bg: "#748bf7", text: "#ffffff" };
  const badgeColor = MATIERE_BADGE_COLOR[current.subject] ?? "blue";

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(7, 20, 83, 0.6)" }}
    >
      {/* Card — key force le rejoue de l'animation à chaque créature */}
      <div
        key={index}
        className="w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl animate-confetti-pop"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Header blanc */}
        <div className="flex flex-col items-center justify-center pt-8 pb-6 gap-2 bg-white">
          <img
            src={`/creatures/${current.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.png`}
            alt={current.name}
            className="w-36 h-36 object-contain select-none animate-bounce-gentle"
          />
        </div>

        {/* Corps */}
        <div className="px-6 py-5 text-center space-y-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            🎉 Nouveau Doceo débloqué !
          </p>
          <p className="text-2xl font-extrabold" style={{ color: "#071453" }}>
            {current.name}
          </p>
          <div className="flex justify-center">
            <Badge color={badgeColor}>{current.subject}</Badge>
          </div>
          <p className="text-sm text-gray-500 pt-1">{current.description}</p>
          <p className="text-xs font-semibold" style={{ color: "#748bf7" }}>
            ⭐ {current.stars_required} étoiles atteintes !
          </p>
        </div>

        {/* Pied */}
        <div className="px-6 pb-6 flex flex-col gap-2">
          {isLast ? (
            <Button size="lg" fullWidth onClick={onClose}>
              Super !
            </Button>
          ) : (
            <>
              <Button size="lg" fullWidth onClick={() => setIndex((i) => i + 1)}>
                Suivant →
              </Button>
              <p className="text-center text-xs text-gray-400">
                {index + 1} / {creatures.length}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
