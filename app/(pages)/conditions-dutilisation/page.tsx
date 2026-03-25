export const metadata = {
  title: "Conditions générales d'utilisation — Mixarto",
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

export default function ConditionsUtilisationPage() {
  return (
    <article className="space-y-7 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
        Conditions générales d'utilisation
      </h1>

      <Section numero={1} titre="Objet">
        <p>
          Les présentes CGU définissent les conditions d'utilisation du site Mixarto
          et de l'application Exerceo.
        </p>
      </Section>

      <Section numero={2} titre="Accès au service">
        <p>
          Le site est accessible gratuitement. Certaines fonctionnalités peuvent
          nécessiter la création d'un compte.
        </p>
      </Section>

      <Section numero={3} titre="Compte utilisateur">
        <p>L'utilisateur s'engage à :</p>
        <Liste
          items={[
            "Fournir des informations exactes",
            "Ne pas partager son compte",
          ]}
        />
      </Section>

      <Section numero={4} titre="Utilisation du service">
        <p>
          L'utilisateur s'engage à utiliser le service de manière conforme et respectueuse.
        </p>
      </Section>

      <Section numero={5} titre="Application Exerceo">
        <p>
          Exerceo propose des exercices éducatifs personnalisés. Les résultats sont indicatifs
          et ne remplacent pas un suivi pédagogique professionnel.
        </p>
      </Section>

      <Section numero={6} titre="Paiement">
        <p>
          Certaines fonctionnalités peuvent être payantes. Les paiements sont
          sécurisés via <strong>Stripe</strong>.
        </p>
      </Section>

      <Section numero={7} titre="Propriété intellectuelle">
        <p>Tous les contenus restent la propriété de Mixarto.</p>
      </Section>

      <Section numero={8} titre="Responsabilité">
        <p>Mixarto ne saurait être tenu responsable :</p>
        <Liste
          items={[
            "D'un mauvais usage du service",
            "D'interruptions techniques",
          ]}
        />
      </Section>

      <Section numero={9} titre="Résiliation">
        <p>Mixarto peut suspendre un compte en cas d'abus.</p>
      </Section>

      <Section numero={10} titre="Modification">
        <p>Les CGU peuvent être modifiées à tout moment.</p>
      </Section>

      <Section numero={11} titre="Droit applicable">
        <p>Les présentes CGU sont soumises au droit français.</p>
      </Section>
    </article>
  );
}
