import './Cart.css';
import { useEffect, useState } from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import ReactDOM from 'react-dom/client';


function Cart() {

    const [items, setItems] = useState();
    const [itemsLoaded, setItemsLoaded] = useState(false);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        console.log("arulat");
        if (items != null) {
            setItemsLoaded(true);
            if(total == 0){
                let currentTotal = total;
                for(let i=0; i<items.length; i++){
                setTotal(currentTotal+=items[i].price);
                console.log("currentTotal", currentTotal);
                }
            }
            
            return;
        }//au ao valoare, daca au marcheaza ca loaded, incarcate 

        setItems(JSON.parse(localStorage.getItem("cart")))
        // localStorage.getItem - intoarce toata vloare din LocalStorage
        //local storage, suporta stringuri nu obiecte
        //parse luam stringa si o face obiect
        
    }, [items, itemsLoaded]);

    function removeItem() {
        
        var existingItems = JSON.parse(localStorage.getItem('cart'));
        console.log("existingItems", existingItems.length);
        var itemIndex = 0;// index of item to be removed
        existingItems.splice(itemIndex, 1)
        localStorage.setItem('cart', JSON.stringify(existingItems));
        setItems(JSON.parse(localStorage.getItem("cart")));

        let currentTotal = total;
        for(let i=0; i<items.length; i++){
            setTotal(currentTotal-=items[i].price);
            console.log("currentTotal", currentTotal);
            }
    }


    return(
        <div className="cart-container">
            <div className="content">
                <h1>Your Cart</h1>
            </div>
            
            <div className='totalCart'>
             <h5>Item List</h5>
            {itemsLoaded ? //valoare adevarata
                items.map((cartItem) => {//cartItem elementul curent - indexul din lista
                   // const dim = items.length;
                    //let total = 0;
                    //for(var i=0; i<dim; i++){
                      //   total = total + items[i].price;
                    //}
                    //console.log("TOTAL", total);
                    //let currentTotal = total;
                    //setTotal(currentTotal+=cartItem.price);
                        return <div className='priceCart'>{ // trebuie sa dea return la functia de map
                                            [<table>
                                                <tr>
                                                    <th>IMAGE</th>
                                                    <th>PRODUCT NAME</th>
                                                    <th>PRICE</th>
                                                    <th>QTY</th>
                                                    <th>SUBTOTAL</th>
                                                    <th>OPTION</th>
                                                </tr>
                                                <tr>
                                                    <td><img src={cartItem.thumbnail} className='productPresentation'/></td>
                                                    <td>{cartItem.title}</td>
                                                    <td>{cartItem.price}</td>
                                                    <td>1</td>
                                                    <td>{cartItem.price}</td>
                                                    <td><Button className='Button' onClick={removeItem}>Remove Item</Button></td>
                                                </tr>
                                            
                                            
                                            </table>
                                        ]
                                            
                                            }
                                        </div> 
                }) : //valoare falsa
                <div>Your Cart is Empty</div>
                
            }
                <div>Total = {total}</div>
                
            </div>
           
        </div>
        
    );
    
}

export default Cart;