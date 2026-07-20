import { cloneDefaultAdaptations } from '../../../core/exercise-core.adaptations';
import type { DecouverteExercise } from '../decouverte_du_monde.types';

const A = cloneDefaultAdaptations();

export const ddmCe2TempsExercises: DecouverteExercise[] = [

  // CE2 · temps · jours
  {
    id: 'ddm-ce2-tem-001',
    subject: 'decouverte_du_monde',
    title: 'Jours sans école',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'temps',
    subskill: 'jours',
    format: 'qcm',
    instructions: 'Choisis les deux jours sans école.',
    prompt: 'Quels sont les deux jours de la semaine où il n\'y a pas école ?',
    options: [
      { id: 'a', text: 'lundi et mardi', isCorrect: false },
      { id: 'b', text: 'vendredi et samedi', isCorrect: false },
      { id: 'c', text: 'samedi et dimanche', isCorrect: true },
      { id: 'd', text: 'mercredi et jeudi', isCorrect: false },
    ],
    correctAnswer: 'samedi et dimanche',
    explanation: 'Le week-end (samedi + dimanche) est sans école. C\'est 2 jours sur 7.',
    hint: 'Ce sont les deux derniers jours de la semaine.',
    estimatedMinutes: 1,
    adaptations: A,
  },

  // CE2 · temps · avant_apres
  {
    id: 'ddm-ce2-tem-002',
    subject: 'decouverte_du_monde',
    title: 'Le goûter',
    schoolClass: 'CE2',
    generalLevel: 'intermediate',
    skill: 'temps',
    subskill: 'avant_apres',
    format: 'qcm',
    instructions: 'Choisis la bonne réponse.',
    prompt: 'Le goûter se mange…',
    options: [
      { id: 'a', text: 'le matin avant l\'école', isCorrect: false },
      { id: 'b', text: 'à midi', isCorrect: false },
      { id: 'c', text: 'l\'après-midi, entre le déjeuner et le dîner', isCorrect: true },
      { id: 'd', text: 'la nuit', isCorrect: false },
    ],
    correctAnswer: 'l\'après-midi, entre le déjeuner et le dîner',
    explanation: 'Le goûter est un petit repas de l\'après-midi, souvent vers 16h au retour de l\'école.',
    hint: 'Biscuits, fruit, pain au chocolat… c\'est après l\'école.',
    estimatedMinutes: 1,
    adaptations: A,
  },
];
