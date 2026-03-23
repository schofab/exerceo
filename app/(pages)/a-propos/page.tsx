export const metadata = {
  title: "À propos — Exerceo",
};

export default function AProposPage() {
  return (
    <article className="space-y-5 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
        À propos de Exerceo
      </h1>

      <div className="space-y-4 text-sm leading-relaxed text-gray-600">
        <p>
          Exerceo est une application éducative pensée pour accompagner les
          enfants du primaire dans leurs apprentissages.
        </p>
        <p>
          Le projet est né d'un constat simple : en tant que parent d'un enfant
          scolarisé à l'école primaire, je souhaitais pouvoir proposer à mon
          enfant un soutien complémentaire pour consolider ses acquis scolaires,
          tout en gardant une approche ludique et motivante.
        </p>
        <p>
          L'objectif d'Exerceo est de rendre les exercices courts, accessibles
          et agréables, afin que les enfants puissent s'entraîner quelques
          minutes par jour sans que cela devienne une contrainte, ni pour eux,
          ni pour leurs parents.
        </p>
        <p>
          L'application propose des exercices adaptés au niveau de l'enfant et
          inspirés des programmes scolaires du primaire.
        </p>

        <div className="rounded-2xl p-5 space-y-3" style={{ backgroundColor: "#f5f9ff" }}>
          <p className="font-bold text-sm" style={{ color: "#071453" }}>
            Exerceo a été conçu avec trois principes simples :
          </p>
          <ul className="space-y-2">
            {[
              "Rendre l'apprentissage régulier et motivant",
              "Proposer des exercices courts et personnalisés",
              "Offrir un outil simple pour accompagner les enfants dans leur progression",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span style={{ color: "#6bd6a6" }} className="font-bold mt-0.5">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>
          L'application est développée de manière indépendante et ne contient
          aucune publicité.
        </p>
      </div>
    </article>
  );
}
