"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

const consentKey = "mancar_cookie_consent";
const consentEvent = "mancar:cookie-consent";

function subscribeToConsent(callback: () => void) {
  window.addEventListener(consentEvent, callback);
  return () => window.removeEventListener(consentEvent, callback);
}

function getConsentSnapshot() {
  return window.localStorage.getItem(consentKey);
}

function getServerConsentSnapshot() {
  return null;
}

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerConsentSnapshot);

  if (!gaId || consent !== "accepted") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="mancar-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
          window.addEventListener('mancar:analytics', function(event) {
            if (!event.detail || !event.detail.event) return;
            var payload = Object.assign({}, event.detail);
            var eventName = payload.event;
            delete payload.event;
            gtag('event', eventName, payload);
          });
        `}
      </Script>
    </>
  );
}
