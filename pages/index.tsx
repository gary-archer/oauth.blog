import Post from './posts/[id]';

/*
 * Return props for the home component
 */
export async function getStaticProps(): Promise<any> {
  
    return {
        props: {
            filename: 'home',
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
