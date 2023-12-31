import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductCards.css';


function ProductsCard(props) {



    // This functions adds the items to the local storage,
    // We can retrieve the items added to cart later from any components
    // by using localStorage.getItem("cart")
    // This is better than passing props because it's persistent on browser refreshes
    // and doesn't need a High Order Component or a container in order to pass the shared props (cart)
    function addToCart() {

        if (localStorage.getItem("cart") != null) {
            console.log("cart has existing items, appending...")
            let productsArray = JSON.parse(localStorage.getItem("cart"));// preluam obiectul de la server ca stringa si il convertim in obiect
            console.log(productsArray);
            productsArray.push(oneProduct);
            localStorage.setItem("cart", JSON.stringify(productsArray));
            //setTimeout(function() { alert("Appended " + oneProduct.title + " to cart"); }, 2000);
            //alert("Appended " + oneProduct.title + " to cart");
            //document.getElementsByClassName('Button1')[0].addEventListener('click', function() {
              //  this.textContent = 'Hello there!';
              //});
            //console.log("PLM", document.getElementsByClassName('Button1')[0])
            ///////
            document.dispatchEvent(new Event("cartChange"));
            return;
        }

        // cart doesn't have any items set, we set the first value to an array with the added item
        console.log("first item added")
        localStorage.setItem("cart", JSON.stringify([oneProduct])); //convertim obiectul nostru in stringa si il transmitem catre localstorage ca stringa
        console.log(localStorage.getItem("cart"));
        //alert("Added " + oneProduct.title + " to cart");
        // Lastly dispatch cart change event for updating the count on sibling components
        document.dispatchEvent(new Event("cartChange"));
};


    const { oneProduct } = props;
    //console.log("oneProduct", oneProduct);
    //console.log(Math.round(oneProduct.discountPercentage));
    const newprice = oneProduct.price - (oneProduct.price * (Math.round(oneProduct.discountPercentage) / 100));
    const supprice = newprice.toFixed(2).toString().split('.');

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const xtr = formatter.format(supprice[0]);
    //console.log(xtr);
    //console.log(typeof(xtr)); 

    const qwe = xtr.split('.');
    //console.log(qwe);/* $2,500.00 */

    
    const wordSplit = oneProduct.title.split(" ");

    

    return (    
        <div className="products-card">
            <Card>
                <Card.Body>
                    <Link to={`/products/details/${oneProduct.id}`}><Card.Img src={oneProduct.thumbnail} className="products-image" /></Link>
                    <Card.Title className='stars'><Link to={`/products/details/${oneProduct.id}`}><span className='firstWord'>{wordSplit[0]}</span> <span>{wordSplit[1]}&nbsp;{wordSplit[2]}</span></Link>
                        <div className='ratingStars'>
                            <span className="fa fa-star checked"></span>&nbsp;
                            {oneProduct.rating}
                        </div>
                    </Card.Title>
                    <Card.Title className='stars stock'>in stock</Card.Title>
                    <Card.Title className='stars discount'>
                        <div className='descarcare'><img src={require('./descarcare.png')} alt='Product Images'/></div>-{Math.round(oneProduct.discountPercentage)}% Extra</Card.Title>
                    <Card.Text className='stars pricelist'>List Price: <div className='price'> ${oneProduct.price}</div></Card.Text>
                    {/*<Button><Link to='/products/details'>Detalii</Link></Button>*/}
                    <Card.Text className='newprice stars supprice'>Price: {qwe[0]}<sup> {supprice[1]}</sup></Card.Text>
                    <div className='Cart'>
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <Button className='Button1' onClick={addToCart}>Add to cart
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductsCard;