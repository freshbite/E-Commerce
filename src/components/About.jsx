import { Link } from 'react-router-dom';
import './About.css';
import React from 'react';
import video from './videoUS.mp4';

    
function About() {
    
    return(
        <div className="about-me-container">
            <div className="about-me-content">
                <h1><span className="firstWord det">About</span> Us</h1>
                <video className='video' autoPlay="autoplay" loop="true" muted>
                    <source src={video} type="video/mp4"/>
                </video>
                
                <div className='aboutUS'>
                    <h2><span className="firstWord">We connect people and build communities</span> to create economic opportunity for all.</h2>
                    <p className='niEle'><span className="firstPara">At <i>ni Electronics</i>, we create pathways to connect millions of sellers and buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive</span> — no matter who they are or where they are in the world. And the ripple effect of our work creates waves of change for our customers, our company, our communities and our planet.</p>
                </div>

                <div className='images'>
                    <div className='describe'>
                        <img src={require('./bike.jpg')} alt='Bike'></img>
                        <div className='h3p'>
                            <h3>Reach new customers & grow your business</h3>
                            <p className='subH3p'>We offer sellers the ability to grow a business with little barrier to entry regardless of size, background or geographic location. We never compete with our sellers. We win when our sellers succeed.</p>
                        </div>
                    </div>
                    <div className='describe'>
                        <img src={require('./girl.jpg')} alt='Girl'></img>
                        <div className='h3p'>
                            <h3>Explore vast inventory & unique selection</h3>
                            <p className='subH3p'>Buyers who shop on the our marketplace and its localized counterparts, as well as the slack mobile apps, enjoy a highly personalized experience with an unparalleled selection at great value.</p>
                        </div>
                    </div>
                </div>
                <p className='daledale'>
                    <span className="firstPara">If you have any questions or need assistance, please don't hesitate to </span><span className="firstWord"><Link to='/contact'>contact us</Link>.</span> <span className="firstPara">We're here to help!</span>
                </p>
            </div>
        </div>
    )
}

export default About;