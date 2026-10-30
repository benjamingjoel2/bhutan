import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercel's image optimizer re-encodes each photo to AVIF/WebP at the exact width
    // requested: about a third of the bytes of the CDN's own AVIF at the same width.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
    deviceSizes: [480, 640, 828, 1080, 1280, 1600, 1920, 2400],
    imageSizes: [96, 160, 256, 384],
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  async redirects() {
    return [{ source: "/testimonials", destination: "/about", permanent: true }];
  },
  async headers() {
    return [
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;
