import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware Next.js — Routage par sous-domaine
 *
 * Logique :
 *  - mixarto.com         → comportement inchangé (site marketing)
 *  - exerceo.mixarto.com → redirige "/" vers l'app Exerceo :
 *      • utilisateur connecté  → /tableau-de-bord
 *      • utilisateur non connecté → /connexion
 *  - Toutes les autres routes (même sur exerceo.*) passent normalement
 *    pour ne pas casser les liens internes de l'app.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  // ── 1. Détection du sous-domaine exerceo ─────────────────────────────────
  //   Production : exerceo.mixarto.com
  //   Local      : exerceo.localhost:3000 (pour tester via /etc/hosts)
  const isExerceoSubdomain =
    host.startsWith("exerceo.") ||
    host === "exerceo.localhost" ||
    host === "exerceo.localhost:3000";

  // Si ce n'est pas le sous-domaine exerceo → on laisse passer sans rien faire
  if (!isExerceoSubdomain) {
    return NextResponse.next();
  }

  // ── 2. On n'intercepte que "/" pour éviter toute boucle de redirection ───
  //   Les routes /connexion, /tableau-de-bord, /session/… passent normalement.
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // ── 3. Vérifier si l'utilisateur est déjà connecté ───────────────────────
  //   On utilise @supabase/ssr en mode middleware (lecture + propagation cookies).
  //   Important : on crée d'abord la réponse pour pouvoir y attacher les cookies.
  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      cookies: {
        // Lecture des cookies de la requête entrante
        getAll() {
          return request.cookies.getAll();
        },
        // Écriture des cookies dans la réponse sortante (refresh de session)
        setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options as Parameters<typeof response.cookies.set>[2]);
          });
        },
      },
    }
  );

  // getUser() vérifie le token JWT côté serveur (pas de cache — source de vérité)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // ── 4. Redirection vers la bonne page de l'app ───────────────────────────
  const destination = user ? "/tableau-de-bord" : "/connexion";
  return NextResponse.redirect(new URL(destination, request.url));
}

/**
 * Matcher : on exclut les assets statiques et les routes API
 * pour ne pas exécuter le middleware inutilement sur chaque image/font/etc.
 *
 * Le middleware ne s'exécute que sur les pages, pas sur :
 *  - _next/static  → fichiers JS/CSS générés
 *  - _next/image   → optimisation d'images
 *  - favicon.ico   → icône
 *  - icons/        → dossier /public/icons/
 *  - api/          → routes API Next.js
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|icons/|api/).*)",
  ],
};
