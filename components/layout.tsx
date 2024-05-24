import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router'
import {useEffect, useRef, useState} from 'react';
import {PostProps} from '../utilities/postProps';
import {addCopyToClipboardButtons} from './codeProcessor';
import {runMdx} from './mdxRunner';
import Navbar from './navbar';

/*
 * Process the layout for a filename that points to an MDX file
 */
export default function Layout(props: PostProps): JSX.Element {

    const [mdxContent, setMdxContent] = useState(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const scrollPositions = useRef<{[file: string]: number}>({});

    useEffect(() => {
        startup();
        return () => cleanup();
    }, [props.filename]);

    /*
     * Get JavaScript into a renderable component, then run some initialization after rendering
     */
    async function startup() {

        router.events.on('routeChangeStart', storeScrollPos);
        setMdxContent(await runMdx(props.js));
        setTimeout(onRendered, 50);
    }

    /*
     * Unsubscribe from events
     */
    function cleanup() {
        router.events.off('routeChangeStart', storeScrollPos);
    }

    /*
     * Run some operations once a page has rendered
     */
    function onRendered() {

        // Render copy buttons for prism text
        addCopyToClipboardButtons(rootRef);

        // Restore the previous scroll position
        restoreScrollPos();

        // Restore the previous scroll position
        restoreScrollPos();
    }

    /*
     * Store the scroll position when moving to a new page
     */
    function storeScrollPos() {
        scrollPositions.current[props.filename] = window.scrollY;
    };

    /*
     * Restore the scroll position when a page loads
     */
    function restoreScrollPos() {

        if (scrollPositions.current[props.filename]) {
            window.scroll({
                top: scrollPositions.current[props.filename],
                behavior: 'auto',
            });
        }
    }

    /*
     * Render the page
     */
    const siteTitle = 'APIs and Clients End-to-End';
    return (
        <div ref={rootRef} className='container'>
            <Head>
                <meta name='description' content={siteTitle} />
                <title>{siteTitle}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header>
                <h2>
                    <Link href='/'>{siteTitle}</Link>
                </h2>
                <p className='subHeadingText'>Designs and Code Samples</p>
            </header>
            <main>
                {mdxContent && 
                    <article className='article'>
                        <mdxContent.default components={Link} />
                        <Navbar />
                    </article>
                }
            </main>
        </div>
    );
}
