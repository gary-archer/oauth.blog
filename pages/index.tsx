import {getPostData} from '../lib/posts';
import Post from './posts/[id]';

/*
 * Return props for the home component
 */
export async function getStaticProps(): Promise<any> {
  
    const homePageData = await getPostData('home');
    return {
        props: {
            postData: homePageData,
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
