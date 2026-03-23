import Link from "next/link";
import Image from "next/image";

const LIENS = [
  { label: "À propos",                    href: "/a-propos" },
  { label: "Contact",                     href: "/contact" },
  { label: "Mentions légales",            href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "Conditions d'utilisation",    href: "/conditions-dutilisation" },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Logos sur une ligne */}
        <Link href="/" className="inline-flex items-center gap-2">
          <Image src="/icons/Logo-exerceo.svg" alt="exerceō" width={90} height={24} />
          <span className="text-xs font-medium text-gray-400">par</span>
          <Image src="/icons/Logo-mixarto.svg" alt="mixarto" width={72} height={20} />
        </Link>

        {/* Phrase rassurante */}
        <p className="text-xs text-gray-500 leading-relaxed">
          Exerceo est une application éducative sans publicité et respectueuse
          des données personnelles.
        </p>

        {/* Liens */}
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {LIENS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs text-gray-400 hover:underline transition-colors"
              style={{ color: "#9298c8" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} Mixarto. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
