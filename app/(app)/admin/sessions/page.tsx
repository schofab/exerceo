import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const metadata = { title: "Sessions bêta — exerceō" };

const ADMIN_EMAIL = "fab.loveandvibes@gmail.com";

type SessionRow = {
  id: string;
  created_at: string;
  matieres: string[];
  temps_disponible: number;
  enfant: { prenom: string; classe: string } | null;
  profile: { email: string } | null;
};

export default async function AdminSessionsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== ADMIN_EMAIL) redirect("/tableau-de-bord");

  const { data: sessions } = await supabase
    .from("sessions")
    .select("id, created_at, matieres, temps_disponible, enfant:enfants(prenom, classe), profile:profiles(email)")
    .order("created_at", { ascending: false })
    .returns<SessionRow[]>();

  const list = sessions ?? [];

  // Regrouper par utilisateur pour les stats
  const parUser: Record<string, number> = {};
  for (const s of list) {
    const email = s.profile?.email ?? "inconnu";
    parUser[email] = (parUser[email] ?? 0) + 1;
  }

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
          Sessions bêta
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {list.length} session{list.length > 1 ? "s" : ""} au total — {Object.keys(parUser).length} utilisateur{Object.keys(parUser).length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Stats par utilisateur */}
      <div className="border border-gray-100 rounded-2xl p-4 space-y-2"
        style={{ boxShadow: "0 1px 6px rgba(116,139,247,0.07)" }}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-gray-400">Sessions par utilisateur</h2>
        <div className="space-y-1.5">
          {Object.entries(parUser)
            .sort(([, a], [, b]) => b - a)
            .map(([email, count]) => (
              <div key={email} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{email}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#e8edff", color: "#071453" }}>
                  {count} session{count > 1 ? "s" : ""}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Liste des sessions */}
      {list.length === 0 && (
        <p className="text-sm text-gray-400">Aucune session pour l'instant.</p>
      )}

      <div className="space-y-3">
        {list.map((s) => (
          <div key={s.id}
            className="border border-gray-100 rounded-2xl p-4 space-y-1.5"
            style={{ boxShadow: "0 1px 6px rgba(116,139,247,0.07)" }}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold" style={{ color: "#071453" }}>
                {s.profile?.email ?? "—"}
              </span>
              <span className="text-xs text-gray-300">
                {new Date(s.created_at).toLocaleDateString("fr-FR", {
                  day: "2-digit", month: "2-digit", year: "numeric",
                  hour: "2-digit", minute: "2-digit",
                })}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {s.enfant && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#e8edff", color: "#071453" }}>
                  {s.enfant.prenom} · {s.enfant.classe}
                </span>
              )}
              <span className="text-xs text-gray-500">
                {s.temps_disponible} min
              </span>
              <span className="text-xs text-gray-600">
                {s.matieres.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
