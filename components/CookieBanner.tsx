"use client";

import { useState, useEffect } from "react";
import {
  COOKIE_CONSENT_KEY,
  COOKIE_CONSENT_EVENT,
  getStoredConsent,
  type ConsentValue,
} from "@/lib/cookies";

/**
 * Bandeau de consentement cookies conforme RGPD / recommandations CNIL.
 *
 * - Affiché au premier chargement si aucun choix n'a été enregistré.
 * - Accepter / Refuser avec même accessibilité.
 * - Un bouton "Cookies" flottant permet de rouvrir les préférences à tout moment.
 * - Si le choix change (ex : refus après acceptation), la page est rechargée
 *   pour garantir que les scripts d'audience ne sont plus actifs.
 */
export default function CookieBanner() {
  // undefined = hydratation en cours (ne pas afficher pour éviter le flash SSR)
  // null = aucun choix enregistré → afficher le bandeau
  // "granted" | "denied" = choix déjà fait → afficher le bouton "Cookies"
  const [consent, setConsent] = useState<ConsentValue | null | undefined>(
    undefined
  );

  useEffect(() => {
    setConsent(getStoredConsent());
  }, []);

  function handleAccept() {
    const previous = getStoredConsent();
    localStorage.setItem(COOKIE_CONSENT_KEY, "granted");
    if (previous === "denied") {
      // Précédemment refusé → rechargement pour initialiser GA proprement
      window.location.reload();
    } else {
      setConsent("granted");
      window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    }
  }

  function handleDeny() {
    const previous = getStoredConsent();
    localStorage.setItem(COOKIE_CONSENT_KEY, "denied");
    if (previous === "granted") {
      // Précédemment accepté → rechargement pour stopper GA
      window.location.reload();
    } else {
      setConsent("denied");
    }
  }

  function reopen() {
    setConsent(null);
  }

  // Pendant l'hydratation, ne rien rendre pour éviter le mismatch SSR/client
  if (consent === undefined) return null;

  return (
    <>
      {/* ── Bandeau principal ── */}
      {consent === null && (
        <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4 sm:pb-5">
          <div
            className="max-w-2xl mx-auto rounded-2xl shadow-lg border border-gray-100 p-5"
            role="dialog"
            aria-label="Gestion des cookies"
            style={{ backgroundColor: "#ffffff" }}
          >
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Ce site utilise des outils de mesure d'audience susceptibles de
              déposer des cookies, notamment des cookies Google, afin de mieux
              comprendre la fréquentation et d'améliorer les contenus proposés.{" "}
              <a
                href="/politique-de-confidentialite"
                className="underline hover:opacity-70 transition-opacity"
                style={{ color: "#748bf7" }}
              >
                En savoir plus
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleDeny}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold border-2 hover:bg-gray-50 transition-colors"
                style={{ color: "#071453", borderColor: "#e0e7ff" }}
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#748bf7" }}
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Bouton "Cookies" — rouvre les préférences à tout moment ── */}
      {consent !== null && (
        <div className="fixed bottom-3 right-3 z-40">
          <button
            onClick={reopen}
            className="text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors"
            style={{ color: "#9298c8" }}
            aria-label="Gérer mes préférences cookies"
          >
            Cookies
          </button>
        </div>
      )}
    </>
  );
}
