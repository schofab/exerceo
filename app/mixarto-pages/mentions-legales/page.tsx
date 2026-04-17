import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Mixarto",
};

const NAVY = "#071453";
const PURPLE = "#748bf7";

function Section({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold" style={{ color: NAVY }}>
        {titre}
      </h2>
      <div className="text-sm leading-relaxed text-gray-600 space-y-2">
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
        {label}
      </span>
      {href ? (
        <a href={href} className="text-sm font-medium" style={{ color: PURPLE }}>
          {value}
        </a>
      ) : (
        <span className="text-sm font-medium" style={{ color: NAVY }}>
          {value}
        </span>
      )}
    </div>
  );
}

export default function MixartoMentionsLegalesPage() {
  return (
    <article className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
          Mentions légales
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Les présentes mentions légales concernent le site mixarto.com.
        </p>
      </div>

      <Section titre="Éditeur du site">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <div className="px-4 divide-y divide-gray-100">
            <Field label="Nom" value="Fabien Schorsch" />
            <Field label="Statut" value="Micro-entreprise" />
            <Field
              label="Adresse"
              value="18, rue Jean-Baptiste Colbert — 31400 Toulouse"
            />
            <Field
              label="Email"
              value="hellomixarto@gmail.com"
              href="mailto:hellomixarto@gmail.com"
            />
            <Field label="Numéro SIRET" value="80247175500024" />
            <Field label="Directeur de la publication" value="Fabien Schorsch" />
          </div>
        </div>
      </Section>

      <Section titre="Hébergement">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <div className="px-4 divide-y divide-gray-100">
            <Field label="Hébergeur" value="Vercel" />
            <Field
              label="Adresse"
              value="340 S Lemon Ave #4133, Walnut, CA 91789, USA"
            />
            <Field
              label="Site"
              value="https://vercel.com"
              href="https://vercel.com"
            />
          </div>
        </div>
      </Section>

      <Section titre="Objet du site">
        <p>
          Le site mixarto.com est un site de présentation de la marque Mixarto
          et des projets, applications ou créations développés sous cette marque.
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur le site mixarto.com, notamment
          les textes, visuels, logos, graphismes et éléments d'interface, est
          protégé par le droit de la propriété intellectuelle.
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
          L'éditeur s'efforce de fournir des informations aussi exactes et à
          jour que possible. Toutefois, il ne peut garantir l'absence d'erreurs,
          d'omissions ou d'indisponibilités temporaires.
        </p>
      </Section>

      <Section titre="Contact">
        <p>Pour toute question relative au site mixarto.com :</p>
        <a
          href="mailto:hellomixarto@gmail.com"
          className="font-semibold"
          style={{ color: PURPLE }}
        >
          hellomixarto@gmail.com
        </a>
      </Section>
    </article>
  );
}
