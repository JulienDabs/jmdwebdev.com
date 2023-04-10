import React from "react";
import logo from "../../img/JMD Web Dev.png"
import logoDark from "../../img/JMD Web Dev - dark.png"
import profile from "../../img/profile_pic.jpg"
import './about.css'

function AboutFr() {
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const language = localStorage.getItem('language') || 'en';

    const introText = language === 'fr' ? 'Qui se cache derriere JMD Web Developer ?' : 'Who is behind JMD Web Developer?';
    const bioText = language === 'fr' ? `Je m'appelle Julien DABADIE et j'ai passé 20 ans de ma vie dans l'industrie de l'hôtellerie-restauration. J'ai eu l'opportunité de vivre au Canada dès l'âge de 20 ans et j'y suis devenu citoyen. Cependant, après avoir traversé plusieurs crises économiques et une pandémie, j'ai décidé de changer de voie professionnelle. Depuis toujours, j'ai été passionné par l'informatique, c'est donc tout naturellement que je me suis lancé dans le développement web.
    J'ai suivi une formation intensive de six mois à l'école O'clock, où j'ai appris les bases du métier de développeur web. Par la suite, j'ai obtenu un diplôme de niveau V reconnu par l'État, en tant que développeur web et web mobile professionnel. Une fois diplômé, j'ai pu postuler pour un poste de développeur d'informations dans l'une des plus grandes études de commissaires de justice de France, située à Marseille, et j'occupe toujours ce poste aujourd'hui.
    Je suis fier de cette transition de carrière réussie et je suis ravi de travailler dans un domaine qui me passionne. Mon parcours professionnel m'a permis d'acquérir une solide expérience et des compétences techniques en développement web et en gestion de projets. Je suis motivé à continuer à apprendre et à me perfectionner dans ce domaine en constante évolution.` : `My name is Julien DABADIE and I spent 20 years of my life in the hotel and restaurant industry. I had the opportunity to live in Canada from the age of 20 and became a citizen there. However, after going through several economic crises and a pandemic, I decided to change my professional path. I have always been passionate about computers, so it was only natural that I got into web development.
    I followed an intensive six-month course at O'clock school, where I learned the basics of the web developer profession. Afterwards, I obtained a Level V diploma recognized by the State as a professional web and mobile web developer. Once I graduated, I was able to apply for an information developer position at one of the largest justice commissioner's offices in France, located in Marseille, and I still hold that position today.
    I am proud of this successful career transition and I am thrilled to work in a field that I am passionate about. My professional journey has allowed me to gain solid experience and technical skills in web development and project management. I am motivated to continue learning and improving in this constantly evolving field.`;
    return (
       
        <>
        
        <div className="about-intro">
            <img src={isDarkMode ? logoDark : logo} className="about-logo" alt="JMD WebDevelopment" />
            <h1 className="about-title">{introText}</h1>
        </div>
        <div className="about-biopic">
            <p className="about-bio">{bioText}</p>
            
            <img src={profile} className="about-picture-profile" alt="Julien Dabadie Developpeur WEB"/>
        </div>
        </>
    )
}

export default AboutFr;