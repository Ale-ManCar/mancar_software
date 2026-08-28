import type { Metadata } from "next";

export const siteUrl =
  process.env.GITHUB_PAGES === "true"
    ? "https://ale-mancar.github.io/mancar_software"
    : "https://mancarsoftware.com";

export const defaultOgImage = {
  url: "/brand/og-image.png",
  width: 1200,
  height: 630,
  alt: "Mancar Software - desarrollo web y sistemas para negocios",
};

type PageMetadataInput = {
  title: string;
  browserTitle?: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  browserTitle,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const socialTitle = title.includes("Mancar Software")
    ? title
    : `${title} | Mancar Software`;
  const pageTitle = browserTitle
    ? browserTitle.includes("Mancar Software")
      ? browserTitle
      : `${browserTitle} | Mancar Software`
    : socialTitle;

  return {
    title: {
      absolute: pageTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      type,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}
