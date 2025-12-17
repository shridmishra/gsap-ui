import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote patterns for external image sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Optimized device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Modern image formats for better compression
    formats: ["image/avif", "image/webp"],
    // Minimize stale cache time
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
