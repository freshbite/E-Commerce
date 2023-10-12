import './Header.css';
import { Link } from 'react-router-dom';

//TODO: Replace cart button to cart icon button

function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'>
                    <img src={require('./Logo.png')}/>
                </Link>          
            </div>
            
            <div className='navigation-container'>
                <nav className="navigation">
                    <ul className='lista'>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="cart">                 
                <Link to='/cart'>
                    <img src={require('./Cart.png')}/>
                </Link>
            </div>
        </div>
    )
}

export default Header;