"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Button from "./ui/Button";
import Input from "./ui/Input";

interface AuthFormProps {
  mode: "connexion" | "inscription";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Initialisation lazy (côté client uniquement, jamais au SSR)
    const supabase = createClient();

    try {
      if (mode === "inscription") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/tableau-de-bord`,
          },
        });
        if (error) throw error;
        // Si confirmation email désactivée, Supabase renvoie une session directement
        if (data.session) {
          router.push("/tableau-de-bord");
          router.refresh();
        } else {
          setSuccess(
            "Compte créé ! Vérifiez votre email pour confirmer votre inscription."
          );
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push("/tableau-de-bord");
        router.refresh();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Une erreur est survenue";
      // Traduire les erreurs Supabase courantes
      if (msg.includes("Invalid login credentials")) {
        setError("Email ou mot de passe incorrect.");
      } else if (msg.includes("Email not confirmed")) {
        setError("Veuillez confirmer votre email avant de vous connecter. Vérifiez votre boîte mail.");
      } else if (msg.includes("User already registered")) {
        setError("Un compte existe déjà avec cet email.");
      } else if (msg.includes("Password should be at least")) {
        setError("Le mot de passe doit contenir au moins 6 caractères.");
      } else if (msg.includes("Failed to fetch") || msg.includes("fetch")) {
        setError("Connexion impossible. Vérifiez que Supabase est configuré dans .env.local.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto">
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
        <Input
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimum 6 caractères"
          required
          autoComplete={mode === "inscription" ? "new-password" : "current-password"}
        />

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            {error}
          </p>
        )}
        {success && (
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
            {success}
          </p>
        )}

        <Button type="submit" loading={loading} fullWidth>
          {mode === "inscription" ? "Créer mon compte" : "Se connecter"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        {mode === "inscription" ? (
          <>
            Déjà un compte ?{" "}
            <Link href="/connexion" className="text-blue-600 font-medium hover:underline">
              Se connecter
            </Link>
          </>
        ) : (
          <>
            Pas encore de compte ?{" "}
            <Link href="/inscription" className="text-blue-600 font-medium hover:underline">
              S&apos;inscrire gratuitement
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
