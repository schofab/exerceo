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
  fragile:     { label: "À consolider",  color: "orange", barColor: "#f97316" },
  progressing: { label: "En progression",color: "purple", barColor: "#748bf7" },
  mastered:    { label: "Maîtrisé",      color: "mint",   barColor: "#6bd6a6" },
};

// Ordre d'affichage dans la liste : fragile en premier, maîtrisé en dernier
const STATUS_ORDER: Record<CompetenceStatus, number> = {
  fragile:     0,
  progressing: 1,
  not_started: 2,
  mastered:    3,
};

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

// ── Conseil du moment ────────────────────────────────────────────

interface Conseil {
  tresAlAise: string[];
  aRenforcer: string | null;
  prochaineSession: string;
}

function buildConseil(rows: EnfantCompetence[]): Conseil {
  // Top 2 maîtrisées (score desc, tentatives desc)
  const tresAlAise = rows
    .filter((c) => c.status === "mastered")
    .sort((a, b) => b.mastery_score - a.mastery_score || b.attempts_total - a.attempts_total)
    .slice(0, 2)
    .map((c) => c.skill_label);

  // Priorité aux fragiles, sinon les progressing les plus faibles
  const aRenforcerRow =
    rows
      .filter((c) => c.status === "fragile")
      .sort((a, b) => a.mastery_score - b.mastery_score)[0] ??
    rows
      .filter((c) => c.status === "progressing")
      .sort((a, b) => a.mastery_score - b.mastery_score)[0] ??
    null;

  const aRenforcer = aRenforcerRow?.skill_label ?? null;

  // Prochaine session
  let prochaineSession: string;
  const hasFrag = rows.some((c) => c.status === "fragile");

  if (hasFrag && aRenforcerRow) {
    prochaineSession = `Misez sur "${aRenforcerRow.skill_label}" pour progresser rapidement.`;
  } else {
    const soon = Date.now() + 7 * 24 * 3600 * 1000;
    const reviewDue = rows
      .filter(
        (c) =>
          c.status === "mastered" &&
          c.next_review_at != null &&
          new Date(c.next_review_at).getTime() <= soon
      )
      .sort(
        (a, b) =>
          new Date(a.next_review_at!).getTime() - new Date(b.next_review_at!).getTime()
      );

    if (reviewDue.length > 0) {
      const r = reviewDue[0];
      prochaineSession = `Pensez à réviser "${r.skill_label}" avant le ${formatDate(r.next_review_at)}.`;
    } else {
      prochaineSession = "Toutes les notions progressent bien, continuez !";
    }
  }

  return { tresAlAise, aRenforcer, prochaineSession };
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

  const conseil = total > 0 ? buildConseil(rows) : null;

  // Répartition des tentatives par matière (données déjà chargées)
  const repartitionData = matieres
    .map((m) => ({
      matiere: m,
      attempts: grouped[m].reduce((acc, c) => acc + c.attempts_total, 0),
    }))
    .filter((r) => r.attempts > 0)
    .sort((a, b) => b.attempts - a.attempts);
  const totalAttempts = repartitionData.reduce((acc, r) => acc + r.attempts, 0);

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
            <p className="text-xs text-gray-500 mt-0.5">À consolider</p>
          </div>
        </div>
      )}

      {/* ── Conseil du moment ── */}
      {conseil && (
        <div
          className="rounded-2xl px-4 py-4 space-y-2"
          style={{ backgroundColor: "#f5f9ff", border: "1px solid #e0e7ff" }}
        >
          <p className="text-sm font-extrabold" style={{ color: "#071453" }}>
            💡 Conseil du moment
          </p>
          {conseil.tresAlAise.length > 0 && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-emerald-700">Très à l&apos;aise :</span>{" "}
              {conseil.tresAlAise.join(", ")}
            </p>
          )}
          {conseil.aRenforcer && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold" style={{ color: "#f97316" }}>
                À renforcer en priorité :
              </span>{" "}
              {conseil.aRenforcer}
            </p>
          )}
          <p className="text-sm text-gray-600">
            <span className="font-semibold" style={{ color: "#748bf7" }}>
              Prochaine session :
            </span>{" "}
            {conseil.prochaineSession}
          </p>
        </div>
      )}

      {/* ── Répartition des exercices ── */}
      {repartitionData.length > 0 && (
        <div>
          <h2
            className="text-sm font-extrabold uppercase tracking-wide mb-3"
            style={{ color: "#071453" }}
          >
            Répartition des exercices
          </h2>
          <div className="space-y-3">
            {repartitionData.map((r) => {
              const pct = totalAttempts > 0
                ? Math.round((r.attempts / totalAttempts) * 100)
                : 0;
              return (
                <div key={r.matiere}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{r.matiere}</span>
                    <span
                      className="text-sm font-extrabold"
                      style={{ color: "#748bf7" }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, backgroundColor: "#748bf7" }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {r.attempts} exercice{r.attempts > 1 ? "s" : ""}
                  </p>
                </div>
              );
            })}
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
        const items = [...grouped[matiere]].sort(
          (a, b) =>
            STATUS_ORDER[a.status] - STATUS_ORDER[b.status] ||
            b.mastery_score - a.mastery_score
        );
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
                      {c.status === "mastered" && c.next_review_at && (
                        <p className="text-xs mt-1.5" style={{ color: "#6bd6a6" }}>
                          🔁 Révision prévue le {formatDate(c.next_review_at)}
                        </p>
                      )}
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
