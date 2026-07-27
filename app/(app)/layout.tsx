import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import TrialBanner from "@/components/TrialBanner";
import AppSubNav from "@/components/AppSubNav";

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
          <Logo className="scale-75 origin-left" />
          <div className="flex items-center gap-3">
                        {profile?.is_premium && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border"
                style={{ backgroundColor: "#6bd6a6", color: "#071453", borderColor: "#6bd6a6" }}
              >
                <Image src="/icons/picto-premium-blanc.svg" alt="" width={14} height={14} />
                Premium
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

      {/* ── Barre de navigation secondaire ── */}
      <AppSubNav />

      {/* ── Bandeau trial (visible sur toutes les pages de l'app) ── */}
      <div className="max-w-md mx-auto px-4 pt-4">
        <TrialBanner />
      </div>

      {/* ── Contenu ── */}
      <main className="max-w-md mx-auto px-4 py-6">{children}</main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
