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
import React from "react";


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' exact element={<Products/>}/>
          <Route path='/products/details/:id' element={<ProductDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      <Footer/>
    </div>

  );
}

export default App;
