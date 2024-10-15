import Link from 'next/link';

/*
 * The client side navbar is rendered to the top right in wide views or after other content in mobile views
 */
export function NavBar(): JSX.Element {
  
    return (
        <div className='navbar'> 
            <div className='navbarHeader'>
                <h3>Links</h3>
            </div>
            <ul>
                <div>
                    <li><a href='index'>Main Index</a></li>
                </div>
                <div>
                    <li><a href='quick-start'>Code Samples</a></li>
                </div>
                <div>
                    <li><a href='about'>About</a></li>
                </div>
            </ul>
        </div>
    );
}
