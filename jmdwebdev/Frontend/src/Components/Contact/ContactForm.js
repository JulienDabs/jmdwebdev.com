import React, { useState } from "react";
import logo from "../../img/JMD Web Dev.png"
import logoDark from "../../img/JMD Web Dev - dark.png"
import "../LanguageSelector/LanguageSelector.css"


function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compose the email
    const to = "contact@jmdwebdev.com";
    const subject = "New contact form submission";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Send the email (using your preferred method or library)
    // For example, you can use the `fetch` API to send a POST request to a server-side endpoint that handles the email sending.

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");

    // Display a success message or perform any desired action
    console.log("Email sent successfully!");
  
  };
      //dark mode and language setting
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const language = localStorage.getItem('language') || 'en';
    const title = language === 'fr' ? "Me contacter" : "Contact Me";
    const customerName = language === 'fr' ? "Nom" : "Name"; 
    const mail = language === 'fr' ? "Couriel" : "Email"; 
    const submit = language === 'fr' ? "Envoyer" : "Submit"; 
    const intro = language === 'fr' ? "Vous aspirez à concrétiser votre projet en ligne avec succès ? Je suis là pour vous aider ! Que vous soyez une entreprise en pleine expansion, un entrepreneur passionné ou simplement une personne désireuse de créer une présence web percutante, je suis enchanté de vous proposer une évaluation gratuite de votre projet web. N'hésitez pas à me contacter dès maintenant en utilisant le formulaire ci-dessous. Fournissez-moi quelques détails sur votre projet, vos coordonnées et vos disponibilités, et je vous recontacterai rapidement pour organiser une consultation gratuite. Ensemble, nous pourrons explorer les possibilités qui s'offrent à vous et commencer à réaliser votre projet web dès aujourd'hui." : "Are you eager to successfully bring your online project to life? I'm here to assist you! Whether you're a rapidly growing company, a passionate entrepreneur, or simply someone looking to create a powerful web presence, I'm delighted to offer you a free evaluation of your web project. Feel free to contact me now using the form below. Provide me with some details about your project, your contact information, and your availability, and I will get back to you promptly to arrange a free consultation. Together, we can explore the possibilities available to you and start working on your web project today.";

  return (

    <>
    <img src={isDarkMode ? logoDark : logo} className="animate__animated animate__zoomIn contact_logo" alt="JMD Developpeur Web"/>
          <h1 className="animate__animated animate__zoomIn main-title">JMD Web Development</h1>

          <h2 className="contact_title">{title}</h2><br></br>

          <p className="contact_intro">{intro}</p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">{customerName}:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">{mail}:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">{submit}</button>
    </form>
    </>
  );
}

export default ContactForm;
