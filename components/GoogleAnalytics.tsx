"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import {
  COOKIE_CONSENT_EVENT,
  getStoredConsent,
} from "@/lib/cookies";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Charge Google Analytics uniquement si :
 *   1. La variable d'environnement NEXT_PUBLIC_GA_ID est définie.
 *   2. L'utilisateur a accepté les cookies de mesure d'audience.
 *
 * Si GA est actuellement injecté via le tableau de bord Vercel
 * (Settings → Scripts / Integrations), ce composant seul ne suffit pas
 * à le bloquer. Il faut désactiver l'injection Vercel et utiliser
 * uniquement ce composant.
 */
export default function GoogleAnalytics() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Consentement au chargement
    setActive(getStoredConsent() === "granted");

    // Consentement donné en temps réel (premier clic "Accepter")
    function onConsentUpdate() {
      setActive(getStoredConsent() === "granted");
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentUpdate);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentUpdate);
  }, []);

  if (!GA_ID || !active) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
