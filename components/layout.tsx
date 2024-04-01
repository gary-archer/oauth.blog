import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

/*
 * The main site layout is a fixed header that is swapped out during navigation
 */
export default function Layout({children}: any): JSX.Element {
  
  const siteTitle = 'APIs and Clients End-to-End';
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <header>
        <>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              {siteTitle}
            </Link>
          </h2>
          <p className={utilStyles.lightText}>Designs and Code Samples</p>
        </>
      </header>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <main>{children}</main>
      </section>
    </div>
  );
}
