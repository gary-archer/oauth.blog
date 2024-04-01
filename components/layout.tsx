import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

/*
 * The main site layout is a fixed header that is swapped out during navigation
 */
export default function Layout({children}: any): JSX.Element {
  
    const siteTitle = 'APIs and Clients End-to-End';
    return (
        <div className={utilStyles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={siteTitle} />
                <title>{siteTitle}</title>
            </Head>
            <header>
                <>
                    <h2 className={utilStyles.headingLg}>
                        <a href="/">
                            {siteTitle}
                        </a>
                    </h2>
                    <p className={utilStyles.lightText}>Designs and Code Samples</p>
                </>
            </header>
            <main>{children}</main>
        </div>
    );
}
