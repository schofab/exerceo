import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CreatureCard from "@/components/CreatureCard";
import type { Creature, CreatureAvecStatut, Enfant } from "@/lib/types";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ enfantId: string }>;
}

export default async function CollectionPage({ params }: PageProps) {
  const { enfantId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  // Vérifier que l'enfant appartient au parent connecté
  const { data: enfant } = await supabase
    .from("enfants")
    .select("*")
    .eq("id", enfantId)
    .eq("parent_id", user.id)
    .single<Enfant>();

  if (!enfant) redirect("/tableau-de-bord");

  // Chargement parallèle
  const [
    { data: allCreatures },
    { data: unlockedRows },
    { data: totalEtoiles },
  ] = await Promise.all([
    supabase
      .from("creatures")
      .select("*")
      .order("stars_required")
      .returns<Creature[]>(),
    supabase
      .from("enfant_creatures")
      .select("creature_id, unlocked_at")
      .eq("enfant_id", enfantId)
      .returns<{ creature_id: string; unlocked_at: string }[]>(),
    supabase
      .rpc("get_etoiles_enfant", { p_enfant_id: enfantId })
      .returns<number>(),
  ]);

  const etoiles = Number(totalEtoiles ?? 0);
  const unlockedMap = new Map(
    (unlockedRows ?? []).map((u) => [u.creature_id, u.unlocked_at])
  );
  const nbDebloquees = unlockedMap.size;

  const creatures: CreatureAvecStatut[] = (allCreatures ?? []).map((c) => ({
    ...c,
    unlocked: unlockedMap.has(c.id),
    unlocked_at: unlockedMap.get(c.id) ?? null,
  }));

  // Prochaine créature à débloquer
  const prochaine = creatures.find((c) => !c.unlocked);

  return (
    <div className="space-y-5 animate-fade-slide-up">
      {/* ── Header ── */}
      <div>
        <Link href="/tableau-de-bord">
          <Button variant="ghost" size="sm" className="mb-3 -ml-2">
            ← Retour
          </Button>
        </Link>
        <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
          Les Doceo de {enfant.prenom}
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <Image src="/icons/picto-etoile-pleine.svg" alt="" width={16} height={16} />
          <span className="text-sm font-semibold" style={{ color: "#748bf7" }}>
            {etoiles} étoile{etoiles !== 1 ? "s" : ""} au total
          </span>
          <span className="text-gray-300">·</span>
          <span className="text-sm text-gray-500">
            {nbDebloquees}/{creatures.length} Doceo débloqué{nbDebloquees !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Progression vers la prochaine créature ── */}
      {prochaine ? (
        <Card className="py-4">
          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            Prochain Doceo
          </p>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl select-none" style={{ filter: "brightness(0) saturate(0) opacity(0.2)" }}>
              {prochaine.emoji}
            </span>
            <div>
              <p className="font-bold text-sm" style={{ color: "#071453" }}>???</p>
              <p className="text-xs text-gray-400">
                {etoiles} / {prochaine.stars_required} étoiles requises
              </p>
            </div>
            <span className="ml-auto text-lg">🔒</span>
          </div>
          {/* Barre de progression */}
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-700"
              style={{
                width: `${Math.min(100, Math.round((etoiles / prochaine.stars_required) * 100))}%`,
                background: "linear-gradient(to right, #748bf7, #6bd6a6)",
              }}
            />
          </div>
          <p className="text-right text-xs text-gray-400 mt-1">
            {Math.round((etoiles / prochaine.stars_required) * 100)}%
          </p>
        </Card>
      ) : (
        <Card className="py-4 text-center">
          <p className="text-2xl mb-1">🏆</p>
          <p className="font-bold" style={{ color: "#071453" }}>
            Collection Doceo complète !
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Tous les Doceo sont débloqués. Bravo !
          </p>
        </Card>
      )}

      {/* ── Grille des créatures ── */}
      <div>
        <h2 className="text-base font-bold mb-3" style={{ color: "#071453" }}>
          Tous les Doceo
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {creatures.map((creature) => (
            <CreatureCard key={creature.id} creature={creature} />
          ))}
        </div>
      </div>

      {/* ── Lien retour ── */}
      <div className="pt-2">
        <Link href="/session/nouvelle">
          <Button size="lg" fullWidth>
            Faire des exercices
          </Button>
        </Link>
      </div>
    </div>
  );
}
