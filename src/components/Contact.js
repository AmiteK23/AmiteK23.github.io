import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; // Ensure you have custom styling for this component

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    emailjs
      .send(
        "service_3yblrdl", // Replace with your EmailJS service ID
        "template_kpn0f9c", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Z0goRkPwNXWYWxv2u" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </label>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="contact-submit">
            Send
          </button>
        </form>
      ) : (
        <div className="thank-you">
          <h3>Thank you for reaching out!</h3>
          <p>I will get back to you as soon as possible.</p>
        </div>
      )}
      <footer className="contact-footer">
        <img
          src={require("C:/Users/Amit2/Desktop/Coding/Projects/my-website/src/assets/AMITEK_logo.jpg")}
          alt="My Logo"
          className="footer-logo"
        />
        <div className="social-links">
          <a
            href="www.linkedin.com/in/amit-levi-538558221"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/_amit__levi_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/AmiteK23"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:amit23082@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
