import Image from "next/image";
import Link from "next/link";

/**
 * Logo Exerceo + Mixarto pour le header de l'app.
 * - Logo exerceō → lien vers le tableau de bord (/tableau-de-bord)
 * - Logo mixarto  → lien vers le site marketing (mixarto.com)
 * Les deux logos sont sur la même ligne avec "par" entre eux.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-0.5 ${className}`}>
      {/* Ligne 1 : logo exerceō cliquable → page d'accueil */}
      <Link href="/accueil" className="inline-flex">
        <Image
          src="/icons/Logo-exerceo.svg"
          alt="exerceō"
          width={180}
          height={48}
          priority
        />
      </Link>

      {/* Ligne 2 : "par" + logo mixarto cliquable → site marketing */}
      <div className="flex items-center gap-1">
        <span className="text-xs text-navy-800 font-medium leading-none">par</span>
        <Link
          href="https://mixarto.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Image
            src="/icons/Logo-mixarto.svg"
            alt="mixarto"
            width={60}
            height={16}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
