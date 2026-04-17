import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Mixarto",
  description: "Questions fréquentes sur Mixarto et ses projets.",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

const FAQ = [
  {
    question: "Qu'est-ce que Mixarto ?",
    reponse:
      "Mixarto est une marque indépendante qui regroupe des créations graphiques et des applications web. Chaque projet est pensé pour être simple, utile et facile à prendre en main.",
  },
  {
    question: "Quels projets propose Mixarto ?",
    reponse:
      "Mixarto regroupe une boutique Etsy de créations graphiques décalées et personnalisables — portraits d'animaux sur mesure, affiches numériques — et des applications web. Exerceo, une application d'exercices scolaires pour les enfants du primaire, est l'application actuellement disponible.",
  },
  {
    question: "Exerceo fait-il partie de Mixarto ?",
    reponse:
      "Oui. Exerceo est développé sous la bannière Mixarto, avec son propre univers et ses pages dédiées.",
  },
  {
    question: "Mixarto est-il un site vitrine ou une plateforme ?",
    reponse:
      "Les deux, en quelque sorte. Le site présente la marque, la boutique Etsy et les applications web développées sous Mixarto. Chaque projet dispose ensuite de son propre espace.",
  },
  {
    question: "Comment accéder aux applications Mixarto ?",
    reponse:
      "Les projets disponibles sont présentés sur le site. Chacun dispose de son propre espace, accessible depuis la page correspondante.",
  },
  {
    question: "Comment contacter Mixarto ?",
    reponse:
      "Via la page Contact, pour toute question générale ou demande liée à l'un des projets.",
  },
  {
    question: "Mixarto proposera-t-il d'autres projets ?",
    reponse:
      "Oui. La marque a vocation à accueillir d'autres applications, développées dans le même esprit.",
  },
];

export default function MixartoFaqPage() {
  return (
    <article className="space-y-8">

      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          FAQ
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Questions fréquentes sur Mixarto et ses projets.
        </p>
      </div>

      <div className="space-y-2">
        {FAQ.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-gray-100 overflow-hidden"
            style={{ backgroundColor: "#f8f9ff" }}
          >
            <summary
              className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none"
              style={{ color: NAVY }}
            >
              <span className="text-sm font-bold leading-snug">
                {item.question}
              </span>
              <svg
                className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {item.reponse}
            </div>
          </details>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="rounded-2xl p-5" style={{ backgroundColor: "#eef1ff" }}>
        <p className="text-sm leading-relaxed" style={{ color: NAVY }}>
          Une question sans réponse ?{" "}
          <a
            href="/contact"
            className="font-bold underline transition-opacity hover:opacity-70"
            style={{ color: PURPLE }}
          >
            Contactez-moi
          </a>
          .
        </p>
      </div>

    </article>
  );
}
