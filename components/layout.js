import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const siteTitle = 'APIs and Clients End-to-End';
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
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
