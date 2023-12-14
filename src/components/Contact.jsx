import './Contact.css';
import React from 'react';


function Alert(){
    alert("Your message has been successfully sent.");
}

function clicked() {
    return window.confirm('clicked');
}

function Contact() {
    return(
        <div className="contact-container">
            <div className="content">
                <h1><span className="firstWord det">Contact</span> Us</h1>
                <p className='subContactUs'>
                    <span className="firstPara">Need help? Contact our </span>
                    <span className="firstWord">Customer Service team.</span>
                </p>
            </div>

            <div class="contact">
                    <div class="contactUS">
                        <ul class="details">
                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">phone_iphone</span>
                                    Mobile:
                                </div>
                                <a href="tel:+1 866-540-3229"> +1 866-540-3229 </a>
                            </li>

                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">mail</span>
                                    E-Mail:
                                </div>
                                <a href="mailto:contact@slack.com">contact@niElectronics.com</a>
                            </li>

                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">apps</span>
                                    Facebook:
                                </div>
                                <a href="https://slack.com/">/niElectronics</a>
                            </li>

                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">schedule</span>
                                    Working hours:
                                </div>
                                <div class="orar">Monday - Friday, from 10:00 - 18:00</div>
                            </li>

                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">location_on</span>
                                    Headquarters:
                                </div>
                                <div class="orar">San Francisco, California, USA</div>
                            </li>
                        </ul>
                    </div>

                    <div class="contactUS">
                        <form class="form">
                            <label for="name">Name and Surname:</label>
                            <input type="text" placeholder="Ex: Brendan Eich" id="name" required/>
                            <label for="email">Your e-mail adress:</label>
                            <input type="email" placeholder="Ex: Brendan.Eich@gmail.com" id="email" required/>
                            <label for="phone">Phone:</label>
                            <input type="text" placeholder="Ex: +1 866-540-3229" id="phone" />
                            <label for="message">Your Message: </label>
                            <textarea id="message" required></textarea>
                            <div className='Cart'>
                                <span className="material-symbols-outlined">stacked_email</span>
                                <button type="submit" className='Button1'>Send</button>
                            </div>
                          </form>
                    </div>
                            
                        
                    </div>

        </div>
    )
}

export default Contact;