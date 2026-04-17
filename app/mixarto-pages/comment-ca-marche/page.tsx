import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment ça marche — Mixarto",
  description: "Découvrez comment fonctionne Mixarto et ses projets.",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

const ETAPES = [
  {
    num: "1",
    texte: "Découvrez les projets, applications ou créations présentés sur le site.",
  },
  {
    num: "2",
    texte:
      "Accédez aux pages de détail pour comprendre l'objectif, le fonctionnement ou l'univers de chaque projet.",
  },
  {
    num: "3",
    texte:
      "Selon le projet concerné, vous pouvez ensuite utiliser un service, consulter des informations complémentaires ou accéder à une plateforme dédiée.",
  },
  {
    num: "4",
    texte:
      "Chaque projet peut avoir ses propres modalités d'accès, ses propres fonctionnalités et ses propres pages d'aide ou d'information.",
  },
];

export default function MixartoCommentCaMarchePage() {
  return (
    <article className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          Comment ça marche
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Mixarto présente différents projets et créations numériques au sein
          d'un même univers de marque.
        </p>
      </div>

      <div className="space-y-3">
        {ETAPES.map((e) => (
          <div
            key={e.num}
            className="rounded-2xl p-5 flex items-start gap-4"
            style={{ backgroundColor: "#f5f9ff" }}
          >
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white mt-0.5"
              style={{ backgroundColor: PURPLE }}
            >
              {e.num}
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">{e.texte}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-5 border border-gray-200"
        style={{ backgroundColor: "#fffdf5" }}
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          Mixarto fonctionne comme une porte d'entrée vers un ensemble de
          créations et d'outils portés par la même marque.
        </p>
      </div>

      <div className="rounded-2xl p-5" style={{ backgroundColor: "#eef1ff" }}>
        <p className="text-sm leading-relaxed" style={{ color: NAVY }}>
          Des questions ?{" "}
          <a
            href="/contact"
            className="font-bold underline transition-opacity hover:opacity-70"
            style={{ color: PURPLE }}
          >
            Contactez-moi
          </a>
          {" "}ou consultez la{" "}
          <a
            href="/faq"
            className="font-bold underline transition-opacity hover:opacity-70"
            style={{ color: PURPLE }}
          >
            FAQ
          </a>
          .
        </p>
      </div>
    </article>
  );
}
