export const metadata = {
  title: "Conditions d'utilisation — Exerceo",
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

export default function ConditionsUtilisationPage() {
  return (
    <article className="space-y-7 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
        Conditions d'utilisation
      </h1>

      <p className="text-sm leading-relaxed text-gray-600">
        Les présentes conditions d'utilisation encadrent l'accès et
        l'utilisation de l'application Exerceo.
      </p>

      <Section titre="Objet du service">
        <p>
          Exerceo est une application éducative destinée à accompagner les
          enfants du primaire dans la réalisation d'exercices courts et adaptés
          à leur niveau.
        </p>
        <p>
          L'application a pour objectif de soutenir l'apprentissage de manière
          ludique et complémentaire à l'enseignement scolaire.
        </p>
        <p>
          Exerceo ne remplace pas l'enseignement dispensé par les établissements
          scolaires.
        </p>
      </Section>

      <Section titre="Création de compte">
        <p>
          Certaines fonctionnalités de l'application nécessitent la création
          d'un compte utilisateur.
        </p>
        <p>
          L'utilisateur s'engage à fournir des informations exactes lors de
          l'inscription.
        </p>
        <p>
          L'utilisateur est responsable de la confidentialité de ses identifiants
          de connexion.
        </p>
      </Section>

      <Section titre="Accès au service">
        <p>
          Exerceo est accessible depuis un navigateur web compatible.
        </p>
        <p>
          L'éditeur s'efforce d'assurer la disponibilité du service mais ne peut
          garantir une accessibilité permanente.
        </p>
      </Section>

      <Section titre="Fonctionnalités Premium">
        <p>
          Certaines fonctionnalités de l'application sont accessibles uniquement
          via une version Premium.
        </p>
        <p>
          Les paiements sont traités par la plateforme sécurisée Stripe.
        </p>
        <p>
          Les conditions de prix et de facturation sont indiquées au moment de
          l'achat.
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          L'ensemble des éléments de l'application Exerceo (design, mascottes,
          textes, structure, fonctionnalités) est protégé par les lois relatives
          à la propriété intellectuelle.
        </p>
        <p>Toute reproduction ou utilisation non autorisée est interdite.</p>
      </Section>

      <Section titre="Responsabilité">
        <p>Exerceo est un outil pédagogique complémentaire.</p>
        <p>
          L'éditeur ne peut être tenu responsable des résultats scolaires de
          l'enfant ou d'une utilisation inappropriée de l'application.
        </p>
      </Section>
    </article>
  );
}
