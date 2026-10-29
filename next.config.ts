import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [480, 640, 828, 1080, 1280, 1600, 1920, 2400],
    imageSizes: [96, 160, 256, 384],
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  async headers() {
    return [
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;
