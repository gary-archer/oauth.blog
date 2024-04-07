import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

/*
 * The navbar is rendered to the top right in wide views or after other content in mobile views
 */
export default function Navbar(): JSX.Element {
  
    return (
        <div className={utilStyles.navbar}> 
            <h3 className={utilStyles.navbarHeader}>Links</h3>
            <ul>
                <div>
                    <li><Link href='/posts/index'>Main Index</Link></li>
                </div>
                <div>
                    <li><Link href='/posts/quick-start'>Code Samples</Link></li>
                </div>
                <div>
                    <li><Link href='/posts/about'>About</Link></li>
                </div>
            </ul>
        </div>
    );
}
