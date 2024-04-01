import {getPostData} from '../lib/posts';
import Post from './posts/[id]';

/*
 * Return props for the home component
 */
export async function getStaticProps() {
  
  const homePageData = await getPostData('home')
  return {
    props: {
      postData: homePageData,
    },
  };
}

/*
 * Render the home component by rendering the home post
 */
export default function Home( props ) {

  return (
    <Post {... props} />
  );
}
