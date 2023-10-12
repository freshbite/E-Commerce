import { Link } from "react-router-dom";
import './Home.css'


//TODO: carusel imagini / imagine - element hero 


function Home() {
    return(
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <div className ="context">
                        
                        <h1>We wanted e-commerce to be simple. So we rebuilt it from the ground up.</h1>
                        <p>Discover great rates, personalized services and exclusive benefits that help you shop in complete safety..</p>
                        <p><Link to='/products' className= "shooping">Let the shopping begin<span class="material-symbols-outlined">arrow_forward_ios</span></Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;