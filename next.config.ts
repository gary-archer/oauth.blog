import withMDX, {NextMDXOptions} from '@next/mdx';
import {NextConfig} from 'next';
import remarkGfm from 'remark-gfm-no-autolink';
import remarkPrism from 'remark-prism'
import rehypeSlug from 'rehype-slug';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    pageExtensions: ['tsx'],
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    devIndicators: false,
};

const mdxConfig: NextMDXOptions = {
    options: {
        remarkPlugins: [remarkGfm, remarkPrism],
        rehypePlugins: [rehypeSlug as any],
    },
};

export default withMDX(mdxConfig)(nextConfig);
