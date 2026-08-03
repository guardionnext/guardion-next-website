/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Serve AVIF (and fall back to WebP) from next/image — smaller than the
    // source WebP for the logo, hero, founder and badge images.
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // Ensure lucide-react is imported per-icon (tree-shaken), trimming JS.
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
