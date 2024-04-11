import Head from 'next/head';
import Link from 'next/link';
import {useEffect, useRef} from 'react';
import {addCopyToClipboardButtons} from './codeProcessor';
import Navbar from './navbar';

/*
 * The main site layout is a fixed header that is swapped out during navigation
 */
export default function Layout( {children}: {children: React.ReactNode} ): JSX.Element {

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        addCopyToClipboardButtons(rootRef);
    });
  
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
            <main>{children}</main>
            <Navbar />
        </div>
    );
}
