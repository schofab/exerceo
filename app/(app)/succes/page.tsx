import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata = { title: "Bienvenue Premium — exerceō" };

export default function SuccesPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div className="flex justify-center mb-4">
          <Image
            src="/icons/picto-premium.svg"
            alt="Premium"
            width={80}
            height={80}
            priority
          />
        </div>
        <h1 className="text-2xl font-extrabold mb-2 leading-snug" style={{ color: "#071453" }}>
          Félicitations&nbsp;!<br />Vous êtes maintenant Premium&nbsp;!
        </h1>
        <p className="mb-8 leading-relaxed" style={{ color: "#6b7280" }}>
          Merci pour votre confiance. Accès illimité activé&nbsp;: autant d&apos;enfants
          et de sessions que vous voulez.
        </p>
        <Link href="/tableau-de-bord">
          <Button size="lg" fullWidth>
            Démarrer une session
          </Button>
        </Link>
      </div>
    </div>
  );
}
