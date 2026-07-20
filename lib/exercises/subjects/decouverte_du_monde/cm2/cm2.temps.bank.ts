import { cloneDefaultAdaptations } from '../../../core/exercise-core.adaptations';
import type { DecouverteExercise } from '../decouverte_du_monde.types';

const A = cloneDefaultAdaptations();

export const ddmCm2TempsExercises: DecouverteExercise[] = [

  // CM2 · temps · saisons
  {
    id: 'ddm-cm2-tem-001',
    subject: 'decouverte_du_monde',
    title: 'Jours dans une année',
    schoolClass: 'CM2',
    generalLevel: 'advanced',
    skill: 'temps',
    subskill: 'saisons',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Combien y a-t-il de jours dans une année ordinaire ?',
    options: [
      { id: 'a', text: '360', isCorrect: false },
      { id: 'b', text: '364', isCorrect: false },
      { id: 'c', text: '365', isCorrect: true },
      { id: 'd', text: '366', isCorrect: false },
    ],
    correctAnswer: '365',
    explanation: 'Une année ordinaire comporte 365 jours. Une année bissextile en a 366.',
    hint: '52 semaines et 1 jour.',
    estimatedMinutes: 1,
    adaptations: A,
  },

  // CM2 · temps · mois
  {
    id: 'ddm-cm2-tem-002',
    subject: 'decouverte_du_monde',
    title: 'Année bissextile',
    schoolClass: 'CM2',
    generalLevel: 'advanced',
    skill: 'temps',
    subskill: 'mois',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Combien de jours y a-t-il dans une année bissextile ?',
    options: [
      { id: 'a', text: '364', isCorrect: false },
      { id: 'b', text: '365', isCorrect: false },
      { id: 'c', text: '366', isCorrect: true },
      { id: 'd', text: '367', isCorrect: false },
    ],
    correctAnswer: '366',
    explanation: 'Une année bissextile a 366 jours : le mois de février passe de 28 à 29 jours.',
    hint: 'Le mois de février a un jour de plus.',
    estimatedMinutes: 1,
    adaptations: A,
  },

  // CM2 · temps · avant_apres
  {
    id: 'ddm-cm2-tem-003',
    subject: 'decouverte_du_monde',
    title: 'Un siècle',
    schoolClass: 'CM2',
    generalLevel: 'advanced',
    skill: 'temps',
    subskill: 'avant_apres',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Combien d\'années y a-t-il dans un siècle ?',
    options: [
      { id: 'a', text: '10 ans', isCorrect: false },
      { id: 'b', text: '50 ans', isCorrect: false },
      { id: 'c', text: '100 ans', isCorrect: true },
      { id: 'd', text: '1 000 ans', isCorrect: false },
    ],
    correctAnswer: '100 ans',
    explanation: 'Un siècle dure 100 ans. 10 ans = une décennie. 1 000 ans = un millénaire.',
    hint: 'Le mot siècle vient du latin « saeculum ».',
    estimatedMinutes: 1,
    adaptations: A,
  },
];
