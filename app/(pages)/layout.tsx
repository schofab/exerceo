import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import AppSubNav from "@/components/AppSubNav";
import NavActions from "@/components/NavActions";

export const dynamic = "force-dynamic";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Nav principale ── */}
      <nav className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-20 shadow-sm">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Logo className="scale-75 origin-left" />
          <div className="flex items-center gap-3">
            {user ? (
              <NavActions />
            ) : (
              <>
                <Link
                  href="/connexion"
                  className="text-sm font-semibold px-3 py-1.5 rounded-xl border transition-colors hover:bg-gray-50"
                  style={{ color: "#071453", borderColor: "#e0e7ff" }}
                >
                  Se connecter
                </Link>
                <Link
                  href="/inscription"
                  className="text-sm font-semibold px-3 py-1.5 rounded-xl text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#748bf7" }}
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* ── Barre secondaire (connecté uniquement) ── */}
      {user && <AppSubNav />}

      {/* ── Contenu ── */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 sm:px-6 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
