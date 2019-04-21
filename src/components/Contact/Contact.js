import React from 'react';
import './Contact.css';

import Navbar from '../Navbar/Navbar';


function Contact(props) {
  return (
    <section id="hello">
      <Navbar refresh={props.refresh} home={props.home}/>
      <div className="hyphens"></div>

      <div className="Contact container flex">
        <div className="Contact-content flex column">
          <div className="Contact-text flex">
            <h1>Hey, you made it! What can I do for you today?</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
