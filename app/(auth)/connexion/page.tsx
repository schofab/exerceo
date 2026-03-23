import AuthForm from "@/components/AuthForm";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = { title: "Connexion — exerceō" };

export default function ConnexionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-sm space-y-6">

        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-7">
          <h1 className="text-2xl font-extrabold text-navy-800 text-center mb-1">
            Bon retour !
          </h1>
          <p className="text-center text-sm font-bold text-navy-800 mb-6">
            Quelle joie de te revoir !
          </p>
          <AuthForm mode="connexion" />
        </div>

        <p className="text-center text-sm text-gray-500">
          Pas encore de compte ?{" "}
          <Link href="/inscription" className="font-bold hover:underline" style={{ color: "#748bf7" }}>
            S&apos;inscrire gratuitement
          </Link>
        </p>

      </div>
    </div>
  );
}
