import {run} from '@mdx-js/mdx'
import provider from '@mdx-js/react'
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router'
import {useEffect, useRef, useState} from 'react';
import runtime from 'react/jsx-runtime';
import {addCopyToClipboardButtons} from './codeProcessor';
import Navbar from './navbar';
import { MDXComponents } from 'mdx/types';

/*
 * Process the layout for a filename that points to an MDX file
 */
export default function Layout(props: any): JSX.Element {

    const rootRef = useRef<HTMLDivElement>(null);
    const scrollPositions = useRef<{[file: string]: number}>({});
    const router = useRouter();
    const [mdxContent, setMdxContent] = useState(null);

    useEffect(() => {
        startup();
        return () => cleanup();
    }, [props.filename]);

    /*
     * Get JavaScript into a renderable component using MDX on demand, then run some logic after rendering
     * https://mdxjs.com/guides/mdx-on-demand
     */
    async function startup() {
        router.events.on('routeChangeStart', storeScrollPos);
        const module = await run(props.js, {...runtime});
        setMdxContent(module);
        setTimeout(onRendered, 50);
    }

    function useMDXComponents(components: MDXComponents): MDXComponents {
  
        return {
            Link,
            ...components,
        };
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
     * Run some operations once a page has rendered
     */
    function onRendered() {
        
        // Render copy buttons for prism text
        addCopyToClipboardButtons(rootRef);

        // Restore the previous scroll position
        restoreScrollPos();
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
