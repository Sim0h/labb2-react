import React, { useEffect } from "react";
import contactPic from "../images/hämtning.png";
import Header from "./Header";
import EasterEgg1 from "./Script";

function Contact() {

    useEffect(() => {
        EasterEgg1(); 
    }, []);

    return (
        <div>
            <Header />
            <header><h1>Contact</h1></header>
            <div className="contact-container">
                <div className="contact-info" >
                    <h2>Contact Information</h2>
                    <ul>
                        <li><i className="fa fa-envelope"></i> Simon.stahl@test.se</li>
                        <li><i className="fa fa-phone"></i> 0700000000</li>
                    </ul>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/simon-ståhl-02b046180/" target="_blank">
                            <i className="fa fa-linkedin fa-lg"></i>
                        </a>
                        <a href="https://github.com/Sim0h" target="_blank">
                            <i className="fa fa-github-square fa-lg"></i>
                        </a>
                    </div>
                </div>
                <div className="contact-image">
                    <img src={contactPic} alt="Contact Image" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
