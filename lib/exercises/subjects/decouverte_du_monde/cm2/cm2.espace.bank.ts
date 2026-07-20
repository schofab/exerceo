import { cloneDefaultAdaptations } from '../../../core/exercise-core.adaptations';
import type { DecouverteExercise } from '../decouverte_du_monde.types';

const A = cloneDefaultAdaptations();

export const ddmCm2EspaceExercises: DecouverteExercise[] = [

  // CM2 · espace · paysages
  {
    id: 'ddm-cm2-esp-001',
    subject: 'decouverte_du_monde',
    title: 'Les Pyrénées',
    schoolClass: 'CM2',
    generalLevel: 'advanced',
    skill: 'espace',
    subskill: 'paysages',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Les Pyrénées forment la frontière naturelle entre la France et…',
    options: [
      { id: 'a', text: 'l\'Italie', isCorrect: false },
      { id: 'b', text: 'la Suisse', isCorrect: false },
      { id: 'c', text: 'l\'Espagne', isCorrect: true },
      { id: 'd', text: 'la Belgique', isCorrect: false },
    ],
    correctAnswer: 'l\'Espagne',
    explanation: 'Les Pyrénées séparent la France de l\'Espagne (et d\'Andorre).',
    hint: 'C\'est notre voisin au sud.',
    estimatedMinutes: 1,
    adaptations: A,
  },
  {
    id: 'ddm-cm2-esp-002',
    subject: 'decouverte_du_monde',
    title: 'Une presqu\'île',
    schoolClass: 'CM2',
    generalLevel: 'advanced',
    skill: 'espace',
    subskill: 'paysages',
    format: 'qcm',
    instructions: 'Choisis la bonne définition.',
    prompt: 'Qu\'est-ce qu\'une presqu\'île ?',
    options: [
      { id: 'a', text: 'une île entièrement entourée d\'eau', isCorrect: false },
      { id: 'b', text: 'une terre presque entièrement entourée d\'eau', isCorrect: true },
      { id: 'c', text: 'une petite montagne au bord de la mer', isCorrect: false },
      { id: 'd', text: 'une étendue d\'eau entourée de terres', isCorrect: false },
    ],
    correctAnswer: 'une terre presque entièrement entourée d\'eau',
    explanation: 'Une presqu\'île est reliée au continent par un seul côté (isthme). Ex : la presqu\'île de Quiberon.',
    hint: 'Le mot contient « presque » et « île ».',
    estimatedMinutes: 1,
    adaptations: A,
  },
  {
    id: 'ddm-cm2-esp-003',
    subject: 'decouverte_du_monde',
    title: 'Une colline',
    schoolClass: 'CM2',
    generalLevel: 'advanced',
    skill: 'espace',
    subskill: 'paysages',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Comment appelle-t-on une petite élévation de terrain arrondie, moins haute qu\'une montagne ?',
    options: [
      { id: 'a', text: 'un plateau', isCorrect: false },
      { id: 'b', text: 'un volcan', isCorrect: false },
      { id: 'c', text: 'une colline', isCorrect: true },
      { id: 'd', text: 'une falaise', isCorrect: false },
    ],
    correctAnswer: 'une colline',
    explanation: 'Une colline est une petite élévation arrondie, moins haute et moins abrupte qu\'une montagne.',
    hint: 'C\'est plus petit qu\'une montagne mais plus haut qu\'une plaine.',
    estimatedMinutes: 1,
    adaptations: A,
  },
];
