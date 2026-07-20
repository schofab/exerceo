import { cloneDefaultAdaptations } from '../../../core/exercise-core.adaptations';
import type { EnglishExercise } from '../english.types';

export const englishCm2VocSalutationsExercises: EnglishExercise[] = [
  {
    id: 'en-cm2-voc-001',
    subject: 'anglais',
    title: 'Phrase : Where are you from?',
    schoolClass: 'CM2',
    generalLevel: 'intermediate',
    skill: 'vocabulaire',
    subskill: 'salutations',
    format: 'qcm',
    instructions: 'Traduis cette question.',
    prompt: 'Que veut dire « Where are you from? » en français ?',
    options: [
      { id: 'a', text: 'Où vas-tu ?', isCorrect: false },
      { id: 'b', text: "D'où viens-tu ?", isCorrect: true },
      { id: 'c', text: "Comment t'appelles-tu ?", isCorrect: false },
    ],
    correctAnswer: "D'où viens-tu ?",
    explanation: "« Where are you from? » = D'où viens-tu ? / De quel pays es-tu ?",
    hint: "« Where from » = d'où.",
    tags: ['cm2', 'anglais', 'vocabulaire', 'salutations', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
];
