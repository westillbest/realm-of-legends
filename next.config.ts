import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/realm-of-legends",
  assetPrefix: "/realm-of-legends/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
