import React, { useState } from "react";

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
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

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
