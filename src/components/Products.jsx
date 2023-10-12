import './Products.css'
import ProductsList from './ProductsList';
import { useEffect, useState } from "react";


function Products() {

    const [productsFromApi, setProductsFromApi] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then(data => setProductsFromApi(data))
    }, [])

    return (
        <div className="products">
            {/*Products list below*/}
            <ProductsList productsList={productsFromApi}/>
        </div>
    )
}

export default Products;
