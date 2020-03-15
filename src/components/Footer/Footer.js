import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavLink from '../NavLink/NavLink';

import './Footer.css';


function Footer(props) {

  return (
    <footer className="Footer container">
      <div className="hyphens"></div>

      <div className="footer-wrapper flex align-items-center justify-content-between">
        <div className="footer-social-icons flex align-items-center">
          {Object.keys(props.socialIcons).map(icon => {
            return  <a href={props.socialIcons[icon].url} key={props.socialIcons[icon].id} className="social-icon-container flex" target="_blank" rel="noopener noreferrer" aria-label={icon}>
                      <FontAwesomeIcon className="social-icon" icon={props.socialIcons[icon].icon}/>
                    </a>
          })}
        </div>

        <div className="flex align-items-center">
          <h4 className="m-0 flex align-items-center fw-normal">Made with <FontAwesomeIcon className="social-icon heart" icon={props.heart} /> by Sant</h4>
        </div>

        <div className="flex align-items-center copyright-wrapper">
          <h4 className="m-0 flex align-items-center fw-normal"><FontAwesomeIcon className="social-icon copyright" icon={props.copyright} /> <span>Copyright 2020</span></h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
