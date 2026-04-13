"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Enfant, Matiere } from "@/lib/types";
import Button from "./ui/Button";
import { MATIERE_COLORS, getMatieresByClasse, getSubjectLabel } from "@/lib/matieres";

const DUREES = [
  { value: 5,  label: "5 min",  count: 3 },
  { value: 10, label: "10 min", count: 6 },
  { value: 15, label: "15 min", count: 9 },
  { value: 20, label: "20 min", count: 12 },
];

const MOTS_INTERDITS = [
  "merde", "putain", "connard", "connasse", "salope", "pute", "bite", "couilles",
  "enculé", "enculer", "nique", "niquer", "baise", "baiser", "sexe", "pénis", "penis",
  "vagin", "viol", "violer", "tuer", "suicide", "drogue", "porno", "pornographie",
  "nude", "nichons", "fdp",
];

function contientContenuInapproprie(texte: string): boolean {
  const t = texte.toLowerCase();
  return MOTS_INTERDITS.some((mot) => t.includes(mot));
}

interface SessionFormProps {
  enfants: Enfant[];
  defaultEnfantId?: string;
}

export default function SessionForm({ enfants, defaultEnfantId }: SessionFormProps) {
  const router = useRouter();

  const [enfantId, setEnfantId]       = useState(defaultEnfantId ?? enfants[0]?.id ?? "");
  const [matieres, setMatieres]       = useState<Matiere[]>([]);
  const [temps, setTemps]             = useState(10);
  const [difficultes, setDifficultes] = useState("");
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState("");

  const enfantSelectionne = enfants.find((e) => e.id === enfantId);
  const classeEnfant = enfantSelectionne?.classe ?? "CP";
  const matieresList = getMatieresByClasse(classeEnfant) as Matiere[];

  const maxMatieres = DUREES.find((d) => d.value === temps)?.count ?? 5;
  const limiteActive = matieres.length >= Math.min(maxMatieres, matieresList.length);

  useEffect(() => {
    const max = Math.min(maxMatieres, matieresList.length);
    if (matieres.length > max) {
      setMatieres((prev) => prev.slice(0, max));
    }
  }, [temps]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setMatieres((prev) => prev.filter((m) => matieresList.includes(m)));
  }, [enfantId]); // eslint-disable-line react-hooks/exhaustive-deps

  function toggleMatiere(m: Matiere) {
    setMatieres((prev) => {
      if (prev.includes(m)) return prev.filter((x) => x !== m);
      const max = Math.min(maxMatieres, matieresList.length);
      if (prev.length >= max) return prev;
      return [...prev, m];
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (matieres.length === 0) {
      setError("Choisis au moins une matière.");
      return;
    }

    if (difficultes && contientContenuInapproprie(difficultes)) {
      setError(
        "Ce contenu n'est pas autorisé. Décris des difficultés scolaires (ex : tables de multiplication, conjugaison...)."
      );
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enfant_id: enfantId,
          matieres,
          temps_disponible: temps,
          difficultes,
        }),
      });

      const data = await res.json();

      if (res.status === 402) {
        window.location.href = data.checkout_url;
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de la génération");
      }

      router.push(`/session/${data.session_id}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      setLoading(false);
    }
  }

  if (enfants.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">Aucun profil enfant trouvé.</p>
        <Button onClick={() => router.push("/enfant/nouveau")}>
          Créer un profil enfant
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Sélection enfant */}
      {enfants.length > 1 && (
        <div>
          <label className="block text-sm font-bold text-navy-800 mb-2">
            Pour quel enfant ?
          </label>
          <div className="flex flex-wrap gap-2">
            {enfants.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setEnfantId(e.id)}
                className="px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
                style={
                  enfantId === e.id
                    ? { backgroundColor: "#748bf7", color: "#ffffff", borderColor: "#748bf7" }
                    : { backgroundColor: "#ffffff", color: "#071453", borderColor: "#e9ecf8" }
                }
              >
                {e.prenom}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Matières */}
      <div>
        <label className="block text-sm font-bold text-navy-800 mb-2">
          Matières{" "}
          <span className="text-gray-400 font-normal">(au moins une)</span>
          {limiteActive && matieres.length > 0 && (
            <span className="ml-2 text-xs font-medium" style={{ color: "#748bf7" }}>
              {matieres.length}/{Math.min(maxMatieres, matieresList.length)} max pour {temps} min
            </span>
          )}
        </label>
        <div className="flex flex-wrap gap-2">
          {matieresList.map((value) => {
            const selectionnee = matieres.includes(value);
            const desactivee   = !selectionnee && limiteActive;
            const couleur      = MATIERE_COLORS[value] ?? { bg: "#748bf7", text: "#ffffff" };
            return (
              <button
                key={value}
                type="button"
                onClick={() => toggleMatiere(value)}
                disabled={desactivee}
                className="px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                style={
                  selectionnee
                    ? { backgroundColor: couleur.bg, color: couleur.text, borderColor: couleur.bg }
                    : { backgroundColor: "#ffffff", color: "#071453", borderColor: "#e9ecf8" }
                }
              >
                {getSubjectLabel(value, classeEnfant)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Durée */}
      <div>
        <label className="block text-sm font-bold text-navy-800 mb-2">
          Temps disponible
        </label>
        <div className="flex gap-2">
          {DUREES.map((d) => (
            <button
              key={d.value}
              type="button"
              onClick={() => setTemps(d.value)}
              className="flex-1 flex flex-col items-center py-2.5 rounded-2xl text-sm font-bold border-2 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={
                temps === d.value
                  ? { backgroundColor: "#748bf7", color: "#ffffff", borderColor: "#748bf7" }
                  : { backgroundColor: "#ffffff", color: "#071453", borderColor: "#e9ecf8" }
              }
            >
              <Image
                src="/icons/picto-timer.svg"
                alt=""
                width={20}
                height={20}
                className="mb-0.5"
                style={{ opacity: temps === d.value ? 1 : 0.4 }}
              />
              <span>{d.label}</span>
              <span className="text-xs mt-0.5 opacity-60">
                {d.count} exercices
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Difficultés (optionnel) */}
      <div>
        <label className="block text-sm font-bold text-navy-800 mb-2">
          Difficultés ou thèmes à travailler{" "}
          <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <textarea
          value={difficultes}
          onChange={(e) => setDifficultes(e.target.value)}
          placeholder="Ex : tables de multiplication, accord du participe passé..."
          rows={3}
          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 text-navy-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm bg-red-50 border border-red-200 rounded-2xl px-4 py-3 text-red-700">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      <Button type="submit" loading={loading} fullWidth size="lg">
        {loading ? "Génération en cours..." : "Générer les exercices"}
      </Button>
    </form>
  );
}
