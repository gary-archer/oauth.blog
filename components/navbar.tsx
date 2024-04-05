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
                    <li><a href='/posts/index'>Main Index</a></li>
                </div>
                <div>
                    <li><a href='/posts/quick-start'>Code Samples Quick Start</a></li>
                </div>
                <div>
                    <li><a href='/posts/about'>About</a></li>
                </div>
            </ul>
        </div>
    );
}
