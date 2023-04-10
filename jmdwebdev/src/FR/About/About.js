import React from "react";
import logo from "../../img/JMD Web Dev.png"
import profile from "../../img/profile_pic.jpg"
import '../About/about.css'

function AboutFr() {
    return (
        <>
        <div className="about-intro">
            <img src={logo} className="about-logo" alt="JMD WebDevelopment" />
            <h1 className="about-title">Qui se cache derriere JMD Web Developer ?</h1>
        </div>
        <p>Je m'appelle Julien DABADIE et j'ai passé 20 ans de ma vie dans l'industrie de l'hôtellerie-restauration. J'ai eu l'opportunité de vivre au Canada dès l'âge de 20 ans et j'y suis devenu citoyen. Cependant, après avoir traversé plusieurs crises économiques et une pandémie, j'ai décidé de changer de voie professionnelle. Depuis toujours, j'ai été passionné par l'informatique, c'est donc tout naturellement que je me suis lancé dans le développement web.<br></br>

        J'ai suivi une formation intensive de six mois à l'école O'clock, où j'ai appris les bases du métier de développeur web. Par la suite, j'ai obtenu un diplôme de niveau V reconnu par l'État, en tant que développeur web et web mobile professionnel. Une fois diplômé, j'ai pu postuler pour un poste de développeur d'informations dans l'une des plus grandes études de commissaires de justice de France, située à Marseille, et j'occupe toujours ce poste aujourd'hui.<br></br>

        Je suis fier de cette transition de carrière réussie et je suis ravi de travailler dans un domaine qui me passionne. Mon parcours professionnel m'a permis d'acquérir une solide expérience et des compétences techniques en développement web et en gestion de projets. Je suis motivé à continuer à apprendre et à me perfectionner dans ce domaine en constante évolution.</p>
        
        <img src={profile} className="about-picture-profile" alt="Julien Dabadie Developpeur WEB"/>
        </>
    )
}

export default AboutFr;