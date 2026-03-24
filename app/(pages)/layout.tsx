import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── Header simple ── */}
      <header className="border-b border-gray-100 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Accueil
          </Link>
        </div>
      </header>

      {/* ── Contenu ── */}
      <main className="flex-1 max-w-md mx-auto w-full px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
