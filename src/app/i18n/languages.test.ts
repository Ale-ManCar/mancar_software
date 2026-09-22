import { describe, expect, it } from "vitest";
import en from "./en.json";
import zh from "./zh.json";
import hi from "./hi.json";
import ar from "./ar.json";
import { isLocale, translate } from "./languages";

describe("language catalogs", () => {
  it("ships the same nonempty translations in all four languages", () => {
    for (const dictionary of [zh, hi, ar]) {
      expect(Object.keys(dictionary).sort()).toEqual(Object.keys(en).sort());
      expect(Object.values(dictionary).every((text) => text.trim().length > 0)).toBe(true);
    }
  });
  it("preserves fallback copy, whitespace and literal currency", () => {
    expect(translate("  Inicio\n", en)).toBe("  Home\n");
    expect(translate("OdontoCare", en)).toBe("OdontoCare");
    expect(translate("Desde $590", en)).toBe("From $590");
    expect(translate("Hola", { Hola: "$&" })).toBe("$&");
  });
  it("rejects unsupported or malicious stored locales", () => {
    expect(isLocale("es")).toBe(true);
    expect(isLocale("ar")).toBe(true);
    for (const value of [null, "fr", "__proto__", "../../en", {}, 1]) expect(isLocale(value)).toBe(false);
  });
});
