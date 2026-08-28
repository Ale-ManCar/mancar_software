import { describe, expect, it } from "vitest";
import { successCases } from "./cases";

describe("successCases", () => {
  it("uses unique slugs for every portfolio case", () => {
    const slugs = successCases.map((successCase) => successCase.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps every case ready for the portfolio UI", () => {
    for (const successCase of successCases) {
      expect(successCase.title).toBeTruthy();
      expect(successCase.summary.length).toBeGreaterThan(30);
      expect(successCase.logo.src).toMatch(/^\/portfolio\/logos\/.+\.png$/);
      expect(successCase.logo.alt).toContain(successCase.title);
      expect(successCase.technologies.length).toBeGreaterThan(0);
      expect(successCase.results.length).toBeGreaterThan(0);
    }
  });
});
