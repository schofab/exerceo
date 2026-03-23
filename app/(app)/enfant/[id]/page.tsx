import { createClient } from "@/lib/supabase/server";
import { notFound, redirect } from "next/navigation";
import EnfantForm from "@/components/EnfantForm";
import DeleteEnfantButton from "@/components/DeleteEnfantButton";
import type { Enfant } from "@/lib/types";

export const metadata = { title: "Modifier le profil — Minis Exos" };

export default async function EnfantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: enfant } = await supabase
    .from("enfants")
    .select("*")
    .eq("id", id)
    .eq("parent_id", user.id)
    .single<Enfant>();

  if (!enfant) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">
        Profil de {enfant.prenom}
      </h1>
      <EnfantForm enfant={enfant} userId={user.id} />

      <DeleteEnfantButton enfantId={enfant.id} prenom={enfant.prenom} fullWidth />
    </div>
  );
}
