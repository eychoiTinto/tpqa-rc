import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@types/navermaps": path.resolve(__dirname, "node_modules/@types/navermaps"),
    };
    return config;
  },
};

export default nextConfig;
