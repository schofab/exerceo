"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const NAV = [
  { href: "/#apps",     label: "Apps"       },
  { href: "/#boutique", label: "Boutique"   },
  { href: "/#a-propos", label: "À propos"   },
  { href: "/contact",   label: "Contact"    },
]

export default function MarketingHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo mixarto happy studio */}
          <Link href="/" className="flex flex-col leading-none" aria-label="Mixarto — accueil">
            <Image
              src="/icons/Logo-mixarto.svg"
              alt="mixarto"
              width={96}
              height={26}
              priority
            />
            <span className="text-[10px] font-semibold tracking-widest uppercase mt-0.5" style={{ color: "#6BD6A6" }}>
              happy studio
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: label === "Apps" ? "#6BD6A6" : "#071453" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="https://exerceo.mixarto.com/"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#071453" }}
          >
            Tester Exerceo
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 transition-colors"
            style={{ color: "#071453" }}
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
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-stone-50"
                style={{ color: label === "Apps" ? "#6BD6A6" : "#071453" }}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href="https://exerceo.mixarto.com/"
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold px-4 py-3 rounded-xl text-white text-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#071453" }}
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
