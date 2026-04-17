export const metadata = {
  title: "Conditions générales d'utilisation — exerceō",
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
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          Conditions générales d'utilisation
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Les présentes Conditions générales d'utilisation encadrent l'accès et
          l'utilisation du site exerceo.mixarto.com et du service exerceō.
        </p>
      </div>

      <Section numero={1} titre="Objet">
        <p>
          exerceō est un service numérique proposant des exercices
          d'entraînement et de révision à destination des utilisateurs du
          service. Les présentes CGU ont pour objet de définir les conditions
          dans lesquelles les utilisateurs peuvent accéder au site et utiliser
          les fonctionnalités proposées.
        </p>
      </Section>

      <Section numero={2} titre="Accès au service">
        <p>
          Le service est accessible en ligne. Certaines fonctionnalités sont
          accessibles librement, tandis que d'autres nécessitent la création
          d'un compte utilisateur. L'éditeur se réserve le droit de modifier,
          suspendre ou interrompre tout ou partie du service, notamment pour
          maintenance, mise à jour ou évolution technique.
        </p>
      </Section>

      <Section numero={3} titre="Compte utilisateur">
        <p>Lorsqu'un compte est nécessaire, l'utilisateur s'engage à :</p>
        <Liste
          items={[
            "Fournir des informations exactes et les maintenir à jour",
            "Maintenir la confidentialité de ses identifiants",
            "Ne pas céder, prêter ou partager ses accès de manière non autorisée",
          ]}
        />
      </Section>

      <Section numero={4} titre="Règles d'utilisation">
        <p>
          L'utilisateur s'engage à utiliser exerceō de manière loyale, conforme
          à sa finalité et dans le respect des lois applicables. Il s'interdit
          notamment :
        </p>
        <Liste
          items={[
            "De détourner le service de son usage normal",
            "De tenter d'accéder de manière non autorisée aux systèmes ou données",
            "De perturber le fonctionnement du service",
            "De reproduire, extraire ou exploiter massivement les contenus sans autorisation",
          ]}
        />
      </Section>

      <Section numero={5} titre="Finalité pédagogique">
        <p>
          exerceō est un outil d'entraînement et de révision. Les exercices sont
          conçus à partir des attendus de l'Éducation nationale, mais le service
          ne remplace ni l'enseignement dispensé en classe ni l'accompagnement
          par l'enseignant.
        </p>
        <p>
          L'ordre d'apprentissage des notions peut varier selon les
          établissements, les classes et les enseignants. Les résultats obtenus
          dans le service sont indicatifs et ne constituent pas une évaluation
          scolaire officielle.
        </p>
      </Section>

      <Section numero={6} titre="Paiement">
        <p>
          Certaines fonctionnalités sont payantes. Les conditions tarifaires
          applicables sont précisées au moment de l'accès au service. Le
          paiement est sécurisé via Stripe.
        </p>
      </Section>

      <Section numero={7} titre="Propriété intellectuelle">
        <p>
          Le site, le service, les contenus, les exercices, les textes, les
          visuels, les graphismes, la structure et les éléments techniques
          d'exerceō sont protégés par le droit de la propriété intellectuelle.
          Toute reproduction, représentation, diffusion, adaptation ou
          exploitation non autorisée est interdite.
        </p>
      </Section>

      <Section numero={8} titre="Responsabilité">
        <p>L'éditeur ne saurait être tenu responsable :</p>
        <Liste
          items={[
            "D'interruptions temporaires ou d'anomalies techniques",
            "D'une utilisation non conforme du service par l'utilisateur",
            "De conséquences pédagogiques ou scolaires résultant d'une mauvaise interprétation des résultats",
          ]}
        />
      </Section>

      <Section numero={9} titre="Suspension ou résiliation">
        <p>
          En cas de non-respect des présentes CGU, d'usage abusif ou de
          comportement portant atteinte au bon fonctionnement du service,
          l'éditeur se réserve le droit de suspendre ou de supprimer l'accès au
          service, temporairement ou définitivement.
        </p>
      </Section>

      <Section numero={10} titre="Modification des CGU">
        <p>
          Les présentes CGU peuvent être modifiées à tout moment. La version
          applicable est celle publiée sur le site au moment de l'utilisation du
          service.
        </p>
      </Section>

      <Section numero={11} titre="Droit applicable">
        <p>Les présentes CGU sont soumises au droit français.</p>
      </Section>
    </article>
  );
}
