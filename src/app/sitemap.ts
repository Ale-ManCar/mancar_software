import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/sobre-nosotros",
  "/casos",
  "/contacto",
  "/aplicativos-empresariales",
  "/soporte",
  "/soluciones/acompanamiento-continuo",
  "/soluciones/desarrollo-sistemas",
  "/soluciones/diseno-web",
  "/soluciones/tiendas-virtuales",
  "/soluciones/mantenimiento-soporte",
  "/soluciones/optimizacion-consultoria",
  "/casos/odontocare",
  "/casos/vetcare-pro-lan",
  "/casos/casa-nativa",
  "/casos/nova-store",
  "/casos/alma-vet",
  "/etica-y-conducta",
  "/politica-de-privacidad",
  "/politica-de-cookies",
  "/politica-de-seguridad",
  "/aviso-legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.GITHUB_PAGES === "true"
    ? "https://ale-mancar.github.io/mancar_software"
    : "https://mancarsoftware.com";

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
