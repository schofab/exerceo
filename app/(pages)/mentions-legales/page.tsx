export const metadata = {
  title: "Mentions légales — Mixarto",
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

function Liste({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 pl-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span style={{ color: PURPLE }} className="font-bold mt-0.5 flex-shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MentionsLegalesPage() {
  return (
    <article className="space-y-8 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: NAVY }}>
        Mentions légales
      </h1>

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

      <Section titre="Activités">
        <p>Mixarto propose :</p>
        <Liste
          items={[
            "Une application éducative (exerceō)",
            "Des créations graphiques (portraits personnalisés, affiches digitales)",
          ]}
        />
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur le site (textes, images, graphismes, logo, etc.)
          est la propriété exclusive de Mixarto, sauf mention contraire. Toute reproduction,
          distribution ou utilisation sans autorisation est interdite.
        </p>
      </Section>

      <Section titre="Responsabilité">
        <p>
          L'éditeur s'efforce de fournir des informations fiables, mais ne saurait garantir
          l'exactitude, la complétude ou l'actualité des contenus.
        </p>
      </Section>

      <Section titre="Contact">
        <p>Pour toute question :</p>
        <a href="mailto:hellomixarto@gmail.com" className="font-semibold" style={{ color: PURPLE }}>
          hellomixarto@gmail.com
        </a>
      </Section>
    </article>
  );
}
