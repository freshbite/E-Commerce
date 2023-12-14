import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css'


//TODO: carusel imagini / imagine - element hero 


function Home() {

    return(
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <div className ="context">
                        <div className="slide-container">
                        </div>
                        <h1 className="moto">We wanted e-commerce to be simple. So we rebuilt it from the ground up.</h1>
                        <p className="motosub">Discover great rates, personalized services and exclusive benefits that help you shop in complete safety..</p>
                        <button className="discover">
                            <Link to='/products'>Shop now</Link>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;