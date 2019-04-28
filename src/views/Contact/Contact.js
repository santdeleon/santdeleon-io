import React, { useState, useEffect } from 'react';
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
    document.title = "Sant Deleon | Contact";
  });

  return (
    <section id="hello">
      <Navbar refresh={props.refresh} home={props.home} clearForm={clearForm}/>
      <div className="hyphens"></div>

      <div className="Contact container flex">
        <div className="Contact-content flex column">
          <div className="Contact-text flex">
            <h1 className="title text-center">Hey, you made it! What can I do for you today?</h1>
          </div>

          <div className="Contact-form flex">
            <form
              action="https://formspree.io/sant@santdeleon.co"
              id="contactForm"
              className="form flex column"
              method="POST"
            >
              <div className="Contact-form-inputs flex column">
                <div className="input-group flex column">
                  <label for="name">Name</label>
                  <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required/>
                </div>

                <div className="input-group flex column">
                  <label for="email">Email</label>
                  <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
              </div>

              <div className="Contact-form-textarea">
                <div className="input-group flex column">
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
                <button className="btn" for="contactForm" type="submit">Send</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
