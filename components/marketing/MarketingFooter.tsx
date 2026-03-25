import Link from "next/link"
import Image from "next/image"
import ScrollToTop from "@/components/marketing/ScrollToTop"

const ETSY_PORTRAITS  = "https://www.etsy.com/shop/MixartoHappyStudio?ref=dashboard-header&section_id=54554245"
const ETSY_PRINTS     = "https://www.etsy.com/shop/MixartoHappyStudio?ref=dashboard-header&section_id=54429573"

export default function MarketingFooter() {
  return (
    <>
    <ScrollToTop />
    <footer style={{ backgroundColor: "#071453" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">

        {/* Grille principale */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>

          {/* Logo blanc + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/icons/Logo-mixarto-blanc.svg" alt="mixarto happy studio" width={110} height={43} className="mb-3" />
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Créations visuelles décalées &amp; apps imaginées pour le quotidien.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/",          label: "Accueil"   },
                { href: "/#apps",     label: "Exerceo"   },
                { href: "/#boutique", label: "Boutique"  },
                { href: "/#a-propos", label: "À propos"  },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique Etsy */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Boutique Etsy
            </h3>
            <ul className="space-y-3">
              {[
                { href: ETSY_PORTRAITS, label: "Portraits personnalisés" },
                { href: ETSY_PRINTS,    label: "Digital prints"          },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Informations
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/contact",                        label: "Contact"          },
                { href: "/mentions-legales",               label: "Mentions légales" },
                { href: "/politique-de-confidentialite",   label: "Confidentialité"  },
                { href: "/conditions-dutilisation",        label: "CGU"              },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Mixarto. Tous droits réservés.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Fait avec soin en France
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
