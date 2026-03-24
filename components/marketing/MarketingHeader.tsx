"use client"

import Link from "next/link"
import { useState } from "react"

export default function MarketingHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link href="/" className="flex items-baseline gap-1.5 group" aria-label="Mixarto — accueil">
            <span className="text-lg font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
              mixarto
            </span>
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest hidden sm:inline">
              studio
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
            <Link
              href="/exerceo"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Exerceo
            </Link>
            <Link
              href="/#boutique"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Boutique
            </Link>
            <Link
              href="/#a-propos"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://exerceo.mixarto.com/"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
            >
              Tester Exerceo
            </a>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-neutral-600 hover:text-neutral-900 transition-colors"
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
          <nav
            className="md:hidden border-t border-stone-100 py-4 space-y-1"
            aria-label="Navigation mobile"
          >
            {[
              { href: "/exerceo", label: "Exerceo", bold: true },
              { href: "/#boutique", label: "Boutique", bold: false },
              { href: "/#a-propos", label: "À propos", bold: false },
              { href: "/contact", label: "Contact", bold: false },
            ].map(({ href, label, bold }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-2 py-2.5 rounded-lg text-sm transition-colors ${
                  bold
                    ? "font-semibold text-neutral-800 hover:bg-stone-50"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-stone-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href="https://exerceo.mixarto.com/"
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold px-4 py-3 rounded-xl bg-neutral-900 text-white text-center hover:bg-neutral-700 transition-colors"
              >
                Tester Exerceo
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
