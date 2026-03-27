import type { Exercise, SousDomaine } from "./types";

/* lib/exercises/bank.ts
   Banque d'exercices Exerceo - Français (CP à CM2)
   Version autonome avec :
   - types
   - exercices
   - adaptations par profil
   - fonctions de validation
   - fonction de sélection
*/

export type SchoolClass = "CP" | "CE1" | "CE2" | "CM1" | "CM2";
export type GeneralLevel = "beginner" | "intermediate" | "advanced";
export type LearningProfile =
  | "standard"
  | "lecture_simplifiee"
  | "attention_courte"
  | "progressif"
  | "defi_avance";

export type FrenchSkill =
  | "lecture"
  | "orthographe"
  | "grammaire"
  | "conjugaison"
  | "vocabulaire"
  | "expression_ecrite";

export type ExerciseFormat =
  | "qcm"
  | "fill_in_blank"
  | "word_sort"
  | "sentence_building"
  | "short_answer";

export interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface ExerciseProfileAdaptation {
  profile: LearningProfile;
  instruction?: string;
  reducedChoices?: boolean;
  maxChoices?: number;
  shorterContent?: boolean;
  extraHint?: string;
  splitSteps?: string[];
  challengeExtension?: string;
}

export interface FrenchExercise {
  id: string;
  subject: "francais";
  title: string;
  schoolClass: SchoolClass;
  generalLevel: GeneralLevel;
  skill: FrenchSkill;
  subskill: string;
  format: ExerciseFormat;
  instructions: string;
  prompt: string;
  sentence?: string;
  options?: ExerciseOption[];
  correctAnswer?: string | string[];
  explanation: string;
  hint?: string;
  tags: string[];
  estimatedMinutes: number;
  adaptations: ExerciseProfileAdaptation[];
}

export interface StudentProfile {
  firstName?: string;
  age?: number;
  schoolClass: SchoolClass;
  generalLevel: GeneralLevel;
  learningProfile: LearningProfile;
  strengths?: string[];
  weaknesses?: string[];
}

const DEFAULT_ADAPTATIONS: ExerciseProfileAdaptation[] = [
  { profile: "standard" },
  {
    profile: "lecture_simplifiee",
    instruction: "Lis bien. Fais un petit exercice à la fois.",
    reducedChoices: true,
    maxChoices: 2,
    shorterContent: true,
    extraHint: "Prends ton temps."
  },
  {
    profile: "attention_courte",
    instruction: "Exercice court : trouve vite la bonne réponse.",
    reducedChoices: true,
    maxChoices: 2,
    extraHint: "Concentre-toi sur un seul indice."
  },
  {
    profile: "progressif",
    instruction: "Avance étape par étape.",
    splitSteps: ["Lis.", "Cherche l'indice.", "Réponds."],
    extraHint: "Tu peux relire avant de répondre."
  },
  {
    profile: "defi_avance",
    instruction: "Trouve la bonne réponse, puis fais le petit défi bonus.",
    challengeExtension: "Explique pourquoi ta réponse est correcte."
  }
];

function cloneDefaultAdaptations(
  overrides?: Partial<Record<LearningProfile, Partial<ExerciseProfileAdaptation>>>
): ExerciseProfileAdaptation[] {
  return DEFAULT_ADAPTATIONS.map((base) => ({
    ...base,
    ...(overrides?.[base.profile] ?? {})
  }));
}

export const frenchExercises: FrenchExercise[] = [
  {
    id: "fr-cp-lecture-001",
    subject: "francais",
    title: "Comprendre une phrase simple",
    schoolClass: "CP",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "compréhension de phrase",
    format: "qcm",
    instructions: "Choisis le mot qui complète bien la phrase.",
    prompt: "Le chat boit du ___.",
    options: [
      { id: "a", text: "lait", isCorrect: true },
      { id: "b", text: "cartable", isCorrect: false },
      { id: "c", text: "stylo", isCorrect: false }
    ],
    correctAnswer: "lait",
    explanation: "Le chat peut boire du lait. Les autres mots ne conviennent pas.",
    hint: "Cherche quelque chose que l'on peut boire.",
    tags: ["cp", "lecture", "phrase-simple", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: {
        instruction: "Lis la phrase. Choisis le bon mot.",
        extraHint: "Un chat boit quelque chose."
      },
      defi_avance: {
        challengeExtension: "Écris une autre phrase avec le mot « lait »."
      }
    })
  },
  {
    id: "fr-cp-lecture-002",
    subject: "francais",
    title: "Associer action et sujet",
    schoolClass: "CP",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "compréhension de phrase",
    format: "qcm",
    instructions: "Choisis la bonne fin de phrase.",
    prompt: "La maîtresse écrit au ___.",
    options: [
      { id: "a", text: "tableau", isCorrect: true },
      { id: "b", text: "nuage", isCorrect: false },
      { id: "c", text: "gâteau", isCorrect: false }
    ],
    correctAnswer: "tableau",
    explanation: "Une maîtresse peut écrire au tableau.",
    hint: "Pense à la classe.",
    tags: ["cp", "lecture", "ecole", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cp-orthographe-001",
    subject: "francais",
    title: "son / sont",
    schoolClass: "CP",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux simples",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "___ cartable est bleu.",
    options: [
      { id: "a", text: "Son", isCorrect: true },
      { id: "b", text: "Sont", isCorrect: false }
    ],
    correctAnswer: "Son",
    explanation: "On écrit « son » pour parler du cartable de quelqu'un.",
    hint: "Ici, on parle d'un objet qui appartient à quelqu'un.",
    tags: ["cp", "orthographe", "son-sont", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: "Écris une phrase avec « sont »."
      }
    })
  },
  {
    id: "fr-cp-orthographe-002",
    subject: "francais",
    title: "et / est",
    schoolClass: "CP",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux simples",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Léo ___ Mila jouent.",
    options: [
      { id: "a", text: "et", isCorrect: true },
      { id: "b", text: "est", isCorrect: false }
    ],
    correctAnswer: "et",
    explanation: "« et » relie deux personnes ou deux choses.",
    hint: "On relie deux prénoms.",
    tags: ["cp", "orthographe", "et-est", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      progressif: {
        splitSteps: ["Lis les deux prénoms.", "Cherche le mot qui les relie.", "Choisis."]
      },
      defi_avance: {
        challengeExtension: "Écris une phrase avec « est »."
      }
    })
  },
  {
    id: "fr-cp-grammaire-001",
    subject: "francais",
    title: "Repérer le verbe",
    schoolClass: "CP",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "identifier le verbe",
    format: "qcm",
    instructions: "Choisis le mot qui dit l'action.",
    prompt: "Mina saute.",
    options: [
      { id: "a", text: "Mina", isCorrect: false },
      { id: "b", text: "saute", isCorrect: true }
    ],
    correctAnswer: "saute",
    explanation: "Le verbe dit ce que fait Mina : elle saute.",
    hint: "Cherche l'action.",
    tags: ["cp", "grammaire", "verbe", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cp-vocabulaire-001",
    subject: "francais",
    title: "Trouver le bon mot",
    schoolClass: "CP",
    generalLevel: "beginner",
    skill: "vocabulaire",
    subskill: "vocabulaire courant",
    format: "qcm",
    instructions: "Choisis le mot de l'école.",
    prompt: "Lequel est un objet de la classe ?",
    options: [
      { id: "a", text: "ardoise", isCorrect: true },
      { id: "b", text: "poisson", isCorrect: false },
      { id: "c", text: "montagne", isCorrect: false }
    ],
    correctAnswer: "ardoise",
    explanation: "Une ardoise est un objet utilisé en classe.",
    hint: "Cherche un objet pour apprendre.",
    tags: ["cp", "vocabulaire", "ecole", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cp-conjugaison-001",
    subject: "francais",
    title: "être au présent",
    schoolClass: "CP",
    generalLevel: "beginner",
    skill: "conjugaison",
    subskill: "verbe être au présent",
    format: "fill_in_blank",
    instructions: "Complète avec le bon mot.",
    prompt: "Je ___ content.",
    correctAnswer: "suis",
    explanation: "Avec « je », le verbe être se conjugue « suis ».",
    hint: "Je suis, tu es, il est...",
    tags: ["cp", "conjugaison", "etre", "present"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce1-lecture-001",
    subject: "francais",
    title: "Comprendre une phrase",
    schoolClass: "CE1",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "compréhension explicite",
    format: "qcm",
    instructions: "Lis la phrase puis réponds.",
    prompt: "Tom met son manteau parce qu'il a froid. Pourquoi Tom met-il son manteau ?",
    options: [
      { id: "a", text: "Parce qu'il a froid", isCorrect: true },
      { id: "b", text: "Parce qu'il veut nager", isCorrect: false },
      { id: "c", text: "Parce qu'il dort", isCorrect: false }
    ],
    correctAnswer: "Parce qu'il a froid",
    explanation: "La réponse est donnée dans la phrase.",
    hint: "Relis la fin de la phrase.",
    tags: ["ce1", "lecture", "comprehension", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce1-orthographe-001",
    subject: "francais",
    title: "et / est",
    schoolClass: "CE1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux simples",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Le chat ___ noir.",
    options: [
      { id: "a", text: "et", isCorrect: false },
      { id: "b", text: "est", isCorrect: true }
    ],
    correctAnswer: "est",
    explanation: "On écrit « est » avec le verbe être : le chat est noir.",
    hint: "Peut-on dire « était » ?",
    tags: ["ce1", "orthographe", "et-est", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce1-orthographe-002",
    subject: "francais",
    title: "a / à",
    schoolClass: "CE1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux simples",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Lina ___ un vélo.",
    options: [
      { id: "a", text: "a", isCorrect: true },
      { id: "b", text: "à", isCorrect: false }
    ],
    correctAnswer: "a",
    explanation: "On écrit « a » car c'est le verbe avoir.",
    hint: "Peut-on dire « avait » ?",
    tags: ["ce1", "orthographe", "a-a-grave", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: "Écris une phrase avec « à »."
      }
    })
  },
  {
    id: "fr-ce1-grammaire-001",
    subject: "francais",
    title: "Trouver le sujet",
    schoolClass: "CE1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "identifier le sujet",
    format: "qcm",
    instructions: "Choisis celui qui fait l'action.",
    prompt: "Les enfants chantent.",
    options: [
      { id: "a", text: "Les enfants", isCorrect: true },
      { id: "b", text: "chantent", isCorrect: false }
    ],
    correctAnswer: "Les enfants",
    explanation: "Le sujet est celui qui fait l'action.",
    hint: "Qui chante ?",
    tags: ["ce1", "grammaire", "sujet", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce1-grammaire-002",
    subject: "francais",
    title: "Trouver le verbe",
    schoolClass: "CE1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "identifier le verbe",
    format: "qcm",
    instructions: "Choisis le verbe dans la phrase.",
    prompt: "Lina chante dans la cour.",
    options: [
      { id: "a", text: "Lina", isCorrect: false },
      { id: "b", text: "chante", isCorrect: true },
      { id: "c", text: "cour", isCorrect: false }
    ],
    correctAnswer: "chante",
    explanation: "Le verbe dit ce que fait Lina.",
    hint: "Cherche l'action.",
    tags: ["ce1", "grammaire", "verbe", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce1-conjugaison-001",
    subject: "francais",
    title: "avoir au présent",
    schoolClass: "CE1",
    generalLevel: "beginner",
    skill: "conjugaison",
    subskill: "verbe avoir au présent",
    format: "fill_in_blank",
    instructions: "Complète la phrase.",
    prompt: "Nous ___ une balle.",
    correctAnswer: "avons",
    explanation: "Avec « nous », le verbe avoir se conjugue « avons ».",
    hint: "J'ai, tu as, il a, nous avons...",
    tags: ["ce1", "conjugaison", "avoir", "present"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce1-vocabulaire-001",
    subject: "francais",
    title: "Synonyme simple",
    schoolClass: "CE1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "synonymes",
    format: "qcm",
    instructions: "Choisis le mot qui veut presque dire la même chose.",
    prompt: "Le synonyme de « content » est :",
    options: [
      { id: "a", text: "heureux", isCorrect: true },
      { id: "b", text: "triste", isCorrect: false },
      { id: "c", text: "rapide", isCorrect: false }
    ],
    correctAnswer: "heureux",
    explanation: "« content » et « heureux » ont un sens proche.",
    hint: "Cherche un mot positif.",
    tags: ["ce1", "vocabulaire", "synonymes", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-lecture-001",
    subject: "francais",
    title: "Comprendre une information",
    schoolClass: "CE2",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "compréhension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Léa range ses cahiers dans son sac avant de partir. Que range Léa ?",
    options: [
      { id: "a", text: "Ses cahiers", isCorrect: true },
      { id: "b", text: "Ses chaussures", isCorrect: false },
      { id: "c", text: "Son goûter", isCorrect: false }
    ],
    correctAnswer: "Ses cahiers",
    explanation: "La phrase dit que Léa range ses cahiers.",
    hint: "Relis le début de la phrase.",
    tags: ["ce2", "lecture", "comprehension", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-orthographe-001",
    subject: "francais",
    title: "ces / ses",
    schoolClass: "CE2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "déterminants fréquents",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "___ fleurs sont rouges.",
    options: [
      { id: "a", text: "Ces", isCorrect: true },
      { id: "b", text: "Ses", isCorrect: false }
    ],
    correctAnswer: "Ces",
    explanation: "On écrit « ces » quand on montre ou désigne plusieurs choses.",
    hint: "Peut-on dire « les fleurs-là » ?",
    tags: ["ce2", "orthographe", "ces-ses", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: "Écris une phrase avec « ses »."
      }
    })
  },
  {
    id: "fr-ce2-orthographe-002",
    subject: "francais",
    title: "on / ont",
    schoolClass: "CE2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Ils ___ une surprise.",
    options: [
      { id: "a", text: "on", isCorrect: false },
      { id: "b", text: "ont", isCorrect: true }
    ],
    correctAnswer: "ont",
    explanation: "Avec « ils », on utilise le verbe avoir : ils ont.",
    hint: "Peut-on dire « avaient » ?",
    tags: ["ce2", "orthographe", "on-ont", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-orthographe-003",
    subject: "francais",
    title: "ce / se",
    schoolClass: "CE2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "___ matin, il se lève tôt.",
    options: [
      { id: "a", text: "Ce", isCorrect: true },
      { id: "b", text: "Se", isCorrect: false }
    ],
    correctAnswer: "Ce",
    explanation: "On écrit « ce matin » pour désigner le matin en question.",
    hint: "Peut-on remplacer par « ce jour-là au matin » ?",
    tags: ["ce2", "orthographe", "ce-se", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-grammaire-001",
    subject: "francais",
    title: "Trouver le sujet",
    schoolClass: "CE2",
    generalLevel: "beginner",
    skill: "grammaire",
    subskill: "identifier le sujet",
    format: "qcm",
    instructions: "Choisis le sujet de la phrase.",
    prompt: "Les oiseaux chantent dans l'arbre.",
    options: [
      { id: "a", text: "Les oiseaux", isCorrect: true },
      { id: "b", text: "chantent", isCorrect: false },
      { id: "c", text: "dans l'arbre", isCorrect: false }
    ],
    correctAnswer: "Les oiseaux",
    explanation: "Le sujet est celui qui fait l'action de chanter.",
    hint: "Qui chante ?",
    tags: ["ce2", "grammaire", "sujet", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-grammaire-002",
    subject: "francais",
    title: "Nom ou verbe",
    schoolClass: "CE2",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "nature des mots",
    format: "qcm",
    instructions: "Choisis le verbe.",
    prompt: "Le train arrive vite.",
    options: [
      { id: "a", text: "train", isCorrect: false },
      { id: "b", text: "arrive", isCorrect: true },
      { id: "c", text: "vite", isCorrect: false }
    ],
    correctAnswer: "arrive",
    explanation: "« arrive » est le verbe : c'est l'action.",
    hint: "Cherche ce qui se passe.",
    tags: ["ce2", "grammaire", "verbe", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-conjugaison-001",
    subject: "francais",
    title: "Présent des verbes du 1er groupe",
    schoolClass: "CE2",
    generalLevel: "intermediate",
    skill: "conjugaison",
    subskill: "présent",
    format: "fill_in_blank",
    instructions: "Complète avec le verbe au présent.",
    prompt: "Nous ___ dans la cour. (jouer)",
    correctAnswer: "jouons",
    explanation: "Avec « nous », au présent, on écrit « jouons ».",
    hint: "Je joue, tu joues, il joue, nous jouons...",
    tags: ["ce2", "conjugaison", "present", "1er-groupe"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-vocabulaire-001",
    subject: "francais",
    title: "Synonyme",
    schoolClass: "CE2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "synonymes",
    format: "qcm",
    instructions: "Choisis le synonyme.",
    prompt: "Le synonyme de « joli » est :",
    options: [
      { id: "a", text: "beau", isCorrect: true },
      { id: "b", text: "sale", isCorrect: false },
      { id: "c", text: "dur", isCorrect: false }
    ],
    correctAnswer: "beau",
    explanation: "« joli » et « beau » ont un sens proche.",
    hint: "Cherche un mot proche et positif.",
    tags: ["ce2", "vocabulaire", "synonymes", "qcm"],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-ce2-expression-001",
    subject: "francais",
    title: "Compléter une phrase",
    schoolClass: "CE2",
    generalLevel: "beginner",
    skill: "expression_ecrite",
    subskill: "écrire une phrase simple",
    format: "short_answer",
    instructions: "Complète la phrase avec quelques mots corrects.",
    prompt: "Aujourd'hui, je vois...",
    correctAnswer: "Réponse ouverte validée par critères",
    explanation: "La réponse doit former une phrase simple et correcte.",
    hint: "Tu peux parler de ce que tu vois dans la maison, la rue ou l'école.",
    tags: ["ce2", "expression-ecrite", "phrase", "production"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: {
        instruction: "Écris une petite phrase.",
        extraHint: "Exemple : Aujourd'hui, je vois un chien."
      },
      attention_courte: {
        instruction: "Écris juste une courte phrase."
      },
      defi_avance: {
        challengeExtension: "Ajoute un adjectif dans ta phrase."
      }
    })
  },
  {
    id: "fr-cm1-lecture-001",
    subject: "francais",
    title: "Comprendre une information implicite simple",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "compréhension",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Paul prend un parapluie avant de sortir. Quel temps fait-il probablement ?",
    options: [
      { id: "a", text: "Il pleut", isCorrect: true },
      { id: "b", text: "Il neige dans la maison", isCorrect: false },
      { id: "c", text: "Il fait nuit dans la cuisine", isCorrect: false }
    ],
    correctAnswer: "Il pleut",
    explanation: "On prend souvent un parapluie quand il pleut.",
    hint: "Pense à l'utilité du parapluie.",
    tags: ["cm1", "lecture", "inference", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm1-orthographe-001",
    subject: "francais",
    title: "Accord sujet-verbe",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "accord sujet verbe",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Les enfants ___ dans le parc.",
    options: [
      { id: "a", text: "joue", isCorrect: false },
      { id: "b", text: "jouent", isCorrect: true },
      { id: "c", text: "joues", isCorrect: false }
    ],
    correctAnswer: "jouent",
    explanation: "Le sujet « les enfants » est au pluriel, donc le verbe prend « -ent ».",
    hint: "Le sujet est pluriel.",
    tags: ["cm1", "orthographe", "accord", "verbe", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm1-orthographe-002",
    subject: "francais",
    title: "c'est / s'est",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "___ un très bon film.",
    options: [
      { id: "a", text: "C'est", isCorrect: true },
      { id: "b", text: "S'est", isCorrect: false }
    ],
    correctAnswer: "C'est",
    explanation: "On écrit « c'est » pour dire « cela est ».",
    hint: "Peut-on remplacer par « cela est » ?",
    tags: ["cm1", "orthographe", "cest-sest", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: "Écris une phrase correcte avec « s'est »."
      }
    })
  },
  {
    id: "fr-cm1-grammaire-001",
    subject: "francais",
    title: "Identifier l'adjectif",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "adjectif qualificatif",
    format: "qcm",
    instructions: "Choisis l'adjectif dans la phrase.",
    prompt: "Le petit garçon court vite.",
    options: [
      { id: "a", text: "petit", isCorrect: true },
      { id: "b", text: "garçon", isCorrect: false },
      { id: "c", text: "court", isCorrect: false }
    ],
    correctAnswer: "petit",
    explanation: "« petit » décrit le nom « garçon ».",
    hint: "Cherche le mot qui donne une précision sur le nom.",
    tags: ["cm1", "grammaire", "adjectif", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm1-grammaire-002",
    subject: "francais",
    title: "Nature des mots : déterminant",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "déterminant",
    format: "qcm",
    instructions: "Choisis le déterminant.",
    prompt: "Les chiens courent vite.",
    options: [
      { id: "a", text: "Les", isCorrect: true },
      { id: "b", text: "chiens", isCorrect: false },
      { id: "c", text: "courent", isCorrect: false }
    ],
    correctAnswer: "Les",
    explanation: "Le déterminant accompagne le nom « chiens ».",
    hint: "Cherche le petit mot placé devant le nom.",
    tags: ["cm1", "grammaire", "determinant", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm1-conjugaison-001",
    subject: "francais",
    title: "Imparfait du 1er groupe",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "imparfait",
    format: "fill_in_blank",
    instructions: "Complète avec le verbe à l'imparfait.",
    prompt: "Hier, nous ___ dans le jardin. (jouer)",
    correctAnswer: "jouions",
    explanation: "Avec « nous », à l'imparfait, on écrit « jouions ».",
    hint: "Repère d'abord le sujet : nous.",
    tags: ["cm1", "conjugaison", "imparfait", "1er-groupe"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm1-vocabulaire-001",
    subject: "francais",
    title: "Famille de mots",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "famille de mots",
    format: "qcm",
    instructions: "Choisis le mot de la même famille.",
    prompt: "Le mot de la même famille que « chanter » est :",
    options: [
      { id: "a", text: "chanson", isCorrect: true },
      { id: "b", text: "heureux", isCorrect: false },
      { id: "c", text: "rapide", isCorrect: false }
    ],
    correctAnswer: "chanson",
    explanation: "« chanter » et « chanson » appartiennent à la même famille.",
    hint: "Cherche un mot construit autour de la même idée.",
    tags: ["cm1", "vocabulaire", "famille-de-mots", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm1-expression-001",
    subject: "francais",
    title: "Enrichir une phrase",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "enrichissement de phrase",
    format: "short_answer",
    instructions: "Réécris la phrase avec un adjectif.",
    prompt: "Le chat dort.",
    correctAnswer: "Réponse ouverte validée par critères",
    explanation: "La phrase doit rester correcte et inclure un adjectif.",
    hint: "Exemple : Le petit chat dort.",
    tags: ["cm1", "expression-ecrite", "adjectif", "production"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: {
        instruction: "Ajoute un mot pour décrire le chat.",
        extraHint: "Exemple : Le grand chat dort."
      },
      defi_avance: {
        challengeExtension: "Ajoute aussi un complément de lieu."
      }
    })
  },
  {
    id: "fr-cm2-lecture-001",
    subject: "francais",
    title: "Compréhension et inférence",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inférence",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Sami met sa valise dans le coffre et vérifie son billet. Où va-t-il probablement ?",
    options: [
      { id: "a", text: "En voyage", isCorrect: true },
      { id: "b", text: "Au fond du jardin", isCorrect: false },
      { id: "c", text: "Sous la table", isCorrect: false }
    ],
    correctAnswer: "En voyage",
    explanation: "Une valise et un billet font penser à un départ en voyage.",
    hint: "Regarde les indices : valise + billet.",
    tags: ["cm2", "lecture", "inference", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-orthographe-001",
    subject: "francais",
    title: "Accord sujet-verbe",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "accord sujet verbe",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Les oiseaux ___ dans le ciel.",
    options: [
      { id: "a", text: "vole", isCorrect: false },
      { id: "b", text: "volent", isCorrect: true },
      { id: "c", text: "voles", isCorrect: false }
    ],
    correctAnswer: "volent",
    explanation: "Le sujet « les oiseaux » est au pluriel : on écrit « volent ».",
    hint: "Regarde le nombre du sujet.",
    tags: ["cm2", "orthographe", "accord", "verbe", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-orthographe-002",
    subject: "francais",
    title: "ce / se",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Il ___ lève tôt chaque matin.",
    options: [
      { id: "a", text: "ce", isCorrect: false },
      { id: "b", text: "se", isCorrect: true }
    ],
    correctAnswer: "se",
    explanation: "On écrit « se lève » avec le pronom réfléchi « se ».",
    hint: "Le verbe « se lever » est pronominal.",
    tags: ["cm2", "orthographe", "ce-se", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: "Écris une phrase avec « ce »."
      }
    })
  },
  {
    id: "fr-cm2-orthographe-003",
    subject: "francais",
    title: "où / ou",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Sais-tu ___ il habite ?",
    options: [
      { id: "a", text: "où", isCorrect: true },
      { id: "b", text: "ou", isCorrect: false }
    ],
    correctAnswer: "où",
    explanation: "On écrit « où » quand on parle d'un lieu.",
    hint: "Cherche si la phrase parle d'un endroit.",
    tags: ["cm2", "orthographe", "ou-ou-accent", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-grammaire-001",
    subject: "francais",
    title: "Complément du nom",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "groupes nominaux",
    format: "qcm",
    instructions: "Choisis le complément du nom.",
    prompt: "Le sac de sport est lourd.",
    options: [
      { id: "a", text: "de sport", isCorrect: true },
      { id: "b", text: "Le sac", isCorrect: false },
      { id: "c", text: "lourd", isCorrect: false }
    ],
    correctAnswer: "de sport",
    explanation: "« de sport » complète le nom « sac ».",
    hint: "Cherche le groupe de mots qui précise le nom.",
    tags: ["cm2", "grammaire", "complement-du-nom", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-grammaire-002",
    subject: "francais",
    title: "Reconnaître un pronom personnel",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "pronoms",
    format: "qcm",
    instructions: "Choisis le pronom personnel.",
    prompt: "Ils arrivent bientôt.",
    options: [
      { id: "a", text: "Ils", isCorrect: true },
      { id: "b", text: "arrivent", isCorrect: false },
      { id: "c", text: "bientôt", isCorrect: false }
    ],
    correctAnswer: "Ils",
    explanation: "« Ils » est un pronom personnel sujet.",
    hint: "Cherche le petit mot qui remplace des personnes.",
    tags: ["cm2", "grammaire", "pronom", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-conjugaison-001",
    subject: "francais",
    title: "Futur simple",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "futur simple",
    format: "fill_in_blank",
    instructions: "Complète avec le verbe au futur simple.",
    prompt: "Demain, ils ___ au musée. (aller)",
    correctAnswer: "iront",
    explanation: "Avec « ils », au futur simple, le verbe aller devient « iront ».",
    hint: "Je irai, tu iras, il ira, nous irons...",
    tags: ["cm2", "conjugaison", "futur", "aller"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-conjugaison-002",
    subject: "francais",
    title: "Passé composé simple",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "passé composé",
    format: "fill_in_blank",
    instructions: "Complète avec le verbe au passé composé.",
    prompt: "Hier, nous ___ un gâteau. (manger)",
    correctAnswer: "avons mangé",
    explanation: "Au passé composé avec « nous », on écrit « avons mangé ».",
    hint: "Cherche l'auxiliaire d'abord.",
    tags: ["cm2", "conjugaison", "passe-compose", "manger"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-vocabulaire-001",
    subject: "francais",
    title: "Antonyme",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "antonymes",
    format: "qcm",
    instructions: "Choisis l'antonyme.",
    prompt: "L'antonyme de « commencer » est :",
    options: [
      { id: "a", text: "terminer", isCorrect: true },
      { id: "b", text: "parler", isCorrect: false },
      { id: "c", text: "écouter", isCorrect: false }
    ],
    correctAnswer: "terminer",
    explanation: "« terminer » signifie l'inverse de « commencer ».",
    hint: "Cherche le contraire.",
    tags: ["cm2", "vocabulaire", "antonymes", "qcm"],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },
  {
    id: "fr-cm2-expression-001",
    subject: "francais",
    title: "Enrichir une phrase",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "phrase enrichie",
    format: "short_answer",
    instructions: "Réécris la phrase en ajoutant un adjectif et un complément.",
    prompt: "Le chien court.",
    correctAnswer: "Réponse ouverte validée par critères",
    explanation: "La phrase doit rester correcte et être enrichie avec plus de détails.",
    hint: "Exemple : Le grand chien court dans le parc.",
    tags: ["cm2", "expression-ecrite", "phrase", "production"],
    estimatedMinutes: 4,
    adaptations: cloneDefaultAdaptations({
      attention_courte: {
        instruction: "Ajoute seulement 2 détails.",
        extraHint: "Un adjectif + un lieu."
      },
      progressif: {
        splitSteps: [
          "Ajoute un adjectif pour le chien.",
          "Ajoute un lieu ou un moment.",
          "Relis la phrase."
        ]
      },
      defi_avance: {
        challengeExtension: "Ajoute aussi un complément de temps et remplace « court » par un verbe plus précis."
      }
    })
  },
  {
    id: "fr-cm2-expression-002",
    subject: "francais",
    title: "Écrire une phrase correcte",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "rédaction courte",
    format: "short_answer",
    instructions: "Écris une phrase correcte avec les mots suivants.",
    prompt: "Mots : jardin / jouer / enfants",
    correctAnswer: "Réponse ouverte validée par critères",
    explanation: "La réponse doit contenir les mots demandés dans une phrase correcte.",
    hint: "Exemple possible : Les enfants jouent dans le jardin.",
    tags: ["cm2", "expression-ecrite", "redaction", "production"],
    estimatedMinutes: 4,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: {
        instruction: "Écris une phrase avec ces 3 mots.",
        extraHint: "Tu peux changer un peu le verbe pour l'accorder."
      },
      defi_avance: {
        challengeExtension: "Écris une deuxième phrase au passé."
      }
    })
  }
];

/* =========================
   VALIDATION
========================= */

export interface ExerciseValidationResult {
  exerciseId: string;
  valid: boolean;
  errors: string[];
}

export function validateFrenchExercise(exercise: FrenchExercise): ExerciseValidationResult {
  const errors: string[] = [];

  if (!exercise.id) errors.push("id manquant");
  if (!exercise.title) errors.push("title manquant");
  if (!exercise.subject || exercise.subject !== "francais") {
    errors.push("subject invalide");
  }
  if (!exercise.schoolClass) errors.push("schoolClass manquant");
  if (!exercise.generalLevel) errors.push("generalLevel manquant");
  if (!exercise.skill) errors.push("skill manquant");
  if (!exercise.format) errors.push("format manquant");
  if (!exercise.instructions) errors.push("instructions manquantes");
  if (!exercise.prompt) errors.push("prompt manquant");
  if (!exercise.explanation) errors.push("explanation manquante");

  if (exercise.format === "qcm") {
    if (!exercise.options || exercise.options.length < 2) {
      errors.push("QCM sans options suffisantes");
    } else {
      const correctOptions = exercise.options.filter((o) => o.isCorrect);
      if (correctOptions.length !== 1) {
        errors.push("QCM invalide : il doit y avoir exactement une seule bonne réponse");
      }
      const optionTexts = new Set<string>();
      for (const option of exercise.options) {
        if (!option.text?.trim()) errors.push(`Option vide dans ${exercise.id}`);
        const normalized = option.text.trim().toLowerCase();
        if (optionTexts.has(normalized)) {
          errors.push(`Options dupliquées dans ${exercise.id}`);
        }
        optionTexts.add(normalized);
      }
      if (typeof exercise.correctAnswer === "string") {
        const exists = exercise.options.some(
          (o) => o.text.trim().toLowerCase() === exercise.correctAnswer!.toString().trim().toLowerCase()
        );
        if (!exists) {
          errors.push("correctAnswer n'est pas présent dans les options");
        }
      }
    }
  }

  if (exercise.format === "fill_in_blank") {
    if (!exercise.correctAnswer || typeof exercise.correctAnswer !== "string") {
      errors.push("fill_in_blank sans correctAnswer texte");
    }
  }

  if (exercise.format === "short_answer") {
    if (!exercise.correctAnswer) {
      errors.push("short_answer sans correctAnswer indicatif");
    }
  }

  return {
    exerciseId: exercise.id,
    valid: errors.length === 0,
    errors
  };
}

export function validateFrenchBank(exercises: FrenchExercise[]): ExerciseValidationResult[] {
  return exercises.map(validateFrenchExercise);
}

export function getFrenchBankValidationSummary(exercises: FrenchExercise[]) {
  const results = validateFrenchBank(exercises);
  const invalid = results.filter((r) => !r.valid);
  return {
    total: results.length,
    valid: results.length - invalid.length,
    invalid: invalid.length,
    invalidExercises: invalid
  };
}

/* =========================
   SÉLECTION
========================= */

function normalizeList(values?: string[]): string[] {
  return (values ?? []).map((v) => v.trim().toLowerCase());
}

function matchesLevel(exerciseLevel: GeneralLevel, profileLevel: GeneralLevel): boolean {
  if (profileLevel === "beginner") {
    return exerciseLevel === "beginner";
  }
  if (profileLevel === "intermediate") {
    return exerciseLevel === "beginner" || exerciseLevel === "intermediate";
  }
  return true;
}

function chooseOptionsForProfile(
  options: ExerciseOption[] | undefined,
  adaptation?: ExerciseProfileAdaptation
): ExerciseOption[] | undefined {
  if (!options) return options;
  if (!adaptation?.reducedChoices || !adaptation.maxChoices) return options;

  const correct = options.find((o) => o.isCorrect);
  const incorrect = options.filter((o) => !o.isCorrect);

  if (!correct) return options;

  const selectedIncorrect = incorrect.slice(0, Math.max(0, adaptation.maxChoices - 1));
  return [correct, ...selectedIncorrect];
}

function personalizeText(text: string, profile: StudentProfile): string {
  if (!profile.firstName) return text;
  return text.replace(/\bEmma\b/g, profile.firstName);
}

export function getFrenchExercises(params: {
  profile: StudentProfile;
  skill?: FrenchSkill;
  limit?: number;
}): FrenchExercise[] {
  const { profile, skill, limit = 5 } = params;
  const strengths = normalizeList(profile.strengths);
  const weaknesses = normalizeList(profile.weaknesses);

  let filtered = frenchExercises.filter((exercise) => {
    return (
      exercise.subject === "francais" &&
      exercise.schoolClass === profile.schoolClass &&
      matchesLevel(exercise.generalLevel, profile.generalLevel) &&
      (!skill || exercise.skill === skill)
    );
  });

  filtered = filtered.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (weaknesses.includes("français") || weaknesses.includes("francais")) {
      if (a.generalLevel === "beginner") scoreA += 2;
      if (b.generalLevel === "beginner") scoreB += 2;
    }

    if (strengths.includes("français") || strengths.includes("francais")) {
      if (a.generalLevel === "advanced") scoreA += 1;
      if (b.generalLevel === "advanced") scoreB += 1;
    }

    if (profile.learningProfile === "attention_courte") {
      if (a.estimatedMinutes <= 2) scoreA += 2;
      if (b.estimatedMinutes <= 2) scoreB += 2;
    }

    if (profile.learningProfile === "progressif") {
      if (a.format === "fill_in_blank" || a.format === "qcm") scoreA += 1;
      if (b.format === "fill_in_blank" || b.format === "qcm") scoreB += 1;
    }

    if (profile.learningProfile === "defi_avance") {
      if (a.generalLevel === "advanced") scoreA += 2;
      if (b.generalLevel === "advanced") scoreB += 2;
    }

    return scoreB - scoreA;
  });

  return filtered.slice(0, limit).map((exercise) => {
    const adaptation = exercise.adaptations.find(
      (a) => a.profile === profile.learningProfile
    );

    return {
      ...exercise,
      instructions: personalizeText(adaptation?.instruction || exercise.instructions, profile),
      prompt: personalizeText(exercise.prompt, profile),
      hint: adaptation?.extraHint || exercise.hint,
      options: chooseOptionsForProfile(exercise.options, adaptation)
    };
  });
}

/* =========================
   COMPATIBILITÉ APP (Exercise[])
========================= */

const SKILL_TO_SOUS_DOMAINE: Record<FrenchSkill, SousDomaine> = {
  lecture:           "lecture",
  orthographe:       "orthographe",
  grammaire:         "grammaire",
  conjugaison:       "conjugaison",
  vocabulaire:       "vocabulaire",
  expression_ecrite: "expression_ecrite",
};

function mapToExercise(e: FrenchExercise): Exercise | null {
  if (e.format !== "qcm" || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id:            e.id,
    matiere:       "francais",
    sous_domaine:  SKILL_TO_SOUS_DOMAINE[e.skill],
    notion:        e.subskill,
    niveau:        e.schoolClass,
    type:          "qcm",
    consigne:      e.instructions,
    question:      e.prompt,
    options:       e.options.map((o) => o.text),
    bonne_reponse: correctOption.text,
    explication:   e.explanation,
  };
}

export const EXERCISE_BANK: Exercise[] = frenchExercises
  .map(mapToExercise)
  .filter((e): e is Exercise => e !== null);

/* =========================
   EXPORT PAR DÉFAUT
========================= */

const bank = frenchExercises;
export default bank;