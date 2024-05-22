import {compile} from '@mdx-js/mdx'
import fs from 'fs';
import path from 'path';
import Layout from '../../components/layout';

/*
 * When 'next build' is run this returns a collection of URL paths
 */
/*export async function getStaticPaths(): Promise<any> {

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
}*/

/*
 * For each URL path returned above, this returns props that are processed by the layout component
 * This includes MDX compiled to the serializable JavaScript format
 * https://mdxjs.com/guides/mdx-on-demand
 */
/*export async function getStaticProps({params}: any): Promise<any> {
    
    const mdx = await import(`../../posts/${params.id}.mdx`);
    const js = await compile(mdx, {
        outputFormat: 'function-body',
    });

    return {
        props: {
            filename: params.id,
            js,
        },
    };
}*/

/*
 * Run the main layout for the filename
 */
export default function Post(props: any): JSX.Element {

    return (
        <Layout {...props} />
    );
}
