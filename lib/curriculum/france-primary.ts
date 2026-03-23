import type { CurriculumVersion, NiveauCurriculum } from "./types";

// ─────────────────────────────────────────────────────────────────
// Curriculum officiel de l'école primaire française
// Source : programmes BO — version 2025-2026
// ─────────────────────────────────────────────────────────────────

const CP: NiveauCurriculum = {
  classe: "CP",
  cycle: "cycle2",
  domaines: [
    {
      matiere: "francais",
      label: "Français",
      sousdomaines: [
        {
          id: "lecture",
          label: "Lecture et compréhension",
          exemples: [
            "correspondance graphème-phonème",
            "déchiffrage de syllabes simples (ba, li, mo...)",
            "lecture de mots simples (papa, maison, chien)",
            "lecture de phrases courtes",
            "compréhension d'un texte court",
          ],
        },
        {
          id: "ecriture",
          label: "Écriture et orthographe",
          exemples: [
            "copie de mots simples",
            "écriture de syllabes",
            "majuscule en début de phrase",
            "point en fin de phrase",
            "mots courants : le, la, les, un, une, des, est, et",
          ],
        },
        {
          id: "grammaire",
          label: "Grammaire de la phrase",
          exemples: [
            "reconnaissance d'une phrase",
            "sujet et verbe",
            "phrase affirmative et négative (ne...pas)",
            "singulier et pluriel (chien / chiens)",
            "masculin et féminin (petit / petite)",
          ],
        },
        {
          id: "vocabulaire",
          label: "Vocabulaire",
          exemples: [
            "mots de la vie quotidienne",
            "mots de la classe et de l'école",
            "contraires simples (grand/petit, chaud/froid)",
            "familles de mots simples",
          ],
        },
      ],
    },
    {
      matiere: "mathematiques",
      label: "Mathématiques",
      sousdomaines: [
        {
          id: "nombres",
          label: "Nombres et calculs",
          exemples: [
            "lire et écrire les nombres de 0 à 100",
            "compter, dénombrer",
            "ordre croissant et décroissant jusqu'à 100",
            "addition de nombres inférieurs à 20",
            "soustraction de nombres inférieurs à 20",
            "doubles de 1 à 10",
            "moitiés de nombres pairs jusqu'à 20",
            "décomposition additives (ex : 7 = 3 + 4)",
          ],
        },
        {
          id: "geometrie",
          label: "Géométrie",
          exemples: [
            "reconnaître un carré, un rectangle, un triangle, un cercle",
            "tracer des formes simples",
            "vocabulaire : côté, sommet, angle",
            "notions : horizontal, vertical, symétrie simple",
          ],
        },
        {
          id: "grandeurs",
          label: "Grandeurs et mesures",
          exemples: [
            "comparer des longueurs (plus long, plus court)",
            "utiliser une règle graduée",
            "lire l'heure : heure pile et demi-heure",
            "jours de la semaine, mois de l'année",
            "pièces et billets en euros (reconnaissance)",
          ],
        },
      ],
    },
    {
      matiere: "questionner_le_monde",
      label: "Questionner le monde",
      sousdomaines: [
        {
          id: "vivant",
          label: "Le vivant",
          exemples: [
            "distinguer vivant / non vivant",
            "les grandes familles d'animaux (mammifères, oiseaux, poissons...)",
            "croissance d'un végétal",
            "les saisons",
          ],
        },
        {
          id: "matiere",
          label: "Matière, objets, énergie",
          exemples: [
            "solide, liquide",
            "flottaison / coulage",
            "matériaux et leurs propriétés (bois, métal, plastique)",
          ],
        },
      ],
    },
  ],
};

const CE1: NiveauCurriculum = {
  classe: "CE1",
  cycle: "cycle2",
  domaines: [
    {
      matiere: "francais",
      label: "Français",
      sousdomaines: [
        {
          id: "lecture",
          label: "Lecture et compréhension",
          exemples: [
            "lecture fluide de textes courts",
            "identifier le sujet d'un texte",
            "comprendre les mots inconnus à partir du contexte",
            "différencier types de textes (narratif, descriptif)",
          ],
        },
        {
          id: "ecriture",
          label: "Orthographe et dictée",
          exemples: [
            "accord sujet-verbe (singulier/pluriel)",
            "accord nom-adjectif",
            "mots invariables courants : avec, dans, mais, ou, et, donc",
            "homophones : a/à, est/et, son/sont, on/ont",
            "pluriel en -s et -x",
            "féminin des adjectifs courants",
          ],
        },
        {
          id: "grammaire",
          label: "Grammaire",
          exemples: [
            "nom commun et nom propre",
            "article défini et indéfini",
            "adjectif qualificatif",
            "verbe : reconnaître l'infinitif",
            "temps présent de l'indicatif (verbes en -er courants)",
            "phrase simple : sujet, verbe, complément",
          ],
        },
        {
          id: "conjugaison",
          label: "Conjugaison",
          exemples: [
            "présent de l'indicatif : être, avoir, aller, faire, vouloir",
            "présent des verbes du 1er groupe (chanter, jouer, marcher)",
            "passé composé avec avoir (verbes courants)",
            "futur simple des verbes courants",
          ],
        },
        {
          id: "vocabulaire",
          label: "Vocabulaire",
          exemples: [
            "synonymes simples",
            "contraires",
            "préfixes courants : re-, dé-, im-",
            "familles de mots",
            "utiliser le dictionnaire",
          ],
        },
      ],
    },
    {
      matiere: "mathematiques",
      label: "Mathématiques",
      sousdomaines: [
        {
          id: "nombres",
          label: "Nombres et calculs",
          exemples: [
            "lire, écrire, comparer les nombres jusqu'à 1000",
            "addition posée avec retenue",
            "soustraction posée sans retenue",
            "tables d'addition (0+0 à 9+9)",
            "tables de multiplication de 2, 5 et 10",
            "moitié et double jusqu'à 100",
            "multiplication simple (2×, 5×, 10×)",
          ],
        },
        {
          id: "geometrie",
          label: "Géométrie",
          exemples: [
            "tracer un carré, un rectangle, un triangle",
            "axe de symétrie",
            "périmètre d'un carré et d'un rectangle",
            "angles droits",
          ],
        },
        {
          id: "grandeurs",
          label: "Grandeurs et mesures",
          exemples: [
            "mesurer en cm et mm",
            "convertir cm en mm",
            "lire l'heure (quart d'heure, trois quarts d'heure)",
            "calculer une durée simple",
            "euro et centimes",
          ],
        },
      ],
    },
    {
      matiere: "questionner_le_monde",
      label: "Questionner le monde",
      sousdomaines: [
        {
          id: "vivant",
          label: "Le vivant",
          exemples: [
            "cycle de vie d'un animal (naissance, croissance, reproduction, mort)",
            "régimes alimentaires (herbivore, carnivore, omnivore)",
            "besoins des plantes",
            "photosynthèse simplifiée",
          ],
        },
        {
          id: "espace_temps",
          label: "Espace et temps",
          exemples: [
            "frise chronologique simple",
            "repères historiques : préhistoire, Antiquité, Moyen Âge",
            "points cardinaux : Nord, Sud, Est, Ouest",
            "lire un plan simple",
          ],
        },
      ],
    },
  ],
};

const CE2: NiveauCurriculum = {
  classe: "CE2",
  cycle: "cycle2",
  domaines: [
    {
      matiere: "francais",
      label: "Français",
      sousdomaines: [
        {
          id: "lecture",
          label: "Lecture et compréhension",
          exemples: [
            "inférences simples",
            "identifier le narrateur",
            "repérer les personnages principaux",
            "résumer un paragraphe",
          ],
        },
        {
          id: "ecriture",
          label: "Orthographe",
          exemples: [
            "accord sujet-verbe au présent et au passé composé",
            "accord nom-adjectif au pluriel",
            "homophones : ces/ses, c'est/s'est, leur/leurs",
            "participe passé avec être (accord)",
            "mots invariables du programme CE2",
          ],
        },
        {
          id: "grammaire",
          label: "Grammaire",
          exemples: [
            "GN (déterminant + nom + adjectif)",
            "complément circonstanciel de lieu, temps, manière",
            "phrase simple vs phrase complexe",
            "ponctuation : virgule, point d'interrogation, point d'exclamation",
            "types de phrases : déclarative, interrogative, exclamative, impérative",
          ],
        },
        {
          id: "conjugaison",
          label: "Conjugaison",
          exemples: [
            "imparfait de l'indicatif (être, avoir, 1er groupe)",
            "futur simple (être, avoir, 1er groupe)",
            "passé composé avec être (verbes de mouvement)",
            "infinitif vs participe passé en -é",
          ],
        },
        {
          id: "vocabulaire",
          label: "Vocabulaire",
          exemples: [
            "suffixes : -tion, -eur, -ment, -able",
            "champ lexical",
            "sens propre et sens figuré",
            "niveaux de langue (familier, courant, soutenu) — notion",
          ],
        },
      ],
    },
    {
      matiere: "mathematiques",
      label: "Mathématiques",
      sousdomaines: [
        {
          id: "nombres",
          label: "Nombres et calculs",
          exemples: [
            "lire, écrire, comparer les nombres jusqu'à 10 000",
            "addition et soustraction posées avec retenues",
            "tables de multiplication de 2 à 9",
            "multiplication posée (1 chiffre × 2 chiffres)",
            "notion de division (partage en parts égales)",
            "introduction aux fractions simples (1/2, 1/4, 3/4)",
          ],
        },
        {
          id: "geometrie",
          label: "Géométrie",
          exemples: [
            "droites parallèles et perpendiculaires",
            "périmètre de figures simples",
            "aire par comptage de carreaux",
            "tracer une figure symétrique",
          ],
        },
        {
          id: "grandeurs",
          label: "Grandeurs et mesures",
          exemples: [
            "convertir m en cm et km en m",
            "kg et g",
            "L et cL",
            "durées : heure, minute, seconde — conversions simples",
          ],
        },
      ],
    },
    {
      matiere: "questionner_le_monde",
      label: "Questionner le monde",
      sousdomaines: [
        {
          id: "vivant",
          label: "Le vivant",
          exemples: [
            "reproduction des animaux et des plantes",
            "chaînes alimentaires simples",
            "adaptations des animaux à leur milieu",
          ],
        },
        {
          id: "espace_temps",
          label: "Espace et temps",
          exemples: [
            "repères : Temps Modernes, Révolution française — notion",
            "lire une carte de France",
            "capitales et pays voisins de la France",
          ],
        },
      ],
    },
  ],
};

const CM1: NiveauCurriculum = {
  classe: "CM1",
  cycle: "cycle3",
  domaines: [
    {
      matiere: "francais",
      label: "Français",
      sousdomaines: [
        {
          id: "lecture",
          label: "Lecture et compréhension",
          exemples: [
            "identifier thème, thèse, arguments dans un texte",
            "implicite et explicite",
            "point de vue du narrateur",
            "textes documentaires : extraire des informations",
          ],
        },
        {
          id: "ecriture",
          label: "Orthographe",
          exemples: [
            "accord du participe passé avec avoir (règle de base)",
            "homophones grammaticaux : quand/quant/qu'en, ou/où, si/s'y",
            "règles d'accord dans le GN complexe",
            "mots invariables du programme CM1",
          ],
        },
        {
          id: "grammaire",
          label: "Grammaire",
          exemples: [
            "fonctions : sujet, COD, COI, attribut du sujet",
            "voix active et passive — notion",
            "propositions relative, circonstancielle",
            "subordonnée conjonctive — notion",
          ],
        },
        {
          id: "conjugaison",
          label: "Conjugaison",
          exemples: [
            "passé simple (3e personne)",
            "conditionnel présent",
            "subjonctif présent (verbes courants)",
            "concordance des temps — notion",
            "tous les temps de l'indicatif des verbes irréguliers courants",
          ],
        },
        {
          id: "vocabulaire",
          label: "Vocabulaire",
          exemples: [
            "étymologie latine et grecque simple",
            "polysémie",
            "registres de langue",
            "figures de style : comparaison, métaphore — notion",
          ],
        },
      ],
    },
    {
      matiere: "mathematiques",
      label: "Mathématiques",
      sousdomaines: [
        {
          id: "nombres",
          label: "Nombres et calculs",
          exemples: [
            "grands nombres (jusqu'à 1 000 000)",
            "multiplication posée (2 chiffres × 2 chiffres)",
            "division euclidienne posée",
            "fractions : comparaison, addition de fractions de même dénominateur",
            "nombres décimaux : lire, comparer, additionner",
            "pourcentages simples (notion)",
            "priorités opératoires — parenthèses",
          ],
        },
        {
          id: "geometrie",
          label: "Géométrie",
          exemples: [
            "cercle : centre, rayon, diamètre",
            "angles : aigu, droit, obtus",
            "construire un triangle (règle et compas)",
            "aire de rectangles et triangles rectangles",
          ],
        },
        {
          id: "grandeurs",
          label: "Grandeurs et mesures",
          exemples: [
            "périmètre et aire de figures composées",
            "volume : notion, cm³",
            "conversions entre unités de longueur, masse, capacité",
            "calcul de durées complexes",
          ],
        },
        {
          id: "statistiques",
          label: "Organisation et gestion de données",
          exemples: [
            "lire et construire un tableau",
            "diagramme en barres",
            "problèmes de proportionnalité simple",
          ],
        },
      ],
    },
    {
      matiere: "sciences_et_technologie",
      label: "Sciences et technologie",
      sousdomaines: [
        {
          id: "vivant",
          label: "Le vivant",
          exemples: [
            "reproduction sexuée et asexuée",
            "systèmes du corps humain : digestif, circulatoire, respiratoire",
            "alimentation équilibrée",
            "biodiversité",
          ],
        },
        {
          id: "matiere_energie",
          label: "Matière, énergie, objets",
          exemples: [
            "états de la matière et changements d'état",
            "mélanges et solutions",
            "électricité : circuit simple, conducteur/isolant",
            "sources d'énergie renouvelables et non renouvelables — notion",
          ],
        },
      ],
    },
    {
      matiere: "histoire_geographie",
      label: "Histoire-Géographie",
      sousdomaines: [
        {
          id: "histoire",
          label: "Histoire",
          exemples: [
            "Antiquité : Égypte, Grèce, Rome",
            "Moyen Âge : seigneurs, paysans, cathédrales, croisades",
            "Temps Modernes : Renaissance, grandes découvertes, Louis XIV",
            "Révolution française : causes, Déclaration des droits de l'homme",
          ],
        },
        {
          id: "geographie",
          label: "Géographie",
          exemples: [
            "régions et départements de France",
            "relief français : massifs montagneux, fleuves",
            "Union européenne — pays membres principaux",
            "développement durable — notion",
          ],
        },
      ],
    },
  ],
};

const CM2: NiveauCurriculum = {
  classe: "CM2",
  cycle: "cycle3",
  domaines: [
    {
      matiere: "francais",
      label: "Français",
      sousdomaines: [
        {
          id: "lecture",
          label: "Lecture et compréhension",
          exemples: [
            "analyse de textes littéraires variés (conte, roman, poésie, théâtre)",
            "repérer les procédés stylistiques",
            "débat interprétatif — argumentation",
          ],
        },
        {
          id: "ecriture",
          label: "Orthographe",
          exemples: [
            "accord du participe passé (être/avoir)",
            "tous les homophones grammaticaux du programme élémentaire",
            "préfixes et suffixes complexes",
          ],
        },
        {
          id: "grammaire",
          label: "Grammaire",
          exemples: [
            "coordination et subordination",
            "propositions : indépendante, principale, subordonnée",
            "complément du nom, apposition",
            "transformation de phrases (actif/passif, affirmatif/négatif)",
          ],
        },
        {
          id: "conjugaison",
          label: "Conjugaison",
          exemples: [
            "passé simple de tous les groupes",
            "plus-que-parfait de l'indicatif",
            "futur antérieur",
            "conditionnel passé — notion",
            "maîtrise de tous les temps vus en cycle 3",
          ],
        },
        {
          id: "vocabulaire",
          label: "Vocabulaire",
          exemples: [
            "mots d'origine grecque et latine courants",
            "figures de style : personnification, antithèse, hyperbole",
            "champ sémantique",
            "nuances de sens entre synonymes",
          ],
        },
      ],
    },
    {
      matiere: "mathematiques",
      label: "Mathématiques",
      sousdomaines: [
        {
          id: "nombres",
          label: "Nombres et calculs",
          exemples: [
            "fractions : addition et soustraction de fractions de dénominateurs différents",
            "fractions décimales et nombres décimaux",
            "multiplication et division de nombres décimaux",
            "pourcentages courants (10 %, 25 %, 50 %)",
            "proportionnalité : tableau de proportionnalité",
            "notion de puissances de 10",
          ],
        },
        {
          id: "geometrie",
          label: "Géométrie",
          exemples: [
            "triangles : isocèle, équilatéral, rectangle",
            "parallélogramme, trapèze",
            "aire du triangle, du parallélogramme",
            "volume du cube et du pavé droit",
            "agrandissement et réduction — notion",
          ],
        },
        {
          id: "grandeurs",
          label: "Grandeurs et mesures",
          exemples: [
            "conversions complètes d'unités",
            "calcul d'aires composées",
            "vitesse, distance, durée — notion",
          ],
        },
        {
          id: "statistiques",
          label: "Organisation et gestion de données",
          exemples: [
            "moyenne (calcul et interprétation)",
            "diagrammes circulaires",
            "problèmes de proportionnalité à plusieurs étapes",
          ],
        },
      ],
    },
    {
      matiere: "sciences_et_technologie",
      label: "Sciences et technologie",
      sousdomaines: [
        {
          id: "vivant",
          label: "Le vivant",
          exemples: [
            "puberté et reproduction humaine",
            "classification du vivant",
            "écosystèmes et interactions",
            "impact de l'homme sur la biodiversité",
          ],
        },
        {
          id: "matiere_energie",
          label: "Matière, énergie, objets",
          exemples: [
            "lumière : propagation, ombres, vision",
            "leviers et équilibre mécanique — notion",
            "programmation simple (algorithme) — notion",
            "énergies : fossiles, renouvelables, nucléaire — notion",
          ],
        },
      ],
    },
    {
      matiere: "histoire_geographie",
      label: "Histoire-Géographie",
      sousdomaines: [
        {
          id: "histoire",
          label: "Histoire",
          exemples: [
            "XIXe siècle : Révolution industrielle, colonisation",
            "Première et Deuxième Guerre mondiale — dates et acteurs clés",
            "Décolonisation — notion",
            "Cinquième République — notion",
          ],
        },
        {
          id: "geographie",
          label: "Géographie",
          exemples: [
            "mondialisation — notion",
            "espaces urbains et ruraux en France",
            "DOM-TOM : localisation",
            "grandes métropoles mondiales — notion",
          ],
        },
      ],
    },
  ],
};

// ── Export principal ──────────────────────────────────────────────

export const CURRICULUM_2025_2026: CurriculumVersion = {
  annee: "2025-2026",
  niveaux: [CP, CE1, CE2, CM1, CM2],
};

export const CURRICULUM_ACTUEL = CURRICULUM_2025_2026;
