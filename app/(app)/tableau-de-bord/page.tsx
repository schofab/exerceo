import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { Enfant, NotionStats, Profile } from "@/lib/types";
import { LIMITE_ENFANTS_GRATUIT, LIMITE_SESSIONS_GRATUITES } from "@/lib/types";
import DeleteEnfantButton from "@/components/DeleteEnfantButton";
import ProgressionEnfant from "@/components/ProgressionEnfant";

export const dynamic = "force-dynamic";
export const metadata = { title: "Tableau de bord — exerceō" };

// --- Helpers visuels ---

const CLASSE_COULEUR: Record<string, "blue" | "orange" | "mint" | "purple" | "yellow"> = {
  CP: "mint", CE1: "blue", CE2: "blue", CM1: "orange", CM2: "orange",
};

export default async function TableauDeBordPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const [{ data: profile }, { data: enfants }, { data: allSessions }] =
    await Promise.all([
      supabase.from("profiles").select("*").eq("id", user.id).single<Profile>(),
      supabase
        .from("enfants")
        .select("*")
        .eq("parent_id", user.id)
        .order("created_at"),
      supabase
        .from("sessions")
        .select("enfant_id, created_at")
        .eq("parent_id", user.id),
    ]);

  // Étoiles + faiblesses par enfant via RPC
  const etoilesParEnfant: Record<string, number> = {};
  const faiblessesParEnfant: Record<string, NotionStats[]> = {};
  if ((enfants ?? []).length > 0) {
    const [etoilesResults, faiblessesResults] = await Promise.all([
      Promise.all(
        (enfants as Enfant[]).map((e) =>
          supabase.rpc("get_etoiles_enfant", { p_enfant_id: e.id }).then(
            ({ data }) => ({ id: e.id, total: Number(data ?? 0) })
          )
        )
      ),
      Promise.all(
        (enfants as Enfant[]).map((e) =>
          supabase
            .rpc("get_faiblesses_enfant", { p_enfant_id: e.id })
            .then(({ data }) => ({
              id: e.id,
              stats: Array.isArray(data) ? (data as NotionStats[]) : [],
            }))
        )
      ),
    ]);
    etoilesResults.forEach(({ id, total }) => { etoilesParEnfant[id] = total; });
    faiblessesResults.forEach(({ id, stats }) => { faiblessesParEnfant[id] = stats; });
  }

  const sessionsParEnfant: Record<string, number> = {};
  (allSessions ?? []).forEach((s: { enfant_id: string; created_at: string }) => {
    sessionsParEnfant[s.enfant_id] = (sessionsParEnfant[s.enfant_id] ?? 0) + 1;
  });

  const lundi = new Date();
  lundi.setDate(lundi.getDate() - ((lundi.getDay() + 6) % 7));
  lundi.setHours(0, 0, 0, 0);
  const objectifSemaine = 5;

  // Sessions cette semaine par enfant
  const sessionsSemaineParEnfant: Record<string, number> = {};
  (allSessions ?? []).forEach((s: { enfant_id: string; created_at: string }) => {
    if (new Date(s.created_at) >= lundi) {
      sessionsSemaineParEnfant[s.enfant_id] = (sessionsSemaineParEnfant[s.enfant_id] ?? 0) + 1;
    }
  });

  const sessionRestantes =
    LIMITE_SESSIONS_GRATUITES - (profile?.sessions_used ?? 0);
  const peutAjouterEnfant =
    profile?.is_premium || (enfants ?? []).length < LIMITE_ENFANTS_GRATUIT;

  return (
    <div className="space-y-6 animate-fade-slide-up">

      {/* ── Bannière quota ── */}
      {!profile?.is_premium && (
        <div
          className={`rounded-2xl p-4 flex items-center justify-between gap-4 border ${
            sessionRestantes > 0
              ? "bg-blue-50 border-blue-200"
              : "bg-orange-50 border-orange-200"
          }`}
        >
          <div>
            {sessionRestantes > 0 ? (
              <>
                <p className="font-semibold text-blue-800">
                  {sessionRestantes} session
                  {sessionRestantes > 1 ? "s" : ""} gratuite
                  {sessionRestantes > 1 ? "s" : ""} restante
                  {sessionRestantes > 1 ? "s" : ""}
                </p>
                <p className="text-sm text-blue-600 mt-0.5">
                  Ensuite <s>29 €</s> 19 € à vie pour un accès illimité.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-orange-800">
                  Quota gratuit atteint
                </p>
                <p className="text-sm text-orange-700 mt-0.5">
                  Passez Premium pour continuer.
                </p>
              </>
            )}
          </div>
          {sessionRestantes <= 0 && (
            <Link href="/api/stripe/checkout" prefetch={false}>
              <Button size="sm" className="whitespace-nowrap">
                Passer Premium — <s className="opacity-60">29&nbsp;€</s>&nbsp;19&nbsp;€
              </Button>
            </Link>
          )}
        </div>
      )}


      {/* ── Profils enfants ── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold" style={{ color: "#071453" }}>Mes enfants</h2>
          {peutAjouterEnfant ? (
            <Link href="/enfant/nouveau">
              <Button size="sm" variant="secondary">
                + Ajouter
              </Button>
            </Link>
          ) : (
            <span className="text-xs text-gray-400">Premium requis</span>
          )}
        </div>

        {(enfants ?? []).length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-gray-500 mb-5 font-medium">
              Aucun profil enfant pour l&apos;instant.
            </p>
            <Link href="/enfant/nouveau">
              <Button>Créer le premier profil</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-3">
            {(enfants as Enfant[]).map((enfant) => {
              const nbSessions = sessionsParEnfant[enfant.id] ?? 0;
              const classeCouleur = CLASSE_COULEUR[enfant.classe] ?? "blue";
              const sessionsSemaine = Math.min(sessionsSemaineParEnfant[enfant.id] ?? 0, objectifSemaine);
              const progressPct = Math.round((sessionsSemaine / objectifSemaine) * 100);
              const objectifAtteint = sessionsSemaine >= objectifSemaine;
              return (
                <Card key={enfant.id}>
                  {/* Row 1 : prénom + classe + poubelle */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-base" style={{ color: "#071453" }}>
                        {enfant.prenom}
                      </p>
                      <Badge color={classeCouleur}>{enfant.classe}</Badge>
                      <span className="text-xs text-gray-400">{enfant.age} ans</span>
                    </div>
                    <DeleteEnfantButton enfantId={enfant.id} prenom={enfant.prenom} />
                  </div>

                  {/* Row 2 : compteur sessions + étoiles */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-gray-500">
                      {nbSessions === 0
                        ? "Pas encore de session"
                        : `${nbSessions} session${nbSessions > 1 ? "s" : ""} terminée${nbSessions > 1 ? "s" : ""}`}
                    </span>
                    {(etoilesParEnfant[enfant.id] ?? 0) > 0 && (
                      <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#748bf7" }}>
                        <Image src="/icons/picto-etoile-pleine.svg" alt="" width={12} height={12} />
                        {etoilesParEnfant[enfant.id]}
                      </span>
                    )}
                  </div>

                  {/* Progression (forces / faiblesses) */}
                  <ProgressionEnfant stats={faiblessesParEnfant[enfant.id] ?? []} />

                  {/* Objectif de la semaine */}
                  <div className="mt-3 mb-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold flex items-center gap-1" style={{ color: "#071453" }}>
                        <Image src="/icons/picto-cible.svg" alt="" width={13} height={13} />
                        Objectif semaine
                      </span>
                      <span className="text-xs font-bold" style={{ color: objectifAtteint ? "#6bd6a6" : "#748bf7" }}>
                        {sessionsSemaine}/{objectifSemaine}
                        {objectifAtteint && " 🎉"}
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#eef0ff" }}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${progressPct}%`,
                          background: objectifAtteint
                            ? "linear-gradient(90deg, #6bd6a6, #48c997)"
                            : "linear-gradient(90deg, #748bf7, #6bd6a6)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 4 : actions */}
                  <div className="flex gap-2 mt-2">
                    <Link href={`/session/nouvelle?enfant=${enfant.id}`} className="flex-1">
                      <Button size="sm" fullWidth>Nouvelle session</Button>
                    </Link>
                    <Link href={`/collection/${enfant.id}`}>
                      <Button size="sm" variant="ghost">Doceo</Button>
                    </Link>
                    <Link href={`/enfant/${enfant.id}`}>
                      <Button size="sm" variant="ghost">Modifier</Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* ── CTA principal ── */}
      {(enfants ?? []).length > 0 && (
        <div className="pt-2">
          <Link href="/session/nouvelle">
            <Button size="lg" fullWidth>
              Démarrer une session
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
