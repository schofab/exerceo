import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Mixarto",
  description:
    "Mixarto est une marque indépendante qui rassemble créations graphiques et applications web.",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

export default function MixartoAProposPage() {
  return (
    <article className="space-y-10">

      {/* ── Intro ── */}
      <div className="space-y-4">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          À propos de Mixarto
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Mixarto est une marque indépendante qui rassemble créations graphiques
          et applications web. Chaque projet part d'un besoin concret et se
          construit avec une seule exigence : fonctionner bien, sans complexité
          inutile.
        </p>
      </div>

      {/* ── L'approche ── */}
      <div className="space-y-3">
        <h2 className="text-base font-bold" style={{ color: NAVY }}>
          L'approche
        </h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            L'essentiel avant tout. Pas de fonctionnalités superflues, pas
            d'interface encombrée. Chaque application doit être compréhensible
            dès les premières minutes et agréable à utiliser au quotidien.
          </p>
          <p>
            La qualité du contenu et la cohérence de l'interface comptent
            autant que la technique. Un outil qui fait exactement ce qu'il
            promet, c'est déjà beaucoup.
          </p>
        </div>
      </div>

      {/* ── Les projets ── */}
      <div className="space-y-3">
        <h2 className="text-base font-bold" style={{ color: NAVY }}>
          Les projets
        </h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            La boutique Etsy propose des créations graphiques décalées et
            personnalisables — portraits d'animaux sur mesure, affiches
            numériques à télécharger.
          </p>
          <p>
            Exerceo est l'application web développée sous Mixarto — un outil
            d'exercices scolaires pour les enfants du primaire. D'autres projets
            pourront s'y ajouter, dans le même esprit.
          </p>
        </div>
      </div>

      {/* ── CTA Contact ── */}
      <div className="rounded-2xl p-5" style={{ backgroundColor: "#eef1ff" }}>
        <p className="text-sm leading-relaxed" style={{ color: NAVY }}>
          Une question sur Mixarto ou l'un de ses projets ?{" "}
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
