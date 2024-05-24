import Post from './posts/[id]';
import {compileMdx} from '../components/mdxCompiler';

/*
 * Load MDX for the home component and compile it to the serializable JavaScript format
 * https://mdxjs.com/guides/mdx-on-demand
 */
export async function getStaticProps(): Promise<any> {

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
export default function Home(props: any): JSX.Element {

    return (
        <Post {...props} />
    );
}
