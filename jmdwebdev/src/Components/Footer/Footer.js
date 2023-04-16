import React from "react";
import './footer.css'

function Footer() {

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const language = localStorage.getItem('language') || 'en';

    return (
       
        <>
        <div className="footer-position">
            <div className="footer-position-title">
                <h2 className="footer-position-title-size">JMD Web developer</h2>
                <h3>Contact : <a href="mailto:contact@jmdwebdev.com">contact@jmdwebdev.com</a></h3>
            </div>
            <ul>
                <li><a href="https://github.com/JulienDabs"><i className="fa fa-github footer-position-icon" style={{ fontSize: "32px"}}></i></a></li>
                <li><a href="https://www.linkedin.com/in/juliendabadie/"><i className="fa fa-linkedin-square footer-position-icon" style={{ fontSize: "32px"}}></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100083225474215"><i className="fa fa-facebook-f footer-position-icon" style={{ fontSize: "32px"}}></i></a></li> 
            </ul>
        </div>
        
        </>
    )
}

export default Footer;