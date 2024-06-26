import React, { useState, useContext } from "react";
import logo from "../../img/JMD Web Dev.png";
import logoDark from "../../img/JMD Web Dev - dark.png";
import "../Contact/ContactForm.css";
import "../LanguageSelector/LanguageSelector.css";
import { DarkModeContext } from "../DarkMode/DarkModeContext";
import { toast, ToastContainer } from "react-toastify"; // Import these
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [lastName, setLastname] = useState("");
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      toast.error(prenom);
      return;
    }

    if (!lastName.trim()) {
      toast.error(nom);
      return;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      toast.error(emailErr);
      return;
    }

    const emailData = {
      subject: "Nouveau message de JMDWebdev.com !",
      message: `Lastname: ${lastName}\nFirstname: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
      send_to: "contact@jmdwebdev.com",
      sent_from: email,
      reply_to: email,
    };

    // Send the email
    fetch("https://mail.jmdwebdev.com/", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          //console.log("Email sent successfully!");
          toast.success(mailSuccess);

          // Display a success message or clear the form here
        } else {
          throw new Error("Failed to send email");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(mailFailed);

        // Display an error message here
      });

    // Send the email (using your preferred method or library)
    // For example, you can use the `fetch` API to send a POST request to a server-side endpoint that handles the email sending.

    // Clear the form fields
    setLastname("");
    setFirstname("");
    setEmail("");
    setMessage("");

    // Display a success message or perform any desired action
  };
  //dark mode and language setting
  const isDarkMode = useContext(DarkModeContext);
  const dark = isDarkMode.darkMode;
  const language = localStorage.getItem("language") || "en";
  //content
  const title = language === "fr" ? "Me contacter" : "Contact Me";
  const lastNameCustomer = language === "fr" ? "Nom de famille" : "Lastname";
  const firstNameCustomer = language === "fr" ? "Prénom" : "Firstname";
  const mail = language === "fr" ? "Couriel" : "Email";
  const submit = language === "fr" ? "Envoyer" : "Submit";
  const intro =
    language === "fr"
      ? "Vous aspirez à concrétiser votre projet en ligne avec succès ? Je suis là pour vous aider ! Que vous soyez une entreprise en pleine expansion, un entrepreneur passionné ou simplement une personne désireuse de créer une présence web percutante, je suis enchanté de vous proposer une évaluation gratuite de votre projet web. N'hésitez pas à me contacter dès maintenant en utilisant le formulaire ci-dessous. Fournissez-moi quelques détails sur votre projet, vos coordonnées et vos disponibilités, et je vous recontacterai rapidement pour organiser une consultation gratuite. Ensemble, nous pourrons explorer les possibilités qui s'offrent à vous et commencer à réaliser votre projet web dès aujourd'hui."
      : "Are you eager to successfully bring your online project to life? I'm here to assist you! Whether you're a rapidly growing company, a passionate entrepreneur, or simply someone looking to create a powerful web presence, I'm delighted to offer you a free evaluation of your web project. Feel free to contact me now using the form below. Provide me with some details about your project, your contact information, and your availability, and I will get back to you promptly to arrange a free consultation. Together, we can explore the possibilities available to you and start working on your web project today.";
  const placeholderMessage =
    language === "fr"
      ? "Je souhaiterais vous contacter pour mon projet..."
      : "I would like to contact about my project...";
  const mailSuccess =
    language === "fr"
      ? "Votre demande a été envoyée !"
      : "Your request has been sent!";
  const mailFailed =
    language === "fr"
      ? "La demande n'a pas pu aboutir, merci de réessayer."
      : "Your request cannot be completed, please try again.";

  const prenom = language === "fr" ? "prénom requis" : "First Name Required";
  const nom =
    language === "fr" ? "nom de famille requis" : "Lastname Name Required";
  const emailErr = language === "fr" ? "courriel invalide" : "Invalid Email";

  return (
    <>
      <div className={`${dark ? "dark" : "light"}`}>
        <img
          src={dark ? logoDark : logo}
          className="animate__animated animate__zoomIn contact_logo"
          alt="JMD Developpeur Web"
        />
        <h1 className="animate__animated animate__zoomIn main-title">
          JMD Web Development
        </h1>

        <h2 className="contact_title">{title}</h2>
        <br></br>

        <p className="contact_intro">{intro}</p>

        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <div className="contact_form_names">
              <div className="contact_form_lastName">
                <label htmlFor="lastName" className="contact_form_label--name">
                  {lastNameCustomer}:
                </label>
                <br></br>
                <input
                  type="text"
                  id="name"
                  value={lastName}
                  placeholder="Doe"
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              <div className="contact_form_firstName">
                <label htmlFor="firstName" className="contact_form_label--name">
                  {firstNameCustomer}:
                </label>
                <br></br>
                <input
                  type="text"
                  id="name"
                  value={firstName}
                  placeholder="John"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="contact_form_email">
              <label htmlFor="email">{mail}:</label>
              <br></br>
              <input
                type="email"
                id="email"
                placeholder="john.doe@host.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="contact_form_message">
              <label htmlFor="message">Message:</label>
              <br></br>
              <textarea
                id="message"
                value={message}
                placeholder={placeholderMessage}
                rows="20"
                cols="100"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              className="contact_form_capchat"
            />
            <button type="submit" className="contact_from_submit">
              {submit}
            </button>
          </form>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default ContactForm;
