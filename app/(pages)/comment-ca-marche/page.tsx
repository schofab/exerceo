import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment ça marche — exerceō",
  description:
    "Découvrez comment exerceō compose des séances d'exercices adaptées à votre enfant, du CP au CM2, en quelques clics.",
};

const NAVY   = "#071453";
const PURPLE = "#748bf7";

const SECTIONS = [
  {
    num: "1",
    titre: "Choisir une séance",
    texte: [
      "En quelques clics, vous choisissez l'enfant concerné, la ou les matières à travailler, ainsi que le temps disponible.",
      "exerceō permet de créer une séance adaptée au niveau scolaire et au profil de chaque enfant.",
    ],
  },
  {
    num: "2",
    titre: "Obtenir une séance adaptée",
    texte: [
      "À partir de vos choix, exerceō propose une série d'exercices conçus pour l'entraînement et la révision.",
      "Les contenus s'appuient sur les attendus de l'Éducation nationale, tout en tenant compte du niveau scolaire et de la progression de l'enfant dans l'app.",
    ],
  },
  {
    num: "3",
    titre: "Travailler à son rythme",
    texte: [
      "Chaque séance est pensée pour être courte, claire et facile à lancer.",
      "L'objectif est de permettre un entraînement régulier, sans surcharge, en fonction du temps réellement disponible à la maison.",
    ],
  },
  {
    num: "4",
    titre: "Suivre les progrès",
    texte: [
      "Les parents peuvent suivre les sessions réalisées, les progrès observés et les récompenses gagnées.",
      "Cela permet d'identifier plus facilement les habitudes de travail, les réussites et les points à renforcer.",
    ],
  },
];


export default function CommentCaMarchePage() {
  return (
    <article className="space-y-8 animate-fade-slide-up">

      {/* ── Titre ── */}
      <div>
        <h1 className="text-2xl font-extrabold mb-2" style={{ color: NAVY }}>
          Comment ça marche ?
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
          Une séance adaptée en quelques clics, selon la classe, les matières et le profil de votre enfant.
        </p>
      </div>

      {/* ── 4 étapes ── */}
      <div className="space-y-4">
        {SECTIONS.map((s) => (
          <div
            key={s.num}
            className="rounded-2xl p-5 space-y-2"
            style={{ backgroundColor: "#f5f9ff" }}
          >
            <div className="flex items-center gap-3 mb-1">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white"
                style={{ backgroundColor: PURPLE }}
              >
                {s.num}
              </span>
              <h2 className="font-extrabold text-sm" style={{ color: NAVY }}>
                {s.titre}
              </h2>
            </div>
            {s.texte.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Ce qu'Exerceo est et n'est pas ── */}
      <div
        className="rounded-2xl p-5 space-y-3 border border-gray-200"
        style={{ backgroundColor: "#fffdf5" }}
      >
        <h2 className="font-extrabold text-sm" style={{ color: NAVY }}>
          Ce qu&apos;exerceō est — et n&apos;est pas
        </h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            exerceō est un outil d&apos;entraînement et de révision qui complète la
            scolarité de votre enfant.
          </p>
          <p>
            Les exercices sont conçus à partir des attendus de l&apos;Éducation
            nationale, mais l&apos;app ne remplace ni l&apos;enseignement en classe ni
            le suivi de l&apos;enseignant.
          </p>
          <p>
            Selon les écoles et les enseignants, certaines notions peuvent être
            travaillées plus tôt, plus tard, ou dans un ordre différent.
          </p>
        </div>
        <div className="pt-1 space-y-1.5">
          {[
            "L'app ne se substitue pas aux choix pédagogiques de l'enseignant.",
            "Certaines notions peuvent ne pas encore avoir été vues en classe.",
            "L'accompagnement d'un adulte reste utile pour adapter l'usage.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <span style={{ color: "#6bd6a6" }} className="font-bold mt-0.5 flex-shrink-0">·</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Renvoi FAQ ── */}
      <div
        className="rounded-2xl p-5 flex items-center gap-4"
        style={{ backgroundColor: "#eef1ff" }}
      >
        <p className="flex-1 text-sm leading-relaxed" style={{ color: NAVY }}>
          D'autres questions ? N'hésitez pas à consulter la{" "}
          <Link
            href="/aide"
            className="font-bold underline transition-opacity hover:opacity-70"
            style={{ color: PURPLE }}
          >
            FAQ
          </Link>
          .
        </p>
      </div>

    </article>
  );
}
