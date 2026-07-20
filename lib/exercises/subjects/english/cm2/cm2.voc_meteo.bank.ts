import { cloneDefaultAdaptations } from '../../../core/exercise-core.adaptations';
import type { EnglishExercise } from '../english.types';

export const englishCm2VocMeteoExercises: EnglishExercise[] = [
  {
    id: 'en-cm2-voc-004',
    subject: 'anglais',
    title: 'Météo : It is snowing',
    schoolClass: 'CM2',
    generalLevel: 'beginner',
    skill: 'vocabulaire',
    subskill: 'meteo',
    format: 'qcm',
    instructions: 'Traduis cette phrase météo.',
    prompt: 'Que veut dire « It is snowing » en français ?',
    options: [
      { id: 'a', text: 'Il pleut.', isCorrect: false },
      { id: 'b', text: 'Il neige.', isCorrect: true },
      { id: 'c', text: 'Il y a du brouillard.', isCorrect: false },
    ],
    correctAnswer: 'Il neige.',
    explanation: '« Snow » = neige. « It is snowing » = Il neige.',
    hint: '« Snow » = la neige.',
    tags: ['cm2', 'anglais', 'vocabulaire', 'meteo', 'qcm'],
    estimatedMinutes: 2,
    adaptations: cloneDefaultAdaptations(),
  },
];
