import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { Enfant } from "@/lib/types";
import type { EnfantCompetence, CompetenceStatus } from "@/lib/competences/types";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ enfantId: string }>;
}) {
  const { enfantId } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from("enfants")
    .select("prenom")
    .eq("id", enfantId)
    .single<{ prenom: string }>();
  return { title: `Statistiques — ${data?.prenom ?? "Enfant"} — exerceō` };
}

// ── Helpers visuels ──────────────────────────────────────────────

const STATUS_CONFIG: Record<
  CompetenceStatus,
  { label: string; color: "blue" | "orange" | "mint" | "purple" | "yellow"; barColor: string }
> = {
  not_started: { label: "Non commencé",  color: "blue",   barColor: "#d1d5db" },
  fragile:     { label: "Fragile",       color: "orange", barColor: "#f97316" },
  progressing: { label: "En progression",color: "purple", barColor: "#748bf7" },
  mastered:    { label: "Maîtrisé",      color: "mint",   barColor: "#6bd6a6" },
};

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

export default async function StatistiquesPage({
  params,
}: {
  params: Promise<{ enfantId: string }>;
}) {
  const { enfantId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  // Vérifie que l'enfant appartient au parent connecté
  const { data: enfant } = await supabase
    .from("enfants")
    .select("*")
    .eq("id", enfantId)
    .eq("parent_id", user.id)
    .single<Enfant>();

  if (!enfant) redirect("/tableau-de-bord");

  const { data: competences } = await supabase
    .from("enfant_competences")
    .select("*")
    .eq("enfant_id", enfantId)
    .order("matiere")
    .order("mastery_score", { ascending: false })
    .returns<EnfantCompetence[]>();

  const rows = competences ?? [];

  // Grouper par matière
  const grouped: Record<string, EnfantCompetence[]> = {};
  for (const c of rows) {
    if (!grouped[c.matiere]) grouped[c.matiere] = [];
    grouped[c.matiere].push(c);
  }

  const matieres = Object.keys(grouped).sort();

  // Résumé global
  const total = rows.length;
  const mastered = rows.filter((c) => c.status === "mastered").length;
  const fragile  = rows.filter((c) => c.status === "fragile").length;
  const globalScore =
    total > 0 ? Math.round(rows.reduce((acc, c) => acc + c.mastery_score, 0) / total) : 0;

  return (
    <div className="space-y-5 animate-fade-slide-up">

      {/* ── Header ── */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
            Statistiques
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {enfant.prenom} · {enfant.age} ans · {enfant.classe}
          </p>
        </div>
        <Link href="/tableau-de-bord">
          <Button size="sm" variant="ghost">← Tableau de bord</Button>
        </Link>
      </div>

      {/* ── Résumé global ── */}
      {total > 0 && (
        <div className="grid grid-cols-3 gap-3">
          <div
            className="rounded-2xl px-4 py-3 text-center"
            style={{ backgroundColor: "#f5f9ff", border: "1px solid #e0e7ff" }}
          >
            <p className="text-2xl font-extrabold" style={{ color: "#748bf7" }}>
              {globalScore}%
            </p>
            <p className="text-xs text-gray-500 mt-0.5">Score moyen</p>
          </div>
          <div
            className="rounded-2xl px-4 py-3 text-center"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <p className="text-2xl font-extrabold" style={{ color: "#6bd6a6" }}>
              {mastered}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">Maîtrisé{mastered > 1 ? "s" : ""}</p>
          </div>
          <div
            className="rounded-2xl px-4 py-3 text-center"
            style={{ backgroundColor: "#fff7ed", border: "1px solid #fed7aa" }}
          >
            <p className="text-2xl font-extrabold" style={{ color: "#f97316" }}>
              {fragile}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">Fragile{fragile > 1 ? "s" : ""}</p>
          </div>
        </div>
      )}

      {/* ── Pas encore de données ── */}
      {total === 0 && (
        <Card className="text-center py-12">
          <Image
            src="/icons/picto-fusee.svg"
            alt=""
            width={40}
            height={40}
            className="mx-auto mb-3 opacity-40"
          />
          <p className="text-gray-500 font-medium mb-1">
            Pas encore de données de compétences.
          </p>
          <p className="text-gray-400 text-sm mb-5">
            Les statistiques se remplissent au fil des sessions.
          </p>
          <Link href={`/session/nouvelle?enfant=${enfant.id}`}>
            <Button>Démarrer une session</Button>
          </Link>
        </Card>
      )}

      {/* ── Compétences par matière ── */}
      {matieres.map((matiere) => {
        const items = grouped[matiere];
        return (
          <div key={matiere}>
            <h2
              className="text-sm font-extrabold uppercase tracking-wide mb-2"
              style={{ color: "#071453" }}
            >
              {matiere}
            </h2>
            <div className="space-y-2">
              {items.map((c) => {
                const cfg = STATUS_CONFIG[c.status];
                return (
                  <div
                    key={c.skill_id}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-blue-50 bg-white"
                  >
                    {/* Barre de score */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                          {c.skill_label}
                        </p>
                        <span
                          className="text-sm font-extrabold ml-2 flex-shrink-0"
                          style={{ color: cfg.barColor }}
                        >
                          {c.mastery_score}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${c.mastery_score}%`,
                            backgroundColor: cfg.barColor,
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <Badge color={cfg.color}>{cfg.label}</Badge>
                        <span className="text-xs text-gray-400">
                          {c.attempts_total} tentative{c.attempts_total > 1 ? "s" : ""} · vu le {formatDate(c.last_seen_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* ── Action ── */}
      {total > 0 && (
        <div className="pt-2">
          <Link href={`/session/nouvelle?enfant=${enfant.id}`}>
            <Button size="lg" fullWidth>
              Nouvelle session
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
