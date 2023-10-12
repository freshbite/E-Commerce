import './Cart.css';
import { useEffect, useState } from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom/client';


function Cart() {

    const [items, setItems] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
          .then((res) => res.json())
          .then((resJson) => {
            const data = resJson
            setItems(data)
        })
      }, [])

    console.log("ITEMS", items);
    console.log("ID",params);

    return(
        <div className="cart-container">
            <div className="content">
                <h1>Your Cart</h1>
            </div>
        </div>
    )
}

export default Cart;