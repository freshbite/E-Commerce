import './Cart.css';
import { useEffect, useState } from "react";
import React from 'react';


function Cart() {

    const [items, setItems] = useState();
    const [itemsLoaded, setItemsLoaded] = useState(false);
    const [total, setTotal] = useState(0);
    const [disctotal, discSetTotal] = useState(0);
    const [lengthCart, setLengthCart] = useState(0);
    const [shipping, setShipping] = useState(0);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const [formatPrice, setFormatPrice] = useState (formatter);

    
    useEffect(() => {
        console.log("arulat");
        if (items != null) {
            setItemsLoaded(true);
            if (total === 0) {
                let currentTotal = total;
                let discCurrentTotal = disctotal;
               
                for (let i = 0; i < items.length; i++) {
                    const fer = (items[i].price - (items[i].price * (Math.round(items[i].discountPercentage) / 100)));
                    discSetTotal(discCurrentTotal += fer);
                    setTotal(currentTotal += items[i].price);
                }
            }
            
            if(disctotal == 0){
                setShipping(0);
            }
            else{
                setShipping(30);

            }
            setLengthCart(items.length);
            return;
        }//au ao valoare, daca au marcheaza ca loaded, incarcate 

        
        setItems(JSON.parse(localStorage.getItem("cart")));
        // localStorage.getItem - intoarce toata vloare din LocalStorage
        //local storage, suporta stringuri nu obiecte
        //parse luam stringa si o face obiect

    }, [items, itemsLoaded]);


    function removeItem(cartItem) {
        var existingItems = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < existingItems.length; i++) {
            // Does the item on which remove was clicked exist in the list?
            if (cartItem.id === existingItems[i].id) {
                // The item was found in localstorage with index i
                existingItems.splice(i, 1)
                localStorage.setItem('cart', JSON.stringify(existingItems));
                setItems(JSON.parse(localStorage.getItem("cart")));
            }
        }
        console.log("existingItems", existingItems.length);


        let currentTotal = total;
        let discCurrentTotal = disctotal;

        for (let i = 0; i < items.length; i++) {
            const fer = (items[i].price - (items[i].price * (Math.round(items[i].discountPercentage) / 100)));
            discSetTotal(discCurrentTotal -= fer);       
            setTotal(currentTotal -= items[i].price);
        }
        if (existingItems.length === 0){
            discSetTotal(discCurrentTotal *=0);
        }
        
        document.dispatchEvent(new Event("cartChange"));
    }

    return (
        <div className="cart-container">
            <div className="contento">
                <h1><span className="firstWord det">Your</span> Cart</h1>
                <div class="scroll-left">
                    <p>From Friday you can take advantage of the weekend offer, and from Monday you start a new week of non-food offers.</p>
                </div>
            </div>
                <div className='totalCart'>
                    <div className='TableCart'>
                        {itemsLoaded ? //valoare adevarata
                            items.map((cartItem) => {
                                const discperItem = cartItem.price - (cartItem.price * (Math.round(cartItem.discountPercentage) / 100));
                                //cartItem elementul curent - indexul din lista
                                // const dim = items.length;
                                //let total = 0;
                                //for(var i=0; i<dim; i++){
                                //   total = total + items[i].price;
                                //}
                                //console.log("TOTAL", total);
                                //let currentTotal = total;
                                //setTotal(currentTotal+=cartItem.price);
                                return <div className='priceCart'>{ // trebuie sa dea return la functia de map
                                    [<table className='tableProducts'>
                                        <tr id='trTable'>
                                            <th>IMAGE</th>
                                            <th>PRODUCT NAME</th>
                                            <th>PRICE</th>
                                            <th>DISCOUNT %</th>
                                            <th>TOTAL PRICE</th>
                                            <th>OPTION</th>
                                        </tr>
                                        <tr>
                                            <td><img src={cartItem.thumbnail} className='productPresentation' alt='Thumbnail'/></td>
                                            <td id='titleProduct'>{cartItem.title}</td>
                                            <td>{formatPrice.format(cartItem.price)}</td>
                                            <td>{cartItem.discountPercentage}</td>
                                            <td id="result">{formatPrice.format(discperItem.toFixed(2))}</td>
                                            <td className='Remove'>
                                                <span class="material-symbols-outlined">delete</span>
                                                <button type="button" className='Button1' onClick={() => removeItem(cartItem)}>Remove</button>    
                                            </td>
                                        </tr>
            
                                    </table>]

                                }</div>
                                
                            }):<div className='Empty'>Your Cart is Empty</div>
                        }</div>
                    <div className='Checkout'>
                        <table className='tableCheckout'> 
                                        <tr id='order'>
                                            <th>ORDER SUMMARY</th>
                                        </tr>
                                        <tr>
                                            <td>Products ({lengthCart})</td>
                                            <td>{formatPrice.format(total)}</td>
                                        </tr>
                                        <tr>
                                            <td>You saved</td>
                                            <td>{formatPrice.format(total - disctotal)}</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>{formatPrice.format(shipping)}</td>
                                        </tr>
                                        <tr id='TotalAmount'>
                                            <td>Total amount</td>
                                            <td>{formatPrice.format(shipping + disctotal)}</td>
                                        </tr>
                        </table>
                    </div>
                </div>
            
        </div>

    );

}

export default Cart;