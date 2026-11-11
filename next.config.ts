import type { NextConfig } from "next";
import path from "node:path";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Normalize basePath: must start with leading slash, cannot have trailing slash
const normalizedBasePath = rawBasePath.trim().replace(/\/+$/, "");
const basePath = normalizedBasePath && !normalizedBasePath.startsWith("/")
  ? `/${normalizedBasePath}`
  : normalizedBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  turbopack: {
    root: path.resolve(__dirname, "../../"),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
