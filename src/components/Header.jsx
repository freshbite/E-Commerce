import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Header(props) {

    console.log("props.cartItemsLength",props.cartItemsLength);
    const el = document.getElementsByClassName("itemAdd");
   
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    console.log("split", splitLocation);

    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'>
                    <img src={require('./logo_2020.png')} />
                </Link>
            </div>

            <div className='navigation-container'>
                <nav className="navigation">
                    <ul className='lista'>
                        <li className={splitLocation[1] === "products" ? "active" : ""}>
                            <Link to='/products'>Products</Link>
                        </li>
                        <li className={splitLocation[1] === "about" ? "active" : ""}>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className={splitLocation[1] === "contact" ? "active" : ""}>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="cart">
                <Link to='/cart'>
                    <div className='cartItem'>
                        {/*<img src={require('./Cart.png')}/>*/}
                        <span className="material-symbols-outlined" style={{ color: "#06d6a0", fontSize: "32px" }}>shopping_cart</span>
                        <span className='itemAdd'>({props.cartItemsLength})</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;