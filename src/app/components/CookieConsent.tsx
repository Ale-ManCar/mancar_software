"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

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
  return "pending";
}

export default function CookieConsent() {
  const choice = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerConsentSnapshot);

  const saveChoice = (value: "accepted" | "declined") => {
    window.localStorage.setItem(consentKey, value);
    window.dispatchEvent(
      new CustomEvent(consentEvent, {
        detail: { analytics: value === "accepted" },
      }),
    );
  };

  if (choice) return null;

  return (
    <section
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-gray-200 bg-white/95 px-4 py-4 shadow-2xl shadow-gray-950/15 backdrop-blur-xl"
    >
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-base font-extrabold text-gray-950">Uso de cookies y analítica</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Usamos cookies necesarias para el funcionamiento del sitio y, si aceptas, Google Analytics para entender visitas y mejorar la experiencia. Puedes revisar más detalles en la{" "}
            <Link href="/politica-de-cookies" className="font-bold text-primary-800 underline underline-offset-2 hover:text-primary-950">
              Política de cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => saveChoice("declined")}
            className="inline-flex min-h-11 justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-extrabold text-gray-700 transition hover:border-gray-300 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          >
            Rechazar analítica
          </button>
          <button
            type="button"
            onClick={() => saveChoice("accepted")}
            className="inline-flex min-h-11 justify-center rounded-full bg-gray-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          >
            Aceptar
          </button>
        </div>
      </div>
    </section>
  );
}
