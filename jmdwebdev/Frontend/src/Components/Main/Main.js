import React, { useEffect, useContext } from "react";
import { DarkModeContext } from "../DarkMode/DarkModeContext";
import "../Main/Main.css";
import "../LanguageSelector/LanguageSelector.css";
import logo from "../../img/JMD Web Dev.png";
import logoDark from "../../img/JMD Web Dev - dark.png";
import SCCaro from "../../img/carolinedabadie.fr.jpg";
import SCClever from "../../img/clevercontrarian.com.jpg";
import SCDad from "../../img/pierredabadie.fr.jpg";
import SCToulon from "../../img/toulonmerite.fr.jpg";

function MainPagefr() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".main-page-accomplishements-detail"
      );
      for (let element of elements) {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDarkMode = useContext(DarkModeContext);
  const dark = isDarkMode.darkMode;

  const language = localStorage.getItem("language") || "en";
  const intro =
    language === "fr"
      ? "Créations | Gestion d'applications WEB"
      : "Creations | Web App Management";

  const presentation =
    language === "fr"
      ? "Je suis Julien Dabadie, développeur Web depuis plus d'un an. J'ai créé plusieurs sites pour des clients et pour mes projets personnels. Je suis titulaire du titre professionnel Développeur Web et Web Mobile reconnu d'État, équivalent à un niveau bac +2. J'ai acquis de bonnes connaissances dans plusieurs langages de programmation, notamment C#, PHP et JavaScript. Mon expérience m'a permis de maîtriser les compétences requises pour le développement Web, la conception de sites responsives, ainsi que pour l'utilisation de différentes technologies et frameworks. Je suis toujours en veille technologique pour fournir à mes clients des sites modernes et performants."
      : "I am Julien Dabadie, a web developer for over a year. I have created several websites for clients and personal projects. I hold a professional title of Web and Mobile Web Developer recognized by the State, equivalent to a level of education of bac +2. I have gained good knowledge in several programming languages, including C#, PHP, and JavaScript. My experience has allowed me to master the skills required for web development, designing responsive websites, as well as the use of different technologies and frameworks. I am always up-to-date with the latest technological advancements to provide my clients with modern and high-performing websites.";

  const presentationNext =
    language === "fr"
      ? "Vous trouverez dans les pages 'projets' tous les projets réalisé avec à partir de different languages"
      : "In 'Projects' pages you will find all projects realised with different programming languages";

  const carolinedabadiePres =
    language === "fr"
      ? "Le premier site que j'ai créé en ligne était destiné à ma sœur. Il s'agissait d'une combinaison de langages HTML et CSS, ainsi que du framework Bootstrap pour le design. Cette expérience m'a permis de découvrir les fondamentaux de la création de sites web et m'a donné l'envie de continuer à apprendre et à perfectionner mes compétences dans ce domaine."
      : "The first website I created online was intended for my sister. It was a combination of HTML and CSS languages, as well as the Bootstrap framework for design. This experience allowed me to discover the fundamentals of website creation and gave me the desire to continue learning and perfecting my skills in this field.";

  const clevercontrarianPres =
    language === "fr"
      ? "Le blog que j'ai créé pour un ami a été développé sous WordPress, l'un des CMS les plus populaires au monde. WordPress est doté d'une interface utilisateur intuitive qui facilite la création et la gestion de sites web. J'ai également développé un thème personnalisé pour le blog pour le rendre unique et adapté aux besoins spécifiques de mon ami."
      : "The blog I created for a friend was developed using WordPress, one of the most popular CMSs in the world. WordPress has an intuitive user interface that makes it easy to create and manage websites. I also developed a custom theme for the blog to make it unique and tailored to my friend's specific needs.";

  const pierredabadiePres =
    language === "fr"
      ? "J'ai également créé un site vitrine pour un artiste peintre en utilisant la librairie React. Cela m'a permis d'explorer davantage le monde des frameworks JavaScript et de créer une expérience utilisateur plus dynamique et interactive pour les visiteurs du site."
      : "I also created a showcase website for a painter using the React library. This allowed me to further explore the world of JavaScript frameworks and create a more dynamic and interactive user experience for site visitors.";

  const toulonmeritePres =
    language === "fr"
      ? "Je suis actuellement en train de travailler sur un blog appelé 'Toulon Mérite un Grand Sporting'. Si le site est approuvé, il sera présenté sous WordPress, un CMS populaire pour la création de blogs. J'ai hâte de partager mes avancées avec vous !"
      : "I am currently working on a blog called 'Toulon Mérite un Grand Sporting'. If the site is approved, it will be presented on WordPress, a popular CMS for blog creation. I look forward to sharing my progress with you!";

  const accomplishments =
    language === "fr" ? "Mes réalisations" : "My Accomplishments";

  const draft = language === "fr" ? "ébauche" : "draft";
  return (
    <>
      <div className={`${dark ? "dark" : "light"}`}>
        <div className="main_page">
          <img
            src={dark ? logoDark : logo}
            className="animate__animated animate__zoomIn main-page-fr--logo"
            alt="JMD Developpeur Web"
          />
          <h1 className="animate__animated animate__zoomIn main-title">
            JMD Web Development
          </h1>
          <h2 className="maintitle">{intro}</h2>
          <br></br>

          <div className="main_page--content">
            <p>{presentation}</p>
            <br></br>
            <p>{presentationNext}</p>
          </div>
          {console.log(isDarkMode)}
          <div className="main-page-accomplishment">
            <h2 id="main-page-second-title">{accomplishments}</h2>
            <ul className="main-page-accomplishments">
              <li className="main-page-accomplishements-detail">
                <h4>Caroline Dabadie | Coiffure à Domicile</h4>
                <a href="https://www.carolinedabadie.fr">
                  <img
                    className="main-page-thumbnail"
                    src={SCCaro}
                    alt="Caroline Dabadie | Coiffure à domicile"
                    loading="lazy"
                    lazy="true"
                  />
                </a>
                <p>{carolinedabadiePres}</p>
              </li>

              <li className="main-page-accomplishements-detail">
                <h4>The Clever Contrarian | The Daily Kaizen</h4>
                <a href="https://www.clevercontrarian.com">
                  <img
                    className="main-page-thumbnail"
                    src={SCClever}
                    alt="Daily Kaizen"
                    loading="lazy"
                    lazy="true"
                  />
                </a>
                <p>{clevercontrarianPres}</p>
              </li>

              <li className="main-page-accomplishements-detail">
                <h4>Pierre Dabadie | Artiste Peintre</h4>
                <a href="https://www.pierredabadie.fr">
                  <img
                    className="main-page-thumbnail"
                    src={SCDad}
                    alt="Pierre Dabadie | Artiste peintre"
                    loading="lazy"
                    lazy="true"
                  />
                </a>
                <p>{pierredabadiePres}</p>
              </li>

              <li className="main-page-accomplishements-detail">
                <h4>Toulon Mérite un Grand Sporting ({draft})</h4>
                <a href="https://www.jmdwebdev.com/toulonmerite">
                  <img
                    className="main-page-thumbnail"
                    src={SCToulon}
                    alt="Toulon Mérite un grand Sporting"
                    loading="lazy"
                    lazy="true"
                  />
                </a>
                <p>{toulonmeritePres}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPagefr;
