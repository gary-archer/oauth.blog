/**
 * @type {import('next').NextConfig}
 */
export default {
    reactStrictMode: false,
    experimental: {
        largePageDataBytes: 1024 * 1000,
      },
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};
