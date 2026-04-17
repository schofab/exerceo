import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Mixarto",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

function Section({
  numero,
  titre,
  children,
}: {
  numero: number;
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h2
        className="text-base font-bold flex items-baseline gap-2"
        style={{ color: NAVY }}
      >
        <span
          className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "#f0f2ff", color: PURPLE }}
        >
          {numero}
        </span>
        {titre}
      </h2>
      <div className="text-sm leading-relaxed text-gray-600 space-y-2 pl-7">
        {children}
      </div>
    </section>
  );
}

function Liste({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span
            style={{ color: PURPLE }}
            className="font-bold mt-0.5 flex-shrink-0"
          >
            ·
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MixartoConditionsUtilisationPage() {
  return (
    <article className="space-y-7">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          Conditions générales d'utilisation
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Les présentes Conditions générales d'utilisation encadrent l'accès et
          l'utilisation du site mixarto.com.
        </p>
      </div>

      <Section numero={1} titre="Objet">
        <p>
          Le site mixarto.com a pour objet de présenter la marque Mixarto, ses
          projets, ses applications et ses créations.
        </p>
      </Section>

      <Section numero={2} titre="Accès au site">
        <p>
          Le site est accessible en ligne, sauf interruption temporaire,
          maintenance ou cas de force majeure. L'éditeur se réserve le droit de
          modifier, suspendre ou interrompre tout ou partie du site à tout
          moment.
        </p>
      </Section>

      <Section numero={3} titre="Utilisation du site">
        <p>
          L'utilisateur s'engage à utiliser le site de manière loyale, conforme
          à sa finalité et dans le respect des lois applicables. Il s'interdit
          notamment :
        </p>
        <Liste
          items={[
            "De perturber le fonctionnement du site",
            "De tenter d'accéder de manière non autorisée à ses systèmes",
            "D'exploiter les contenus du site sans autorisation",
          ]}
        />
      </Section>

      <Section numero={4} titre="Propriété intellectuelle">
        <p>
          Les contenus, visuels, textes, logos, graphismes, éléments d'interface
          et, plus généralement, tout élément présent sur le site mixarto.com
          sont protégés par le droit de la propriété intellectuelle. Toute
          reproduction, représentation, diffusion, adaptation ou exploitation non
          autorisée est interdite.
        </p>
      </Section>

      <Section numero={5} titre="Liens et projets tiers">
        <p>
          Le site peut présenter ou référencer différents projets portés sous la
          marque Mixarto. Chaque projet peut, le cas échéant, disposer de ses
          propres conditions, politiques ou pages d'information.
        </p>
      </Section>

      <Section numero={6} titre="Responsabilité">
        <p>
          L'éditeur s'efforce de fournir des informations fiables et à jour,
          sans pouvoir en garantir l'exhaustivité ni l'absence totale d'erreurs.
          Il ne saurait être tenu responsable d'une indisponibilité temporaire
          du site ou d'un usage inapproprié fait par l'utilisateur.
        </p>
      </Section>

      <Section numero={7} titre="Modification des CGU">
        <p>
          Les présentes CGU peuvent être modifiées à tout moment. La version
          applicable est celle publiée sur le site au moment de la consultation.
        </p>
      </Section>

      <Section numero={8} titre="Droit applicable">
        <p>Les présentes CGU sont soumises au droit français.</p>
      </Section>
    </article>
  );
}
