import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Valeurs de substitution pour éviter un crash si .env.local n'est pas encore configuré.
  // Les appels Supabase échoueront proprement à l'exécution.
  // || couvre aussi les chaînes vides (NEXT_PUBLIC_SUPABASE_URL=) dans .env.local
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

  return createBrowserClient(url, key);
}
