import React from "react";
import "../Main/Main.css"; 
import "../LanguageSelector/LanguageSelector.css"
import logo from "../../img/JMD Web Dev.png"
import logoDark from "../../img/JMD Web Dev - dark.png"

function MainPagefr() {

  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  const language = localStorage.getItem('language') || 'en';
  const intro = language === 'fr' ? 'Créations | Gestion d\'applications WEB' : "Creations | Web App Management" ;

  const presentation = language === 'fr' ? "Je suis Julien Dabadie, développeur Web depuis plus d'un an. J'ai créé plusieurs sites pour des clients et pour mes projets personnels. Je suis titulaire du titre professionnel Développeur Web et Web Mobile reconnu d'État, équivalent à un niveau bac +2. J'ai acquis de bonnes connaissances dans plusieurs langages de programmation, notamment C#, PHP et JavaScript. Mon expérience m'a permis de maîtriser les compétences requises pour le développement Web, la conception de sites responsives, ainsi que pour l'utilisation de différentes technologies et frameworks. Je suis toujours en veille technologique pour fournir à mes clients des sites modernes et performants." : "I am Julien Dabadie, a web developer for over a year. I have created several websites for clients and personal projects. I hold a professional title of Web and Mobile Web Developer recognized by the State, equivalent to a level of education of bac +2. I have gained good knowledge in several programming languages, including C#, PHP, and JavaScript. My experience has allowed me to master the skills required for web development, designing responsive websites, as well as the use of different technologies and frameworks. I am always up-to-date with the latest technological advancements to provide my clients with modern and high-performing websites." ;

  const presentationNext = language === "fr" ? "Vous trouverez dans les pages 'projets' tous les projets réalisé avec à partir de different languages" : "In 'Projects' pages you will find all projects realised with different programming languages" ; 
    return (
    <>
      <div className="main_page">
        <div className="vertical-bar"></div>
        <img src={isDarkMode ? logoDark : logo} className="animate__animated animate__zoomIn main-page-fr--logo" alt="JMD Developpeur Web"/>
        <h1 className="animate__animated animate__zoomIn main-title">JMD Web Development</h1>
        <h2 className="maintitle">{intro}</h2><br></br>
        
        
          <div className="main_page--content">
          <p>{presentation}</p>
          <br></br><p>{presentationNext}</p>
        </div>
      </div>
      
    </>
    );
  }
  
  export default MainPagefr;
  