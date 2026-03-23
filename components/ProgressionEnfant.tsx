import type { NotionStats } from "@/lib/types";

interface Props {
  stats: NotionStats[];
}

export default function ProgressionEnfant({ stats }: Props) {
  if (stats.length === 0) {
    return (
      <p className="text-xs text-gray-400 italic mt-1">
        Fais des exercices pour voir ta progression ici !
      </p>
    );
  }

  // Forces : taux >= 80 %
  const forces = stats.filter((s) => s.taux_reussite >= 80);
  // À renforcer : taux < 60 % (est_fragile)
  const aRenforcer = stats.filter((s) => s.est_fragile);

  if (forces.length === 0 && aRenforcer.length === 0) return null;

  return (
    <div className="mt-2 space-y-1.5">
      {forces.length > 0 && (
        <div className="flex items-start gap-1.5 flex-wrap">
          <span className="text-xs font-semibold text-emerald-600 flex-shrink-0">✅ Forces :</span>
          {forces.map((s) => (
            <span
              key={s.sous_matiere}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
            >
              {s.sous_matiere}
            </span>
          ))}
        </div>
      )}
      {aRenforcer.length > 0 && (
        <div className="flex items-start gap-1.5 flex-wrap">
          <span className="text-xs font-semibold text-orange-500 flex-shrink-0">⚡ À renforcer :</span>
          {aRenforcer.map((s) => (
            <span
              key={s.sous_matiere}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: "#ffedd5", color: "#9a3412" }}
            >
              {s.sous_matiere} · {s.taux_reussite}%
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
