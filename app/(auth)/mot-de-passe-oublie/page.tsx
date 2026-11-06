"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/nouveau-mot-de-passe`,
    });

    setLoading(false);

    if (error) {
      setError("Une erreur est survenue. Vérifiez l'adresse email et réessayez.");
    } else {
      setSent(true);
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
            Mot de passe oublié
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Entrez votre email pour recevoir un lien de réinitialisation.
          </p>

          {sent ? (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-4 text-center space-y-3">
              <p className="font-medium">Email envoyé !</p>
              <p>Vérifiez votre boîte mail et cliquez sur le lien pour choisir un nouveau mot de passe.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@exemple.fr"
                required
                autoComplete="email"
              />

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <Button type="submit" loading={loading} fullWidth>
                Envoyer le lien
              </Button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-500">
          <Link href="/connexion" className="text-blue-600 font-medium hover:underline">
            Retour à la connexion
          </Link>
        </p>

      </div>
    </div>
  );
}
