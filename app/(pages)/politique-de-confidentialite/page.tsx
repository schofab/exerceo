export const metadata = {
  title: "Politique de confidentialité — Exerceo",
};

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-base font-bold" style={{ color: "#071453" }}>
        {titre}
      </h2>
      <div className="text-sm leading-relaxed text-gray-600 space-y-2">
        {children}
      </div>
    </section>
  );
}

function Liste({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 pl-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span style={{ color: "#748bf7" }} className="font-bold mt-0.5 flex-shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="space-y-7 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
        Politique de confidentialité
      </h1>

      <p className="text-sm leading-relaxed text-gray-600">
        La présente politique de confidentialité décrit la manière dont
        l'application Exerceo collecte, utilise et protège les données des
        utilisateurs.
      </p>

      <Section titre="Données collectées">
        <p>
          Lors de l'utilisation de l'application Exerceo, certaines données
          peuvent être collectées afin d'assurer le bon fonctionnement du
          service :
        </p>
        <Liste
          items={[
            "Adresse email du parent lors de la création du compte",
            "Informations liées à l'utilisation de l'application",
            "Progression de l'enfant dans les exercices",
            "Statistiques d'utilisation nécessaires à l'amélioration du service",
          ]}
        />
        <p>
          Aucune donnée personnelle de l'enfant n'est collectée à des fins
          commerciales.
        </p>
      </Section>

      <Section titre="Utilisation des données">
        <p>Les données collectées sont utilisées uniquement pour :</p>
        <Liste
          items={[
            "Permettre la création et la gestion du compte utilisateur",
            "Sauvegarder la progression dans l'application",
            "Améliorer les fonctionnalités du service",
          ]}
        />
        <p>
          Les données ne sont pas revendues ni partagées à des tiers à des fins
          commerciales.
        </p>
      </Section>

      <Section titre="Paiements">
        <p>
          Les paiements effectués dans l'application sont traités par la
          plateforme sécurisée Stripe. Les informations bancaires ne sont jamais
          stockées par Exerceo.
        </p>
      </Section>

      <Section titre="Hébergement des données">
        <p>
          Les données des utilisateurs sont hébergées via la plateforme
          Supabase. Des mesures techniques et organisationnelles sont mises en
          place afin d'assurer la sécurité des données.
        </p>
      </Section>

      <Section titre="Conservation des données">
        <p>
          Les données sont conservées pendant la durée d'utilisation du compte
          utilisateur. Les utilisateurs peuvent demander la suppression de leurs
          données à tout moment en contactant l'adresse suivante :
        </p>
        <a
          href="mailto:hellomixarto@gmail.com"
          className="font-semibold"
          style={{ color: "#748bf7" }}
        >
          hellomixarto@gmail.com
        </a>
      </Section>

      <Section titre="Droits des utilisateurs">
        <p>
          Conformément au Règlement général sur la protection des données
          (RGPD), chaque utilisateur dispose des droits suivants :
        </p>
        <Liste
          items={[
            "Droit d'accès aux données",
            "Droit de rectification",
            "Droit de suppression",
            "Droit à la portabilité",
          ]}
        />
        <p>Toute demande peut être adressée à :</p>
        <a
          href="mailto:hellomixarto@gmail.com"
          className="font-semibold"
          style={{ color: "#748bf7" }}
        >
          hellomixarto@gmail.com
        </a>
      </Section>
    </article>
  );
}
