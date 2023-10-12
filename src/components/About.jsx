import { Link } from 'react-router-dom';
import './About.css';
import React from 'react';
import { Player } from 'video-react';
import video from './videoUS.mp4';

function About() {
    return(
        <div className="about-me-container">
            <div className="about-me-content">
                <h1>About Us</h1>
                <video className='video' autoplay="autoplay" loop="true" muted>
        <         source src={video} type="video/mp4"/>
                </video>
                
                <div className='aboutUS'>
                    <h2>We connect people and build communities to create economic opportunity for all.</h2>
                    <p>At slack, we create pathways to connect millions of sellers and buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive — no matter who they are or where they are in the world. And the ripple effect of our work creates waves of change for our customers, our company, our communities and our planet.</p>
                </div>

                <div className='images'>
                    <div className='describe'>
                        <img src={require('./bike.jpg')}></img>
                        <div className='h3p'>
                            <h3>Reach new customers & grow your business</h3>
                            <p>We offer sellers the ability to grow a business with little barrier to entry regardless of size, background or geographic location. We never compete with our sellers. We win when our sellers succeed.</p>
                        </div>
                    </div>
                    <div className='describe'>
                        <img src={require('./girl.jpg')}></img>
                        <div className='h3p'>
                            <h3>Explore vast inventory & unique selection</h3>
                            <p>Buyers who shop on the our marketplace and its localized counterparts, as well as the slack mobile apps, enjoy a highly personalized experience with an unparalleled selection at great value.</p>
                        </div>
                    </div>
                </div>
                <p>
                    If you have any questions or need assistance, please don't hesitate to <Link to='/contact'>contact us</Link>. We're here to help!
                </p>
            </div>
        </div>
    )
}

export default About;