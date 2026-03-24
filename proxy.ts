import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Valider que l'URL est bien un HTTP(S) valide avant d'appeler createServerClient
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
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: object }>) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options as Parameters<typeof supabaseResponse.cookies.set>[2])
          );
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const pathname = request.nextUrl.pathname;
    const host = request.headers.get("host") ?? "";

    // ── Routage sous-domaine exerceo.mixarto.com ─────────────────────────────
    // Sur "/", redirige vers l'app selon l'état de connexion.
    // Les autres routes (ex : /connexion, /tableau-de-bord) passent normalement.
    const isExerceoSubdomain =
      host.startsWith("exerceo.") ||
      host === "exerceo.localhost" ||
      host === "exerceo.localhost:3000";

    if (isExerceoSubdomain && pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = user ? "/tableau-de-bord" : "/connexion";
      return NextResponse.redirect(url);
    }

    // Routes protégées
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
    // Ne jamais laisser une erreur proxy casser toutes les routes
    console.error("[proxy] Erreur inattendue:", err);
    return NextResponse.next({ request });
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
