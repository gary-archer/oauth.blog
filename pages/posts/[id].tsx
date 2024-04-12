import dynamic from 'next/dynamic';
import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';

/*
 * Return props for the runtime page ID
 */
export async function getStaticProps({params}: any): Promise<any> {

    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

/*
 * Control pages generated during the build
 */
export async function getStaticPaths(): Promise<any> {

    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

/*
 * Render a post given its MDX source and frontmatter
 */
export default function Post({postData}: any): JSX.Element {

    const Mdx = dynamic(import(`/posts/${postData.fileName}`), {ssr: false} );
    return (
        <Layout>
            <article className='article'>
                <h1>{postData.frontmatter.title}</h1>
                <Mdx />
            </article>
        </Layout>
    );
}
