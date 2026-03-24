import type { Metadata } from "next"
import Link from "next/link"
import MarketingHeader from "@/components/marketing/MarketingHeader"
import MarketingFooter from "@/components/marketing/MarketingFooter"

export const metadata: Metadata = {
  title: "Mixarto — Créations visuelles & applications pour le quotidien",
  description:
    "Portraits personnalisés d'animaux, affiches à télécharger et applications éducatives pensées avec soin. Découvrez la boutique Mixarto et l'app Exerceo.",
  keywords: [
    "portrait animal personnalisé",
    "affiches à télécharger",
    "exercices enfants",
    "app éducative enfant",
    "soutien scolaire ludique",
  ],
  alternates: { canonical: "https://mixarto.com" },
  openGraph: { siteName: "Mixarto", locale: "fr_FR", type: "website" },
}

const ETSY_URL = "https://www.etsy.com/shop/MixartoHappyStudio?ref=dashboard-header"
const EXERCEO_URL = "https://exerceo.mixarto.com"

// ── Icônes ──────────────────────────────────────────────────────────────────────

function IconExternal({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function IconArrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────────

export default function MixartoLanding() {
  return (
    <>
      <MarketingHeader />

      <main id="contenu-principal">

        {/* ════════════════════════════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white pt-14 pb-20 md:pt-20 md:pb-28">
          {/* Fond décoratif */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 rounded-bl-[100px] hidden md:block" />
            <div className="absolute top-16 right-8 w-80 h-80 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(147,197,253,0.08) 0%, transparent 70%)" }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-semibold mb-7 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Boutique créative &amp; applications utiles
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-6">
                Créations visuelles &amp; apps{" "}
                <span className="text-neutral-400">imaginées pour le quotidien</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-10 max-w-xl">
                Portraits personnalisés, affiches à télécharger et applications utiles,
                conçus avec soin.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={ETSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors"
                >
                  Découvrir la boutique
                  <IconExternal />
                </a>
                <Link
                  href="/exerceo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-200 bg-white text-neutral-700 font-semibold text-sm hover:bg-stone-50 transition-colors"
                >
                  Découvrir les apps
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            2. DOUBLE UNIVERS
        ════════════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                Deux univers, une même exigence
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                Chaque projet Mixarto allie esthétique, utilité et plaisir d&apos;usage.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Boutique */}
              <article className="group bg-white rounded-2xl p-8 md:p-10 border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.88 0 1.735-.113 2.55-.325C16.315 21.227 18 19.332 18 17.1V15a2 2 0 0 1 2-2h1.5a1.5 1.5 0 0 0 1.5-1.5 10.002 10.002 0 0 0-11-9.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Créations personnalisées &amp; digital prints
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  Portraits d&apos;animaux, illustrations et affiches à offrir ou à exposer.
                  Chaque création est pensée pour durer et pour toucher.
                </p>
                <a
                  href={ETSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-amber-700 transition-colors"
                >
                  Voir la boutique Etsy
                  <IconExternal className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>

              {/* Apps */}
              <article className="group bg-white rounded-2xl p-8 md:p-10 border border-stone-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Des apps simples, utiles et bien pensées
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  Des outils conçus pour apprendre, créer ou s&apos;organiser avec plaisir.
                  Pensés pour le quotidien, pas pour l&apos;esbroufe.
                </p>
                <Link
                  href="/exerceo"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-blue-700 transition-colors"
                >
                  Découvrir Exerceo
                  <IconArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            3. FOCUS EXERCEO
        ════════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Texte */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-5">
                  Application éducative · CP → CM2
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2 leading-tight">
                  Exerceo
                </h2>
                <p className="text-lg text-neutral-500 font-medium mb-5">
                  Des exercices sur-mesure pour votre enfant
                </p>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  Quelques minutes par jour pour consolider les acquis de façon
                  ludique, personnalisée et sans pression.
                </p>

                <ul className="space-y-3 mb-10" aria-label="Points forts d'Exerceo">
                  {[
                    { label: "Personnalisé", desc: "adapté à la classe et au niveau de l'enfant" },
                    { label: "Ludique", desc: "gamification légère, étoiles et encouragements" },
                    { label: "Sans publicité", desc: "aucune distraction, aucun tracking" },
                    { label: "Adapté au niveau", desc: "exercices alignés sur le programme officiel" },
                  ].map(({ label, desc }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-emerald-500"><IconCheck /></span>
                      <span className="text-sm leading-relaxed">
                        <strong className="font-semibold text-neutral-800">{label}</strong>
                        <span className="text-neutral-500"> — {desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${EXERCEO_URL}/inscription`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors"
                  >
                    Tester Exerceo
                  </a>
                  <Link
                    href="/exerceo"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-stone-50 transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>

              {/* Visuel */}
              <div className="relative" aria-hidden="true">
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 rounded-2xl aspect-[4/3] flex items-center justify-center border border-blue-100/60">
                  <div className="text-center p-10">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-4 border border-blue-100">
                      <span className="text-2xl font-bold" style={{ color: "#748bf7" }}>E</span>
                    </div>
                    <p className="text-sm font-semibold text-neutral-600">Exerceo</p>
                    <p className="text-xs text-neutral-400 mt-1">Soutien scolaire ludique</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-3 bg-white rounded-xl px-4 py-2.5 shadow-lg border border-stone-100 flex items-center gap-2.5">
                  <span className="text-xl">⭐</span>
                  <div>
                    <div className="text-xs font-bold text-neutral-800">CP → CM2</div>
                    <div className="text-[11px] text-neutral-500">toutes matières</div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white rounded-xl px-4 py-2.5 shadow-lg border border-stone-100">
                  <div className="text-xs font-bold text-neutral-800">🎯 Personnalisé</div>
                  <div className="text-[11px] text-neutral-500">en 30 secondes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            4. BOUTIQUE
        ════════════════════════════════════════════════════════════════════ */}
        <section id="boutique" className="bg-stone-50 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-5">
                Boutique créative
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                La boutique Mixarto
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto leading-relaxed">
                Des portraits personnalisés d&apos;animaux et des créations imprimables imaginés
                pour offrir, décorer et faire plaisir.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {[
                {
                  emoji: "🐾",
                  title: "Portraits personnalisés",
                  desc: "Transformez votre animal de compagnie en illustration unique. Un cadeau qui parle au cœur.",
                  bg: "bg-amber-50",
                  border: "border-amber-100",
                  hover: "hover:border-amber-300",
                },
                {
                  emoji: "🖼️",
                  title: "Digital prints",
                  desc: "Affiches à télécharger, imprimer et encadrer chez soi. Décoration au format numérique.",
                  bg: "bg-white",
                  border: "border-stone-200",
                  hover: "hover:border-stone-400",
                },
                {
                  emoji: "🎁",
                  title: "Cadeaux créatifs",
                  desc: "Des idées cadeaux originales pour toutes les occasions et toutes les personnes.",
                  bg: "bg-rose-50",
                  border: "border-rose-100",
                  hover: "hover:border-rose-300",
                },
              ].map(({ emoji, title, desc, bg, border, hover }) => (
                <a
                  key={title}
                  href={ETSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} — voir sur Etsy`}
                  className={`group ${bg} rounded-2xl p-7 border ${border} ${hover} hover:shadow-md transition-all duration-300 block`}
                >
                  <div className="text-3xl mb-4" role="img" aria-hidden="true">{emoji}</div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    Voir sur Etsy
                    <IconExternal className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors"
              >
                Visiter la boutique Etsy
                <IconExternal />
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            5. PREUVE / RASSURANCE
        ════════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                Ce que disent les utilisateurs
              </h2>
              <p className="text-sm text-neutral-400">
                Déjà adopté par de nombreux parents · Créations appréciées sur Etsy
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
              {[
                {
                  text: "Exerceo a changé notre routine du soir. Mon fils de CE2 attend ses exercices avec impatience.",
                  author: "Parent d'élève",
                  tag: "Exerceo",
                },
                {
                  text: "Le portrait de notre chien est absolument magnifique. Un vrai cadeau qui fait son effet.",
                  author: "Cliente Etsy",
                  tag: "Boutique",
                },
                {
                  text: "Simple, propre, sans pub. Exactement ce qu'on cherchait pour réviser sans stress.",
                  author: "Parent d'élève",
                  tag: "Exerceo",
                },
              ].map(({ text, author, tag }, i) => (
                <figure key={i} className="bg-stone-50 rounded-2xl p-7 border border-stone-100">
                  <div className="flex text-amber-400 mb-4" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <blockquote className="text-sm text-neutral-600 leading-relaxed mb-5 italic">
                    &ldquo;{text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-800">{author}</span>
                    <span className="text-xs text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-full">{tag}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <dl className="flex flex-wrap justify-center gap-10 md:gap-16">
              {[
                { icon: "🔒", label: "Sans publicité" },
                { icon: "🇫🇷", label: "Projet français" },
                { icon: "✨", label: "Fait avec soin" },
                { icon: "📱", label: "100 % mobile" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <dt className="text-2xl" aria-hidden="true">{icon}</dt>
                  <dd className="text-xs font-semibold text-neutral-500">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            6. À PROPOS
        ════════════════════════════════════════════════════════════════════ */}
        <section id="a-propos" className="bg-neutral-900 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-neutral-300 text-xs font-semibold mb-7">
                Notre histoire
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                À propos de Mixarto
              </h2>
              <p className="text-neutral-300 leading-relaxed text-lg mb-5">
                Mixarto est un projet indépendant à la croisée de la création
                visuelle et des outils numériques.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                L&apos;objectif&nbsp;: concevoir des produits beaux, utiles et agréables à
                utiliser. Pas de course à la croissance, pas de dark patterns&nbsp;—
                juste du travail bien fait, avec une attention sincère portée à
                chaque détail.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            7. PROJETS FUTURS
        ════════════════════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold mb-7">
                En cours de développement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-5">
                D&apos;autres projets arrivent
              </h2>
              <p className="text-neutral-500 leading-relaxed text-lg">
                Mixarto développe progressivement de nouvelles applications et créations.
                Exerceo est la première d&apos;une série d&apos;outils pensés avec la même exigence&nbsp;:{" "}
                <strong className="font-semibold text-neutral-700">
                  simplicité, utilité et plaisir d&apos;usage.
                </strong>
              </p>
            </div>
          </div>
        </section>

      </main>

      <MarketingFooter />
    </>
  )
}
