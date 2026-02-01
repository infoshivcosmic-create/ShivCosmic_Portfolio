import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,

  // GitHub Pages Configuration
  output: 'export',
  basePath: '/ShivCosmic_Portfolio',
  assetPrefix: '/ShivCosmic_Portfolio/',
  trailingSlash: true,

  // Optimize images (unoptimized required for static export without loader)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Production optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for performance
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Security and performance headers (Note: Headers are not supported in static export, handled via .htaccess)

};

export default nextConfig;
