import type { Metadata } from "next"
import Link from "next/link"

const EXERCEO_URL = "https://exerceo.mixarto.com"

export const metadata: Metadata = {
  title: "Exerceo — App éducative pour les enfants du primaire",
  description:
    "Exerceo génère des exercices personnalisés pour les enfants du CP au CM2. Soutien scolaire ludique, sans publicité, adapté au niveau de chaque enfant.",
  keywords: [
    "exercices enfants",
    "app éducative enfant",
    "soutien scolaire ludique",
    "exercices CP CM2",
    "révisions école primaire",
    "exercices personnalisés primaire",
  ],
  alternates: {
    canonical: "https://mixarto.com/exerceo",
  },
}

// ── Icônes ──────────────────────────────────────────────────────────────────────

function IconCheck({ white = false }: { white?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 mt-0.5 ${white ? "text-blue-200" : "text-emerald-500"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

// ── Page Exerceo marketing ───────────────────────────────────────────────────────

export default function ExerceoPage() {
  return (
    <>

      {/* ══════════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-14 pb-20 md:pt-20 md:pb-28">

        {/* Fond décoratif */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(147,197,253,0.2) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-7">
            Application éducative · CP → CM2
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 mb-5 leading-tight tracking-tight">
            Exerceo
          </h1>

          <p className="text-xl md:text-2xl text-neutral-500 mb-4 font-medium">
            Des exercices sur-mesure pour votre enfant
          </p>

          <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto mb-11 text-lg">
            Quelques minutes par jour pour consolider les acquis de façon
            ludique, personnalisée et sans pression.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${EXERCEO_URL}/inscription`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-700 transition-colors"
            >
              Tester gratuitement — 3 sessions offertes
              <IconArrow />
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-neutral-200 bg-white text-neutral-700 font-semibold hover:bg-stone-50 transition-colors"
            >
              ← Retour à Mixarto
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════
          FONCTIONNALITÉS
      ══════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <header className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              Pourquoi Exerceo&nbsp;?
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto">
              Une application conçue pour les enfants du primaire, avec leurs
              besoins réels au centre.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🎯",
                title: "Personnalisé",
                desc: "Les exercices s'adaptent à la classe et aux matières choisies, selon le programme officiel français.",
                keyword: "exercices personnalisés primaire",
              },
              {
                icon: "⚡",
                title: "Instantané",
                desc: "En 30 secondes, une session d'exercices est prête. Pas d'inscription longue, pas de configuration complexe.",
                keyword: "app éducative enfant",
              },
              {
                icon: "🎮",
                title: "Ludique",
                desc: "Gamification légère, étoiles, badges et encouragements pour maintenir la motivation.",
                keyword: "soutien scolaire ludique",
              },
              {
                icon: "🚫",
                title: "Sans publicité",
                desc: "Aucune pub, aucun tracking. L'enfant se concentre sans distraction.",
                keyword: "app sans pub enfant",
              },
              {
                icon: "📚",
                title: "Programme officiel",
                desc: "Exercices alignés sur le curriculum CP→CM2 de l'Éducation Nationale.",
                keyword: "exercices CP CM2",
              },
              {
                icon: "📱",
                title: "Mobile-first",
                desc: "Parfaitement utilisable sur téléphone ou tablette, partout et n'importe quand.",
                keyword: "exercices enfants mobile",
              },
            ].map(({ icon, title, desc, keyword }) => (
              <article
                key={title}
                data-keyword={keyword}
                className="bg-stone-50 rounded-2xl p-7 border border-stone-100 hover:border-blue-100 transition-colors"
              >
                <div className="text-3xl mb-4" role="img" aria-hidden="true">{icon}</div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════
          MODÈLE TARIFAIRE
      ══════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-neutral-900 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <header className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Un accès simple et transparent
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              Commencez gratuitement, passez premium si vous souhaitez aller plus loin.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">

            {/* Gratuit */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-5">
                Gratuit
              </div>
              <div className="text-4xl font-bold text-white mb-7">
                0 €
              </div>
              <ul className="space-y-3.5" aria-label="Ce qui est inclus dans la version gratuite">
                {[
                  "1 profil enfant",
                  "3 sessions offertes",
                  "Toutes les matières",
                  "Accès immédiat",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-300">
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-blue-600 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-5 right-5 bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase">
                Populaire
              </div>
              <div className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-5">
                Premium
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                29 €
              </div>
              <p className="text-sm text-blue-200 mb-7">Accès à vie — pas d&apos;abonnement</p>
              <ul className="space-y-3.5" aria-label="Ce qui est inclus dans la version premium">
                {[
                  "Enfants illimités",
                  "Sessions illimitées",
                  "Toutes les matières",
                  "Un seul paiement, pour toujours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white">
                    <IconCheck white />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={`${EXERCEO_URL}/inscription`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-neutral-900 font-semibold hover:bg-stone-100 transition-colors"
            >
              Commencer gratuitement
              <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════
          MATIÈRES
      ══════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Toutes les matières du primaire
          </h2>
          <p className="text-neutral-500 mb-10 max-w-lg mx-auto">
            Du calcul mental à la conjugaison, en passant par la géographie et les sciences.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
            {[
              { label: "Mathématiques", bg: "#eef1fe", text: "#3440c2" },
              { label: "Français", bg: "#edfaf4", text: "#2a7a55" },
              { label: "Conjugaison", bg: "#fef3c7", text: "#92400e" },
              { label: "Vocabulaire", bg: "#fce7f3", text: "#9d174d" },
              { label: "Orthographe", bg: "#ede9fe", text: "#5b21b6" },
              { label: "Géographie", bg: "#e0f2fe", text: "#075985" },
              { label: "Histoire", bg: "#fff7ed", text: "#9a3412" },
              { label: "Sciences", bg: "#f0fdf4", text: "#166534" },
            ].map(({ label, bg, text }) => (
              <span
                key={label}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: bg, color: text }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════
          RETOUR MIXARTO
      ══════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-neutral-400 mb-3">
            Exerceo fait partie de la famille{" "}
            <strong className="font-semibold text-neutral-700">Mixarto</strong>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Découvrir tous les projets Mixarto
          </Link>
        </div>
      </section>

    </>
  )
}
