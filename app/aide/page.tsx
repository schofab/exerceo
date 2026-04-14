import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Questions fréquentes — exerceō",
  description:
    "Toutes les réponses aux questions fréquentes sur Exerceo : tarifs, fonctionnement, matières disponibles, profils enfants et plus encore.",
};

const NAVY   = "#071453";
const PURPLE = "#748bf7";

const FAQ: { question: string; reponse: React.ReactNode }[] = [
  {
    question: "Combien coûte Exerceo et que comprend le prix ?",
    reponse: (
      <>
        <p>Exerceo est disponible en deux formules :</p>
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
          <li>
            <strong>Gratuit — 0 €</strong> : 1 profil enfant, 3 sessions pour
            découvrir l'application, accès à toutes les matières et aux
            récompenses Doceo.
          </li>
          <li>
            <strong>Premium — 19 € une seule fois</strong> : enfants illimités,
            sessions illimitées, accès à vie sans abonnement.{" "}
            <span style={{ color: PURPLE }} className="font-semibold">
              Offre de lancement : 19 € au lieu de 29 €.
            </span>
          </li>
        </ul>
        <p className="mt-2">
          Aucun abonnement, aucune reconduction automatique. Vous payez une fois
          et c'est pour toujours.
        </p>
      </>
    ),
  },
  {
    question: "Pourquoi ce tarif ?",
    reponse: (
      <>
        <p>
          Exerceo est développé et maintenu de façon indépendante, sans
          investisseurs ni modèle publicitaire. Le prix unique de 19 € couvre
          les coûts d'infrastructure (hébergement, base de données, API
          d'intelligence artificielle) et permet à l'application d'exister
          durablement.
        </p>
        <p className="mt-2">
          Pas de données revendues, pas de publicité ciblée. Votre enfant
          utilise une application qui ne vit que de ce que vous avez payé.
        </p>
      </>
    ),
  },
  {
    question: "Exerceo remplace-t-il un enseignant ou des cours particuliers ?",
    reponse: (
      <p>
        Non. Exerceo est un outil de consolidation et d'entraînement à la
        maison, pas un substitut à l'enseignement scolaire. Il permet à votre
        enfant de revoir régulièrement les notions vues en classe, à son rythme
        et de façon ludique. Pour des besoins spécifiques ou des difficultés
        importantes, l'accompagnement d'un enseignant ou d'un tuteur reste
        indispensable.
      </p>
    ),
  },
  {
    question: "Exerceo suit-il exactement le programme de la classe de mon enfant ?",
    reponse: (
      <p>
        Les exercices générés s'appuient sur le programme officiel de
        l'Éducation Nationale pour chaque niveau, du CP au CM2. Ils sont
        adaptés à la classe et aux matières sélectionnées. Cependant, chaque
        enseignant avançant à son propre rythme, certaines notions peuvent être
        abordées légèrement en avance ou en décalage par rapport au cours de la
        semaine. Exerceo est conçu pour consolider les acquis, pas pour
        anticiper systématiquement les leçons à venir.
      </p>
    ),
  },
  {
    question: "Puis-je utiliser Exerceo pour plusieurs enfants ?",
    reponse: (
      <p>
        Avec le compte gratuit, vous pouvez créer <strong>1 profil enfant</strong>.
        Avec le compte Premium (19 € une fois), vous pouvez créer{" "}
        <strong>autant de profils que vous le souhaitez</strong> — pratique pour
        les familles avec plusieurs enfants à des niveaux différents.
      </p>
    ),
  },
  {
    question: "Combien de temps dure une séance ?",
    reponse: (
      <>
        <p>
          Vous choisissez la durée avant chaque session : 5, 10, 15 ou 20
          minutes. Le nombre d'exercices s'adapte :
        </p>
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
          <li>5 min → 3 exercices</li>
          <li>10 min → 6 exercices</li>
          <li>15 min → 9 exercices</li>
          <li>20 min → 12 exercices</li>
        </ul>
        <p className="mt-2">
          L'objectif est de proposer des sessions courtes et régulières, sans
          surcharger l'enfant.
        </p>
      </>
    ),
  },
  {
    question: "Mon enfant n'aime pas les devoirs. Est-ce que ça va lui convenir ?",
    reponse: (
      <p>
        Exerceo est pensé pour rendre l'entraînement moins contraignant. Les
        sessions sont courtes, les exercices variés, et un système de
        récompenses (étoiles, créatures Doceo à collectionner) donne à l'enfant
        une motivation concrète au-delà de la note. Bien sûr, chaque enfant est
        différent — c'est pourquoi les 3 sessions gratuites permettent de tester
        l'adhésion avant tout engagement.
      </p>
    ),
  },
  {
    question: "Faut-il être à côté de l'enfant pendant les exercices ?",
    reponse: (
      <p>
        Ce n'est pas obligatoire, mais c'est recommandé pour les plus jeunes
        (CP, CE1). La session se lance depuis le compte parent, et l'enfant
        répond aux exercices à l'écran. Pour les grands (CM1, CM2), une fois
        la session lancée, ils peuvent s'exercer en autonomie. Les corrections
        et explications s'affichent directement dans l'application.
      </p>
    ),
  },
  {
    question: "Quelles classes et matières sont disponibles ?",
    reponse: (
      <>
        <p>
          Exerceo couvre toutes les classes du primaire :
          <strong> CP, CE1, CE2, CM1 et CM2</strong>.
        </p>
        <p className="mt-2">Les matières disponibles selon le niveau :</p>
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
          <li>
            <strong>Cycle 2 (CP, CE1, CE2)</strong> : Mathématiques, Français,
            Questionner le monde, Anglais
          </li>
          <li>
            <strong>Cycle 3 (CM1, CM2)</strong> : Mathématiques, Français,
            Sciences et technologie, Histoire-Géographie, Anglais
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Pourquoi les exercices varient-ils d'une session à l'autre ?",
    reponse: (
      <p>
        Chaque session est générée à la volée par intelligence artificielle en
        tenant compte du profil de l'enfant (classe, niveau, points forts,
        lacunes) et des matières sélectionnées. Cela garantit des exercices
        toujours nouveaux et adaptés, sans répétition mécanique. La variété
        fait partie du processus d'apprentissage.
      </p>
    ),
  },
  {
    question: "Peut-on choisir plusieurs matières pour une même session ?",
    reponse: (
      <p>
        Oui. Lors de la création d'une session, vous sélectionnez les matières
        que vous souhaitez travailler. Le nombre de matières sélectionnables
        dépend de la durée choisie (par exemple, une session de 5 minutes
        génère 3 exercices, donc au maximum 3 matières différentes).
      </p>
    ),
  },
  {
    question: "À qui s'adresse Exerceo ?",
    reponse: (
      <p>
        Exerceo s'adresse aux parents d'enfants scolarisés en primaire (du CP
        au CM2) qui souhaitent proposer un entraînement régulier et adapté à
        la maison. L'application est pensée pour des sessions du soir ou du
        week-end, en complément de la scolarité classique.
      </p>
    ),
  },
];

export default function AidePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Header Exerceo ── */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="flex flex-col items-start gap-0.5">
            <Link href="/accueil" className="inline-flex">
              <Image src="/icons/Logo-exerceo.svg" alt="exerceō" width={130} height={34} priority />
            </Link>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-medium leading-none" style={{ color: NAVY }}>par</span>
              <Link href="https://mixarto.com" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Image src="/icons/Logo-mixarto.svg" alt="mixarto" width={48} height={12} priority />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/connexion"
              className="text-sm font-semibold px-3 py-1.5 rounded-xl border transition-colors hover:bg-gray-50"
              style={{ color: NAVY, borderColor: "#e0e7ff" }}
            >
              Se connecter
            </Link>
            <Link
              href="/inscription"
              className="text-sm font-semibold px-3 py-1.5 rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: PURPLE }}
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </header>

      {/* ── Contenu ── */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-10 space-y-10">

        {/* En-tête */}
        <div className="space-y-3">
          <Link
            href="/accueil"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: PURPLE }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-extrabold" style={{ color: NAVY }}>
            Questions fréquentes
          </h1>
          <p className="text-base text-gray-500 leading-relaxed">
            Tout ce que vous devez savoir avant de commencer, ou pour mieux
            comprendre comment fonctionne Exerceo.
          </p>
        </div>

        {/* Liste Q&A */}
        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 p-5 space-y-3"
              style={{ backgroundColor: "#f8f9ff" }}
            >
              <h2 className="text-base font-bold leading-snug" style={{ color: NAVY }}>
                {item.question}
              </h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                {item.reponse}
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas de page */}
        <div
          className="rounded-3xl p-7 text-center space-y-4"
          style={{ backgroundColor: "#eef1ff" }}
        >
          <p className="text-lg font-extrabold" style={{ color: NAVY }}>
            Une question sans réponse ?
          </p>
          <p className="text-sm text-gray-500">
            Contactez-nous, nous répondons sous 24 h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: PURPLE }}
            >
              Nous contacter
            </Link>
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-bold text-sm border-2 transition-colors hover:bg-white"
              style={{ color: NAVY, borderColor: "#e0e7ff" }}
            >
              Essayer gratuitement
            </Link>
          </div>
          <p className="text-xs text-gray-400">
            3 sessions offertes · Sans carte bancaire
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
