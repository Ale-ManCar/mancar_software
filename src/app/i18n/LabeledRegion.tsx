"use client";

import type { HTMLAttributes } from "react";
import { useLanguage } from "./LanguageProvider";

type Props = HTMLAttributes<HTMLElement> & {
  as: "ul" | "div";
  label: string;
  name: string;
};

export default function LabeledRegion({ as: Tag, label, name, ...props }: Props) {
  const { t } = useLanguage();
  return <Tag {...props} aria-label={`${t(label)} ${t(name)}`} />;
}
