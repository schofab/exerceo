"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function NouveauMotDePassePage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      if (error.message.includes("at least")) {
        setError("Le mot de passe doit contenir au moins 6 caractères.");
      } else {
        setError("Une erreur est survenue. Le lien est peut-être expiré.");
      }
    } else {
      router.push("/tableau-de-bord");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-sm space-y-6">

        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7">
          <h1 className="text-2xl font-extrabold text-navy-800 text-center mb-1">
            Nouveau mot de passe
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Choisissez un nouveau mot de passe pour votre compte.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nouveau mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 6 caractères"
              required
              autoComplete="new-password"
            />

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <Button type="submit" loading={loading} fullWidth>
              Enregistrer
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}
