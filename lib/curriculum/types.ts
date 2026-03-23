// Types pour le curriculum officiel du primaire français

export type Classe = "CP" | "CE1" | "CE2" | "CM1" | "CM2";
export type Cycle = "cycle2" | "cycle3";

export type Matiere =
  | "francais"
  | "mathematiques"
  | "langues_vivantes"
  | "questionner_le_monde"   // cycle 2 uniquement
  | "sciences_et_technologie" // cycle 3 uniquement
  | "histoire_geographie";    // cycle 3 uniquement

export interface SousDomaine {
  id: string;
  label: string;
  exemples: string[]; // exemples de compétences ou notions
}

export interface DomaineCurriculum {
  matiere: Matiere;
  label: string;
  sousdomaines: SousDomaine[];
}

export interface NiveauCurriculum {
  classe: Classe;
  cycle: Cycle;
  domaines: DomaineCurriculum[];
}

export interface CurriculumVersion {
  annee: string; // ex: "2025-2026"
  niveaux: NiveauCurriculum[];
}

// Contraintes construites pour le prompt Claude
export interface ContraintesCurriculum {
  classe: Classe;
  cycle: Cycle;
  matieresScolaires: string[];        // libellés à afficher (ex: "Français")
  competencesAutorisees: string[];    // liste de compétences/notions du niveau
  instructionNiveau: string;          // texte injecté dans le prompt Claude
}
