import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { MATIERE_COLORS, MATIERE_LABELS } from "@/lib/matieres";
import { createClient } from "@/lib/supabase/server";

const FEATURES = [
  {
    icon: "/icons/picto-cible.svg",
    titre: "Personnalisé",
    desc: "Adapté à l'âge, à la classe et au niveau de chaque enfant.",
    bg: "#6bd6a6",
  },
  {
    icon: "/icons/picto-flash.svg",
    titre: "Instantané",
    desc: "Des exercices générés en quelques secondes par intelligence artificielle.",
    bg: "#ffb86b",
  },
  {
    icon: "/icons/picto-manette.svg",
    titre: "Ludique",
    desc: "QCM, calculs, conjugaison… des formats ludiques pour rester motivé.e.",
    bg: "#e190c9",
  },
];

const MATIERES = Object.entries(MATIERE_COLORS).map(([key, style]) => ({
  label: MATIERE_LABELS[key],
  ...style,
}));

export default async function LandingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header : Logo + bouton connexion ── */}
      <header className="flex items-center justify-between pt-6 pb-2 px-5 max-w-md mx-auto">
        <Logo href="/" />
        {user ? (
          <Link
            href="/tableau-de-bord"
            className="text-sm font-bold px-4 py-2 rounded-full cursor-pointer transition-all hover:opacity-90"
            style={{ backgroundColor: "#748bf7", color: "#ffffff" }}
          >
            Mon tableau de bord
          </Link>
        ) : (
          <Link
            href="/connexion"
            className="text-sm font-bold px-4 py-2 rounded-full border-2 cursor-pointer transition-all hover:opacity-80"
            style={{ borderColor: "#748bf7", color: "#748bf7" }}
          >
            Se connecter
          </Link>
        )}
      </header>

      <main className="max-w-md mx-auto px-4 pb-12 space-y-5">

        {/* ── Hero card ── */}
        <section
          className="rounded-3xl p-6 text-center shadow-sm"
          style={{ backgroundColor: "#f5f9ff" }}
        >
          <h1 className="text-2xl font-extrabold leading-snug mb-4" style={{ color: "#071453" }}>
            Des exercices sur-mesure
            <br />
            <span style={{ color: "#6bd6a6" }}>pour votre enfant</span>
          </h1>
          <p className="text-sm font-medium leading-relaxed" style={{ color: "#071453" }}>
            En 30 secondes, générez des exercices ludiques et personnalisés
            selon la classe, le niveau et les besoins de votre enfant.
          </p>
        </section>

        {/* ── CTA principal ── */}
        <section className="text-center space-y-3">
          <Link href="/inscription" className="block">
            <button
              className="w-full flex items-center justify-center gap-3 text-white font-bold text-base py-4 px-6 rounded-full shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
              style={{ backgroundColor: "#748bf7" }}
            >
              <Image
                src="/icons/picto-cadeau-blanc.svg"
                alt=""
                width={22}
                height={22}
              />
              Essayer gratuitement - 3 sessions offertes
            </button>
          </Link>
          <p className="text-sm font-semibold" style={{ color: "#071453" }}>
            Puis{" "}
            <span className="line-through" style={{ color: "#9298c8" }}>29€</span>{" "}
            19€ à vie, sans abonnement.
          </p>
        </section>

        {/* ── Feature cards ── */}
        <section className="grid grid-cols-3 gap-3">
          {FEATURES.map((f) => (
            <div
              key={f.titre}
              className="rounded-2xl p-3 text-center flex flex-col items-center gap-2"
              style={{ backgroundColor: f.bg }}
            >
              <Image src={f.icon} alt="" width={36} height={36} />
              <p className="font-extrabold text-sm leading-tight" style={{ color: "#071453" }}>
                {f.titre}
              </p>
              <p className="text-xs leading-snug opacity-90" style={{ color: "#071453" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </section>

        {/* ── Matières ── */}
        <section className="text-center space-y-4">
          <h2 className="text-lg font-extrabold" style={{ color: "#071453" }}>
            Toutes les matières du primaire
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {MATIERES.map((m) => (
              <span
                key={m.label}
                className="px-4 py-2 rounded-full text-sm font-bold"
                style={{ backgroundColor: m.bg, color: m.text }}
              >
                {m.label}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA final ── */}
        <section
          className="rounded-3xl p-6 text-center space-y-3"
          style={{ backgroundColor: "#748bf7" }}
        >
          <Image
            src="/icons/picto-fusee-blanc.svg"
            alt=""
            width={48}
            height={48}
            className="mx-auto"
          />
          <h2 className="text-xl font-extrabold text-white">Prêt.e à commencer ?</h2>
          <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
            3 sessions offertes, puis{" "}
            <span className="line-through opacity-70">29€</span>{" "}
            19€ une seule fois, pour toujours !
          </p>
          <Link href="/inscription" className="block">
            <button className="w-full bg-white font-bold py-3 px-6 rounded-full cursor-pointer transition-all duration-200 hover:opacity-90 active:scale-[0.98]" style={{ color: "#748bf7" }}>
              Créer un compte gratuit
            </button>
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}
