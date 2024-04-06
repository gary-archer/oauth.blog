import Head from 'next/head';
import {useEffect, useRef} from 'react';
import {addCopyToClipboardButtons} from './codeProcessor';
import Navbar from './navbar';
import utilStyles from '../styles/utils.module.css';

/*
 * The main site layout is a fixed header that is swapped out during navigation
 */
let isLoaded = false;
export default function Layout({children}: any): JSX.Element {

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!isLoaded) {
            addCopyToClipboardButtons(rootRef);
            isLoaded = true;
        }
    });
  
    const siteTitle = 'APIs and Clients End-to-End';
    return (
        <div ref={rootRef} className={utilStyles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={siteTitle} />
                <title>{siteTitle}</title>
            </Head>
            <header>
                <>
                    <h2 className={utilStyles.headingLg}>
                        <a href='/'>{siteTitle}</a>
                    </h2>
                    <p className={utilStyles.infoText}>Designs and Code Samples</p>
                </>
            </header>
            <main>{children}</main>
            <Navbar />
        </div>
    );
}
