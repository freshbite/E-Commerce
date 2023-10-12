import './Contact.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Contact() {
    return(
        <div className="contact-container">
            <div className="content">
                <h1>Contact Us</h1>
                <p>Need help? Contact our Customer Service team.</p>
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
                                <a href="mailto:contact@slack.com">contact@slack.com</a>
                            </li>

                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">apps</span>
                                    Facebook:
                                </div>
                                <a href="https://slack.com/">/slack</a>
                            </li>

                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">schedule</span>
                                    Orar:
                                </div>
                                <div class="orar">Monday - Friday, from 10:00 - 18:00</div>
                            </li>

                            <li>
                                <div class="Simbol">
                                    <span class="material-symbols-outlined">location_on</span>
                                    Sediu central:
                                </div>
                                <div class="orar">San Francisco, California, USA</div>
                            </li>
                        </ul>
                    </div>

                    <div class="contactUS">
                        <form class="form">
                            <label for="name">Name and Surname:</label>
                            <input type="text" placeholder="Ex: Brendan Eich" id="name"/>
                            <label for="email">Your e-mail adress:</label>
                            <input type="email" placeholder="Ex: Brendan.Eich@gmail.com" id="email"/>
                            <label for="phone">Phone:</label>
                            <input type="text" placeholder="Ex: +1 866-540-3229" id="phone" />
                            <label for="message">Your Message: </label>
                            <textarea id="message"></textarea>
                            <input type="submit" value="Trimite"/>
                          </form>
                    </div>
                            
                        
                    </div>

        </div>
    )
}

export default Contact;