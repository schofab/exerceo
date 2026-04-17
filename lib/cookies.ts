export const COOKIE_CONSENT_KEY = "cookie_consent";
export const COOKIE_CONSENT_EVENT = "cookie_consent_update";

export type ConsentValue = "granted" | "denied";

/**
 * Lit le consentement cookies stocké en localStorage.
 * Retourne null si aucun choix n'a encore été fait.
 * Retourne undefined côté serveur (pas de window).
 */
export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const val = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (val === "granted" || val === "denied") return val;
  return null;
}
