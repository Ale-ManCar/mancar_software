export const languages = [
  { code: "es", name: "Español", label: "Idioma" },
  { code: "en", name: "English", label: "Language" },
  { code: "zh", name: "中文", label: "语言" },
  { code: "hi", name: "हिन्दी", label: "भाषा" },
  { code: "ar", name: "العربية", label: "اللغة" },
] as const;

export type Locale = (typeof languages)[number]["code"];
export type Dictionary = Record<string, string>;
export function isLocale(value: unknown): value is Locale {
  return languages.some((language) => language.code === value);
}

export function translate(text: string, dictionary: Dictionary): string {
  const key = text.replace(/\s+/g, " ").trim();
  const result = dictionary[key];
  if (!result) return text;
  return text.replace(/\S[\s\S]*\S|\S/, () => result);
}
