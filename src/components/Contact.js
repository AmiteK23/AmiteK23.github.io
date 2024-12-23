import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, Torus } from "@react-three/drei";
import "./Contact.css";

function AnimatedLogo() {
  const logoRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (logoRef.current) {
      logoRef.current.rotation.x = time * 0.2;
      logoRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <Torus ref={logoRef} args={[1, 0.4, 16, 100]} scale={1.5}>
      <MeshWobbleMaterial
        color="#0078ff"
        attach="material"
        speed={0.6}
        factor={0.3}
      />
    </Torus>
  );
}

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
    setError("");

    emailjs
      .send(
        "service_3yblrdl",
        "template_kpn0f9c",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Z0goRkPwNXWYWxv2u"
      )
      .then(
        () => {
          setIsSubmitted(true);
        },
        () => {
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <Canvas className="logo-canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 3]} />
        <AnimatedLogo />
      </Canvas>
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
          src={require("../assets/AMITEK_logo.jpg")}
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
