export const metadata = {
  title: "Politique de confidentialité — Mixarto",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

function Section({ numero, titre, children }: { numero: number; titre: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-base font-bold flex items-baseline gap-2" style={{ color: NAVY }}>
        <span
          className="text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "#f0f2ff", color: PURPLE }}
        >
          {numero}
        </span>
        {titre}
      </h2>
      <div className="text-sm leading-relaxed text-gray-600 space-y-2 pl-7">{children}</div>
    </section>
  );
}

function Liste({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span style={{ color: PURPLE }} className="font-bold mt-0.5 flex-shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="space-y-7 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
        Politique de confidentialité
      </h1>

      <Section numero={1} titre="Introduction">
        <p>Mixarto attache une grande importance à la protection des données personnelles.</p>
      </Section>

      <Section numero={2} titre="Données collectées">
        <p>Nous pouvons collecter :</p>
        <Liste
          items={[
            "Adresse email",
            "Données liées à l'utilisation de l'application Exerceo",
            "Données de navigation (cookies, analytics)",
          ]}
        />
      </Section>

      <Section numero={3} titre="Finalité de la collecte">
        <p>Les données sont utilisées pour :</p>
        <Liste
          items={[
            "Fournir et améliorer l'application",
            "Personnaliser les exercices",
            "Gérer les comptes utilisateurs",
            "Assurer le support client",
          ]}
        />
      </Section>

      <Section numero={4} titre="Base légale">
        <Liste
          items={[
            "Exécution du service",
            "Consentement (cookies)",
            "Intérêt légitime (amélioration produit)",
          ]}
        />
      </Section>

      <Section numero={5} titre="Hébergement des données">
        <p>Les données sont stockées via : <strong>Supabase</strong>.</p>
      </Section>

      <Section numero={6} titre="Durée de conservation">
        <p>Les données sont conservées uniquement le temps nécessaire au service.</p>
      </Section>

      <Section numero={7} titre="Partage des données">
        <p>
          Les données ne sont jamais revendues. Elles peuvent être utilisées via des services tiers :
        </p>
        <Liste
          items={[
            "Stripe (paiement)",
            "Supabase (base de données)",
          ]}
        />
      </Section>

      <Section numero={8} titre="Sécurité">
        <p>Des mesures techniques sont mises en place pour protéger les données.</p>
      </Section>

      <Section numero={9} titre="Droits des utilisateurs">
        <p>Conformément au RGPD, vous pouvez :</p>
        <Liste
          items={[
            "Accéder à vos données",
            "Demander leur modification ou suppression",
            "Demander leur portabilité",
          ]}
        />
        <p>
          Contact :{" "}
          <a href="mailto:hellomixarto@gmail.com" className="font-semibold" style={{ color: PURPLE }}>
            hellomixarto@gmail.com
          </a>
        </p>
      </Section>

      <Section numero={10} titre="Cookies">
        <p>Le site peut utiliser des cookies pour :</p>
        <Liste
          items={[
            "Améliorer l'expérience utilisateur",
            "Analyser l'usage du site",
          ]}
        />
      </Section>
    </article>
  );
}
