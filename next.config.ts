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
      {
        protocol: "https",
        hostname: "oneaso.com",
      },
      {
        protocol: "https",
        hostname: "www.digitalsofts.pk",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "www.coforge.com",
      },
      {
        protocol: "https",
        hostname: "pub-ad20c03bcf344486bdbcb33e6a5a69dd.r2.dev",
      },
      {
        protocol: "https",
        hostname: "idataprotection.es",
      },
      {
        protocol: "https",
        hostname: "ppc.land",
      },
    ],
  },
};

export default nextConfig;
