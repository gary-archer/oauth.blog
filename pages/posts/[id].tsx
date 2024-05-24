import fs from 'fs-extra';
import path from 'path';
import Layout from '../../components/layout';
import {compileMdx} from '../../components/mdxCompiler';

/*
 * When 'next build' is run this returns a collection of URL paths
 */
export async function getStaticPaths(): Promise<any> {

    const postsDirectory = path.join(process.cwd(), 'posts');
    const mdxFiles = await fs.readdir(postsDirectory);
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
 * For each URL path returned above, this returns props that are processed by the layout component
 */
export async function getStaticProps({params}: any): Promise<any> {
    
    return {
        props: {
            filename: params.id,
            js: await compileMdx(params.id),
        },
    };
}

/*
 * Run the main layout for the filename
 */
export default function Post(props: any): JSX.Element {

    return (
        <Layout {...props} />
    );
}
