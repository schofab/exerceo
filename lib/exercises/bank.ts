import type { Exercise, SousDomaine } from './types';

/* =====================================================================
   TYPES GÉNÉRAUX
===================================================================== */

export type SchoolClass = 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2';

export type GeneralLevel = 'beginner' | 'intermediate' | 'advanced';

export type FrenchSkill =
  | 'lecture'
  | 'orthographe'
  | 'grammaire'
  | 'conjugaison'
  | 'vocabulaire'
  | 'expression_ecrite';

export interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export type LearningProfile =
  | 'standard'
  | 'lecture_simplifiee'
  | 'attention_courte'
  | 'progressif'
  | 'defi_avance';

export interface ExerciseProfileAdaptation {
  profile: LearningProfile;
  instruction?: string;
  extraHint?: string;
  reducedChoices?: boolean;
  maxChoices?: number;
  challengeExtension?: string;
}

export interface FrenchExercise {
  id: string;
  subject: 'francais';
  title: string;
  schoolClass: SchoolClass;
  generalLevel: GeneralLevel;
  skill: FrenchSkill;
  subskill: string;
  format: 'qcm' | 'fill_in_blank' | 'short_answer';
  instructions: string;
  prompt: string;
  options?: ExerciseOption[];
  correctAnswer?: string | string[];
  explanation: string;
  hint?: string;
  tags?: string[];
  estimatedMinutes: number;
  adaptations: ExerciseProfileAdaptation[];
}

/* Profil élève (utilisé dans getFrenchExercises) */

export interface StudentProfile {
  firstName?: string;
  schoolClass: SchoolClass;
  generalLevel: GeneralLevel;
  learningProfile: LearningProfile;
  strengths?: string[];
  weaknesses?: string[];
}

/* Type Exercise de l’app principale */

export interface Exercise {
  id: string;
  matiere: 'francais';
  sous_domaine: SousDomaine;
  notion: string;
  niveau: SchoolClass;
  type: 'qcm';
  consigne: string;
  question: string;
  options: string[];
  bonne_reponse: string;
  explication: string;
}

/* =========================
   SOUS-DOMAINES APP
========================= */

export type SousDomaine =
  | 'lecture'
  | 'orthographe'
  | 'grammaire'
  | 'conjugaison'
  | 'vocabulaire'
  | 'expression_ecrite';

/* =========================
   ADAPTATIONS PAR DÉFAUT
========================= */

const DEFAULT_ADAPTATIONS: ExerciseProfileAdaptation[] = [
  {
    profile: 'standard',
  },
  {
    profile: 'lecture_simplifiee',
    instruction: 'Lis bien la phrase puis réponds.',
    extraHint: "Prends ton temps, tu peux relire plusieurs fois.",
    reducedChoices: true,
    maxChoices: 2,
  },
  {
    profile: 'attention_courte',
    instruction: 'Lis vite la phrase et choisis ta réponse.',
    extraHint: 'Concentre-toi sur les mots importants.',
    reducedChoices: true,
    maxChoices: 3,
  },
  {
    profile: 'progressif',
    extraHint: 'Cherche les indices dans la phrase.',
  },
  {
    profile: 'defi_avance',
    extraHint: 'Explique ensuite ta réponse à l’oral.',
  },
];

function cloneDefaultAdaptations(
  overrides?: Partial<Record<LearningProfile, Partial<ExerciseProfileAdaptation>>>
): ExerciseProfileAdaptation[] {
  if (!overrides) return DEFAULT_ADAPTATIONS.map((a) => ({ ...a }));
  return DEFAULT_ADAPTATIONS.map((a) => {
    const o = overrides[a.profile];
    return o ? { ...a, ...o, profile: a.profile } : { ...a };
  });
}

/* =====================================================================
   BANQUE D’EXERCICES FRANÇAIS
   (CP + CE1 + CE2, QCM uniquement pour compatibilité EXERCISE_BANK)
===================================================================== */

export const frenchExercises: FrenchExercise[] = [
  /* =====================================================================
     CP — LECTURE (fr-cp-lecture-001 à 008)
  ===================================================================== */
  {
    id: 'fr-cp-lecture-001',
    subject: 'francais',
    title: 'Que range Léa ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt:
      'Léa range ses cahiers dans son sac avant de partir. Que range Léa ?',
    options: [
      { id: 'a', text: 'Ses cahiers', isCorrect: true },
      { id: 'b', text: 'Ses chaussures', isCorrect: false },
      { id: 'c', text: 'Son goûter', isCorrect: false },
    ],
    correctAnswer: 'Ses cahiers',
    explanation: 'La phrase précise que Léa range ses cahiers.',
    hint: 'Cherche l’objet que Léa met dans son sac.',
    tags: ['cp', 'lecture', 'comprehension', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-lecture-002',
    subject: 'francais',
    title: 'Pourquoi Tom met-il son manteau ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension explicite',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      "Tom met son manteau parce qu’il a froid. Pourquoi Tom met-il son manteau ?",
    options: [
      { id: 'a', text: 'Parce qu’il a froid', isCorrect: true },
      { id: 'b', text: 'Parce qu’il veut nager', isCorrect: false },
      { id: 'c', text: 'Parce qu’il dort', isCorrect: false },
    ],
    correctAnswer: 'Parce qu’il a froid',
    explanation: 'La phrase donne la raison : Tom a froid.',
    hint: 'Cherche les mots après « parce que ».',
    tags: ['cp', 'lecture', 'comprehension', 'meteo', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-lecture-003',
    subject: 'francais',
    title: 'Qui fait l’action ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis la phrase et réponds.',
    prompt: 'Le chien court dans le jardin. Qui court ?',
    options: [
      { id: 'a', text: 'Le chien', isCorrect: true },
      { id: 'b', text: 'Le jardin', isCorrect: false },
      { id: 'c', text: 'La fleur', isCorrect: false },
    ],
    correctAnswer: 'Le chien',
    explanation: 'La phrase dit que c’est le chien qui court.',
    hint: 'Cherche qui fait l’action.',
    tags: ['cp', 'lecture', 'sujet', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-lecture-004',
    subject: 'francais',
    title: 'Où se passe l’action ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du lieu',
    format: 'qcm',
    instructions: 'Lis la phrase et réponds.',
    prompt: 'Nina mange à la cantine. Où mange Nina ?',
    options: [
      { id: 'a', text: 'Dans la cour', isCorrect: false },
      { id: 'b', text: 'À la cantine', isCorrect: true },
      { id: 'c', text: 'Dans le bus', isCorrect: false },
    ],
    correctAnswer: 'À la cantine',
    explanation: 'La phrase dit que Nina mange à la cantine.',
    hint: 'Relis la fin de la phrase.',
    tags: ['cp', 'lecture', 'lieu', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-lecture-005',
    subject: 'francais',
    title: 'Choisir la bonne fin de phrase',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension de phrase',
    format: 'qcm',
    instructions: 'Choisis la bonne fin de phrase.',
    prompt: 'Le soleil brille dans le ___.',
    options: [
      { id: 'a', text: 'ciel', isCorrect: true },
      { id: 'b', text: 'tiroir', isCorrect: false },
      { id: 'c', text: 'manteau', isCorrect: false },
    ],
    correctAnswer: 'ciel',
    explanation: 'Le soleil brille dans le ciel.',
    hint: 'Regarde en l’air.',
    tags: ['cp', 'lecture', 'phrase-simple', 'nature', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-lecture-006',
    subject: 'francais',
    title: 'Ce que fait le personnage',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension de phrase',
    format: 'qcm',
    instructions: 'Lis la phrase et réponds.',
    prompt: 'Papa lit un livre. Que fait papa ?',
    options: [
      { id: 'a', text: 'Il dort', isCorrect: false },
      { id: 'b', text: 'Il lit', isCorrect: true },
      { id: 'c', text: 'Il court', isCorrect: false },
    ],
    correctAnswer: 'Il lit',
    explanation: 'La phrase dit que papa lit un livre.',
    hint: 'Cherche l’action de papa.',
    tags: ['cp', 'lecture', 'maison', 'famille', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-lecture-007',
    subject: 'francais',
    title: 'L’objet de la phrase',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension de phrase',
    format: 'qcm',
    instructions: 'Lis la phrase et réponds.',
    prompt: 'Léo mange une pomme. Que mange Léo ?',
    options: [
      { id: 'a', text: 'Une orange', isCorrect: false },
      { id: 'b', text: 'Une pomme', isCorrect: true },
      { id: 'c', text: 'Un gâteau', isCorrect: false },
    ],
    correctAnswer: 'Une pomme',
    explanation: 'La phrase dit que Léo mange une pomme.',
    hint: 'Cherche ce que Léo mange.',
    tags: ['cp', 'lecture', 'nourriture', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-lecture-008',
    subject: 'francais',
    title: 'Associer phrase et image',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'association phrase-image',
    format: 'qcm',
    instructions: 'Choisis la phrase qui correspond.',
    prompt:
      'Un oiseau chante sur une branche. Laquelle de ces phrases dit la même chose ?',
    options: [
      { id: 'a', text: 'L’oiseau est dans le nid', isCorrect: false },
      { id: 'b', text: 'L’oiseau chante sur une branche', isCorrect: true },
      { id: 'c', text: 'L’oiseau vole dans le ciel', isCorrect: false },
    ],
    correctAnswer: 'L’oiseau chante sur une branche',
    explanation:
      'La phrase parle d’un oiseau qui chante sur une branche.',
    hint: 'Cherche l’action et le lieu.',
    tags: ['cp', 'lecture', 'nature', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CP — ORTHOGRAPHE (fr-cp-orthographe-001 à 008)
  ===================================================================== */
  {
    id: 'fr-cp-orthographe-001',
    subject: 'francais',
    title: 'Le chat est noir',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'et/est',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Le chat ___ noir.',
    options: [
      { id: 'a', text: 'et', isCorrect: false },
      { id: 'b', text: 'est', isCorrect: true },
    ],
    correctAnswer: 'est',
    explanation: 'On utilise « est » pour le verbe être : le chat est noir.',
    hint: 'Remplace par « était » pour vérifier.',
    tags: ['cp', 'orthographe', 'et-est', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-orthographe-002',
    subject: 'francais',
    title: 'Lina a un vélo',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'a/à',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lina ___ un vélo.',
    options: [
      { id: 'a', text: 'a', isCorrect: true },
      { id: 'b', text: 'à', isCorrect: false },
    ],
    correctAnswer: 'a',
    explanation:
      'On écrit « a » sans accent pour le verbe avoir : Lina a un vélo.',
    hint: 'Remplace par « avait » pour vérifier.',
    tags: ['cp', 'orthographe', 'a-a-accent', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-orthographe-003',
    subject: 'francais',
    title: 'un ou une ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'déterminants un/une',
    format: 'qcm',
    instructions: 'Choisis le bon déterminant.',
    prompt: '___ chien aboie.',
    options: [
      { id: 'a', text: 'Un', isCorrect: true },
      { id: 'b', text: 'Une', isCorrect: false },
    ],
    correctAnswer: 'Un',
    explanation: '« chien » est masculin, on dit « un chien ».',
    hint: 'Chien est masculin ou féminin ?',
    tags: ['cp', 'orthographe', 'determinants', 'un-une', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-orthographe-004',
    subject: 'francais',
    title: 'le ou la ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'déterminants le/la',
    format: 'qcm',
    instructions: 'Choisis le bon déterminant.',
    prompt: '___ maison est grande.',
    options: [
      { id: 'a', text: 'Le', isCorrect: false },
      { id: 'b', text: 'La', isCorrect: true },
    ],
    correctAnswer: 'La',
    explanation: '« maison » est féminin, on dit « la maison ».',
    hint: 'Maison est masculin ou féminin ?',
    tags: ['cp', 'orthographe', 'determinants', 'le-la', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-orthographe-005',
    subject: 'francais',
    title: 'un ou une ? (2)',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'déterminants un/une',
    format: 'qcm',
    instructions: 'Choisis le bon déterminant.',
    prompt: '___ fleur est jolie.',
    options: [
      { id: 'a', text: 'Un', isCorrect: false },
      { id: 'b', text: 'Une', isCorrect: true },
    ],
    correctAnswer: 'Une',
    explanation: '« fleur » est féminin, on dit « une fleur ».',
    hint: 'Fleur est masculin ou féminin ?',
    tags: ['cp', 'orthographe', 'determinants', 'un-une', 'nature', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-orthographe-006',
    subject: 'francais',
    title: 'Le pluriel en -s',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'pluriel en -s simple',
    format: 'qcm',
    instructions: 'Choisis la bonne orthographe au pluriel.',
    prompt: 'Plusieurs chat… Comment écrit-on ?',
    options: [
      { id: 'a', text: 'des chats', isCorrect: true },
      { id: 'b', text: 'des chat', isCorrect: false },
    ],
    correctAnswer: 'des chats',
    explanation: 'Au pluriel, on ajoute un -s à la fin du mot.',
    hint: 'Au pluriel, le mot change à la fin.',
    tags: ['cp', 'orthographe', 'pluriel', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: 'Écris deux autres noms au pluriel.',
      },
    }),
  },
  {
    id: 'fr-cp-orthographe-007',
    subject: 'francais',
    title: 'mon ou ma ?',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'ma/mon/mes',
    format: 'qcm',
    instructions: 'Choisis le bon déterminant.',
    prompt: '___ cartable est lourd.',
    options: [
      { id: 'a', text: 'Mon', isCorrect: true },
      { id: 'b', text: 'Ma', isCorrect: false },
    ],
    correctAnswer: 'Mon',
    explanation: '« cartable » est masculin, on dit « mon cartable ».',
    hint: 'Est-ce masculin ou féminin ?',
    tags: ['cp', 'orthographe', 'ma-mon-mes', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-orthographe-008',
    subject: 'francais',
    title: 'ma ou mon ?',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'ma/mon/mes',
    format: 'qcm',
    instructions: 'Choisis le bon déterminant.',
    prompt: '___ chambre est rangée.',
    options: [
      { id: 'a', text: 'Mon', isCorrect: false },
      { id: 'b', text: 'Ma', isCorrect: true },
    ],
    correctAnswer: 'Ma',
    explanation: '« chambre » est féminin, on dit « ma chambre ».',
    hint: 'Est-ce masculin ou féminin ?',
    tags: ['cp', 'orthographe', 'ma-mon-mes', 'maison', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CP — GRAMMAIRE (fr-cp-grammaire-001 à 008)
  ===================================================================== */
  {
    id: 'fr-cp-grammaire-001',
    subject: 'francais',
    title: "Choisir celui qui fait l'action",
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'sujet',
    format: 'qcm',
    instructions: "Choisis celui qui fait l'action.",
    prompt: 'Les enfants chantent.',
    options: [
      { id: 'a', text: 'Les enfants', isCorrect: true },
      { id: 'b', text: 'chantent', isCorrect: false },
    ],
    correctAnswer: 'Les enfants',
    explanation: 'Le sujet est « Les enfants », ce sont eux qui chantent.',
    hint: 'Qui fait l’action de chanter ?',
    tags: ['cp', 'grammaire', 'sujet', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-grammaire-002',
    subject: 'francais',
    title: 'Reconnaître un nom',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'reconnaître un nom',
    format: 'qcm',
    instructions: 'Choisis le nom dans la phrase.',
    prompt: 'La poule picore.',
    options: [
      { id: 'a', text: 'poule', isCorrect: true },
      { id: 'b', text: 'picore', isCorrect: false },
    ],
    correctAnswer: 'poule',
    explanation: '« poule » est un nom, il désigne un animal.',
    hint: 'Un nom désigne une chose ou un être vivant.',
    tags: ['cp', 'grammaire', 'nom', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-grammaire-003',
    subject: 'francais',
    title: 'Trouver le verbe',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'reconnaître un verbe',
    format: 'qcm',
    instructions: "Choisis le verbe (l'action) dans la phrase.",
    prompt: 'Le lapin mange une carotte.',
    options: [
      { id: 'a', text: 'lapin', isCorrect: false },
      { id: 'b', text: 'mange', isCorrect: true },
      { id: 'c', text: 'carotte', isCorrect: false },
    ],
    correctAnswer: 'mange',
    explanation: 'Le verbe dit ce que fait le lapin : il mange.',
    hint: 'Cherche l’action.',
    tags: ['cp', 'grammaire', 'verbe', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-grammaire-004',
    subject: 'francais',
    title: 'Masculin ou féminin ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'masculin/féminin',
    format: 'qcm',
    instructions: 'Choisis le bon déterminant.',
    prompt: '___ vélo est rouge.',
    options: [
      { id: 'a', text: 'Le', isCorrect: true },
      { id: 'b', text: 'La', isCorrect: false },
    ],
    correctAnswer: 'Le',
    explanation: '« vélo » est masculin, on dit « le vélo ».',
    hint: 'Dis-le à voix haute : le vélo ou la vélo ?',
    tags: ['cp', 'grammaire', 'masculin-feminin', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-grammaire-005',
    subject: 'francais',
    title: 'Singulier ou pluriel ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'singulier/pluriel',
    format: 'qcm',
    instructions: 'Ce mot est-il au singulier ou au pluriel ?',
    prompt: 'des crayons',
    options: [
      { id: 'a', text: 'Singulier', isCorrect: false },
      { id: 'b', text: 'Pluriel', isCorrect: true },
    ],
    correctAnswer: 'Pluriel',
    explanation: '« des crayons » parle de plusieurs crayons : c’est le pluriel.',
    hint: 'Y a-t-il un ou plusieurs crayons ?',
    tags: ['cp', 'grammaire', 'singulier-pluriel', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-grammaire-006',
    subject: 'francais',
    title: "C'est un nom ou un verbe ?",
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions:
      'Choisis : le mot souligné est un nom ou un verbe ?',
    prompt: 'La fille joue. — Quelle est la nature du mot « joue » ?',
    options: [
      { id: 'a', text: 'Un nom', isCorrect: false },
      { id: 'b', text: 'Un verbe', isCorrect: true },
    ],
    correctAnswer: 'Un verbe',
    explanation: '« joue » dit ce que fait la fille : c’est un verbe.',
    hint: 'Est-ce une action ou une chose ?',
    tags: ['cp', 'grammaire', 'nature-des-mots', 'verbe', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-grammaire-007',
    subject: 'francais',
    title: 'Trouver le nom',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'reconnaître un nom',
    format: 'qcm',
    instructions:
      'Choisis le nom (une chose ou un être vivant).',
    prompt: 'Les oiseaux chantent.',
    options: [
      { id: 'a', text: 'Les oiseaux', isCorrect: true },
      { id: 'b', text: 'chantent', isCorrect: false },
    ],
    correctAnswer: 'Les oiseaux',
    explanation: '« oiseaux » est un nom : il désigne des animaux.',
    hint: 'Un nom peut être précédé d’un déterminant.',
    tags: ['cp', 'grammaire', 'nom', 'nature', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-grammaire-008',
    subject: 'francais',
    title: 'Masculin ou féminin ? (2)',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'masculin/féminin',
    format: 'qcm',
    instructions: 'Choisis le bon déterminant.',
    prompt: '___ porte est fermée.',
    options: [
      { id: 'a', text: 'Le', isCorrect: false },
      { id: 'b', text: 'La', isCorrect: true },
    ],
    correctAnswer: 'La',
    explanation: '« porte » est féminin, on dit « la porte ».',
    hint: 'Dis-le à voix haute : le porte ou la porte ?',
    tags: ['cp', 'grammaire', 'masculin-feminin', 'maison', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CP — CONJUGAISON (fr-cp-conjugaison-001 à 009)
  ===================================================================== */
  {
    id: 'fr-cp-conjugaison-001',
    subject: 'francais',
    title: 'être au présent — je/tu/il',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe être au présent',
    format: 'qcm',
    instructions: 'Complète la phrase avec la bonne forme du verbe.',
    prompt: 'Le chat ___ (être) noir.',
    options: [
      { id: 'a', text: 'est', isCorrect: true },
      { id: 'b', text: 'es', isCorrect: false },
      { id: 'c', text: 'suis', isCorrect: false },
    ],
    correctAnswer: 'est',
    explanation: 'Avec « il », on dit : il est.',
    hint: 'Je suis, tu es, il est…',
    tags: ['cp', 'conjugaison', 'etre', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-002',
    subject: 'francais',
    title: 'être au présent — je',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe être au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Je ___ (être) content.',
    options: [
      { id: 'a', text: 'suis', isCorrect: true },
      { id: 'b', text: 'es', isCorrect: false },
      { id: 'c', text: 'est', isCorrect: false },
    ],
    correctAnswer: 'suis',
    explanation: 'Avec « je », le verbe être se conjugue : je suis.',
    hint: 'Je suis, tu es, il est…',
    tags: ['cp', 'conjugaison', 'etre', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-003',
    subject: 'francais',
    title: 'être au présent — tu',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe être au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Tu ___ (être) grand.',
    options: [
      { id: 'a', text: 'suis', isCorrect: false },
      { id: 'b', text: 'es', isCorrect: true },
      { id: 'c', text: 'est', isCorrect: false },
    ],
    correctAnswer: 'es',
    explanation: 'Avec « tu », le verbe être se conjugue : tu es.',
    hint: 'Je suis, tu es, il est…',
    tags: ['cp', 'conjugaison', 'etre', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-004',
    subject: 'francais',
    title: 'être au présent — il',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe être au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Il ___ (être) fatigué.',
    options: [
      { id: 'a', text: 'es', isCorrect: false },
      { id: 'b', text: 'est', isCorrect: true },
    ],
    correctAnswer: 'est',
    explanation: 'Avec « il », le verbe être se conjugue : il est.',
    hint: 'Je suis, tu es, il est…',
    tags: ['cp', 'conjugaison', 'etre', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-005',
    subject: 'francais',
    title: 'avoir au présent — j’',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'J’___ (avoir) faim.',
    options: [
      { id: 'a', text: 'ai', isCorrect: true },
      { id: 'b', text: 'as', isCorrect: false },
      { id: 'c', text: 'a', isCorrect: false },
    ],
    correctAnswer: 'ai',
    explanation: 'Avec « j’ », le verbe avoir se conjugue : j’ai.',
    hint: 'J’ai, tu as, il a…',
    tags: ['cp', 'conjugaison', 'avoir', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-006',
    subject: 'francais',
    title: 'avoir au présent — tu',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Tu ___ (avoir) un chat.',
    options: [
      { id: 'a', text: 'ai', isCorrect: false },
      { id: 'b', text: 'as', isCorrect: true },
    ],
    correctAnswer: 'as',
    explanation: 'Avec « tu », le verbe avoir se conjugue : tu as.',
    hint: 'J’ai, tu as, il a…',
    tags: ['cp', 'conjugaison', 'avoir', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-007',
    subject: 'francais',
    title: 'aller au présent — je',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Je ___ (aller) à l’école.',
    options: [
      { id: 'a', text: 'vais', isCorrect: true },
      { id: 'b', text: 'vas', isCorrect: false },
      { id: 'c', text: 'va', isCorrect: false },
    ],
    correctAnswer: 'vais',
    explanation: 'Avec « je », le verbe aller se conjugue : je vais.',
    hint: 'Je vais, tu vas, il va…',
    tags: ['cp', 'conjugaison', 'aller', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-008',
    subject: 'francais',
    title: '1er groupe au présent — tu',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: '1er groupe au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Tu ___ (chanter) bien.',
    options: [
      { id: 'a', text: 'chante', isCorrect: false },
      { id: 'b', text: 'chantes', isCorrect: true },
    ],
    correctAnswer: 'chantes',
    explanation:
      'Avec « tu », les verbes en -er se terminent par -es : tu chantes.',
    hint: 'Je chante, tu chantes, il chante…',
    tags: ['cp', 'conjugaison', 'premier-groupe', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-conjugaison-009',
    subject: 'francais',
    title: '1er groupe au présent — il',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: '1er groupe au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Il ___ (jouer) dehors.',
    options: [
      { id: 'a', text: 'joues', isCorrect: false },
      { id: 'b', text: 'joue', isCorrect: true },
    ],
    correctAnswer: 'joue',
    explanation:
      'Avec « il », les verbes en -er se terminent par -e : il joue.',
    hint: 'Je joue, tu joues, il joue…',
    tags: ['cp', 'conjugaison', 'premier-groupe', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CP — VOCABULAIRE (fr-cp-vocabulaire-001 à 008)
  ===================================================================== */
  {
    id: 'fr-cp-vocabulaire-001',
    subject: 'francais',
    title: 'Synonyme de joli',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'synonymes simples',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de « joli » est :',
    options: [
      { id: 'a', text: 'beau', isCorrect: true },
      { id: 'b', text: 'sale', isCorrect: false },
      { id: 'c', text: 'dur', isCorrect: false },
    ],
    correctAnswer: 'beau',
    explanation: '« joli » et « beau » ont un sens proche.',
    hint: 'Pense à quelque chose que tu trouves très beau.',
    tags: ['cp', 'vocabulaire', 'synonymes', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-vocabulaire-002',
    subject: 'francais',
    title: 'Le contraire de grand',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'contraires simples',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de « grand » est :',
    options: [
      { id: 'a', text: 'petit', isCorrect: true },
      { id: 'b', text: 'fort', isCorrect: false },
      { id: 'c', text: 'long', isCorrect: false },
    ],
    correctAnswer: 'petit',
    explanation: 'Le contraire de « grand » est « petit ».',
    hint: 'Pense à quelque chose de très bas.',
    tags: ['cp', 'vocabulaire', 'contraires', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-vocabulaire-003',
    subject: 'francais',
    title: 'Le contraire de chaud',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'contraires simples',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de « chaud » est :',
    options: [
      { id: 'a', text: 'froid', isCorrect: true },
      { id: 'b', text: 'dur', isCorrect: false },
      { id: 'c', text: 'rapide', isCorrect: false },
    ],
    correctAnswer: 'froid',
    explanation: 'Le contraire de « chaud » est « froid ».',
    hint: 'Pense à l’hiver.',
    tags: ['cp', 'vocabulaire', 'contraires', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-vocabulaire-004',
    subject: 'francais',
    title: 'Catégorie de mots',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'catégorie de mots',
    format: 'qcm',
    instructions: 'Choisis l’animal.',
    prompt: 'Lequel de ces mots est un animal ?',
    options: [
      { id: 'a', text: 'table', isCorrect: false },
      { id: 'b', text: 'grenouille', isCorrect: true },
      { id: 'c', text: 'soleil', isCorrect: false },
    ],
    correctAnswer: 'grenouille',
    explanation: 'La grenouille est un animal qui vit près de l’eau.',
    hint: 'Un animal est un être vivant.',
    tags: ['cp', 'vocabulaire', 'categories', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-vocabulaire-005',
    subject: 'francais',
    title: 'Le sens d’un mot simple',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'sens d’un mot simple',
    format: 'qcm',
    instructions: 'Choisis la bonne définition.',
    prompt: 'Un cartable, c’est :',
    options: [
      { id: 'a', text: 'Un animal de la ferme', isCorrect: false },
      { id: 'b', text: 'Un sac pour l’école', isCorrect: true },
      { id: 'c', text: 'Un gâteau au chocolat', isCorrect: false },
    ],
    correctAnswer: 'Un sac pour l’école',
    explanation:
      'Le cartable est le sac que les élèves portent à l’école.',
    hint: 'Tu en portes un tous les matins.',
    tags: ['cp', 'vocabulaire', 'definition', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-vocabulaire-006',
    subject: 'francais',
    title: 'Le mot intrus',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'mot intrus',
    format: 'qcm',
    instructions:
      'Choisis le mot qui ne va pas avec les autres.',
    prompt: 'chat / chien / lapin / voiture',
    options: [
      { id: 'a', text: 'chat', isCorrect: false },
      { id: 'b', text: 'voiture', isCorrect: true },
      { id: 'c', text: 'lapin', isCorrect: false },
    ],
    correctAnswer: 'voiture',
    explanation:
      'chat, chien et lapin sont des animaux. La voiture est un véhicule.',
    hint: 'Trois mots sont des animaux.',
    tags: ['cp', 'vocabulaire', 'intrus', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-vocabulaire-007',
    subject: 'francais',
    title: 'Famille de mots',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'mots de la même famille',
    format: 'qcm',
    instructions:
      'Choisis le mot de la même famille que « jardin ».',

    prompt: 'Lequel est de la même famille que « jardin » ?',
    options: [
      { id: 'a', text: 'jardinier', isCorrect: true },
      { id: 'b', text: 'jouet', isCorrect: false },
      { id: 'c', text: 'maison', isCorrect: false },
    ],
    correctAnswer: 'jardinier',
    explanation: '« jardinier » vient du mot « jardin ».',
    hint: 'Cherche le petit bout commun dans les mots.',
    tags: ['cp', 'vocabulaire', 'famille-de-mots', 'nature', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-cp-vocabulaire-008',
    subject: 'francais',
    title: 'Catégorie : fruits',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'catégorie de mots',
    format: 'qcm',
    instructions: 'Choisis le fruit.',
    prompt: 'Lequel de ces mots est un fruit ?',
    options: [
      { id: 'a', text: 'chaise', isCorrect: false },
      { id: 'b', text: 'pluie', isCorrect: false },
      { id: 'c', text: 'poire', isCorrect: true },
    ],
    correctAnswer: 'poire',
    explanation: 'La poire est un fruit.',
    hint: 'Un fruit se mange.',
    tags: ['cp', 'vocabulaire', 'categories', 'nourriture', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CE1 — LECTURE (fr-ce1-lecture-001 à 007)
  ===================================================================== */
  {
    id: 'fr-ce1-lecture-001',
    subject: 'francais',
    title: 'Pourquoi Tom met-il son manteau ?',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension explicite',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      "Tom met son manteau parce qu’il a froid. Pourquoi Tom met-il son manteau ?",
    options: [
      { id: 'a', text: 'Parce qu’il a froid', isCorrect: true },
      { id: 'b', text: 'Parce qu’il veut nager', isCorrect: false },
      { id: 'c', text: 'Parce qu’il dort', isCorrect: false },
    ],
    correctAnswer: 'Parce qu’il a froid',
    explanation: 'La phrase indique clairement la raison : il a froid.',
    hint: 'Cherche les mots après « parce que ».',
    tags: ['ce1', 'lecture', 'comprehension', 'meteo', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-lecture-002',
    subject: 'francais',
    title: 'La raison d’une action',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension explicite',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      'Zoé prend son parapluie parce qu’il pleut. Pourquoi prend-elle son parapluie ?',
    options: [
      { id: 'a', text: 'Parce qu’il fait soleil', isCorrect: false },
      { id: 'b', text: 'Parce qu’il pleut', isCorrect: true },
      { id: 'c', text: 'Parce qu’elle a froid', isCorrect: false },
    ],
    correctAnswer: 'Parce qu’il pleut',
    explanation:
      'La phrase dit clairement que Zoé prend son parapluie parce qu’il pleut.',
    hint: 'Relis la deuxième partie de la phrase.',
    tags: ['ce1', 'lecture', 'comprehension', 'meteo', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-lecture-003',
    subject: 'francais',
    title: 'Où habite le personnage ?',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension explicite',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      'Pablo habite dans une maison près du parc. Où habite Pablo ?',
    options: [
      { id: 'a', text: 'À la campagne', isCorrect: false },
      { id: 'b', text: 'Près du parc', isCorrect: true },
      { id: 'c', text: 'Au bord de la mer', isCorrect: false },
    ],
    correctAnswer: 'Près du parc',
    explanation: 'La phrase dit que Pablo habite près du parc.',
    hint: 'Relis la fin de la phrase.',
    tags: ['ce1', 'lecture', 'comprehension', 'lieu', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-lecture-004',
    subject: 'francais',
    title: 'Inférence : pourquoi sourit-il ?',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'inférence simple',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      'Axel reçoit un cadeau pour son anniversaire. Il sourit. Pourquoi Axel sourit-il ?',
    options: [
      {
        id: 'a',
        text: 'Parce qu’il a perdu son jouet',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Parce qu’il est content de recevoir un cadeau',
        isCorrect: true,
      },
      { id: 'c', text: 'Parce qu’il a mal au ventre', isCorrect: false },
    ],
    correctAnswer: 'Parce qu’il est content de recevoir un cadeau',
    explanation:
      'Axel sourit parce que recevoir un cadeau rend heureux.',
    hint: 'Comment te sens-tu quand tu reçois un cadeau ?',
    tags: ['ce1', 'lecture', 'inference', 'famille', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-lecture-005',
    subject: 'francais',
    title: 'Ce que fait l’animal',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension explicite',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      'Le chaton joue avec une pelote de laine. Avec quoi joue-t-il ?',
    options: [
      { id: 'a', text: 'Avec une balle', isCorrect: false },
      {
        id: 'b',
        text: 'Avec une pelote de laine',
        isCorrect: true,
      },
      { id: 'c', text: 'Avec un os', isCorrect: false },
    ],
    correctAnswer: 'Avec une pelote de laine',
    explanation:
      'La phrase dit que le chaton joue avec une pelote de laine.',
    hint: 'Relis le début de la phrase.',
    tags: ['ce1', 'lecture', 'comprehension', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-lecture-006',
    subject: 'francais',
    title: 'Inférence : saison',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'inférence simple',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      'Les enfants mettent des bottes et glissent sur la neige. Quelle saison est-ce probablement ?',
    options: [
      { id: 'a', text: 'L’été', isCorrect: false },
      { id: 'b', text: 'L’hiver', isCorrect: true },
      { id: 'c', text: 'Le printemps', isCorrect: false },
    ],
    correctAnswer: 'L’hiver',
    explanation: 'La neige tombe en hiver.',
    hint: 'Quand y a-t-il de la neige ?',
    tags: ['ce1', 'lecture', 'inference', 'saisons', 'meteo', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-lecture-007',
    subject: 'francais',
    title: 'Ce que fait maman',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'compréhension explicite',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt:
      'Maman arrose les plantes du balcon chaque matin. Que fait maman ?',
    options: [
      { id: 'a', text: 'Elle cuisine', isCorrect: false },
      {
        id: 'b',
        text: 'Elle arrose les plantes',
        isCorrect: true,
      },
      { id: 'c', text: 'Elle fait du sport', isCorrect: false },
    ],
    correctAnswer: 'Elle arrose les plantes',
    explanation: 'La phrase dit que maman arrose les plantes.',
    hint: 'Cherche l’action de maman.',
    tags: ['ce1', 'lecture', 'comprehension', 'famille', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CE1 — ORTHOGRAPHE (fr-ce1-orthographe-001 à 008)
  ===================================================================== */
  {
    id: 'fr-ce1-orthographe-001',
    subject: 'francais',
    title: 'Le chat est noir',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'et/est',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Le chat ___ noir.',
    options: [
      { id: 'a', text: 'et', isCorrect: false },
      { id: 'b', text: 'est', isCorrect: true },
    ],
    correctAnswer: 'est',
    explanation: 'On utilise « est » pour le verbe être : le chat est noir.',
    hint: 'Remplace par « était » pour vérifier.',
    tags: ['ce1', 'orthographe', 'et-est', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-orthographe-002',
    subject: 'francais',
    title: 'Lina a un vélo',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'a/à',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lina ___ un vélo.',
    options: [
      { id: 'a', text: 'a', isCorrect: true },
      { id: 'b', text: 'à', isCorrect: false },
    ],
    correctAnswer: 'a',
    explanation:
      'On écrit « a » sans accent pour le verbe avoir : Lina a un vélo.',
    hint: 'Remplace par « avait » pour vérifier.',
    tags: ['ce1', 'orthographe', 'a-a-accent', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-orthographe-003',
    subject: 'francais',
    title: 'ou / où ?',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones ou/où',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Tu veux du pain ___ des céréales ?',
    options: [
      { id: 'a', text: 'ou', isCorrect: true },
      { id: 'b', text: 'où', isCorrect: false },
    ],
    correctAnswer: 'ou',
    explanation: 'On écrit « ou » quand on propose un choix.',
    hint: 'Peut-on dire « ou bien » ?',
    tags: ['ce1', 'orthographe', 'ou-ou-accent', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: 'Écris une phrase avec « où ».',
      },
    }),
  },
  {
    id: 'fr-ce1-orthographe-004',
    subject: 'francais',
    title: 'on / ont ?',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones on/ont',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Les élèves ___ rangé leurs affaires.',
    options: [
      { id: 'a', text: 'on', isCorrect: false },
      { id: 'b', text: 'ont', isCorrect: true },
    ],
    correctAnswer: 'ont',
    explanation:
      'On écrit « ont » car c’est le verbe avoir avec « ils » : ils ont rangé.',
    hint: 'Peut-on dire « avaient » ?',
    tags: ['ce1', 'orthographe', 'on-ont', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-orthographe-005',
    subject: 'francais',
    title: 'son / sont ?',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones son/sont',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Les oiseaux ___ dans le ciel.',
    options: [
      { id: 'a', text: 'son', isCorrect: false },
      { id: 'b', text: 'sont', isCorrect: true },
    ],
    correctAnswer: 'sont',
    explanation:
      'On écrit « sont » car c’est le verbe être avec « ils » : ils sont.',
    hint: 'Peut-on dire « étaient » ?',
    tags: ['ce1', 'orthographe', 'son-sont', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-orthographe-006',
    subject: 'francais',
    title: 'mes / mais ?',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones mes/mais',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'J’aime le sport ___ je suis fatigué.',
    options: [
      { id: 'a', text: 'mes', isCorrect: false },
      { id: 'b', text: 'mais', isCorrect: true },
    ],
    correctAnswer: 'mais',
    explanation: 'On écrit « mais » quand on oppose deux idées.',
    hint: 'Peut-on dire « cependant » ?',
    tags: ['ce1', 'orthographe', 'mes-mais', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-orthographe-007',
    subject: 'francais',
    title: 'ce / se ?',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones ce/se',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ chat est très doux.',
    options: [
      { id: 'a', text: 'Ce', isCorrect: true },
      { id: 'b', text: 'Se', isCorrect: false },
    ],
    correctAnswer: 'Ce',
    explanation:
      'On écrit « ce » devant un nom pour montrer quelque chose.',
    hint: 'Peut-on dire « cet animal » ?',
    tags: ['ce1', 'orthographe', 'ce-se', 'animaux', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-orthographe-008',
    subject: 'francais',
    title: 'où / ou ? (2)',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones ou/où',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ as-tu mis ton sac ?',
    options: [
      { id: 'a', text: 'Ou', isCorrect: false },
      { id: 'b', text: 'Où', isCorrect: true },
    ],
    correctAnswer: 'Où',
    explanation:
      'On écrit « où » quand on pose une question sur un lieu.',
    hint: 'On pose une question sur l’endroit.',
    tags: ['ce1', 'orthographe', 'ou-ou-accent', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CE1 — GRAMMAIRE (fr-ce1-grammaire-001 à 008)
  ===================================================================== */
  {
    id: 'fr-ce1-grammaire-001',
    subject: 'francais',
    title: 'Sujet de la phrase',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet de la phrase.',
    prompt: 'Les oiseaux chantent dans l’arbre.',
    options: [
      { id: 'a', text: 'Les oiseaux', isCorrect: true },
      { id: 'b', text: 'chantent', isCorrect: false },
      { id: 'c', text: "dans l'arbre", isCorrect: false },
    ],
    correctAnswer: 'Les oiseaux',
    explanation:
      'Le sujet est « Les oiseaux », ce sont eux qui chantent.',
    hint: 'Qui fait l’action de chanter ?',
    tags: ['ce1', 'grammaire', 'sujet', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-grammaire-002',
    subject: 'francais',
    title: 'Sujet de la phrase (2)',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet de la phrase.',
    prompt: 'Les oiseaux chantent dans l’arbre.',
    options: [
      { id: 'a', text: 'Les oiseaux', isCorrect: true },
      { id: 'b', text: 'chantent', isCorrect: false },
      { id: 'c', text: "dans l'arbre", isCorrect: false },
    ],
    correctAnswer: 'Les oiseaux',
    explanation:
      'Le sujet est « Les oiseaux », ce sont eux qui chantent.',
    hint: 'Qui fait l’action de chanter ?',
    tags: ['ce1', 'grammaire', 'sujet', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-grammaire-003',
    subject: 'francais',
    title: 'Identifier le nom',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le nom',
    format: 'qcm',
    instructions: 'Choisis le nom dans la phrase.',
    prompt: 'Le soleil brille.',
    options: [
      { id: 'a', text: 'soleil', isCorrect: true },
      { id: 'b', text: 'brille', isCorrect: false },
    ],
    correctAnswer: 'soleil',
    explanation: '« soleil » est un nom : il désigne une chose.',
    hint: 'Un nom peut être précédé de « le », « la » ou « un ».',
    tags: ['ce1', 'grammaire', 'nom', 'nature', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-grammaire-004',
    subject: 'francais',
    title: 'Identifier l’adjectif',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier l’adjectif',
    format: 'qcm',
    instructions: 'Choisis l’adjectif dans le groupe nominal.',
    prompt: 'un grand arbre',
    options: [
      { id: 'a', text: 'un', isCorrect: false },
      { id: 'b', text: 'grand', isCorrect: true },
      { id: 'c', text: 'arbre', isCorrect: false },
    ],
    correctAnswer: 'grand',
    explanation: '« grand » est un adjectif : il décrit l’arbre.',
    hint: 'L’adjectif décrit le nom.',
    tags: ['ce1', 'grammaire', 'adjectif', 'nature', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-grammaire-005',
    subject: 'francais',
    title: 'Reconnaître le déterminant',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'reconnaître le déterminant',
    format: 'qcm',
    instructions: 'Choisis le déterminant dans le groupe.',
    prompt: 'la belle maison',
    options: [
      { id: 'a', text: 'la', isCorrect: true },
      { id: 'b', text: 'belle', isCorrect: false },
      { id: 'c', text: 'maison', isCorrect: false },
    ],
    correctAnswer: 'la',
    explanation:
      '« la » est un déterminant : il accompagne le nom « maison ».',
    hint: 'Le déterminant est devant le nom.',
    tags: ['ce1', 'grammaire', 'determinant', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-grammaire-006',
    subject: 'francais',
    title: 'Féminin du nom',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'masculin/féminin du nom',
    format: 'qcm',
    instructions: 'Choisis la forme féminine.',
    prompt: 'Quel est le féminin de « chanteur » ?',
    options: [
      { id: 'a', text: 'chanteur', isCorrect: false },
      { id: 'b', text: 'chanteuse', isCorrect: true },
      { id: 'c', text: 'chanteurs', isCorrect: false },
    ],
    correctAnswer: 'chanteuse',
    explanation: 'Le féminin de « chanteur » est « chanteuse ».',
    hint: 'On ajoute souvent -euse pour faire le féminin.',
    tags: ['ce1', 'grammaire', 'masculin-feminin', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension: 'Donne le féminin de « danseur ».',
      },
    }),
  },
  {
    id: 'fr-ce1-grammaire-007',
    subject: 'francais',
    title: 'Pluriel du nom',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'pluriel',
    format: 'qcm',
    instructions: 'Choisis la forme correcte au pluriel.',
    prompt: 'Plusieurs maison… Comment écrit-on ?',
    options: [
      { id: 'a', text: 'des maisons', isCorrect: true },
      { id: 'b', text: 'des maison', isCorrect: false },
    ],
    correctAnswer: 'des maisons',
    explanation:
      'Au pluriel, on ajoute -s à la fin du nom : des maisons.',
    hint: 'Le pluriel prend souvent un -s.',
    tags: ['ce1', 'grammaire', 'pluriel', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-grammaire-008',
    subject: 'francais',
    title: 'Nature du mot',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'grammaire',
    subskill: 'identifier l’adjectif',
    format: 'qcm',
    instructions: 'Choisis la nature du mot souligné.',
    prompt:
      'Une robe bleue. — Quelle est la nature du mot « bleue » ?',
    options: [
      { id: 'a', text: 'Un nom', isCorrect: false },
      { id: 'b', text: 'Un adjectif', isCorrect: true },
      { id: 'c', text: 'Un déterminant', isCorrect: false },
    ],
    correctAnswer: 'Un adjectif',
    explanation: '« bleue » décrit la robe : c’est un adjectif.',
    hint: 'Un adjectif donne une information sur le nom.',
    tags: ['ce1', 'grammaire', 'adjectif', 'nature-des-mots', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CE1 — CONJUGAISON (fr-ce1-conjugaison-001 à 009)
  ===================================================================== */
  {
    id: 'fr-ce1-conjugaison-001',
    subject: 'francais',
    title: 'être au présent — nous',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe être au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Nous ___ (être) en retard.',
    options: [
      { id: 'a', text: 'sommes', isCorrect: true },
      { id: 'b', text: 'êtes', isCorrect: false },
      { id: 'c', text: 'sont', isCorrect: false },
    ],
    correctAnswer: 'sommes',
    explanation:
      'Avec « nous », le verbe être se conjugue : nous sommes.',
    hint: 'Nous sommes, vous êtes, ils sont…',
    tags: ['ce1', 'conjugaison', 'etre', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-002',
    subject: 'francais',
    title: 'avoir au présent — j’',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'J’___ (avoir) envie de jouer.',
    options: [
      { id: 'a', text: 'ai', isCorrect: true },
      { id: 'b', text: 'as', isCorrect: false },
      { id: 'c', text: 'avons', isCorrect: false },
    ],
    correctAnswer: 'ai',
    explanation: 'Avec « j’ », le verbe avoir se conjugue : j’ai.',
    hint: 'J’ai, tu as, il a…',
    tags: ['ce1', 'conjugaison', 'avoir', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-003',
    subject: 'francais',
    title: 'avoir au présent — vous',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe avoir au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Vous ___ (avoir) de la chance.',
    options: [
      { id: 'a', text: 'avez', isCorrect: true },
      { id: 'b', text: 'avons', isCorrect: false },
      { id: 'c', text: 'ont', isCorrect: false },
    ],
    correctAnswer: 'avez',
    explanation: 'Avec « vous », le verbe avoir se conjugue : vous avez.',
    hint: 'Nous avons, vous avez, ils ont…',
    tags: ['ce1', 'conjugaison', 'avoir', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-004',
    subject: 'francais',
    title: 'aller au présent — tu',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Tu ___ (aller) au parc.',
    options: [
      { id: 'a', text: 'vais', isCorrect: false },
      { id: 'b', text: 'vas', isCorrect: true },
      { id: 'c', text: 'vont', isCorrect: false },
    ],
    correctAnswer: 'vas',
    explanation: 'Avec « tu », le verbe aller se conjugue : tu vas.',
    hint: 'Je vais, tu vas, il va…',
    tags: ['ce1', 'conjugaison', 'aller', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-005',
    subject: 'francais',
    title: 'aller au présent — ils',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Ils ___ (aller) à la piscine.',
    options: [
      { id: 'a', text: 'vont', isCorrect: true },
      { id: 'b', text: 'vais', isCorrect: false },
      { id: 'c', text: 'allez', isCorrect: false },
    ],
    correctAnswer: 'vont',
    explanation: 'Avec « ils », le verbe aller se conjugue : ils vont.',
    hint: 'Nous allons, vous allez, ils vont.',
    tags: ['ce1', 'conjugaison', 'aller', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-006',
    subject: 'francais',
    title: 'faire au présent — il',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe faire au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Il ___ (faire) ses devoirs.',
    options: [
      { id: 'a', text: 'faisons', isCorrect: false },
      { id: 'b', text: 'fait', isCorrect: true },
      { id: 'c', text: 'faites', isCorrect: false },
    ],
    correctAnswer: 'fait',
    explanation: 'Avec « il », le verbe faire se conjugue : il fait.',
    hint: 'Je fais, tu fais, il fait…',
    tags: ['ce1', 'conjugaison', 'faire', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-007',
    subject: 'francais',
    title: '1er groupe présent — nous',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: '1er groupe au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Nous ___ (dessiner) un chat.',
    options: [
      { id: 'a', text: 'dessinez', isCorrect: false },
      { id: 'b', text: 'dessinons', isCorrect: true },
      { id: 'c', text: 'dessinent', isCorrect: false },
    ],
    correctAnswer: 'dessinons',
    explanation:
      'Avec « nous », les verbes en -er se terminent par -ons : nous dessinons.',
    hint: 'Nous …-ons, vous …-ez, ils …-ent.',
    tags: ['ce1', 'conjugaison', 'premier-groupe', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-008',
    subject: 'francais',
    title: '1er groupe présent — ils',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: '1er groupe au présent',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Ils ___ (regarder) la télévision.',
    options: [
      { id: 'a', text: 'regardez', isCorrect: false },
      { id: 'b', text: 'regardons', isCorrect: false },
      { id: 'c', text: 'regardent', isCorrect: true },
    ],
    correctAnswer: 'regardent',
    explanation:
      'Avec « ils », les verbes en -er se terminent par -ent : ils regardent.',
    hint: 'Nous regardons, vous regardez, ils regardent.',
    tags: ['ce1', 'conjugaison', 'premier-groupe', 'present', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-conjugaison-009',
    subject: 'francais',
    title: 'être à l’imparfait — j’',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'être à l’imparfait',
    format: 'qcm',
    instructions: 'Choisis la bonne forme du verbe.',
    prompt: 'Hier, j’___ (être) malade.',
    options: [
      { id: 'a', text: 'étais', isCorrect: true },
      { id: 'b', text: 'était', isCorrect: false },
      { id: 'c', text: 'étions', isCorrect: false },
    ],
    correctAnswer: 'étais',
    explanation:
      'Avec « j’ » à l’imparfait, le verbe être se conjugue : j’étais.',
    hint: 'J’étais, tu étais, il était…',
    tags: ['ce1', 'conjugaison', 'etre', 'imparfait', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension:
          'Conjugue « être » à l’imparfait pour « nous ».',

      },
    }),
  },

  /* =====================================================================
     CE1 — VOCABULAIRE (fr-ce1-vocabulaire-001 à 006)
  ===================================================================== */
  {
    id: 'fr-ce1-vocabulaire-001',
    subject: 'francais',
    title: 'Synonyme de content',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions:
      'Choisis le mot qui veut presque dire la même chose.',
    prompt: 'Le synonyme de « content » est :',
    options: [
      { id: 'a', text: 'heureux', isCorrect: true },
      { id: 'b', text: 'triste', isCorrect: false },
      { id: 'c', text: 'rapide', isCorrect: false },
    ],
    correctAnswer: 'heureux',
    explanation: '« content » et « heureux » ont un sens proche.',
    hint: 'Pense à quelqu’un qui sourit.',
    tags: ['ce1', 'vocabulaire', 'synonymes', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-vocabulaire-002',
    subject: 'francais',
    title: 'Synonyme de rapide',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions:
      'Choisis le mot qui veut presque dire la même chose.',
    prompt: 'Le synonyme de « rapide » est :',
    options: [
      { id: 'a', text: 'lent', isCorrect: false },
      { id: 'b', text: 'vite', isCorrect: true },
      { id: 'c', text: 'fort', isCorrect: false },
    ],
    correctAnswer: 'vite',
    explanation: '« rapide » et « vite » ont un sens proche.',
    hint: 'Cherche un mot qui dit la même vitesse.',
    tags: ['ce1', 'vocabulaire', 'synonymes', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-vocabulaire-003',
    subject: 'francais',
    title: 'Contraire de propre',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de « propre » est :',
    options: [
      { id: 'a', text: 'beau', isCorrect: false },
      { id: 'b', text: 'sale', isCorrect: true },
      { id: 'c', text: 'calme', isCorrect: false },
    ],
    correctAnswer: 'sale',
    explanation: 'Le contraire de « propre » est « sale ».',
    hint: 'Pense à quelque chose de très désordonné.',
    tags: ['ce1', 'vocabulaire', 'contraires', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-vocabulaire-004',
    subject: 'francais',
    title: 'Famille de mots : mer',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'familles de mots',
    format: 'qcm',
    instructions:
      'Choisis le mot de la même famille que « mer ».',

    prompt: 'Lequel est de la même famille que « mer » ?',
    options: [
      { id: 'a', text: 'marin', isCorrect: true },
      { id: 'b', text: 'maison', isCorrect: false },
      { id: 'c', text: 'montagne', isCorrect: false },
    ],
    correctAnswer: 'marin',
    explanation: '« marin » vient du mot « mer ».',
    hint: 'Cherche la partie commune dans les mots.',
    tags: ['ce1', 'vocabulaire', 'famille-de-mots', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-vocabulaire-005',
    subject: 'francais',
    title: 'Le mot intrus',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'mot intrus',
    format: 'qcm',
    instructions:
      'Choisis le mot qui ne va pas avec les autres.',
    prompt: 'stylo / crayon / règle / ballon',
    options: [
      { id: 'a', text: 'stylo', isCorrect: false },
      { id: 'b', text: 'règle', isCorrect: false },
      { id: 'c', text: 'ballon', isCorrect: true },
    ],
    correctAnswer: 'ballon',
    explanation:
      'stylo, crayon et règle sont des fournitures scolaires. Le ballon est un jouet.',
    hint: 'Trois mots sont des objets de la classe.',
    tags: ['ce1', 'vocabulaire', 'intrus', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-vocabulaire-006',
    subject: 'francais',
    title: 'Définition d’un mot',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'définition',
    format: 'qcm',
    instructions: 'Choisis la bonne définition.',
    prompt: 'Une bibliothèque, c’est :',
    options: [
      {
        id: 'a',
        text: 'Un endroit où l’on fait du sport',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Un endroit où l’on emprunte des livres',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Un endroit où l’on mange',
        isCorrect: false,
      },
    ],
    correctAnswer: 'Un endroit où l’on emprunte des livres',
    explanation:
      'Une bibliothèque est un lieu où l’on peut lire et emprunter des livres.',
    hint: 'On y trouve beaucoup de livres.',
    tags: ['ce1', 'vocabulaire', 'definition', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },

  /* =====================================================================
     CE1 — EXPRESSION ÉCRITE (fr-ce1-expression-001 à 003)
  ===================================================================== */
  {
    id: 'fr-ce1-expression-001',
    subject: 'francais',
    title: 'Choisir la meilleure phrase',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'choisir la meilleure formulation',
    format: 'qcm',
    instructions: 'Choisis la phrase correctement écrite.',
    prompt: 'Laquelle de ces phrases est correcte ?',
    options: [
      { id: 'a', text: 'chien le court.', isCorrect: false },
      { id: 'b', text: 'Le chien court.', isCorrect: true },
      { id: 'c', text: 'court chien Le.', isCorrect: false },
    ],
    correctAnswer: 'Le chien court.',
    explanation:
      'Une phrase correcte commence par une majuscule et se termine par un point.',
    hint: 'Cherche la phrase avec le bon ordre des mots.',
    tags: ['ce1', 'expression-ecrite', 'phrase', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-expression-002',
    subject: 'francais',
    title: 'Compléter une phrase logiquement',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'compléter une phrase logiquement',
    format: 'qcm',
    instructions:
      'Choisis le mot qui complète le mieux la phrase.',
    prompt: 'Pour écrire, j’ai besoin d’un ___.',
    options: [
      { id: 'a', text: 'stylo', isCorrect: true },
      { id: 'b', text: 'canard', isCorrect: false },
      { id: 'c', text: 'nuage', isCorrect: false },
    ],
    correctAnswer: 'stylo',
    explanation: 'On utilise un stylo pour écrire.',
    hint: 'Cherche un objet pour écrire.',
    tags: ['ce1', 'expression-ecrite', 'coherence', 'ecole', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
  {
    id: 'fr-ce1-expression-003',
    subject: 'francais',
    title: 'Phrase avec ponctuation correcte',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'expression_ecrite',
    subskill: 'choisir la meilleure formulation',
    format: 'qcm',
    instructions: 'Choisis la phrase qui est bien écrite.',
    prompt:
      'Laquelle de ces phrases est correctement ponctuée ?',
    options: [
      {
        id: 'a',
        text: 'les enfants jouent dans le jardin',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Les enfants jouent dans le jardin.',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Les enfants jouent dans le jardin!',
        isCorrect: false,
      },
    ],
    correctAnswer: 'Les enfants jouent dans le jardin.',
    explanation:
      'Une phrase affirmative commence par une majuscule et se termine par un point.',
    hint: 'Cette phrase n’exprime ni une surprise ni une question.',
    tags: ['ce1', 'expression-ecrite', 'ponctuation', 'phrase', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations({
      defi_avance: {
        challengeExtension:
          'Écris une phrase avec un point d’exclamation.',
      },
    }),
  },
];

/* =========================
   VALIDATION
========================= */

export interface ExerciseValidationResult {
  exerciseId: string;
  valid: boolean;
  errors: string[];
}

export function validateFrenchExercise(
  exercise: FrenchExercise
): ExerciseValidationResult {
  const errors: string[] = [];

  if (!exercise.id) errors.push('id manquant');
  if (!exercise.title) errors.push('title manquant');
  if (!exercise.subject || exercise.subject !== 'francais') {
    errors.push('subject invalide');
  }
  if (!exercise.schoolClass) errors.push('schoolClass manquant');
  if (!exercise.generalLevel) errors.push('generalLevel manquant');
  if (!exercise.skill) errors.push('skill manquant');
  if (!exercise.format) errors.push('format manquant');
  if (!exercise.instructions) errors.push('instructions manquantes');
  if (!exercise.prompt) errors.push('prompt manquant');
  if (!exercise.explanation) errors.push('explanation manquante');

  if (exercise.format === 'qcm') {
    if (!exercise.options || exercise.options.length < 2) {
      errors.push('QCM sans options suffisantes');
    } else {
      const correctOptions = exercise.options.filter((o) => o.isCorrect);
      if (correctOptions.length !== 1) {
        errors.push(
          'QCM invalide : il doit y avoir exactement une seule bonne réponse'
        );
      }
      const optionTexts = new Set<string>();
      for (const option of exercise.options) {
        if (!option.text?.trim()) {
          errors.push(`Option vide dans ${exercise.id}`);
        }
        const normalized = option.text.trim().toLowerCase();
        if (optionTexts.has(normalized)) {
          errors.push(`Options dupliquées dans ${exercise.id}`);
        }
        optionTexts.add(normalized);
      }
      if (typeof exercise.correctAnswer === 'string') {
        const exists = exercise.options.some(
          (o) =>
            o.text.trim().toLowerCase() ===
            exercise.correctAnswer!.toString().trim().toLowerCase()
        );
        if (!exists) {
          errors.push(
            "correctAnswer n’est pas présent dans les options"
          );
        }
      }
    }
  }

  if (exercise.format === 'fill_in_blank') {
    if (!exercise.correctAnswer || typeof exercise.correctAnswer !== 'string') {
      errors.push('fill_in_blank sans correctAnswer texte');
    }
  }

  if (exercise.format === 'short_answer') {
    if (!exercise.correctAnswer) {
      errors.push('short_answer sans correctAnswer indicatif');
    }
  }

  return {
    exerciseId: exercise.id,
    valid: errors.length === 0,
    errors,
  };
}

export function validateFrenchBank(
  exercises: FrenchExercise[]
): ExerciseValidationResult[] {
  return exercises.map(validateFrenchExercise);
}

export function getFrenchBankValidationSummary(
  exercises: FrenchExercise[]
) {
  const results = validateFrenchBank(exercises);
  const invalid = results.filter((r) => !r.valid);
  return {
    total: results.length,
    valid: results.length - invalid.length,
    invalid: invalid.length,
    invalidExercises: invalid,
  };
}


/* =====================================================================
   SÉLECTION — CONFIG
===================================================================== */

/** Poids et fenêtres configurables pour la diversité et l'anti-répétition. */
const DIVERSITY_CONFIG = {
  /** Pénalité si l'id exact est dans l'historique récent. */
  ID_PENALTY: 100,
  /** Pénalité par occurrence du même subskill dans l'historique récent. */
  SUBSKILL_PENALTY: 25,
  /** Pénalité par tag partagé avec l'historique récent. */
  TAG_PENALTY: 5,
  /** Nombre de candidats scorés conservés avant la sélection gloutonne. */
  CANDIDATE_POOL_SIZE: 20,
  /** Max exercices avec le même subskill dans une même session. */
  MAX_SAME_SUBSKILL: 2,
} as const;

/* =====================================================================
   TYPES SÉLECTION
===================================================================== */

/**
 * Historique léger passé à getFrenchExercises pour l'anti-répétition.
 *
 * V1 : IDs et subskills récents suffisent.
 * Prévu pour une extension future : fréquences par exercice, persistance
 * par élève en base de données (il suffira d'alimenter ces champs depuis
 * une requête Supabase avant l'appel).
 */
export interface ExerciseSelectionHistory {
  /** IDs des exercices servis récemment (fenêtre décidée par l'appelant). */
  recentExerciseIds: string[];
  /**
   * Subskills vues récemment (optionnel).
   * Si absent, recalculé automatiquement depuis recentExerciseIds + la banque.
   */
  recentSubskills?: string[];
  /**
   * Tags vus récemment (optionnel).
   * Si absent, recalculé automatiquement depuis recentExerciseIds + la banque.
   */
  recentTags?: string[];
}

/* =====================================================================
   UTILITAIRES INTERNES
===================================================================== */

function normalizeList(values?: string[]): string[] {
  return (values ?? []).map((v) => v.trim().toLowerCase());
}

function matchesLevel(
  exerciseLevel: GeneralLevel,
  profileLevel: GeneralLevel
): boolean {
  if (profileLevel === 'beginner') return exerciseLevel === 'beginner';
  if (profileLevel === 'intermediate') {
    return exerciseLevel === 'beginner' || exerciseLevel === 'intermediate';
  }
  return true; // advanced accepte tous les niveaux
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
  return [correct, ...incorrect.slice(0, Math.max(0, adaptation.maxChoices - 1))];
}

function personalizeText(text: string, profile: StudentProfile): string {
  if (!profile.firstName) return text;
  return text.replace(/\bEmma\b/g, profile.firstName);
}

/**
 * Score de pertinence pédagogique d'un exercice pour un profil donné.
 * Scores positifs uniquement — les pénalités sont calculées séparément.
 */
function computeBaseScore(
  exercise: FrenchExercise,
  profile: StudentProfile
): number {
  const strengths = normalizeList(profile.strengths);
  const weaknesses = normalizeList(profile.weaknesses);
  let score = 0;

  if (weaknesses.includes('français') || weaknesses.includes('francais')) {
    if (exercise.generalLevel === 'beginner') score += 2;
  }

  if (strengths.includes('français') || strengths.includes('francais')) {
    if (exercise.generalLevel === 'advanced') score += 1;
  }

  if (profile.learningProfile === 'attention_courte') {
    if (exercise.estimatedMinutes <= 2) score += 2;
  }

  if (profile.learningProfile === 'progressif') {
    if (exercise.format === 'fill_in_blank' || exercise.format === 'qcm') score += 1;
  }

  if (profile.learningProfile === 'defi_avance') {
    if (exercise.generalLevel === 'advanced') score += 2;
  }

  return score;
}

/**
 * Pénalités de diversité calculées depuis l'historique récent.
 * Résultat : un nombre positif à soustraire du score de base.
 */
function computeDiversityPenalty(
  exercise: FrenchExercise,
  history: ExerciseSelectionHistory,
  recentSubskillCounts: Map<string, number>,
  recentTagSet: Set<string>
): number {
  let penalty = 0;

  if (history.recentExerciseIds.includes(exercise.id)) {
    penalty += DIVERSITY_CONFIG.ID_PENALTY;
  }

  const subskillOccurrences = recentSubskillCounts.get(exercise.subskill) ?? 0;
  penalty += subskillOccurrences * DIVERSITY_CONFIG.SUBSKILL_PENALTY;

  const sharedTags = (exercise.tags ?? []).filter((t) =>
    recentTagSet.has(t.toLowerCase())
  ).length;
  penalty += sharedTags * DIVERSITY_CONFIG.TAG_PENALTY;

  return penalty;
}

/**
 * Résout les structures dérivées de l'historique.
 * Si recentSubskills / recentTags sont absents, les reconstruit depuis la banque.
 * Cela évite de forcer l'appelant à maintenir des données redondantes.
 */
function resolveHistoryContext(history: ExerciseSelectionHistory): {
  recentSubskillCounts: Map<string, number>;
  recentTagSet: Set<string>;
} {
  const recentSubskillCounts = new Map<string, number>();
  const recentTagSet = new Set<string>();

  if (history.recentSubskills) {
    for (const s of history.recentSubskills) {
      recentSubskillCounts.set(s, (recentSubskillCounts.get(s) ?? 0) + 1);
    }
  } else {
    const idSet = new Set(history.recentExerciseIds);
    for (const ex of frenchExercises) {
      if (idSet.has(ex.id)) {
        recentSubskillCounts.set(
          ex.subskill,
          (recentSubskillCounts.get(ex.subskill) ?? 0) + 1
        );
      }
    }
  }

  if (history.recentTags) {
    for (const t of history.recentTags) recentTagSet.add(t.toLowerCase());
  } else {
    const idSet = new Set(history.recentExerciseIds);
    for (const ex of frenchExercises) {
      if (idSet.has(ex.id)) {
        for (const t of ex.tags ?? []) recentTagSet.add(t.toLowerCase());
      }
    }
  }

  return { recentSubskillCounts, recentTagSet };
}

/** Applique l'adaptation de profil et la personnalisation textuelle. */
function applyProfileAdaptation(
  exercise: FrenchExercise,
  profile: StudentProfile
): FrenchExercise {
  const adaptation = exercise.adaptations.find(
    (a) => a.profile === profile.learningProfile
  );
  return {
    ...exercise,
    instructions: personalizeText(
      adaptation?.instruction ?? exercise.instructions,
      profile
    ),
    prompt: personalizeText(exercise.prompt, profile),
    hint: adaptation?.extraHint ?? exercise.hint,
    options: chooseOptionsForProfile(exercise.options, adaptation),
  };
}

/**
 * Sélection gloutonne avec contrainte de diversité de subskill.
 *
 * Fallback en 4 passes ordonnées :
 *   Passe A — candidats non pénalisés (score ≥ 0), MAX_SAME_SUBSKILL strict
 *   Passe B — tous candidats scorés,              MAX_SAME_SUBSKILL strict
 *   Passe C — tous candidats scorés,              MAX_SAME_SUBSKILL × 2 (assoupli)
 *   Passe D — pool complet sans contrainte        (garantie de remplissage)
 */
function selectWithDiversity(
  scored: Array<{ exercise: FrenchExercise; score: number }>,
  limit: number
): FrenchExercise[] {
  const selected: FrenchExercise[] = [];
  const selectedIds = new Set<string>();
  const subskillCounts = new Map<string, number>();

  function greedyPick(
    candidates: typeof scored,
    maxSameSubskill: number
  ): void {
    for (const { exercise } of candidates) {
      if (selected.length >= limit) break;
      if (selectedIds.has(exercise.id)) continue;
      const count = subskillCounts.get(exercise.subskill) ?? 0;
      if (count >= maxSameSubskill) continue;
      selected.push(exercise);
      selectedIds.add(exercise.id);
      subskillCounts.set(exercise.subskill, count + 1);
    }
  }

  const freshCandidates = scored.filter((s) => s.score >= 0);
  const M = DIVERSITY_CONFIG.MAX_SAME_SUBSKILL;

  greedyPick(freshCandidates, M);           // Passe A
  if (selected.length < limit) greedyPick(scored, M);       // Passe B
  if (selected.length < limit) greedyPick(scored, M * 2);   // Passe C
  if (selected.length < limit) greedyPick(scored, Infinity); // Passe D

  return selected;
}

/* =====================================================================
   FONCTION PRINCIPALE
===================================================================== */

/**
 * Sélectionne des exercices français adaptés au profil de l'élève.
 *
 * Rétrocompatible : les paramètres existants (profile, skill, limit) sont
 * inchangés. Le paramètre `history` est optionnel et active l'anti-répétition.
 *
 * @param params.profile  Profil de l'élève (classe, niveau, profil d'apprentissage…)
 * @param params.skill    Skill ciblée — si absent, toutes les skills sont éligibles
 * @param params.limit    Nombre d'exercices souhaité (défaut : 5)
 * @param params.history  Historique récent pour éviter les répétitions (optionnel)
 */
export function getFrenchExercises(params: {
  profile: StudentProfile;
  skill?: FrenchSkill;
  limit?: number;
  history?: ExerciseSelectionHistory;
}): FrenchExercise[] {
  const { profile, skill, limit = 5, history } = params;

  // 1. Filtrage de base
  const pool = frenchExercises.filter(
    (ex) =>
      ex.subject === 'francais' &&
      ex.schoolClass === profile.schoolClass &&
      matchesLevel(ex.generalLevel, profile.generalLevel) &&
      (!skill || ex.skill === skill)
  );

  if (pool.length === 0) return [];

  // 2. Contexte historique (résolu une seule fois)
  const emptyHistory: ExerciseSelectionHistory = { recentExerciseIds: [] };
  const ctx = resolveHistoryContext(history ?? emptyHistory);

  // 3. Scoring : pertinence pédagogique − pénalités de répétition
  const scored = pool
    .map((exercise) => ({
      exercise,
      score:
        computeBaseScore(exercise, profile) -
        (history
          ? computeDiversityPenalty(exercise, history, ctx.recentSubskillCounts, ctx.recentTagSet)
          : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(DIVERSITY_CONFIG.CANDIDATE_POOL_SIZE, limit * 3));

  // 4. Sélection gloutonne avec diversité de subskill + fallback
  const selected = selectWithDiversity(scored, limit);

  // 5. Personnalisation finale (profil + prénom)
  return selected.map((ex) => applyProfileAdaptation(ex, profile));
}

/* =====================================================================
   COMPATIBILITÉ APP (Exercise[])
===================================================================== */

const SKILL_TO_SOUS_DOMAINE: Record<FrenchSkill, SousDomaine> = {
  lecture: 'lecture',
  orthographe: 'orthographe',
  grammaire: 'grammaire',
  conjugaison: 'conjugaison',
  vocabulaire: 'vocabulaire',
  expression_ecrite: 'expression_ecrite',
};

function mapToExercise(e: FrenchExercise): Exercise | null {
  if (e.format !== 'qcm' || !e.options || e.options.length < 2) return null;
  const correctOption = e.options.find((o) => o.isCorrect);
  if (!correctOption) return null;
  return {
    id: e.id,
    matiere: 'francais',
    sous_domaine: SKILL_TO_SOUS_DOMAINE[e.skill],
    notion: e.subskill,
    niveau: e.schoolClass,
    type: 'qcm',
    consigne: e.instructions,
    question: e.prompt,
    options: e.options.map((o) => o.text),
    bonne_reponse: correctOption.text,
    explication: e.explanation,
  };
}

export const EXERCISE_BANK: Exercise[] = frenchExercises
  .map(mapToExercise)
  .filter((e): e is Exercise => e !== null);
