import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

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
 * Render a post given its data
 * The use of dangerouslySetInnerHTML is only done at development time and not in the deployed system
 */
export default function Post({postData}: any): JSX.Element {
  
    return (
        <Layout>
            <article className={utilStyles.article}>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}
