import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", heading: /Webs y sistemas/ },
  { path: "/casos", heading: /Proyectos que convierten/ },
  { path: "/sobre-nosotros", heading: /Tecnología con criterio/ },
  { path: "/etica-y-conducta", heading: /La confianza también se diseña/ },
  { path: "/politica-de-seguridad", heading: /Protección de información/ },
  { path: "/politica-de-cookies", heading: /Medición clara/ },
  { path: "/soluciones/diseno-web", heading: /Sitios web rápidos/ },
  { path: "/soluciones/desarrollo-sistemas", heading: /Software diseñado/ },
  { path: "/soluciones/tiendas-virtuales", heading: /Tiendas virtuales listas/ },
  { path: "/soluciones/mantenimiento-soporte", heading: /Mantenimiento para que/ },
  { path: "/soluciones/optimizacion-consultoria", heading: /Mejoras concretas/ },
  { path: "/soluciones/acompanamiento-continuo", heading: /aliado técnico/ },
  { path: "/contacto", heading: /Conversemos sobre tu proyecto/ },
];

test.describe("public pages", () => {
  for (const pageConfig of pages) {
    test(`loads ${pageConfig.path}`, async ({ page }) => {
      await page.goto(pageConfig.path);

      await expect(page.getByRole("heading", { name: pageConfig.heading }).first()).toBeVisible();
    });
  }
});

test("mobile menu opens submenus and locks page scroll", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only menu behavior.");

  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menú" }).click();

  await expect(page.getByText("Mancar Software").first()).toBeVisible();
  await expect
    .poll(() => page.evaluate(() => document.documentElement.style.overflow))
    .toBe("hidden");
  await expect
    .poll(() => page.evaluate(() => document.body.style.overflow))
    .toBe("hidden");

  await page.getByRole("button", { name: "Soluciones" }).click();
  await expect(page.getByRole("link", { name: "Tiendas Virtuales" })).toBeVisible();

  await page.getByRole("link", { name: "Tiendas Virtuales" }).click();
  await expect(page).toHaveURL(/\/soluciones\/tiendas-virtuales/);
});

test("contact form submits in static preview mode", async ({ page }) => {
  await page.goto("/contacto");

  await page.getByLabel("Nombre").fill("Cliente de prueba");
  await page.getByLabel("Email").fill("cliente@example.com");
  await page.getByLabel("Teléfono").fill("+593986951419");
  await page.getByLabel("¿Qué necesitas resolver?").fill("Necesito una web profesional para presentar mis servicios y captar clientes.");
  await page.getByLabel(/Acepto que mis datos/).check();
  await page.getByRole("button", { name: "Solicitar orientación inicial" }).click();

  await expect(page.getByText(/Vista previa activa/)).toBeVisible();
});
