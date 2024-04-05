import Head from 'next/head';
import Navbar from './navbar';
import {useEffect, useRef} from 'react';
import utilStyles from '../styles/utils.module.css';

function createCopyButton(codeEl) {
    const button = document.createElement("button");
    button.classList.add("prism-copy-button");
    button.textContent = "Copy";
  
    button.addEventListener("click", () => {
      if (button.textContent === "Copied") {
        return;
      }
      navigator.clipboard.writeText(codeEl.textContent || "");
      button.textContent = "Copied";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = "Copy";
        button.disabled = false;
      }, 3000);
    });
  
    return button;
  }

/*
 * The main site layout is a fixed header that is swapped out during navigation
 */
export default function Layout({children}: any): JSX.Element {

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const allPres = rootRef.current.querySelectorAll("pre") as any;
        const cleanup: (() => void)[] = [];

        for (const pre of allPres) {
            const code = pre.firstElementChild;
            if (!code || !/code/i.test(code.tagName)) {
                continue;
            }
        
            pre.appendChild(createCopyButton(code));
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
