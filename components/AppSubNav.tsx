"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    href: "/accueil",
    label: "Accueil",
    matches: (p: string) => p === "/accueil",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    href: "/tableau-de-bord",
    label: "Tableau de bord",
    matches: (p: string) => p.startsWith("/tableau-de-bord"),
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    href: "/aide",
    label: "FAQ",
    matches: (p: string) => p === "/aide" || p === "/faq",
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function AppSubNav() {
  const pathname = usePathname();

  return (
    <div
      className="sticky top-[57px] z-10 bg-white border-b border-blue-50"
      style={{ boxShadow: "0 2px 8px rgba(116,139,247,0.06)" }}
    >
      <div className="max-w-md mx-auto px-4 h-10 flex items-center gap-5">
        {LINKS.map(({ href, label, icon, matches }) => {
          const active = matches(pathname);
          return (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
              style={{
                color: active ? "#071453" : "#748bf7",
                fontWeight: active ? 800 : 600,
                borderBottom: active ? "2px solid #071453" : "2px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {icon}
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
