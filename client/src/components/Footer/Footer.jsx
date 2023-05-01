import "./Footer.scss";
import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";


const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">ygweuidgwjdndhq2ldj;i2d  ui2dgu2dhk2dni ui2gdih2kdiwdho</div>
            </div>
            <div className="col">
                <div className="contact">CONTACT</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">Bangalore,Karnataka .</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">Phone : 6003294966</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">Email : deysudhamoy00@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Category</div>
                <span className="text">Headphone</span>
                <span className="text">Smart Watches</span>
                <span className="text">Blutooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    SONICHIVE 2023 CREATED BY SUDHAMOY.PREMIUM E-COMMERCE SOLUTIONS. 
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
