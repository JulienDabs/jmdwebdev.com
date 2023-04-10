import React from "react";
import "../Main.css"; 
import "../../LanguageSelector/LanguageSelector.css"
import logo from "../../img/JMD Web Dev.png"

function MainPagefr() {
    return (
    <>
      <div className="main_page">
        <div className="vertical-bar"></div>
        <img src={logo} className="animate__animated animate__zoomIn main-page-fr--logo" alt="JMD Developpeur Web"/>
        <h1 className="animate__animated animate__zoomIn main-title">JMD Web Development</h1>
        <h2 className="maintitle">Créations | Gestion d'applications WEB</h2><br></br>
        
        
          <div className="main_page--content">
          <p>Je suis Julien Dabadie, développeur Web depuis plus d'un an. J'ai créé plusieurs sites pour des clients et pour mes projets personnels. Je suis titulaire du titre professionnel Développeur Web et Web Mobile reconnu d'État, équivalent à un niveau bac +2. J'ai acquis de bonnes connaissances dans plusieurs langages de programmation, notamment C#, PHP et JavaScript. Mon expérience m'a permis de maîtriser les compétences requises pour le développement Web, la conception de sites responsives, ainsi que pour l'utilisation de différentes technologies et frameworks. Je suis toujours en veille technologique pour fournir à mes clients des sites modernes et performants.</p>
          <br></br><p>Vous trouverez dans les pages projets tous les projets réalisé avec à partir de different languages</p>
        </div>
      </div>
      
    </>
    );
  }
  
  export default MainPagefr;
  