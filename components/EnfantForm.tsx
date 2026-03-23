"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Classe, Enfant, LearningProfile, Matiere, Niveau } from "@/lib/types";
import Button from "./ui/Button";
import Input from "./ui/Input";

const CLASSES: Classe[] = ["CP", "CE1", "CE2", "CM1", "CM2"];
const NIVEAUX: { value: Niveau; label: string }[] = [
  { value: "debutant", label: "Débutant — besoin de soutien" },
  { value: "intermediaire", label: "Intermédiaire — niveau moyen" },
  { value: "avance", label: "Avancé — à l'aise" },
];
const PROFILS: { value: LearningProfile; label: string; desc: string; emoji: string }[] = [
  {
    value: "standard",
    label: "Standard",
    desc: "Exercices équilibrés et variés",
    emoji: "📚",
  },
  {
    value: "lecture_simplifiee",
    label: "Lecture simplifiée",
    desc: "Consignes courtes, peu de texte",
    emoji: "🔍",
  },
  {
    value: "attention_courte",
    label: "Attention courte",
    desc: "Exercices rapides, encouragements fréquents",
    emoji: "⚡",
  },
  {
    value: "progressif",
    label: "Progressif",
    desc: "Progression lente, répétition et consolidation",
    emoji: "🌱",
  },
  {
    value: "defi_avance",
    label: "Défi avancé",
    desc: "Exercices complexes et stimulants",
    emoji: "🏆",
  },
];
const MATIERES: Matiere[] = [
  "Mathématiques",
  "Français",
  "Sciences",
  "Histoire-Géographie",
  "Anglais",
];

interface EnfantFormProps {
  enfant?: Enfant; // si renseigné, mode édition
  userId: string;
}

export default function EnfantForm({ enfant, userId }: EnfantFormProps) {
  const router = useRouter();

  const [prenom, setPrenom] = useState(enfant?.prenom ?? "");
  const [age, setAge] = useState(enfant?.age?.toString() ?? "");
  const [classe, setClasse] = useState<Classe>(enfant?.classe ?? "CP");
  const [niveau, setNiveau] = useState<Niveau>(enfant?.niveau ?? "intermediaire");
  const [learningProfile, setLearningProfile] = useState<LearningProfile>(
    enfant?.learning_profile ?? "standard"
  );
  const [facilites, setFacilites] = useState<Matiere[]>(enfant?.facilites ?? []);
  const [lacunes, setLacunes] = useState<Matiere[]>(enfant?.lacunes ?? []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function toggleMatiere(
    matiere: Matiere,
    list: Matiere[],
    setList: (m: Matiere[]) => void
  ) {
    if (list.includes(matiere)) {
      setList(list.filter((m) => m !== matiere));
    } else {
      setList([...list, matiere]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();

    const data = {
      parent_id: userId,
      prenom: prenom.trim(),
      age: parseInt(age),
      classe,
      niveau,
      learning_profile: learningProfile,
      facilites,
      lacunes,
    };

    try {
      if (enfant) {
        const { error } = await supabase
          .from("enfants")
          .update(data)
          .eq("id", enfant.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("enfants").insert(data);
        if (error) throw error;
      }
      router.push("/tableau-de-bord");
      router.refresh();
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : (err as { message?: string })?.message ?? "Erreur lors de la sauvegarde";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Emma"
          required
        />
        <Input
          label="Âge"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="8"
          min={5}
          max={12}
          required
        />
      </div>

      {/* Classe */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Classe
        </label>
        <div className="flex flex-wrap gap-2">
          {CLASSES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setClasse(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition ${
                classe === c
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Niveau */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Niveau général
        </label>
        <div className="space-y-2">
          {NIVEAUX.map((n) => (
            <label
              key={n.value}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition ${
                niveau === n.value
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <input
                type="radio"
                name="niveau"
                value={n.value}
                checked={niveau === n.value}
                onChange={() => setNiveau(n.value)}
                className="text-blue-600"
              />
              <span className="text-sm text-gray-800">{n.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Profil d'apprentissage */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profil d&apos;apprentissage
        </label>
        <div className="space-y-2">
          {PROFILS.map((p) => (
            <label
              key={p.value}
              className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition ${
                learningProfile === p.value
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <input
                type="radio"
                name="learning_profile"
                value={p.value}
                checked={learningProfile === p.value}
                onChange={() => setLearningProfile(p.value)}
                className="text-blue-600 mt-0.5 flex-shrink-0"
              />
              <span className="text-lg flex-shrink-0 leading-none">{p.emoji}</span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">{p.label}</span>
                <span className="text-xs text-gray-500">{p.desc}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Points forts */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Points forts{" "}
          <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {MATIERES.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => toggleMatiere(m, facilites, setFacilites)}
              className={`px-3 py-1.5 rounded-xl text-sm border-2 transition ${
                facilites.includes(m)
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-gray-200 text-gray-600 hover:border-green-300"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Lacunes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Points à améliorer{" "}
          <span className="text-gray-400 font-normal">(optionnel)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {MATIERES.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => toggleMatiere(m, lacunes, setLacunes)}
              className={`px-3 py-1.5 rounded-xl text-sm border-2 transition ${
                lacunes.includes(m)
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-200 text-gray-600 hover:border-orange-300"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <Button type="submit" loading={loading} fullWidth size="lg">
        {enfant ? "Enregistrer les modifications" : "Créer le profil"}
      </Button>
    </form>
  );
}
