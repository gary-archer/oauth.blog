import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
