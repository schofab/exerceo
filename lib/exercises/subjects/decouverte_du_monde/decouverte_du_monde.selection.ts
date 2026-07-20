import type { DecouverteExercise } from './decouverte_du_monde.types';
import { decouverteDuMondeExercises } from './decouverte_du_monde.bank';

export function selectDdmExercises(
  schoolClass: string,
  skills?: string[],
  count?: number,
): DecouverteExercise[] {
  let pool = decouverteDuMondeExercises.filter(
    (e) => e.schoolClass === schoolClass,
  );

  if (skills && skills.length > 0) {
    pool = pool.filter((e) => skills.includes(e.skill));
  }

  if (count !== undefined && count > 0) {
    return pool.slice(0, count);
  }

  return pool;
}
