export type Niveau = "CP" | "CE1" | "CE2" | "CM1" | "CM2";

export type Matiere = "francais";

export type SousDomaine =
  | "homophones"
  | "accords"
  | "conjugaison"
  | "lecture"
  | "orthographe"
  | "grammaire"
  | "vocabulaire"
  | "expression_ecrite";

export type ExerciseType = "qcm";

export type Exercise = {
  id: string;
  matiere: Matiere;
  sous_domaine: SousDomaine;
  notion: string;
  niveau: Niveau;
  type: ExerciseType;
  consigne: string;
  question: string;
  options: string[];
  bonne_reponse: string;
  explication: string;
};

export type GenerateExerciseParams = {
  niveau: Niveau;
  sous_domaine?: SousDomaine;
  notion?: string;
};