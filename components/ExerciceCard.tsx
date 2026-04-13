"use client";

import { useState } from "react";
import type { Exercice } from "@/lib/types";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { MATIERE_COLORS, MATIERE_LABELS } from "@/lib/matieres";

const MESSAGES_SUCCES = [
  "Bravo !", "Super réponse !", "Bien joué !", "Excellent !",
  "Parfait !", "Génial ! Continue !", "Super travail !",
  "Magnifique !", "Tu assures !", "Trop fort !",
  "Exactement !", "C'est gagné !", "Très bien !",
  "Mission réussie !", "Tu progresses !", "Super réflexion !",
  "Bravo pour cet effort !", "Bonne réponse !", "Tu as trouvé !",
  "Impressionnant !", "Continue comme ça !", "Quel talent !",
  "C'est parfait !", "Super !", "Encore une réussite !",
];

const MESSAGES_ECHEC = [
  "Presque ! Essaie encore !", "Bonne tentative !", "On réessaie ?",
  "Ce n'est pas grave ! Continue !", "Tu es sur la bonne voie !",
  "Encore un petit effort !", "Presque trouvé !",
  "Continue, ça vient !", "Essaie encore, tu peux y arriver !",
  "Bonne réflexion !", "Pas loin ! On continue !",
  "On apprend en essayant !", "Continue à réfléchir !",
  "Tu vas y arriver !", "Un autre essai ?",
  "Pas grave, on progresse !", "Courage, presque !",
  "Continue, c'est bien parti !", "Bonne idée d'essayer !",
  "Encore une tentative !", "On retente ?",
  "L'apprentissage continue !", "Presque là !",
  "C'est en essayant qu'on progresse !", "Allez, encore un essai !",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface ExerciceCardProps {
  exercice: Exercice;
  numero: number;
  onReponse: (exerciceId: string, reponse: string, estCorrect: boolean) => void;
  onRetry?: (exerciceId: string) => void;
}

export default function ExerciceCard({
  exercice,
  numero,
  onReponse,
  onRetry,
}: ExerciceCardProps) {
  const [reponseSelectionnee, setReponseSelectionnee] = useState<string>("");
  const [reponseTexte, setReponseTexte]               = useState("");
  const [valide, setValide]                           = useState(false);
  const [estCorrect, setEstCorrect]                   = useState<boolean | null>(null);
  const [messageResultat, setMessageResultat]         = useState("");

  const { contenu } = exercice;
  const isQCM         = exercice.type === "qcm" || exercice.type === "vrai_faux";
  const reponseActive = isQCM ? reponseSelectionnee : reponseTexte;
  const matiereStyle  = MATIERE_COLORS[exercice.matiere] ?? { bg: "#748bf7", text: "#ffffff" };

  // Normalise une réponse : minuscules, espaces multiples → espace simple,
  // séparateurs variés (/, ;, virgule) → espace, tirets de préfixe/suffixe supprimés
  // → "ier" et "-ier" sont considérés identiques
  function normaliser(s: string) {
    return s
      .toLowerCase()
      .replace(/[/;,]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^-+|-+$/g, ""); // supprime les tirets en début et fin ("-ier" → "ier")
  }

  function verifier() {
    if (!reponseActive.trim()) return;
    const correct = normaliser(reponseActive) === normaliser(exercice.reponse_correcte);
    setEstCorrect(correct);
    setMessageResultat(correct ? pickRandom(MESSAGES_SUCCES) : pickRandom(MESSAGES_ECHEC));
    setValide(true);
    onReponse(exercice.id, reponseActive, correct);
  }

  function recommencer() {
    setValide(false);
    setEstCorrect(null);
    setMessageResultat("");
    setReponseSelectionnee("");
    setReponseTexte("");
    onRetry?.(exercice.id);
  }

  return (
    <Card
      className={`transition-all duration-300 ${
        valide && estCorrect
          ? "border-emerald-200 bg-emerald-50/30"
          : valide
          ? "border-orange-200 bg-orange-50/20"
          : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* Numéro */}
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: "#748bf7", color: "#ffffff" }}
          >
            {numero}
          </span>
          {/* Badge matière + sous-matière */}
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
            style={{ backgroundColor: matiereStyle.bg, color: matiereStyle.text }}
          >
            {MATIERE_LABELS[exercice.matiere] ?? exercice.matiere}
            {contenu.sous_matiere && (
              <span className="font-normal opacity-80">
                &nbsp;—&nbsp;{contenu.sous_matiere}
              </span>
            )}
          </span>
        </div>
        {valide && (
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              estCorrect
                ? "text-emerald-700 bg-emerald-100"
                : "text-orange-700 bg-orange-100"
            }`}
          >
            {estCorrect ? "✓ Correct" : "✗ Pas tout à fait"}
          </span>
        )}
      </div>

      {/* Énoncé */}
      <p className="text-navy-800 font-medium mb-4 leading-relaxed text-base">
        {contenu.enonce}
      </p>

      {/* Zone de réponse */}
      {!valide && (
        <>
          {isQCM && contenu.options ? (
            <div className="space-y-2 mb-4">
              {contenu.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setReponseSelectionnee(option)}
                  className="w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
                  style={
                    reponseSelectionnee === option
                      ? { borderColor: "#748bf7", backgroundColor: "#f5f9ff", color: "#071453" }
                      : { borderColor: "#e9ecf8", backgroundColor: "#ffffff", color: "#071453" }
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <input
              type="text"
              value={reponseTexte}
              onChange={(e) => setReponseTexte(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && verifier()}
              placeholder="Ta réponse..."
              className="w-full px-4 py-3 mb-4 rounded-xl border-2 border-gray-200 text-navy-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            />
          )}

          <Button
            onClick={verifier}
            disabled={!reponseActive.trim()}
            fullWidth
          >
            Vérifier
          </Button>
        </>
      )}

      {/* Résultat + explication */}
      {valide && (
        <div className="mt-3 space-y-3">
          {estCorrect ? (
            <div className="p-4 rounded-xl text-sm leading-relaxed bg-emerald-50 border border-emerald-200 text-emerald-800">
              <p className="font-bold text-base mb-2">{messageResultat}</p>
              <p>{contenu.explication}</p>
            </div>
          ) : (
            <>
              <div className="p-4 rounded-xl text-sm leading-relaxed bg-orange-50 border border-orange-200 text-orange-800">
                <p className="font-bold text-base mb-2">{messageResultat}</p>
                <p className="font-semibold">
                  La bonne réponse était :{" "}
                  <span className="font-bold">{exercice.reponse_correcte}</span>
                </p>
                <p className="mt-2 text-orange-700">{contenu.explication}</p>
              </div>
              <Button variant="secondary" fullWidth onClick={recommencer}>
                Essaie encore
              </Button>
            </>
          )}
        </div>
      )}
    </Card>
  );
}
