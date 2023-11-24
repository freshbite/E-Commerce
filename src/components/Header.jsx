import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from "react";

//TODO: Replace cart button to cart icon button

function Header() {

    var existingItems = JSON.parse(localStorage.getItem('cart'));
    console.log("existingItems.length", existingItems.length);
      

    

    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'>
                    <img src={require('./logo_2020.png')}/>
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
                    <div className='cartItem'>
                        {/*<img src={require('./Cart.png')}/>*/}
                        <span className="material-symbols-outlined" style={{color: "#044123", fontSize: "32px"}}>shopping_cart</span>
                        {/*<span className='itemAdd'>{existingItems.length}</span>*/}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;