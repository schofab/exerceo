import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import MarketingHeader from "@/components/marketing/MarketingHeader"
import MarketingFooter from "@/components/marketing/MarketingFooter"
import Carousel from "@/components/marketing/Carousel"

const CAROUSEL_IMAGES = [
  { src: "/images/carousel/01.jpg", alt: "Création Mixarto" },
  { src: "/images/carousel/02.jpg", alt: "Création Mixarto" },
  { src: "/images/carousel/03.jpg", alt: "Création Mixarto" },
  { src: "/images/carousel/04.jpg", alt: "Création Mixarto" },
  { src: "/images/carousel/05.jpg", alt: "Création Mixarto" },
  { src: "/images/carousel/06.jpg", alt: "Création Mixarto" },
  { src: "/images/carousel/07.jpg", alt: "Création Mixarto" },
  { src: "/images/carousel/08.jpg", alt: "Création Mixarto" },
]

export const metadata: Metadata = {
  title: "Mixarto — Créations visuelles & applications pour le quotidien",
  description:
    "Portraits personnalisés d'animaux, affiches à télécharger et applications éducatives pensées avec soin. Découvrez la boutique Mixarto et l'app Exerceo.",
  keywords: ["portrait animal personnalisé", "affiches à télécharger", "exercices enfants", "app éducative enfant"],
  alternates: { canonical: "https://mixarto.com" },
  openGraph: { siteName: "Mixarto", locale: "fr_FR", type: "website" },
}

const ETSY_URL          = "https://www.etsy.com/shop/MixartoHappyStudio?ref=dashboard-header"
const ETSY_PORTRAITS    = "https://www.etsy.com/shop/MixartoHappyStudio?ref=dashboard-header&section_id=54554245"
const ETSY_PRINTS       = "https://www.etsy.com/shop/MixartoHappyStudio?ref=dashboard-header&section_id=54429573"
const EXERCEO   = "https://exerceo.mixarto.com"
const NAVY      = "#071453"
const GREEN     = "#6BD6A6"

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function MixartoLanding() {
  return (
    <>
      <MarketingHeader />
      <main>

        {/* ══════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════ */}
        <section className="bg-stone-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* Texte */}
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
                  <span style={{ color: GREEN }}>Créations visuelles<br />décalées &amp;</span>
                  <br />
                  <span style={{ color: NAVY }}>Apps imaginées<br />pour le quotidien</span>
                </h1>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={ETSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border-2 transition-opacity hover:opacity-80"
                    style={{ borderColor: GREEN, color: GREEN, backgroundColor: "transparent" }}
                  >
                    Visiter la boutique
                  </a>
                  <a
                    href="#apps"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: NAVY }}
                  >
                    Découvrir les apps
                  </a>
                </div>
              </div>

              {/* Carousel */}
              <div className="rounded-2xl aspect-[4/3] w-full overflow-hidden">
                <Carousel images={CAROUSEL_IMAGES} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. DEUX UNIVERS (cartes vertes + navy)
        ══════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

              {/* Carte créations — fond vert */}
              <article className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: GREEN }}>
                <h2 className="text-lg font-extrabold mb-4" style={{ color: NAVY }}>
                  Créations sur-mesure &amp; digital prints
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: NAVY }}>
                  Portraits d&apos;animaux personnalisés, illustrations et
                  affiches à offrir ou à exposer.<br />
                  Chaque création est pensée pour amuser et faire plaisir.
                </p>
                <a
                  href={ETSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: NAVY }}
                >
                  Visiter la boutique Etsy
                </a>
              </article>

              {/* Carte apps — fond navy */}
              <div>
                <article className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-lg font-extrabold mb-4" style={{ color: GREEN }}>
                    Des apps simples et utiles*
                  </h2>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Des outils conçus pour apprendre, créer ou s&apos;organiser
                    avec plaisir.<br />
                    Chaque app est pensée pour faciliter le quotidien.
                  </p>
                  <a
                    href="#apps"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-opacity hover:opacity-80"
                    style={{ borderColor: GREEN, color: GREEN }}
                  >
                    Découvrir les apps
                  </a>
                </article>
                <p className="text-xs mt-3 leading-relaxed" style={{ color: "#9298c8" }}>
                  *Mixarto développe progressivement de nouvelles applications et créations.
                  Exerceo est la première d&apos;une série d&apos;outils pensés avec la même exigence :
                  simplicité, utilité et plaisir d&apos;usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. LA BOUTIQUE MIXARTO
        ══════════════════════════════════════════════════════ */}
        <section id="boutique" className="bg-stone-50 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Titre + CTA inline */}
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <h2 className="text-2xl font-extrabold" style={{ color: NAVY }}>
                La boutique Mixarto
              </h2>
              <a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: NAVY }}
              >
                Visiter la boutique Etsy
              </a>
            </div>
            <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
              Des portraits personnalisés d&apos;animaux et des créations imprimables imaginées pour offrir, décorer et faire plaisir.
            </p>

            {/* Deux cartes produit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Portraits personnalisés — jaune */}
              <article className="rounded-2xl overflow-hidden flex" style={{ backgroundColor: "#F5C842" }}>
                <div className="flex-1 p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold mb-2" style={{ color: NAVY }}>
                      Portraits personnalisés
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: NAVY }}>
                      Transformez votre animal de compagnie en une illustration
                      unique et décalée !
                    </p>
                  </div>
                  <a
                    href={ETSY_PORTRAITS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white w-fit transition-opacity hover:opacity-90"
                    style={{ backgroundColor: NAVY }}
                  >
                    Voir sur Etsy
                  </a>
                </div>
                <div className="w-32 md:w-40 shrink-0 relative">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Portrait personnalisé d'animal"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </article>

              {/* Digital prints — rose */}
              <article className="rounded-2xl overflow-hidden flex" style={{ backgroundColor: "#F9A8D4" }}>
                <div className="flex-1 p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold mb-2" style={{ color: NAVY }}>
                      Digital prints
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: NAVY }}>
                      Des affiches originales à télécharger, imprimer et
                      encadrer chez soi, ou pour offrir !
                    </p>
                  </div>
                  <a
                    href={ETSY_PRINTS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white w-fit transition-opacity hover:opacity-90"
                    style={{ backgroundColor: NAVY }}
                  >
                    Voir sur Etsy
                  </a>
                </div>
                <div className="w-32 md:w-40 shrink-0 relative">
                  <Image
                    src="/images/digital-print.jpg"
                    alt="Digital print à télécharger"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. EXERCEO (avec vidéo en boucle)
        ══════════════════════════════════════════════════════ */}
        <section id="apps" className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Texte */}
              <div>
                <Image
                  src="/icons/Logo-exerceo.svg"
                  alt="exerceō"
                  width={160}
                  height={44}
                  className="mb-6"
                />
                <p className="text-xl font-extrabold leading-snug mb-3" style={{ color: NAVY }}>
                  Une app qui génère des exercices sur-mesure<br />pour votre enfant.
                </p>
                <p className="text-sm leading-relaxed mb-7" style={{ color: "#6b7280" }}>
                  Quelques minutes par jour pour consolider les acquis de façon
                  ludique, personnalisée et sans pression.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    { label: "Personnalisé",    desc: "adapté à la classe et au niveau de l'enfant" },
                    { label: "Ludique",         desc: "encouragements et récompenses" },
                    { label: "Sans publicité",  desc: "aucune distraction, aucun tracking" },
                    { label: "Concret",         desc: "exercices alignés sur le programme scolaire" },
                  ].map(({ label, desc }) => (
                    <li key={label} className="flex items-start gap-2.5">
                      <span className="mt-0.5 shrink-0"><Check /></span>
                      <span className="text-sm">
                        <strong className="font-semibold" style={{ color: NAVY }}>{label}</strong>
                        <span style={{ color: "#6b7280" }}> — {desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`${EXERCEO}/inscription`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border-2 transition-opacity hover:opacity-80"
                    style={{ borderColor: GREEN, color: GREEN }}
                  >
                    Tester exerceo
                  </a>
                  <Link
                    href="/exerceo"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: NAVY }}
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>

              {/* Vidéo en boucle — bloc coloré centré */}
              <div
                className="rounded-3xl flex items-center justify-center py-4 px-4"
                style={{ backgroundColor: GREEN }}
              >
                <div className="rounded-2xl shadow-xl overflow-hidden" style={{ maxWidth: "360px", width: "100%" }}>
                  <video
                    src="/videos/screen-exerceo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ display: "block", width: "100%", marginTop: "-3px", marginBottom: "-3px" }}
                    aria-label="Démonstration de l'application Exerceo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. À PROPOS DE MIXARTO
        ══════════════════════════════════════════════════════ */}
        <section id="a-propos" className="py-16 md:py-24" style={{ backgroundColor: GREEN }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="text-3xl font-extrabold mb-6" style={{ color: NAVY }}>
              À propos de Mixarto
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: NAVY }}>
              Mixarto est un projet personnel à la croisée de deux univers qui me tiennent à cœur : la création visuelle et les outils utiles au quotidien.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: NAVY }}>
              En tant que graphiste, photographe et créateur indépendant, j&apos;explore depuis plusieurs années différentes formes d&apos;expression, notamment à travers des portraits personnalisés d&apos;animaux et des illustrations digitales que je propose sur ma boutique Etsy.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: NAVY }}>
              Avec Exerceo, j&apos;ai voulu aller plus loin en mettant cette sensibilité créative au service d&apos;un besoin concret : accompagner les enfants dans leurs apprentissages de manière simple, ludique et personnalisée.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: NAVY }}>
              Mixarto est ainsi devenu un espace où design, créativité et utilité se rencontrent, avec une même exigence : proposer des expériences à la fois esthétiques, accessibles et réellement utiles au quotidien.
            </p>
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Visiter la boutique Etsy
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            6. D'AUTRES PROJETS ARRIVENT
        ══════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-2xl">
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: NAVY }}>
              D&apos;autres projets arrivent...
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Mixarto développe progressivement de nouvelles applications et créations.
              Exerceo est la première d&apos;une série d&apos;outils pensés avec la même
              exigence : simplicité, utilité et plaisir d&apos;usage.
            </p>
          </div>
        </section>

      </main>
      <MarketingFooter />
    </>
  )
}
