import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails'
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";


function App() {

  const [cartItemsLength, setCartItemsLength] = useState(0);

  function updateCartLength() {
    console.log("Updating cart length...")
    let cart = JSON.parse(localStorage.getItem("cart"));
    let length = 0;
    if (cart != null) {
      length = cart.length;
    }
    setCartItemsLength(length)
  }


  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart === null) {
      return;
    }
    setCartItemsLength(cart.length);
    document.addEventListener("cartChange", updateCartLength)
    // On unmount component
    return () => {
      document.removeEventListener('cartChange', updateCartLength)
    }


  });

  return (
    <div className="App">
      <Header cartItemsLength={cartItemsLength} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/products/details/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>

  );
}

export default App;
