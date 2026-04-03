"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { MATIERE_COLORS } from "@/lib/matieres";
import type { CreatureAvecStatut } from "@/lib/types";

interface CreatureCardProps {
  creature: CreatureAvecStatut;
}

function creatureImageSrc(name: string): string {
  const slug = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return `/creatures/${slug}.png`;
}

function CreatureZoomModal({
  creature,
  onClose,
}: {
  creature: CreatureAvecStatut;
  onClose: () => void;
}) {
  const couleur = MATIERE_COLORS[creature.subject] ?? { bg: "#e5e7eb", text: "#071453" };
  const imgSrc = creatureImageSrc(creature.name);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ backgroundColor: "rgba(7, 20, 83, 0.55)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl bg-white animate-confetti-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image grande */}
        <div className="flex items-center justify-center pt-8 pb-4 bg-white">
          <img
            src={imgSrc}
            alt={creature.name}
            className="w-48 h-48 object-contain select-none"
          />
        </div>

        {/* Infos */}
        <div className="px-6 pb-4 text-center space-y-1">
          <p className="text-2xl font-extrabold" style={{ color: couleur.bg }}>
            {creature.name}
          </p>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            {creature.subject}
          </p>
          <p className="text-sm text-gray-500 pt-1">{creature.description}</p>
          <p className="text-xs font-semibold pt-1" style={{ color: "#748bf7" }}>
            ⭐ {creature.stars_required} étoiles
          </p>
        </div>

        {/* Bouton fermer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-2xl text-sm font-bold text-white"
            style={{ backgroundColor: couleur.bg }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CreatureCard({ creature }: CreatureCardProps) {
  const [zoomed, setZoomed] = useState(false);
  const couleur = MATIERE_COLORS[creature.subject] ?? { bg: "#e5e7eb", text: "#071453" };
  const imgSrc = creatureImageSrc(creature.name);

  if (creature.unlocked) {
    return (
      <>
        <Card
          className="overflow-hidden p-0 cursor-pointer active:scale-95 transition-transform"
          onClick={() => setZoomed(true)}
        >
          {/* Header blanc */}
          <div className="flex items-center justify-center py-4 bg-white">
            <img
              src={imgSrc}
              alt={creature.name}
              className="w-28 h-28 object-contain select-none"
            />
          </div>
          {/* Infos */}
          <div className="px-3 py-3 text-center">
            <p className="font-extrabold text-sm truncate" style={{ color: couleur.bg }}>
              {creature.name}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 truncate">{creature.subject}</p>
            <p className="text-xs font-semibold mt-1" style={{ color: "#748bf7" }}>
              ⭐ {creature.stars_required}
            </p>
          </div>
        </Card>

        {zoomed && (
          <CreatureZoomModal creature={creature} onClose={() => setZoomed(false)} />
        )}
      </>
    );
  }

  // Verrouillée — silhouette mystère
  return (
    <Card className="overflow-hidden p-0 opacity-80">
      {/* Header blanc */}
      <div className="flex items-center justify-center py-4 bg-white">
        <img
          src={imgSrc}
          alt="Doceo mystère"
          className="w-28 h-28 object-contain select-none"
          style={{
            filter: "grayscale(1) brightness(0.12) contrast(1.2)",
          }}
        />
      </div>
      {/* Infos */}
      <div className="px-3 py-3 text-center">
        <p className="font-extrabold text-sm text-gray-400">???</p>
        <p className="text-xs text-gray-300 mt-0.5">—</p>
        <p className="text-xs font-semibold mt-1 text-gray-400">
          ⭐ {creature.stars_required} étoiles
        </p>
      </div>
    </Card>
  );
}
