import ProductsCard from "./ProductsCard";
import './ProductList.css';


function ProductsList(props) {
  const { productsList } = props;

  if (!Array.isArray(productsList.products)) {
    return <div>No products here</div>;
  }

    // Get the button
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function(){
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className = "products-list">
      <div className="latestPro">
        <span className="firstSpan">Take advantage of <i>ni Electronics</i> price reductions %.</span>
        <span className="secondSpan">Find the lowest price on small and large electronics and appliances, phones and laptops, TV equipment and perfumes.</span>
        <hr/>
      </div>
      <button onClick={topFunction} id="myBtn" title="Go to top"><span class="material-symbols-outlined">
north
</span></button>

      {productsList && productsList.products.map((product) => (
        <ProductsCard key={product.id} oneProduct={product} />
      ))}
    </div>
  );
}



export default ProductsList;