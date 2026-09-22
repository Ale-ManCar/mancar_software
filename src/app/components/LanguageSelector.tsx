"use client";

import { useLanguage } from "../i18n/LanguageProvider";
import { isLocale, languages } from "../i18n/languages";

export default function LanguageSelector() {
  const { locale, setLocale, pending, error, t } = useLanguage();
  const current = languages.find((language) => language.code === locale)!;
  return (
    <div className="relative shrink-0">
      <label className="flex min-h-11 items-center gap-1 rounded-full border border-gray-300 bg-white px-2 text-sm font-bold text-gray-800 focus-within:ring-2 focus-within:ring-primary-600">
        <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6h14M5 18h14"/></svg>
        <span className="sr-only">{current.label}</span>
        <select aria-label={current.label} aria-busy={pending} value={locale} onChange={(event) => { if (isLocale(event.target.value)) setLocale(event.target.value); }} className="min-h-10 max-w-24 cursor-pointer bg-transparent text-sm outline-none" dir="ltr">
          {languages.map((language) => <option key={language.code} value={language.code} lang={language.code}>{language.name}</option>)}
        </select>
      </label>
      <span role="status" className={error ? "absolute end-0 top-full mt-2 w-64 rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-800 shadow-lg" : "sr-only"}>
        {error ? t("No se pudo cambiar el idioma. Inténtalo de nuevo.") : pending ? t("Cargando idioma…") : ""}
      </span>
    </div>
  );
}
