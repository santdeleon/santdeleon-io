import React, { useEffect } from 'react';
import './Contact.css';

import Navbar from '../../components/Navbar/Navbar';


function Contact(props) {

  useEffect(() => {
    document.title = "Sant Deleon | Contact";
  });

  return (
    <section id="hello">
      <Navbar refresh={props.refresh} home={props.home}/>
      <div className="hyphens"></div>

      <div className="Contact container flex">
        <div className="Contact-content flex column">
          <div className="Contact-text flex">
            <h1 className="title text-center">Hey, you made it! What can I do for you today?</h1>
          </div>

          <div className="Contact-form flex">
            <form id="contactForm" className="form flex column">
              <div className="Contact-form-inputs flex column">
                <div className="input-group flex column">
                  <label for="name">Name</label>
                  <input type="text" name="name" />
                </div>

                <div className="input-group flex column">
                  <label for="email">Email</label>
                  <input type="text" name="email" />
                </div>
              </div>

              <div className="Contact-form-textarea">
                <div className="input-group flex column">
                  <label for="message">Message</label>
                  <textarea
                  type="text"
                  name="message"
                  rows={5}
                  />
                </div>
              </div>

              <div className="Contact-button flex">
                <button className="btn" type="submit">Send</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
