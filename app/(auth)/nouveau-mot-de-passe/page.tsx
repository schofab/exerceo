"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Logo from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function NouveauMotDePasseForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Échange le code Supabase (PKCE) contre une session avant tout
  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      setError("Lien invalide ou expiré. Recommencez la procédure depuis la page de connexion.");
      return;
    }

    const supabase = createClient();
    supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
      if (error) {
        setError("Lien expiré ou déjà utilisé. Recommencez depuis la page de connexion.");
      } else {
        setReady(true);
      }
    });
  }, [searchParams]);

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
        setError("Une erreur est survenue. Réessayez.");
      }
    } else {
      router.push("/tableau-de-bord");
      router.refresh();
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7">
      <h1 className="text-2xl font-extrabold text-navy-800 text-center mb-1">
        Nouveau mot de passe
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Choisissez un nouveau mot de passe pour votre compte.
      </p>

      {error && !ready ? (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-center">
          {error}
        </p>
      ) : ready ? (
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
      ) : (
        <p className="text-center text-sm text-gray-400">Vérification du lien…</p>
      )}
    </div>
  );
}

export default function NouveauMotDePassePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Suspense fallback={null}>
          <NouveauMotDePasseForm />
        </Suspense>
      </div>
    </div>
  );
}
