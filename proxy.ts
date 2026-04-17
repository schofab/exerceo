import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Routes qui existent à la fois côté app Exerceo et côté pages Mixarto.
// Sur mixarto.com, on les réécrit vers /mixarto-pages/*
const MIXARTO_PATHS = [
  "/faq",
  "/comment-ca-marche",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-dutilisation",
];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const host = request.headers.get("host") ?? "";

  const isExerceoSubdomain =
    host.startsWith("exerceo.") ||
    host === "exerceo.localhost" ||
    host === "exerceo.localhost:3000";

  // ── Mixarto domain: rewrite shared paths → /mixarto-pages/* ────────────────
  if (!isExerceoSubdomain) {
    const isMixartoPath = MIXARTO_PATHS.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    );

    if (isMixartoPath) {
      const url = request.nextUrl.clone();
      url.pathname = `/mixarto-pages${pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // ── Exerceo subdomain: /faq → /aide ────────────────────────────────────────
  if (isExerceoSubdomain && pathname === "/faq") {
    const url = request.nextUrl.clone();
    url.pathname = "/aide";
    return NextResponse.redirect(url);
  }

  // ── Exerceo subdomain: / → /accueil ────────────────────────────────────────
  if (isExerceoSubdomain && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/accueil";
    return NextResponse.redirect(url);
  }

  // ── Auth protection (Supabase) ──────────────────────────────────────────────
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const urlValide =
    supabaseUrl?.startsWith("https://") || supabaseUrl?.startsWith("http://");

  if (!supabaseUrl || !supabaseAnonKey || !urlValide) {
    return NextResponse.next({ request });
  }

  try {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(
          cookiesToSet: Array<{
            name: string;
            value: string;
            options?: object;
          }>
        ) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );

          supabaseResponse = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(
              name,
              value,
              options as Parameters<typeof supabaseResponse.cookies.set>[2]
            )
          );
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Routes protégées — accessibles uniquement si connecté
    const protectedPaths = [
      "/tableau-de-bord",
      "/enfant",
      "/session",
      "/succes",
      "/collection",
    ];

    const isProtected = protectedPaths.some((p) => pathname.startsWith(p));

    if (isProtected && !user) {
      const url = request.nextUrl.clone();
      url.pathname = "/connexion";
      return NextResponse.redirect(url);
    }

    // Si déjà connecté, rediriger depuis les pages auth
    if (user && (pathname === "/connexion" || pathname === "/inscription")) {
      const url = request.nextUrl.clone();
      url.pathname = "/tableau-de-bord";
      return NextResponse.redirect(url);
    }

    return supabaseResponse;
  } catch (err) {
    console.error("[proxy] Erreur inattendue:", err);
    return NextResponse.next({ request });
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};