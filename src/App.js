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
import React, { useState } from "react";


function App() {

  const [itemsLength, setItemsLength] = useState(0);

  useEffect(() => {
    var existingLentgh = JSON.parse(localStorage.getItem('cart')).length;
    setItemsLength(existingLentgh);
  })

  return (
    <div className="App">
      <Header itemsLength={itemsLength}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' exact element={<Products/>} itemsLength={itemsLength}/>
          <Route path='/products/details/:id' element={<ProductDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      
    </div>

  );
}

export default App;
