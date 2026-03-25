import MarketingHeader from "@/components/marketing/MarketingHeader";
import MarketingFooter from "@/components/marketing/MarketingFooter";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MarketingHeader />

      {/* ── Contenu ── */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12">
        {children}
      </main>

      <MarketingFooter />
    </div>
  );
}
