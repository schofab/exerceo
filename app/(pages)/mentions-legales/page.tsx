export const metadata = {
  title: "Mentions légales — exerceō",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold" style={{ color: NAVY }}>
        {titre}
      </h2>
      <div className="text-sm leading-relaxed text-gray-600 space-y-2">{children}</div>
    </section>
  );
}

function Field({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex flex-col gap-0.5 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
      {href ? (
        <a href={href} className="text-sm font-medium" style={{ color: PURPLE }}>
          {value}
        </a>
      ) : (
        <span className="text-sm font-medium" style={{ color: NAVY }}>{value}</span>
      )}
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <article className="space-y-8 animate-fade-slide-up">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          Mentions légales
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Les présentes mentions légales concernent le site exerceo.mixarto.com
          et le service exerceō, édités par Mixarto.
        </p>
      </div>

      <Section titre="Éditeur du site">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <div className="px-4 divide-y divide-gray-100">
            <Field label="Nom" value="Fabien Schorsch" />
            <Field label="Statut" value="Micro-entreprise" />
            <Field label="Adresse" value="18, rue Jean-Baptiste Colbert — 31400 Toulouse" />
            <Field label="Email" value="hellomixarto@gmail.com" href="mailto:hellomixarto@gmail.com" />
            <Field label="Numéro SIRET" value="80247175500024" />
            <Field label="Directeur de la publication" value="Fabien Schorsch" />
          </div>
        </div>
      </Section>

      <Section titre="Hébergement">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <div className="px-4 divide-y divide-gray-100">
            <Field label="Hébergeur" value="Vercel" />
            <Field label="Adresse" value="340 S Lemon Ave #4133, Walnut, CA 91789, USA" />
            <Field label="Site" value="https://vercel.com" href="https://vercel.com" />
          </div>
        </div>
      </Section>

      <Section titre="Objet du service">
        <p>
          exerceō est une application éducative proposant des exercices
          d'entraînement et de révision pour les enfants du primaire (CP au CM2).
        </p>
        <p>
          Les contenus sont conçus à partir des attendus de l'Éducation
          nationale. exerceō a pour objectif d'accompagner l'entraînement de
          l'enfant, sans se substituer à l'enseignement en classe ni au suivi
          pédagogique de l'enseignant.
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur le site exerceo.mixarto.com et
          dans le service exerceō, notamment les textes, exercices, visuels,
          logos, graphismes, éléments d'interface et codes, est protégé par le
          droit de la propriété intellectuelle.
        </p>
        <p>
          Sauf mention contraire, ces contenus sont la propriété exclusive de
          Mixarto / Fabien Schorsch. Toute reproduction, représentation,
          diffusion, adaptation ou exploitation, totale ou partielle, sans
          autorisation préalable, est interdite.
        </p>
      </Section>

      <Section titre="Responsabilité">
        <p>
          L'éditeur s'efforce de fournir un service accessible et des
          informations aussi exactes que possible. Toutefois, il ne peut
          garantir l'absence d'erreurs, d'interruptions temporaires ou
          d'indisponibilités techniques.
        </p>
        <p>
          Les résultats, scores, progressions et indications fournis dans
          exerceō ont une valeur informative et pédagogique uniquement ; ils ne
          constituent pas une évaluation scolaire officielle.
        </p>
      </Section>

      <Section titre="Contact">
        <p>Pour toute question relative au site ou au service exerceō :</p>
        <a href="mailto:hellomixarto@gmail.com" className="font-semibold" style={{ color: PURPLE }}>
          hellomixarto@gmail.com
        </a>
      </Section>
    </article>
  );
}
