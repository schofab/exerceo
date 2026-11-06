import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import AppSubNav from "@/components/AppSubNav";
import NavActions from "@/components/NavActions";

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

  return (
    <div className="min-h-screen bg-white">
      {/* ── Nav principale ── */}
      <nav className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-20 shadow-sm">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Logo className="scale-75 origin-left" />
          <NavActions />
        </div>
      </nav>

      {/* ── Barre de navigation secondaire ── */}
      <AppSubNav />

      {/* ── Contenu ── */}
      <main className="max-w-md mx-auto px-4 py-6">{children}</main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
