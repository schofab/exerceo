import type { Metadata } from "next"
import MarketingHeader from "@/components/marketing/MarketingHeader"
import MarketingFooter from "@/components/marketing/MarketingFooter"

export const metadata: Metadata = {
  title: {
    template: "%s | Mixarto",
    default: "Mixarto — Créations visuelles & applications pour le quotidien",
  },
  description:
    "Mixarto réunit une boutique de portraits personnalisés d'animaux et des applications web utiles, conçus avec soin pour le quotidien.",
  keywords: [
    "portrait animal personnalisé",
    "affiches à télécharger",
    "exercices enfants",
    "app éducative enfant",
    "soutien scolaire ludique",
    "digital prints",
    "illustration personnalisée",
  ],
  openGraph: {
    siteName: "Mixarto",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MarketingHeader />
      <main id="contenu-principal">{children}</main>
      <MarketingFooter />
    </>
  )
}
