import type {AppProps} from 'next/app'
import '../styles/global.css';
import 'prismjs/themes/prism.css';

/*
 * Creates a custom application and imports global styles
 */
export default function App({Component, pageProps}: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}
