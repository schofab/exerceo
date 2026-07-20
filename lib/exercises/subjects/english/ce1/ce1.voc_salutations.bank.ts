import { cloneDefaultAdaptations } from '../../../core/exercise-core.adaptations';
import type { EnglishExercise } from '../english.types';

export const englishCe1VocSalutationsExercises: EnglishExercise[] = [
  {
    id: 'en-ce1-voc-012',
    subject: 'anglais',
    title: 'Salutation : please',
    schoolClass: 'CE1',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'salutations',
    format: 'qcm',
    instructions: 'Que veut dire ce mot anglais ?',
    prompt: 'Que veut dire « please » en français ?',
    options: [
      { id: 'a', text: 'Merci', isCorrect: false },
      { id: 'b', text: "S'il te plaît", isCorrect: true },
      { id: 'c', text: 'Pardon', isCorrect: false },
    ],
    correctAnswer: "S'il te plaît",
    explanation: "« Please » veut dire s'il te plaît en français.",
    hint: 'On l\'utilise pour faire une demande poliment.',
    tags: ['ce1', 'anglais', 'vocabulaire', 'salutations', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
];
