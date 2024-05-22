import {compile} from '@mdx-js/mdx'
import fs from 'fs-extra';
import Post from './posts/[id]';

/*
 * Load MDX for the home component and compile it to the serializable JavaScript format
 * https://mdxjs.com/guides/mdx-on-demand
 */
export async function getStaticProps(): Promise<any> {

    // const mdx = await fs.readFile('posts/home.mdx', 'utf8');
    const mdx = '# hi';
    const js = await compile(mdx);
    console.log(js);

    return {
        props: {
            filename: 'home',
            js: js.value,
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
