import { useEffect, useState } from "react";
import { useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ProductDetails.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ProductsCard.jsx';
/* eslint-disable no-restricted-globals */


function ProductDetails() {

    const [items, setItems] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
          .then((res) => res.json())
          .then((resJson) => {
            const data = resJson
            setItems(data)
        })
      }, [params.id])
    

    console.log(Math.round(items.discountPercentage));
    const newprice = items.price - (items.price * (Math.round(items.discountPercentage)/100));
    const supprice = newprice.toFixed(2).toString().split('.');

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
      
    const xtr = formatter.format(supprice[0]);
    console.log(xtr);
    console.log(typeof(xtr)); 
      
    const qwe = xtr.split('.');
    console.log(qwe);/* $2,500.00 */
    
    items.images = items.images || [1,2,3];
    console.log("arrtest", items.images);

    

    return(
        <div className="details-container">
            
            <div className="content">
                <h1><span className="firstWord det">Product</span> Details</h1>
            </div>
            <div className="aboutProduct">
                <Card>
                    <div className="descr">
                        <div className="prodimg">
                            <Slide>
                                <div className="each-slide-effect">
                                    <div style={{ 'backgroundImage': `url(${items.images[0]})` }}>
                                    </div>
                                </div>
                                <div className="each-slide-effect">
                                    <div style={{ 'backgroundImage': `url(${items.images[1]})` }}>
                                    </div>
                                </div>
                                <div className="each-slide-effect">
                                    <div style={{ 'backgroundImage': `url(${items.images[2]})` }}>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                        {/*<Card.Img src = {items.thumbnail} className="prodimg"/>*/}
                        <div className="descr2">
                            <div className="badita">
                                <h1><span className="firstWord">{items.brand}</span>&nbsp;{items.title}</h1>
                                {/*<p className="brand">{items.brand}</p>*/}
                            </div>
                            <p class ="itemdes">{items.description}.</p>
                            <div className="DLP">
                                <div>
                                    <p class ="stockk">in stock: {items.stock} units</p>
                                    <p class ="priceok">Price: {qwe[0]}<sup> {supprice[1]}</sup></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default ProductDetails;