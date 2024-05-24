import {GetStaticPropsContext, GetStaticPropsResult} from 'next';
import Post from './posts/[id]';
import {compileMdx} from '../components/mdxCompiler';
import {PostProps} from '../utilities/postProps';

/*
 * Load MDX for the home component and compile it to the serializable JavaScript format
 * https://mdxjs.com/guides/mdx-on-demand
 */
export async function getStaticProps(): Promise<GetStaticPropsResult<PostProps>> {

    return {
        props: {
            filename: 'home',
            js: await compileMdx('home'),
        },
    };
}

/*
 * Render the home post
 */
export default function Home(props: PostProps): JSX.Element {

    return (
        <Post {...props} />
    );
}
