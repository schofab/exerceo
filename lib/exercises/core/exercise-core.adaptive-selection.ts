/**
 * exercise-core.adaptive-selection.ts
 *
 * Logique de sélection adaptative V1 — rule-based, explicable, sans IA.
 *
 * Usage :
 *   1. Avant `selectWithSkillDiversity` → `sortByAdaptiveCompatibility(pool, needs)`
 *      La sélection gloutonne préférera naturellement les items compatibles.
 *   2. Après sélection → `enforceAdaptiveCaps(selected, fullPool, needs, count)`
 *      Remplace les items en surplus de charge haute par des alternatives compatibles.
 *
 * Backward-compatible : si `needs` est vide (tout à false), aucun effet.
 * Robuste : si `exercise.meta` est absent, l'exercice est traité comme compatible.
 */

import type { SupportNeeds } from '../../types';
import type { Exercise } from '../types';

// ── Plafonds adaptatifs ───────────────────────────────────────────────────────

export interface AdaptiveLimits {
  maxHighText: number;
  maxHighNumeric: number;
  maxHighVisual: number;
}

/**
 * Calcule des plafonds proportionnels à la taille de session.
 * Formule : base = floor(count / 5), min 1.
 *   count=5 → base=0 | count=10 → base=2 | count=15 → base=3 | count=20 → base=4
 * À n=5 : base=0 → tous les items haute-charge sont déplacés, effet perceptible.
 * Un plafond égal à `count` signifie "pas de restriction" (besoin inactif).
 */
export function getAdaptiveLimits(count: number, needs: SupportNeeds): AdaptiveLimits {
  const base = count <= 5 ? 0 : Math.max(1, Math.floor(count / 5));
  return {
    maxHighText:    (needs.dyslexia || needs.dysorthography) ? base : count,
    maxHighNumeric: needs.dyscalculia  ? base  : count,
    maxHighVisual:  needs.dyspraxia    ? base  : count,
  };
}

// ── Score de compatibilité ────────────────────────────────────────────────────

/** Retourne true si au moins un besoin d'adaptation est actif. */
export function hasAnySupportNeed(needs: SupportNeeds): boolean {
  return (
    needs.dyslexia ||
    needs.dysorthography ||
    needs.dyscalculia ||
    needs.dyspraxia ||
    needs.attentionSupport
  );
}

/**
 * Note le niveau de "problème" d'un exercice par rapport au profil.
 *   0   = aucune incompatibilité (idéal ou meta absente)
 *   > 0 = au moins une dimension dépasse une charge haute activée
 *
 * Score intentionnellement simple — pas un moteur de scoring, juste un tri.
 */
function compatibilityScore(exercise: Exercise, needs: SupportNeeds): number {
  const meta = exercise.meta;
  if (!meta) return 0; // absence de meta → compatible par défaut

  let score = 0;
  if ((needs.dyslexia || needs.dysorthography) && meta.textLoad === 'high')    score += 2;
  if (needs.dyscalculia && meta.numericLoad === 'high')                         score += 2;
  if (needs.dyspraxia   && meta.visualLoad  === 'high')                         score += 2;
  if (needs.attentionSupport && meta.guidance === 'open')                        score += 1;
  return score;
}

// ── Tri adaptatif ─────────────────────────────────────────────────────────────

/**
 * Réordonne le pool : les exercices les plus compatibles avec le profil passent
 * en premier. Tri stable — les exercices de même score gardent leur ordre d'origine.
 *
 * Retourne le pool inchangé si aucun besoin n'est actif (backward-compatible).
 */
export function sortByAdaptiveCompatibility(
  pool: Exercise[],
  needs: SupportNeeds,
): Exercise[] {
  if (!hasAnySupportNeed(needs)) return pool;
  return [...pool].sort(
    (a, b) => compatibilityScore(a, needs) - compatibilityScore(b, needs),
  );
}

// ── Helpers de remplacement ───────────────────────────────────────────────────

/**
 * Vérifie si l'ajout d'un candidat dans `kept` dépasserait un cap actif,
 * compte tenu des compteurs courants.
 */
function wouldViolateAnyCap(
  candidate: Exercise,
  limits: AdaptiveLimits,
  currentTextHigh: number,
  currentNumericHigh: number,
  currentVisualHigh: number,
): boolean {
  const meta = candidate.meta;
  if (!meta) return false;
  if (meta.textLoad    === 'high' && currentTextHigh    >= limits.maxHighText)    return true;
  if (meta.numericLoad === 'high' && currentNumericHigh >= limits.maxHighNumeric) return true;
  if (meta.visualLoad  === 'high' && currentVisualHigh  >= limits.maxHighVisual)  return true;
  return false;
}

/**
 * Compte le nombre total de dimensions à charge `high` sur un exercice.
 * Zéro = exercice neutre sur toutes les dimensions de charge.
 */
function countHighDimensions(ex: Exercise): number {
  const meta = ex.meta;
  if (!meta) return 0;
  return (meta.textLoad    === 'high' ? 1 : 0)
       + (meta.numericLoad === 'high' ? 1 : 0)
       + (meta.visualLoad  === 'high' ? 1 : 0);
}

// ── Enforcement des plafonds post-sélection ───────────────────────────────────

/**
 * Après la sélection gloutonne, vérifie et corrige les dépassements de plafonds.
 *
 * Phase 1 — Déplacement : les items qui dépassent un cap sont mis de côté.
 * Phase 2 — Remplacement en 3 niveaux :
 *   Niveau 1 : candidat sans aucune charge haute (remplace sans dégrader)
 *   Niveau 2 : candidat avec charges hautes mais respectant tous les caps actifs
 *   Niveau 3 : dernier recours — réinjection des déplacés pour garantir `count`
 *
 * Garanties :
 *   - Retourne toujours exactement `count` exercices si le pool le permet.
 *   - N'échoue jamais si meta est absent sur un exercice.
 *   - Sans effet si aucun besoin n'est actif.
 *   - Un remplacement ne dégrade pas une dimension non-cappée quand un candidat
 *     neutre existe (c'est le but des niveaux 1 et 2).
 */
export function enforceAdaptiveCaps(
  selected: Exercise[],
  fullPool: Exercise[],
  needs: SupportNeeds,
  count: number,
): Exercise[] {
  if (!hasAnySupportNeed(needs)) return selected;

  const limits = getAdaptiveLimits(count, needs);
  let textHigh    = 0;
  let numericHigh = 0;
  let visualHigh  = 0;

  const kept: Exercise[]      = [];
  const displaced: Exercise[] = [];

  // ── Phase 1 : déplacement des items en dépassement de cap ────────────────────
  for (const ex of selected) {
    const meta = ex.meta;
    let overcap = false;

    if      (meta?.textLoad    === 'high' && textHigh    >= limits.maxHighText)    overcap = true;
    else if (meta?.numericLoad === 'high' && numericHigh >= limits.maxHighNumeric) overcap = true;
    else if (meta?.visualLoad  === 'high' && visualHigh  >= limits.maxHighVisual)  overcap = true;

    if (overcap) {
      displaced.push(ex);
    } else {
      if (meta?.textLoad    === 'high') textHigh++;
      if (meta?.numericLoad === 'high') numericHigh++;
      if (meta?.visualLoad  === 'high') visualHigh++;
      kept.push(ex);
    }
  }

  if (displaced.length === 0) return selected; // plafonds respectés, rien à faire

  // ── Phase 2 : remplacement en niveaux ────────────────────────────────────────
  //
  // Les candidats sont triés par compatibilité adaptative (items problématiques en
  // dernier). Au sein de chaque niveau, l'ordre adaptatif est préservé.
  const selectedIds = new Set(selected.map((e) => e.id));
  const candidatePool = sortByAdaptiveCompatibility(
    fullPool.filter((e) => !selectedIds.has(e.id)),
    needs,
  );

  // Niveau 1 — aucune charge haute dans aucune dimension (remplaçants neutres).
  // Ces items ne peuvent pas dégrader une dimension non protégée par un cap.
  const tier1 = candidatePool.filter((c) => countHighDimensions(c) === 0);

  // Niveau 2 — au moins une charge haute, mais respectent les caps actifs.
  // La vérification est faite dynamiquement ci-dessous (compteurs évoluent).
  const tier2 = candidatePool.filter((c) => countHighDimensions(c) > 0);

  // Remplir depuis le niveau 1 (items neutres — pas de suivi de compteur nécessaire)
  for (const alt of tier1) {
    if (kept.length >= count) break;
    kept.push(alt);
    // countHighDimensions(alt) === 0 → les compteurs high restent inchangés
  }

  // Remplir depuis le niveau 2 (vérification de cap dynamique)
  for (const alt of tier2) {
    if (kept.length >= count) break;
    if (wouldViolateAnyCap(alt, limits, textHigh, numericHigh, visualHigh)) continue;
    if (alt.meta?.textLoad    === 'high') textHigh++;
    if (alt.meta?.numericLoad === 'high') numericHigh++;
    if (alt.meta?.visualLoad  === 'high') visualHigh++;
    kept.push(alt);
  }

  // Niveau 3 — dernier recours : réinjecter les déplacés plutôt que rendre une
  // session tronquée. Clairement identifié comme sécurité de complétude.
  for (const d of displaced) {
    if (kept.length >= count) break;
    kept.push(d);
  }

  return kept.slice(0, count);
}
