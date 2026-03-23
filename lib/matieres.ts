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
};

// Labels courts pour les boutons
export const MATIERE_LABELS: Record<string, string> = {
  "Mathématiques":       "Mathématiques",
  "Français":            "Français",
  "Sciences":            "Sciences",
  "Histoire-Géographie": "Histoire-Géo",
  "Anglais":             "Anglais",
};

// Pictos SVG par matière (version couleur — pour fonds clairs)
export const MATIERE_PICTOS: Record<string, string> = {
  "Mathématiques":       "/icons/picto-mathematiques.svg",
  "Français":            "/icons/picto-francais.svg",
  "Sciences":            "/icons/picto-sciences.svg",
  "Histoire-Géographie": "/icons/picto-histoire-geo.svg",
  "Anglais":             "/icons/picto-anglais.svg",
};

// Pictos SVG blancs par matière (version blanche — pour fonds colorés)
export const MATIERE_PICTOS_BLANC: Record<string, string> = {
  "Mathématiques":       "/icons/picto-mathematiques-blanc.svg",
  "Français":            "/icons/picto-francais-blanc.svg",
  "Sciences":            "/icons/picto-sciences-blanc.svg",
  "Histoire-Géographie": "/icons/picto-histoire-geo-blanc.svg",
  "Anglais":             "/icons/picto-anglais-blanc.svg",
};

// Liste ordonnée des matières
export const MATIERES_LIST = [
  "Mathématiques",
  "Français",
  "Sciences",
  "Histoire-Géographie",
  "Anglais",
] as const;
