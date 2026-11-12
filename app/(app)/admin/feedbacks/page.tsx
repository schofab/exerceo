import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const metadata = { title: "Feedbacks bêta — exerceō" };

const ADMIN_EMAIL = "fab.loveandvibes@gmail.com";

type Feedback = {
  id: string;
  created_at: string;
  prenom: string;
  appareil: string | null;
  note: number;
  points_positifs: string | null;
  points_ameliorer: string | null;
  bug: string | null;
  usage_regulier: boolean | null;
  intention_payer: boolean | null;
  commentaire_libre: string | null;
};

export default async function AdminFeedbacksPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== ADMIN_EMAIL) redirect("/tableau-de-bord");

  const { data: feedbacks } = await supabase
    .from("feedbacks")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<Feedback[]>();

  const list = feedbacks ?? [];
  const moyenne = list.length
    ? (list.reduce((s, f) => s + f.note, 0) / list.length).toFixed(1)
    : "—";

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
          Feedbacks bêta
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {list.length} retour{list.length > 1 ? "s" : ""} — Note moyenne : {moyenne}/5
        </p>
      </div>

      {list.length === 0 && (
        <p className="text-sm text-gray-400">Aucun feedback reçu pour l'instant.</p>
      )}

      <div className="space-y-4">
        {list.map((f) => (
          <div
            key={f.id}
            className="border border-gray-100 rounded-2xl p-4 space-y-2"
            style={{ boxShadow: "0 1px 6px rgba(116,139,247,0.07)" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm" style={{ color: "#071453" }}>
                {f.prenom}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {f.appareil ?? "—"}
                </span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#e8edff", color: "#071453" }}
                >
                  {f.note}/5
                </span>
                <span className="text-xs text-gray-300">
                  {new Date(f.created_at).toLocaleDateString("fr-FR")}
                </span>
              </div>
            </div>

            {f.points_positifs && (
              <div>
                <span className="text-xs font-semibold text-green-600">✓ Points positifs</span>
                <p className="text-sm text-gray-700 mt-0.5">{f.points_positifs}</p>
              </div>
            )}
            {f.points_ameliorer && (
              <div>
                <span className="text-xs font-semibold text-amber-600">↑ À améliorer</span>
                <p className="text-sm text-gray-700 mt-0.5">{f.points_ameliorer}</p>
              </div>
            )}
            {f.bug && (
              <div>
                <span className="text-xs font-semibold text-red-500">🐛 Bug</span>
                <p className="text-sm text-gray-700 mt-0.5">{f.bug}</p>
              </div>
            )}

            {f.commentaire_libre && (
              <div>
                <span className="text-xs font-semibold text-gray-400">💬 Commentaire libre</span>
                <p className="text-sm text-gray-700 mt-0.5">{f.commentaire_libre}</p>
              </div>
            )}

            <div className="flex gap-4 pt-1">
              {f.usage_regulier !== null && (
                <span className="text-xs text-gray-500">
                  Usage régulier : <strong>{f.usage_regulier ? "Oui" : "Non"}</strong>
                </span>
              )}
              {f.intention_payer !== null && (
                <span className="text-xs text-gray-500">
                  Prêt à payer 29 €/an : <strong>{f.intention_payer ? "Oui" : "Non"}</strong>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
