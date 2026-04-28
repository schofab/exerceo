import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SessionForm from "@/components/SessionForm";
import QuizBonus from "@/components/QuizBonus";
import type { Enfant, Matiere, NotionStats } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { MATIERES_LIST } from "@/lib/matieres";
import { computeTrialStatus } from "@/lib/trial";

export const metadata = { title: "Nouvelle session — exerceō" };

// ── Helpers ──────────────────────────────────────────────────────

function getDayOfYear() {
  return Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86_400_000
  );
}

// Matière du Quiz bonus (aléatoire à chaque chargement de page)
function getQuizMatiere(): Matiere {
  return MATIERES_LIST[Math.floor(Math.random() * MATIERES_LIST.length)] as Matiere;
}

// Messages de bienvenue (alternent chaque jour)
const MESSAGES_BIENVENUE: ((prenom: string) => string)[] = [
  (p) => `Bienvenue ${p} ! Une nouvelle mission t'attend !`,
  (p) => `C'est parti pour quelques défis ${p} !`,
  (p) => `C'est super de te revoir ${p} ! On commence ?`,
  (p) => `Salut ${p} ! Une nouvelle session t'attend !`,
  (p) => `Bienvenue ${p}, voici quelques exercices rapides pour toi !`,
  (p) => `Bonjour ${p} ! On s'entraîne un peu ?`,
  (p) => `Bonjour ${p} ! Voici ta mission du jour !`,
  (p) => `Salut ${p} ! C'est le moment de relever un défi !`,
];

function getMessageBienvenue(prenom: string) {
  return MESSAGES_BIENVENUE[getDayOfYear() % MESSAGES_BIENVENUE.length](prenom);
}

// ── Page ─────────────────────────────────────────────────────────

export default async function NouvelleSessionPage({
  searchParams,
}: {
  searchParams: Promise<{ enfant?: string }>;
}) {
  const { enfant: defaultEnfantId } = await searchParams;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_premium, sessions_used, created_at")
    .eq("id", user.id)
    .single();

  const { data: enfants } = await supabase
    .from("enfants")
    .select("*")
    .eq("parent_id", user.id)
    .order("created_at")
    .returns<Enfant[]>();

  if (!enfants || enfants.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 mb-5">
          Crée d&apos;abord un profil enfant pour démarrer une session.
        </p>
        <Link href="/enfant/nouveau">
          <Button>Créer un profil enfant</Button>
        </Link>
      </div>
    );
  }

  if (!profile) {
    redirect("/tableau-de-bord");
  }

  const trial = computeTrialStatus(profile);

  if (!trial.isTrialActive) {
    return (
      <div className="space-y-5 animate-fade-slide-up">
        <div
          className="rounded-2xl px-5 py-5"
          style={{ backgroundColor: "#fff7ed", border: "1.5px solid #fed7aa" }}
        >
          <p className="text-base font-extrabold" style={{ color: "#9a3412" }}>
            Votre essai gratuit est terminé.
          </p>
          <p className="text-sm mt-1" style={{ color: "#c2410c" }}>
            Passez à Premium pour continuer à créer de nouvelles sessions.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/api/stripe/checkout" prefetch={false}>
              <Button>Passer Premium</Button>
            </Link>

            <Link href="/tableau-de-bord">
              <Button variant="ghost">Retour au tableau de bord</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const enfantSelectionne =
    enfants.find((e) => e.id === defaultEnfantId) ?? enfants[0];

  // Faiblesses pour afficher la mission spéciale
  const { data: faiblessesData } = await supabase.rpc("get_faiblesses_enfant", {
  p_enfant_id: enfantSelectionne.id,
});

const faiblessesArray = Array.isArray(faiblessesData) ? faiblessesData : [];
const faiblesses: NotionStats[] = faiblessesArray.filter(
  (f) => f.est_fragile
) as NotionStats[];

  const quizMatiere = getQuizMatiere();
  const messageBienvenue = getMessageBienvenue(enfantSelectionne.prenom);

  return (
    <div className="space-y-5 animate-fade-slide-up">

      {/* ── Message de bienvenue + profil enfant ── */}
      <div className="rounded-2xl bg-white border border-blue-100 shadow-sm px-5 py-4 flex items-center gap-3">
        <Image
          src="/icons/picto-fusee.svg"
          alt=""
          width={36}
          height={36}
          className="flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-extrabold text-base leading-snug" style={{ color: "#071453" }}>
            {messageBienvenue}
          </p>
          <p className="text-sm text-gray-400 mt-0.5">
            {enfantSelectionne.prenom} · {enfantSelectionne.age} ans · {enfantSelectionne.classe}
          </p>
        </div>
        <Link
          href={`/enfant/${enfantSelectionne.id}`}
          className="flex-shrink-0 text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50 cursor-pointer"
        >
          Modifier
        </Link>
      </div>

      {/* ── Mission spéciale (si faiblesses détectées) ── */}
      {faiblesses.length > 0 && (
        <div
          className="rounded-2xl px-4 py-3 flex items-start gap-3"
          style={{ backgroundColor: "#fff7ed", border: "1.5px solid #fed7aa" }}
        >
          <span className="text-2xl flex-shrink-0">🎯</span>
          <div>
            <p className="text-sm font-extrabold" style={{ color: "#9a3412" }}>
              Mission spéciale — Renforcement
            </p>
            <p className="text-xs text-orange-600 mt-0.5">
              Des exercices ciblés seront automatiquement ajoutés sur :
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {faiblesses.map((f) => (
                <span
                  key={f.sous_matiere}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#ffedd5", color: "#9a3412" }}
                >
                  {f.sous_matiere} · {f.taux_reussite}%
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Quiz bonus ── */}
      <QuizBonus matiere={quizMatiere} classe={enfantSelectionne.classe} />

      {/* ── Titre ── */}
      <div>
        <h1 className="text-2xl font-extrabold mb-1" style={{ color: "#071453" }}>
          Nouvelle session
        </h1>
        <p className="text-gray-500 text-sm">
          Personnalise les exercices selon tes préférences.
        </p>
      </div>

      <SessionForm enfants={enfants} defaultEnfantId={defaultEnfantId} />
    </div>
  );
}
