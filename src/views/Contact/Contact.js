import React, { useState, useEffect } from 'react';
import './Contact.css';

import Navbar from '../../components/Navbar/Navbar';

{/* <form
  action="https://formspree.io/sant@santdeleon.co"
  id="contactForm"
  className="form flex flex-column"
  method="POST"
>
  <div className="Contact-form-inputs flex flex-column ">
    <div className="input-group flex">
      <label for="name">Name</label>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required/>
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

  <div className="Contact-button flex">
    <button className="btn" type="submit">
    Send
    </button>
  </div>
</form> */}

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
    <div className="hyphens"></div>

    <div id="Contact" className="Contact container">
      <div className="flex contact-nav justify-content-between">
        <div className="nav-logo flex">
          hello
        </div>

        <div className="flex contact-nav-links">
        
        </div>
      </div>


      <div className="Contact-content flex flex-column align-items-center" style={{border: '1px solid red'}}>
        <div className="Contact-text flex" style={{border: '1px solid red'}}>
          <h1 className="title text-center">Hey, you made it! What can I do for you today?</h1>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
