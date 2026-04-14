import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact — Mixarto",
  description: "Contactez Mixarto pour toute question sur la boutique, l'application exerceō ou vos commandes.",
}

const NAVY  = "#071453"
const GREEN = "#6BD6A6"

export default function ContactPage() {
  return (
    <article className="space-y-8 animate-fade-slide-up">

      <div>
        <h1 className="text-2xl font-extrabold mb-2" style={{ color: NAVY }}>
          Contact
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
          Pour toute question concernant la boutique, l&apos;application exerceō
          ou vos commandes, contactez-moi à l&apos;adresse suivante :
        </p>
      </div>

      {/* Email */}
      <div className="rounded-2xl p-5" style={{ backgroundColor: "#f5f9ff" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#9298c8" }}>
          Adresse e-mail
        </p>
        <a
          href="mailto:hellomixarto@gmail.com"
          className="text-base font-bold transition-opacity hover:opacity-70"
          style={{ color: NAVY }}
        >
          hellomixarto@gmail.com
        </a>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
        Je ferai de mon mieux pour répondre dans les meilleurs délais.
      </p>

      {/* Liens légaux */}
      <div className="border-t pt-6" style={{ borderColor: "#e5e7eb" }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#9298c8" }}>
          Liens utiles
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/mentions-legales",             label: "Mentions légales"            },
            { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
            { href: "/conditions-dutilisation",      label: "CGU"                          },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium px-4 py-2 rounded-full border transition-opacity hover:opacity-70"
              style={{ borderColor: GREEN, color: NAVY }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
