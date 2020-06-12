import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

function Contact({ home, refresh, particles }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  window.onload = function() {
    particles.init({
      selector: ".background"
    });
  };

  function clearForm(e) {
    setName("");
    setEmail("");
    setMessage("");
  }

  useEffect(() => {
    document.title = "Sant | Contact";
  });

  return (
    <>
      <div id="Contact" className="Contact container">
        <div className="flex contact-nav justify-content-between my-2">
          <div className="nav-logo flex">
            <a
              className="app-logo"
              href="http://santdeleon.co"
              aria-label="Home"
              title="Home"
            >
              <h2 className="m-0">santdeleon.</h2>
            </a>
          </div>

          <div className="flexcontact-nav-links">
            <a href="/">
              <button className="home-btn btn">
                <FontAwesomeIcon icon={home} />
              </button>
            </a>

            <button className="refresh-btn btn ml-2" onClick={clearForm}>
              <FontAwesomeIcon icon={refresh} />
            </button>
          </div>
        </div>

        <div className="hyphens"></div>

        <div className="contact-nav-header flex flex-column align-items-center my-5">
          <div className="Contact-text flex">
            <h2 className="text-center">
              Hey, you made it! <br /> What can I do for you today?
            </h2>
          </div>
        </div>

        <form
          action="https://formspree.io/sant@santdeleon.co"
          id="contactForm"
          className="form flex flex-column mx-auto"
          method="POST"
        >
          <div className="Contact-form-inputs flex flex-column">
            <div className="input-group flex flex-column">
              <label for="name">Name:</label>
              <input
                type="text"
                name="name"
                className="pl-2"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>

            <div className="input-group flex flex-column">
              <label for="email">Email:</label>
              <input
                type="text"
                name="email"
                className="pl-2"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <div className="Contact-form-textarea">
            <div className="input-group flex flex-column">
              <label for="message">Message:</label>
              <textarea
                type="text"
                name="message"
                className="pl-2 pt-2"
                value={message}
                rows={5}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell me what you're thinking..."
                required
              />
            </div>
          </div>

          <div className="flex justify-content-center mt-4">
            <button className="contact-button btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
