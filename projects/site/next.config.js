/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "standalone",
  assetPrefix: './',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
