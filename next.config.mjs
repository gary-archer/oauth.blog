/**
 * @type {import('next').NextConfig}
 */
export default {
  reactStrictMode: true,

  // Exporting static content HTML files requires image optimization to be disabled
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}
