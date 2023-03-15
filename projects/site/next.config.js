
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

module.exports = withMDX(nextConfig);
