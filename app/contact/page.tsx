import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import MarketingHeader from "@/components/marketing/MarketingHeader"
import MarketingFooter from "@/components/marketing/MarketingFooter"

export const metadata: Metadata = {
  title: "Contact — Mixarto",
  description: "Contactez Mixarto pour toute question sur la boutique, l'application Exerceo ou vos commandes.",
}

const NAVY  = "#071453"
const GREEN = "#6BD6A6"

export default function ContactPage() {
  return (
    <>
      <MarketingHeader />
      <main className="bg-white">
        <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-24">

          {/* Logo couleur */}
          <div className="mb-10">
            <Image
              src="/icons/Logo-mixarto.svg"
              alt="mixarto happy studio"
              width={130}
              height={50}
              priority
            />
          </div>

          <h1 className="text-3xl font-extrabold mb-3" style={{ color: NAVY }}>
            Contact
          </h1>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: "#6b7280" }}>
            Pour toute question concernant la boutique, l&apos;application Exerceo ou vos commandes,
            vous pouvez nous contacter à l&apos;adresse suivante :
          </p>

          {/* Email */}
          <div className="rounded-2xl p-6 mb-8" style={{ backgroundColor: "#f5f9ff" }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#9298c8" }}>
              Adresse e-mail
            </p>
            <a
              href="mailto:hellomixarto@gmail.com"
              className="text-lg font-bold transition-opacity hover:opacity-70"
              style={{ color: NAVY }}
            >
              hellomixarto@gmail.com
            </a>
          </div>

          <p className="text-sm leading-relaxed mb-12" style={{ color: "#6b7280" }}>
            Nous faisons de notre mieux pour répondre dans les meilleurs délais.
          </p>

          {/* Liens rapides */}
          <div className="border-t pt-8" style={{ borderColor: "#e5e7eb" }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#9298c8" }}>
              Liens utiles
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/mentions-legales"
                className="text-sm font-medium px-4 py-2 rounded-full border transition-opacity hover:opacity-70"
                style={{ borderColor: GREEN, color: NAVY }}
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="text-sm font-medium px-4 py-2 rounded-full border transition-opacity hover:opacity-70"
                style={{ borderColor: GREEN, color: NAVY }}
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/conditions-dutilisation"
                className="text-sm font-medium px-4 py-2 rounded-full border transition-opacity hover:opacity-70"
                style={{ borderColor: GREEN, color: NAVY }}
              >
                CGU
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  )
}
