"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

const NAV = [
  { href: "/",          label: "Accueil",   hash: null       },
  { href: "/#boutique", label: "Boutique",  hash: "boutique" },
  { href: "/#apps",     label: "Apps",      hash: "apps"     },
  { href: "/#a-propos", label: "À propos",  hash: "a-propos" },
  { href: "/contact",   label: "Contact",   hash: null       },
]

const NAVY  = "#071453"
const GREEN = "#6BD6A6"

export default function MarketingHeader() {
  const [open, setOpen]   = useState(false)
  const pathname          = usePathname()

  // Détermine si un lien est "actif" : page contact ou section hash
  function isActive(href: string) {
    if (href === "/contact") return pathname === "/contact"
    return false // les ancres (#) sont gérées côté client via IntersectionObserver — non implémenté
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo mixarto en couleur avec "happy studio" */}
          <Link href="/" aria-label="Mixarto — accueil" className="inline-flex">
            <Image
              src="/icons/Logo-mixarto.svg"
              alt="mixarto happy studio"
              width={110}
              height={43}
              priority
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {NAV.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: active ? GREEN : NAVY }}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* CTA desktop */}
          <a
            href="https://exerceo.mixarto.com/"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Tester exerceō
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 transition-colors"
            style={{ color: NAVY }}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <nav className="md:hidden border-t border-stone-100 py-4 space-y-1" aria-label="Navigation mobile">
            {NAV.map(({ href, label }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-stone-50"
                  style={{ color: active ? GREEN : NAVY }}
                >
                  {label}
                </Link>
              )
            })}
            <div className="pt-3">
              <a
                href="https://exerceo.mixarto.com/"
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold px-4 py-3 rounded-xl text-white text-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: NAVY }}
              >
                Tester exerceō
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
