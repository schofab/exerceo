import Link from "next/link"

const ETSY_URL = "https://www.etsy.com/shop/MixartoHappyStudio?ref=dashboard-header"

export default function MarketingFooter() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">

        {/* Grille principale */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-neutral-800">

          {/* Marque */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold text-white mb-3 tracking-tight">mixarto</div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Créations visuelles et applications utiles, conçus avec soin pour le quotidien.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/exerceo", label: "Exerceo" },
                { href: "/#boutique", label: "Boutique" },
                { href: "/#a-propos", label: "À propos" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-5">
              Boutique Etsy
            </h3>
            <ul className="space-y-3">
              {[
                "Portraits personnalisés",
                "Digital prints",
                "Cadeaux créatifs",
              ].map((label) => (
                <li key={label}>
                  <a
                    href={ETSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-5">
              Informations
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Contact" },
                { href: "/mentions-legales", label: "Mentions légales" },
                {
                  href: "/politique-de-confidentialite",
                  label: "Confidentialité",
                },
                {
                  href: "/conditions-dutilisation",
                  label: "CGU",
                },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Mixarto. Tous droits réservés.
          </p>
          <p className="text-xs text-neutral-600">
            Fait avec soin en France
          </p>
        </div>
      </div>
    </footer>
  )
}
