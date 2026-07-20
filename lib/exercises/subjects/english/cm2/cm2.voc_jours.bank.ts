import { cloneDefaultAdaptations } from '../../../core/exercise-core.adaptations';
import type { EnglishExercise } from '../english.types';

export const englishCm2VocJoursExercises: EnglishExercise[] = [
  {
    id: 'en-cm2-voc-005',
    subject: 'anglais',
    title: 'Phrase : Today is Monday',
    schoolClass: 'CM2',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'jours',
    format: 'qcm',
    instructions: 'Traduis cette phrase.',
    prompt: 'Que veut dire « Today is Monday » en français ?',
    options: [
      { id: 'a', text: "Demain c'est lundi.", isCorrect: false },
      { id: 'b', text: "Aujourd'hui c'est lundi.", isCorrect: true },
      { id: 'c', text: "Hier c'était lundi.", isCorrect: false },
    ],
    correctAnswer: "Aujourd'hui c'est lundi.",
    explanation: "« Today » = aujourd'hui. « Monday » = lundi.",
    hint: "« Today » = aujourd'hui.",
    tags: ['cm2', 'anglais', 'vocabulaire', 'jours', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
];
