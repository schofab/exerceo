import MarketingHeader from "@/components/marketing/MarketingHeader";
import MarketingFooter from "@/components/marketing/MarketingFooter";

export default function MixartoPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingHeader />
      <main id="contenu-principal">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {children}
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
