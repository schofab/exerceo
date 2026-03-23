"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import Button from "./ui/Button";

interface DeleteEnfantButtonProps {
  enfantId: string;
  prenom: string;
  fullWidth?: boolean;
}

export default function DeleteEnfantButton({ enfantId, prenom, fullWidth = false }: DeleteEnfantButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");

  async function supprimer() {
    setLoading(true);
    setError("");
    const { error: err } = await supabase
      .from("enfants")
      .delete()
      .eq("id", enfantId);

    if (err) {
      setError("Erreur lors de la suppression.");
      setLoading(false);
      return;
    }

    router.push("/tableau-de-bord");
    router.refresh();
  }

  // ── Version pleine largeur (page de modification) ──
  if (fullWidth) {
    if (confirming) {
      return (
        <div className="space-y-3">
          <p className="text-sm text-red-700">
            La suppression du profil effacera définitivement toutes les sessions et réponses associées.
          </p>
          <div className="flex gap-2">
            <Button
              variant="danger"
              fullWidth
              loading={loading}
              onClick={supprimer}
            >
              Supprimer le profil
            </Button>
            <Button
              variant="ghost"
              disabled={loading}
              onClick={() => setConfirming(false)}
            >
              Annuler
            </Button>
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      );
    }
    return (
      <Button variant="danger" fullWidth onClick={() => setConfirming(true)}>
        Supprimer le profil
      </Button>
    );
  }

  // ── Version compacte (tableau de bord) ──
  if (confirming) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
          Supprimer {prenom} ?
        </span>
        <Button size="sm" variant="danger" loading={loading} onClick={supprimer}>
          Confirmer
        </Button>
        <Button size="sm" variant="ghost" disabled={loading} onClick={() => setConfirming(false)}>
          Annuler
        </Button>
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setConfirming(true)}
      className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
    >
      <Image src="/icons/picto-corbeille.svg" alt="Supprimer" width={20} height={20} />
    </button>
  );
}
