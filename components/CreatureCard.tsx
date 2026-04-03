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

export default function CreatureCard({ creature }: CreatureCardProps) {
  const couleur = MATIERE_COLORS[creature.subject] ?? { bg: "#e5e7eb", text: "#071453" };
  const imgSrc = creatureImageSrc(creature.name);

  if (creature.unlocked) {
    return (
      <Card className="overflow-hidden p-0">
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
