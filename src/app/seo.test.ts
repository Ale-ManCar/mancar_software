import { describe, expect, it } from "vitest";
import { createPageMetadata, defaultOgImage } from "./seo";

describe("createPageMetadata", () => {
  it("adds Mancar Software to browser and social titles when missing", () => {
    const metadata = createPageMetadata({
      title: "Diseño web profesional",
      browserTitle: "Diseño web",
      description: "Sitios web rápidos para negocios en crecimiento.",
      path: "/soluciones/diseno-web",
    });

    expect(metadata.title).toEqual({ absolute: "Diseño web | Mancar Software" });
    expect(metadata.openGraph?.title).toBe("Diseño web profesional | Mancar Software");
    expect(metadata.twitter?.title).toBe("Diseño web profesional | Mancar Software");
  });

  it("uses the shared Open Graph image", () => {
    const metadata = createPageMetadata({
      title: "Contacto",
      description: "Solicita orientación inicial.",
      path: "/contacto",
    });

    expect(metadata.openGraph?.images).toEqual([defaultOgImage]);
    expect(metadata.twitter?.images).toEqual([defaultOgImage.url]);
  });
});
