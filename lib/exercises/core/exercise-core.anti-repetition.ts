/**
 * lib/exercises/core/exercise-core.anti-repetition.ts
 *
 * Tri anti-répétition pour les pools d'exercices.
 *
 * Principe : trier les candidats avant la sélection afin de reléguer
 * en fin de pool les exercices trop proches de l'historique récent.
 * Les sélecteurs utilisent .find() sur le pool trié → ils choisissent
 * naturellement les exercices les moins pénalisés.
 *
 * Pénalités appliquées par exercice :
 *   +1000 si l'id exact a été vu (évitement fort)
 *   +30 × N si la notion (subskill) a été vue N fois
 *   +10 × N si le sous-domaine (skill) a été vu N fois
 *
 * Le tri est stable sur les égalités (ordre du shuffle amont préservé).
 */

import type { Exercise } from '../types';

/**
 * Trie un pool d'exercices pour réduire la répétition perçue.
 *
 * @param pool     Pool mélangé à trier (n'est pas muté)
 * @param seenIds  IDs d'exercices servis récemment (toutes sessions confondues)
 * @param bank     Banque complète permettant de retrouver notion et sous_domaine de chaque seenId
 * @returns        Nouveau tableau trié — score le plus bas en premier (meilleurs candidats)
 */
export function antiRepeatSort(
  pool: Exercise[],
  seenIds: string[],
  bank: Exercise[],
): Exercise[] {
  if (seenIds.length === 0) return pool;

  const seenIdSet = new Set(seenIds);

  // Index de la banque pour retrouver rapidement sous_domaine et notion
  const bankIndex = new Map<string, Exercise>(bank.map((e) => [e.id, e]));

  // Compter combien de fois chaque sous_domaine et notion ont été servis
  const subdomainCount = new Map<string, number>();
  const notionCount    = new Map<string, number>();

  for (const id of seenIds) {
    const ex = bankIndex.get(id);
    if (!ex) continue;
    subdomainCount.set(ex.sous_domaine, (subdomainCount.get(ex.sous_domaine) ?? 0) + 1);
    notionCount.set(ex.notion,          (notionCount.get(ex.notion)          ?? 0) + 1);
  }

  return [...pool].sort((a, b) => {
    const penaltyA =
      (seenIdSet.has(a.id)              ? 1000 : 0) +
      (notionCount.get(a.notion)    ?? 0) * 30  +
      (subdomainCount.get(a.sous_domaine) ?? 0) * 10;

    const penaltyB =
      (seenIdSet.has(b.id)              ? 1000 : 0) +
      (notionCount.get(b.notion)    ?? 0) * 30  +
      (subdomainCount.get(b.sous_domaine) ?? 0) * 10;

    return penaltyA - penaltyB; // croissant : moindre pénalité en premier
  });
}
