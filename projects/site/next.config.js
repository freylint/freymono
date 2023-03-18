
/** @type {import('next').NextConfig} */
export default nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  }
}

