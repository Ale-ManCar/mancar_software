import { expect, test } from "@playwright/test";

const locales = [
  { code: "en", lang: "en", heading: "Websites and systems that help you sell, organize and grow.", contact: "Let's talk about your project" },
  { code: "zh", lang: "zh-Hans", heading: "助您销售、管理和成长的网站与系统。", contact: "聊聊您的项目" },
  { code: "hi", lang: "hi", heading: "वेबसाइट और सिस्टम जो बिक्री, प्रबंधन और विकास में मदद करें।", contact: "अपने प्रोजेक्ट पर बात करें" },
  { code: "ar", lang: "ar", heading: "مواقع وأنظمة تساعدك على البيع والتنظيم والنمو.", contact: "لنتحدث عن مشروعك" },
];

test("Spanish is the default regardless of browser language", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator("header select")).toHaveValue("es");
  await expect(page.locator("h1")).toContainText("Webs y sistemas");
});

for (const locale of locales) {
  test(`${locale.code}: translates, navigates, persists and returns to Spanish`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await page.locator("header select").selectOption(locale.code);
    await expect(page.locator("h1")).toHaveText(locale.heading);
    await expect(page.locator("html")).toHaveAttribute("lang", locale.lang);
    await expect(page.locator("html")).toHaveAttribute("dir", locale.code === "ar" ? "rtl" : "ltr");
    await page.locator('main a[href$="/contacto"]').first().click();
    await expect(page.locator("h1")).toHaveText(locale.contact);
    await page.reload();
    await expect(page.locator("h1")).toHaveText(locale.contact);
    await expect(page.locator("header select")).toHaveValue(locale.code);
    await page.locator("header select").selectOption("es");
    await expect(page.locator("h1")).toHaveText("Conversemos sobre tu proyecto");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    expect(errors).toEqual([]);
  });
}

test("translated form preserves input, validates and submits", async ({ page }) => {
  await page.goto("/contacto");
  await page.getByLabel("Nombre", { exact: true }).fill("Ana Pérez");
  await page.locator("header select").selectOption("en");
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("Ana Pérez");
  await page.getByRole("button", { name: "Request an initial consultation" }).click();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await page.getByLabel("Email", { exact: true }).fill("ana@example.com");
  await page.getByLabel("Phone", { exact: true }).fill("+593986951419");
  await page.getByLabel("What do you need to resolve?", { exact: true }).fill("I need a website for my business.");
  await page.getByLabel(/I agree to the use/).check();
  await page.getByLabel("Project type", { exact: true }).selectOption({ label: "Online store" });
  await expect(page.getByLabel("Project type", { exact: true })).toHaveValue("Tienda virtual");
  await page.getByRole("button", { name: "Request an initial consultation" }).click();
  await expect(page.getByText(/Preview mode: automatic submission/)).toBeVisible();
});

test("language loading failure leaves the original page usable", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.route("**/_next/static/chunks/*.js", (route) => route.abort());
  await page.locator("header select").selectOption("ar");
  await expect(page.getByRole("status")).toContainText("No se pudo cambiar el idioma");
  await expect(page.locator("h1")).toContainText("Webs y sistemas");
  await expect(page.locator("header select")).toHaveValue("es");
});

test("language selection works without preference storage", async ({ page }) => {
  await page.addInitScript(() => {
    const get = Storage.prototype.getItem;
    const set = Storage.prototype.setItem;
    Storage.prototype.getItem = function (key) {
      if (key === "mancar_language") throw new DOMException("Blocked", "SecurityError");
      return get.call(this, key);
    };
    Storage.prototype.setItem = function (key, value) {
      if (key === "mancar_language") throw new DOMException("Blocked", "SecurityError");
      return set.call(this, key, value);
    };
  });
  await page.goto("/");
  await page.locator("header select").selectOption("en");
  await expect(page.locator("h1")).toHaveText(locales[0].heading);
});

test("all languages fit a narrow mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  for (const code of ["es", ...locales.map((locale) => locale.code)]) {
    await page.locator("header select").selectOption(code);
    await expect(page.locator("header select")).toHaveValue(code);
    const dimensions = await page.evaluate(() => ({
      content: document.documentElement.scrollWidth,
      viewport: window.innerWidth,
      header: document.querySelector("header")!.scrollWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
    expect(dimensions.header).toBeLessThanOrEqual(dimensions.viewport);
  }
});
