import React, { useState } from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer id="footer">
      <div className="Footer container flex column has-padding has-pattern-wallpaper">
        <div className="Footer-banner flex">
          <h1 className="banner-title">Start a project</h1>

          <h4 className="banner-subtitle text-center text-thin">
            Interested in working together? Sweet! Let's chat.
            <br />
            I'll buy the coffee <i>(or beer)</i>
          </h4>

          <a
            className="btn banner-btn"
            href="/contact">
            Let's do this
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
