import { cloneDefaultAdaptations } from '../../core/exercise-core.adaptations';
import type { FrenchExercise } from './french.types';

export const frenchExercises: FrenchExercise[] = [
  /* =====================================================================
     CP — LECTURE (fr-cp-lecture-101 à 120)
  ===================================================================== */
  {
    id: 'fr-cp-lecture-101',
    subject: 'francais',
    title: 'Comprendre une action simple',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis la phrase et réponds.',
    prompt: 'Lina ferme la porte. Que fait Lina ?',
    options: [
      { id: 'a', text: 'Elle ferme la porte', isCorrect: true },
      { id: 'b', text: 'Elle ouvre la fenêtre', isCorrect: false },
      { id: 'c', text: 'Elle lave la table', isCorrect: false }
    ],
    correctAnswer: 'Elle ferme la porte',
    explanation: 'La phrase dit que Lina ferme la porte.',
    hint: 'Cherche le verbe dans la phrase.',
    tags: ['cp','lecture','action','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-102',
    subject: 'francais',
    title: 'Trouver le lieu',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du lieu',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt: 'Milo joue dans la cour. Où joue Milo ?',
    options: [
      { id: 'a', text: 'Dans la cour', isCorrect: true },
      { id: 'b', text: 'Dans le bain', isCorrect: false },
      { id: 'c', text: 'Dans le cartable', isCorrect: false }
    ],
    correctAnswer: 'Dans la cour',
    explanation: 'La phrase dit que Milo joue dans la cour.',
    hint: 'Relis la fin de la phrase.',
    tags: ['cp','lecture','lieu','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-103',
    subject: 'francais',
    title: 'Trouver le personnage',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis la phrase et réponds.',
    prompt: 'Le bébé dort. Qui dort ?',
    options: [
      { id: 'a', text: 'Le bébé', isCorrect: true },
      { id: 'b', text: 'Le lit', isCorrect: false },
      { id: 'c', text: 'La lampe', isCorrect: false }
    ],
    correctAnswer: 'Le bébé',
    explanation: 'C’est le bébé qui dort.',
    hint: 'Cherche qui fait l’action.',
    tags: ['cp','lecture','sujet','famille','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-104',
    subject: 'francais',
    title: 'Trouver l’objet',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Nora dessine une étoile. Que dessine Nora ?',
    options: [
      { id: 'a', text: 'Une étoile', isCorrect: true },
      { id: 'b', text: 'Une chaussure', isCorrect: false },
      { id: 'c', text: 'Une soupe', isCorrect: false }
    ],
    correctAnswer: 'Une étoile',
    explanation: 'La phrase dit que Nora dessine une étoile.',
    hint: 'Cherche ce que Nora dessine.',
    tags: ['cp','lecture','objet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-105',
    subject: 'francais',
    title: 'Compléter une phrase logique',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Choisis le mot qui complète bien la phrase.',
    prompt: 'Le poisson nage dans l\'...',
    options: [
      { id: 'a', text: 'eau', isCorrect: true },
      { id: 'b', text: 'cahier', isCorrect: false },
      { id: 'c', text: 'pull', isCorrect: false }
    ],
    correctAnswer: 'eau',
    explanation: 'Un poisson nage dans l’eau.',
    hint: 'Cherche où vit le poisson.',
    tags: ['cp','lecture','phrase-simple','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-106',
    subject: 'francais',
    title: 'Associer deux phrases proches',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'association de sens',
    format: 'qcm',
    instructions: 'Choisis la phrase qui veut dire presque la même chose.',
    prompt: 'Le chat dort sur le canapé.',
    options: [
      { id: 'a', text: 'Le chat dort sur le canapé', isCorrect: true },
      { id: 'b', text: 'Le chat mange sous la table', isCorrect: false },
      { id: 'c', text: 'Le chien dort dehors', isCorrect: false }
    ],
    correctAnswer: 'Le chat dort sur le canapé',
    explanation: 'La première réponse reprend exactement le sens de la phrase.',
    hint: 'Compare le personnage, l’action et le lieu.',
    tags: ['cp','lecture','association','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-107',
    subject: 'francais',
    title: 'Comprendre une consigne simple',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Papa lave la voiture. Que lave papa ?',
    options: [
      { id: 'a', text: 'La voiture', isCorrect: true },
      { id: 'b', text: 'Le vélo', isCorrect: false },
      { id: 'c', text: 'La veste', isCorrect: false }
    ],
    correctAnswer: 'La voiture',
    explanation: 'La phrase dit que papa lave la voiture.',
    hint: 'Cherche l’objet de l’action.',
    tags: ['cp','lecture','objet','famille','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-108',
    subject: 'francais',
    title: 'Identifier le lieu d’une action',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du lieu',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Lila dort dans son lit. Où dort Lila ?',
    options: [
      { id: 'a', text: 'Dans son lit', isCorrect: true },
      { id: 'b', text: 'Dans la rue', isCorrect: false },
      { id: 'c', text: 'Dans la cuisine', isCorrect: false }
    ],
    correctAnswer: 'Dans son lit',
    explanation: 'La phrase dit que Lila dort dans son lit.',
    hint: 'Cherche le lieu.',
    tags: ['cp','lecture','lieu','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-109',
    subject: 'francais',
    title: 'Qui fait l’action ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le lapin saute. Qui saute ?',
    options: [
      { id: 'a', text: 'Le lapin', isCorrect: true },
      { id: 'b', text: 'La carotte', isCorrect: false },
      { id: 'c', text: 'Le jardin', isCorrect: false }
    ],
    correctAnswer: 'Le lapin',
    explanation: 'C’est le lapin qui saute.',
    hint: 'Cherche qui fait l’action.',
    tags: ['cp','lecture','sujet','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-110',
    subject: 'francais',
    title: 'Que mange le personnage ?',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Tom mange une banane. Que mange Tom ?',
    options: [
      { id: 'a', text: 'Une banane', isCorrect: true },
      { id: 'b', text: 'Une craie', isCorrect: false },
      { id: 'c', text: 'Un ballon', isCorrect: false }
    ],
    correctAnswer: 'Une banane',
    explanation: 'La phrase dit que Tom mange une banane.',
    hint: 'Cherche ce que Tom mange.',
    tags: ['cp','lecture','nourriture','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-111',
    subject: 'francais',
    title: 'Trouver la bonne fin',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Choisis la bonne fin de phrase.',
    prompt: 'La maîtresse écrit au ...',
    options: [
      { id: 'a', text: 'tableau', isCorrect: true },
      { id: 'b', text: 'nuage', isCorrect: false },
      { id: 'c', text: 'gâteau', isCorrect: false }
    ],
    correctAnswer: 'tableau',
    explanation: 'Une maîtresse écrit au tableau.',
    hint: 'Pense à l’école.',
    tags: ['cp','lecture','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-112',
    subject: 'francais',
    title: 'Lire et repérer un animal',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le cheval court vite. Quel animal court ?',
    options: [
      { id: 'a', text: 'Le cheval', isCorrect: true },
      { id: 'b', text: 'Le tracteur', isCorrect: false },
      { id: 'c', text: 'Le banc', isCorrect: false }
    ],
    correctAnswer: 'Le cheval',
    explanation: 'La phrase parle du cheval.',
    hint: 'Cherche l’animal.',
    tags: ['cp','lecture','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-113',
    subject: 'francais',
    title: 'Comprendre un lieu naturel',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du lieu',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le canard nage dans la mare. Où nage le canard ?',
    options: [
      { id: 'a', text: 'Dans la mare', isCorrect: true },
      { id: 'b', text: 'Dans la classe', isCorrect: false },
      { id: 'c', text: 'Dans la boîte', isCorrect: false }
    ],
    correctAnswer: 'Dans la mare',
    explanation: 'Le canard nage dans la mare.',
    hint: 'Cherche le lieu.',
    tags: ['cp','lecture','nature','lieu','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-114',
    subject: 'francais',
    title: 'Repérer une action de classe',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Emma lit un livre. Que fait Emma ?',
    options: [
      { id: 'a', text: 'Elle lit', isCorrect: true },
      { id: 'b', text: 'Elle saute', isCorrect: false },
      { id: 'c', text: 'Elle peint', isCorrect: false }
    ],
    correctAnswer: 'Elle lit',
    explanation: 'La phrase dit qu’Emma lit.',
    hint: 'Cherche l’action.',
    tags: ['cp','lecture','ecole','action','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-115',
    subject: 'francais',
    title: 'Choisir la phrase identique',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'association de sens',
    format: 'qcm',
    instructions: 'Choisis la phrase qui dit la même chose.',
    prompt: 'Un oiseau chante sur le toit.',
    options: [
      { id: 'a', text: 'Un oiseau chante sur le toit', isCorrect: true },
      { id: 'b', text: 'Un oiseau dort sous la table', isCorrect: false },
      { id: 'c', text: 'Le toit chante', isCorrect: false }
    ],
    correctAnswer: 'Un oiseau chante sur le toit',
    explanation: 'La première proposition reprend le même sens.',
    hint: 'Relis toute la phrase.',
    tags: ['cp','lecture','association','nature','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-116',
    subject: 'francais',
    title: 'Identifier un objet d’école',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Noé range son cahier. Que range Noé ?',
    options: [
      { id: 'a', text: 'Son cahier', isCorrect: true },
      { id: 'b', text: 'Son oreiller', isCorrect: false },
      { id: 'c', text: 'Son manteau', isCorrect: false }
    ],
    correctAnswer: 'Son cahier',
    explanation: 'La phrase dit que Noé range son cahier.',
    hint: 'Cherche l’objet.',
    tags: ['cp','lecture','ecole','objet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-117',
    subject: 'francais',
    title: 'Identifier le personnage dans une phrase',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'La maîtresse parle. Qui parle ?',
    options: [
      { id: 'a', text: 'La maîtresse', isCorrect: true },
      { id: 'b', text: 'La classe', isCorrect: false },
      { id: 'c', text: 'Le tableau', isCorrect: false }
    ],
    correctAnswer: 'La maîtresse',
    explanation: 'La maîtresse fait l’action de parler.',
    hint: 'Qui fait l’action ?',
    tags: ['cp','lecture','sujet','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-118',
    subject: 'francais',
    title: 'Trouver la bonne réponse explicite',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Léo met son manteau car il a froid. Pourquoi met-il son manteau ?',
    options: [
      { id: 'a', text: 'Car il a froid', isCorrect: true },
      { id: 'b', text: 'Car il nage', isCorrect: false },
      { id: 'c', text: 'Car il dort', isCorrect: false }
    ],
    correctAnswer: 'Car il a froid',
    explanation: 'La raison est donnée dans la phrase.',
    hint: 'Relis la fin.',
    tags: ['cp','lecture','cause','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-119',
    subject: 'francais',
    title: 'Comprendre un petit déplacement',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension de phrase',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Zoé va au parc avec sa balle. Où va Zoé ?',
    options: [
      { id: 'a', text: 'Au parc', isCorrect: true },
      { id: 'b', text: 'À la cave', isCorrect: false },
      { id: 'c', text: 'Au garage', isCorrect: false }
    ],
    correctAnswer: 'Au parc',
    explanation: 'La phrase dit que Zoé va au parc.',
    hint: 'Cherche où elle va.',
    tags: ['cp','lecture','lieu','jeux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-lecture-120',
    subject: 'francais',
    title: 'Associer phrase et sens',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'association de sens',
    format: 'qcm',
    instructions: 'Choisis la phrase qui correspond.',
    prompt: 'Le bébé pleure dans son lit.',
    options: [
      { id: 'a', text: 'Le bébé pleure dans son lit', isCorrect: true },
      { id: 'b', text: 'Le bébé rit dans le jardin', isCorrect: false },
      { id: 'c', text: 'Le lit pleure', isCorrect: false }
    ],
    correctAnswer: 'Le bébé pleure dans son lit',
    explanation: 'Une seule phrase reprend le bon personnage, la bonne action et le bon lieu.',
    hint: 'Compare tous les mots.',
    tags: ['cp','lecture','association','famille','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CP — ORTHOGRAPHE (fr-cp-orthographe-101 à 118)
  ===================================================================== */
  {
    id: 'fr-cp-orthographe-101',
    subject: 'francais',
    title: 'Choisir un ou une',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'determinants un-une',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ girafe court.',
    options: [
      { id: 'a', text: 'Un', isCorrect: false },
      { id: 'b', text: 'Une', isCorrect: true }
    ],
    correctAnswer: 'Une',
    explanation: 'On dit une girafe.',
    hint: 'Girafe est féminin.',
    tags: ['cp','orthographe','determinants','un-une','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-102',
    subject: 'francais',
    title: 'Choisir le ou la',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'determinants le-la',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ ballon roule.',
    options: [
      { id: 'a', text: 'Le', isCorrect: true },
      { id: 'b', text: 'La', isCorrect: false }
    ],
    correctAnswer: 'Le',
    explanation: 'On dit le ballon.',
    hint: 'Ballon est masculin.',
    tags: ['cp','orthographe','determinants','le-la','jeux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-103',
    subject: 'francais',
    title: 'Pluriel simple',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'pluriel en s',
    format: 'qcm',
    instructions: 'Choisis la bonne écriture.',
    prompt: 'Plusieurs lapin :',
    options: [
      { id: 'a', text: 'des lapins', isCorrect: true },
      { id: 'b', text: 'des lapin', isCorrect: false }
    ],
    correctAnswer: 'des lapins',
    explanation: 'Au pluriel, on ajoute souvent un s.',
    hint: 'Il y en a plusieurs.',
    tags: ['cp','orthographe','pluriel','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-104',
    subject: 'francais',
    title: 'Mon ou ma',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'ma-mon',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ veste est rouge.',
    options: [
      { id: 'a', text: 'Mon', isCorrect: false },
      { id: 'b', text: 'Ma', isCorrect: true }
    ],
    correctAnswer: 'Ma',
    explanation: 'On dit ma veste.',
    hint: 'Veste est féminin.',
    tags: ['cp','orthographe','ma-mon','vetements','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-105',
    subject: 'francais',
    title: 'Et ou est',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Léo ___ Mila jouent.',
    options: [
      { id: 'a', text: 'et', isCorrect: true },
      { id: 'b', text: 'est', isCorrect: false }
    ],
    correctAnswer: 'et',
    explanation: 'Le mot et relie deux prénoms.',
    hint: 'Ici, on ajoute une personne.',
    tags: ['cp','orthographe','et-est','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-106',
    subject: 'francais',
    title: 'Son ou sont',
    schoolClass: 'CP',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ cartable est bleu.',
    options: [
      { id: 'a', text: 'Son', isCorrect: true },
      { id: 'b', text: 'Sont', isCorrect: false }
    ],
    correctAnswer: 'Son',
    explanation: 'On parle du cartable de quelqu’un.',
    hint: 'On montre un objet.',
    tags: ['cp','orthographe','son-sont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-107',
    subject: 'francais',
    title: 'Un ou une avec objet',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'determinants un-une',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ tomate est ronde.',
    options: [
      { id: 'a', text: 'Un', isCorrect: false },
      { id: 'b', text: 'Une', isCorrect: true }
    ],
    correctAnswer: 'Une',
    explanation: 'On dit une tomate.',
    hint: 'Tomate est féminin.',
    tags: ['cp','orthographe','determinants','un-une','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-108',
    subject: 'francais',
    title: 'Le ou la avec véhicule',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'determinants le-la',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ vélo est neuf.',
    options: [
      { id: 'a', text: 'Le', isCorrect: true },
      { id: 'b', text: 'La', isCorrect: false }
    ],
    correctAnswer: 'Le',
    explanation: 'On dit le vélo.',
    hint: 'Vélo est masculin.',
    tags: ['cp','orthographe','determinants','le-la','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-109',
    subject: 'francais',
    title: 'Ma ou mon avec maison',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'ma-mon',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ chambre est rangée.',
    options: [
      { id: 'a', text: 'Mon', isCorrect: false },
      { id: 'b', text: 'Ma', isCorrect: true }
    ],
    correctAnswer: 'Ma',
    explanation: 'On dit ma chambre.',
    hint: 'Chambre est féminin.',
    tags: ['cp','orthographe','ma-mon','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-110',
    subject: 'francais',
    title: 'Mon ou ma avec école',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'ma-mon',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ cahier est propre.',
    options: [
      { id: 'a', text: 'Mon', isCorrect: true },
      { id: 'b', text: 'Ma', isCorrect: false }
    ],
    correctAnswer: 'Mon',
    explanation: 'On dit mon cahier.',
    hint: 'Cahier est masculin.',
    tags: ['cp','orthographe','ma-mon','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-111',
    subject: 'francais',
    title: 'Pluriel avec objet',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'pluriel en s',
    format: 'qcm',
    instructions: 'Choisis la bonne écriture.',
    prompt: 'Plusieurs vélo :',
    options: [
      { id: 'a', text: 'des vélos', isCorrect: true },
      { id: 'b', text: 'des vélo', isCorrect: false }
    ],
    correctAnswer: 'des vélos',
    explanation: 'Au pluriel, on ajoute un s.',
    hint: 'Ils sont plusieurs.',
    tags: ['cp','orthographe','pluriel','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-112',
    subject: 'francais',
    title: 'Pluriel avec animal',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'pluriel en s',
    format: 'qcm',
    instructions: 'Choisis la bonne écriture.',
    prompt: 'Plusieurs chat :',
    options: [
      { id: 'a', text: 'des chats', isCorrect: true },
      { id: 'b', text: 'des chat', isCorrect: false }
    ],
    correctAnswer: 'des chats',
    explanation: 'Au pluriel, on écrit des chats.',
    hint: 'Regarde s’il y en a plusieurs.',
    tags: ['cp','orthographe','pluriel','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-113',
    subject: 'francais',
    title: 'Et ou est avec verbe',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Le chat ___ noir.',
    options: [
      { id: 'a', text: 'et', isCorrect: false },
      { id: 'b', text: 'est', isCorrect: true }
    ],
    correctAnswer: 'est',
    explanation: 'Ici, est est le verbe être.',
    hint: 'Peut-on dire était ?',
    tags: ['cp','orthographe','et-est','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-114',
    subject: 'francais',
    title: 'Son ou sont avec pluriel',
    schoolClass: 'CP',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Ils ___ prêts.',
    options: [
      { id: 'a', text: 'son', isCorrect: false },
      { id: 'b', text: 'sont', isCorrect: true }
    ],
    correctAnswer: 'sont',
    explanation: 'Avec ils, on utilise souvent sont.',
    hint: 'Peut-on dire ils étaient ?',
    tags: ['cp','orthographe','son-sont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-115',
    subject: 'francais',
    title: 'Le ou la avec nature',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'determinants le-la',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ soleil brille.',
    options: [
      { id: 'a', text: 'Le', isCorrect: true },
      { id: 'b', text: 'La', isCorrect: false }
    ],
    correctAnswer: 'Le',
    explanation: 'On dit le soleil.',
    hint: 'Soleil est masculin.',
    tags: ['cp','orthographe','determinants','nature','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-116',
    subject: 'francais',
    title: 'Un ou une avec classe',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'determinants un-une',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ règle est longue.',
    options: [
      { id: 'a', text: 'Un', isCorrect: false },
      { id: 'b', text: 'Une', isCorrect: true }
    ],
    correctAnswer: 'Une',
    explanation: 'On dit une règle.',
    hint: 'Règle est féminin.',
    tags: ['cp','orthographe','determinants','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-117',
    subject: 'francais',
    title: 'Ma ou mon avec famille',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'ma-mon',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ frère joue.',
    options: [
      { id: 'a', text: 'Mon', isCorrect: true },
      { id: 'b', text: 'Ma', isCorrect: false }
    ],
    correctAnswer: 'Mon',
    explanation: 'On dit mon frère.',
    hint: 'Frère est masculin.',
    tags: ['cp','orthographe','ma-mon','famille','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-orthographe-118',
    subject: 'francais',
    title: 'Pluriel avec fourniture',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'pluriel en s',
    format: 'qcm',
    instructions: 'Choisis la bonne écriture.',
    prompt: 'Plusieurs crayon :',
    options: [
      { id: 'a', text: 'des crayons', isCorrect: true },
      { id: 'b', text: 'des crayon', isCorrect: false }
    ],
    correctAnswer: 'des crayons',
    explanation: 'Au pluriel, on écrit des crayons.',
    hint: 'On parle de plusieurs objets.',
    tags: ['cp','orthographe','pluriel','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CP — GRAMMAIRE (fr-cp-grammaire-101 à 118)
  ===================================================================== */
  {
    id: 'fr-cp-grammaire-101',
    subject: 'francais',
    title: 'Trouver le verbe',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le mot qui dit l’action.',
    prompt: 'Le chat grimpe.',
    options: [
      { id: 'a', text: 'chat', isCorrect: false },
      { id: 'b', text: 'grimpe', isCorrect: true }
    ],
    correctAnswer: 'grimpe',
    explanation: 'Le verbe dit ce que fait le chat.',
    hint: 'Cherche l’action.',
    tags: ['cp','grammaire','verbe','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-102',
    subject: 'francais',
    title: 'Trouver le nom',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le nom',
    format: 'qcm',
    instructions: 'Choisis le nom.',
    prompt: 'La tortue avance.',
    options: [
      { id: 'a', text: 'tortue', isCorrect: true },
      { id: 'b', text: 'avance', isCorrect: false }
    ],
    correctAnswer: 'tortue',
    explanation: 'Tortue est un nom.',
    hint: 'Le nom désigne un être vivant ou une chose.',
    tags: ['cp','grammaire','nom','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-103',
    subject: 'francais',
    title: 'Trouver le sujet',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis celui qui fait l’action.',
    prompt: 'Les enfants rient.',
    options: [
      { id: 'a', text: 'Les enfants', isCorrect: true },
      { id: 'b', text: 'rient', isCorrect: false }
    ],
    correctAnswer: 'Les enfants',
    explanation: 'Le sujet est celui qui fait l’action.',
    hint: 'Qui rit ?',
    tags: ['cp','grammaire','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-104',
    subject: 'francais',
    title: 'Singulier ou pluriel',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'singulier-pluriel',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'des pommes',
    options: [
      { id: 'a', text: 'Singulier', isCorrect: false },
      { id: 'b', text: 'Pluriel', isCorrect: true }
    ],
    correctAnswer: 'Pluriel',
    explanation: 'Des pommes, cela veut dire plusieurs pommes.',
    hint: 'Y en a-t-il une ou plusieurs ?',
    tags: ['cp','grammaire','singulier-pluriel','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-105',
    subject: 'francais',
    title: 'Masculin ou féminin',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'masculin-feminin',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'robe',
    options: [
      { id: 'a', text: 'Masculin', isCorrect: false },
      { id: 'b', text: 'Féminin', isCorrect: true }
    ],
    correctAnswer: 'Féminin',
    explanation: 'Robe est un nom féminin.',
    hint: 'Essaie avec une robe.',
    tags: ['cp','grammaire','masculin-feminin','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-106',
    subject: 'francais',
    title: 'Reconnaître un déterminant',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'determinant',
    format: 'qcm',
    instructions: 'Choisis le déterminant.',
    prompt: 'Le chien court.',
    options: [
      { id: 'a', text: 'Le', isCorrect: true },
      { id: 'b', text: 'chien', isCorrect: false },
      { id: 'c', text: 'court', isCorrect: false }
    ],
    correctAnswer: 'Le',
    explanation: 'Le déterminant est placé devant le nom.',
    hint: 'Cherche le petit mot devant le nom.',
    tags: ['cp','grammaire','determinant','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-107',
    subject: 'francais',
    title: 'Nom ou verbe',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Dans la phrase « Lila chante », le mot chante est :',
    options: [
      { id: 'a', text: 'un nom', isCorrect: false },
      { id: 'b', text: 'un verbe', isCorrect: true }
    ],
    correctAnswer: 'un verbe',
    explanation: 'Chante dit l’action.',
    hint: 'Est-ce une action ?',
    tags: ['cp','grammaire','nature-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-108',
    subject: 'francais',
    title: 'Trouver le nom d’objet',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le nom',
    format: 'qcm',
    instructions: 'Choisis le nom.',
    prompt: 'Le cartable tombe.',
    options: [
      { id: 'a', text: 'cartable', isCorrect: true },
      { id: 'b', text: 'tombe', isCorrect: false }
    ],
    correctAnswer: 'cartable',
    explanation: 'Cartable est un nom.',
    hint: 'Le nom désigne une chose.',
    tags: ['cp','grammaire','nom','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-109',
    subject: 'francais',
    title: 'Trouver le verbe d’action',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'Papa cuisine.',
    options: [
      { id: 'a', text: 'Papa', isCorrect: false },
      { id: 'b', text: 'cuisine', isCorrect: true }
    ],
    correctAnswer: 'cuisine',
    explanation: 'Cuisine est le verbe.',
    hint: 'Cherche l’action.',
    tags: ['cp','grammaire','verbe','famille','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-110',
    subject: 'francais',
    title: 'Sujet dans une phrase simple',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet.',
    prompt: 'Léa saute.',
    options: [
      { id: 'a', text: 'Léa', isCorrect: true },
      { id: 'b', text: 'saute', isCorrect: false }
    ],
    correctAnswer: 'Léa',
    explanation: 'Léa fait l’action.',
    hint: 'Qui saute ?',
    tags: ['cp','grammaire','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-111',
    subject: 'francais',
    title: 'Singulier ou pluriel avec objet',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'singulier-pluriel',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'un camion',
    options: [
      { id: 'a', text: 'Singulier', isCorrect: true },
      { id: 'b', text: 'Pluriel', isCorrect: false }
    ],
    correctAnswer: 'Singulier',
    explanation: 'Un camion veut dire un seul camion.',
    hint: 'Y en a-t-il un seul ?',
    tags: ['cp','grammaire','singulier-pluriel','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-112',
    subject: 'francais',
    title: 'Masculin ou féminin avec animal',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'masculin-feminin',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'girafe',
    options: [
      { id: 'a', text: 'Masculin', isCorrect: false },
      { id: 'b', text: 'Féminin', isCorrect: true }
    ],
    correctAnswer: 'Féminin',
    explanation: 'On dit une girafe.',
    hint: 'Essaie avec une girafe.',
    tags: ['cp','grammaire','masculin-feminin','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-113',
    subject: 'francais',
    title: 'Déterminant devant un nom',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'determinant',
    format: 'qcm',
    instructions: 'Choisis le déterminant.',
    prompt: 'Une pomme roule.',
    options: [
      { id: 'a', text: 'Une', isCorrect: true },
      { id: 'b', text: 'pomme', isCorrect: false },
      { id: 'c', text: 'roule', isCorrect: false }
    ],
    correctAnswer: 'Une',
    explanation: 'Une est le déterminant du nom pomme.',
    hint: 'Cherche le petit mot avant le nom.',
    tags: ['cp','grammaire','determinant','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-114',
    subject: 'francais',
    title: 'Nom ou verbe avec mange',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Dans « Tom mange », le mot mange est :',
    options: [
      { id: 'a', text: 'un verbe', isCorrect: true },
      { id: 'b', text: 'un nom', isCorrect: false }
    ],
    correctAnswer: 'un verbe',
    explanation: 'Mange exprime une action.',
    hint: 'Peut-on le faire ?',
    tags: ['cp','grammaire','nature-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-115',
    subject: 'francais',
    title: 'Nom d’animal dans une phrase',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le nom',
    format: 'qcm',
    instructions: 'Choisis le nom.',
    prompt: 'Le mouton bêle.',
    options: [
      { id: 'a', text: 'mouton', isCorrect: true },
      { id: 'b', text: 'bêle', isCorrect: false }
    ],
    correctAnswer: 'mouton',
    explanation: 'Mouton est un nom.',
    hint: 'C’est un animal.',
    tags: ['cp','grammaire','nom','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-116',
    subject: 'francais',
    title: 'Verbe dans une phrase d’école',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'La cloche sonne.',
    options: [
      { id: 'a', text: 'cloche', isCorrect: false },
      { id: 'b', text: 'sonne', isCorrect: true }
    ],
    correctAnswer: 'sonne',
    explanation: 'Sonne est l’action.',
    hint: 'Que fait la cloche ?',
    tags: ['cp','grammaire','verbe','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-117',
    subject: 'francais',
    title: 'Sujet pluriel simple',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet.',
    prompt: 'Les oiseaux chantent.',
    options: [
      { id: 'a', text: 'Les oiseaux', isCorrect: true },
      { id: 'b', text: 'chantent', isCorrect: false }
    ],
    correctAnswer: 'Les oiseaux',
    explanation: 'Les oiseaux font l’action de chanter.',
    hint: 'Qui chante ?',
    tags: ['cp','grammaire','sujet','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-grammaire-118',
    subject: 'francais',
    title: 'Masculin avec objet courant',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'masculin-feminin',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'cartable',
    options: [
      { id: 'a', text: 'Masculin', isCorrect: true },
      { id: 'b', text: 'Féminin', isCorrect: false }
    ],
    correctAnswer: 'Masculin',
    explanation: 'On dit un cartable.',
    hint: 'Essaie avec un cartable.',
    tags: ['cp','grammaire','masculin-feminin','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CP — CONJUGAISON (fr-cp-conjugaison-101 à 116)
  ===================================================================== */
  {
    id: 'fr-cp-conjugaison-101',
    subject: 'francais',
    title: 'Être avec je',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Je ___ prêt.',
    options: [
      { id: 'a', text: 'suis', isCorrect: true },
      { id: 'b', text: 'es', isCorrect: false },
      { id: 'c', text: 'est', isCorrect: false }
    ],
    correctAnswer: 'suis',
    explanation: 'Avec je, on dit je suis.',
    hint: 'Pense à : je suis.',
    tags: ['cp','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-102',
    subject: 'francais',
    title: 'Être avec tu',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ content.',
    options: [
      { id: 'a', text: 'es', isCorrect: true },
      { id: 'b', text: 'est', isCorrect: false },
      { id: 'c', text: 'suis', isCorrect: false }
    ],
    correctAnswer: 'es',
    explanation: 'Avec tu, on dit tu es.',
    hint: 'Pense à : tu es.',
    tags: ['cp','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-103',
    subject: 'francais',
    title: 'Avoir avec il',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Il ___ une balle.',
    options: [
      { id: 'a', text: 'a', isCorrect: true },
      { id: 'b', text: 'as', isCorrect: false },
      { id: 'c', text: 'ai', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Avec il, on dit il a.',
    hint: 'Pense à : il a.',
    tags: ['cp','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-104',
    subject: 'francais',
    title: 'Aller avec nous',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ à l’école.',
    options: [
      { id: 'a', text: 'allons', isCorrect: true },
      { id: 'b', text: 'allez', isCorrect: false },
      { id: 'c', text: 'vais', isCorrect: false }
    ],
    correctAnswer: 'allons',
    explanation: 'Avec nous, on dit nous allons.',
    hint: 'Pense à : nous allons.',
    tags: ['cp','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-105',
    subject: 'francais',
    title: 'Être avec il',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Il ___ fatigué.',
    options: [
      { id: 'a', text: 'est', isCorrect: true },
      { id: 'b', text: 'es', isCorrect: false },
      { id: 'c', text: 'suis', isCorrect: false }
    ],
    correctAnswer: 'est',
    explanation: 'Avec il, on dit il est.',
    hint: 'Pense à : il est.',
    tags: ['cp','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-106',
    subject: 'francais',
    title: 'Avoir avec j’',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'J’___ faim.',
    options: [
      { id: 'a', text: 'ai', isCorrect: true },
      { id: 'b', text: 'as', isCorrect: false },
      { id: 'c', text: 'a', isCorrect: false }
    ],
    correctAnswer: 'ai',
    explanation: 'Avec j’, on dit j’ai.',
    hint: 'Pense à : j’ai.',
    tags: ['cp','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-107',
    subject: 'francais',
    title: 'Avoir avec tu',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ un doudou.',
    options: [
      { id: 'a', text: 'as', isCorrect: true },
      { id: 'b', text: 'ai', isCorrect: false },
      { id: 'c', text: 'a', isCorrect: false }
    ],
    correctAnswer: 'as',
    explanation: 'Avec tu, on dit tu as.',
    hint: 'Pense à : tu as.',
    tags: ['cp','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-108',
    subject: 'francais',
    title: 'Aller avec je',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Je ___ au parc.',
    options: [
      { id: 'a', text: 'vais', isCorrect: true },
      { id: 'b', text: 'va', isCorrect: false },
      { id: 'c', text: 'allons', isCorrect: false }
    ],
    correctAnswer: 'vais',
    explanation: 'Avec je, on dit je vais.',
    hint: 'Pense à : je vais.',
    tags: ['cp','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-109',
    subject: 'francais',
    title: 'Verbe du 1er groupe avec je',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present 1er groupe',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Je ___ dans la cour.',
    options: [
      { id: 'a', text: 'joue', isCorrect: true },
      { id: 'b', text: 'joues', isCorrect: false },
      { id: 'c', text: 'jouons', isCorrect: false }
    ],
    correctAnswer: 'joue',
    explanation: 'Avec je, on dit je joue.',
    hint: 'Pense à : je joue.',
    tags: ['cp','conjugaison','1er-groupe','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-110',
    subject: 'francais',
    title: 'Verbe du 1er groupe avec nous',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present 1er groupe',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ en classe.',
    options: [
      { id: 'a', text: 'chantons', isCorrect: true },
      { id: 'b', text: 'chante', isCorrect: false },
      { id: 'c', text: 'chantez', isCorrect: false }
    ],
    correctAnswer: 'chantons',
    explanation: 'Avec nous, on dit nous chantons.',
    hint: 'Pense à : nous chantons.',
    tags: ['cp','conjugaison','1er-groupe','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-111',
    subject: 'francais',
    title: 'Être avec nous',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ contents.',
    options: [
      { id: 'a', text: 'sommes', isCorrect: true },
      { id: 'b', text: 'êtes', isCorrect: false },
      { id: 'c', text: 'sont', isCorrect: false }
    ],
    correctAnswer: 'sommes',
    explanation: 'Avec nous, on dit nous sommes.',
    hint: 'Pense à : nous sommes.',
    tags: ['cp','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-112',
    subject: 'francais',
    title: 'Avoir avec nous',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ une idée.',
    options: [
      { id: 'a', text: 'avons', isCorrect: true },
      { id: 'b', text: 'avez', isCorrect: false },
      { id: 'c', text: 'ont', isCorrect: false }
    ],
    correctAnswer: 'avons',
    explanation: 'Avec nous, on dit nous avons.',
    hint: 'Pense à : nous avons.',
    tags: ['cp','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-113',
    subject: 'francais',
    title: 'Aller avec ils',
    schoolClass: 'CP',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Ils ___ au stade.',
    options: [
      { id: 'a', text: 'vont', isCorrect: true },
      { id: 'b', text: 'allez', isCorrect: false },
      { id: 'c', text: 'vais', isCorrect: false }
    ],
    correctAnswer: 'vont',
    explanation: 'Avec ils, on dit ils vont.',
    hint: 'Pense à : ils vont.',
    tags: ['cp','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-114',
    subject: 'francais',
    title: 'Être avec ils',
    schoolClass: 'CP',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Ils ___ prêts.',
    options: [
      { id: 'a', text: 'sont', isCorrect: true },
      { id: 'b', text: 'sommes', isCorrect: false },
      { id: 'c', text: 'êtes', isCorrect: false }
    ],
    correctAnswer: 'sont',
    explanation: 'Avec ils, on dit ils sont.',
    hint: 'Pense à : ils sont.',
    tags: ['cp','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-115',
    subject: 'francais',
    title: 'Avoir avec elles',
    schoolClass: 'CP',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Elles ___ chaud.',
    options: [
      { id: 'a', text: 'ont', isCorrect: true },
      { id: 'b', text: 'avons', isCorrect: false },
      { id: 'c', text: 'avez', isCorrect: false }
    ],
    correctAnswer: 'ont',
    explanation: 'Avec elles, on dit elles ont.',
    hint: 'Pense à : elles ont.',
    tags: ['cp','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-conjugaison-116',
    subject: 'francais',
    title: 'Verbe du 1er groupe avec tu',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present 1er groupe',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ bien.',
    options: [
      { id: 'a', text: 'dessines', isCorrect: true },
      { id: 'b', text: 'dessine', isCorrect: false },
      { id: 'c', text: 'dessinons', isCorrect: false }
    ],
    correctAnswer: 'dessines',
    explanation: 'Avec tu, on dit tu dessines.',
    hint: 'Pense à : tu dessines.',
    tags: ['cp','conjugaison','1er-groupe','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CP — VOCABULAIRE (fr-cp-vocabulaire-101 à 116)
  ===================================================================== */
  {
    id: 'fr-cp-vocabulaire-101',
    subject: 'francais',
    title: 'Trouver un animal',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un animal ?',
    options: [
      { id: 'a', text: 'lion', isCorrect: true },
      { id: 'b', text: 'table', isCorrect: false },
      { id: 'c', text: 'savon', isCorrect: false }
    ],
    correctAnswer: 'lion',
    explanation: 'Le lion est un animal.',
    hint: 'Cherche un être vivant.',
    tags: ['cp','vocabulaire','categories','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-102',
    subject: 'francais',
    title: 'Trouver un vêtement',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un vêtement ?',
    options: [
      { id: 'a', text: 'bonnet', isCorrect: true },
      { id: 'b', text: 'banane', isCorrect: false },
      { id: 'c', text: 'ardoise', isCorrect: false }
    ],
    correctAnswer: 'bonnet',
    explanation: 'Le bonnet est un vêtement.',
    hint: 'On le porte sur soi.',
    tags: ['cp','vocabulaire','categories','vetements','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-103',
    subject: 'francais',
    title: 'Trouver le contraire',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires simples',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de grand est :',
    options: [
      { id: 'a', text: 'petit', isCorrect: true },
      { id: 'b', text: 'lourd', isCorrect: false },
      { id: 'c', text: 'bleu', isCorrect: false }
    ],
    correctAnswer: 'petit',
    explanation: 'Petit est le contraire de grand.',
    hint: 'Cherche le mot opposé.',
    tags: ['cp','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-104',
    subject: 'francais',
    title: 'Trouver l’intrus',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un fruit ?',
    options: [
      { id: 'a', text: 'pomme', isCorrect: false },
      { id: 'b', text: 'poire', isCorrect: false },
      { id: 'c', text: 'chaise', isCorrect: true }
    ],
    correctAnswer: 'chaise',
    explanation: 'Chaise n’est pas un fruit.',
    hint: 'Deux mots vont ensemble.',
    tags: ['cp','vocabulaire','intrus','fruits','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-105',
    subject: 'francais',
    title: 'Objet d’école',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un objet de la classe ?',
    options: [
      { id: 'a', text: 'ardoise', isCorrect: true },
      { id: 'b', text: 'requin', isCorrect: false },
      { id: 'c', text: 'forêt', isCorrect: false }
    ],
    correctAnswer: 'ardoise',
    explanation: 'L’ardoise est un objet de la classe.',
    hint: 'Cherche un objet pour apprendre.',
    tags: ['cp','vocabulaire','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-106',
    subject: 'francais',
    title: 'Trouver un fruit',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un fruit ?',
    options: [
      { id: 'a', text: 'pêche', isCorrect: true },
      { id: 'b', text: 'chaussette', isCorrect: false },
      { id: 'c', text: 'coussin', isCorrect: false }
    ],
    correctAnswer: 'pêche',
    explanation: 'La pêche est un fruit.',
    hint: 'On peut le manger.',
    tags: ['cp','vocabulaire','fruits','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-107',
    subject: 'francais',
    title: 'Contraire simple 2',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires simples',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de chaud est :',
    options: [
      { id: 'a', text: 'froid', isCorrect: true },
      { id: 'b', text: 'vite', isCorrect: false },
      { id: 'c', text: 'clair', isCorrect: false }
    ],
    correctAnswer: 'froid',
    explanation: 'Froid est le contraire de chaud.',
    hint: 'Cherche l’opposé.',
    tags: ['cp','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-108',
    subject: 'francais',
    title: 'Intrus dans les animaux',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Quel mot n’est pas un animal ?',
    options: [
      { id: 'a', text: 'chien', isCorrect: false },
      { id: 'b', text: 'chat', isCorrect: false },
      { id: 'c', text: 'crayon', isCorrect: true }
    ],
    correctAnswer: 'crayon',
    explanation: 'Crayon n’est pas un animal.',
    hint: 'Deux mots parlent d’animaux.',
    tags: ['cp','vocabulaire','intrus','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-109',
    subject: 'francais',
    title: 'Mot de la maison',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est dans la maison ?',
    options: [
      { id: 'a', text: 'canapé', isCorrect: true },
      { id: 'b', text: 'nuage', isCorrect: false },
      { id: 'c', text: 'girafe', isCorrect: false }
    ],
    correctAnswer: 'canapé',
    explanation: 'Le canapé se trouve dans la maison.',
    hint: 'Cherche un objet du salon.',
    tags: ['cp','vocabulaire','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-110',
    subject: 'francais',
    title: 'Mot de la cour',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel sert à jouer ?',
    options: [
      { id: 'a', text: 'ballon', isCorrect: true },
      { id: 'b', text: 'oreiller', isCorrect: false },
      { id: 'c', text: 'fourchette', isCorrect: false }
    ],
    correctAnswer: 'ballon',
    explanation: 'Le ballon sert à jouer.',
    hint: 'Cherche un objet de jeu.',
    tags: ['cp','vocabulaire','jeux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-111',
    subject: 'francais',
    title: 'Contraire simple 3',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires simples',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de ouvrir est :',
    options: [
      { id: 'a', text: 'fermer', isCorrect: true },
      { id: 'b', text: 'chanter', isCorrect: false },
      { id: 'c', text: 'marcher', isCorrect: false }
    ],
    correctAnswer: 'fermer',
    explanation: 'Fermer est le contraire de ouvrir.',
    hint: 'Pense à une porte.',
    tags: ['cp','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-112',
    subject: 'francais',
    title: 'Intrus dans les vêtements',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un vêtement ?',
    options: [
      { id: 'a', text: 'pull', isCorrect: false },
      { id: 'b', text: 'manteau', isCorrect: false },
      { id: 'c', text: 'carotte', isCorrect: true }
    ],
    correctAnswer: 'carotte',
    explanation: 'Carotte n’est pas un vêtement.',
    hint: 'Deux mots se portent.',
    tags: ['cp','vocabulaire','intrus','vetements','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-113',
    subject: 'francais',
    title: 'Animal de la ferme',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un animal de la ferme ?',
    options: [
      { id: 'a', text: 'vache', isCorrect: true },
      { id: 'b', text: 'radio', isCorrect: false },
      { id: 'c', text: 'fenêtre', isCorrect: false }
    ],
    correctAnswer: 'vache',
    explanation: 'La vache est un animal de la ferme.',
    hint: 'Cherche un animal.',
    tags: ['cp','vocabulaire','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-114',
    subject: 'francais',
    title: 'Objet pour écrire',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel sert à écrire ?',
    options: [
      { id: 'a', text: 'crayon', isCorrect: true },
      { id: 'b', text: 'chausson', isCorrect: false },
      { id: 'c', text: 'banane', isCorrect: false }
    ],
    correctAnswer: 'crayon',
    explanation: 'Le crayon sert à écrire.',
    hint: 'Cherche un objet d’école.',
    tags: ['cp','vocabulaire','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-115',
    subject: 'francais',
    title: 'Contraire simple 4',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires simples',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de monter est :',
    options: [
      { id: 'a', text: 'descendre', isCorrect: true },
      { id: 'b', text: 'laver', isCorrect: false },
      { id: 'c', text: 'porter', isCorrect: false }
    ],
    correctAnswer: 'descendre',
    explanation: 'Descendre est le contraire de monter.',
    hint: 'Cherche le mouvement inverse.',
    tags: ['cp','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-vocabulaire-116',
    subject: 'francais',
    title: 'Intrus dans les objets de classe',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un objet d’école ?',
    options: [
      { id: 'a', text: 'règle', isCorrect: false },
      { id: 'b', text: 'trousse', isCorrect: false },
      { id: 'c', text: 'poisson', isCorrect: true }
    ],
    correctAnswer: 'poisson',
    explanation: 'Poisson n’est pas un objet d’école.',
    hint: 'Deux mots vont dans la trousse ou sur la table.',
    tags: ['cp','vocabulaire','intrus','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

 /* =====================================================================
     CP — EXPRESSION ECRITE (fr-cp-expressionecrite-101 à 108)
  ===================================================================== */
{
    id: 'fr-cp-expressionecrite-101',
    subject: 'francais',
    title: 'Choisir la phrase correcte',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'phrase correcte',
    format: 'qcm',
    instructions: 'Choisis la phrase bien écrite.',
    prompt: 'Quelle phrase est correcte ?',
    options: [
      { id: 'a', text: 'Le chat dort.', isCorrect: true },
      { id: 'b', text: 'chat le dort', isCorrect: false },
      { id: 'c', text: 'Dort le chat le.', isCorrect: false }
    ],
    correctAnswer: 'Le chat dort.',
    explanation: 'La phrase correcte suit un bon ordre et se lit bien.',
    hint: 'Cherche la phrase qui sonne juste.',
    tags: ['cp','expression-ecrite','phrase-correcte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-expressionecrite-102',
    subject: 'francais',
    title: 'Remettre une idée en bon ordre',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ordre des mots',
    format: 'qcm',
    instructions: 'Choisis la meilleure phrase.',
    prompt: 'Pour dire qu’un chien court, quelle phrase choisis-tu ?',
    options: [
      { id: 'a', text: 'Court chien le.', isCorrect: false },
      { id: 'b', text: 'Le chien court.', isCorrect: true },
      { id: 'c', text: 'Le court chien.', isCorrect: false }
    ],
    correctAnswer: 'Le chien court.',
    explanation: 'Le chien court est la phrase bien ordonnée.',
    hint: 'Commence par le personnage.',
    tags: ['cp','expression-ecrite','ordre-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-expressionecrite-103',
    subject: 'francais',
    title: 'Choisir une phrase complète',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'phrase correcte',
    format: 'qcm',
    instructions: 'Choisis la phrase complète.',
    prompt: 'Quelle phrase est complète ?',
    options: [
      { id: 'a', text: 'La poule picore.', isCorrect: true },
      { id: 'b', text: 'La poule', isCorrect: false },
      { id: 'c', text: 'Picore dans', isCorrect: false }
    ],
    correctAnswer: 'La poule picore.',
    explanation: 'Une phrase complète a du sens.',
    hint: 'Cherche une phrase qui finit bien.',
    tags: ['cp','expression-ecrite','phrase-correcte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-expressionecrite-104',
    subject: 'francais',
    title: 'Trouver le bon ordre 2',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ordre des mots',
    format: 'qcm',
    instructions: 'Choisis la phrase bien rangée.',
    prompt: 'Pour parler de Léa qui lit, choisis la bonne phrase.',
    options: [
      { id: 'a', text: 'Lit Léa.', isCorrect: false },
      { id: 'b', text: 'Léa lit.', isCorrect: true },
      { id: 'c', text: 'Lea la lit.', isCorrect: false }
    ],
    correctAnswer: 'Léa lit.',
    explanation: 'Léa lit est une phrase bien ordonnée.',
    hint: 'Qui fait l’action ?',
    tags: ['cp','expression-ecrite','ordre-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-expressionecrite-105',
    subject: 'francais',
    title: 'Choisir une phrase avec majuscule et point',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ponctuation simple',
    format: 'qcm',
    instructions: 'Choisis la phrase bien écrite.',
    prompt: 'Quelle phrase commence bien et finit bien ?',
    options: [
      { id: 'a', text: 'le chat dort', isCorrect: false },
      { id: 'b', text: 'Le chat dort.', isCorrect: true },
      { id: 'c', text: 'Le chat dort', isCorrect: false }
    ],
    correctAnswer: 'Le chat dort.',
    explanation: 'Une phrase écrite correctement commence par une majuscule et finit par un point.',
    hint: 'Regarde le début et la fin.',
    tags: ['cp','expression-ecrite','ponctuation','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-expressionecrite-106',
    subject: 'francais',
    title: 'Choisir la phrase qui a du sens',
    schoolClass: 'CP',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'coherence de phrase',
    format: 'qcm',
    instructions: 'Choisis la phrase qui a du sens.',
    prompt: 'Quelle phrase a du sens ?',
    options: [
      { id: 'a', text: 'La banane lit un cartable.', isCorrect: false },
      { id: 'b', text: 'Le garçon mange une pomme.', isCorrect: true },
      { id: 'c', text: 'Le trottoir dort vite.', isCorrect: false }
    ],
    correctAnswer: 'Le garçon mange une pomme.',
    explanation: 'Une seule phrase est logique.',
    hint: 'Cherche une scène possible.',
    tags: ['cp','expression-ecrite','coherence','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-expressionecrite-107',
    subject: 'francais',
    title: 'Trouver la meilleure phrase simple',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'phrase correcte',
    format: 'qcm',
    instructions: 'Choisis la meilleure phrase.',
    prompt: 'Quelle phrase est la mieux écrite ?',
    options: [
      { id: 'a', text: 'Ma sœur chante.', isCorrect: true },
      { id: 'b', text: 'Ma chante sœur.', isCorrect: false },
      { id: 'c', text: 'Chante ma sœur le.', isCorrect: false }
    ],
    correctAnswer: 'Ma sœur chante.',
    explanation: 'La phrase correcte a un ordre simple et clair.',
    hint: 'Lis les phrases à voix basse.',
    tags: ['cp','expression-ecrite','phrase-correcte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-cp-expressionecrite-108',
    subject: 'francais',
    title: 'Choisir une phrase logique et ponctuée',
    schoolClass: 'CP',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ponctuation simple',
    format: 'qcm',
    instructions: 'Choisis la bonne phrase.',
    prompt: 'Quelle phrase est bien écrite ?',
    options: [
      { id: 'a', text: 'Nous jouons dehors.', isCorrect: true },
      { id: 'b', text: 'nous jouons dehors', isCorrect: false },
      { id: 'c', text: 'Nous dehors jouons', isCorrect: false }
    ],
    correctAnswer: 'Nous jouons dehors.',
    explanation: 'La bonne phrase a une majuscule, un bon ordre et un point.',
    hint: 'Regarde la majuscule, l’ordre et le point.',
    tags: ['cp','expression-ecrite','ponctuation','ordre-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE1 — LECTURE (fr-ce1-lecture-101 à 120)
  ===================================================================== */
  {
    id: 'fr-ce1-lecture-101',
    subject: 'francais',
    title: 'Comprendre une cause',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis la phrase puis réponds.',
    prompt: 'Tom ferme la fenêtre parce qu’il a froid. Pourquoi Tom ferme-t-il la fenêtre ?',
    options: [
      { id: 'a', text: 'Parce qu’il a froid', isCorrect: true },
      { id: 'b', text: 'Parce qu’il veut courir', isCorrect: false },
      { id: 'c', text: 'Parce qu’il dort', isCorrect: false }
    ],
    correctAnswer: 'Parce qu’il a froid',
    explanation: 'La raison est donnée dans la phrase.',
    hint: 'Relis la fin de la phrase.',
    tags: ['ce1','lecture','comprehension','cause','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-102',
    subject: 'francais',
    title: 'Trouver le lieu',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Lina pose son sac sur la chaise. Où pose-t-elle son sac ?',
    options: [
      { id: 'a', text: 'Sur la chaise', isCorrect: true },
      { id: 'b', text: 'Sous la pluie', isCorrect: false },
      { id: 'c', text: 'Dans le jardin', isCorrect: false }
    ],
    correctAnswer: 'Sur la chaise',
    explanation: 'La phrase dit où se trouve le sac.',
    hint: 'Cherche le lieu.',
    tags: ['ce1','lecture','comprehension','lieu','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-103',
    subject: 'francais',
    title: 'Identifier le personnage',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le boulanger prépare le pain. Qui prépare le pain ?',
    options: [
      { id: 'a', text: 'Le boulanger', isCorrect: true },
      { id: 'b', text: 'Le pain', isCorrect: false },
      { id: 'c', text: 'Le four', isCorrect: false }
    ],
    correctAnswer: 'Le boulanger',
    explanation: 'C’est le boulanger qui fait l’action.',
    hint: 'Qui fait l’action ?',
    tags: ['ce1','lecture','sujet','metier','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-104',
    subject: 'francais',
    title: 'Comprendre une action',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Mila arrose les fleurs. Que fait Mila ?',
    options: [
      { id: 'a', text: 'Elle arrose les fleurs', isCorrect: true },
      { id: 'b', text: 'Elle cueille des pommes', isCorrect: false },
      { id: 'c', text: 'Elle ferme la porte', isCorrect: false }
    ],
    correctAnswer: 'Elle arrose les fleurs',
    explanation: 'La phrase donne l’action exacte.',
    hint: 'Cherche le verbe.',
    tags: ['ce1','lecture','action','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-105',
    subject: 'francais',
    title: 'Repérer un objet',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Noé range ses feutres dans sa trousse. Que range Noé ?',
    options: [
      { id: 'a', text: 'Ses feutres', isCorrect: true },
      { id: 'b', text: 'Ses chaussures', isCorrect: false },
      { id: 'c', text: 'Son goûter', isCorrect: false }
    ],
    correctAnswer: 'Ses feutres',
    explanation: 'La phrase dit ce que Noé range.',
    hint: 'Relis le milieu de la phrase.',
    tags: ['ce1','lecture','objet','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-106',
    subject: 'francais',
    title: 'Comprendre une information simple',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le chat se cache sous le lit pendant l’orage. Où se cache le chat ?',
    options: [
      { id: 'a', text: 'Sous le lit', isCorrect: true },
      { id: 'b', text: 'Dans la forêt', isCorrect: false },
      { id: 'c', text: 'Sur le toit', isCorrect: false }
    ],
    correctAnswer: 'Sous le lit',
    explanation: 'Le lieu est écrit dans la phrase.',
    hint: 'Cherche après le verbe.',
    tags: ['ce1','lecture','lieu','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-107',
    subject: 'francais',
    title: 'Associer phrase et sens',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'association de sens',
    format: 'qcm',
    instructions: 'Choisis la phrase qui dit la même chose.',
    prompt: 'La fillette lit un livre dans sa chambre.',
    options: [
      { id: 'a', text: 'La fillette lit un livre dans sa chambre', isCorrect: true },
      { id: 'b', text: 'La fillette dort dans le salon', isCorrect: false },
      { id: 'c', text: 'Le livre lit la fillette', isCorrect: false }
    ],
    correctAnswer: 'La fillette lit un livre dans sa chambre',
    explanation: 'La première proposition reprend le même sens.',
    hint: 'Compare tous les mots importants.',
    tags: ['ce1','lecture','association','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-108',
    subject: 'francais',
    title: 'Répondre à pourquoi',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Léo met ses bottes car il pleut. Pourquoi met-il ses bottes ?',
    options: [
      { id: 'a', text: 'Car il pleut', isCorrect: true },
      { id: 'b', text: 'Car il nage', isCorrect: false },
      { id: 'c', text: 'Car il a sommeil', isCorrect: false }
    ],
    correctAnswer: 'Car il pleut',
    explanation: 'La réponse est donnée directement.',
    hint: 'Cherche le mot car.',
    tags: ['ce1','lecture','cause','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-109',
    subject: 'francais',
    title: 'Repérer une information de temps',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Ce matin, Zoé arrive en avance à l’école. Quand Zoé arrive-t-elle à l’école ?',
    options: [
      { id: 'a', text: 'Ce matin', isCorrect: true },
      { id: 'b', text: 'Cette nuit', isCorrect: false },
      { id: 'c', text: 'Demain soir', isCorrect: false }
    ],
    correctAnswer: 'Ce matin',
    explanation: 'L’indication de temps est au début de la phrase.',
    hint: 'Regarde le début.',
    tags: ['ce1','lecture','temps','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-110',
    subject: 'francais',
    title: 'Comprendre une consigne simple',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Papa coupe le gâteau pour le dessert. Que coupe papa ?',
    options: [
      { id: 'a', text: 'Le gâteau', isCorrect: true },
      { id: 'b', text: 'La fenêtre', isCorrect: false },
      { id: 'c', text: 'Le manteau', isCorrect: false }
    ],
    correctAnswer: 'Le gâteau',
    explanation: 'L’objet coupé est dans la phrase.',
    hint: 'Cherche ce que papa coupe.',
    tags: ['ce1','lecture','objet','famille','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-111',
    subject: 'francais',
    title: 'Identifier le bon lieu',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Les enfants jouent dans la cour après la classe. Où jouent les enfants ?',
    options: [
      { id: 'a', text: 'Dans la cour', isCorrect: true },
      { id: 'b', text: 'Dans le grenier', isCorrect: false },
      { id: 'c', text: 'Dans l’étang', isCorrect: false }
    ],
    correctAnswer: 'Dans la cour',
    explanation: 'Le lieu est clairement écrit.',
    hint: 'Relis la fin.',
    tags: ['ce1','lecture','lieu','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-112',
    subject: 'francais',
    title: 'Petit raisonnement explicite',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Emma prend un parapluie avant de sortir. Que va-t-elle sûrement rencontrer ?',
    options: [
      { id: 'a', text: 'La pluie', isCorrect: true },
      { id: 'b', text: 'Le sable', isCorrect: false },
      { id: 'c', text: 'Le feu', isCorrect: false }
    ],
    correctAnswer: 'La pluie',
    explanation: 'On prend souvent un parapluie quand il pleut.',
    hint: 'Pense à l’objet.',
    tags: ['ce1','lecture','inference-simple','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-113',
    subject: 'francais',
    title: 'Repérer le sujet',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le voisin repeint sa porte. Qui repeint la porte ?',
    options: [
      { id: 'a', text: 'Le voisin', isCorrect: true },
      { id: 'b', text: 'La porte', isCorrect: false },
      { id: 'c', text: 'La peinture', isCorrect: false }
    ],
    correctAnswer: 'Le voisin',
    explanation: 'Le voisin fait l’action.',
    hint: 'Qui agit ?',
    tags: ['ce1','lecture','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-114',
    subject: 'francais',
    title: 'Repérer l’objet de l’action',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Lina nettoie son vélo avec une éponge. Que nettoie Lina ?',
    options: [
      { id: 'a', text: 'Son vélo', isCorrect: true },
      { id: 'b', text: 'Son pull', isCorrect: false },
      { id: 'c', text: 'Son cahier', isCorrect: false }
    ],
    correctAnswer: 'Son vélo',
    explanation: 'La phrase dit ce qu’elle nettoie.',
    hint: 'Cherche l’objet.',
    tags: ['ce1','lecture','objet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-115',
    subject: 'francais',
    title: 'Phrase équivalente',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'association de sens',
    format: 'qcm',
    instructions: 'Choisis la phrase qui correspond.',
    prompt: 'Le chien aboie devant la maison.',
    options: [
      { id: 'a', text: 'Le chien aboie devant la maison', isCorrect: true },
      { id: 'b', text: 'Le chien dort sous la table', isCorrect: false },
      { id: 'c', text: 'La maison aboie sur le chien', isCorrect: false }
    ],
    correctAnswer: 'Le chien aboie devant la maison',
    explanation: 'Une seule phrase garde le même sens.',
    hint: 'Compare personnage, action et lieu.',
    tags: ['ce1','lecture','association','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-116',
    subject: 'francais',
    title: 'Répondre à qui',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'La maîtresse distribue les cahiers. Qui distribue les cahiers ?',
    options: [
      { id: 'a', text: 'La maîtresse', isCorrect: true },
      { id: 'b', text: 'Les cahiers', isCorrect: false },
      { id: 'c', text: 'La table', isCorrect: false }
    ],
    correctAnswer: 'La maîtresse',
    explanation: 'C’est la maîtresse qui fait l’action.',
    hint: 'Cherche qui agit.',
    tags: ['ce1','lecture','sujet','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-117',
    subject: 'francais',
    title: 'Comprendre une phrase avec avant',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Avant de courir, Sami attache ses lacets. Que fait Sami avant de courir ?',
    options: [
      { id: 'a', text: 'Il attache ses lacets', isCorrect: true },
      { id: 'b', text: 'Il prépare une soupe', isCorrect: false },
      { id: 'c', text: 'Il fait ses devoirs', isCorrect: false }
    ],
    correctAnswer: 'Il attache ses lacets',
    explanation: 'L’action est donnée dans la phrase.',
    hint: 'Cherche ce qu’il fait avant.',
    tags: ['ce1','lecture','temps','action','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-118',
    subject: 'francais',
    title: 'Repérer le bon moment',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Après le repas, Inès brosse ses dents. Quand se brosse-t-elle les dents ?',
    options: [
      { id: 'a', text: 'Après le repas', isCorrect: true },
      { id: 'b', text: 'Avant le réveil', isCorrect: false },
      { id: 'c', text: 'Pendant la récréation', isCorrect: false }
    ],
    correctAnswer: 'Après le repas',
    explanation: 'Le moment est écrit au début.',
    hint: 'Regarde le premier groupe de mots.',
    tags: ['ce1','lecture','temps','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-119',
    subject: 'francais',
    title: 'Comprendre un petit texte très court',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Paul a perdu son ballon. Il cherche partout dans le jardin. Que cherche Paul ?',
    options: [
      { id: 'a', text: 'Son ballon', isCorrect: true },
      { id: 'b', text: 'Son manteau', isCorrect: false },
      { id: 'c', text: 'Son vélo', isCorrect: false }
    ],
    correctAnswer: 'Son ballon',
    explanation: 'La deuxième phrase reprend l’objet perdu.',
    hint: 'Cherche ce qui a été perdu.',
    tags: ['ce1','lecture','petit-texte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-lecture-120',
    subject: 'francais',
    title: 'Repérer une cause simple 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Maya allume la lampe parce qu’il fait sombre. Pourquoi allume-t-elle la lampe ?',
    options: [
      { id: 'a', text: 'Parce qu’il fait sombre', isCorrect: true },
      { id: 'b', text: 'Parce qu’elle nage', isCorrect: false },
      { id: 'c', text: 'Parce qu’elle part en vacances', isCorrect: false }
    ],
    correctAnswer: 'Parce qu’il fait sombre',
    explanation: 'La raison est écrite dans la phrase.',
    hint: 'Relis après parce que.',
    tags: ['ce1','lecture','cause','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE1 — ORTHOGRAPHE (fr-ce1-orthographe-101 à 118)
  ===================================================================== */
  {
    id: 'fr-ce1-orthographe-101',
    subject: 'francais',
    title: 'Et ou est',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Le chat ___ noir.',
    options: [
      { id: 'a', text: 'et', isCorrect: false },
      { id: 'b', text: 'est', isCorrect: true }
    ],
    correctAnswer: 'est',
    explanation: 'Ici, est est le verbe être.',
    hint: 'Peut-on dire était ?',
    tags: ['ce1','orthographe','et-est','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-102',
    subject: 'francais',
    title: 'A ou à',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lina ___ un vélo.',
    options: [
      { id: 'a', text: 'a', isCorrect: true },
      { id: 'b', text: 'à', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Ici, a est le verbe avoir.',
    hint: 'Peut-on dire avait ?',
    tags: ['ce1','orthographe','a-a-grave','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-103',
    subject: 'francais',
    title: 'On ou ont',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Ils ___ une surprise.',
    options: [
      { id: 'a', text: 'on', isCorrect: false },
      { id: 'b', text: 'ont', isCorrect: true }
    ],
    correctAnswer: 'ont',
    explanation: 'Avec ils, on utilise le verbe avoir : ils ont.',
    hint: 'Peut-on dire avaient ?',
    tags: ['ce1','orthographe','on-ont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-104',
    subject: 'francais',
    title: 'Ce ou se',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ matin, il se lève tôt.',
    options: [
      { id: 'a', text: 'Ce', isCorrect: true },
      { id: 'b', text: 'Se', isCorrect: false }
    ],
    correctAnswer: 'Ce',
    explanation: 'On dit ce matin pour montrer le moment.',
    hint: 'Peut-on remplacer par ce jour-là ?',
    tags: ['ce1','orthographe','ce-se','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-105',
    subject: 'francais',
    title: 'Son ou sont',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ cartable est lourd.',
    options: [
      { id: 'a', text: 'Son', isCorrect: true },
      { id: 'b', text: 'Sont', isCorrect: false }
    ],
    correctAnswer: 'Son',
    explanation: 'On parle ici d’un objet qui appartient à quelqu’un.',
    hint: 'Montre-t-on un objet ou une action ?',
    tags: ['ce1','orthographe','son-sont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-106',
    subject: 'francais',
    title: 'Ou ou où',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Sais-tu ___ il habite ?',
    options: [
      { id: 'a', text: 'ou', isCorrect: false },
      { id: 'b', text: 'où', isCorrect: true }
    ],
    correctAnswer: 'où',
    explanation: 'Où sert à parler d’un lieu.',
    hint: 'La phrase parle-t-elle d’un endroit ?',
    tags: ['ce1','orthographe','ou-ou-accent','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-107',
    subject: 'francais',
    title: 'Et ou est 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Léo ___ Mila arrivent.',
    options: [
      { id: 'a', text: 'et', isCorrect: true },
      { id: 'b', text: 'est', isCorrect: false }
    ],
    correctAnswer: 'et',
    explanation: 'Le mot et relie deux prénoms.',
    hint: 'Relie-t-on deux personnes ?',
    tags: ['ce1','orthographe','et-est','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-108',
    subject: 'francais',
    title: 'A ou à 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Il va ___ l’école.',
    options: [
      { id: 'a', text: 'a', isCorrect: false },
      { id: 'b', text: 'à', isCorrect: true }
    ],
    correctAnswer: 'à',
    explanation: 'À indique un lieu.',
    hint: 'Parle-t-on d’un endroit ?',
    tags: ['ce1','orthographe','a-a-grave','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-109',
    subject: 'francais',
    title: 'On ou ont 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ joue dans la cour.',
    options: [
      { id: 'a', text: 'On', isCorrect: true },
      { id: 'b', text: 'Ont', isCorrect: false }
    ],
    correctAnswer: 'On',
    explanation: 'On remplace ici une ou plusieurs personnes.',
    hint: 'Peut-on dire nous ?',
    tags: ['ce1','orthographe','on-ont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-110',
    subject: 'francais',
    title: 'Ce ou se 2',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Il ___ cache derrière la porte.',
    options: [
      { id: 'a', text: 'ce', isCorrect: false },
      { id: 'b', text: 'se', isCorrect: true }
    ],
    correctAnswer: 'se',
    explanation: 'Se fait partie du verbe se cacher.',
    hint: 'Le verbe est-il pronominal ?',
    tags: ['ce1','orthographe','ce-se','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-111',
    subject: 'francais',
    title: 'Son ou sont 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Ils ___ prêts.',
    options: [
      { id: 'a', text: 'son', isCorrect: false },
      { id: 'b', text: 'sont', isCorrect: true }
    ],
    correctAnswer: 'sont',
    explanation: 'Avec ils, on peut utiliser le verbe être : ils sont.',
    hint: 'Peut-on dire ils étaient ?',
    tags: ['ce1','orthographe','son-sont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-112',
    subject: 'francais',
    title: 'Ou ou où 2',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Tu veux du pain ___ du riz ?',
    options: [
      { id: 'a', text: 'ou', isCorrect: true },
      { id: 'b', text: 'où', isCorrect: false }
    ],
    correctAnswer: 'ou',
    explanation: 'Ou sert à proposer un choix.',
    hint: 'Y a-t-il un choix ?',
    tags: ['ce1','orthographe','ou-ou-accent','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-113',
    subject: 'francais',
    title: 'Le ou les',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'orthographe',
    subskill: 'determinants frequents',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ enfants jouent.',
    options: [
      { id: 'a', text: 'Le', isCorrect: false },
      { id: 'b', text: 'Les', isCorrect: true }
    ],
    correctAnswer: 'Les',
    explanation: 'Enfants est au pluriel, on dit les enfants.',
    hint: 'Y en a-t-il plusieurs ?',
    tags: ['ce1','orthographe','determinants','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-114',
    subject: 'francais',
    title: 'Ma ou mon',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'determinants possessifs',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ trousse est bleue.',
    options: [
      { id: 'a', text: 'Ma', isCorrect: true },
      { id: 'b', text: 'Mon', isCorrect: false }
    ],
    correctAnswer: 'Ma',
    explanation: 'On dit ma trousse.',
    hint: 'Trousse est féminin.',
    tags: ['ce1','orthographe','ma-mon','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-115',
    subject: 'francais',
    title: 'Mes ou mais',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ crayons sont neufs.',
    options: [
      { id: 'a', text: 'Mes', isCorrect: true },
      { id: 'b', text: 'Mais', isCorrect: false }
    ],
    correctAnswer: 'Mes',
    explanation: 'Mes montre que les crayons appartiennent à quelqu’un.',
    hint: 'Parle-t-on d’une possession ?',
    tags: ['ce1','orthographe','mes-mais','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-116',
    subject: 'francais',
    title: 'Ces ou ses',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ chaussures sont sales.',
    options: [
      { id: 'a', text: 'Ces', isCorrect: true },
      { id: 'b', text: 'Ses', isCorrect: false }
    ],
    correctAnswer: 'Ces',
    explanation: 'Ces sert à montrer plusieurs choses.',
    hint: 'Peut-on dire ces chaussures-là ?',
    tags: ['ce1','orthographe','ces-ses','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-117',
    subject: 'francais',
    title: 'Ses ou ces',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lina range ___ livres.',
    options: [
      { id: 'a', text: 'ses', isCorrect: true },
      { id: 'b', text: 'ces', isCorrect: false }
    ],
    correctAnswer: 'ses',
    explanation: 'On parle des livres de Lina.',
    hint: 'À qui appartiennent-ils ?',
    tags: ['ce1','orthographe','ces-ses','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-orthographe-118',
    subject: 'francais',
    title: 'Mais ou mes',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones simples',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Je viens, ___ je suis en retard.',
    options: [
      { id: 'a', text: 'mes', isCorrect: false },
      { id: 'b', text: 'mais', isCorrect: true }
    ],
    correctAnswer: 'mais',
    explanation: 'Mais sert à opposer deux idées.',
    hint: 'Y a-t-il une opposition ?',
    tags: ['ce1','orthographe','mes-mais','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE1 — GRAMMAIRE (fr-ce1-grammaire-101 à 118)
  ===================================================================== */
 {
    id: 'fr-ce1-grammaire-101',
    subject: 'francais',
    title: 'Trouver le sujet',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis celui qui fait l’action.',
    prompt: 'Les enfants chantent.',
    options: [
      { id: 'a', text: 'Les enfants', isCorrect: true },
      { id: 'b', text: 'chantent', isCorrect: false }
    ],
    correctAnswer: 'Les enfants',
    explanation: 'Le sujet est celui qui fait l’action.',
    hint: 'Qui chante ?',
    tags: ['ce1','grammaire','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-102',
    subject: 'francais',
    title: 'Trouver le verbe',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le verbe dans la phrase.',
    prompt: 'Lina chante dans la cour.',
    options: [
      { id: 'a', text: 'Lina', isCorrect: false },
      { id: 'b', text: 'chante', isCorrect: true },
      { id: 'c', text: 'cour', isCorrect: false }
    ],
    correctAnswer: 'chante',
    explanation: 'Le verbe dit ce que fait Lina.',
    hint: 'Cherche l’action.',
    tags: ['ce1','grammaire','verbe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-103',
    subject: 'francais',
    title: 'Nom ou verbe',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'Le train arrive vite.',
    options: [
      { id: 'a', text: 'train', isCorrect: false },
      { id: 'b', text: 'arrive', isCorrect: true },
      { id: 'c', text: 'vite', isCorrect: false }
    ],
    correctAnswer: 'arrive',
    explanation: 'Arrive est le verbe de la phrase.',
    hint: 'Cherche ce qui se passe.',
    tags: ['ce1','grammaire','verbe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-104',
    subject: 'francais',
    title: 'Trouver le déterminant',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'determinant',
    format: 'qcm',
    instructions: 'Choisis le déterminant.',
    prompt: 'La tortue avance.',
    options: [
      { id: 'a', text: 'La', isCorrect: true },
      { id: 'b', text: 'tortue', isCorrect: false },
      { id: 'c', text: 'avance', isCorrect: false }
    ],
    correctAnswer: 'La',
    explanation: 'Le déterminant est placé devant le nom.',
    hint: 'Cherche le petit mot devant le nom.',
    tags: ['ce1','grammaire','determinant','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-105',
    subject: 'francais',
    title: 'Singulier ou pluriel',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'singulier-pluriel',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'des pommes',
    options: [
      { id: 'a', text: 'Singulier', isCorrect: false },
      { id: 'b', text: 'Pluriel', isCorrect: true }
    ],
    correctAnswer: 'Pluriel',
    explanation: 'Des pommes veut dire plusieurs pommes.',
    hint: 'Une ou plusieurs ?',
    tags: ['ce1','grammaire','singulier-pluriel','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-106',
    subject: 'francais',
    title: 'Masculin ou féminin',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'masculin-feminin',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'robe',
    options: [
      { id: 'a', text: 'Masculin', isCorrect: false },
      { id: 'b', text: 'Féminin', isCorrect: true }
    ],
    correctAnswer: 'Féminin',
    explanation: 'On dit une robe.',
    hint: 'Essaie avec un ou une.',
    tags: ['ce1','grammaire','masculin-feminin','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-107',
    subject: 'francais',
    title: 'Repérer le sujet 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet.',
    prompt: 'Le lapin mange une carotte.',
    options: [
      { id: 'a', text: 'Le lapin', isCorrect: true },
      { id: 'b', text: 'mange', isCorrect: false },
      { id: 'c', text: 'une carotte', isCorrect: false }
    ],
    correctAnswer: 'Le lapin',
    explanation: 'Le lapin fait l’action de manger.',
    hint: 'Qui mange ?',
    tags: ['ce1','grammaire','sujet','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-108',
    subject: 'francais',
    title: 'Repérer le verbe 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'Papa cuisine ce soir.',
    options: [
      { id: 'a', text: 'Papa', isCorrect: false },
      { id: 'b', text: 'cuisine', isCorrect: true },
      { id: 'c', text: 'soir', isCorrect: false }
    ],
    correctAnswer: 'cuisine',
    explanation: 'Cuisine est l’action.',
    hint: 'Que fait papa ?',
    tags: ['ce1','grammaire','verbe','famille','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-109',
    subject: 'francais',
    title: 'Nom ou verbe 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Dans la phrase « Mila danse », le mot danse est :',
    prompt: 'Mila danse.',
    options: [
      { id: 'a', text: 'un nom', isCorrect: false },
      { id: 'b', text: 'un verbe', isCorrect: true }
    ],
    correctAnswer: 'un verbe',
    explanation: 'Danse dit ce que fait Mila.',
    hint: 'Est-ce une action ?',
    tags: ['ce1','grammaire','nature-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-110',
    subject: 'francais',
    title: 'Trouver le nom',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le nom',
    format: 'qcm',
    instructions: 'Choisis le nom.',
    prompt: 'Le camion roule.',
    options: [
      { id: 'a', text: 'camion', isCorrect: true },
      { id: 'b', text: 'roule', isCorrect: false }
    ],
    correctAnswer: 'camion',
    explanation: 'Camion est un nom.',
    hint: 'Le nom désigne une chose ou un être vivant.',
    tags: ['ce1','grammaire','nom','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-111',
    subject: 'francais',
    title: 'Déterminant 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'determinant',
    format: 'qcm',
    instructions: 'Choisis le déterminant.',
    prompt: 'Les oiseaux chantent.',
    options: [
      { id: 'a', text: 'Les', isCorrect: true },
      { id: 'b', text: 'oiseaux', isCorrect: false },
      { id: 'c', text: 'chantent', isCorrect: false }
    ],
    correctAnswer: 'Les',
    explanation: 'Les accompagne le nom oiseaux.',
    hint: 'Cherche le petit mot avant le nom.',
    tags: ['ce1','grammaire','determinant','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-112',
    subject: 'francais',
    title: 'Singulier ou pluriel 2',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'singulier-pluriel',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'un cahier',
    options: [
      { id: 'a', text: 'Singulier', isCorrect: true },
      { id: 'b', text: 'Pluriel', isCorrect: false }
    ],
    correctAnswer: 'Singulier',
    explanation: 'Un cahier veut dire un seul cahier.',
    hint: 'Y en a-t-il un seul ?',
    tags: ['ce1','grammaire','singulier-pluriel','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-113',
    subject: 'francais',
    title: 'Masculin ou féminin 2',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'masculin-feminin',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'ballon',
    options: [
      { id: 'a', text: 'Masculin', isCorrect: true },
      { id: 'b', text: 'Féminin', isCorrect: false }
    ],
    correctAnswer: 'Masculin',
    explanation: 'On dit un ballon.',
    hint: 'Essaie avec un ou une.',
    tags: ['ce1','grammaire','masculin-feminin','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-114',
    subject: 'francais',
    title: 'Trouver le complément déplacé ? non',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis celui qui fait l’action.',
    prompt: 'Le maître explique la leçon.',
    options: [
      { id: 'a', text: 'Le maître', isCorrect: true },
      { id: 'b', text: 'explique', isCorrect: false },
      { id: 'c', text: 'la leçon', isCorrect: false }
    ],
    correctAnswer: 'Le maître',
    explanation: 'Le maître fait l’action d’expliquer.',
    hint: 'Qui explique ?',
    tags: ['ce1','grammaire','sujet','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-115',
    subject: 'francais',
    title: 'Verbe avec phrase simple',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'Les vagues bougent vite.',
    options: [
      { id: 'a', text: 'vagues', isCorrect: false },
      { id: 'b', text: 'bougent', isCorrect: true },
      { id: 'c', text: 'vite', isCorrect: false }
    ],
    correctAnswer: 'bougent',
    explanation: 'Bougent exprime l’action.',
    hint: 'Cherche ce qui se passe.',
    tags: ['ce1','grammaire','verbe','nature','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-116',
    subject: 'francais',
    title: 'Nom dans la phrase',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le nom',
    format: 'qcm',
    instructions: 'Choisis le nom.',
    prompt: 'La cloche sonne.',
    options: [
      { id: 'a', text: 'cloche', isCorrect: true },
      { id: 'b', text: 'sonne', isCorrect: false }
    ],
    correctAnswer: 'cloche',
    explanation: 'Cloche est le nom.',
    hint: 'Quel mot désigne une chose ?',
    tags: ['ce1','grammaire','nom','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-117',
    subject: 'francais',
    title: 'Nature des mots 3',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Dans « Le chien dort », le mot chien est :',
    prompt: 'Le chien dort.',
    options: [
      { id: 'a', text: 'un nom', isCorrect: true },
      { id: 'b', text: 'un verbe', isCorrect: false }
    ],
    correctAnswer: 'un nom',
    explanation: 'Chien désigne un animal, c’est un nom.',
    hint: 'Le mot désigne-t-il une chose ou une action ?',
    tags: ['ce1','grammaire','nature-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-grammaire-118',
    subject: 'francais',
    title: 'Déterminant 3',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'determinant',
    format: 'qcm',
    instructions: 'Choisis le déterminant.',
    prompt: 'Une étoile brille.',
    options: [
      { id: 'a', text: 'Une', isCorrect: true },
      { id: 'b', text: 'étoile', isCorrect: false },
      { id: 'c', text: 'brille', isCorrect: false }
    ],
    correctAnswer: 'Une',
    explanation: 'Une accompagne le nom étoile.',
    hint: 'Cherche le petit mot placé avant le nom.',
    tags: ['ce1','grammaire','determinant','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE1 — CONJUGAISON (fr-ce1-conjugaison-101 à 116)
  ===================================================================== */
  {
    id: 'fr-ce1-conjugaison-101',
    subject: 'francais',
    title: 'Avoir avec nous',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ une balle.',
    options: [
      { id: 'a', text: 'avons', isCorrect: true },
      { id: 'b', text: 'avez', isCorrect: false },
      { id: 'c', text: 'ont', isCorrect: false }
    ],
    correctAnswer: 'avons',
    explanation: 'Avec nous, on dit nous avons.',
    hint: 'Pense à : nous avons.',
    tags: ['ce1','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-102',
    subject: 'francais',
    title: 'Être avec tu',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ content.',
    options: [
      { id: 'a', text: 'es', isCorrect: true },
      { id: 'b', text: 'est', isCorrect: false },
      { id: 'c', text: 'suis', isCorrect: false }
    ],
    correctAnswer: 'es',
    explanation: 'Avec tu, on dit tu es.',
    hint: 'Pense à : tu es.',
    tags: ['ce1','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-103',
    subject: 'francais',
    title: 'Être avec ils',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Ils ___ prêts.',
    options: [
      { id: 'a', text: 'sont', isCorrect: true },
      { id: 'b', text: 'sommes', isCorrect: false },
      { id: 'c', text: 'êtes', isCorrect: false }
    ],
    correctAnswer: 'sont',
    explanation: 'Avec ils, on dit ils sont.',
    hint: 'Pense à : ils sont.',
    tags: ['ce1','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-104',
    subject: 'francais',
    title: 'Avoir avec j’',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'J’___ une idée.',
    options: [
      { id: 'a', text: 'ai', isCorrect: true },
      { id: 'b', text: 'as', isCorrect: false },
      { id: 'c', text: 'a', isCorrect: false }
    ],
    correctAnswer: 'ai',
    explanation: 'Avec j’, on dit j’ai.',
    hint: 'Pense à : j’ai.',
    tags: ['ce1','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-105',
    subject: 'francais',
    title: 'Aller avec nous',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ à la piscine.',
    options: [
      { id: 'a', text: 'allons', isCorrect: true },
      { id: 'b', text: 'allez', isCorrect: false },
      { id: 'c', text: 'vais', isCorrect: false }
    ],
    correctAnswer: 'allons',
    explanation: 'Avec nous, on dit nous allons.',
    hint: 'Pense à : nous allons.',
    tags: ['ce1','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-106',
    subject: 'francais',
    title: 'Aller avec je',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Je ___ au parc.',
    options: [
      { id: 'a', text: 'vais', isCorrect: true },
      { id: 'b', text: 'va', isCorrect: false },
      { id: 'c', text: 'allons', isCorrect: false }
    ],
    correctAnswer: 'vais',
    explanation: 'Avec je, on dit je vais.',
    hint: 'Pense à : je vais.',
    tags: ['ce1','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-107',
    subject: 'francais',
    title: '1er groupe avec nous',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present 1er groupe',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ en classe.',
    options: [
      { id: 'a', text: 'chantons', isCorrect: true },
      { id: 'b', text: 'chante', isCorrect: false },
      { id: 'c', text: 'chantez', isCorrect: false }
    ],
    correctAnswer: 'chantons',
    explanation: 'Avec nous, on dit nous chantons.',
    hint: 'Pense à : nous chantons.',
    tags: ['ce1','conjugaison','1er-groupe','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-108',
    subject: 'francais',
    title: '1er groupe avec tu',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present 1er groupe',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ bien.',
    options: [
      { id: 'a', text: 'dessines', isCorrect: true },
      { id: 'b', text: 'dessine', isCorrect: false },
      { id: 'c', text: 'dessinons', isCorrect: false }
    ],
    correctAnswer: 'dessines',
    explanation: 'Avec tu, on dit tu dessines.',
    hint: 'Pense à : tu dessines.',
    tags: ['ce1','conjugaison','1er-groupe','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-109',
    subject: 'francais',
    title: 'Être avec nous',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ contents.',
    options: [
      { id: 'a', text: 'sommes', isCorrect: true },
      { id: 'b', text: 'êtes', isCorrect: false },
      { id: 'c', text: 'sont', isCorrect: false }
    ],
    correctAnswer: 'sommes',
    explanation: 'Avec nous, on dit nous sommes.',
    hint: 'Pense à : nous sommes.',
    tags: ['ce1','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-110',
    subject: 'francais',
    title: 'Avoir avec ils',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Ils ___ faim.',
    options: [
      { id: 'a', text: 'ont', isCorrect: true },
      { id: 'b', text: 'avons', isCorrect: false },
      { id: 'c', text: 'avez', isCorrect: false }
    ],
    correctAnswer: 'ont',
    explanation: 'Avec ils, on dit ils ont.',
    hint: 'Pense à : ils ont.',
    tags: ['ce1','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-111',
    subject: 'francais',
    title: '1er groupe avec je',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present 1er groupe',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Je ___ dans la cour.',
    options: [
      { id: 'a', text: 'joue', isCorrect: true },
      { id: 'b', text: 'joues', isCorrect: false },
      { id: 'c', text: 'jouons', isCorrect: false }
    ],
    correctAnswer: 'joue',
    explanation: 'Avec je, on dit je joue.',
    hint: 'Pense à : je joue.',
    tags: ['ce1','conjugaison','1er-groupe','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-112',
    subject: 'francais',
    title: 'Avoir avec tu',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ un livre.',
    options: [
      { id: 'a', text: 'as', isCorrect: true },
      { id: 'b', text: 'ai', isCorrect: false },
      { id: 'c', text: 'a', isCorrect: false }
    ],
    correctAnswer: 'as',
    explanation: 'Avec tu, on dit tu as.',
    hint: 'Pense à : tu as.',
    tags: ['ce1','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-113',
    subject: 'francais',
    title: 'Être avec il',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Il ___ fatigué.',
    options: [
      { id: 'a', text: 'est', isCorrect: true },
      { id: 'b', text: 'es', isCorrect: false },
      { id: 'c', text: 'suis', isCorrect: false }
    ],
    correctAnswer: 'est',
    explanation: 'Avec il, on dit il est.',
    hint: 'Pense à : il est.',
    tags: ['ce1','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-114',
    subject: 'francais',
    title: 'Aller avec ils',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Ils ___ au stade.',
    options: [
      { id: 'a', text: 'vont', isCorrect: true },
      { id: 'b', text: 'allez', isCorrect: false },
      { id: 'c', text: 'vais', isCorrect: false }
    ],
    correctAnswer: 'vont',
    explanation: 'Avec ils, on dit ils vont.',
    hint: 'Pense à : ils vont.',
    tags: ['ce1','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-115',
    subject: 'francais',
    title: '1er groupe avec vous',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'present 1er groupe',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Vous ___ vite.',
    options: [
      { id: 'a', text: 'marchez', isCorrect: true },
      { id: 'b', text: 'marche', isCorrect: false },
      { id: 'c', text: 'marchons', isCorrect: false }
    ],
    correctAnswer: 'marchez',
    explanation: 'Avec vous, on dit vous marchez.',
    hint: 'Pense à : vous marchez.',
    tags: ['ce1','conjugaison','1er-groupe','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-conjugaison-116',
    subject: 'francais',
    title: 'Être avec vous',
    schoolClass: 'CE1',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Vous ___ en avance.',
    options: [
      { id: 'a', text: 'êtes', isCorrect: true },
      { id: 'b', text: 'sommes', isCorrect: false },
      { id: 'c', text: 'sont', isCorrect: false }
    ],
    correctAnswer: 'êtes',
    explanation: 'Avec vous, on dit vous êtes.',
    hint: 'Pense à : vous êtes.',
    tags: ['ce1','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE1 — VOCABULAIRE (fr-ce1-vocabulaire-101 à 116)
  ===================================================================== */
  {
    id: 'fr-ce1-vocabulaire-101',
    subject: 'francais',
    title: 'Synonyme simple',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le mot qui veut presque dire la même chose.',
    prompt: 'Le synonyme de content est :',
    options: [
      { id: 'a', text: 'heureux', isCorrect: true },
      { id: 'b', text: 'triste', isCorrect: false },
      { id: 'c', text: 'rapide', isCorrect: false }
    ],
    correctAnswer: 'heureux',
    explanation: 'Content et heureux ont un sens proche.',
    hint: 'Cherche un mot positif.',
    tags: ['ce1','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-102',
    subject: 'francais',
    title: 'Trouver le contraire',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de grand est :',
    options: [
      { id: 'a', text: 'petit', isCorrect: true },
      { id: 'b', text: 'chaud', isCorrect: false },
      { id: 'c', text: 'long', isCorrect: false }
    ],
    correctAnswer: 'petit',
    explanation: 'Petit est le contraire de grand.',
    hint: 'Cherche le mot opposé.',
    tags: ['ce1','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-103',
    subject: 'francais',
    title: 'Catégorie animal',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un animal ?',
    options: [
      { id: 'a', text: 'renard', isCorrect: true },
      { id: 'b', text: 'armoire', isCorrect: false },
      { id: 'c', text: 'savon', isCorrect: false }
    ],
    correctAnswer: 'renard',
    explanation: 'Le renard est un animal.',
    hint: 'Cherche un être vivant.',
    tags: ['ce1','vocabulaire','categories','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-104',
    subject: 'francais',
    title: 'Intrus simple',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un fruit ?',
    options: [
      { id: 'a', text: 'pomme', isCorrect: false },
      { id: 'b', text: 'poire', isCorrect: false },
      { id: 'c', text: 'chaussette', isCorrect: true }
    ],
    correctAnswer: 'chaussette',
    explanation: 'Chaussette n’est pas un fruit.',
    hint: 'Deux mots vont ensemble.',
    tags: ['ce1','vocabulaire','intrus','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-105',
    subject: 'francais',
    title: 'Synonyme 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de joli est :',
    options: [
      { id: 'a', text: 'beau', isCorrect: true },
      { id: 'b', text: 'sale', isCorrect: false },
      { id: 'c', text: 'dur', isCorrect: false }
    ],
    correctAnswer: 'beau',
    explanation: 'Joli et beau ont un sens proche.',
    hint: 'Cherche un mot positif.',
    tags: ['ce1','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-106',
    subject: 'francais',
    title: 'Contraire 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de chaud est :',
    options: [
      { id: 'a', text: 'froid', isCorrect: true },
      { id: 'b', text: 'rapide', isCorrect: false },
      { id: 'c', text: 'clair', isCorrect: false }
    ],
    correctAnswer: 'froid',
    explanation: 'Froid est le contraire de chaud.',
    hint: 'Cherche l’opposé.',
    tags: ['ce1','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-107',
    subject: 'francais',
    title: 'Objet d’école',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un objet de la classe ?',
    options: [
      { id: 'a', text: 'règle', isCorrect: true },
      { id: 'b', text: 'requin', isCorrect: false },
      { id: 'c', text: 'forêt', isCorrect: false }
    ],
    correctAnswer: 'règle',
    explanation: 'La règle est un objet de la classe.',
    hint: 'Cherche un objet pour apprendre.',
    tags: ['ce1','vocabulaire','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-108',
    subject: 'francais',
    title: 'Intrus animaux',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Quel mot n’est pas un animal ?',
    options: [
      { id: 'a', text: 'chien', isCorrect: false },
      { id: 'b', text: 'chat', isCorrect: false },
      { id: 'c', text: 'crayon', isCorrect: true }
    ],
    correctAnswer: 'crayon',
    explanation: 'Crayon n’est pas un animal.',
    hint: 'Deux mots sont des animaux.',
    tags: ['ce1','vocabulaire','intrus','animaux','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-109',
    subject: 'francais',
    title: 'Catégorie vêtement',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est un vêtement ?',
    options: [
      { id: 'a', text: 'manteau', isCorrect: true },
      { id: 'b', text: 'banane', isCorrect: false },
      { id: 'c', text: 'ardoise', isCorrect: false }
    ],
    correctAnswer: 'manteau',
    explanation: 'Le manteau est un vêtement.',
    hint: 'On le porte sur soi.',
    tags: ['ce1','vocabulaire','vetements','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-110',
    subject: 'francais',
    title: 'Synonyme 3',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de rapide est :',
    options: [
      { id: 'a', text: 'vite', isCorrect: true },
      { id: 'b', text: 'lourd', isCorrect: false },
      { id: 'c', text: 'sale', isCorrect: false }
    ],
    correctAnswer: 'vite',
    explanation: 'Rapide et vite expriment une idée proche ici.',
    hint: 'Cherche un mot proche.',
    tags: ['ce1','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-111',
    subject: 'francais',
    title: 'Contraire 3',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de ouvrir est :',
    options: [
      { id: 'a', text: 'fermer', isCorrect: true },
      { id: 'b', text: 'porter', isCorrect: false },
      { id: 'c', text: 'chanter', isCorrect: false }
    ],
    correctAnswer: 'fermer',
    explanation: 'Fermer est le contraire de ouvrir.',
    hint: 'Pense à une porte.',
    tags: ['ce1','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-112',
    subject: 'francais',
    title: 'Intrus vêtements',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un vêtement ?',
    options: [
      { id: 'a', text: 'pull', isCorrect: false },
      { id: 'b', text: 'botte', isCorrect: false },
      { id: 'c', text: 'carotte', isCorrect: true }
    ],
    correctAnswer: 'carotte',
    explanation: 'Carotte n’est pas un vêtement.',
    hint: 'Deux mots se portent.',
    tags: ['ce1','vocabulaire','intrus','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-113',
    subject: 'francais',
    title: 'Catégorie maison',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'categories',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lequel est dans la maison ?',
    options: [
      { id: 'a', text: 'canapé', isCorrect: true },
      { id: 'b', text: 'nuage', isCorrect: false },
      { id: 'c', text: 'girafe', isCorrect: false }
    ],
    correctAnswer: 'canapé',
    explanation: 'Le canapé se trouve dans la maison.',
    hint: 'Cherche un objet du salon.',
    tags: ['ce1','vocabulaire','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-114',
    subject: 'francais',
    title: 'Synonyme 4',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de fâché est :',
    options: [
      { id: 'a', text: 'en colère', isCorrect: true },
      { id: 'b', text: 'content', isCorrect: false },
      { id: 'c', text: 'calme', isCorrect: false }
    ],
    correctAnswer: 'en colère',
    explanation: 'Fâché et en colère ont un sens proche.',
    hint: 'Cherche un mot proche du sentiment.',
    tags: ['ce1','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-115',
    subject: 'francais',
    title: 'Contraire 4',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'contraires',
    format: 'qcm',
    instructions: 'Choisis le contraire.',
    prompt: 'Le contraire de monter est :',
    options: [
      { id: 'a', text: 'descendre', isCorrect: true },
      { id: 'b', text: 'laver', isCorrect: false },
      { id: 'c', text: 'porter', isCorrect: false }
    ],
    correctAnswer: 'descendre',
    explanation: 'Descendre est le contraire de monter.',
    hint: 'Cherche le mouvement inverse.',
    tags: ['ce1','vocabulaire','contraires','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-vocabulaire-116',
    subject: 'francais',
    title: 'Intrus école',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un objet d’école ?',
    options: [
      { id: 'a', text: 'trousse', isCorrect: false },
      { id: 'b', text: 'cahier', isCorrect: false },
      { id: 'c', text: 'poisson', isCorrect: true }
    ],
    correctAnswer: 'poisson',
    explanation: 'Poisson n’est pas un objet d’école.',
    hint: 'Deux mots servent à travailler.',
    tags: ['ce1','vocabulaire','intrus','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE1 — EXPRESSION ÉCRITE (fr-ce1-expression-101 à 108)
  ===================================================================== */
  {
    id: 'fr-ce1-expressionecrite-101',
    subject: 'francais',
    title: 'Choisir la phrase correcte',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'phrase correcte',
    format: 'qcm',
    instructions: 'Choisis la phrase bien écrite.',
    prompt: 'Quelle phrase est correcte ?',
    options: [
      { id: 'a', text: 'Le chat dort.', isCorrect: true },
      { id: 'b', text: 'chat le dort', isCorrect: false },
      { id: 'c', text: 'Dort le chat.', isCorrect: false }
    ],
    correctAnswer: 'Le chat dort.',
    explanation: 'La phrase correcte suit un bon ordre et se lit bien.',
    hint: 'Cherche la phrase qui sonne juste.',
    tags: ['ce1','expression-ecrite','phrase-correcte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-expressionecrite-102',
    subject: 'francais',
    title: 'Trouver le bon ordre',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ordre des mots',
    format: 'qcm',
    instructions: 'Choisis la meilleure phrase.',
    prompt: 'Pour dire qu’un chien court, quelle phrase choisis-tu ?',
    options: [
      { id: 'a', text: 'Court chien le.', isCorrect: false },
      { id: 'b', text: 'Le chien court.', isCorrect: true },
      { id: 'c', text: 'Le court chien.', isCorrect: false }
    ],
    correctAnswer: 'Le chien court.',
    explanation: 'La phrase correcte a un ordre simple et clair.',
    hint: 'Commence par le personnage.',
    tags: ['ce1','expression-ecrite','ordre-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-expressionecrite-103',
    subject: 'francais',
    title: 'Phrase complète',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'phrase correcte',
    format: 'qcm',
    instructions: 'Choisis la phrase complète.',
    prompt: 'Quelle phrase est complète ?',
    options: [
      { id: 'a', text: 'La poule picore.', isCorrect: true },
      { id: 'b', text: 'La poule', isCorrect: false },
      { id: 'c', text: 'Picore dans', isCorrect: false }
    ],
    correctAnswer: 'La poule picore.',
    explanation: 'Une phrase complète a du sens.',
    hint: 'Cherche une phrase qui finit bien.',
    tags: ['ce1','expression-ecrite','phrase-correcte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-expressionecrite-104',
    subject: 'francais',
    title: 'Majuscule et point',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ponctuation simple',
    format: 'qcm',
    instructions: 'Choisis la phrase bien écrite.',
    prompt: 'Quelle phrase commence bien et finit bien ?',
    options: [
      { id: 'a', text: 'le chat dort', isCorrect: false },
      { id: 'b', text: 'Le chat dort.', isCorrect: true },
      { id: 'c', text: 'Le chat dort', isCorrect: false }
    ],
    correctAnswer: 'Le chat dort.',
    explanation: 'Une phrase correcte commence par une majuscule et finit par un point.',
    hint: 'Regarde le début et la fin.',
    tags: ['ce1','expression-ecrite','ponctuation','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-expressionecrite-105',
    subject: 'francais',
    title: 'Phrase qui a du sens',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'coherence de phrase',
    format: 'qcm',
    instructions: 'Choisis la phrase qui a du sens.',
    prompt: 'Quelle phrase a du sens ?',
    options: [
      { id: 'a', text: 'La banane lit un cahier.', isCorrect: false },
      { id: 'b', text: 'Le garçon mange une pomme.', isCorrect: true },
      { id: 'c', text: 'Le trottoir dort vite.', isCorrect: false }
    ],
    correctAnswer: 'Le garçon mange une pomme.',
    explanation: 'Une seule phrase est logique.',
    hint: 'Cherche une scène possible.',
    tags: ['ce1','expression-ecrite','coherence','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-expressionecrite-106',
    subject: 'francais',
    title: 'Ordre des mots 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ordre des mots',
    format: 'qcm',
    instructions: 'Choisis la phrase bien rangée.',
    prompt: 'Pour parler de Léa qui lit, choisis la bonne phrase.',
    options: [
      { id: 'a', text: 'Lit Léa.', isCorrect: false },
      { id: 'b', text: 'Léa lit.', isCorrect: true },
      { id: 'c', text: 'Lea la lit.', isCorrect: false }
    ],
    correctAnswer: 'Léa lit.',
    explanation: 'Léa lit est une phrase bien ordonnée.',
    hint: 'Qui fait l’action ?',
    tags: ['ce1','expression-ecrite','ordre-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-expressionecrite-107',
    subject: 'francais',
    title: 'Phrase correcte 2',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'phrase correcte',
    format: 'qcm',
    instructions: 'Choisis la meilleure phrase.',
    prompt: 'Quelle phrase est la mieux écrite ?',
    options: [
      { id: 'a', text: 'Ma sœur chante.', isCorrect: true },
      { id: 'b', text: 'Ma chante sœur.', isCorrect: false },
      { id: 'c', text: 'Chante ma sœur le.', isCorrect: false }
    ],
    correctAnswer: 'Ma sœur chante.',
    explanation: 'La phrase correcte suit un ordre simple.',
    hint: 'Lis les phrases à voix basse.',
    tags: ['ce1','expression-ecrite','phrase-correcte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce1-expressionecrite-108',
    subject: 'francais',
    title: 'Logique et ponctuation',
    schoolClass: 'CE1',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ponctuation simple',
    format: 'qcm',
    instructions: 'Choisis la bonne phrase.',
    prompt: 'Quelle phrase est bien écrite ?',
    options: [
      { id: 'a', text: 'Nous jouons dehors.', isCorrect: true },
      { id: 'b', text: 'nous jouons dehors', isCorrect: false },
      { id: 'c', text: 'Nous dehors jouons', isCorrect: false }
    ],
    correctAnswer: 'Nous jouons dehors.',
    explanation: 'La bonne phrase a une majuscule, un bon ordre et un point.',
    hint: 'Regarde la majuscule, l’ordre et le point.',
    tags: ['ce1','expression-ecrite','ponctuation','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE2 — LECTURE (fr-ce2-lecture-101 à 120)
  ===================================================================== */
{
    id: 'fr-ce2-lecture-101',
    subject: 'francais',
    title: 'Comprendre une information',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Léa range ses cahiers dans son sac avant de partir. Que range Léa ?',
    options: [
      { id: 'a', text: 'Ses cahiers', isCorrect: true },
      { id: 'b', text: 'Ses chaussures', isCorrect: false },
      { id: 'c', text: 'Son goûter', isCorrect: false }
    ],
    correctAnswer: 'Ses cahiers',
    explanation: 'La phrase dit que Léa range ses cahiers.',
    hint: 'Relis le début de la phrase.',
    tags: ['ce2','lecture','comprehension','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-102',
    subject: 'francais',
    title: 'Repérer le lieu',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Milo cache sa bille sous le canapé. Où cache-t-il sa bille ?',
    options: [
      { id: 'a', text: 'Sous le canapé', isCorrect: true },
      { id: 'b', text: 'Dans le grenier', isCorrect: false },
      { id: 'c', text: 'Sur la route', isCorrect: false }
    ],
    correctAnswer: 'Sous le canapé',
    explanation: 'Le lieu est écrit dans la phrase.',
    hint: 'Cherche après le verbe.',
    tags: ['ce2','lecture','lieu','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-103',
    subject: 'francais',
    title: 'Comprendre une cause',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Nina prend son manteau parce qu’il fait froid. Pourquoi prend-elle son manteau ?',
    options: [
      { id: 'a', text: 'Parce qu’il fait froid', isCorrect: true },
      { id: 'b', text: 'Parce qu’elle nage', isCorrect: false },
      { id: 'c', text: 'Parce qu’elle dessine', isCorrect: false }
    ],
    correctAnswer: 'Parce qu’il fait froid',
    explanation: 'La cause est donnée dans la phrase.',
    hint: 'Cherche après parce que.',
    tags: ['ce2','lecture','cause','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-104',
    subject: 'francais',
    title: 'Petite inférence',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'inference simple',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Paul prend un parapluie avant de sortir. Quel temps fait-il sûrement ?',
    options: [
      { id: 'a', text: 'Il pleut', isCorrect: true },
      { id: 'b', text: 'Il neige dans la cuisine', isCorrect: false },
      { id: 'c', text: 'Il fait très chaud', isCorrect: false }
    ],
    correctAnswer: 'Il pleut',
    explanation: 'On prend souvent un parapluie quand il pleut.',
    hint: 'Pense à l’objet.',
    tags: ['ce2','lecture','inference','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-105',
    subject: 'francais',
    title: 'Identifier le personnage',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'identification du sujet',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le jardinier coupe les branches. Qui coupe les branches ?',
    options: [
      { id: 'a', text: 'Le jardinier', isCorrect: true },
      { id: 'b', text: 'Les branches', isCorrect: false },
      { id: 'c', text: 'Le jardin', isCorrect: false }
    ],
    correctAnswer: 'Le jardinier',
    explanation: 'C’est le jardinier qui fait l’action.',
    hint: 'Qui agit ?',
    tags: ['ce2','lecture','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-106',
    subject: 'francais',
    title: 'Repérer le temps',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Après le goûter, Inès fait ses devoirs. Quand fait-elle ses devoirs ?',
    options: [
      { id: 'a', text: 'Après le goûter', isCorrect: true },
      { id: 'b', text: 'Pendant la nuit', isCorrect: false },
      { id: 'c', text: 'Avant le réveil', isCorrect: false }
    ],
    correctAnswer: 'Après le goûter',
    explanation: 'Le moment est indiqué au début.',
    hint: 'Regarde le premier groupe de mots.',
    tags: ['ce2','lecture','temps','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-107',
    subject: 'francais',
    title: 'Associer phrase et sens',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'association de sens',
    format: 'qcm',
    instructions: 'Choisis la phrase qui dit la même chose.',
    prompt: 'Le chien dort près du radiateur.',
    options: [
      { id: 'a', text: 'Le chien dort près du radiateur', isCorrect: true },
      { id: 'b', text: 'Le chien court dans le jardin', isCorrect: false },
      { id: 'c', text: 'Le radiateur dort près du chien', isCorrect: false }
    ],
    correctAnswer: 'Le chien dort près du radiateur',
    explanation: 'La première phrase reprend exactement le même sens.',
    hint: 'Compare tous les mots importants.',
    tags: ['ce2','lecture','association','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-108',
    subject: 'francais',
    title: 'Comprendre un petit texte',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Zoé a perdu sa clé. Elle cherche partout dans sa chambre. Que cherche Zoé ?',
    options: [
      { id: 'a', text: 'Sa clé', isCorrect: true },
      { id: 'b', text: 'Son ballon', isCorrect: false },
      { id: 'c', text: 'Son cahier', isCorrect: false }
    ],
    correctAnswer: 'Sa clé',
    explanation: 'La deuxième phrase reprend l’objet perdu.',
    hint: 'Cherche ce qui a été perdu.',
    tags: ['ce2','lecture','petit-texte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-109',
    subject: 'francais',
    title: 'Petite inférence 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'inference simple',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le four sonne et papa met des gants épais. Que va-t-il sortir ?',
    options: [
      { id: 'a', text: 'Un plat chaud', isCorrect: true },
      { id: 'b', text: 'Un ballon mouillé', isCorrect: false },
      { id: 'c', text: 'Un manteau propre', isCorrect: false }
    ],
    correctAnswer: 'Un plat chaud',
    explanation: 'Les gants servent à sortir quelque chose de chaud du four.',
    hint: 'Observe les indices.',
    tags: ['ce2','lecture','inference','maison','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-110',
    subject: 'francais',
    title: 'Comprendre une action',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Emma efface le tableau avec une éponge. Que fait Emma ?',
    options: [
      { id: 'a', text: 'Elle efface le tableau', isCorrect: true },
      { id: 'b', text: 'Elle ferme la fenêtre', isCorrect: false },
      { id: 'c', text: 'Elle mange une pomme', isCorrect: false }
    ],
    correctAnswer: 'Elle efface le tableau',
    explanation: 'L’action est donnée précisément.',
    hint: 'Cherche le verbe.',
    tags: ['ce2','lecture','action','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-111',
    subject: 'francais',
    title: 'Repérer l’objet de l’action',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Noé gonfle son ballon dans le jardin. Que gonfle Noé ?',
    options: [
      { id: 'a', text: 'Son ballon', isCorrect: true },
      { id: 'b', text: 'Son vélo', isCorrect: false },
      { id: 'c', text: 'Son cartable', isCorrect: false }
    ],
    correctAnswer: 'Son ballon',
    explanation: 'La phrase dit ce qu’il gonfle.',
    hint: 'Cherche l’objet.',
    tags: ['ce2','lecture','objet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-112',
    subject: 'francais',
    title: 'Répondre à pourquoi 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Lila allume la lampe car il fait sombre. Pourquoi allume-t-elle la lampe ?',
    options: [
      { id: 'a', text: 'Car il fait sombre', isCorrect: true },
      { id: 'b', text: 'Car elle nage', isCorrect: false },
      { id: 'c', text: 'Car elle part en classe verte', isCorrect: false }
    ],
    correctAnswer: 'Car il fait sombre',
    explanation: 'La réponse est donnée directement.',
    hint: 'Cherche le mot car.',
    tags: ['ce2','lecture','cause','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-113',
    subject: 'francais',
    title: 'Identifier le bon lieu 2',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Les enfants répètent un chant dans la salle de musique. Où répètent-ils ?',
    options: [
      { id: 'a', text: 'Dans la salle de musique', isCorrect: true },
      { id: 'b', text: 'Dans le garage', isCorrect: false },
      { id: 'c', text: 'Dans la forêt', isCorrect: false }
    ],
    correctAnswer: 'Dans la salle de musique',
    explanation: 'Le lieu est indiqué dans la phrase.',
    hint: 'Relis la fin.',
    tags: ['ce2','lecture','lieu','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-114',
    subject: 'francais',
    title: 'Petit raisonnement logique',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'inference simple',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Maman ouvre grand les fenêtres après avoir cuisiné du poisson. Pourquoi les ouvre-t-elle sûrement ?',
    options: [
      { id: 'a', text: 'Pour faire partir l’odeur', isCorrect: true },
      { id: 'b', text: 'Pour ranger ses chaussures', isCorrect: false },
      { id: 'c', text: 'Pour écrire au tableau', isCorrect: false }
    ],
    correctAnswer: 'Pour faire partir l’odeur',
    explanation: 'On ouvre souvent les fenêtres pour aérer.',
    hint: 'Pense à ce que l’on fait après avoir cuisiné.',
    tags: ['ce2','lecture','inference','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-115',
    subject: 'francais',
    title: 'Associer phrase équivalente',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'association de sens',
    format: 'qcm',
    instructions: 'Choisis la phrase équivalente.',
    prompt: 'Le facteur dépose le courrier dans la boîte.',
    options: [
      { id: 'a', text: 'Le facteur met le courrier dans la boîte', isCorrect: true },
      { id: 'b', text: 'Le facteur lit le courrier dans le salon', isCorrect: false },
      { id: 'c', text: 'La boîte dépose le facteur', isCorrect: false }
    ],
    correctAnswer: 'Le facteur met le courrier dans la boîte',
    explanation: 'Mettre dans la boîte correspond au sens de déposer.',
    hint: 'Cherche la phrase la plus proche.',
    tags: ['ce2','lecture','association','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-116',
    subject: 'francais',
    title: 'Comprendre un déroulement',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Avant d’aller dormir, Hugo brosse ses dents puis lit une histoire. Que fait-il juste après avoir brossé ses dents ?',
    options: [
      { id: 'a', text: 'Il lit une histoire', isCorrect: true },
      { id: 'b', text: 'Il prend le bus', isCorrect: false },
      { id: 'c', text: 'Il fait du vélo', isCorrect: false }
    ],
    correctAnswer: 'Il lit une histoire',
    explanation: 'L’ordre des actions est donné dans la phrase.',
    hint: 'Observe ce qui vient après puis.',
    tags: ['ce2','lecture','ordre','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-117',
    subject: 'francais',
    title: 'Repérer une précision de temps',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Ce soir, les voisins décorent leur jardin avec des lumières. Quand décorent-ils leur jardin ?',
    options: [
      { id: 'a', text: 'Ce soir', isCorrect: true },
      { id: 'b', text: 'Hier matin', isCorrect: false },
      { id: 'c', text: 'La semaine prochaine', isCorrect: false }
    ],
    correctAnswer: 'Ce soir',
    explanation: 'L’indication de temps est au début.',
    hint: 'Cherche quand cela se passe.',
    tags: ['ce2','lecture','temps','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-118',
    subject: 'francais',
    title: 'Comprendre un petit texte 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Le chat miaule devant la porte. Il veut rentrer dans la maison. Que veut le chat ?',
    options: [
      { id: 'a', text: 'Rentrer dans la maison', isCorrect: true },
      { id: 'b', text: 'Monter dans un avion', isCorrect: false },
      { id: 'c', text: 'Manger une glace', isCorrect: false }
    ],
    correctAnswer: 'Rentrer dans la maison',
    explanation: 'La deuxième phrase donne la réponse.',
    hint: 'Lis la seconde phrase.',
    tags: ['ce2','lecture','petit-texte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-119',
    subject: 'francais',
    title: 'Inférence école',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'lecture',
    subskill: 'inference simple',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'La cloche sonne et les élèves rangent vite leurs affaires. Que va-t-il se passer ?',
    options: [
      { id: 'a', text: 'La classe va se terminer', isCorrect: true },
      { id: 'b', text: 'Le repas va cuire', isCorrect: false },
      { id: 'c', text: 'La nuit va tomber', isCorrect: false }
    ],
    correctAnswer: 'La classe va se terminer',
    explanation: 'La cloche et le rangement annoncent souvent la fin de la classe.',
    hint: 'Observe les indices.',
    tags: ['ce2','lecture','inference','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-lecture-120',
    subject: 'francais',
    title: 'Comprendre une information finale',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'lecture',
    subskill: 'comprehension explicite',
    format: 'qcm',
    instructions: 'Lis puis réponds.',
    prompt: 'Sami colle son dessin sur le mur de la classe. Où colle-t-il son dessin ?',
    options: [
      { id: 'a', text: 'Sur le mur de la classe', isCorrect: true },
      { id: 'b', text: 'Dans le tiroir', isCorrect: false },
      { id: 'c', text: 'Sous la table', isCorrect: false }
    ],
    correctAnswer: 'Sur le mur de la classe',
    explanation: 'Le lieu est indiqué à la fin.',
    hint: 'Relis la fin.',
    tags: ['ce2','lecture','lieu','ecole','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE2 — ORTHOGRAPHE (fr-ce2-orthographe-101 à 118)
  ===================================================================== */
  {
    id: 'fr-ce2-orthographe-101',
    subject: 'francais',
    title: 'Ces ou ses',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'determinants frequents',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ fleurs sont rouges.',
    options: [
      { id: 'a', text: 'Ces', isCorrect: true },
      { id: 'b', text: 'Ses', isCorrect: false }
    ],
    correctAnswer: 'Ces',
    explanation: 'On écrit ces quand on montre plusieurs choses.',
    hint: 'Peut-on dire ces fleurs-là ?',
    tags: ['ce2','orthographe','ces-ses','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-102',
    subject: 'francais',
    title: 'On ou ont',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Ils ___ une surprise.',
    options: [
      { id: 'a', text: 'on', isCorrect: false },
      { id: 'b', text: 'ont', isCorrect: true }
    ],
    correctAnswer: 'ont',
    explanation: 'Avec ils, on utilise le verbe avoir : ils ont.',
    hint: 'Peut-on dire avaient ?',
    tags: ['ce2','orthographe','on-ont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-103',
    subject: 'francais',
    title: 'Ce ou se',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ matin, il se lève tôt.',
    options: [
      { id: 'a', text: 'Ce', isCorrect: true },
      { id: 'b', text: 'Se', isCorrect: false }
    ],
    correctAnswer: 'Ce',
    explanation: 'On dit ce matin pour désigner ce moment.',
    hint: 'Peut-on remplacer par ce jour-là ?',
    tags: ['ce2','orthographe','ce-se','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-104',
    subject: 'francais',
    title: 'Ou ou où',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Sais-tu ___ il habite ?',
    options: [
      { id: 'a', text: 'où', isCorrect: true },
      { id: 'b', text: 'ou', isCorrect: false }
    ],
    correctAnswer: 'où',
    explanation: 'Où parle d’un lieu.',
    hint: 'Cherche si la phrase parle d’un endroit.',
    tags: ['ce2','orthographe','ou-ou-accent','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-105',
    subject: 'francais',
    title: 'Et ou est',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Le chien ___ dans le jardin.',
    options: [
      { id: 'a', text: 'et', isCorrect: false },
      { id: 'b', text: 'est', isCorrect: true }
    ],
    correctAnswer: 'est',
    explanation: 'Ici, est est le verbe être.',
    hint: 'Peut-on dire était ?',
    tags: ['ce2','orthographe','et-est','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-106',
    subject: 'francais',
    title: 'A ou à',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Mila va ___ la piscine.',
    options: [
      { id: 'a', text: 'a', isCorrect: false },
      { id: 'b', text: 'à', isCorrect: true }
    ],
    correctAnswer: 'à',
    explanation: 'À indique un lieu.',
    hint: 'Parle-t-on d’un endroit ?',
    tags: ['ce2','orthographe','a-a-grave','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-107',
    subject: 'francais',
    title: 'Son ou sont',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ cahier est resté sur la table.',
    options: [
      { id: 'a', text: 'Son', isCorrect: true },
      { id: 'b', text: 'Sont', isCorrect: false }
    ],
    correctAnswer: 'Son',
    explanation: 'On parle d’un cahier qui appartient à quelqu’un.',
    hint: 'Montre-t-on un objet ?',
    tags: ['ce2','orthographe','son-sont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-108',
    subject: 'francais',
    title: 'Mes ou mais',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones frequents',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ amis arrivent bientôt.',
    options: [
      { id: 'a', text: 'Mes', isCorrect: true },
      { id: 'b', text: 'Mais', isCorrect: false }
    ],
    correctAnswer: 'Mes',
    explanation: 'Mes indique une possession.',
    hint: 'Parle-t-on de personnes qui m’appartiennent ?',
    tags: ['ce2','orthographe','mes-mais','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-109',
    subject: 'francais',
    title: 'Ou ou où 2',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Tu veux du riz ___ des pâtes ?',
    options: [
      { id: 'a', text: 'ou', isCorrect: true },
      { id: 'b', text: 'où', isCorrect: false }
    ],
    correctAnswer: 'ou',
    explanation: 'Ou sert à proposer un choix.',
    hint: 'Y a-t-il un choix ?',
    tags: ['ce2','orthographe','ou-ou-accent','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-110',
    subject: 'francais',
    title: 'Ses ou ces 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'determinants frequents',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Lina range ___ chaussures.',
    options: [
      { id: 'a', text: 'ses', isCorrect: true },
      { id: 'b', text: 'ces', isCorrect: false }
    ],
    correctAnswer: 'ses',
    explanation: 'On parle des chaussures de Lina.',
    hint: 'À qui appartiennent-elles ?',
    tags: ['ce2','orthographe','ces-ses','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-111',
    subject: 'francais',
    title: 'On ou ont 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: '___ part en voyage demain.',
    options: [
      { id: 'a', text: 'On', isCorrect: true },
      { id: 'b', text: 'Ont', isCorrect: false }
    ],
    correctAnswer: 'On',
    explanation: 'On remplace ici une ou plusieurs personnes.',
    hint: 'Peut-on dire nous ?',
    tags: ['ce2','orthographe','on-ont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-112',
    subject: 'francais',
    title: 'Ce ou se 2',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Il ___ cache derrière le rideau.',
    options: [
      { id: 'a', text: 'ce', isCorrect: false },
      { id: 'b', text: 'se', isCorrect: true }
    ],
    correctAnswer: 'se',
    explanation: 'Se fait partie du verbe se cacher.',
    hint: 'Le verbe est-il pronominal ?',
    tags: ['ce2','orthographe','ce-se','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-113',
    subject: 'francais',
    title: 'Et ou est 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Léo ___ Tom jouent au ballon.',
    options: [
      { id: 'a', text: 'et', isCorrect: true },
      { id: 'b', text: 'est', isCorrect: false }
    ],
    correctAnswer: 'et',
    explanation: 'Et relie deux personnes.',
    hint: 'Relie-t-on deux noms ?',
    tags: ['ce2','orthographe','et-est','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-114',
    subject: 'francais',
    title: 'A ou à 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Il ___ oublié son cahier.',
    options: [
      { id: 'a', text: 'a', isCorrect: true },
      { id: 'b', text: 'à', isCorrect: false }
    ],
    correctAnswer: 'a',
    explanation: 'Ici, a est le verbe avoir.',
    hint: 'Peut-on dire avait ?',
    tags: ['ce2','orthographe','a-a-grave','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-115',
    subject: 'francais',
    title: 'Son ou sont 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'orthographe',
    subskill: 'homophones grammaticaux',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Les élèves ___ calmes.',
    options: [
      { id: 'a', text: 'son', isCorrect: false },
      { id: 'b', text: 'sont', isCorrect: true }
    ],
    correctAnswer: 'sont',
    explanation: 'Avec les élèves, on peut utiliser le verbe être : ils sont.',
    hint: 'Peut-on dire étaient ?',
    tags: ['ce2','orthographe','son-sont','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-116',
    subject: 'francais',
    title: 'Mais ou mes',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'homophones frequents',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Je voulais venir, ___ le bus est parti.',
    options: [
      { id: 'a', text: 'mes', isCorrect: false },
      { id: 'b', text: 'mais', isCorrect: true }
    ],
    correctAnswer: 'mais',
    explanation: 'Mais sert à opposer deux idées.',
    hint: 'Y a-t-il une opposition ?',
    tags: ['ce2','orthographe','mes-mais','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-117',
    subject: 'francais',
    title: 'Leur ou leurs',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'determinants possessifs',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Ils rangent ___ manteaux.',
    options: [
      { id: 'a', text: 'leur', isCorrect: false },
      { id: 'b', text: 'leurs', isCorrect: true }
    ],
    correctAnswer: 'leurs',
    explanation: 'On parle de plusieurs manteaux.',
    hint: 'Combien de manteaux ?',
    tags: ['ce2','orthographe','leur-leurs','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-orthographe-118',
    subject: 'francais',
    title: 'Leur ou leurs 2',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'orthographe',
    subskill: 'determinants possessifs',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Chaque élève range ___ cahier.',
    options: [
      { id: 'a', text: 'leur', isCorrect: true },
      { id: 'b', text: 'leurs', isCorrect: false }
    ],
    correctAnswer: 'leur',
    explanation: 'On parle d’un seul cahier par élève.',
    hint: 'Combien de cahiers chacun ?',
    tags: ['ce2','orthographe','leur-leurs','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE2 — GRAMMAIRE (fr-ce2-grammaire-101 à 118)
  ===================================================================== */
  {
    id: 'fr-ce2-grammaire-101',
    subject: 'francais',
    title: 'Trouver le sujet',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet de la phrase.',
    prompt: 'Les oiseaux chantent dans l’arbre.',
    options: [
      { id: 'a', text: 'Les oiseaux', isCorrect: true },
      { id: 'b', text: 'chantent', isCorrect: false },
      { id: 'c', text: 'dans l’arbre', isCorrect: false }
    ],
    correctAnswer: 'Les oiseaux',
    explanation: 'Le sujet est celui qui fait l’action de chanter.',
    hint: 'Qui chante ?',
    tags: ['ce2','grammaire','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-102',
    subject: 'francais',
    title: 'Nom ou verbe',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'Le train arrive vite.',
    options: [
      { id: 'a', text: 'train', isCorrect: false },
      { id: 'b', text: 'arrive', isCorrect: true },
      { id: 'c', text: 'vite', isCorrect: false }
    ],
    correctAnswer: 'arrive',
    explanation: 'Arrive est le verbe, c’est l’action.',
    hint: 'Cherche ce qui se passe.',
    tags: ['ce2','grammaire','verbe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-103',
    subject: 'francais',
    title: 'Trouver le déterminant',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'determinant',
    format: 'qcm',
    instructions: 'Choisis le déterminant.',
    prompt: 'Une étoile brille.',
    options: [
      { id: 'a', text: 'Une', isCorrect: true },
      { id: 'b', text: 'étoile', isCorrect: false },
      { id: 'c', text: 'brille', isCorrect: false }
    ],
    correctAnswer: 'Une',
    explanation: 'Une accompagne le nom étoile.',
    hint: 'Cherche le petit mot avant le nom.',
    tags: ['ce2','grammaire','determinant','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-104',
    subject: 'francais',
    title: 'Nom commun ou nom propre',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Choisis le nom propre.',
    prompt: 'Paris est une grande ville.',
    options: [
      { id: 'a', text: 'Paris', isCorrect: true },
      { id: 'b', text: 'ville', isCorrect: false },
      { id: 'c', text: 'grande', isCorrect: false }
    ],
    correctAnswer: 'Paris',
    explanation: 'Paris est un nom propre.',
    hint: 'Cherche le nom avec une majuscule.',
    tags: ['ce2','grammaire','nom-propre','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-105',
    subject: 'francais',
    title: 'Masculin ou féminin',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'genre du nom',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'chaise',
    options: [
      { id: 'a', text: 'Masculin', isCorrect: false },
      { id: 'b', text: 'Féminin', isCorrect: true }
    ],
    correctAnswer: 'Féminin',
    explanation: 'On dit une chaise.',
    hint: 'Essaie avec un ou une.',
    tags: ['ce2','grammaire','genre','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-106',
    subject: 'francais',
    title: 'Singulier ou pluriel',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'nombre du nom',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'des voitures',
    options: [
      { id: 'a', text: 'Singulier', isCorrect: false },
      { id: 'b', text: 'Pluriel', isCorrect: true }
    ],
    correctAnswer: 'Pluriel',
    explanation: 'Des voitures indique plusieurs objets.',
    hint: 'Une ou plusieurs ?',
    tags: ['ce2','grammaire','nombre','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-107',
    subject: 'francais',
    title: 'Repérer le verbe',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'Les vagues frappent les rochers.',
    options: [
      { id: 'a', text: 'vagues', isCorrect: false },
      { id: 'b', text: 'frappent', isCorrect: true },
      { id: 'c', text: 'rochers', isCorrect: false }
    ],
    correctAnswer: 'frappent',
    explanation: 'Frappent exprime l’action.',
    hint: 'Cherche ce que font les vagues.',
    tags: ['ce2','grammaire','verbe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-108',
    subject: 'francais',
    title: 'Repérer le sujet 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet.',
    prompt: 'Ma sœur prépare le goûter.',
    options: [
      { id: 'a', text: 'Ma sœur', isCorrect: true },
      { id: 'b', text: 'prépare', isCorrect: false },
      { id: 'c', text: 'le goûter', isCorrect: false }
    ],
    correctAnswer: 'Ma sœur',
    explanation: 'Ma sœur fait l’action de préparer.',
    hint: 'Qui prépare ?',
    tags: ['ce2','grammaire','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-109',
    subject: 'francais',
    title: 'Nature du mot',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Dans « Le chat dort », le mot chat est :',
    prompt: 'Le chat dort.',
    options: [
      { id: 'a', text: 'un nom', isCorrect: true },
      { id: 'b', text: 'un verbe', isCorrect: false },
      { id: 'c', text: 'un adjectif', isCorrect: false }
    ],
    correctAnswer: 'un nom',
    explanation: 'Chat désigne un animal, c’est un nom.',
    hint: 'Le mot désigne-t-il une chose ?',
    tags: ['ce2','grammaire','nature-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-110',
    subject: 'francais',
    title: 'Trouver l’adjectif',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'grammaire',
    subskill: 'adjectif qualificatif',
    format: 'qcm',
    instructions: 'Choisis l’adjectif.',
    prompt: 'Le petit garçon court vite.',
    options: [
      { id: 'a', text: 'petit', isCorrect: true },
      { id: 'b', text: 'garçon', isCorrect: false },
      { id: 'c', text: 'court', isCorrect: false }
    ],
    correctAnswer: 'petit',
    explanation: 'Petit décrit le garçon.',
    hint: 'Quel mot donne une précision sur le nom ?',
    tags: ['ce2','grammaire','adjectif','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-111',
    subject: 'francais',
    title: 'Déterminant pluriel',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'determinant',
    format: 'qcm',
    instructions: 'Choisis le déterminant.',
    prompt: 'Les enfants jouent.',
    options: [
      { id: 'a', text: 'Les', isCorrect: true },
      { id: 'b', text: 'enfants', isCorrect: false },
      { id: 'c', text: 'jouent', isCorrect: false }
    ],
    correctAnswer: 'Les',
    explanation: 'Les accompagne le nom enfants.',
    hint: 'Cherche le mot avant le nom.',
    tags: ['ce2','grammaire','determinant','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-112',
    subject: 'francais',
    title: 'Nom propre 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Choisis le nom propre.',
    prompt: 'Lina visite Marseille.',
    options: [
      { id: 'a', text: 'Lina', isCorrect: true },
      { id: 'b', text: 'visite', isCorrect: false },
      { id: 'c', text: 'Marseille', isCorrect: false }
    ],
    correctAnswer: 'Lina',
    explanation: 'Lina est un prénom, donc un nom propre.',
    hint: 'Cherche un prénom.',
    tags: ['ce2','grammaire','nom-propre','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-113',
    subject: 'francais',
    title: 'Sujet avec groupe nominal',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le sujet',
    format: 'qcm',
    instructions: 'Choisis le sujet.',
    prompt: 'Le grand bateau avance lentement.',
    options: [
      { id: 'a', text: 'Le grand bateau', isCorrect: true },
      { id: 'b', text: 'avance', isCorrect: false },
      { id: 'c', text: 'lentement', isCorrect: false }
    ],
    correctAnswer: 'Le grand bateau',
    explanation: 'Le groupe qui fait l’action est le sujet.',
    hint: 'Qui avance ?',
    tags: ['ce2','grammaire','sujet','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-114',
    subject: 'francais',
    title: 'Verbe avec adverbe',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'grammaire',
    subskill: 'identifier le verbe',
    format: 'qcm',
    instructions: 'Choisis le verbe.',
    prompt: 'Le bébé pleure doucement.',
    options: [
      { id: 'a', text: 'bébé', isCorrect: false },
      { id: 'b', text: 'pleure', isCorrect: true },
      { id: 'c', text: 'doucement', isCorrect: false }
    ],
    correctAnswer: 'pleure',
    explanation: 'Pleure est le verbe.',
    hint: 'Cherche l’action.',
    tags: ['ce2','grammaire','verbe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-115',
    subject: 'francais',
    title: 'Adjectif 2',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'grammaire',
    subskill: 'adjectif qualificatif',
    format: 'qcm',
    instructions: 'Choisis l’adjectif.',
    prompt: 'Une robe rouge sèche au soleil.',
    options: [
      { id: 'a', text: 'robe', isCorrect: false },
      { id: 'b', text: 'rouge', isCorrect: true },
      { id: 'c', text: 'sèche', isCorrect: false }
    ],
    correctAnswer: 'rouge',
    explanation: 'Rouge décrit le nom robe.',
    hint: 'Quel mot précise le nom ?',
    tags: ['ce2','grammaire','adjectif','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-116',
    subject: 'francais',
    title: 'Genre 2',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'genre du nom',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'cartable',
    options: [
      { id: 'a', text: 'Masculin', isCorrect: true },
      { id: 'b', text: 'Féminin', isCorrect: false }
    ],
    correctAnswer: 'Masculin',
    explanation: 'On dit un cartable.',
    hint: 'Essaie avec un ou une.',
    tags: ['ce2','grammaire','genre','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-117',
    subject: 'francais',
    title: 'Nombre 2',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'grammaire',
    subskill: 'nombre du nom',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'une montre',
    options: [
      { id: 'a', text: 'Singulier', isCorrect: true },
      { id: 'b', text: 'Pluriel', isCorrect: false }
    ],
    correctAnswer: 'Singulier',
    explanation: 'Une montre veut dire un seul objet.',
    hint: 'Y en a-t-il une seule ?',
    tags: ['ce2','grammaire','nombre','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-grammaire-118',
    subject: 'francais',
    title: 'Nature des mots 2',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'grammaire',
    subskill: 'nature des mots',
    format: 'qcm',
    instructions: 'Dans « Sage, le chien attend », le mot sage est :',
    prompt: 'Sage, le chien attend.',
    options: [
      { id: 'a', text: 'un adjectif', isCorrect: true },
      { id: 'b', text: 'un nom', isCorrect: false },
      { id: 'c', text: 'un verbe', isCorrect: false }
    ],
    correctAnswer: 'un adjectif',
    explanation: 'Sage donne une précision sur le chien.',
    hint: 'Ce mot décrit-il le nom ?',
    tags: ['ce2','grammaire','adjectif','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE2 — CONJUGAISON (fr-ce2-conjugaison-101 à 116)
  ===================================================================== */
  {
    id: 'fr-ce2-conjugaison-101',
    subject: 'francais',
    title: 'Présent du 1er groupe',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ dans la cour.',
    options: [
      { id: 'a', text: 'jouons', isCorrect: true },
      { id: 'b', text: 'joue', isCorrect: false },
      { id: 'c', text: 'jouez', isCorrect: false }
    ],
    correctAnswer: 'jouons',
    explanation: 'Avec nous, on écrit jouons.',
    hint: 'Pense à : nous jouons.',
    tags: ['ce2','conjugaison','present','1er-groupe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-102',
    subject: 'francais',
    title: 'Être au présent',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Je ___ prêt.',
    options: [
      { id: 'a', text: 'suis', isCorrect: true },
      { id: 'b', text: 'es', isCorrect: false },
      { id: 'c', text: 'est', isCorrect: false }
    ],
    correctAnswer: 'suis',
    explanation: 'Avec je, on dit je suis.',
    hint: 'Pense à : je suis.',
    tags: ['ce2','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-103',
    subject: 'francais',
    title: 'Avoir au présent',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ une idée.',
    options: [
      { id: 'a', text: 'as', isCorrect: true },
      { id: 'b', text: 'ai', isCorrect: false },
      { id: 'c', text: 'a', isCorrect: false }
    ],
    correctAnswer: 'as',
    explanation: 'Avec tu, on dit tu as.',
    hint: 'Pense à : tu as.',
    tags: ['ce2','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-104',
    subject: 'francais',
    title: 'Aller au présent',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Ils ___ à l’école.',
    options: [
      { id: 'a', text: 'vont', isCorrect: true },
      { id: 'b', text: 'vais', isCorrect: false },
      { id: 'c', text: 'allez', isCorrect: false }
    ],
    correctAnswer: 'vont',
    explanation: 'Avec ils, on dit ils vont.',
    hint: 'Pense à : ils vont.',
    tags: ['ce2','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-105',
    subject: 'francais',
    title: 'Présent 1er groupe 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Vous ___ rapidement.',
    options: [
      { id: 'a', text: 'avancez', isCorrect: true },
      { id: 'b', text: 'avance', isCorrect: false },
      { id: 'c', text: 'avançons', isCorrect: false }
    ],
    correctAnswer: 'avancez',
    explanation: 'Avec vous, on dit vous avancez.',
    hint: 'Pense à : vous avancez.',
    tags: ['ce2','conjugaison','present','1er-groupe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-106',
    subject: 'francais',
    title: 'Être avec nous',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ en avance.',
    options: [
      { id: 'a', text: 'sommes', isCorrect: true },
      { id: 'b', text: 'êtes', isCorrect: false },
      { id: 'c', text: 'sont', isCorrect: false }
    ],
    correctAnswer: 'sommes',
    explanation: 'Avec nous, on dit nous sommes.',
    hint: 'Pense à : nous sommes.',
    tags: ['ce2','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-107',
    subject: 'francais',
    title: 'Avoir avec ils',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Ils ___ très faim.',
    options: [
      { id: 'a', text: 'ont', isCorrect: true },
      { id: 'b', text: 'avons', isCorrect: false },
      { id: 'c', text: 'avez', isCorrect: false }
    ],
    correctAnswer: 'ont',
    explanation: 'Avec ils, on dit ils ont.',
    hint: 'Pense à : ils ont.',
    tags: ['ce2','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-108',
    subject: 'francais',
    title: 'Aller avec nous',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ au musée.',
    options: [
      { id: 'a', text: 'allons', isCorrect: true },
      { id: 'b', text: 'allez', isCorrect: false },
      { id: 'c', text: 'va', isCorrect: false }
    ],
    correctAnswer: 'allons',
    explanation: 'Avec nous, on dit nous allons.',
    hint: 'Pense à : nous allons.',
    tags: ['ce2','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-109',
    subject: 'francais',
    title: 'Imparfait simple',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'imparfait',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Hier, nous ___ dans le jardin.',
    options: [
      { id: 'a', text: 'jouions', isCorrect: true },
      { id: 'b', text: 'jouons', isCorrect: false },
      { id: 'c', text: 'jouerez', isCorrect: false }
    ],
    correctAnswer: 'jouions',
    explanation: 'À l’imparfait avec nous, on écrit jouions.',
    hint: 'Regarde le mot hier.',
    tags: ['ce2','conjugaison','imparfait','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-110',
    subject: 'francais',
    title: 'Futur simple',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'futur simple',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Demain, ils ___ au parc.',
    options: [
      { id: 'a', text: 'iront', isCorrect: true },
      { id: 'b', text: 'vont', isCorrect: false },
      { id: 'c', text: 'allaient', isCorrect: false }
    ],
    correctAnswer: 'iront',
    explanation: 'Au futur simple, avec ils, on écrit iront.',
    hint: 'Regarde le mot demain.',
    tags: ['ce2','conjugaison','futur','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-111',
    subject: 'francais',
    title: 'Présent 1er groupe 3',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Tu ___ un dessin.',
    options: [
      { id: 'a', text: 'termines', isCorrect: true },
      { id: 'b', text: 'termine', isCorrect: false },
      { id: 'c', text: 'terminons', isCorrect: false }
    ],
    correctAnswer: 'termines',
    explanation: 'Avec tu, on dit tu termines.',
    hint: 'Pense à : tu termines.',
    tags: ['ce2','conjugaison','present','1er-groupe','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-112',
    subject: 'francais',
    title: 'Être avec vous',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe etre au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Vous ___ prêts.',
    options: [
      { id: 'a', text: 'êtes', isCorrect: true },
      { id: 'b', text: 'sommes', isCorrect: false },
      { id: 'c', text: 'sont', isCorrect: false }
    ],
    correctAnswer: 'êtes',
    explanation: 'Avec vous, on dit vous êtes.',
    hint: 'Pense à : vous êtes.',
    tags: ['ce2','conjugaison','etre','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-113',
    subject: 'francais',
    title: 'Avoir avec nous',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe avoir au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Nous ___ une nouvelle règle.',
    options: [
      { id: 'a', text: 'avons', isCorrect: true },
      { id: 'b', text: 'avez', isCorrect: false },
      { id: 'c', text: 'ont', isCorrect: false }
    ],
    correctAnswer: 'avons',
    explanation: 'Avec nous, on dit nous avons.',
    hint: 'Pense à : nous avons.',
    tags: ['ce2','conjugaison','avoir','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-114',
    subject: 'francais',
    title: 'Aller avec je',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'conjugaison',
    subskill: 'verbe aller au present',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Je ___ chez mamie.',
    options: [
      { id: 'a', text: 'vais', isCorrect: true },
      { id: 'b', text: 'va', isCorrect: false },
      { id: 'c', text: 'allons', isCorrect: false }
    ],
    correctAnswer: 'vais',
    explanation: 'Avec je, on dit je vais.',
    hint: 'Pense à : je vais.',
    tags: ['ce2','conjugaison','aller','present','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-115',
    subject: 'francais',
    title: 'Imparfait 2',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'imparfait',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Avant, il ___ plus lentement.',
    options: [
      { id: 'a', text: 'courait', isCorrect: true },
      { id: 'b', text: 'court', isCorrect: false },
      { id: 'c', text: 'courra', isCorrect: false }
    ],
    correctAnswer: 'courait',
    explanation: 'À l’imparfait, on écrit courait.',
    hint: 'Le mot avant aide.',
    tags: ['ce2','conjugaison','imparfait','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-conjugaison-116',
    subject: 'francais',
    title: 'Futur 2',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'conjugaison',
    subskill: 'futur simple',
    format: 'qcm',
    instructions: 'Choisis la bonne forme.',
    prompt: 'Bientôt, nous ___ en vacances.',
    options: [
      { id: 'a', text: 'serons', isCorrect: true },
      { id: 'b', text: 'sommes', isCorrect: false },
      { id: 'c', text: 'étions', isCorrect: false }
    ],
    correctAnswer: 'serons',
    explanation: 'Au futur simple, avec nous, on écrit serons.',
    hint: 'Le mot bientôt indique le futur.',
    tags: ['ce2','conjugaison','futur','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE2 — VOCABULAIRE (fr-ce2-vocabulaire-101 à 116)
  ===================================================================== */
  {
    id: 'fr-ce2-vocabulaire-101',
    subject: 'francais',
    title: 'Synonyme',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de joli est :',
    options: [
      { id: 'a', text: 'beau', isCorrect: true },
      { id: 'b', text: 'sale', isCorrect: false },
      { id: 'c', text: 'dur', isCorrect: false }
    ],
    correctAnswer: 'beau',
    explanation: 'Joli et beau ont un sens proche.',
    hint: 'Cherche un mot proche et positif.',
    tags: ['ce2','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-102',
    subject: 'francais',
    title: 'Contraire',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'antonymes',
    format: 'qcm',
    instructions: 'Choisis l’antonyme.',
    prompt: 'L’antonyme de rapide est :',
    options: [
      { id: 'a', text: 'lent', isCorrect: true },
      { id: 'b', text: 'clair', isCorrect: false },
      { id: 'c', text: 'dur', isCorrect: false }
    ],
    correctAnswer: 'lent',
    explanation: 'Lent est le contraire de rapide.',
    hint: 'Cherche le mot opposé.',
    tags: ['ce2','vocabulaire','antonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-103',
    subject: 'francais',
    title: 'Famille de mots',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'famille de mots',
    format: 'qcm',
    instructions: 'Choisis le mot de la même famille.',
    prompt: 'Le mot de la même famille que chanter est :',
    options: [
      { id: 'a', text: 'chanson', isCorrect: true },
      { id: 'b', text: 'froid', isCorrect: false },
      { id: 'c', text: 'table', isCorrect: false }
    ],
    correctAnswer: 'chanson',
    explanation: 'Chanter et chanson appartiennent à la même famille.',
    hint: 'Cherche un mot construit autour de la même idée.',
    tags: ['ce2','vocabulaire','famille-de-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-104',
    subject: 'francais',
    title: 'Intrus',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un fruit ?',
    options: [
      { id: 'a', text: 'abricot', isCorrect: false },
      { id: 'b', text: 'poire', isCorrect: false },
      { id: 'c', text: 'manteau', isCorrect: true }
    ],
    correctAnswer: 'manteau',
    explanation: 'Manteau n’est pas un fruit.',
    hint: 'Deux mots vont ensemble.',
    tags: ['ce2','vocabulaire','intrus','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-105',
    subject: 'francais',
    title: 'Définition simple',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'definitions',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Quel mot désigne une personne qui soigne les malades ?',
    options: [
      { id: 'a', text: 'médecin', isCorrect: true },
      { id: 'b', text: 'boulanger', isCorrect: false },
      { id: 'c', text: 'peintre', isCorrect: false }
    ],
    correctAnswer: 'médecin',
    explanation: 'Le médecin soigne les malades.',
    hint: 'Cherche un métier de la santé.',
    tags: ['ce2','vocabulaire','definitions','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-106',
    subject: 'francais',
    title: 'Synonyme 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de commencer est :',
    options: [
      { id: 'a', text: 'débuter', isCorrect: true },
      { id: 'b', text: 'tomber', isCorrect: false },
      { id: 'c', text: 'oublier', isCorrect: false }
    ],
    correctAnswer: 'débuter',
    explanation: 'Débuter et commencer ont un sens proche.',
    hint: 'Cherche un mot proche.',
    tags: ['ce2','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-107',
    subject: 'francais',
    title: 'Contraire 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'antonymes',
    format: 'qcm',
    instructions: 'Choisis l’antonyme.',
    prompt: 'L’antonyme de fort est :',
    options: [
      { id: 'a', text: 'faible', isCorrect: true },
      { id: 'b', text: 'grand', isCorrect: false },
      { id: 'c', text: 'propre', isCorrect: false }
    ],
    correctAnswer: 'faible',
    explanation: 'Faible est le contraire de fort.',
    hint: 'Cherche le mot opposé.',
    tags: ['ce2','vocabulaire','antonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-108',
    subject: 'francais',
    title: 'Famille de mots 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'famille de mots',
    format: 'qcm',
    instructions: 'Choisis le mot de la même famille.',
    prompt: 'Le mot de la même famille que laver est :',
    options: [
      { id: 'a', text: 'lavage', isCorrect: true },
      { id: 'b', text: 'montagne', isCorrect: false },
      { id: 'c', text: 'rapide', isCorrect: false }
    ],
    correctAnswer: 'lavage',
    explanation: 'Laver et lavage appartiennent à la même famille.',
    hint: 'Cherche un mot de la même idée.',
    tags: ['ce2','vocabulaire','famille-de-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-109',
    subject: 'francais',
    title: 'Intrus 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un vêtement ?',
    options: [
      { id: 'a', text: 'écharpe', isCorrect: false },
      { id: 'b', text: 'manteau', isCorrect: false },
      { id: 'c', text: 'citron', isCorrect: true }
    ],
    correctAnswer: 'citron',
    explanation: 'Citron n’est pas un vêtement.',
    hint: 'Deux mots se portent.',
    tags: ['ce2','vocabulaire','intrus','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-110',
    subject: 'francais',
    title: 'Définition 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'definitions',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Quel mot désigne l’endroit où l’on emprunte des livres ?',
    options: [
      { id: 'a', text: 'bibliothèque', isCorrect: true },
      { id: 'b', text: 'boulangerie', isCorrect: false },
      { id: 'c', text: 'piscine', isCorrect: false }
    ],
    correctAnswer: 'bibliothèque',
    explanation: 'On emprunte des livres à la bibliothèque.',
    hint: 'Cherche un lieu pour lire.',
    tags: ['ce2','vocabulaire','definitions','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-111',
    subject: 'francais',
    title: 'Synonyme 3',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de bruit est :',
    options: [
      { id: 'a', text: 'son', isCorrect: true },
      { id: 'b', text: 'mur', isCorrect: false },
      { id: 'c', text: 'pied', isCorrect: false }
    ],
    correctAnswer: 'son',
    explanation: 'Bruit et son ont un sens proche ici.',
    hint: 'Cherche un mot proche.',
    tags: ['ce2','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-112',
    subject: 'francais',
    title: 'Contraire 3',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'antonymes',
    format: 'qcm',
    instructions: 'Choisis l’antonyme.',
    prompt: 'L’antonyme de monter est :',
    options: [
      { id: 'a', text: 'descendre', isCorrect: true },
      { id: 'b', text: 'ranger', isCorrect: false },
      { id: 'c', text: 'fermer', isCorrect: false }
    ],
    correctAnswer: 'descendre',
    explanation: 'Descendre est le contraire de monter.',
    hint: 'Cherche le mouvement inverse.',
    tags: ['ce2','vocabulaire','antonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-113',
    subject: 'francais',
    title: 'Famille de mots 3',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'famille de mots',
    format: 'qcm',
    instructions: 'Choisis le mot de la même famille.',
    prompt: 'Le mot de la même famille que neige est :',
    options: [
      { id: 'a', text: 'enneigé', isCorrect: true },
      { id: 'b', text: 'bruyant', isCorrect: false },
      { id: 'c', text: 'sage', isCorrect: false }
    ],
    correctAnswer: 'enneigé',
    explanation: 'Neige et enneigé appartiennent à la même famille.',
    hint: 'Cherche un mot construit sur neige.',
    tags: ['ce2','vocabulaire','famille-de-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-114',
    subject: 'francais',
    title: 'Intrus 3',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'intrus',
    format: 'qcm',
    instructions: 'Choisis l’intrus.',
    prompt: 'Lequel n’est pas un animal ?',
    options: [
      { id: 'a', text: 'renard', isCorrect: false },
      { id: 'b', text: 'cheval', isCorrect: false },
      { id: 'c', text: 'tabouret', isCorrect: true }
    ],
    correctAnswer: 'tabouret',
    explanation: 'Tabouret n’est pas un animal.',
    hint: 'Deux mots sont des êtres vivants.',
    tags: ['ce2','vocabulaire','intrus','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-115',
    subject: 'francais',
    title: 'Définition 3',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'definitions',
    format: 'qcm',
    instructions: 'Choisis le bon mot.',
    prompt: 'Quel mot désigne un endroit où l’on soigne les animaux ?',
    options: [
      { id: 'a', text: 'clinique vétérinaire', isCorrect: true },
      { id: 'b', text: 'cinéma', isCorrect: false },
      { id: 'c', text: 'marché', isCorrect: false }
    ],
    correctAnswer: 'clinique vétérinaire',
    explanation: 'On soigne les animaux chez le vétérinaire.',
    hint: 'Cherche un lieu de soin pour animaux.',
    tags: ['ce2','vocabulaire','definitions','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-vocabulaire-116',
    subject: 'francais',
    title: 'Synonyme 4',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'synonymes',
    format: 'qcm',
    instructions: 'Choisis le synonyme.',
    prompt: 'Le synonyme de courageux est :',
    options: [
      { id: 'a', text: 'brave', isCorrect: true },
      { id: 'b', text: 'triste', isCorrect: false },
      { id: 'c', text: 'lent', isCorrect: false }
    ],
    correctAnswer: 'brave',
    explanation: 'Courageux et brave ont un sens proche.',
    hint: 'Cherche un mot proche et positif.',
    tags: ['ce2','vocabulaire','synonymes','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CE2 — EXPRESSION ÉCRITE (fr-ce2-expression-101 à 108)
  ===================================================================== */
  {
    id: 'fr-ce2-expressionecrite-101',
    subject: 'francais',
    title: 'Compléter une phrase',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'ecrire une phrase simple',
    format: 'qcm',
    instructions: 'Choisis la phrase correcte.',
    prompt: 'Quelle phrase est correcte ?',
    options: [
      { id: 'a', text: 'Le chien court dans le jardin.', isCorrect: true },
      { id: 'b', text: 'Le chien dans court jardin.', isCorrect: false },
      { id: 'c', text: 'Court le jardin chien.', isCorrect: false }
    ],
    correctAnswer: 'Le chien court dans le jardin.',
    explanation: 'La phrase correcte a un ordre logique.',
    hint: 'Cherche la phrase qui se lit bien.',
    tags: ['ce2','expression-ecrite','phrase','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-expressionecrite-102',
    subject: 'francais',
    title: 'Ponctuation simple',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ponctuation',
    format: 'qcm',
    instructions: 'Choisis la phrase bien écrite.',
    prompt: 'Quelle phrase commence bien et finit bien ?',
    options: [
      { id: 'a', text: 'les enfants jouent dehors', isCorrect: false },
      { id: 'b', text: 'Les enfants jouent dehors.', isCorrect: true },
      { id: 'c', text: 'Les enfants jouent dehors', isCorrect: false }
    ],
    correctAnswer: 'Les enfants jouent dehors.',
    explanation: 'Une phrase correcte commence par une majuscule et finit par un point.',
    hint: 'Regarde le début et la fin.',
    tags: ['ce2','expression-ecrite','ponctuation','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-expressionecrite-103',
    subject: 'francais',
    title: 'Ordre des mots',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ordre des mots',
    format: 'qcm',
    instructions: 'Choisis la meilleure phrase.',
    prompt: 'Quelle phrase est bien rangée ?',
    options: [
      { id: 'a', text: 'Lina prépare le goûter.', isCorrect: true },
      { id: 'b', text: 'Prépare Lina goûter le.', isCorrect: false },
      { id: 'c', text: 'Goûter Lina le prépare.', isCorrect: false }
    ],
    correctAnswer: 'Lina prépare le goûter.',
    explanation: 'La phrase correcte suit un ordre simple.',
    hint: 'Commence par le personnage.',
    tags: ['ce2','expression-ecrite','ordre-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-expressionecrite-104',
    subject: 'francais',
    title: 'Phrase logique',
    schoolClass: 'CE2',
    generalLevel: 'beginner',
    skill: 'expression_ecrite',
    subskill: 'coherence de phrase',
    format: 'qcm',
    instructions: 'Choisis la phrase qui a du sens.',
    prompt: 'Quelle phrase a du sens ?',
    options: [
      { id: 'a', text: 'Le nuage mange un cahier.', isCorrect: false },
      { id: 'b', text: 'Le boulanger prépare du pain.', isCorrect: true },
      { id: 'c', text: 'Le trottoir chante la soupe.', isCorrect: false }
    ],
    correctAnswer: 'Le boulanger prépare du pain.',
    explanation: 'Une seule phrase est logique.',
    hint: 'Cherche une scène possible.',
    tags: ['ce2','expression-ecrite','coherence','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-expressionecrite-105',
    subject: 'francais',
    title: 'Phrase complète',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'phrase correcte',
    format: 'qcm',
    instructions: 'Choisis la phrase complète.',
    prompt: 'Quelle phrase est complète ?',
    options: [
      { id: 'a', text: 'Le train entre en gare.', isCorrect: true },
      { id: 'b', text: 'Le train dans', isCorrect: false },
      { id: 'c', text: 'Entre en gare', isCorrect: false }
    ],
    correctAnswer: 'Le train entre en gare.',
    explanation: 'Une phrase complète a du sens et se termine bien.',
    hint: 'Cherche une phrase entière.',
    tags: ['ce2','expression-ecrite','phrase-correcte','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-expressionecrite-106',
    subject: 'francais',
    title: 'Choisir une phrase enrichie',
    schoolClass: 'CE2',
    generalLevel: 'advanced',
    skill: 'expression_ecrite',
    subskill: 'phrase enrichie',
    format: 'qcm',
    instructions: 'Choisis la phrase la plus précise.',
    prompt: 'Quelle phrase est la plus précise ?',
    options: [
      { id: 'a', text: 'Le chat dort.', isCorrect: false },
      { id: 'b', text: 'Le petit chat noir dort sur le canapé.', isCorrect: true },
      { id: 'c', text: 'Chat dort.', isCorrect: false }
    ],
    correctAnswer: 'Le petit chat noir dort sur le canapé.',
    explanation: 'La phrase la plus précise donne plus d’informations utiles.',
    hint: 'Cherche la phrase la plus détaillée.',
    tags: ['ce2','expression-ecrite','phrase-enrichie','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-expressionecrite-107',
    subject: 'francais',
    title: 'Majuscule et virgule simple ? non',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ponctuation',
    format: 'qcm',
    instructions: 'Choisis la bonne phrase.',
    prompt: 'Quelle phrase est bien écrite ?',
    options: [
      { id: 'a', text: 'Ce matin, Tom arrive tôt.', isCorrect: true },
      { id: 'b', text: 'ce matin Tom arrive tôt', isCorrect: false },
      { id: 'c', text: 'Ce matin Tom arrive tôt', isCorrect: false }
    ],
    correctAnswer: 'Ce matin, Tom arrive tôt.',
    explanation: 'La bonne phrase commence par une majuscule et utilise correctement la ponctuation.',
    hint: 'Regarde le début et les signes.',
    tags: ['ce2','expression-ecrite','ponctuation','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

  {
    id: 'fr-ce2-expressionecrite-108',
    subject: 'francais',
    title: 'Ordre logique 2',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'expression_ecrite',
    subskill: 'ordre des mots',
    format: 'qcm',
    instructions: 'Choisis la bonne phrase.',
    prompt: 'Quelle phrase est la mieux écrite ?',
    options: [
      { id: 'a', text: 'Nous regardons les étoiles.', isCorrect: true },
      { id: 'b', text: 'Regardons nous étoiles les.', isCorrect: false },
      { id: 'c', text: 'Les étoiles nous regardons.', isCorrect: false }
    ],
    correctAnswer: 'Nous regardons les étoiles.',
    explanation: 'La phrase correcte suit un ordre naturel.',
    hint: 'Lis les phrases à voix basse.',
    tags: ['ce2','expression-ecrite','ordre-des-mots','qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations()
  },

/* =====================================================================
     CM1 — LECTURE (fr-cm1-lecture-101 à 120)
  ===================================================================== */
{
    id: "fr-cm1-lecture-101",
    subject: "francais",
    title: "Inférence météo",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inference",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Nora ferme vite les fenêtres et ramasse le linge oublié dehors. Que se passe-t-il probablement ?",
    options: [
      { id: "a", text: "Il va pleuvoir", isCorrect: true },
      { id: "b", text: "Il va neiger dans la cuisine", isCorrect: false },
      { id: "c", text: "Le soleil entre dans le cartable", isCorrect: false }
    ],
    correctAnswer: "Il va pleuvoir",
    explanation: "Fermer les fenêtres et rentrer le linge sont des indices de pluie.",
    hint: "Cherche les indices liés au temps.",
    tags: ['cm1', 'lecture', 'inference', 'meteo', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-102",
    subject: "francais",
    title: "Comprendre un horaire",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "document court",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le cours de musique commence à 14 h 15. Lila arrive à 14 h 10. Arrive-t-elle en avance ou en retard ?",
    options: [
      { id: "a", text: "En avance", isCorrect: true },
      { id: "b", text: "En retard", isCorrect: false },
      { id: "c", text: "Exactement à l\'heure", isCorrect: false }
    ],
    correctAnswer: "En avance",
    explanation: "14 h 10 est avant 14 h 15.",
    hint: "Compare les deux horaires.",
    tags: ['cm1', 'lecture', 'horaire', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-103",
    subject: "francais",
    title: "Cause d\'une action",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "comprehension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Malo chuchote parce que sa petite sœur dort. Pourquoi parle-t-il doucement ?",
    options: [
      { id: "a", text: "Parce que sa petite sœur dort", isCorrect: true },
      { id: "b", text: "Parce qu\'il est dans la cour", isCorrect: false },
      { id: "c", text: "Parce qu\'il veut chanter", isCorrect: false }
    ],
    correctAnswer: "Parce que sa petite sœur dort",
    explanation: "La raison est donnée dans la phrase.",
    hint: "Relis la fin de la phrase.",
    tags: ['cm1', 'lecture', 'cause', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-104",
    subject: "francais",
    title: "Repérer le lieu",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "comprehension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Les élèves déposent leurs livres à la bibliothèque de l\'école. Où sont-ils ?",
    options: [
      { id: "a", text: "À la bibliothèque de l\'école", isCorrect: true },
      { id: "b", text: "À la piscine", isCorrect: false },
      { id: "c", text: "Au marché", isCorrect: false }
    ],
    correctAnswer: "À la bibliothèque de l\'école",
    explanation: "Le lieu est indiqué clairement dans la phrase.",
    hint: "Cherche l\'endroit nommé.",
    tags: ['cm1', 'lecture', 'lieu', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-105",
    subject: "francais",
    title: "Inférence saison",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inference",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Yanis enfile un bonnet, des gants et une écharpe avant de sortir. Quelle est la saison la plus probable ?",
    options: [
      { id: "a", text: "L'hiver", isCorrect: true },
      { id: "b", text: "L'été", isCorrect: false },
      { id: "c", text: "La rentrée des classes", isCorrect: false }
    ],
    correctAnswer: "L'hiver",
    explanation: "Le bonnet, les gants et l\'écharpe servent quand il fait froid.",
    hint: "Pense aux vêtements d\'hiver.",
    tags: ['cm1', 'lecture', 'inference', 'saisons', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-106",
    subject: "francais",
    title: "Comprendre une consigne",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "consigne",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Consigne : Souligne le verbe puis entoure le sujet. Que faut-il faire en premier ?",
    options: [
      { id: "a", text: "Souligner le verbe", isCorrect: true },
      { id: "b", text: "Entourer le sujet", isCorrect: false },
      { id: "c", text: "Réécrire la phrase", isCorrect: false }
    ],
    correctAnswer: "Souligner le verbe",
    explanation: "La consigne indique d\'abord de souligner le verbe.",
    hint: "Lis l\'ordre des actions.",
    tags: ['cm1', 'lecture', 'consigne', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-107",
    subject: "francais",
    title: "Inférence voyage",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inference",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Maman vérifie les billets et pose les valises près de la porte. Que prépare-t-elle probablement ?",
    options: [
      { id: "a", text: "Un départ en voyage", isCorrect: true },
      { id: "b", text: "Un gâteau au chocolat", isCorrect: false },
      { id: "c", text: "Une partie de cache-cache", isCorrect: false }
    ],
    correctAnswer: "Un départ en voyage",
    explanation: "Les billets et les valises font penser à un voyage.",
    hint: "Observe les objets cités.",
    tags: ['cm1', 'lecture', 'voyage', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-108",
    subject: "francais",
    title: "Information explicite",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "comprehension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le mercredi, Inès va au judo après l\'école. Quel jour pratique-t-elle le judo ?",
    options: [
      { id: "a", text: "Le mercredi", isCorrect: true },
      { id: "b", text: "Le dimanche", isCorrect: false },
      { id: "c", text: "Tous les jours", isCorrect: false }
    ],
    correctAnswer: "Le mercredi",
    explanation: "Le jour est écrit dans la phrase.",
    hint: "Cherche un nom de jour.",
    tags: ['cm1', 'lecture', 'jour', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-109",
    subject: "francais",
    title: "Lien logique",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "lien logique",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le chemin est verglacé, donc les voitures roulent lentement. Pourquoi roulent-elles lentement ?",
    options: [
      { id: "a", text: "Parce que le chemin est verglacé", isCorrect: true },
      { id: "b", text: "Parce qu'elles sont à l'arrêt", isCorrect: false },
      { id: "c", text: "Parce qu\'il fait très chaud", isCorrect: false }
    ],
    correctAnswer: "Parce que le chemin est verglacé",
    explanation: "Le mot donc montre la conséquence d\'un sol glissant.",
    hint: "Cherche la cause donnée avant donc.",
    tags: ['cm1', 'lecture', 'logique', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-110",
    subject: "francais",
    title: "Identifier le personnage",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "comprehension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Emma prête son stylo à Hugo parce qu\'il a oublié sa trousse. Qui a oublié sa trousse ?",
    options: [
      { id: "a", text: "Hugo", isCorrect: true },
      { id: "b", text: "Emma", isCorrect: false },
      { id: "c", text: "Le maître", isCorrect: false }
    ],
    correctAnswer: "Hugo",
    explanation: "C'est Hugo qui a oublié sa trousse, donc Emma lui prête un stylo.",
    hint: "Qui reçoit le stylo ?",
    tags: ['cm1', 'lecture', 'personnage', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-111",
    subject: "francais",
    title: "Comprendre une affiche",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "document court",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Affiche : 'La fête de l\'école aura lieu samedi à 10 h dans la cour.' Où se déroulera la fête ?",
    options: [
      { id: "a", text: "Dans la cour", isCorrect: true },
      { id: "b", text: "Dans la forêt", isCorrect: false },
      { id: "c", text: "À la cantine", isCorrect: false }
    ],
    correctAnswer: "Dans la cour",
    explanation: "L'affiche donne le lieu : la cour.",
    hint: "Repère le lieu dans l\'affiche.",
    tags: ['cm1', 'lecture', 'affiche', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-112",
    subject: "francais",
    title: "Inférence émotion",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inference emotion",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Après avoir gagné la course, Sami lève les bras et sourit largement. Comment se sent-il probablement ?",
    options: [
      { id: "a", text: "Heureux", isCorrect: true },
      { id: "b", text: "Endormi", isCorrect: false },
      { id: "c", text: "Invisible", isCorrect: false }
    ],
    correctAnswer: "Heureux",
    explanation: "Lever les bras et sourire montrent la joie.",
    hint: "Observe les gestes du personnage.",
    tags: ['cm1', 'lecture', 'emotion', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-113",
    subject: "francais",
    title: "Ordre des actions",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "chronologie",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Léna met la table, puis elle appelle sa famille pour dîner. Que fait-elle d\'abord ?",
    options: [
      { id: "a", text: "Elle met la table", isCorrect: true },
      { id: "b", text: "Elle appelle sa famille", isCorrect: false },
      { id: "c", text: "Elle range sa chambre", isCorrect: false }
    ],
    correctAnswer: "Elle met la table",
    explanation: "Le mot puis indique la deuxième action.",
    hint: "Cherche la première action.",
    tags: ['cm1', 'lecture', 'chronologie', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-114",
    subject: "francais",
    title: "Inférence lieu",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inference",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le pharmacien lui conseille du sirop pour calmer sa toux. Où se trouve probablement cette personne ?",
    options: [
      { id: "a", text: "À la pharmacie", isCorrect: true },
      { id: "b", text: "À la gare", isCorrect: false },
      { id: "c", text: "À la boulangerie", isCorrect: false }
    ],
    correctAnswer: "À la pharmacie",
    explanation: "Le pharmacien travaille dans une pharmacie.",
    hint: "Pense au métier cité.",
    tags: ['cm1', 'lecture', 'lieu', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-115",
    subject: "francais",
    title: "Identifier l\'objet",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "comprehension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Pour son exposé, Jade découpe des images dans un vieux magazine. Que découpe-t-elle ?",
    options: [
      { id: "a", text: "Des images", isCorrect: true },
      { id: "b", text: "Des pommes", isCorrect: false },
      { id: "c", text: "Des chaussures", isCorrect: false }
    ],
    correctAnswer: "Des images",
    explanation: "Le texte indique qu\'elle découpe des images.",
    hint: "Cherche ce que Jade découpe.",
    tags: ['cm1', 'lecture', 'objet', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-116",
    subject: "francais",
    title: "Comprendre un message",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "document pratique",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Message : 'N'oublie pas ton maillot pour la piscine demain.' Que faut-il apporter ?",
    options: [
      { id: "a", text: "Un maillot", isCorrect: true },
      { id: "b", text: "Un dictionnaire", isCorrect: false },
      { id: "c", text: "Une guitare", isCorrect: false }
    ],
    correctAnswer: "Un maillot",
    explanation: "Le message demande d\'apporter un maillot.",
    hint: "Cherche l\'objet demandé.",
    tags: ['cm1', 'lecture', 'message', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-117",
    subject: "francais",
    title: "Moment de la journée",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inference temps",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Après le dîner, Noé enfile son pyjama et se brosse les dents. Quel moment de la journée est-ce ?",
    options: [
      { id: "a", text: "Le soir", isCorrect: true },
      { id: "b", text: "Le matin", isCorrect: false },
      { id: "c", text: "La récréation", isCorrect: false }
    ],
    correctAnswer: "Le soir",
    explanation: "On met souvent son pyjama avant de dormir.",
    hint: "Pense aux habitudes du coucher.",
    tags: ['cm1', 'lecture', 'temps', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-118",
    subject: "francais",
    title: "Comprendre une règle",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "regle",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Règle : 'On ne court pas dans les couloirs.' Que faut-il éviter ?",
    options: [
      { id: "a", text: "Courir dans les couloirs", isCorrect: true },
      { id: "b", text: "Lire en classe", isCorrect: false },
      { id: "c", text: "Ranger ses affaires", isCorrect: false }
    ],
    correctAnswer: "Courir dans les couloirs",
    explanation: "La règle interdit de courir dans les couloirs.",
    hint: "Cherche ce qui est interdit.",
    tags: ['cm1', 'lecture', 'regle', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-119",
    subject: "francais",
    title: "Reformulation",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "reformulation",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "'Le jardinier arrose les fleurs chaque matin.' Quelle phrase dit la même chose ?",
    options: [
      { id: "a", text: "Chaque matin, le jardinier donne de l\'eau aux fleurs", isCorrect: true },
      { id: "b", text: "Les fleurs arrosent le jardinier chaque matin", isCorrect: false },
      { id: "c", text: "Le jardinier coupe les fleurs chaque matin", isCorrect: false }
    ],
    correctAnswer: "Chaque matin, le jardinier donne de l\'eau aux fleurs",
    explanation: "Arroser les fleurs signifie leur donner de l\'eau.",
    hint: "Cherche la phrase avec le même sens.",
    tags: ['cm1', 'lecture', 'reformulation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-lecture-120",
    subject: "francais",
    title: "Inférence école",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inference",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le maître distribue les copies et demande de sortir une règle. Que vont probablement faire les élèves ?",
    options: [
      { id: "a", text: "Un exercice ou une évaluation", isCorrect: true },
      { id: "b", text: "Une sieste dans le jardin", isCorrect: false },
      { id: "c", text: "Un repas à la cantine", isCorrect: false }
    ],
    correctAnswer: "Un exercice ou une évaluation",
    explanation: "Distribuer des copies et demander une règle annonce un travail scolaire.",
    hint: "Observe les indices de la classe.",
    tags: ['cm1', 'lecture', 'ecole', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

  /* =====================================================================
     CM1 — ORTHOGRAPHE (fr-cm1-orthographe-101 à 118)
  ===================================================================== */
{
    id: "fr-cm1-orthographe-101",
    subject: "francais",
    title: "Accord sujet-verbe",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "accord sujet verbe",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Les pompiers _____ très vite.",
    options: [
      { id: "a", text: "arrive", isCorrect: false },
      { id: "b", text: "arrivent", isCorrect: true },
      { id: "c", text: "arrivons", isCorrect: false }
    ],
    correctAnswer: "arrivent",
    explanation: "Le sujet les pompiers est au pluriel, donc le verbe s\'écrit arrivent.",
    hint: "Regarde le nombre du sujet.",
    tags: ['cm1', 'orthographe', 'accord', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-102",
    subject: "francais",
    title: "c'est ou s'est",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "_____ un long voyage.",
    options: [
      { id: "a", text: "C'est", isCorrect: true },
      { id: "b", text: "S'est", isCorrect: false }
    ],
    correctAnswer: "C'est",
    explanation: "On écrit c\'est pour dire cela est.",
    hint: "Peut-on remplacer par cela est ?",
    tags: ['cm1', 'orthographe', 'cest-sest', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-103",
    subject: "francais",
    title: "on ou ont",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Ils _____ préparé un exposé.",
    options: [
      { id: "a", text: "on", isCorrect: false },
      { id: "b", text: "ont", isCorrect: true }
    ],
    correctAnswer: "ont",
    explanation: "Avec ils, on utilise le verbe avoir : ils ont.",
    hint: "Peut-on dire avaient préparé ?",
    tags: ['cm1', 'orthographe', 'on-ont', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-104",
    subject: "francais",
    title: "ce ou se",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "_____ matin, il se dépêche.",
    options: [
      { id: "a", text: "Ce", isCorrect: true },
      { id: "b", text: "Se", isCorrect: false }
    ],
    correctAnswer: "Ce",
    explanation: "On écrit ce matin pour désigner ce moment de la journée.",
    hint: "Le mot suivant est-il un nom ?",
    tags: ['cm1', 'orthographe', 'ce-se', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-105",
    subject: "francais",
    title: "ou ou où",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Sais-tu _____ elle habite ?",
    options: [
      { id: "a", text: "ou", isCorrect: false },
      { id: "b", text: "où", isCorrect: true }
    ],
    correctAnswer: "où",
    explanation: "On écrit où quand on parle d\'un lieu.",
    hint: "Pose-t-on une question sur un endroit ?",
    tags: ['cm1', 'orthographe', 'ou-ou-accent', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-106",
    subject: "francais",
    title: "a ou à",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Lina _____ un vélo rouge.",
    options: [
      { id: "a", text: "a", isCorrect: true },
      { id: "b", text: "à", isCorrect: false }
    ],
    correctAnswer: "a",
    explanation: "Ici, a est le verbe avoir.",
    hint: "Peut-on dire avait ?",
    tags: ['cm1', 'orthographe', 'a-a-grave', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-107",
    subject: "francais",
    title: "et ou est",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Le jardin _____ très grand.",
    options: [
      { id: "a", text: "et", isCorrect: false },
      { id: "b", text: "est", isCorrect: true }
    ],
    correctAnswer: "est",
    explanation: "On écrit est avec le verbe être.",
    hint: "Peut-on dire était ?",
    tags: ['cm1', 'orthographe', 'et-est', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-108",
    subject: "francais",
    title: "mes ou mais",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Je voulais venir, _____ j\'étais malade.",
    options: [
      { id: "a", text: "mes", isCorrect: false },
      { id: "b", text: "mais", isCorrect: true }
    ],
    correctAnswer: "mais",
    explanation: "Mais marque une opposition.",
    hint: "Peut-on dire cependant ?",
    tags: ['cm1', 'orthographe', 'mes-mais', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-109",
    subject: "francais",
    title: "son ou sont",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Les enfants _____ en classe.",
    options: [
      { id: "a", text: "son", isCorrect: false },
      { id: "b", text: "sont", isCorrect: true }
    ],
    correctAnswer: "sont",
    explanation: "Avec les enfants, on utilise le verbe être au pluriel : sont.",
    hint: "Peut-on dire étaient ?",
    tags: ['cm1', 'orthographe', 'son-sont', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-110",
    subject: "francais",
    title: "Pluriel régulier",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "orthographe",
    subskill: "pluriel des noms",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Plusieurs jardin :",
    options: [
      { id: "a", text: "des jardin", isCorrect: false },
      { id: "b", text: "des jardins", isCorrect: true },
      { id: "c", text: "des jardint", isCorrect: false }
    ],
    correctAnswer: "des jardins",
    explanation: "Au pluriel, on ajoute généralement un s.",
    hint: "Il y en a plusieurs.",
    tags: ['cm1', 'orthographe', 'pluriel', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-111",
    subject: "francais",
    title: "Pluriel en -x",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "pluriel des noms",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Plusieurs bateau :",
    options: [
      { id: "a", text: "des bateaus", isCorrect: false },
      { id: "b", text: "des bateaux", isCorrect: true },
      { id: "c", text: "des bateau", isCorrect: false }
    ],
    correctAnswer: "des bateaux",
    explanation: "Les noms en -eau prennent souvent x au pluriel.",
    hint: "Regarde la fin du mot.",
    tags: ['cm1', 'orthographe', 'pluriel', 'eau', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-112",
    subject: "francais",
    title: "Accord dans le GN",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "accord adjectif",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Lequel est correct ?",
    options: [
      { id: "a", text: "des fleurs rouges", isCorrect: true },
      { id: "b", text: "des fleurs rouge", isCorrect: false },
      { id: "c", text: "des fleur rouges", isCorrect: false }
    ],
    correctAnswer: "des fleurs rouges",
    explanation: "Le nom et l'adjectif s'accordent au pluriel.",
    hint: "Regarde s\'il y en a plusieurs.",
    tags: ['cm1', 'orthographe', 'accord-adjectif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-113",
    subject: "francais",
    title: "Majuscule au nom propre",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "orthographe",
    subskill: "majuscule",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Lequel est bien écrit ?",
    options: [
      { id: "a", text: "paris", isCorrect: false },
      { id: "b", text: "Paris", isCorrect: true },
      { id: "c", text: "paRis", isCorrect: false }
    ],
    correctAnswer: "Paris",
    explanation: "Un nom de ville prend une majuscule.",
    hint: "C'est un nom propre.",
    tags: ['cm1', 'orthographe', 'majuscule', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-114",
    subject: "francais",
    title: "Ponctuation de phrase",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "orthographe",
    subskill: "ponctuation",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Laquelle de ces phrases est bien ponctuée ?",
    options: [
      { id: "a", text: "les enfants jouent dehors", isCorrect: false },
      { id: "b", text: "Les enfants jouent dehors.", isCorrect: true },
      { id: "c", text: "Les enfants jouent dehors,", isCorrect: false }
    ],
    correctAnswer: "Les enfants jouent dehors.",
    explanation: "Une phrase affirmative commence par une majuscule et se termine par un point.",
    hint: "Vérifie le début et la fin.",
    tags: ['cm1', 'orthographe', 'ponctuation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-115",
    subject: "francais",
    title: "quel ou quelle",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "accord determinant interrogatif",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "_____ histoire préfères-tu ?",
    options: [
      { id: "a", text: "Quel", isCorrect: false },
      { id: "b", text: "Quelle", isCorrect: true }
    ],
    correctAnswer: "Quelle",
    explanation: "Histoire est féminin, donc on écrit quelle.",
    hint: "Regarde le genre du nom.",
    tags: ['cm1', 'orthographe', 'accord', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-116",
    subject: "francais",
    title: "leur ou leurs",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "determinants possessifs",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Les élèves rangent _____ cahiers.",
    options: [
      { id: "a", text: "leur", isCorrect: false },
      { id: "b", text: "leurs", isCorrect: true }
    ],
    correctAnswer: "leurs",
    explanation: "Le nom cahiers est au pluriel, donc on écrit leurs.",
    hint: "Y a-t-il un ou plusieurs cahiers ?",
    tags: ['cm1', 'orthographe', 'leur-leurs', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-117",
    subject: "francais",
    title: "ces ou ses",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "_____ chaussures sont neuves.",
    options: [
      { id: "a", text: "Ces", isCorrect: true },
      { id: "b", text: "Ses", isCorrect: false }
    ],
    correctAnswer: "Ces",
    explanation: "Ces sert à montrer ou désigner plusieurs choses.",
    hint: "Peut-on dire ces chaussures-là ?",
    tags: ['cm1', 'orthographe', 'ces-ses', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-orthographe-118",
    subject: "francais",
    title: "Accord sujet-verbe 2",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "accord sujet verbe",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Mon frère et moi _____ au parc.",
    options: [
      { id: "a", text: "allons", isCorrect: true },
      { id: "b", text: "va", isCorrect: false },
      { id: "c", text: "allez", isCorrect: false }
    ],
    correctAnswer: "allons",
    explanation: "Mon frère et moi correspond à nous, donc on écrit allons.",
    hint: "Remplace le sujet par nous.",
    tags: ['cm1', 'orthographe', 'accord', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM1 — GRAMMAIRE (fr-cm1-grammaire-101 à 118)
  ===================================================================== */
{
    id: "fr-cm1-grammaire-101",
    subject: "francais",
    title: "Identifier l\'adjectif",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "adjectif qualificatif",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le grand bateau avance lentement.",
    options: [
      { id: "a", text: "grand", isCorrect: true },
      { id: "b", text: "bateau", isCorrect: false },
      { id: "c", text: "avance", isCorrect: false }
    ],
    correctAnswer: "grand",
    explanation: "Grand donne une précision sur le nom bateau.",
    hint: "Cherche le mot qui décrit le nom.",
    tags: ['cm1', 'grammaire', 'adjectif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-102",
    subject: "francais",
    title: "Identifier le déterminant",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "determinant",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Cette voiture roule vite.",
    options: [
      { id: "a", text: "Cette", isCorrect: true },
      { id: "b", text: "voiture", isCorrect: false },
      { id: "c", text: "roule", isCorrect: false }
    ],
    correctAnswer: "Cette",
    explanation: "Cette est le mot placé devant le nom voiture.",
    hint: "Le déterminant accompagne le nom.",
    tags: ['cm1', 'grammaire', 'determinant', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-103",
    subject: "francais",
    title: "Repérer le sujet",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "grammaire",
    subskill: "identifier le sujet",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Les voyageurs attendent le train.",
    options: [
      { id: "a", text: "Les voyageurs", isCorrect: true },
      { id: "b", text: "attendent", isCorrect: false },
      { id: "c", text: "le train", isCorrect: false }
    ],
    correctAnswer: "Les voyageurs",
    explanation: "Le sujet est celui qui fait l'action d'attendre.",
    hint: "Qui attend ?",
    tags: ['cm1', 'grammaire', 'sujet', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-104",
    subject: "francais",
    title: "Repérer le verbe",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "grammaire",
    subskill: "identifier le verbe",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le facteur distribue le courrier.",
    options: [
      { id: "a", text: "facteur", isCorrect: false },
      { id: "b", text: "distribue", isCorrect: true },
      { id: "c", text: "courrier", isCorrect: false }
    ],
    correctAnswer: "distribue",
    explanation: "Distribue est le verbe, il dit l\'action.",
    hint: "Cherche ce qui se passe.",
    tags: ['cm1', 'grammaire', 'verbe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-105",
    subject: "francais",
    title: "Nom commun ou nom propre",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "nature des noms",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans la phrase 'Mina visite Marseille', quel mot est un nom propre ?",
    options: [
      { id: "a", text: "visite", isCorrect: false },
      { id: "b", text: "Marseille", isCorrect: true },
      { id: "c", text: "phrase", isCorrect: false }
    ],
    correctAnswer: "Marseille",
    explanation: "Marseille est le nom d\'une ville, donc un nom propre.",
    hint: "Cherche le mot avec une majuscule.",
    tags: ['cm1', 'grammaire', 'nom-propre', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-106",
    subject: "francais",
    title: "Pronom personnel sujet",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "pronoms personnels",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Ils rentreront tard.",
    options: [
      { id: "a", text: "Ils", isCorrect: true },
      { id: "b", text: "rentreront", isCorrect: false },
      { id: "c", text: "tard", isCorrect: false }
    ],
    correctAnswer: "Ils",
    explanation: "Ils remplace des personnes ou des groupes : c\'est un pronom personnel sujet.",
    hint: "Cherche le petit mot sujet.",
    tags: ['cm1', 'grammaire', 'pronom', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-107",
    subject: "francais",
    title: "Groupe nominal",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "groupe nominal",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le petit chat noir dort. Quel est le groupe nominal complet sujet ?",
    options: [
      { id: "a", text: "Le petit chat noir", isCorrect: true },
      { id: "b", text: "dort", isCorrect: false },
      { id: "c", text: "chat noir dort", isCorrect: false }
    ],
    correctAnswer: "Le petit chat noir",
    explanation: "Le groupe nominal sujet comprend le déterminant, le nom et les adjectifs.",
    hint: "Prends tout le groupe qui fait l\'action.",
    tags: ['cm1', 'grammaire', 'groupe-nominal', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-108",
    subject: "francais",
    title: "Masculin ou féminin",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "grammaire",
    subskill: "genre du nom",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le mot maison est :",
    options: [
      { id: "a", text: "Masculin", isCorrect: false },
      { id: "b", text: "Féminin", isCorrect: true }
    ],
    correctAnswer: "Féminin",
    explanation: "On dit la maison : le nom est féminin.",
    hint: "Écoute le déterminant qui convient.",
    tags: ['cm1', 'grammaire', 'genre', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-109",
    subject: "francais",
    title: "Singulier ou pluriel",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "grammaire",
    subskill: "nombre",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le groupe 'les arbres' est :",
    options: [
      { id: "a", text: "Singulier", isCorrect: false },
      { id: "b", text: "Pluriel", isCorrect: true }
    ],
    correctAnswer: "Pluriel",
    explanation: "Les arbres désigne plusieurs arbres.",
    hint: "Y en a-t-il un ou plusieurs ?",
    tags: ['cm1', 'grammaire', 'nombre', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-110",
    subject: "francais",
    title: "Nature du mot",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "nature des mots",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Un oiseau chante', quelle est la nature du mot chante ?",
    options: [
      { id: "a", text: "Un nom", isCorrect: false },
      { id: "b", text: "Un verbe", isCorrect: true },
      { id: "c", text: "Un déterminant", isCorrect: false }
    ],
    correctAnswer: "Un verbe",
    explanation: "Chante exprime l\'action.",
    hint: "Est-ce une action ?",
    tags: ['cm1', 'grammaire', 'nature-des-mots', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-111",
    subject: "francais",
    title: "Complément du nom simple",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "groupe nominal",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le sac de sport est lourd. Quel groupe complète le nom sac ?",
    options: [
      { id: "a", text: "de sport", isCorrect: true },
      { id: "b", text: "Le sac", isCorrect: false },
      { id: "c", text: "est lourd", isCorrect: false }
    ],
    correctAnswer: "de sport",
    explanation: "De sport apporte une précision sur le nom sac.",
    hint: "Cherche ce qui précise le nom.",
    tags: ['cm1', 'grammaire', 'complement-du-nom', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-112",
    subject: "francais",
    title: "Remplacer par un pronom",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "pronoms personnels",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Quel pronom peut remplacer 'Léa et moi' ?",
    options: [
      { id: "a", text: "Nous", isCorrect: true },
      { id: "b", text: "Vous", isCorrect: false },
      { id: "c", text: "Ils", isCorrect: false }
    ],
    correctAnswer: "Nous",
    explanation: "Léa et moi correspond à nous.",
    hint: "La personne qui parle est incluse.",
    tags: ['cm1', 'grammaire', 'pronom', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-113",
    subject: "francais",
    title: "Identifier un groupe verbal",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "verbe et complements",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Le chien mange sa ration', quel groupe dit ce qu\'on fait le sujet ?",
    options: [
      { id: "a", text: "mange sa ration", isCorrect: true },
      { id: "b", text: "Le chien", isCorrect: false },
      { id: "c", text: "sa", isCorrect: false }
    ],
    correctAnswer: "mange sa ration",
    explanation: "Le groupe verbal contient le verbe et ce qui l\'accompagne.",
    hint: "Prends le verbe avec son complément.",
    tags: ['cm1', 'grammaire', 'groupe-verbal', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-114",
    subject: "francais",
    title: "Déterminant possessif",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "determinants",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Mon voisin arrive. Quel mot est un déterminant possessif ?",
    options: [
      { id: "a", text: "Mon", isCorrect: true },
      { id: "b", text: "voisin", isCorrect: false },
      { id: "c", text: "arrive", isCorrect: false }
    ],
    correctAnswer: "Mon",
    explanation: "Mon indique l\'appartenance.",
    hint: "Le mot montre à qui appartient le nom.",
    tags: ['cm1', 'grammaire', 'determinant', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-115",
    subject: "francais",
    title: "Adjectif ou nom",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "nature des mots",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'une soupe chaude', le mot chaude est :",
    options: [
      { id: "a", text: "Un adjectif", isCorrect: true },
      { id: "b", text: "Un nom", isCorrect: false },
      { id: "c", text: "Un verbe", isCorrect: false }
    ],
    correctAnswer: "Un adjectif",
    explanation: "Chaude décrit le nom soupe.",
    hint: "Le mot donne une précision.",
    tags: ['cm1', 'grammaire', 'adjectif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-116",
    subject: "francais",
    title: "Sujet dans la phrase",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "identifier le sujet",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le soir, les lampes brillent. Quel est le sujet ?",
    options: [
      { id: "a", text: "Le soir", isCorrect: false },
      { id: "b", text: "les lampes", isCorrect: true },
      { id: "c", text: "brillent", isCorrect: false }
    ],
    correctAnswer: "les lampes",
    explanation: "Le sujet est les lampes, c'est lui qui fait l'action de briller.",
    hint: "Qui brille ?",
    tags: ['cm1', 'grammaire', 'sujet', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-117",
    subject: "francais",
    title: "Verbe conjugué",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "verbe",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Nous voulons chanter', quel verbe est conjugué ?",
    options: [
      { id: "a", text: "chanter", isCorrect: false },
      { id: "b", text: "voulons", isCorrect: true },
      { id: "c", text: "nous", isCorrect: false }
    ],
    correctAnswer: "voulons",
    explanation: "Voulons est conjugué, chanter est à l\'infinitif.",
    hint: "Le verbe conjugué change selon le sujet.",
    tags: ['cm1', 'grammaire', 'verbe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-grammaire-118",
    subject: "francais",
    title: "Déterminant démonstratif",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "determinants",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Ce livre est passionnant. Quel mot montre le livre ?",
    options: [
      { id: "a", text: "Ce", isCorrect: true },
      { id: "b", text: "livre", isCorrect: false },
      { id: "c", text: "passionnant", isCorrect: false }
    ],
    correctAnswer: "Ce",
    explanation: "Ce sert à montrer ou désigner.",
    hint: "C'est le petit mot placé avant le nom.",
    tags: ['cm1', 'grammaire', 'determinant', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM1 — CONJUGAISON (fr-cm1-conjugaison-101 à 116)
  ===================================================================== */
{
    id: "fr-cm1-conjugaison-101",
    subject: "francais",
    title: "Présent du 1er groupe nous",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "conjugaison",
    subskill: "present",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Nous _____ dans la cour. (jouer)",
    options: [
      { id: "a", text: "jouons", isCorrect: true },
      { id: "b", text: "jouez", isCorrect: false },
      { id: "c", text: "jouent", isCorrect: false }
    ],
    correctAnswer: "jouons",
    explanation: "Avec nous, les verbes du 1er groupe se terminent par -ons.",
    hint: "Pense à nous -ons.",
    tags: ['cm1', 'conjugaison', 'present', '1er-groupe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-102",
    subject: "francais",
    title: "Présent du verbe être",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "conjugaison",
    subskill: "etre au present",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Vous _____ prêts.",
    options: [
      { id: "a", text: "êtes", isCorrect: true },
      { id: "b", text: "sommes", isCorrect: false },
      { id: "c", text: "est", isCorrect: false }
    ],
    correctAnswer: "êtes",
    explanation: "Avec vous, le verbe être se conjugue êtes.",
    hint: "Récite je suis, tu es, il est...",
    tags: ['cm1', 'conjugaison', 'etre', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-103",
    subject: "francais",
    title: "Présent du verbe avoir",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "conjugaison",
    subskill: "avoir au present",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Ils _____ faim.",
    options: [
      { id: "a", text: "ont", isCorrect: true },
      { id: "b", text: "avez", isCorrect: false },
      { id: "c", text: "as", isCorrect: false }
    ],
    correctAnswer: "ont",
    explanation: "Avec ils, le verbe avoir se conjugue ont.",
    hint: "Pense à ils ont.",
    tags: ['cm1', 'conjugaison', 'avoir', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-104",
    subject: "francais",
    title: "Présent du verbe aller",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "conjugaison",
    subskill: "aller au present",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Tu _____ à la piscine.",
    options: [
      { id: "a", text: "vas", isCorrect: true },
      { id: "b", text: "va", isCorrect: false },
      { id: "c", text: "vont", isCorrect: false }
    ],
    correctAnswer: "vas",
    explanation: "Avec tu, le verbe aller se conjugue vas.",
    hint: "Je vais, tu vas, il va.",
    tags: ['cm1', 'conjugaison', 'aller', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-105",
    subject: "francais",
    title: "Présent du verbe faire",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "conjugaison",
    subskill: "faire au present",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Nous _____ un dessin.",
    options: [
      { id: "a", text: "faites", isCorrect: false },
      { id: "b", text: "faisons", isCorrect: true },
      { id: "c", text: "font", isCorrect: false }
    ],
    correctAnswer: "faisons",
    explanation: "Avec nous, faire se conjugue faisons.",
    hint: "Pense à nous faisons.",
    tags: ['cm1', 'conjugaison', 'faire', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-106",
    subject: "francais",
    title: "Imparfait du 1er groupe je",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "imparfait",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Quand j\'étais petit, je _____ souvent dehors. (jouer)",
    options: [
      { id: "a", text: "jouais", isCorrect: true },
      { id: "b", text: "joue", isCorrect: false },
      { id: "c", text: "jouerai", isCorrect: false }
    ],
    correctAnswer: "jouais",
    explanation: "À l\'imparfait avec je, on écrit jouais.",
    hint: "Cherche le temps du passé qui dure.",
    tags: ['cm1', 'conjugaison', 'imparfait', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-107",
    subject: "francais",
    title: "Imparfait du 1er groupe nous",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "imparfait",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Avant, nous _____ dans cette rue. (habiter)",
    options: [
      { id: "a", text: "habitions", isCorrect: true },
      { id: "b", text: "habitons", isCorrect: false },
      { id: "c", text: "habiterez", isCorrect: false }
    ],
    correctAnswer: "habitions",
    explanation: "Avec nous à l\'imparfait, on écrit habitions.",
    hint: "Pense à la terminaison -ions.",
    tags: ['cm1', 'conjugaison', 'imparfait', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-108",
    subject: "francais",
    title: "Imparfait du verbe être",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "etre a l imparfait",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Hier, ils _____ contents.",
    options: [
      { id: "a", text: "étaient", isCorrect: true },
      { id: "b", text: "sont", isCorrect: false },
      { id: "c", text: "seront", isCorrect: false }
    ],
    correctAnswer: "étaient",
    explanation: "À l\'imparfait avec ils, être se conjugue étaient.",
    hint: "Cherche la forme du passé.",
    tags: ['cm1', 'conjugaison', 'etre', 'imparfait', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-109",
    subject: "francais",
    title: "Imparfait du verbe avoir",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "avoir a l imparfait",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Quand tu étais petit, tu _____ peur du noir.",
    options: [
      { id: "a", text: "avais", isCorrect: true },
      { id: "b", text: "as", isCorrect: false },
      { id: "c", text: "auras", isCorrect: false }
    ],
    correctAnswer: "avais",
    explanation: "À l\'imparfait avec tu, avoir se conjugue avais.",
    hint: "Pense au passé.",
    tags: ['cm1', 'conjugaison', 'avoir', 'imparfait', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-110",
    subject: "francais",
    title: "Futur simple du 1er groupe",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "futur simple",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Demain, vous _____ au musée. (visiter)",
    options: [
      { id: "a", text: "visiterez", isCorrect: true },
      { id: "b", text: "visitez", isCorrect: false },
      { id: "c", text: "visitions", isCorrect: false }
    ],
    correctAnswer: "visiterez",
    explanation: "Au futur simple avec vous, on écrit visiterez.",
    hint: "Cherche le temps de demain.",
    tags: ['cm1', 'conjugaison', 'futur', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-111",
    subject: "francais",
    title: "Futur simple du verbe aller",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "futur simple",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Demain, ils _____ à la mer.",
    options: [
      { id: "a", text: "iront", isCorrect: true },
      { id: "b", text: "vont", isCorrect: false },
      { id: "c", text: "allaient", isCorrect: false }
    ],
    correctAnswer: "iront",
    explanation: "Le futur simple du verbe aller avec ils est iront.",
    hint: "Pense à j\'irai, tu iras...",
    tags: ['cm1', 'conjugaison', 'futur', 'aller', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-112",
    subject: "francais",
    title: "Trouver l\'infinitif",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "conjugaison",
    subskill: "infinitif",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Dans 'Nous finissons le travail', l\'infinitif de finissons est :",
    options: [
      { id: "a", text: "finir", isCorrect: true },
      { id: "b", text: "finissons", isCorrect: false },
      { id: "c", text: "fini", isCorrect: false }
    ],
    correctAnswer: "finir",
    explanation: "L'infinitif est la forme non conjuguée du verbe.",
    hint: "C'est la forme du dictionnaire.",
    tags: ['cm1', 'conjugaison', 'infinitif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-113",
    subject: "francais",
    title: "Présent du 2e groupe",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "present",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Nous _____ nos leçons. (finir)",
    options: [
      { id: "a", text: "finissons", isCorrect: true },
      { id: "b", text: "finissais", isCorrect: false },
      { id: "c", text: "finirons", isCorrect: false }
    ],
    correctAnswer: "finissons",
    explanation: "Au présent avec nous, finir se conjugue finissons.",
    hint: "Cherche le temps du moment.",
    tags: ['cm1', 'conjugaison', '2e-groupe', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-114",
    subject: "francais",
    title: "Identifier le temps",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "reperer le temps",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Dans 'Hier, nous marchions longtemps', le verbe marchions est à :",
    options: [
      { id: "a", text: "L'imparfait", isCorrect: true },
      { id: "b", text: "Le présent", isCorrect: false },
      { id: "c", text: "Le futur simple", isCorrect: false }
    ],
    correctAnswer: "L'imparfait",
    explanation: "Marchions indique une action passée qui durait.",
    hint: "Le mot hier t\'aide.",
    tags: ['cm1', 'conjugaison', 'temps', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-115",
    subject: "francais",
    title: "Présent du verbe venir",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "present",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Ils _____ ce soir. (venir)",
    options: [
      { id: "a", text: "viennent", isCorrect: true },
      { id: "b", text: "venons", isCorrect: false },
      { id: "c", text: "venait", isCorrect: false }
    ],
    correctAnswer: "viennent",
    explanation: "Au présent avec ils, venir se conjugue viennent.",
    hint: "Pense à ils viennent.",
    tags: ['cm1', 'conjugaison', 'venir', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-conjugaison-116",
    subject: "francais",
    title: "Futur simple du verbe être",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "futur simple",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Plus tard, tu _____ grand.",
    options: [
      { id: "a", text: "seras", isCorrect: true },
      { id: "b", text: "étais", isCorrect: false },
      { id: "c", text: "es", isCorrect: false }
    ],
    correctAnswer: "seras",
    explanation: "Au futur simple avec tu, être se conjugue seras.",
    hint: "Pense à demain ou plus tard.",
    tags: ['cm1', 'conjugaison', 'etre', 'futur', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM1 — VOCABULAIRE (fr-cm1-vocabulaire-101 à 116)
  ===================================================================== */
{
    id: "fr-cm1-vocabulaire-101",
    subject: "francais",
    title: "Famille de mots",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "famille de mots",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le mot de la même famille que 'laver' est :",
    options: [
      { id: "a", text: "lavage", isCorrect: true },
      { id: "b", text: "proprement", isCorrect: false },
      { id: "c", text: "savon", isCorrect: false }
    ],
    correctAnswer: "lavage",
    explanation: "Laver et lavage appartiennent à la même famille.",
    hint: "Cherche le même radical.",
    tags: ['cm1', 'vocabulaire', 'famille-de-mots', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-102",
    subject: "francais",
    title: "Synonyme courant",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "vocabulaire",
    subskill: "synonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le synonyme de 'rapide' est :",
    options: [
      { id: "a", text: "vite", isCorrect: true },
      { id: "b", text: "lentement", isCorrect: false },
      { id: "c", text: "lourd", isCorrect: false }
    ],
    correctAnswer: "vite",
    explanation: "Rapide et vite expriment l\'idée de vitesse.",
    hint: "Cherche un mot proche.",
    tags: ['cm1', 'vocabulaire', 'synonymes', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-103",
    subject: "francais",
    title: "Antonyme courant",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "vocabulaire",
    subskill: "antonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "L'antonyme de 'monter' est :",
    options: [
      { id: "a", text: "descendre", isCorrect: true },
      { id: "b", text: "grimper", isCorrect: false },
      { id: "c", text: "regarder", isCorrect: false }
    ],
    correctAnswer: "descendre",
    explanation: "Descendre est le contraire de monter.",
    hint: "Cherche l\'idée inverse.",
    tags: ['cm1', 'vocabulaire', 'antonymes', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-104",
    subject: "francais",
    title: "Mot intrus",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "mot intrus",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "piano - guitare - violon - armoire",
    options: [
      { id: "a", text: "piano", isCorrect: false },
      { id: "b", text: "guitare", isCorrect: false },
      { id: "c", text: "armoire", isCorrect: true }
    ],
    correctAnswer: "armoire",
    explanation: "Piano, guitare et violon sont des instruments de musique.",
    hint: "Trois mots vont ensemble.",
    tags: ['cm1', 'vocabulaire', 'intrus', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-105",
    subject: "francais",
    title: "Définition simple",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "definition",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Un spectateur, c\'est :",
    options: [
      { id: "a", text: "Une personne qui regarde un spectacle", isCorrect: true },
      { id: "b", text: "Une personne qui cuisine", isCorrect: false },
      { id: "c", text: "Un animal de la ferme", isCorrect: false }
    ],
    correctAnswer: "Une personne qui regarde un spectacle",
    explanation: "Le spectateur regarde un spectacle ou un événement.",
    hint: "Pense au verbe regarder.",
    tags: ['cm1', 'vocabulaire', 'definition', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-106",
    subject: "francais",
    title: "Champ lexical de la mer",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "champ lexical",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Lequel appartient au champ lexical de la mer ?",
    options: [
      { id: "a", text: "vague", isCorrect: true },
      { id: "b", text: "bureau", isCorrect: false },
      { id: "c", text: "craie", isCorrect: false }
    ],
    correctAnswer: "vague",
    explanation: "Une vague appartient au vocabulaire de la mer.",
    hint: "Pense à la plage et à l\'océan.",
    tags: ['cm1', 'vocabulaire', 'champ-lexical', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-107",
    subject: "francais",
    title: "Sens figuré simple",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "sens propre et figure",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Il a une faim de loup', cela veut dire :",
    options: [
      { id: "a", text: "Il a très faim", isCorrect: true },
      { id: "b", text: "Il est un loup", isCorrect: false },
      { id: "c", text: "Il veut adopter un animal", isCorrect: false }
    ],
    correctAnswer: "Il a très faim",
    explanation: "C'est une expression pour dire qu'on a très faim.",
    hint: "Ne prends pas la phrase au pied de la lettre.",
    tags: ['cm1', 'vocabulaire', 'expression', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-108",
    subject: "francais",
    title: "Catégorie de mots",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "vocabulaire",
    subskill: "categories",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Lequel de ces mots est un fruit ?",
    options: [
      { id: "a", text: "abricot", isCorrect: true },
      { id: "b", text: "camion", isCorrect: false },
      { id: "c", text: "tapis", isCorrect: false }
    ],
    correctAnswer: "abricot",
    explanation: "L'abricot est un fruit.",
    hint: "Cherche un aliment qui pousse sur un arbre.",
    tags: ['cm1', 'vocabulaire', 'categories', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-109",
    subject: "francais",
    title: "Famille de mots 2",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "famille de mots",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le mot de la même famille que 'terre' est :",
    options: [
      { id: "a", text: "terrain", isCorrect: true },
      { id: "b", text: "caillou", isCorrect: false },
      { id: "c", text: "nuage", isCorrect: false }
    ],
    correctAnswer: "terrain",
    explanation: "Terre et terrain ont le même radical.",
    hint: "Cherche la partie commune.",
    tags: ['cm1', 'vocabulaire', 'famille-de-mots', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-110",
    subject: "francais",
    title: "Synonyme de content",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "vocabulaire",
    subskill: "synonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le synonyme de 'content' est :",
    options: [
      { id: "a", text: "heureux", isCorrect: true },
      { id: "b", text: "fâché", isCorrect: false },
      { id: "c", text: "lent", isCorrect: false }
    ],
    correctAnswer: "heureux",
    explanation: "Content et heureux ont un sens proche.",
    hint: "Cherche un mot positif.",
    tags: ['cm1', 'vocabulaire', 'synonyme', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-111",
    subject: "francais",
    title: "Antonyme de calme",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "antonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "L'antonyme de 'calme' est :",
    options: [
      { id: "a", text: "agité", isCorrect: true },
      { id: "b", text: "paisible", isCorrect: false },
      { id: "c", text: "sage", isCorrect: false }
    ],
    correctAnswer: "agité",
    explanation: "Agité est le contraire de calme.",
    hint: "Cherche l\'idée opposée.",
    tags: ['cm1', 'vocabulaire', 'antonyme', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-112",
    subject: "francais",
    title: "Mot générique",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "categories",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Pomme, poire, banane : ce sont des...",
    options: [
      { id: "a", text: "fruits", isCorrect: true },
      { id: "b", text: "outils", isCorrect: false },
      { id: "c", text: "meubles", isCorrect: false }
    ],
    correctAnswer: "fruits",
    explanation: "Pomme, poire et banane sont des fruits.",
    hint: "Cherche la grande catégorie.",
    tags: ['cm1', 'vocabulaire', 'categorie', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-113",
    subject: "francais",
    title: "Définition d\'un métier",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "definition",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Un boulanger est une personne qui :",
    options: [
      { id: "a", text: "fabrique et vend du pain", isCorrect: true },
      { id: "b", text: "conduit un train", isCorrect: false },
      { id: "c", text: "répare les voitures", isCorrect: false }
    ],
    correctAnswer: "fabrique et vend du pain",
    explanation: "Le boulanger prépare et vend du pain.",
    hint: "Pense à la boulangerie.",
    tags: ['cm1', 'vocabulaire', 'definition', 'metier', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-114",
    subject: "francais",
    title: "Intrus 2",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "mot intrus",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "lundi - mardi - table - jeudi",
    options: [
      { id: "a", text: "lundi", isCorrect: false },
      { id: "b", text: "table", isCorrect: true },
      { id: "c", text: "jeudi", isCorrect: false }
    ],
    correctAnswer: "table",
    explanation: "Lundi, mardi et jeudi sont des jours.",
    hint: "Trois mots appartiennent au temps.",
    tags: ['cm1', 'vocabulaire', 'intrus', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-115",
    subject: "francais",
    title: "Précision lexicale",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "precision lexicale",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Pour parler d\'un très petit village, quel mot est le plus précis ?",
    options: [
      { id: "a", text: "hameau", isCorrect: true },
      { id: "b", text: "endroit", isCorrect: false },
      { id: "c", text: "truc", isCorrect: false }
    ],
    correctAnswer: "hameau",
    explanation: "Hameau est plus précis qu\'endroit ou truc.",
    hint: "Choisis le mot le plus exact.",
    tags: ['cm1', 'vocabulaire', 'precision', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-vocabulaire-116",
    subject: "francais",
    title: "Champ lexical de l\'école",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "vocabulaire",
    subskill: "champ lexical",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Lequel appartient au champ lexical de l\'école ?",
    options: [
      { id: "a", text: "cahier", isCorrect: true },
      { id: "b", text: "volcan", isCorrect: false },
      { id: "c", text: "voilier", isCorrect: false }
    ],
    correctAnswer: "cahier",
    explanation: "Le cahier est un objet lié à l\'école.",
    hint: "Pense à la classe.",
    tags: ['cm1', 'vocabulaire', 'champ-lexical', 'ecole', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM1 — EXPRESSION ÉCRITE (fr-cm1-expression-101 à 108)
  ===================================================================== */
{
    id: "fr-cm1-expression-101",
    subject: "francais",
    title: "Choisir la phrase correcte",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "phrase correcte",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Laquelle de ces phrases est correcte ?",
    options: [
      { id: "a", text: "Le chat dort sur le canapé.", isCorrect: true },
      { id: "b", text: "le chat dort sur le canapé", isCorrect: false },
      { id: "c", text: "Le chat dort sur le canapé", isCorrect: false }
    ],
    correctAnswer: "Le chat dort sur le canapé.",
    explanation: "La phrase correcte commence par une majuscule et finit par un point.",
    hint: "Vérifie le début et la fin de la phrase.",
    tags: ['cm1', 'expression-ecrite', 'phrase', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-expression-102",
    subject: "francais",
    title: "Ponctuation adaptée",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "ponctuation",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Tu poses une question. Quelle phrase convient ?",
    options: [
      { id: "a", text: "Où vas-tu ?", isCorrect: true },
      { id: "b", text: "Où vas-tu.", isCorrect: false },
      { id: "c", text: "Où vas-tu,", isCorrect: false }
    ],
    correctAnswer: "Où vas-tu ?",
    explanation: "Une question se termine par un point d\'interrogation.",
    hint: "Regarde le type de phrase.",
    tags: ['cm1', 'expression-ecrite', 'ponctuation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-expression-103",
    subject: "francais",
    title: "Ordre des mots",
    schoolClass: "CM1",
    generalLevel: "beginner",
    skill: "expression_ecrite",
    subskill: "ordonner une phrase",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Laquelle est correcte ?",
    options: [
      { id: "a", text: "Dans le jardin jouent les enfants.", isCorrect: false },
      { id: "b", text: "Les enfants jouent dans le jardin.", isCorrect: true },
      { id: "c", text: "Jardin dans jouent le les enfants.", isCorrect: false }
    ],
    correctAnswer: "Les enfants jouent dans le jardin.",
    explanation: "Les mots doivent être placés dans un ordre correct.",
    hint: "Cherche la phrase la plus naturelle.",
    tags: ['cm1', 'expression-ecrite', 'ordre-des-mots', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-expression-104",
    subject: "francais",
    title: "Enrichir une phrase",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "enrichissement de phrase",
    format: "short_answer",
    instructions: "Enrichir une phrase.",
    prompt: "Récris la phrase avec un adjectif.",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La phrase doit rester correcte et inclure un adjectif.",
    hint: "Exemple : Le petit chat dort.",
    tags: ['cm1', 'expression-ecrite', 'adjectif', 'production'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une petite phrase.", extraHint: "Tu peux écrire une phrase courte." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      defi_avance: { challengeExtension: "Ajoute un détail en plus dans ta phrase." }
    })
  },

{
    id: "fr-cm1-expression-105",
    subject: "francais",
    title: "Écrire avec des mots imposés",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "redaction courte",
    format: "short_answer",
    instructions: "Écrire avec des mots imposés.",
    prompt: "Écris une phrase correcte avec les mots : jardin, jouer, enfants.",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La réponse doit contenir les mots demandés dans une phrase correcte.",
    hint: "Exemple : Les enfants jouent dans le jardin.",
    tags: ['cm1', 'expression-ecrite', 'redaction', 'production'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une petite phrase.", extraHint: "Tu peux écrire une phrase courte." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      defi_avance: { challengeExtension: "Ajoute un détail en plus dans ta phrase." }
    })
  },

{
    id: "fr-cm1-expression-106",
    subject: "francais",
    title: "Ajouter un complément",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "phrase enrichie",
    format: "short_answer",
    instructions: "Ajouter un complément.",
    prompt: "Récris la phrase en ajoutant un lieu : 'Le chien court.'",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La phrase doit être enrichie avec un complément de lieu.",
    hint: "Exemple : Le chien court dans le parc.",
    tags: ['cm1', 'expression-ecrite', 'complement', 'production'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une petite phrase.", extraHint: "Tu peux écrire une phrase courte." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      defi_avance: { challengeExtension: "Ajoute un détail en plus dans ta phrase." }
    })
  },

{
    id: "fr-cm1-expression-107",
    subject: "francais",
    title: "Choisir la meilleure formulation",
    schoolClass: "CM1",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "meilleure formulation",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Laquelle de ces phrases est la mieux écrite ?",
    options: [
      { id: "a", text: "Nous allons demain au musée.", isCorrect: false },
      { id: "b", text: "Nous allons au musée demain.", isCorrect: true },
      { id: "c", text: "Allons nous demain musée au.", isCorrect: false }
    ],
    correctAnswer: "Nous allons au musée demain.",
    explanation: "La phrase choisie est claire et bien ordonnée.",
    hint: "Cherche la phrase la plus naturelle.",
    tags: ['cm1', 'expression-ecrite', 'formulation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm1-expression-108",
    subject: "francais",
    title: "Phrase avec connecteur",
    schoolClass: "CM1",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "connecteurs",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Complète logiquement : 'Je mets mon manteau _____ il fait froid.'",
    options: [
      { id: "a", text: "parce que", isCorrect: true },
      { id: "b", text: "mais", isCorrect: false },
      { id: "c", text: "ou", isCorrect: false }
    ],
    correctAnswer: "parce que",
    explanation: "Parce que introduit une cause.",
    hint: "Cherche le mot qui explique la raison.",
    tags: ['cm1', 'expression-ecrite', 'connecteur', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

/* =====================================================================
     CM2 — LECTURE (fr-cm2-lecture-101 à 120)
  ===================================================================== */
{
    id: "fr-cm2-lecture-101",
    subject: "francais",
    title: "Inférence voyage",
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
    hint: "Regarde les indices : valise, billet.",
    tags: ['cm2', 'lecture', 'inference', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-102",
    subject: "francais",
    title: "Comprendre une affiche",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "document court",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Affiche : 'La répétition de chorale aura lieu jeudi à 17 h en salle 3.' Où se déroule la répétition ?",
    options: [
      { id: "a", text: "En salle 3", isCorrect: true },
      { id: "b", text: "Dans la cour", isCorrect: false },
      { id: "c", text: "Au gymnase", isCorrect: false }
    ],
    correctAnswer: "En salle 3",
    explanation: "Le lieu est indiqué dans l\'affiche.",
    hint: "Repère le lieu précis.",
    tags: ['cm2', 'lecture', 'affiche', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-103",
    subject: "francais",
    title: "Cause et conséquence",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "lien logique",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Comme la rivière est sortie de son lit, la route est fermée. Pourquoi la route est-elle fermée ?",
    options: [
      { id: "a", text: "Parce que la rivière est sortie de son lit", isCorrect: true },
      { id: "b", text: "Parce que les voitures sont bleues", isCorrect: false },
      { id: "c", text: "Parce qu\'il fait nuit", isCorrect: false }
    ],
    correctAnswer: "Parce que la rivière est sortie de son lit",
    explanation: "Le mot comme introduit la cause de la fermeture.",
    hint: "Cherche la raison donnée avant la conséquence.",
    tags: ['cm2', 'lecture', 'logique', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-104",
    subject: "francais",
    title: "Inférence métier",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "inférence",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le patient montre son ordonnance, puis la pharmacienne lui remet une boîte de comprimés. Où se trouve-t-il ?",
    options: [
      { id: "a", text: "À la pharmacie", isCorrect: true },
      { id: "b", text: "À la gare", isCorrect: false },
      { id: "c", text: "À la boulangerie", isCorrect: false }
    ],
    correctAnswer: "À la pharmacie",
    explanation: "Une ordonnance et une pharmacienne sont liées à la pharmacie.",
    hint: "Pense au lieu du métier cité.",
    tags: ['cm2', 'lecture', 'lieu', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-105",
    subject: "francais",
    title: "Information explicite",
    schoolClass: "CM2",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "compréhension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Chaque samedi matin, Nina rejoint son équipe au stade pour s\'entraîner. Où va Nina le samedi matin ?",
    options: [
      { id: "a", text: "Au stade", isCorrect: true },
      { id: "b", text: "À la bibliothèque", isCorrect: false },
      { id: "c", text: "Au cinéma", isCorrect: false }
    ],
    correctAnswer: "Au stade",
    explanation: "Le lieu est écrit dans la phrase.",
    hint: "Relis le groupe de lieu.",
    tags: ['cm2', 'lecture', 'lieu', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-106",
    subject: "francais",
    title: "Inférence émotion",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inférence émotion",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Après avoir retrouvé son chat disparu, Léo serre l\'animal contre lui et sourit. Comment se sent-il probablement ?",
    options: [
      { id: "a", text: "Soulagé et heureux", isCorrect: true },
      { id: "b", text: "En colère", isCorrect: false },
      { id: "c", text: "Endormi", isCorrect: false }
    ],
    correctAnswer: "Soulagé et heureux",
    explanation: "Retrouver son chat et sourire montrent un grand soulagement.",
    hint: "Observe la réaction du personnage.",
    tags: ['cm2', 'lecture', 'emotion', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-107",
    subject: "francais",
    title: "Ordre chronologique",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "chronologie",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Maya termine son exposé, l\'imprime, puis le range dans sa pochette. Que fait-elle juste avant de le ranger ?",
    options: [
      { id: "a", text: "Elle l\'imprime", isCorrect: true },
      { id: "b", text: "Elle le déchire", isCorrect: false },
      { id: "c", text: "Elle quitte la classe", isCorrect: false }
    ],
    correctAnswer: "Elle l\'imprime",
    explanation: "Le mot puis indique l'action suivante après l'impression.",
    hint: "Repère l\'action placée juste avant puis.",
    tags: ['cm2', 'lecture', 'chronologie', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-108",
    subject: "francais",
    title: "Comprendre une consigne double",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "consigne",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Consigne : 'Recopie la phrase, souligne le verbe et entoure le sujet.' Que faut-il faire en premier ?",
    options: [
      { id: "a", text: "Recopier la phrase", isCorrect: true },
      { id: "b", text: "Souligner le verbe", isCorrect: false },
      { id: "c", text: "Entourer le sujet", isCorrect: false }
    ],
    correctAnswer: "Recopier la phrase",
    explanation: "La première action citée est recopier la phrase.",
    hint: "Lis les actions dans l\'ordre.",
    tags: ['cm2', 'lecture', 'consigne', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-109",
    subject: "francais",
    title: "Reformulation",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "reformulation",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "'Le scientifique observe les étoiles à l'aide d'un télescope.' Quelle phrase dit presque la même chose ?",
    options: [
      { id: "a", text: "Le scientifique regarde les étoiles avec un télescope", isCorrect: true },
      { id: "b", text: "Le télescope observe le scientifique", isCorrect: false },
      { id: "c", text: "Les étoiles rangent le télescope", isCorrect: false }
    ],
    correctAnswer: "Le scientifique regarde les étoiles avec un télescope",
    explanation: "Observer les étoiles à l'aide d'un télescope signifie les regarder avec cet instrument.",
    hint: "Cherche la phrase de même sens.",
    tags: ['cm2', 'lecture', 'reformulation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-110",
    subject: "francais",
    title: "Inférence météo",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inférence",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le vent plie les arbres et des éclairs illuminent le ciel. Quel temps fait-il probablement ?",
    options: [
      { id: "a", text: "Il y a de l\'orage", isCorrect: true },
      { id: "b", text: "Il neige dans la cuisine", isCorrect: false },
      { id: "c", text: "Il fait très sec dans le désert", isCorrect: false }
    ],
    correctAnswer: "Il y a de l\'orage",
    explanation: "Le vent fort et les éclairs sont des indices d\'orage.",
    hint: "Pense aux signes dans le ciel.",
    tags: ['cm2', 'lecture', 'meteo', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-111",
    subject: "francais",
    title: "Identifier le destinataire",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "message",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Message : 'N'oubliez pas d\'apporter votre autorisation signée lundi.' À qui s\'adresse ce message ?",
    options: [
      { id: "a", text: "Aux élèves ou à leurs familles", isCorrect: true },
      { id: "b", text: "Aux poissons de l\'aquarium", isCorrect: false },
      { id: "c", text: "Aux passants dans la rue", isCorrect: false }
    ],
    correctAnswer: "Aux élèves ou à leurs familles",
    explanation: "Une autorisation signée concerne l\'école et les familles.",
    hint: "Cherche à qui on peut demander une autorisation.",
    tags: ['cm2', 'lecture', 'message', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-112",
    subject: "francais",
    title: "Comprendre un tableau horaire",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "document pratique",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le bus 4 passe à 8 h 05, 8 h 20 et 8 h 35. Si Inès arrive à 8 h 22, quel bus peut-elle prendre ?",
    options: [
      { id: "a", text: "Celui de 8 h 35", isCorrect: true },
      { id: "b", text: "Celui de 8 h 05", isCorrect: false },
      { id: "c", text: "Celui de 8 h 20", isCorrect: false }
    ],
    correctAnswer: "Celui de 8 h 35",
    explanation: "À 8 h 22, les bus de 8 h 05 et 8 h 20 sont déjà passés.",
    hint: "Cherche l\'horaire suivant.",
    tags: ['cm2', 'lecture', 'horaire', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-113",
    subject: "francais",
    title: "Inférence lieu 2",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inférence",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le guide montre une carte, puis le groupe admire des tableaux célèbres. Où se trouvent-ils probablement ?",
    options: [
      { id: "a", text: "Dans un musée", isCorrect: true },
      { id: "b", text: "Dans une station-service", isCorrect: false },
      { id: "c", text: "Dans une salle de sport", isCorrect: false }
    ],
    correctAnswer: "Dans un musée",
    explanation: "Un guide et des tableaux célèbres font penser à un musée.",
    hint: "Observe les indices culturels.",
    tags: ['cm2', 'lecture', 'lieu', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-114",
    subject: "francais",
    title: "Cause d\'une action",
    schoolClass: "CM2",
    generalLevel: "beginner",
    skill: "lecture",
    subskill: "compréhension explicite",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Tom ferme son manteau parce qu\'il a très froid. Pourquoi ferme-t-il son manteau ?",
    options: [
      { id: "a", text: "Parce qu\'il a très froid", isCorrect: true },
      { id: "b", text: "Parce qu\'il veut courir", isCorrect: false },
      { id: "c", text: "Parce qu\'il cherche son stylo", isCorrect: false }
    ],
    correctAnswer: "Parce qu\'il a très froid",
    explanation: "La raison est donnée clairement.",
    hint: "Relis la fin de la phrase.",
    tags: ['cm2', 'lecture', 'cause', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-115",
    subject: "francais",
    title: "Inférence scolaire",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inférence",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le professeur distribue les feuilles, demande le silence et lance le chronomètre. Que vont faire les élèves ?",
    options: [
      { id: "a", text: "Une évaluation ou un exercice chronométré", isCorrect: true },
      { id: "b", text: "Un pique-nique", isCorrect: false },
      { id: "c", text: "Une récréation dans la cour", isCorrect: false }
    ],
    correctAnswer: "Une évaluation ou un exercice chronométré",
    explanation: "Des feuilles, le silence et un chronomètre annoncent un travail scolaire.",
    hint: "Repère les indices de classe.",
    tags: ['cm2', 'lecture', 'ecole', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-116",
    subject: "francais",
    title: "Repérer l\'idée principale",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "idée principale",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Le texte explique comment économiser l\'eau à la maison : fermer le robinet, prendre une douche courte et réparer les fuites. Quel est le sujet principal ?",
    options: [
      { id: "a", text: "Économiser l\'eau à la maison", isCorrect: true },
      { id: "b", text: "Fabriquer un robinet", isCorrect: false },
      { id: "c", text: "Peindre la salle de bain", isCorrect: false }
    ],
    correctAnswer: "Économiser l\'eau à la maison",
    explanation: "Toutes les actions citées servent à économiser l\'eau.",
    hint: "Cherche ce que tous les exemples ont en commun.",
    tags: ['cm2', 'lecture', 'idee-principale', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-117",
    subject: "francais",
    title: "Identifier un point de vue",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "compréhension fine",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "'À mon avis, ce roman est passionnant car l\'histoire avance vite.' Que pense la personne qui parle ?",
    options: [
      { id: "a", text: "Elle aime beaucoup le roman", isCorrect: true },
      { id: "b", text: "Elle n\'a pas lu le roman", isCorrect: false },
      { id: "c", text: "Elle trouve le roman trop court", isCorrect: false }
    ],
    correctAnswer: "Elle aime beaucoup le roman",
    explanation: "Les mots passionnant et l\'histoire avance vite montrent un avis positif.",
    hint: "Cherche l\'opinion exprimée.",
    tags: ['cm2', 'lecture', 'avis', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-118",
    subject: "francais",
    title: "Comprendre une règle",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "règle",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Règle : 'Les téléphones doivent rester éteints pendant la visite.' Que faut-il faire avec son téléphone ?",
    options: [
      { id: "a", text: "Le laisser éteint", isCorrect: true },
      { id: "b", text: "Le mettre sur haut-parleur", isCorrect: false },
      { id: "c", text: "Le prêter au guide", isCorrect: false }
    ],
    correctAnswer: "Le laisser éteint",
    explanation: "La règle précise clairement que le téléphone doit rester éteint.",
    hint: "Cherche ce qui est demandé.",
    tags: ['cm2', 'lecture', 'regle', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-119",
    subject: "francais",
    title: "Inférence temps",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "lecture",
    subskill: "inférence temps",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Après le dessert, la famille empile les assiettes et commence à débarrasser la table. À quel moment de la journée sommes-nous probablement ?",
    options: [
      { id: "a", text: "À la fin d\'un repas", isCorrect: true },
      { id: "b", text: "Au début d\'une course", isCorrect: false },
      { id: "c", text: "Pendant un contrôle", isCorrect: false }
    ],
    correctAnswer: "À la fin d\'un repas",
    explanation: "Dessert et table à débarrasser indiquent la fin d\'un repas.",
    hint: "Observe la scène décrite.",
    tags: ['cm2', 'lecture', 'temps', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-lecture-120",
    subject: "francais",
    title: "Comprendre un pronom référent",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "lecture",
    subskill: "compréhension fine",
    format: "qcm",
    instructions: "Lis puis réponds.",
    prompt: "Lina a terminé son dessin avant Zoé, puis elle a rangé ses feutres. Qui a rangé ses feutres ?",
    options: [
      { id: "a", text: "Lina", isCorrect: true },
      { id: "b", text: "Zoé", isCorrect: false },
      { id: "c", text: "Le maître", isCorrect: false }
    ],
    correctAnswer: "Lina",
    explanation: "Le pronom elle renvoie au sujet principal le plus logique ici : Lina.",
    hint: "Cherche de qui on continue à parler.",
    tags: ['cm2', 'lecture', 'pronom', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM2 — ORTHOGRAPHE (fr-cm2-orthographe-101 à 118)
  ===================================================================== */
{
    id: "fr-cm2-orthographe-101",
    subject: "francais",
    title: "Accord sujet-verbe complexe",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "accord sujet verbe",
    format: "qcm",
    instructions: "Choisis la bonne forme.",
    prompt: "Les enfants du centre de loisirs _____ au parc.",
    options: [
      { id: "a", text: "va", isCorrect: false },
      { id: "b", text: "vont", isCorrect: true },
      { id: "c", text: "vas", isCorrect: false }
    ],
    correctAnswer: "vont",
    explanation: "Le sujet principal est les enfants, donc le verbe est au pluriel.",
    hint: "Cherche le vrai sujet.",
    tags: ['cm2', 'orthographe', 'accord', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-102",
    subject: "francais",
    title: "ce ou se",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Il _____ lève très tôt chaque matin.",
    options: [
      { id: "a", text: "ce", isCorrect: false },
      { id: "b", text: "se", isCorrect: true }
    ],
    correctAnswer: "se",
    explanation: "Le verbe se lever est pronominal, on écrit se.",
    hint: "Pense au verbe se lever.",
    tags: ['cm2', 'orthographe', 'ce-se', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-103",
    subject: "francais",
    title: "où ou ou",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Je me demande _____ ils iront demain.",
    options: [
      { id: "a", text: "où", isCorrect: true },
      { id: "b", text: "ou", isCorrect: false }
    ],
    correctAnswer: "où",
    explanation: "On écrit où quand on parle d\'un lieu.",
    hint: "La question porte sur un endroit.",
    tags: ['cm2', 'orthographe', 'ou-ou-accent', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-104",
    subject: "francais",
    title: "leur ou leurs",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "déterminants possessifs",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Les chanteurs accordent _____ instruments.",
    options: [
      { id: "a", text: "leur", isCorrect: false },
      { id: "b", text: "leurs", isCorrect: true }
    ],
    correctAnswer: "leurs",
    explanation: "Le nom instruments est au pluriel, on écrit leurs.",
    hint: "Y a-t-il un ou plusieurs instruments ?",
    tags: ['cm2', 'orthographe', 'leur-leurs', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-105",
    subject: "francais",
    title: "c'est ou s'est",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "_____ une découverte incroyable.",
    options: [
      { id: "a", text: "C'est", isCorrect: true },
      { id: "b", text: "S'est", isCorrect: false }
    ],
    correctAnswer: "C'est",
    explanation: "On peut remplacer par cela est.",
    hint: "Teste avec cela est.",
    tags: ['cm2', 'orthographe', 'cest-sest', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-106",
    subject: "francais",
    title: "a ou à",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Léa _____ appris sa poésie.",
    options: [
      { id: "a", text: "a", isCorrect: true },
      { id: "b", text: "à", isCorrect: false }
    ],
    correctAnswer: "a",
    explanation: "Ici, a est le verbe avoir.",
    hint: "Peut-on dire avait appris ?",
    tags: ['cm2', 'orthographe', 'a-a-grave', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-107",
    subject: "francais",
    title: "et ou est",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Le musée _____ fermé le lundi.",
    options: [
      { id: "a", text: "et", isCorrect: false },
      { id: "b", text: "est", isCorrect: true }
    ],
    correctAnswer: "est",
    explanation: "On écrit est avec le verbe être.",
    hint: "Peut-on dire était ?",
    tags: ['cm2', 'orthographe', 'et-est', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-108",
    subject: "francais",
    title: "Pluriel en -al",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "pluriel des noms",
    format: "qcm",
    instructions: "Choisis la forme correcte.",
    prompt: "Plusieurs cheval :",
    options: [
      { id: "a", text: "des chevals", isCorrect: false },
      { id: "b", text: "des chevaux", isCorrect: true },
      { id: "c", text: "des cheval", isCorrect: false }
    ],
    correctAnswer: "des chevaux",
    explanation: "Le pluriel de cheval est chevaux.",
    hint: "Regarde la transformation du mot.",
    tags: ['cm2', 'orthographe', 'pluriel', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-109",
    subject: "francais",
    title: "Pluriel en -ou particulier",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "pluriel des noms",
    format: "qcm",
    instructions: "Choisis la forme correcte.",
    prompt: "Plusieurs bijou :",
    options: [
      { id: "a", text: "des bijoux", isCorrect: true },
      { id: "b", text: "des bijous", isCorrect: false },
      { id: "c", text: "des bijou", isCorrect: false }
    ],
    correctAnswer: "des bijoux",
    explanation: "Bijou fait partie des mots en -ou qui prennent x au pluriel.",
    hint: "C'est un pluriel particulier.",
    tags: ['cm2', 'orthographe', 'pluriel', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-110",
    subject: "francais",
    title: "Accord de l\'adjectif",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "accord adjectif",
    format: "qcm",
    instructions: "Choisis le groupe bien écrit.",
    prompt: "Lequel est correct ?",
    options: [
      { id: "a", text: "des maisons anciennes", isCorrect: true },
      { id: "b", text: "des maison anciennes", isCorrect: false },
      { id: "c", text: "des maisons ancien", isCorrect: false }
    ],
    correctAnswer: "des maisons anciennes",
    explanation: "Le nom et l'adjectif s'accordent au pluriel féminin.",
    hint: "Regarde le nom maisons.",
    tags: ['cm2', 'orthographe', 'accord-adjectif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-111",
    subject: "francais",
    title: "Majuscule nom propre",
    schoolClass: "CM2",
    generalLevel: "beginner",
    skill: "orthographe",
    subskill: "majuscule",
    format: "qcm",
    instructions: "Choisis la bonne écriture.",
    prompt: "Lequel est bien écrit ?",
    options: [
      { id: "a", text: "la Seine", isCorrect: true },
      { id: "b", text: "la seine", isCorrect: false },
      { id: "c", text: "La seine", isCorrect: false }
    ],
    correctAnswer: "la Seine",
    explanation: "Le nom propre Seine prend une majuscule.",
    hint: "Cherche le nom du fleuve.",
    tags: ['cm2', 'orthographe', 'majuscule', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-112",
    subject: "francais",
    title: "Ponctuation du dialogue",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "ponctuation",
    format: "qcm",
    instructions: "Choisis la meilleure écriture.",
    prompt: "Laquelle convient pour une question ?",
    options: [
      { id: "a", text: "Où vas-tu ?", isCorrect: true },
      { id: "b", text: "Où vas-tu.", isCorrect: false },
      { id: "c", text: "où vas-tu ?", isCorrect: false }
    ],
    correctAnswer: "Où vas-tu ?",
    explanation: "Une question commence par une majuscule et finit par un point d\'interrogation.",
    hint: "Vérifie le début et la fin.",
    tags: ['cm2', 'orthographe', 'ponctuation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-113",
    subject: "francais",
    title: "on ou ont",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Ils _____ terminé leur maquette.",
    options: [
      { id: "a", text: "on", isCorrect: false },
      { id: "b", text: "ont", isCorrect: true }
    ],
    correctAnswer: "ont",
    explanation: "Avec ils, on utilise le verbe avoir : ont.",
    hint: "Peut-on dire avaient terminé ?",
    tags: ['cm2', 'orthographe', 'on-ont', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-114",
    subject: "francais",
    title: "son ou sont",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Les magasins _____ fermés.",
    options: [
      { id: "a", text: "son", isCorrect: false },
      { id: "b", text: "sont", isCorrect: true }
    ],
    correctAnswer: "sont",
    explanation: "Avec les magasins, on utilise le verbe être au pluriel.",
    hint: "Peut-on dire étaient fermés ?",
    tags: ['cm2', 'orthographe', 'son-sont', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-115",
    subject: "francais",
    title: "mes ou mais",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "Je voulais venir, _____ le train était annulé.",
    options: [
      { id: "a", text: "mes", isCorrect: false },
      { id: "b", text: "mais", isCorrect: true }
    ],
    correctAnswer: "mais",
    explanation: "Mais marque l\'opposition.",
    hint: "Peut-on dire cependant ?",
    tags: ['cm2', 'orthographe', 'mes-mais', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-116",
    subject: "francais",
    title: "quel ou quelle",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "accord déterminant interrogatif",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "_____ solution proposes-tu ?",
    options: [
      { id: "a", text: "Quel", isCorrect: false },
      { id: "b", text: "Quelle", isCorrect: true }
    ],
    correctAnswer: "Quelle",
    explanation: "Solution est féminin, donc on écrit quelle.",
    hint: "Regarde le genre du nom.",
    tags: ['cm2', 'orthographe', 'accord', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-117",
    subject: "francais",
    title: "ces ou ses",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "orthographe",
    subskill: "homophones grammaticaux",
    format: "qcm",
    instructions: "Choisis le bon mot.",
    prompt: "_____ décisions ont surpris tout le monde.",
    options: [
      { id: "a", text: "Ces", isCorrect: true },
      { id: "b", text: "Ses", isCorrect: false }
    ],
    correctAnswer: "Ces",
    explanation: "Ces sert à montrer ou désigner plusieurs choses.",
    hint: "Peut-on dire ces décisions-là ?",
    tags: ['cm2', 'orthographe', 'ces-ses', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-orthographe-118",
    subject: "francais",
    title: "Accord du participe passé simple usage",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "orthographe",
    subskill: "accord simple",
    format: "qcm",
    instructions: "Choisis le groupe correct.",
    prompt: "Lequel est bien écrit ?",
    options: [
      { id: "a", text: "Elles sont arrivées", isCorrect: true },
      { id: "b", text: "Elles sont arrivé", isCorrect: false },
      { id: "c", text: "Elles est arrivées", isCorrect: false }
    ],
    correctAnswer: "Elles sont arrivées",
    explanation: "Avec elles, on écrit sont arrivées.",
    hint: "Observe le sujet féminin pluriel.",
    tags: ['cm2', 'orthographe', 'accord', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM2 — GRAMMAIRE (fr-cm2-grammaire-101 à 118)
  ===================================================================== */
{
    id: "fr-cm2-grammaire-101",
    subject: "francais",
    title: "Complément du nom",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "groupes nominaux",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le sac de sport est lourd. Quel groupe complète le nom sac ?",
    options: [
      { id: "a", text: "de sport", isCorrect: true },
      { id: "b", text: "Le sac", isCorrect: false },
      { id: "c", text: "est lourd", isCorrect: false }
    ],
    correctAnswer: "de sport",
    explanation: "De sport complète le nom sac.",
    hint: "Cherche le groupe qui précise le nom.",
    tags: ['cm2', 'grammaire', 'complement-du-nom', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-102",
    subject: "francais",
    title: "Pronom personnel",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "pronoms",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Ils arrivent bientôt. Quel mot est un pronom personnel ?",
    options: [
      { id: "a", text: "Ils", isCorrect: true },
      { id: "b", text: "arrivent", isCorrect: false },
      { id: "c", text: "bientôt", isCorrect: false }
    ],
    correctAnswer: "Ils",
    explanation: "Ils remplace des personnes : c\'est un pronom personnel.",
    hint: "Cherche le petit mot sujet.",
    tags: ['cm2', 'grammaire', 'pronom', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-103",
    subject: "francais",
    title: "Adjectif épithète",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "adjectif qualificatif",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'une longue route poussiéreuse', quel mot est un adjectif ?",
    options: [
      { id: "a", text: "longue", isCorrect: true },
      { id: "b", text: "route", isCorrect: false },
      { id: "c", text: "une", isCorrect: false }
    ],
    correctAnswer: "longue",
    explanation: "Longue décrit le nom route.",
    hint: "Cherche le mot qui donne une précision.",
    tags: ['cm2', 'grammaire', 'adjectif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-104",
    subject: "francais",
    title: "Nature d\'un mot",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "nature des mots",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Nous avançons lentement', quelle est la nature du mot lentement ?",
    options: [
      { id: "a", text: "Un adverbe", isCorrect: true },
      { id: "b", text: "Un verbe", isCorrect: false },
      { id: "c", text: "Un nom", isCorrect: false }
    ],
    correctAnswer: "Un adverbe",
    explanation: "Lentement précise la manière d\'avancer.",
    hint: "Il précise comment on avance.",
    tags: ['cm2', 'grammaire', 'adverbe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-105",
    subject: "francais",
    title: "Sujet inversé simple",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "identifier le sujet",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Au loin brillent les étoiles', quel est le sujet ?",
    options: [
      { id: "a", text: "Au loin", isCorrect: false },
      { id: "b", text: "brillent", isCorrect: false },
      { id: "c", text: "les étoiles", isCorrect: true }
    ],
    correctAnswer: "les étoiles",
    explanation: "Ce sont les étoiles qui brillent.",
    hint: "Qui brille ?",
    tags: ['cm2', 'grammaire', 'sujet', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-106",
    subject: "francais",
    title: "Verbe conjugué et infinitif",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "verbe",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Nous allons visiter le château', quel verbe est à l\'infinitif ?",
    options: [
      { id: "a", text: "allons", isCorrect: false },
      { id: "b", text: "visiter", isCorrect: true },
      { id: "c", text: "nous", isCorrect: false }
    ],
    correctAnswer: "visiter",
    explanation: "Visiter est la forme non conjuguée du verbe.",
    hint: "Cherche la forme du dictionnaire.",
    tags: ['cm2', 'grammaire', 'infinitif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-107",
    subject: "francais",
    title: "Groupe nominal enrichi",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "groupe nominal",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Quel est le groupe nominal complet ?",
    options: [
      { id: "a", text: "les vieux livres poussiéreux", isCorrect: true },
      { id: "b", text: "vieux livres", isCorrect: false },
      { id: "c", text: "poussiéreux", isCorrect: false }
    ],
    correctAnswer: "les vieux livres poussiéreux",
    explanation: "Le groupe nominal complet contient le déterminant, le nom et les adjectifs.",
    hint: "Prends tout le groupe.",
    tags: ['cm2', 'grammaire', 'groupe-nominal', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-108",
    subject: "francais",
    title: "Déterminant possessif",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "déterminants",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'nos voisins arrivent', quel mot indique l\'appartenance ?",
    options: [
      { id: "a", text: "nos", isCorrect: true },
      { id: "b", text: "voisins", isCorrect: false },
      { id: "c", text: "arrivent", isCorrect: false }
    ],
    correctAnswer: "nos",
    explanation: "Nos est un déterminant possessif.",
    hint: "Il montre à qui appartiennent les voisins.",
    tags: ['cm2', 'grammaire', 'determinant', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-109",
    subject: "francais",
    title: "Nom commun et nom propre",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "nature des noms",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Paris accueille des touristes', quel mot est un nom propre ?",
    options: [
      { id: "a", text: "Paris", isCorrect: true },
      { id: "b", text: "accueille", isCorrect: false },
      { id: "c", text: "touristes", isCorrect: false }
    ],
    correctAnswer: "Paris",
    explanation: "Paris est le nom d\'une ville.",
    hint: "Cherche le mot avec majuscule.",
    tags: ['cm2', 'grammaire', 'nom-propre', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-110",
    subject: "francais",
    title: "Complément essentiel simple",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "verbe et compléments",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Le cuisinier prépare un repas', quel groupe complète le verbe prépare ?",
    options: [
      { id: "a", text: "un repas", isCorrect: true },
      { id: "b", text: "Le cuisinier", isCorrect: false },
      { id: "c", text: "prépare", isCorrect: false }
    ],
    correctAnswer: "un repas",
    explanation: "Un repas complète le verbe prépare.",
    hint: "Cherche ce qui est préparé.",
    tags: ['cm2', 'grammaire', 'complement', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-111",
    subject: "francais",
    title: "Fonction du pronom",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "pronoms",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Elle les observe', le mot les remplace :",
    options: [
      { id: "a", text: "des personnes ou des choses déjà mentionnées", isCorrect: true },
      { id: "b", text: "le verbe observe", isCorrect: false },
      { id: "c", text: "un lieu précis", isCorrect: false }
    ],
    correctAnswer: "des personnes ou des choses déjà mentionnées",
    explanation: "Le pronom les remplace un groupe déjà connu.",
    hint: "Pense au mot qu\'on évite de répéter.",
    tags: ['cm2', 'grammaire', 'pronom', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-112",
    subject: "francais",
    title: "Phrase simple ou complexe",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "types de phrase",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "'Je prends mon manteau parce qu\'il pleut' contient :",
    options: [
      { id: "a", text: "Deux verbes conjugués", isCorrect: true },
      { id: "b", text: "Un seul verbe conjugué", isCorrect: false },
      { id: "c", text: "Aucun verbe", isCorrect: false }
    ],
    correctAnswer: "Deux verbes conjugués",
    explanation: "Prends et pleut sont deux verbes conjugués.",
    hint: "Compte les verbes conjugués.",
    tags: ['cm2', 'grammaire', 'phrase-complexe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-113",
    subject: "francais",
    title: "Adverbe dans la phrase",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "adverbe",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le train arrive bientôt. Quel mot précise le temps de l\'action ?",
    options: [
      { id: "a", text: "Le train", isCorrect: false },
      { id: "b", text: "arrive", isCorrect: false },
      { id: "c", text: "bientôt", isCorrect: true }
    ],
    correctAnswer: "bientôt",
    explanation: "Bientôt précise quand le train arrive.",
    hint: "Cherche le mot qui ajoute une précision.",
    tags: ['cm2', 'grammaire', 'adverbe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-114",
    subject: "francais",
    title: "Déterminant démonstratif",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "déterminants",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'ces montagnes sont magnifiques', quel mot montre les montagnes ?",
    options: [
      { id: "a", text: "ces", isCorrect: true },
      { id: "b", text: "montagnes", isCorrect: false },
      { id: "c", text: "magnifiques", isCorrect: false }
    ],
    correctAnswer: "ces",
    explanation: "Ces sert à montrer ou désigner.",
    hint: "C'est le petit mot devant le nom.",
    tags: ['cm2', 'grammaire', 'determinant', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-115",
    subject: "francais",
    title: "Repérer le verbe principal",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "identifier le verbe",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Les oiseaux migrent vers le sud. Quel est le verbe ?",
    options: [
      { id: "a", text: "oiseaux", isCorrect: false },
      { id: "b", text: "migrent", isCorrect: true },
      { id: "c", text: "sud", isCorrect: false }
    ],
    correctAnswer: "migrent",
    explanation: "Migrent exprime l\'action.",
    hint: "Cherche ce qui se passe.",
    tags: ['cm2', 'grammaire', 'verbe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-116",
    subject: "francais",
    title: "Sujet sous forme de GN",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "grammaire",
    subskill: "identifier le sujet",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Les plus jeunes élèves découvrent la bibliothèque. Quel est le sujet ?",
    options: [
      { id: "a", text: "Les plus jeunes élèves", isCorrect: true },
      { id: "b", text: "découvrent", isCorrect: false },
      { id: "c", text: "la bibliothèque", isCorrect: false }
    ],
    correctAnswer: "Les plus jeunes élèves",
    explanation: "Ce groupe fait l\'action de découvrir.",
    hint: "Qui découvre ?",
    tags: ['cm2', 'grammaire', 'sujet', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-117",
    subject: "francais",
    title: "Nature du mot lien",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "conjonctions",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Paul lit et Zoé écrit', le mot et sert à :",
    options: [
      { id: "a", text: "relier deux éléments", isCorrect: true },
      { id: "b", text: "indiquer un lieu", isCorrect: false },
      { id: "c", text: "remplacer un nom", isCorrect: false }
    ],
    correctAnswer: "relier deux éléments",
    explanation: "Et relie deux actions ou deux groupes.",
    hint: "Observe son rôle entre les deux groupes.",
    tags: ['cm2', 'grammaire', 'conjonction', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-grammaire-118",
    subject: "francais",
    title: "Identifier une proposition",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "grammaire",
    subskill: "phrase complexe",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Quand la pluie cesse, nous sortons', combien y a-t-il de verbes conjugués ?",
    options: [
      { id: "a", text: "Deux", isCorrect: true },
      { id: "b", text: "Un", isCorrect: false },
      { id: "c", text: "Trois", isCorrect: false }
    ],
    correctAnswer: "Deux",
    explanation: "Cesse et sortons sont deux verbes conjugués.",
    hint: "Compte les verbes.",
    tags: ['cm2', 'grammaire', 'phrase-complexe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM2 — CONJUGAISON (fr-cm2-conjugaison-101 à 116)
  ===================================================================== */
{
    id: "fr-cm2-conjugaison-101",
    subject: "francais",
    title: "Futur simple",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "futur simple",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Demain, ils _____ au musée. (aller)",
    options: [
      { id: "a", text: "iront", isCorrect: true },
      { id: "b", text: "vont", isCorrect: false },
      { id: "c", text: "allaient", isCorrect: false }
    ],
    correctAnswer: "iront",
    explanation: "Avec ils, le futur simple du verbe aller est iront.",
    hint: "Pense à j\'irai, tu iras, il ira.",
    tags: ['cm2', 'conjugaison', 'futur', 'aller', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-102",
    subject: "francais",
    title: "Passé composé",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "passé composé",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Hier, nous _____ un gâteau. (manger)",
    options: [
      { id: "a", text: "avons mangé", isCorrect: true },
      { id: "b", text: "mangeons", isCorrect: false },
      { id: "c", text: "mangerons", isCorrect: false }
    ],
    correctAnswer: "avons mangé",
    explanation: "Au passé composé avec nous, on écrit avons mangé.",
    hint: "Cherche d'abord l'auxiliaire.",
    tags: ['cm2', 'conjugaison', 'passe-compose', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-103",
    subject: "francais",
    title: "Imparfait",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "imparfait",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Quand j\'étais petit, je _____ souvent dehors. (jouer)",
    options: [
      { id: "a", text: "jouais", isCorrect: true },
      { id: "b", text: "joue", isCorrect: false },
      { id: "c", text: "jouerai", isCorrect: false }
    ],
    correctAnswer: "jouais",
    explanation: "À l\'imparfait avec je, on écrit jouais.",
    hint: "C'est un souvenir du passé.",
    tags: ['cm2', 'conjugaison', 'imparfait', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-104",
    subject: "francais",
    title: "Présent de venir",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "présent",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Ils _____ ce soir. (venir)",
    options: [
      { id: "a", text: "viennent", isCorrect: true },
      { id: "b", text: "venons", isCorrect: false },
      { id: "c", text: "venait", isCorrect: false }
    ],
    correctAnswer: "viennent",
    explanation: "Au présent avec ils, venir se conjugue viennent.",
    hint: "Pense à ils viennent.",
    tags: ['cm2', 'conjugaison', 'venir', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-105",
    subject: "francais",
    title: "Futur de être",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "futur simple",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Plus tard, tu _____ médecin. (être)",
    options: [
      { id: "a", text: "seras", isCorrect: true },
      { id: "b", text: "étais", isCorrect: false },
      { id: "c", text: "es", isCorrect: false }
    ],
    correctAnswer: "seras",
    explanation: "Au futur simple avec tu, être se conjugue seras.",
    hint: "Le mot plus tard indique le futur.",
    tags: ['cm2', 'conjugaison', 'etre', 'futur', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-106",
    subject: "francais",
    title: "Passé composé avec être simple",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "passé composé",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Elles _____ en avance. (arriver)",
    options: [
      { id: "a", text: "sont arrivées", isCorrect: true },
      { id: "b", text: "arrivent", isCorrect: false },
      { id: "c", text: "étaient arrivées", isCorrect: false }
    ],
    correctAnswer: "sont arrivées",
    explanation: "Avec le verbe arriver, on peut utiliser être au passé composé.",
    hint: "Observe le sujet féminin pluriel.",
    tags: ['cm2', 'conjugaison', 'passe-compose', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-107",
    subject: "francais",
    title: "Repérer le temps",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "repérer le temps",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Nous finissions notre lecture', le verbe est à :",
    options: [
      { id: "a", text: "L'imparfait", isCorrect: true },
      { id: "b", text: "Le présent", isCorrect: false },
      { id: "c", text: "Le futur simple", isCorrect: false }
    ],
    correctAnswer: "L'imparfait",
    explanation: "Finissions est une forme de l\'imparfait.",
    hint: "Regarde la terminaison.",
    tags: ['cm2', 'conjugaison', 'temps', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-108",
    subject: "francais",
    title: "Infinitif du verbe",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "conjugaison",
    subskill: "infinitif",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "L'infinitif de 'prendrons' est :",
    options: [
      { id: "a", text: "prendre", isCorrect: true },
      { id: "b", text: "prendrons", isCorrect: false },
      { id: "c", text: "pris", isCorrect: false }
    ],
    correctAnswer: "prendre",
    explanation: "L'infinitif est la forme non conjuguée du verbe.",
    hint: "Cherche la forme du dictionnaire.",
    tags: ['cm2', 'conjugaison', 'infinitif', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-109",
    subject: "francais",
    title: "Présent du verbe pouvoir",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "présent",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Vous _____ entrer maintenant. (pouvoir)",
    options: [
      { id: "a", text: "pouvez", isCorrect: true },
      { id: "b", text: "peuvent", isCorrect: false },
      { id: "c", text: "pouviez", isCorrect: false }
    ],
    correctAnswer: "pouvez",
    explanation: "Au présent avec vous, pouvoir se conjugue pouvez.",
    hint: "Pense à vous pouvez.",
    tags: ['cm2', 'conjugaison', 'pouvoir', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-110",
    subject: "francais",
    title: "Imparfait du verbe avoir",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "imparfait",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Quand nous étions petits, nous _____ peur du noir. (avoir)",
    options: [
      { id: "a", text: "avions", isCorrect: true },
      { id: "b", text: "avons", isCorrect: false },
      { id: "c", text: "aurons", isCorrect: false }
    ],
    correctAnswer: "avions",
    explanation: "À l\'imparfait avec nous, avoir se conjugue avions.",
    hint: "Cherche le temps du souvenir.",
    tags: ['cm2', 'conjugaison', 'avoir', 'imparfait', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-111",
    subject: "francais",
    title: "Passé composé du verbe faire",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "passé composé",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Ce matin, j'_____ mes devoirs. (faire)",
    options: [
      { id: "a", text: "ai fait", isCorrect: true },
      { id: "b", text: "fais", isCorrect: false },
      { id: "c", text: "ferai", isCorrect: false }
    ],
    correctAnswer: "ai fait",
    explanation: "Au passé composé avec je, faire donne ai fait.",
    hint: "Trouve l\'auxiliaire correct.",
    tags: ['cm2', 'conjugaison', 'faire', 'passe-compose', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-112",
    subject: "francais",
    title: "Futur des verbes en -er",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "futur simple",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Nous _____ plus tard. (chanter)",
    options: [
      { id: "a", text: "chanterons", isCorrect: true },
      { id: "b", text: "chantions", isCorrect: false },
      { id: "c", text: "chantons", isCorrect: false }
    ],
    correctAnswer: "chanterons",
    explanation: "Au futur simple avec nous, on écrit chanterons.",
    hint: "Le mot plus tard t\'aide.",
    tags: ['cm2', 'conjugaison', 'futur', '1er-groupe', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-113",
    subject: "francais",
    title: "Présent du verbe devoir",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "présent",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Tu _____ finir ton travail. (devoir)",
    options: [
      { id: "a", text: "dois", isCorrect: true },
      { id: "b", text: "doit", isCorrect: false },
      { id: "c", text: "devait", isCorrect: false }
    ],
    correctAnswer: "dois",
    explanation: "Au présent avec tu, devoir se conjugue dois.",
    hint: "Pense à tu dois.",
    tags: ['cm2', 'conjugaison', 'devoir', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-114",
    subject: "francais",
    title: "Imparfait du verbe être",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "imparfait",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Vous _____ déjà prêts. (être)",
    options: [
      { id: "a", text: "étiez", isCorrect: true },
      { id: "b", text: "êtes", isCorrect: false },
      { id: "c", text: "serez", isCorrect: false }
    ],
    correctAnswer: "étiez",
    explanation: "À l\'imparfait avec vous, être se conjugue étiez.",
    hint: "Cherche la forme du passé.",
    tags: ['cm2', 'conjugaison', 'etre', 'imparfait', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-115",
    subject: "francais",
    title: "Passé composé avec nous",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "passé composé",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Nous _____ la route très tôt. (prendre)",
    options: [
      { id: "a", text: "avons pris", isCorrect: true },
      { id: "b", text: "prenons", isCorrect: false },
      { id: "c", text: "prendrons", isCorrect: false }
    ],
    correctAnswer: "avons pris",
    explanation: "Au passé composé avec nous, prendre donne avons pris.",
    hint: "Auxiliaire avoir + participe passé.",
    tags: ['cm2', 'conjugaison', 'prendre', 'passe-compose', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-116",
    subject: "francais",
    title: "Repérer le futur",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "conjugaison",
    subskill: "repérer le temps",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Ils construiront une cabane', le verbe est au :",
    options: [
      { id: "a", text: "Futur simple", isCorrect: true },
      { id: "b", text: "Présent", isCorrect: false },
      { id: "c", text: "Passé composé", isCorrect: false }
    ],
    correctAnswer: "Futur simple",
    explanation: "Construiront exprime une action à venir.",
    hint: "Cherche le temps du plus tard.",
    tags: ['cm2', 'conjugaison', 'temps', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-117",
    subject: "francais",
    title: "Présent du verbe voir",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "présent",
    format: "qcm",
    instructions: "Choisis la bonne forme du verbe.",
    prompt: "Nous _____ mieux d\'ici. (voir)",
    options: [
      { id: "a", text: "voyons", isCorrect: true },
      { id: "b", text: "voit", isCorrect: false },
      { id: "c", text: "voyaient", isCorrect: false }
    ],
    correctAnswer: "voyons",
    explanation: "Au présent avec nous, voir se conjugue voyons.",
    hint: "Pense à nous voyons.",
    tags: ['cm2', 'conjugaison', 'voir', 'present', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-conjugaison-118",
    subject: "francais",
    title: "Plus-que-parfait non, repérage prudent",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "conjugaison",
    subskill: "repérer le temps",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Elles ont terminé', le verbe est au :",
    options: [
      { id: "a", text: "Passé composé", isCorrect: true },
      { id: "b", text: "Imparfait", isCorrect: false },
      { id: "c", text: "Futur simple", isCorrect: false }
    ],
    correctAnswer: "Passé composé",
    explanation: "Ont terminé est une forme du passé composé.",
    hint: "Observe l\'auxiliaire + participe passé.",
    tags: ['cm2', 'conjugaison', 'temps', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },



  /* =====================================================================
     CM2 — VOCABULAIRE (fr-cm2-vocabulaire-101 à 116)
  ===================================================================== */
{
    id: "fr-cm2-vocabulaire-101",
    subject: "francais",
    title: "Antonyme",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "antonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "L'antonyme de commencer est :",
    options: [
      { id: "a", text: "terminer", isCorrect: true },
      { id: "b", text: "parler", isCorrect: false },
      { id: "c", text: "écouter", isCorrect: false }
    ],
    correctAnswer: "terminer",
    explanation: "Terminer est le contraire de commencer.",
    hint: "Cherche le contraire.",
    tags: ['cm2', 'vocabulaire', 'antonymes', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-102",
    subject: "francais",
    title: "Synonyme précis",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "synonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le synonyme de courageux est :",
    options: [
      { id: "a", text: "brave", isCorrect: true },
      { id: "b", text: "timide", isCorrect: false },
      { id: "c", text: "fragile", isCorrect: false }
    ],
    correctAnswer: "brave",
    explanation: "Brave et courageux ont un sens proche.",
    hint: "Cherche un mot de même sens.",
    tags: ['cm2', 'vocabulaire', 'synonymes', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-103",
    subject: "francais",
    title: "Champ lexical de la montagne",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "champ lexical",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Quel mot appartient au champ lexical de la montagne ?",
    options: [
      { id: "a", text: "sommet", isCorrect: true },
      { id: "b", text: "clavier", isCorrect: false },
      { id: "c", text: "rideau", isCorrect: false }
    ],
    correctAnswer: "sommet",
    explanation: "Sommet appartient au vocabulaire de la montagne.",
    hint: "Pense aux paysages d\'altitude.",
    tags: ['cm2', 'vocabulaire', 'champ-lexical', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-104",
    subject: "francais",
    title: "Famille de mots",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "famille de mots",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le mot de la même famille que 'mer' est :",
    options: [
      { id: "a", text: "marin", isCorrect: true },
      { id: "b", text: "lumière", isCorrect: false },
      { id: "c", text: "orange", isCorrect: false }
    ],
    correctAnswer: "marin",
    explanation: "Mer et marin appartiennent à la même famille.",
    hint: "Cherche le même radical.",
    tags: ['cm2', 'vocabulaire', 'famille-de-mots', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-105",
    subject: "francais",
    title: "Sens figuré",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "sens propre et figuré",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans 'Cette valise pèse une tonne', cela veut dire :",
    options: [
      { id: "a", text: "Elle est très lourde", isCorrect: true },
      { id: "b", text: "Elle contient une vraie tonne", isCorrect: false },
      { id: "c", text: "Elle est vide", isCorrect: false }
    ],
    correctAnswer: "Elle est très lourde",
    explanation: "C'est une expression exagérée pour dire très lourde.",
    hint: "Ne prends pas la phrase au pied de la lettre.",
    tags: ['cm2', 'vocabulaire', 'expression', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-106",
    subject: "francais",
    title: "Mot intrus",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "mot intrus",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "lavande - rose - tulipe - marteau",
    options: [
      { id: "a", text: "lavande", isCorrect: false },
      { id: "b", text: "tulipe", isCorrect: false },
      { id: "c", text: "marteau", isCorrect: true }
    ],
    correctAnswer: "marteau",
    explanation: "Les trois autres mots sont des fleurs.",
    hint: "Cherche les trois mots de la même catégorie.",
    tags: ['cm2', 'vocabulaire', 'intrus', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-107",
    subject: "francais",
    title: "Définition précise",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "définition",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Un archipel, c\'est :",
    options: [
      { id: "a", text: "un groupe d\'îles", isCorrect: true },
      { id: "b", text: "une grande forêt", isCorrect: false },
      { id: "c", text: "un moyen de transport", isCorrect: false }
    ],
    correctAnswer: "un groupe d\'îles",
    explanation: "Un archipel est un ensemble d\'îles.",
    hint: "Pense à la géographie.",
    tags: ['cm2', 'vocabulaire', 'definition', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-108",
    subject: "francais",
    title: "Niveau de langue simple",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "précision lexicale",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Quel mot est le plus précis pour parler d\'un bateau très petit ?",
    options: [
      { id: "a", text: "barque", isCorrect: true },
      { id: "b", text: "truc", isCorrect: false },
      { id: "c", text: "chose", isCorrect: false }
    ],
    correctAnswer: "barque",
    explanation: "Barque est le mot le plus précis.",
    hint: "Choisis le mot exact.",
    tags: ['cm2', 'vocabulaire', 'precision', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-109",
    subject: "francais",
    title: "Synonyme de observer",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "synonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le synonyme de observer est :",
    options: [
      { id: "a", text: "regarder", isCorrect: true },
      { id: "b", text: "secouer", isCorrect: false },
      { id: "c", text: "fabriquer", isCorrect: false }
    ],
    correctAnswer: "regarder",
    explanation: "Observer et regarder ont un sens proche.",
    hint: "Cherche un verbe voisin.",
    tags: ['cm2', 'vocabulaire', 'synonymes', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-110",
    subject: "francais",
    title: "Antonyme de calme",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "antonymes",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "L'antonyme de calme est :",
    options: [
      { id: "a", text: "agité", isCorrect: true },
      { id: "b", text: "paisible", isCorrect: false },
      { id: "c", text: "sage", isCorrect: false }
    ],
    correctAnswer: "agité",
    explanation: "Agité est le contraire de calme.",
    hint: "Cherche l\'idée opposée.",
    tags: ['cm2', 'vocabulaire', 'antonymes', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-111",
    subject: "francais",
    title: "Champ lexical des émotions",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "champ lexical",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Quel mot appartient au champ lexical de la peur ?",
    options: [
      { id: "a", text: "frayeur", isCorrect: true },
      { id: "b", text: "moisson", isCorrect: false },
      { id: "c", text: "cartable", isCorrect: false }
    ],
    correctAnswer: "frayeur",
    explanation: "Frayeur appartient au vocabulaire de la peur.",
    hint: "Cherche un mot d\'émotion.",
    tags: ['cm2', 'vocabulaire', 'champ-lexical', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-112",
    subject: "francais",
    title: "Famille de mots 2",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "famille de mots",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Le mot de la même famille que 'chanter' est :",
    options: [
      { id: "a", text: "chanson", isCorrect: true },
      { id: "b", text: "piano", isCorrect: false },
      { id: "c", text: "heureux", isCorrect: false }
    ],
    correctAnswer: "chanson",
    explanation: "Chanter et chanson appartiennent à la même famille.",
    hint: "Cherche le radical commun.",
    tags: ['cm2', 'vocabulaire', 'famille-de-mots', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-113",
    subject: "francais",
    title: "Définition d\'un métier",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "définition",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Un astronome est une personne qui :",
    options: [
      { id: "a", text: "étudie les astres", isCorrect: true },
      { id: "b", text: "répare les vélos", isCorrect: false },
      { id: "c", text: "vend des gâteaux", isCorrect: false }
    ],
    correctAnswer: "étudie les astres",
    explanation: "L'astronome observe et étudie les astres.",
    hint: "Pense aux étoiles et aux planètes.",
    tags: ['cm2', 'vocabulaire', 'definition', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-114",
    subject: "francais",
    title: "Sens propre",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "sens propre et figuré",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Dans quelle phrase le mot feuille est-il employé au sens propre ?",
    options: [
      { id: "a", text: "Une feuille tombe de l\'arbre", isCorrect: true },
      { id: "b", text: "J'ai une feuille d'exercices", isCorrect: false },
      { id: "c", text: "Il tourne les feuilles d\'un dossier", isCorrect: false }
    ],
    correctAnswer: "Une feuille tombe de l\'arbre",
    explanation: "Ici, feuille désigne la feuille d\'un arbre.",
    hint: "Cherche le sens lié à la nature.",
    tags: ['cm2', 'vocabulaire', 'sens-propre', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-115",
    subject: "francais",
    title: "Mot générique",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "vocabulaire",
    subskill: "catégories",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Rose, tulipe et lys sont des :",
    options: [
      { id: "a", text: "fleurs", isCorrect: true },
      { id: "b", text: "meubles", isCorrect: false },
      { id: "c", text: "outils", isCorrect: false }
    ],
    correctAnswer: "fleurs",
    explanation: "Ces trois mots appartiennent à la même catégorie.",
    hint: "Cherche la grande famille de mots.",
    tags: ['cm2', 'vocabulaire', 'categorie', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-vocabulaire-116",
    subject: "francais",
    title: "Nuance de mot",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "vocabulaire",
    subskill: "précision lexicale",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Pour parler d\'une pluie très légère, quel mot est le plus précis ?",
    options: [
      { id: "a", text: "bruine", isCorrect: true },
      { id: "b", text: "averse", isCorrect: false },
      { id: "c", text: "tempête", isCorrect: false }
    ],
    correctAnswer: "bruine",
    explanation: "Bruine désigne une pluie fine et légère.",
    hint: "Choisis le mot le plus précis.",
    tags: ['cm2', 'vocabulaire', 'precision', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },


  /* =====================================================================
     CM2 — EXPRESSION ÉCRITE (fr-cm2-expression-101 à 108)
  ===================================================================== */
{
    id: "fr-cm2-expression-101",
    subject: "francais",
    title: "Choisir la meilleure phrase",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "choisir la meilleure formulation",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Laquelle de ces phrases est la mieux écrite ?",
    options: [
      { id: "a", text: "Nous irons au musée demain.", isCorrect: true },
      { id: "b", text: "Nous irons demain au musée.", isCorrect: false },
      { id: "c", text: "Irons nous demain musée au.", isCorrect: false }
    ],
    correctAnswer: "Nous irons au musée demain.",
    explanation: "La phrase choisie est correcte et naturelle.",
    hint: "Cherche la formulation la plus claire.",
    tags: ['cm2', 'expression-ecrite', 'formulation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-expression-102",
    subject: "francais",
    title: "Ponctuation de dialogue",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "ponctuation",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Laquelle est correctement ponctuée ?",
    options: [
      { id: "a", text: "Paul demande : « Tu viens ? »", isCorrect: true },
      { id: "b", text: "Paul demande Tu viens ?", isCorrect: false },
      { id: "c", text: "paul demande : « Tu viens ? »", isCorrect: false }
    ],
    correctAnswer: "Paul demande : « Tu viens ? »",
    explanation: "La phrase commence bien par une majuscule et la ponctuation du dialogue est correcte.",
    hint: "Vérifie majuscule et ponctuation.",
    tags: ['cm2', 'expression-ecrite', 'ponctuation', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-expression-103",
    subject: "francais",
    title: "Connecteur logique",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "connecteurs",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Complète : 'Nous rentrons vite _____ l\'orage approche.'",
    options: [
      { id: "a", text: "parce que", isCorrect: true },
      { id: "b", text: "mais", isCorrect: false },
      { id: "c", text: "ou", isCorrect: false }
    ],
    correctAnswer: "parce que",
    explanation: "Parce que introduit une cause.",
    hint: "Cherche le mot qui explique la raison.",
    tags: ['cm2', 'expression-ecrite', 'connecteur', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-expression-104",
    subject: "francais",
    title: "Cohérence de phrase",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "cohérence",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Laquelle est la plus cohérente ?",
    options: [
      { id: "a", text: "Le marin hisse la voile avant de partir.", isCorrect: true },
      { id: "b", text: "Le marin mange la voile avant de partir.", isCorrect: false },
      { id: "c", text: "La voile hisse le marin avant de partir.", isCorrect: false }
    ],
    correctAnswer: "Le marin hisse la voile avant de partir.",
    explanation: "Cette phrase est logique et bien construite.",
    hint: "Cherche la phrase réaliste.",
    tags: ['cm2', 'expression-ecrite', 'coherence', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-expression-105",
    subject: "francais",
    title: "Enchaînement logique",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "connecteurs",
    format: "qcm",
    instructions: "Choisis la bonne réponse.",
    prompt: "Complète : 'Il pleuvait très fort ; _____, le match a été annulé.'",
    options: [
      { id: "a", text: "donc", isCorrect: true },
      { id: "b", text: "pourtant", isCorrect: false },
      { id: "c", text: "hier", isCorrect: false }
    ],
    correctAnswer: "donc",
    explanation: "Donc introduit une conséquence logique.",
    hint: "Cherche le mot de conséquence.",
    tags: ['cm2', 'expression-ecrite', 'connecteur', 'qcm'],
    estimatedMinutes: 3,
    adaptations: cloneDefaultAdaptations()
  },

{
    id: "fr-cm2-expression-106",
    subject: "francais",
    title: "Enrichir une phrase",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "phrase enrichie",
    format: "short_answer",
    instructions: "Récris la phrase en ajoutant un adjectif et un complément.",
    prompt: "Le chien court.",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La phrase doit rester correcte et être enrichie avec plus de détails.",
    hint: "Exemple : Le grand chien court dans le parc.",
    tags: ['cm2', 'expression-ecrite', 'phrase', 'production'],
    estimatedMinutes: 4,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une phrase courte et correcte.", extraHint: "Commence par une majuscule et finis par un point." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      progressif: { splitSteps: ["Choisis une idée.", "Écris la phrase.", "Relis-la."], extraHint: "Vérifie le verbe et le point final." },
      defi_avance: { challengeExtension: "Ajoute un détail précis ou une deuxième phrase." }
    })
  },

{
    id: "fr-cm2-expression-107",
    subject: "francais",
    title: "Écrire une phrase correcte",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "rédaction courte",
    format: "short_answer",
    instructions: "Écris une phrase correcte avec les mots suivants.",
    prompt: "Mots : jardin, jouer, enfants.",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La réponse doit contenir les mots demandés dans une phrase correcte.",
    hint: "Exemple possible : Les enfants jouent dans le jardin.",
    tags: ['cm2', 'expression-ecrite', 'redaction', 'production'],
    estimatedMinutes: 4,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une phrase courte et correcte.", extraHint: "Commence par une majuscule et finis par un point." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      progressif: { splitSteps: ["Choisis une idée.", "Écris la phrase.", "Relis-la."], extraHint: "Vérifie le verbe et le point final." },
      defi_avance: { challengeExtension: "Ajoute un détail précis ou une deuxième phrase." }
    })
  },

{
    id: "fr-cm2-expression-108",
    subject: "francais",
    title: "Développer une action",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "rédaction courte",
    format: "short_answer",
    instructions: "Transforme cette idée en phrase précise.",
    prompt: "Idée : un élève découvre un trésor dans le grenier.",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La phrase doit être claire, précise et grammaticalement correcte.",
    hint: "Ajoute au moins un détail utile.",
    tags: ['cm2', 'expression-ecrite', 'redaction', 'production'],
    estimatedMinutes: 4,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une phrase courte et correcte.", extraHint: "Commence par une majuscule et finis par un point." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      progressif: { splitSteps: ["Choisis une idée.", "Écris la phrase.", "Relis-la."], extraHint: "Vérifie le verbe et le point final." },
      defi_avance: { challengeExtension: "Ajoute un détail précis ou une deuxième phrase." }
    })
  },

{
    id: "fr-cm2-expression-109",
    subject: "francais",
    title: "Employer un connecteur",
    schoolClass: "CM2",
    generalLevel: "advanced",
    skill: "expression_ecrite",
    subskill: "connecteurs",
    format: "short_answer",
    instructions: "Écris une phrase avec le connecteur 'parce que'.",
    prompt: "Thème libre, mais la phrase doit expliquer une cause.",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La réponse doit contenir parce que et rester correcte.",
    hint: "Exemple : Je prends un parapluie parce qu\'il pleut.",
    tags: ['cm2', 'expression-ecrite', 'connecteur', 'production'],
    estimatedMinutes: 4,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une phrase courte et correcte.", extraHint: "Commence par une majuscule et finis par un point." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      progressif: { splitSteps: ["Choisis une idée.", "Écris la phrase.", "Relis-la."], extraHint: "Vérifie le verbe et le point final." },
      defi_avance: { challengeExtension: "Ajoute un détail précis ou une deuxième phrase." }
    })
  },

{
    id: "fr-cm2-expression-110",
    subject: "francais",
    title: "Décrire un lieu",
    schoolClass: "CM2",
    generalLevel: "intermediate",
    skill: "expression_ecrite",
    subskill: "description courte",
    format: "short_answer",
    instructions: "Écris une phrase qui décrit un lieu de ton choix.",
    prompt: "Tu peux choisir la plage, la forêt, la ville ou l\'école.",
    correctAnswer: "Réponse ouverte valide par critères",
    explanation: "La phrase doit décrire clairement un lieu avec au moins un détail.",
    hint: "Ajoute un adjectif ou un complément de lieu.",
    tags: ['cm2', 'expression-ecrite', 'description', 'production'],
    estimatedMinutes: 4,
    adaptations: cloneDefaultAdaptations({
      lecture_simplifiee: { instruction: "Écris une phrase courte et correcte.", extraHint: "Commence par une majuscule et finis par un point." },
      attention_courte: { instruction: "Écris juste une phrase courte." },
      progressif: { splitSteps: ["Choisis une idée.", "Écris la phrase.", "Relis-la."], extraHint: "Vérifie le verbe et le point final." },
      defi_avance: { challengeExtension: "Ajoute un détail précis ou une deuxième phrase." }
    })
  },

];
