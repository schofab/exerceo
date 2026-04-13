import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const EXERCEO_URL = "https://exerceo.mixarto.com"
const NAVY        = "#071453"
const GREEN       = "#6BD6A6"
const PURPLE      = "#748bf7"

export const metadata: Metadata = {
  title: "exerceō — App éducative pour les enfants du primaire | Mixarto",
  description:
    "exerceō propose des exercices scolaires personnalisés pour les enfants du CP au CM2. Adapté au niveau, aux matières et au profil d'apprentissage de chaque enfant.",
  alternates: { canonical: "https://mixarto.com/exerceo" },
}

const FEATURES = [
  { titre: "Adapté à chaque enfant",       texte: "Classe, niveau, matières, profil d'apprentissage — chaque session est unique.",           bg: GREEN,      color: NAVY    },
  { titre: "Programme officiel EN",        texte: "Exercices alignés sur les attendus de l'Éducation Nationale, du CP au CM2.",               bg: PURPLE,     color: "#fff"  },
  { titre: "Récompenses & Doceo",          texte: "Étoiles, badges et créatures Doceo à collectionner pour garder la motivation.",             bg: "#f9de6f",  color: NAVY    },
  { titre: "Rapide & sans pression",       texte: "3 à 12 exercices en 5 à 20 minutes. Conçu pour accompagner, pas pour stresser.",            bg: "#e190c9",  color: NAVY    },
  { titre: "Profils d'apprentissage",      texte: "Standard, lecture simplifiée, attention courte, progressif ou défi avancé.",                bg: "#ffb86b",  color: NAVY    },
  { titre: "Sans publicité",               texte: "Aucune pub, aucun tracking inutile. Une expérience propre et respectueuse des données.",    bg: "#f0f2ff",  color: NAVY    },
]

const MINI_STEPS = [
  { num: "1", texte: "Choisissez votre enfant, les matières et le temps disponible." },
  { num: "2", texte: "Exerceo compose une séance d'exercices adaptée à sa classe et à ses besoins." },
  { num: "3", texte: "Votre enfant s'entraîne, progresse et gagne des récompenses au fil des sessions." },
]

export default function ExerceoPage() {
  return (
    <article className="space-y-20 py-12 max-w-3xl mx-auto px-4 sm:px-6">

      {/* ── Hero ── */}
      <section className="space-y-6">
        <Image src="/icons/Logo-exerceo.svg" alt="exerceō" width={180} height={48} priority />
        <h1 className="text-3xl font-extrabold leading-tight" style={{ color: NAVY }}>
          Des exercices scolaires{" "}
          <span style={{ color: PURPLE }}>sur-mesure</span>,<br />
          alignés sur les programmes de l'Éducation Nationale
        </h1>
        <p className="text-base text-gray-600 leading-relaxed max-w-xl">
          exerceō est une application éducative qui propose des exercices
          personnalisés pour les enfants du primaire. En quelques secondes,
          votre enfant dispose d'une session adaptée à son niveau, ses
          matières et son profil d'apprentissage — basée sur les attendus
          officiels de l'Éducation Nationale.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`${EXERCEO_URL}/inscription`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: PURPLE }}
          >
            Essayer gratuitement
          </a>
          <a
            href={EXERCEO_URL}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold border-2 transition-opacity hover:opacity-80"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            Accéder à l'app
          </a>
        </div>
        <p className="text-xs text-gray-400">Gratuit · 3 sessions offertes · Sans engagement</p>
      </section>

      {/* ── Comment ça marche ── */}
      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-extrabold mb-1" style={{ color: NAVY }}>Comment ça marche ?</h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            Une séance adaptée en quelques clics, selon la classe, les matières et le profil de votre enfant.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {MINI_STEPS.map((s) => (
            <div key={s.num} className="flex-1 flex gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white"
                style={{ backgroundColor: PURPLE }}
              >
                {s.num}
              </span>
              <p className="text-xs text-gray-600 leading-relaxed">{s.texte}</p>
            </div>
          ))}
        </div>
        <div>
          <a
            href="/comment-ca-marche"
            className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: PURPLE }}
          >
            En savoir plus →
          </a>
        </div>
      </section>

      {/* ── Fonctionnalités ── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold" style={{ color: NAVY }}>Ce qui rend exerceō unique</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {FEATURES.map((f) => (
            <div key={f.titre} className="rounded-2xl p-5 space-y-2" style={{ backgroundColor: f.bg }}>
              <p className="font-extrabold text-sm" style={{ color: f.color }}>{f.titre}</p>
              <p className="text-xs leading-relaxed" style={{ color: f.color, opacity: 0.85 }}>{f.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tarifs ── */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold" style={{ color: NAVY }}>Tarifs</h2>
        <div className="grid sm:grid-cols-2 gap-4 items-stretch">
          <div className="rounded-2xl border-2 border-gray-100 p-6 flex flex-col gap-4">
            <p className="text-lg font-extrabold" style={{ color: NAVY }}>Gratuit</p>
            <p className="text-3xl font-extrabold" style={{ color: NAVY }}>0 €</p>
            <ul className="space-y-2 text-sm text-gray-600 flex-1">
              {["1 profil enfant", "3 sessions pour tester", "Toutes les matières", "Récompenses & Doceo"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: GREEN }} className="font-bold">✓</span>{item}
                </li>
              ))}
            </ul>
            <a
              href={`${EXERCEO_URL}/inscription`}
              className="mt-auto block text-center px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: GREEN, color: GREEN }}
            >
              Commencer gratuitement
            </a>
          </div>

          <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ backgroundColor: NAVY }}>
            <div className="flex items-center justify-between">
              <p className="text-lg font-extrabold text-white">Premium</p>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: GREEN, color: NAVY }}>À vie</span>
            </div>
            <p className="text-3xl font-extrabold text-white">
              <span className="line-through opacity-40 text-2xl mr-1">29 €</span>
              19 € <span className="text-sm font-medium opacity-60">une seule fois</span>
            </p>
            <ul className="space-y-2 text-sm text-white opacity-90 flex-1">
              {["Enfants illimités", "Sessions illimitées", "Toutes les matières", "Récompenses & Doceo", "Accès à vie, sans abonnement"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: GREEN }} className="font-bold">✓</span>{item}
                </li>
              ))}
            </ul>
            <a
              href={`${EXERCEO_URL}/inscription`}
              className="mt-auto block text-center px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: PURPLE }}
            >
              Passer Premium
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="rounded-3xl p-8 text-center space-y-4" style={{ backgroundColor: "#f5f9ff" }}>
        <h2 className="text-xl font-extrabold" style={{ color: NAVY }}>Prêt à essayer ?</h2>
        <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
          Créez votre compte en 30 secondes et lancez votre première session gratuitement.
        </p>
        <a
          href={`${EXERCEO_URL}/inscription`}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-bold text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: PURPLE }}
        >
          Créer un compte gratuitement
        </a>
        <p className="text-xs text-gray-400">Sans carte bancaire · Sans engagement</p>
      </section>

      {/* ── Retour ── */}
      <div className="text-center pb-4">
        <Link href="/" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: NAVY }}>
          ← Retour à Mixarto
        </Link>
      </div>

    </article>
  )
}
