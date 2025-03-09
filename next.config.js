const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Enables static export
  basePath: isProd ? "/nextjs-user-dashboard" : "", // Ensures correct paths on GitHub Pages
  assetPrefix: isProd ? "/nextjs-user-dashboard/" : "", // Fixes missing CSS & JS
  trailingSlash: true, // Ensures proper routing for static sites
  images: {
    unoptimized: true, // Required for Next.js static exports
  },
};

module.exports = nextConfig;
