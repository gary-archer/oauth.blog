import Head from 'next/head';
import Link from 'next/link';
import {useEffect, useRef} from 'react';
import {addCopyToClipboardButtons} from './codeProcessor';
import Navbar from './navbar';
import utilStyles from '../styles/utils.module.css';

/*
 * The main site layout is a fixed header that is swapped out during navigation
 */
let isLoaded = false;
export default function Layout( {children}: {children: React.ReactNode} ): JSX.Element {

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
                        <Link href='/'>{siteTitle}</Link>
                    </h2>
                    <p className={utilStyles.infoText}>Designs and Code Samples</p>
                </>
            </header>
            <main>{children}</main>
            <Navbar />
        </div>
    );
}
