"use client";

import type { ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";

// A small client boundary keeps page layouts and metadata server-rendered.
export default function Text({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return typeof children === "string" ? t(children) : children;
}
