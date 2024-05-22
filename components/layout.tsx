import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router'
import {useEffect, useRef, useState} from 'react';
import {addCopyToClipboardButtons} from './codeProcessor';
import Navbar from './navbar';

/*
 * Process the layout for a filename that points to an MDX file
 */
export default function Layout({filename}: any): JSX.Element {

    const rootRef = useRef<HTMLDivElement>(null);
    const scrollPositions = useRef<{[file: string]: number}>({});
    const router = useRouter();
    let [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        startup();
        return () => cleanup();
    }, [filename]);

    /*
     * Initialize the loaded state and subscribe for events
     */
    function startup() {
        setShowNavBar(false);
        router.events.on('routeChangeStart', storeScrollPos);
    }

    /*
     * Unsubscribe from events
     */
    function cleanup() {
        router.events.off('routeChangeStart', storeScrollPos);
    }

    /*
     * Store the scroll position when moving to a new page
     */
    function storeScrollPos() {
        scrollPositions.current[filename] = window.scrollY;
    };

    /*
     * Restore the scroll position when a page loads
     */
    function restoreScrollPos() {

        if (scrollPositions.current[filename]) {
            window.scroll({
                top: scrollPositions.current[filename],
                behavior: 'auto',
            });
        }
    }

    /*
     * Run some operations once a page has rendered
     */
    function onRendered() {
        
        // Show the navbar 
        setShowNavBar(true);

        // Render copy buttons for prism text
        addCopyToClipboardButtons(rootRef);

        // Restore the previous scroll position
        restoreScrollPos();
    }

    /*
     * Load MDX, allow 50 milliseconds for it to render, then run some logic
    */
    const MdxContent = dynamic(() => import(`../posts/${filename}.mdx`).then((result) => {
        setTimeout(onRendered, 50);
        return result;
    }));

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
                <article className='article'>
                    <MdxContent />
                    {showNavBar && <Navbar />}
                </article>
            </main>
        </div>
    );
}
