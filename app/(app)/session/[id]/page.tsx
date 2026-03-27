"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { Creature, Enfant, Exercice, Session } from "@/lib/types";
import ExerciceCard from "@/components/ExerciceCard";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CreatureUnlockPopup from "@/components/CreatureUnlockPopup";

interface Reponse {
  exercice_id: string;
  reponse_donnee: string;
  est_correct: boolean;
}

// Messages de motivation par tranche de score
const MESSAGES = {
  parfait: [
    "Parfait ! Tu es une vraie star !",
    "100 % ! Incroyable, continue !",
    "Zéro faute ! Champion du jour !",
  ],
  bien: [
    "Super travail ! Tu progresses vite !",
    "Très bien ! Continue comme ça !",
    "Excellent effort ! Tu cartonnes !",
  ],
  moyen: [
    "Bien joué ! On s'améliore chaque jour !",
    "Bonne tentative ! La pratique rend parfait !",
    "Continue d'essayer, tu vas y arriver !",
  ],
  debut: [
    "La pratique rend parfait ! On recommence ?",
    "Chaque exercice te rend plus fort !",
    "Ne lâche pas ! Tu vas progresser !",
  ],
};

function getMsg(score: number): string {
  const key =
    score === 100
      ? "parfait"
      : score >= 66
      ? "bien"
      : score >= 33
      ? "moyen"
      : "debut";
  const arr = MESSAGES[key];
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SessionPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const supabase = createClient();

  const [session, setSession]     = useState<Session | null>(null);
  const [enfant, setEnfant]       = useState<Enfant | null>(null);
  const [exercices, setExercices] = useState<Exercice[]>([]);
  const [reponses, setReponses]   = useState<Reponse[]>([]);
  const [loading, setLoading]     = useState(true);
  const [termine, setTermine]     = useState(false);
  const [message, setMessage]     = useState("");

  // Créatures
  const [nouvellesCreatures, setNouvellesCreatures] = useState<Creature[]>([]);
  const [showPopup, setShowPopup]                   = useState(false);
  const creatureCheckDone = useRef(false); // empêche double-appel sur retry

  useEffect(() => {
    async function charger() {
      const { data: s } = await supabase
        .from("sessions")
        .select("*")
        .eq("id", id)
        .single<Session>();
      if (!s) { router.push("/tableau-de-bord"); return; }
      setSession(s);

      const [{ data: ex }, { data: enf }] = await Promise.all([
        supabase
          .from("exercices")
          .select("*")
          .eq("session_id", id)
          .order("ordre")
          .returns<Exercice[]>(),
        supabase
          .from("enfants")
          .select("*")
          .eq("id", s.enfant_id)
          .single<Enfant>(),
      ]);

      setExercices(ex ?? []);
      setEnfant(enf);
      setLoading(false);
    }
    charger();
  }, [id, supabase, router]);

  async function handleReponse(
    exerciceId: string,
    reponseDonnee: string,
    estCorrect: boolean
  ) {
    const nouvelleReponse: Reponse = {
      exercice_id: exerciceId,
      reponse_donnee: reponseDonnee,
      est_correct: estCorrect,
    };

    await supabase.from("reponses").upsert({
      exercice_id: exerciceId,
      reponse_donnee: reponseDonnee,
      est_correct: estCorrect,
    });

    const nouvelles = [
      ...reponses.filter((r) => r.exercice_id !== exerciceId),
      nouvelleReponse,
    ];
    setReponses(nouvelles);

    if (nouvelles.length === exercices.length) {
      const nbOk = nouvelles.filter((r) => r.est_correct).length;
      const s    = exercices.length > 0
        ? Math.round((nbOk / exercices.length) * 100)
        : 0;
      setMessage(getMsg(s));
      setTermine(true);
    }
  }

  function handleRetry(exerciceId: string) {
    setReponses((prev) => prev.filter((r) => r.exercice_id !== exerciceId));
    setTermine(false);
    // Ne pas réinitialiser creatureCheckDone — les créatures débloquées le restent
  }

  // Vérification des créatures à débloquer (une seule fois par session)
  useEffect(() => {
    if (!termine || creatureCheckDone.current || !session?.enfant_id) return;
    creatureCheckDone.current = true;

    fetch("/api/creatures/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enfant_id: session.enfant_id }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.nouvelles_creatures?.length > 0) {
          setNouvellesCreatures(data.nouvelles_creatures);
          setShowPopup(true);
        }
      })
      .catch(() => {
        // Silencieux — le déblocage peut réessayer à la prochaine session
      });
  }, [termine, session]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center animate-fade-slide-up">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-100 border-t-blue-600 mx-auto mb-4" />
          <p className="text-gray-500 text-sm font-medium">
            Chargement des exercices...
          </p>
        </div>
      </div>
    );
  }

  const nbCorrects = reponses.filter((r) => r.est_correct).length;
  const score      = exercices.length > 0
    ? Math.round((nbCorrects / exercices.length) * 100)
    : 0;

  return (
    <div className="space-y-5">
      {/* ── Header ── */}
      <div className="animate-fade-slide-up">
        <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
          Session de {enfant?.prenom ?? "..."}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          {exercices.length} exercice{exercices.length > 1 ? "s" : ""} ·{" "}
          <span className="font-medium" style={{ color: "#748bf7" }}>
            {reponses.length}/{exercices.length} répondu
            {reponses.length > 1 ? "s" : ""}
          </span>
        </p>
      </div>

      {/* ── Profil enfant ── */}
      {enfant && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-blue-100" style={{ backgroundColor: "#f5f9ff" }}>
          <div>
            <p className="font-bold text-sm" style={{ color: "#071453" }}>{enfant.prenom}</p>
            <p className="text-xs text-gray-500">
              {enfant.age} ans · {enfant.classe}
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-gray-400">Session en cours</p>
            <p className="text-xs font-semibold" style={{ color: "#748bf7" }}>
              {session?.matieres?.join(", ")}
            </p>
          </div>
          <Link
            href={`/enfant/${enfant.id}`}
            className="flex-shrink-0 text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            Modifier
          </Link>
        </div>
      )}

      {/* ── Exercices ── */}
      {exercices.map((ex, i) => (
        <div key={ex.id}>
          <ExerciceCard
            exercice={ex}
            numero={i + 1}
            onReponse={handleReponse}
            onRetry={handleRetry}
          />
          {/* ── DEBUG TEMPORAIRE — source de chaque exercice (à supprimer) ── */}
          {ex.contenu._debug && (
            <div className="text-[10px] font-mono px-3 py-1 mt-0.5 rounded-b-xl border border-t-0 border-gray-100 bg-gray-50 text-gray-400 flex items-center gap-2 flex-wrap">
              <span>🔍 exercice {i + 1}</span>
              <span
                className="font-semibold"
                style={{
                  color: ex.contenu._debug.source === "bank.ts" ? "#16a34a" : "#2563eb",
                }}
              >
                source : {ex.contenu._debug.source}
              </span>
              {ex.contenu._debug.bank_id && (
                <span>id : {ex.contenu._debug.bank_id}</span>
              )}
              <span>
                validé :{" "}
                <span style={{ color: ex.contenu._debug.validated ? "#16a34a" : "#dc2626" }}>
                  {ex.contenu._debug.validated ? "✓ oui" : "✗ non"}
                </span>
              </span>
            </div>
          )}
        </div>
      ))}

      {/* ── Popup créature débloquée ── */}
      {showPopup && nouvellesCreatures.length > 0 && (
        <CreatureUnlockPopup
          creatures={nouvellesCreatures}
          onClose={() => setShowPopup(false)}
        />
      )}

      {/* ── Écran de fin gamifié ── */}
      {termine && (
        <Card className="text-center py-10 border-blue-100 animate-fade-slide-up" style={{ background: "linear-gradient(to bottom, #f5f9ff, #ffffff, #f0fdf8)" }}>
          {/* Score */}
          <p className="text-5xl font-extrabold mb-2" style={{ color: "#748bf7" }}>
            {score}%
          </p>

          {/* Message de motivation */}
          <p className="text-xl font-extrabold mb-1" style={{ color: "#071453" }}>{message}</p>
          <p className="text-gray-500 mb-2 text-sm">
            {nbCorrects}/{exercices.length} bonnes réponses
          </p>

          {/* Étoiles gagnées cette session */}
          <p className="text-sm font-semibold mb-5" style={{ color: "#748bf7" }}>
            +{nbCorrects} étoile{nbCorrects !== 1 ? "s" : ""} gagnée{nbCorrects !== 1 ? "s" : ""} !
          </p>

          {/* Étoiles SVG avec délais */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {Array.from({ length: exercices.length }).map((_, i) => (
              <span
                key={i}
                className={i < nbCorrects ? "animate-star-pop" : "opacity-20"}
                style={i < nbCorrects ? { animationDelay: `${i * 0.15}s` } : undefined}
              >
                <Image
                  src={i < nbCorrects ? "/icons/picto-etoile-pleine.svg" : "/icons/picto-etoile-vide.svg"}
                  alt=""
                  width={36}
                  height={36}
                />
              </span>
            ))}
          </div>

          {/* Barre de progression */}
          <div className="w-full max-w-xs mx-auto bg-gray-100 rounded-full h-2.5 mb-8">
            <div
              className="h-2.5 rounded-full transition-all duration-1000"
              style={{ width: `${score}%`, background: "linear-gradient(to right, #748bf7, #6bd6a6)" }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => router.push(`/session/nouvelle?enfant=${session?.enfant_id}`)}
              size="lg"
            >
              Nouvelle session
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push("/tableau-de-bord")}
              size="lg"
            >
              Tableau de bord
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
