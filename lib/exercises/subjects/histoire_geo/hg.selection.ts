import type { HgExercise } from './hg.types';
import { hgExercises } from './hg.bank';

export function selectHgExercises(
  schoolClass: string,
  skills?: string[],
  count?: number,
): HgExercise[] {
  let pool = hgExercises.filter((e) => e.schoolClass === schoolClass);

  if (skills && skills.length > 0) {
    pool = pool.filter((e) => skills.includes(e.skill));
  }

  if (count !== undefined && count > 0) {
    return pool.slice(0, count);
  }

  return pool;
}
