import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export const dynamic = "force-dynamic";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/connexion");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_premium, sessions_used")
    .eq("id", user.id)
    .single();

  async function signOut() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/connexion");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ── Nav principale ── */}
      <nav className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-20 shadow-sm">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Logo href="/" className="scale-75 origin-left" />
          <div className="flex items-center gap-3">
            {profile?.is_premium ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border" style={{ backgroundColor: "#6bd6a6", color: "#071453", borderColor: "#6bd6a6" }}>
                <Image src="/icons/picto-premium-blanc.svg" alt="" width={14} height={14} />
                Premium
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border" style={{ backgroundColor: "#f5f9ff", color: "#748bf7", borderColor: "#e0e7ff" }}>
                <Image src="/icons/picto-cible.svg" alt="" width={14} height={14} />
                {profile?.sessions_used ?? 0}/3
              </span>
            )}
            <form action={signOut}>
              <button
                type="submit"
                className="text-sm text-gray-400 hover:text-navy-700 font-medium transition-colors px-2 py-1 rounded-lg hover:bg-gray-100"
              >
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* ── Barre Tableau de bord (sous le header, toujours visible) ── */}
      <div className="sticky top-[57px] z-10 bg-white border-b border-blue-50" style={{ boxShadow: "0 2px 8px rgba(116,139,247,0.06)" }}>
        <div className="max-w-md mx-auto px-4 h-10 flex items-center">
          <Link
            href="/tableau-de-bord"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "#748bf7" }}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Tableau de bord
          </Link>
        </div>
      </div>

      {/* ── Contenu ── */}
      <main className="max-w-md mx-auto px-4 py-6 pb-28">{children}</main>

      {/* ── Footer ── */}
      <div className="pb-20">
        <Footer />
      </div>

      {/* ── Barre de navigation basse ── */}
      <BottomNav />
    </div>
  );
}
