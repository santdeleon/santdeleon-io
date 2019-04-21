import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';


function Footer(props) {
  const [socialIcons] = useState({
    github: {
      id: 0,
      icon: props.github,
      url: 'https://github.com/santdeleon'
    },
    freecodecamp: {
      id: 1,
      icon: props.fcc,
      url: 'https://www.freecodecamp.org/santdeleon'
    },
    angellist: {
      id: 2,
      icon: props.angellist,
      url: 'https://angel.co/santdeleon'
    },
    linkedin: {
      id: 3,
      icon: props.linkedin,
      url: 'https://www.linkedin.com/in/sant-deleon/'
    },
    stackoverflow: {
      id: 4,
      icon: props.stackO,
      url: 'https://stackoverflow.com/users/10100919/santiago-deleon'
    },
    mail: {
      id: 5,
      icon: props.mail,
      url: 'mailto:sant@santdeleon.co'
    },
  })
  return (
    <footer id="footer">
      <div className="Footer container flex column  has-pattern-wallpaper">
        <div className="Footer-banner flex">
          <h1 className="banner-title">Start a project</h1>
          <h4 className="banner-subtitle text-center text-thin">
            Interested in working together? Sweet! Let's chat.
            <br />
            I'll buy the coffee <i>(or beer)</i>
          </h4>
          <Link to="/contact" className="btn banner-btn">Let's do this</Link>
        </div>

        <div className="Footer-body flex column">
          <img src={require('../../assets/img/logo2.png')} width={80} alt="logo2" />
          <h4 className="text-center text-thin">Want to learn more? Check me out on social media.</h4>

          <div className="social flex">
            {Object.keys(socialIcons).map(icon => {
              return  <a href={socialIcons[icon].url} key={socialIcons[icon].id} className="social-icon-container flex" target="_blank" rel="noopener noreferrer"  aria-label={icon}>
                        <FontAwesomeIcon className="social-icon" icon={socialIcons[icon].icon}/>
                      </a>
            })}
          </div>

          <h5 className="text-center text-thin">
            Made with
            <span className="heart">
              <FontAwesomeIcon className="social-icon" icon={props.heart}/>
            </span>
            by Sant Deleon
            <br />
            <span className="copyright">
              <FontAwesomeIcon className="social-icon" icon={props.copyright}/>
            </span>
            Copyright 2019
          </h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
