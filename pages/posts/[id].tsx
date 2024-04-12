import fs from 'fs';
import dynamic from 'next/dynamic';
import path from 'path';
import Layout from '../../components/layout';

/*
 * Return props for the runtime page ID
 */
export async function getStaticProps({params}: any): Promise<any> {
    
    return {
        props: {
            filename: `${params.id}.mdx`,
        },
    };
}

/*
 * Control pages generated during the build
 */
export async function getStaticPaths(): Promise<any> {

    const postsDirectory = path.join(process.cwd(), 'posts');
    const mdxFiles = fs.readdirSync(postsDirectory);
    const paths = mdxFiles.map((filename) => ({
        params: {
            id: filename.replace(/\.mdx$/, ''),
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

/*
 * Render a post given its MDX source and frontmatter
 */
export default function Post({filename}: any): JSX.Element {

    const MdxContent = dynamic(() => import(`../../posts/${filename}`));
    return (
        <Layout>
            <article className='article'>
                <MdxContent />
            </article>
        </Layout>
    );
}
