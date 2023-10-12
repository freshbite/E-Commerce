import './Products.css'
import ProductsList from './ProductsList';
import { useEffect, useState } from "react";
import ProductsList from './ProductsList';
import { useEffect, useState } from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';


function ProductsTEST() {

    const [OneProductFromApi, setOneProductFromApi] = useState({});

    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => setOneProductFromApi(data))
    }, [])

    console.log("ID",params);
    return (
        <div className="products">
            {/*Products list below*/}
            <ProductsList productsList={productsFromApi}/>
        </div>
    )
}

export default ProductsTEST;