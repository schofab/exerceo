import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"
import AccueilSignOut from "@/components/AccueilSignOut"
import type { Enfant, Profile } from "@/lib/types"

export const dynamic = "force-dynamic"
export const metadata = {
  title: "exerceō — Des exercices sur-mesure pour votre enfant",
  description:
    "Exercices ludiques et personnalisés selon la classe, le niveau et le profil de chaque enfant, basés sur les programmes de l'Éducation Nationale.",
}

const NAVY   = "#071453"
const PURPLE = "#748bf7"
const GREEN  = "#6bd6a6"

const FEATURES = [
  {
    titre: "Programme officiel",
    texte: "Exercices alignés sur les attendus de l'Éducation Nationale, du CP au CM2.",
    bg: "#6bd6a6",
    color: "#071453",
  },
  {
    titre: "Profil personnalisé",
    texte: "Adapté à l'âge, la classe, les forces et les difficultés de chaque enfant.",
    bg: "#ffb86b",
    color: "#071453",
  },
  {
    titre: "Récompenses",
    texte: "Étoiles, badges de progression et créatures Doceo à débloquer.",
    bg: "#f9de6f",
    color: "#071453",
  },
  {
    titre: "Rapide & ludique",
    texte: "3 à 12 exercices en 5 à 20 minutes. Pas de pression, juste du plaisir.",
    bg: "#e190c9",
    color: "#071453",
  },
]

const CLASSE_COULEUR: Record<string, string> = {
  CP:  "#6bd6a6",
  CE1: "#748bf7",
  CE2: "#748bf7",
  CM1: "#f4a460",
  CM2: "#f4a460",
}

export default async function AccueilPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // ── Données pour utilisateurs connectés ──────────────────────────────────
  let profile: Profile | null = null
  let enfants: Enfant[] = []
  let sessionsSemaineParEnfant: Record<string, number> = {}
  let etoilesParEnfant: Record<string, number> = {}
  const objectifSemaine = 5

  if (user) {
    const [{ data: p }, { data: e }, { data: sessions }] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", user.id).single<Profile>(),
      supabase.from("enfants").select("*").eq("parent_id", user.id).order("created_at"),
      supabase.from("sessions").select("enfant_id, created_at").eq("parent_id", user.id),
    ])
    profile = p
    enfants = (e as Enfant[]) ?? []

    const lundi = new Date()
    lundi.setDate(lundi.getDate() - ((lundi.getDay() + 6) % 7))
    lundi.setHours(0, 0, 0, 0)

    ;(sessions ?? []).forEach((s: { enfant_id: string; created_at: string }) => {
      if (new Date(s.created_at) >= lundi) {
        sessionsSemaineParEnfant[s.enfant_id] =
          (sessionsSemaineParEnfant[s.enfant_id] ?? 0) + 1
      }
    })

    if (enfants.length > 0) {
      const results = await Promise.all(
        enfants.map((e) =>
          supabase
            .rpc("get_etoiles_enfant", { p_enfant_id: e.id })
            .then(({ data }) => ({ id: e.id, total: Number(data ?? 0) }))
        )
      )
      results.forEach(({ id, total }) => { etoilesParEnfant[id] = total })
    }
  }

  const totalEtoiles = Object.values(etoilesParEnfant).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Header ── */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between gap-3">

          {/* Logos */}
          <div className="flex flex-col items-start gap-0.5">
            <Link href="/accueil" className="inline-flex">
              <Image src="/icons/Logo-exerceo.svg" alt="exerceō" width={130} height={34} priority />
            </Link>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-medium leading-none" style={{ color: NAVY }}>par</span>
              <Link href="https://mixarto.com" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src="/icons/Logo-mixarto.svg" alt="mixarto" width={48} height={12} priority />
              </Link>
            </div>
          </div>

          {/* Actions header */}
          <div className="flex items-center gap-2">
            {user ? (
              <>
                {profile?.is_premium && (
                  <span
                    className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: GREEN, color: NAVY }}
                  >
                    ✦ Premium
                  </span>
                )}
                <Link
                  href="/tableau-de-bord"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: PURPLE }}
                >
                  Tableau de bord
                </Link>
                <AccueilSignOut />
              </>
            ) : (
              <>
                <Link
                  href="/connexion"
                  className="text-sm font-semibold px-3 py-1.5 rounded-xl border transition-colors hover:bg-gray-50"
                  style={{ color: NAVY, borderColor: "#e0e7ff" }}
                >
                  Se connecter
                </Link>
                <Link
                  href="/inscription"
                  className="text-sm font-semibold px-3 py-1.5 rounded-xl text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: PURPLE }}
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* ── Hero ── */}
        <section
          className="px-4 pt-10 pb-12 text-center"
          style={{ backgroundColor: NAVY }}
        >
          <div className="max-w-lg mx-auto space-y-5">
            <h1 className="text-3xl font-extrabold leading-tight text-white">
              Des exercices{" "}
              <span style={{ color: GREEN }}>sur-mesure</span>{" "}
              pour votre enfant
            </h1>
            <p className="text-base leading-relaxed max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              En quelques minutes, générez des exercices ludiques et personnalisés
              selon la classe, le niveau et le profil de votre enfant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              {user ? (
                <>
                  <Link
                    href="/session/nouvelle"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-white font-bold text-base transition-opacity hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, boxShadow: `0 4px 16px rgba(116,139,247,0.35)` }}
                  >
                    <span className="text-lg font-black">+</span>
                    Nouvelle session
                  </Link>
                  <Link
                    href="/tableau-de-bord"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-bold text-base border-2 transition-colors hover:bg-gray-50"
                    style={{ color: NAVY, borderColor: "#e0e7ff" }}
                  >
                    Mon tableau de bord
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/inscription"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-bold text-base transition-opacity hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`, boxShadow: `0 4px 16px rgba(116,139,247,0.35)` }}
                  >
                    Essayer gratuitement
                  </Link>
                  <Link
                    href="/connexion"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-bold text-base border-2 transition-colors"
                    style={{ color: "white", borderColor: "rgba(255,255,255,0.35)" }}
                  >
                    Se connecter
                  </Link>
                </>
              )}
            </div>
            {!user && (
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Gratuit · 3 sessions offertes · Sans engagement
              </p>
            )}
          </div>
        </section>

        {/* ── Progression (si connecté et enfants présents) ── */}
        {user && enfants.length > 0 && (
          <section className="px-4 py-8 max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-extrabold" style={{ color: NAVY }}>
                Ma progression
              </h2>
              {totalEtoiles > 0 && (
                <span
                  className="flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#f5f9ff", color: PURPLE }}
                >
                  <Image src="/icons/picto-etoile-pleine.svg" alt="" width={14} height={14} />
                  {totalEtoiles} étoile{totalEtoiles > 1 ? "s" : ""}
                </span>
              )}
            </div>

            <div className="space-y-3">
              {enfants.map((enfant) => {
                const sessions = Math.min(sessionsSemaineParEnfant[enfant.id] ?? 0, objectifSemaine)
                const pct = Math.round((sessions / objectifSemaine) * 100)
                const atteint = sessions >= objectifSemaine
                const etoiles = etoilesParEnfant[enfant.id] ?? 0
                const couleur = CLASSE_COULEUR[enfant.classe] ?? PURPLE

                return (
                  <div
                    key={enfant.id}
                    className="rounded-2xl border border-gray-100 p-4 space-y-3"
                    style={{ backgroundColor: "#fafbff" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: couleur + "22", color: couleur }}
                        >
                          {enfant.classe}
                        </span>
                        <span className="font-bold text-sm" style={{ color: NAVY }}>
                          {enfant.prenom}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {etoiles > 0 && (
                          <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: PURPLE }}>
                            <Image src="/icons/picto-etoile-pleine.svg" alt="" width={11} height={11} />
                            {etoiles}
                          </span>
                        )}
                        <Link
                          href={`/collection/${enfant.id}`}
                          className="text-xs font-semibold px-2 py-1 rounded-lg border transition-colors hover:bg-white"
                          style={{ color: PURPLE, borderColor: "#e0e7ff" }}
                        >
                          Doceo
                        </Link>
                      </div>
                    </div>

                    {/* Barre objectif semaine */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold" style={{ color: NAVY }}>
                          Objectif semaine
                        </span>
                        <span className="text-xs font-bold" style={{ color: atteint ? GREEN : PURPLE }}>
                          {sessions}/{objectifSemaine}{atteint ? " 🎉" : ""}
                        </span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#eef0ff" }}>
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            background: atteint
                              ? `linear-gradient(90deg, ${GREEN}, #48c997)`
                              : `linear-gradient(90deg, ${PURPLE}, ${GREEN})`,
                          }}
                        />
                      </div>
                    </div>

                    <Link
                      href={`/session/nouvelle?enfant=${enfant.id}`}
                      className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{ background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})` }}
                    >
                      <span className="font-black">+</span>
                      Nouvelle session pour {enfant.prenom}
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* ── Features ── */}
        <section className="px-4 py-10 max-w-lg mx-auto">
          <h2 className="text-xl font-extrabold text-center mb-6" style={{ color: NAVY }}>
            Comment ça marche ?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <div
                key={f.titre}
                className="rounded-2xl p-4 space-y-2"
                style={{ backgroundColor: f.bg }}
              >
                <p className="text-sm font-extrabold" style={{ color: f.color }}>
                  {f.titre}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: f.color, opacity: 0.8 }}>{f.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Doceo teaser ── */}
        <section
          className="px-4 py-10"
          style={{ backgroundColor: NAVY }}
        >
          <div className="max-w-lg mx-auto text-center space-y-4">
            <h2 className="text-xl font-extrabold text-white">
              La collection Doceo
            </h2>
            <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              À chaque session réussie, ton enfant gagne des étoiles et débloque
              des créatures Doceo à collectionner. Une motivation supplémentaire
              à chaque exercice !
            </p>
            {user && enfants.length > 0 && (
              <Link
                href={`/collection/${enfants[0].id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: PURPLE }}
              >
                Voir ma collection
              </Link>
            )}
          </div>
        </section>

        {/* ── CTA final (non connecté) ── */}
        {!user && (
          <section className="px-4 py-12 text-center max-w-lg mx-auto">
            <h2 className="text-xl font-extrabold mb-2" style={{ color: NAVY }}>
              Prêt à commencer ?
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              3 sessions gratuites, sans carte bancaire.
            </p>
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl text-white font-bold text-base transition-opacity hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${PURPLE}, ${GREEN})`,
                boxShadow: `0 4px 20px rgba(116,139,247,0.35)`,
              }}
            >
              Créer un compte gratuitement
            </Link>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
