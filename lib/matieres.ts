/**
 * Couleurs officielles des matières — charte graphique exerceō
 * Utilisées dans : page.tsx, SessionForm, ExerciceCard, tableau-de-bord, QuizBonus
 */

export const MATIERE_COLORS: Record<
  string,
  { bg: string; text: string }
> = {
  "Mathématiques":       { bg: "#748bf7", text: "#ffffff" },
  "Français":            { bg: "#6bd6a6", text: "#071453" },
  "Sciences":            { bg: "#ffb86b", text: "#071453" },
  "Histoire-Géographie": { bg: "#f9de6f", text: "#071453" },
  "Anglais":             { bg: "#e190c9", text: "#071453" },
  "Découverte du monde": { bg: "#f9de6f", text: "#071453" },
  "Questionner le monde": { bg: "#f9de6f", text: "#071453" },
};

// Labels courts pour les boutons
export const MATIERE_LABELS: Record<string, string> = {
  "Mathématiques":        "Mathématiques",
  "Français":             "Français",
  "Sciences":             "Sciences",
  "Histoire-Géographie":  "Histoire-Géo",
  "Anglais":              "Anglais",
  "Découverte du monde":  "Questionner le monde",
  "Questionner le monde": "Questionner le monde",
};

// Pictos SVG par matière (version couleur — pour fonds clairs)
export const MATIERE_PICTOS: Record<string, string> = {
  "Mathématiques":        "/icons/picto-mathematiques.svg",
  "Français":             "/icons/picto-francais.svg",
  "Sciences":             "/icons/picto-sciences.svg",
  "Histoire-Géographie":  "/icons/picto-histoire-geo.svg",
  "Anglais":              "/icons/picto-anglais.svg",
  "Découverte du monde":  "/icons/picto-sciences.svg",
  "Questionner le monde": "/icons/picto-sciences.svg",
};

// Pictos SVG blancs par matière (version blanche — pour fonds colorés)
export const MATIERE_PICTOS_BLANC: Record<string, string> = {
  "Mathématiques":        "/icons/picto-mathematiques-blanc.svg",
  "Français":             "/icons/picto-francais-blanc.svg",
  "Sciences":             "/icons/picto-sciences-blanc.svg",
  "Histoire-Géographie":  "/icons/picto-histoire-geo-blanc.svg",
  "Anglais":              "/icons/picto-anglais-blanc.svg",
  "Découverte du monde":  "/icons/picto-sciences-blanc.svg",
  "Questionner le monde": "/icons/picto-sciences-blanc.svg",
};

// Liste ordonnée des matières (legacy — préférer getMatieresByClasse)
export const MATIERES_LIST = [
  "Mathématiques",
  "Français",
  "Sciences",
  "Histoire-Géographie",
  "Anglais",
] as const;

// ─── Cycle scolaire ───────────────────────────────────────────────────────────

const CYCLE_2_CLASSES = ["CP", "CE1", "CE2"] as const;
const CYCLE_3_CLASSES = ["CM1", "CM2"] as const;

/**
 * Retourne la liste des matières affichées à l'utilisateur pour une classe donnée.
 * Cycle 2 (CP/CE1/CE2) : 4 matières — "Questionner le monde" fusionne Sciences + Découverte du monde.
 * Cycle 3 (CM1/CM2)    : 5 matières — "Histoire-Géographie" et "Sciences et technologie" distincts.
 */
export function getMatieresByClasse(classe: string): string[] {
  if ((CYCLE_2_CLASSES as readonly string[]).includes(classe)) {
    return ["Mathématiques", "Français", "Anglais", "Questionner le monde"];
  }
  return ["Mathématiques", "Français", "Sciences", "Histoire-Géographie", "Anglais"];
}

/**
 * Retourne les domaines internes (clés Matiere en base) correspondant
 * à une matière affichée pour une classe donnée.
 * Utilisé par la route API pour dispatcher vers les bons sélecteurs.
 *
 * Exemples :
 *   getInternalDomainsForDisplayedSubject("CP", "Questionner le monde")
 *     → ["Sciences", "Découverte du monde"]
 *   getInternalDomainsForDisplayedSubject("CM1", "Sciences")
 *     → ["Sciences"]
 */
export function getInternalDomainsForDisplayedSubject(
  classe: string,
  displayedSubject: string,
): string[] {
  if (displayedSubject === "Questionner le monde") {
    return ["Sciences", "Découverte du monde"];
  }
  return [displayedSubject];
}

/**
 * Retourne le libellé d'affichage d'une matière en tenant compte du cycle scolaire.
 * - "Sciences" en cycle 3 → "Sciences et techno"
 * - "Questionner le monde" → "Questionner le monde" (déjà dans MATIERE_LABELS)
 * - Autres → valeur de MATIERE_LABELS
 */
export function getSubjectLabel(matiere: string, classe: string): string {
  const isCycle3 = (CYCLE_3_CLASSES as readonly string[]).includes(classe);
  if (matiere === "Sciences" && isCycle3) return "Sciences et techno";
  return MATIERE_LABELS[matiere] ?? matiere;
}
