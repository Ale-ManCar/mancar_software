import { afterEach, describe, expect, it, vi } from "vitest";

async function loadAssetPaths(basePath?: string) {
  vi.resetModules();
  if (basePath === undefined) {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
  } else {
    process.env.NEXT_PUBLIC_BASE_PATH = basePath;
  }
  return import("./asset-paths");
}

afterEach(() => {
  delete process.env.NEXT_PUBLIC_BASE_PATH;
  vi.resetModules();
});

describe("publicAsset", () => {
  it("normalizes asset paths without a configured base path", async () => {
    const { publicAsset } = await loadAssetPaths();

    expect(publicAsset("brand/mancar-logo.png")).toBe("/brand/mancar-logo.png");
    expect(publicAsset("/brand/mancar-logo.png")).toBe("/brand/mancar-logo.png");
  });

  it("prefixes assets with the configured GitHub Pages base path", async () => {
    const { publicAsset } = await loadAssetPaths("/mancar_software");

    expect(publicAsset("brand/mancar-logo.png")).toBe("/mancar_software/brand/mancar-logo.png");
    expect(publicAsset("/brand/mancar-logo.png")).toBe("/mancar_software/brand/mancar-logo.png");
  });
});
