import fs from 'fs-extra';
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from 'next';
import path from 'path';
import Layout from '../../components/layout';
import {compileMdx} from '../../components/mdxCompiler';
import {PostProps} from '../../utilities/postProps';

/*
 * When 'next build' is run this returns a collection of URL paths
 */
export async function getStaticPaths(): Promise<GetStaticPathsResult> {

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
export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> {
  
    const id = context.params.id as string;
    return {
        props: {
            filename: id,
            js: await compileMdx(id),
        },
    };
}

/*
 * Run the main layout for the filename
 */
export default function Post(props: PostProps): JSX.Element {

    return (
        <Layout {...props} />
    );
}
