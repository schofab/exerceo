export const metadata = {
  title: "Mentions légales — Exerceo",
};

function Section({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-base font-bold" style={{ color: "#071453" }}>
        {titre}
      </h2>
      <div className="text-sm leading-relaxed text-gray-600">{children}</div>
    </section>
  );
}

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-col gap-0.5 py-2 border-b border-gray-100 last:border-0">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-sm font-medium" style={{ color: "#071453" }}>
        {value ?? (
          <span className="italic text-gray-300">[À compléter]</span>
        )}
      </span>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <article className="space-y-7 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
        Mentions légales
      </h1>

      <Section titre="Éditeur de l'application">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <div className="px-4 divide-y divide-gray-100">
            <Field label="Nom / Raison sociale" value="Mixarto" />
            <Field label="Statut juridique" value="Micro entreprise" />
            <Field label="Adresse" value="18, rue Jean-Baptiste Colbert - 31400 Toulouse" />
            <Field label="Email" value="hellomixarto@gmail.com" />
            <Field label="Numéro SIRET" />
            <Field label="Directeur de publication" />
          </div>
        </div>
      </Section>

      <Section titre="Hébergement">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <div className="px-4 divide-y divide-gray-100">
            <Field label="Hébergeur" value="Vercel Inc." />
            <Field label="Adresse de l'hébergeur" />
            <Field label="Site de l'hébergeur" value="vercel.com"/>
          </div>
        </div>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          L'ensemble des éléments de l'application Exerceo (design, mascottes,
          textes, structure, fonctionnalités) est protégé par les lois relatives
          à la propriété intellectuelle. Toute reproduction ou utilisation non
          autorisée est interdite.
        </p>
      </Section>
    </article>
  );
}
