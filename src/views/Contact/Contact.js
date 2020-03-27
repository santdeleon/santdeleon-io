import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/img/logo.svg";

import './Contact.css';

import Navbar from '../../components/Navbar/Navbar';


function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function clearForm(e) {
    setName('');
    setEmail('');
    setMessage('');
  }


  useEffect(() => {
    document.title = "Sant Deleon - Contact";
  });

  return (
    <>
    <div id="Contact" className="Contact container">
      <div className="flex contact-nav justify-content-between my-2">
        <div className="nav-logo flex">
          <img src={Logo} alt="App Logo"/>
        </div>

        <div className="flexcontact-nav-links">
          <a href="/">
            <button className="home-btn btn">
              <FontAwesomeIcon icon={props.home} />
            </button>
          </a>

          <button className="refresh-btn btn ml-2" onClick={clearForm}>
            <FontAwesomeIcon icon={props.refresh} />
          </button>
        </div>
      </div>

      <div className="hyphens"></div>


      <div className="contact-nav-header flex flex-column align-items-center my-5">
        <div className="Contact-text flex">
          <h2 className="text-center">Hey, you made it! <br/> What can I do for you today?</h2>
        </div>
      </div>

      <form action="https://formspree.io/sant@santdeleon.co" id="contactForm" className="form flex flex-column mx-auto" method="POST">
        <div className="Contact-form-inputs flex flex-column">
          <div className="input-group flex flex-column">
            <label for="name">Name</label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>

          <div className="input-group flex flex-column">
            <label for="email">Email</label>
            <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
        </div>

        <div className="Contact-form-textarea">
          <div className="input-group flex flex-column">
            <label for="message">Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              rows={5}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex justify-content-center mt-4">
          <button className="contact-button btn" type="submit">Send</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Contact;
