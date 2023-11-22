import ProductsCard from "./ProductsCard";
import './ProductList.css';


function ProductsList(props) {
  const { productsList } = props;

  if (!Array.isArray(productsList.products)) {
    return <div>No products here</div>;
  }

  return (
    <div className = "products-list">
      {productsList && productsList.products.map((product) => (
        <ProductsCard key={product.id} oneProduct={product} />
      ))}
    </div>
  );
}



export default ProductsList;