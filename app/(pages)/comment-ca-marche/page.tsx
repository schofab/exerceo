import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment ça marche — Exerceo",
  description:
    "Découvrez comment Exerceo compose des séances d'exercices adaptées à votre enfant, du CP au CM2, en quelques clics.",
};

const NAVY   = "#071453";
const PURPLE = "#748bf7";
const GREEN  = "#6bd6a6";

const SECTIONS = [
  {
    num: "1",
    titre: "Choisir une séance",
    texte: [
      "En quelques clics, vous choisissez l'enfant concerné, la ou les matières à travailler, ainsi que le temps disponible.",
      "Exerceo permet de créer une séance adaptée au niveau scolaire et au profil de chaque enfant.",
    ],
  },
  {
    num: "2",
    titre: "Obtenir une séance adaptée",
    texte: [
      "À partir de vos choix, Exerceo propose une série d'exercices conçus pour l'entraînement et la révision.",
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

const FAQ = [
  {
    q: "Pourquoi les exercices peuvent-ils varier ?",
    r: "Exerceo sélectionne les exercices en fonction de la classe de l'enfant, des matières choisies et de sa progression dans l'app. L'objectif est de proposer des exercices variés d'une session à l'autre, pour éviter la répétition et maintenir l'intérêt.",
  },
  {
    q: "Peut-on choisir plusieurs matières ?",
    r: "Oui. Vous pouvez sélectionner une ou plusieurs matières par session, dans la limite du nombre d'exercices disponibles pour la durée choisie. Par exemple, pour une session de 10 minutes (6 exercices), vous pouvez choisir jusqu'à 6 matières.",
  },
  {
    q: "À qui s'adresse Exerceo ?",
    r: "Exerceo s'adresse aux enfants scolarisés du CP au CM2. L'app est conçue pour être utilisée à la maison, en complément de l'école, avec ou sans l'aide d'un parent. Elle convient aussi bien pour réviser, s'entraîner que pour consolider des acquis.",
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
          Ce qu&apos;Exerceo est — et n&apos;est pas
        </h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            Exerceo est un outil d&apos;entraînement et de révision qui complète la
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
              <span style={{ color: GREEN }} className="font-bold mt-0.5 flex-shrink-0">·</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="space-y-4">
        <h2 className="font-extrabold text-base" style={{ color: NAVY }}>
          Questions fréquentes
        </h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl p-5 space-y-2 border border-gray-100"
              style={{ backgroundColor: "#fafafa" }}
            >
              <p className="font-bold text-sm" style={{ color: NAVY }}>
                {item.q}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.r}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA retour ── */}
      <div className="pt-2 flex flex-wrap gap-4 items-center">
        <Link
          href="/exerceo"
          className="text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: PURPLE }}
        >
          ← Retour à la présentation
        </Link>
        <a
          href="https://exerceo.mixarto.com/inscription"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: PURPLE }}
        >
          Essayer gratuitement
        </a>
      </div>

    </article>
  );
}
