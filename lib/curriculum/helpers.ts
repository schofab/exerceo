import type { Classe, DomaineCurriculum, ContraintesCurriculum } from "./types";
import { CURRICULUM_ACTUEL } from "./france-primary";

// Correspondance entre les noms de matières de l'app et les IDs du curriculum
const MATIERE_APP_VERS_CURRICULUM: Record<string, string> = {
  "Mathématiques":        "mathematiques",
  "Français":             "francais",
  "Sciences":             "sciences_et_technologie",
  "Histoire-Géographie":  "histoire_geographie",
  "Anglais":              "langues_vivantes",       // géré séparément (pas dans le curriculum détaillé)
  "Questionner le monde": "questionner_le_monde",   // cycle 2 — banque locale, fallback Claude si besoin
  "Découverte du monde":  "questionner_le_monde",   // alias legacy
};

/**
 * Retourne le niveau curriculum pour une classe donnée.
 */
export function getCurriculumForGrade(classe: Classe) {
  return CURRICULUM_ACTUEL.niveaux.find((n) => n.classe === classe) ?? null;
}

/**
 * Retourne les matières scolaires autorisées pour une classe donnée.
 */
export function getAllowedSubjectsForGrade(classe: Classe): string[] {
  const niveau = getCurriculumForGrade(classe);
  if (!niveau) return [];
  return niveau.domaines.map((d) => d.label);
}

/**
 * Retourne toutes les compétences/notions autorisées pour une classe
 * et une liste de matières données (noms app, ex: ["Mathématiques", "Français"]).
 */
export function getAllowedSkillsForGrade(
  classe: Classe,
  matieresApp: string[]
): string[] {
  const niveau = getCurriculumForGrade(classe);
  if (!niveau) return [];

  const curriculumIds = matieresApp
    .map((m) => MATIERE_APP_VERS_CURRICULUM[m])
    .filter(Boolean);

  const competences: string[] = [];

  for (const domaine of niveau.domaines) {
    if (curriculumIds.includes(domaine.matiere)) {
      for (const sd of domaine.sousdomaines) {
        competences.push(...sd.exemples);
      }
    }
  }

  return competences;
}

/**
 * Vérifie si une compétence est dans le programme d'une classe donnée.
 */
export function isSkillAllowedForGrade(
  classe: Classe,
  competence: string
): boolean {
  const allSkills = getAllowedSkillsForGrade(
    classe,
    Object.keys(MATIERE_APP_VERS_CURRICULUM)
  );
  const lower = competence.toLowerCase();
  return allSkills.some((s) => s.toLowerCase().includes(lower));
}

/**
 * Construit le bloc d'instructions curriculum à injecter dans le prompt Claude.
 * Filtre les matières demandées par celles autorisées dans la classe.
 */
export function buildExerciseConstraints(
  classe: Classe,
  matieresApp: string[]
): ContraintesCurriculum {
  const niveau = getCurriculumForGrade(classe);

  if (!niveau) {
    // Fallback si classe inconnue
    return {
      classe,
      cycle: "cycle2",
      matieresScolaires: matieresApp,
      competencesAutorisees: [],
      instructionNiveau: `Adapte les exercices au niveau de la classe ${classe}.`,
    };
  }

  const curriculumIds = matieresApp
    .map((m) => MATIERE_APP_VERS_CURRICULUM[m])
    .filter(Boolean);

  // Domaines filtrés selon les matières demandées
  const domainesFiltres: DomaineCurriculum[] = niveau.domaines.filter((d) =>
    curriculumIds.includes(d.matiere)
  );

  // Construction de la liste de compétences avec sous-domaine
  const lignesCompetences: string[] = [];
  for (const domaine of domainesFiltres) {
    for (const sd of domaine.sousdomaines) {
      const exemplesConcis = sd.exemples.slice(0, 5).join(", ");
      lignesCompetences.push(`  [${domaine.label} — ${sd.label}] : ${exemplesConcis}`);
    }
  }

  // Anglais : notions générales par cycle si demandé
  if (matieresApp.includes("Anglais")) {
    const notionsAnglais =
      niveau.cycle === "cycle2"
        ? "salutations, couleurs, chiffres, animaux, vocabulaire de la classe, phrases simples (I am, I have, I like)"
        : "présent simple, passé simple, vocabulaire thématique (famille, ville, nature), description de personnes et d'objets";
    lignesCompetences.push(`  [Anglais] : ${notionsAnglais}`);
  }

  const matieresScolaires = domainesFiltres.map((d) => d.label);
  if (matieresApp.includes("Anglais")) matieresScolaires.push("Anglais");

  const instructionNiveau = [
    `CONTRAINTES PROGRAMME OFFICIEL — Classe : ${classe} (${niveau.cycle === "cycle2" ? "Cycle 2" : "Cycle 3"})`,
    `Tu dois impérativement te limiter aux notions du programme officiel de ${classe}.`,
    `NE GÉNÈRE PAS de contenu hors du niveau : ni trop simple (classe inférieure), ni trop avancé (collège).`,
    `Notions autorisées selon les matières demandées :`,
    ...lignesCompetences,
    `Respecte ces notions à la lettre. Chaque exercice doit cibler une compétence listée ci-dessus.`,
  ].join("\n");

  return {
    classe,
    cycle: niveau.cycle,
    matieresScolaires,
    competencesAutorisees: domainesFiltres.flatMap((d) =>
      d.sousdomaines.flatMap((sd) => sd.exemples)
    ),
    instructionNiveau,
  };
}
