import createMDX, {NextMDXOptions} from '@next/mdx';
import {NextConfig} from 'next';

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

// MDX plugins require special behavior
// https://nextjs.org/docs/app/guides/mdx#using-plugins-with-turbopack
const mdxConfig: NextMDXOptions = {
    options: {
        remarkPlugins: ['remark-gfm-no-autolink', 'remark-prism'],
        rehypePlugins: ['rehype-slug'],
    },
};
const withMDX = createMDX(mdxConfig);

export default withMDX(nextConfig);
