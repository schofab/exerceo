import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import EnfantForm from "@/components/EnfantForm";
import type { Profile } from "@/lib/types";
import { LIMITE_ENFANTS_GRATUIT } from "@/lib/types";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = { title: "Nouvel enfant — Minis Exos" };

export default async function NouvelEnfantPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const [{ data: profile }, { count }] = await Promise.all([
    supabase.from("profiles").select("is_premium").eq("id", user.id).single<Profile>(),
    supabase
      .from("enfants")
      .select("*", { count: "exact", head: true })
      .eq("parent_id", user.id),
  ]);

  const nbEnfants = count ?? 0;
  const peutAjouter = profile?.is_premium || nbEnfants < LIMITE_ENFANTS_GRATUIT;

  if (!peutAjouter) {
    return (
      <div className="text-center py-16 px-6">
        <p className="text-5xl mb-4">🔒</p>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Profils supplémentaires réservés aux membres Premium
        </h1>
        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
          Le plan gratuit inclut 1 enfant. Passez Premium pour en ajouter autant
          que vous voulez.
        </p>
        <Link href="/api/stripe/checkout">
          <Button size="lg">Passer Premium — 15 €</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Profil de l&apos;enfant
      </h1>
      <EnfantForm userId={user.id} />
    </div>
  );
}
