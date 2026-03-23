import Card from "@/components/ui/Card";
import { MATIERE_COLORS } from "@/lib/matieres";
import type { CreatureAvecStatut } from "@/lib/types";

interface CreatureCardProps {
  creature: CreatureAvecStatut;
}

export default function CreatureCard({ creature }: CreatureCardProps) {
  const couleur = MATIERE_COLORS[creature.subject] ?? { bg: "#e5e7eb", text: "#071453" };

  if (creature.unlocked) {
    return (
      <Card className="overflow-hidden p-0">
        {/* Header coloré */}
        <div
          className="flex items-center justify-center py-5 relative"
          style={{ backgroundColor: couleur.bg }}
        >
          {/* Silhouette colorée (teinte sujet) */}
          <span
            className="text-5xl select-none"
            style={{ filter: "brightness(0) saturate(0) opacity(0.25) drop-shadow(0 0 6px currentColor)" }}
          >
            {creature.emoji}
          </span>
          {/* Badge débloqué */}
          <span
            className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.8)", color: couleur.bg }}
          >
            ✓
          </span>
        </div>
        {/* Infos */}
        <div className="px-3 py-3 text-center">
          <p className="font-extrabold text-sm truncate" style={{ color: "#071453" }}>
            {creature.name}
          </p>
          <p className="text-xs text-gray-400 mt-0.5 truncate">{creature.subject}</p>
          <p className="text-xs font-semibold mt-1" style={{ color: "#748bf7" }}>
            ⭐ {creature.stars_required}
          </p>
        </div>
      </Card>
    );
  }

  // Verrouillée — silhouette noire mystère
  return (
    <Card className="overflow-hidden p-0 opacity-80">
      {/* Header gris neutre */}
      <div className="flex items-center justify-center py-5 bg-gray-100 relative">
        <span
          className="text-5xl select-none"
          style={{ filter: "brightness(0) saturate(0) opacity(0.15)" }}
        >
          {creature.emoji}
        </span>
        {/* Cadenas */}
        <span className="absolute top-2 right-2 text-base opacity-40">🔒</span>
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
