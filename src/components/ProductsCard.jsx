import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProductCards.css';
import { ReactSVG } from 'react-svg'


function ProductsCard(props) {

    const {oneProduct} = props;
    console.log("oneProduct", oneProduct);
    console.log(Math.round(oneProduct.discountPercentage));
    const newprice = oneProduct.price - (oneProduct.price * (Math.round(oneProduct.discountPercentage)/100));
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


    return(
        <div className="products-card">
            <Card>
                <Card.Body>
                    <Link to={`/products/details/${oneProduct.id}`}><Card.Img src = {oneProduct.thumbnail} className="products-image"/></Link>
                    <Card.Title className='stars'><Link to={`/products/details/${oneProduct.id}`}>{oneProduct.title}</Link>
                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                {oneProduct.rating}
                            </div>
                    </Card.Title>
                    <Card.Title className='stars stock'>in stock</Card.Title>
                    <Card.Title className='stars discount'>
                        <div className='descarcare'><img src={require('./descarcare.png')}/></div>-{Math.round(oneProduct.discountPercentage)}% Extra</Card.Title>
                    <Card.Text className='stars pricelist'>List Price: <div className='price'> {formatter.format(oneProduct.price)}</div></Card.Text>
                    {/*<Button><Link to='/products/details'>Detalii</Link></Button>*/}
                    <Card.Text className='newprice stars supprice'>Price: {qwe[0]}<sup> {supprice[1]}</sup></Card.Text>
                    <div className='Cart'>
                        <span class="material-symbols-outlined">shopping_cart</span>
                            <Button className='Button'>Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductsCard;