import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mixarto",
  description:
    "Contactez Mixarto pour toute question relative à la marque ou à ses projets.",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

export default function MixartoContactPage() {
  return (
    <article className="space-y-8">

      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          Contact
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Une question sur Mixarto ou l'un de ses projets ?
        </p>
      </div>

      {/* ── Email ── */}
      <div className="rounded-2xl p-5" style={{ backgroundColor: "#f5f9ff" }}>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-2"
          style={{ color: "#9298c8" }}
        >
          Adresse e-mail
        </p>
        <a
          href="mailto:hellomixarto@gmail.com"
          className="text-base font-bold transition-opacity hover:opacity-70"
          style={{ color: NAVY }}
        >
          hellomixarto@gmail.com
        </a>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed">
        Je lis chaque message et réponds dans les meilleurs délais. Si votre
        demande concerne un projet en particulier, précisez-le — ça facilite
        le traitement.
      </p>

    </article>
  );
}
