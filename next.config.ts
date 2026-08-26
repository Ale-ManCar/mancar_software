import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/mancar_software";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? githubPagesBasePath : "",
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`,
        trailingSlash: true,
      }
    : {}),
  allowedDevOrigins: ["192.168.100.6"],
  devIndicators: false,
  images: {
    ...(isGitHubPages ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
