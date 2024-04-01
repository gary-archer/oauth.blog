import {getPostData} from '../lib/posts';
import Post from './posts/[id]';

export async function getStaticProps() {
  
  const homePageData = await getPostData('home')
  return {
    props: {
      postData: homePageData,
    },
  };
}

export default function Home( props ) {
  return (
    <Post {... props} />
  );
}
