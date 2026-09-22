"use client";

import Image, { type ImageProps } from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function LocalizedImage({ alt, ...props }: ImageProps) {
  const { t } = useLanguage();
  return <Image {...props} alt={t(alt)} />;
}
