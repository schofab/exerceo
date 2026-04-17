import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Mixarto",
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

export default function MixartoPolitiqueConfidentialitePage() {
  return (
    <article className="space-y-7">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          Politique de confidentialité
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          La présente politique décrit la manière dont les données personnelles
          peuvent être collectées et traitées dans le cadre de l'utilisation du
          site mixarto.com.
        </p>
      </div>

      <Section numero={1} titre="Responsable du traitement">
        <p>
          Fabien Schorsch — Micro-entreprise
          <br />
          18, rue Jean-Baptiste Colbert — 31400 Toulouse
          <br />
          <a href="mailto:hellomixarto@gmail.com" style={{ color: PURPLE }}>
            hellomixarto@gmail.com
          </a>
        </p>
      </Section>

      <Section numero={2} titre="Données susceptibles d'être collectées">
        <p>Selon les fonctionnalités présentes sur le site :</p>
        <Liste
          items={[
            "Données transmises via un formulaire de contact",
            "Adresse email, si l'utilisateur choisit de la communiquer",
            "Données de mesure d'audience via des cookies Google Analytics (voir section Cookies)",
            "Données techniques strictement nécessaires au fonctionnement du site",
          ]}
        />
      </Section>

      <Section numero={3} titre="Finalités du traitement">
        <Liste
          items={[
            "Répondre aux messages reçus",
            "Assurer le bon fonctionnement du site",
            "Mesurer la fréquentation du site et améliorer les contenus et fonctionnalités proposés",
          ]}
        />
      </Section>

      <Section numero={4} titre="Bases légales">
        <Liste
          items={[
            "Consentement de l'utilisateur lorsqu'il contacte volontairement l'éditeur",
            "Consentement de l'utilisateur pour les cookies de mesure d'audience",
            "Intérêt légitime de l'éditeur pour administrer, sécuriser et améliorer le site",
          ]}
        />
      </Section>

      <Section numero={5} titre="Destinataires des données">
        <p>
          Les données sont accessibles uniquement dans la mesure nécessaire à
          l'éditeur du site, aux prestataires techniques participant à
          l'hébergement du site, et à Google dans le cadre de la mesure
          d'audience.
        </p>
        <p>Aucune donnée personnelle n'est vendue à des tiers.</p>
      </Section>

      <Section numero={6} titre="Durée de conservation">
        <p>
          Les données sont conservées pendant une durée n'excédant pas celle
          nécessaire aux finalités poursuivies.
        </p>
        <p>
          Les messages transmis via un formulaire de contact sont conservés
          pendant le temps nécessaire à leur traitement. Les cookies Google
          Analytics sont conservés selon leur durée de vie propre (voir section
          Cookies).
        </p>
      </Section>

      <Section numero={7} titre="Sécurité">
        <p>
          Des mesures techniques et organisationnelles appropriées sont mises en
          œuvre afin de protéger les données personnelles.
        </p>
      </Section>

      <Section numero={8} titre="Droits des utilisateurs">
        <p>
          Conformément à la réglementation applicable, vous disposez notamment
          des droits d'accès, de rectification, d'effacement, d'opposition, de
          limitation et, le cas échéant, de portabilité.
        </p>
        <p>
          Pour exercer vos droits :{" "}
          <a href="mailto:hellomixarto@gmail.com" style={{ color: PURPLE }}>
            hellomixarto@gmail.com
          </a>
        </p>
        <p>
          Vous disposez également du droit d'introduire une réclamation auprès
          de la CNIL.
        </p>
      </Section>

      <Section numero={9} titre="Cookies">
        <p>
          Le site utilise des cookies ou traceurs de deux natures :
        </p>
        <Liste
          items={[
            "Cookies strictement nécessaires au fonctionnement du site — exemptés de consentement.",
            "Cookies de mesure d'audience associés aux services Google Analytics (_ga, _ga_*, _gid), susceptibles de collecter des données de navigation à des fins statistiques.",
          ]}
        />
        <p>
          Le site utilise des outils de mesure d'audience susceptibles de
          déposer des cookies, notamment des cookies associés aux services
          Google Analytics, afin de mieux comprendre la fréquentation du site
          et d'améliorer les contenus et fonctionnalités proposés.
        </p>
        <p>
          Ces cookies ne sont pas strictement nécessaires au fonctionnement du
          site. Conformément à la réglementation en vigueur (RGPD,
          recommandations CNIL), leur dépôt devrait être subordonné au recueil
          préalable du consentement de l'utilisateur.
        </p>
        <p>
          Pour en savoir plus sur les cookies Google et les options de
          désactivation disponibles :{" "}
          <a
            href="https://policies.google.com/technologies/cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
            style={{ color: PURPLE }}
          >
            policies.google.com
          </a>
          .
        </p>
      </Section>
    </article>
  );
}
