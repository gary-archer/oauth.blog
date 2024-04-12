import withMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'
import remarkPrism from 'remark-prism'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
    experimental: {
        mdxRs: false, 
    },
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

// Maybe it's my use of dynamic?
// https://github.com/vercel/next.js/issues/46659
const mdxConfig = {
    options: {
        remarkPlugins: [],
    },
};

export default withMDX(mdxConfig)(nextConfig);
