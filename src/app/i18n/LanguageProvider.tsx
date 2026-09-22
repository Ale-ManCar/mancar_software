"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { isLocale, translate, type Dictionary, type Locale } from "./languages";

const loaders = {
  en: () => import("./en.json").then((module) => module.default),
  zh: () => import("./zh.json").then((module) => module.default),
  hi: () => import("./hi.json").then((module) => module.default),
  ar: () => import("./ar.json").then((module) => module.default),
};
const storageKey = "mancar_language";
type LanguageContextValue = {
  locale: Locale;
  pending: boolean;
  error: boolean;
  setLocale: (locale: Locale) => void;
  t: (text: string) => string;
};
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ locale: Locale; dictionary: Dictionary }>({ locale: "es", dictionary: {} });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const request = useRef(0);

  async function setLocale(locale: Locale, persist = true) {
    const current = ++request.current;
    setPending(true);
    setError(false);
    try {
      const dictionary = locale === "es" ? {} : await loaders[locale]();
      if (current !== request.current) return;
      document.documentElement.lang = locale === "zh" ? "zh-Hans" : locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      setState({ locale, dictionary });
      if (persist) {
        try { window.localStorage.setItem(storageKey, locale); } catch { /* Selection still works when storage is unavailable. */ }
      }
    } catch {
      if (current === request.current) setError(true);
    } finally {
      if (current === request.current) setPending(false);
    }
  }

  useEffect(() => {
    const pendingRequest = request;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (isLocale(saved) && saved !== "es") void setLocale(saved, false);
    } catch { /* Spanish remains the default. */ }
    return () => { pendingRequest.current++; };
  }, []);

  return <LanguageContext.Provider value={{ locale: state.locale, pending, error, setLocale, t: (text) => translate(text, state.dictionary) }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider is required.");
  return context;
}
