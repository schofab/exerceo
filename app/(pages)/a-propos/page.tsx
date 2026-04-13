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

        <div className="rounded-2xl p-5 space-y-3 border border-gray-200" style={{ backgroundColor: "#fffdf5" }}>
          <p className="font-bold text-sm" style={{ color: "#071453" }}>
            Exerceo est un outil complémentaire à la scolarité, et ne la remplace pas.
          </p>
          <p>
            Les exercices proposés dans Exerceo sont élaborés à partir des attendus officiels
            de l'Éducation Nationale pour l'école primaire. Ils ont pour objectif d'aider les
            enfants à s'entraîner, réviser et consolider leurs apprentissages dans un cadre adapté.
          </p>
          <p className="font-semibold text-xs" style={{ color: "#071453" }}>Toutefois :</p>
          <ul className="space-y-1.5">
            {[
              "L'app ne se substitue ni à l'enseignement en classe, ni aux choix pédagogiques de l'enseignant ou de l'école.",
              "Chaque enseignant organise sa progression comme il l'entend : certaines notions peuvent être abordées plus tôt, plus tard, ou de manière différente d'une classe à l'autre.",
              "Certaines notions ne sont parfois vues qu'en milieu ou en fin d'année, alors qu'Exerceo peut déjà proposer des exercices correspondants.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#6bd6a6" }} className="font-bold mt-0.5 flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-xs" style={{ color: "#071453" }}>Il est donc possible que votre enfant rencontre :</p>
          <ul className="space-y-1.5">
            {[
              "Des exercices sur des notions déjà bien maîtrisées.",
              "Ou au contraire des exercices portant sur des notions pas encore vues en classe.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#6bd6a6" }} className="font-bold mt-0.5 flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            L'accompagnement d'un adulte reste important pour adapter l'utilisation
            de l'app aux besoins réels de l'enfant et au travail mené en classe.
          </p>
          <p>
            Exerceo doit être considéré comme un support d'entraînement et de révision,
            aligné sur les attendus de l'école primaire, mais qui ne prétend pas refléter
            exactement le programme ni le rythme de travail de chaque enseignant.
          </p>
        </div>
      </div>
    </article>
  );
}
