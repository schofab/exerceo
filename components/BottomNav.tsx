"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const isSession = pathname.startsWith("/session");

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-100"
      style={{
        boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="max-w-md mx-auto h-16 flex items-center justify-center">
        <Link
          href="/session/nouvelle"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-white font-bold text-sm transition-transform active:scale-95 shadow-md"
          style={{
            background: isSession
              ? "linear-gradient(135deg, #5a7af5, #5bc49a)"
              : "linear-gradient(135deg, #748bf7, #6bd6a6)",
            boxShadow: "0 4px 16px rgba(116,139,247,0.4)",
          }}
        >
          <span className="text-lg leading-none font-black">+</span>
          Nouvelle session
        </Link>
      </div>
    </nav>
  );
}
