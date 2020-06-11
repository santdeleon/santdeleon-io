import React from "react";
import { object } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const Footer = ({ socialIcons, copyright, heart, theme }) => {
  return (
    <footer className="Footer container">
      <div className="footer-wrapper flex align-items-center justify-content-between">
        <div className="footer-social-icons flex align-items-center">
          {Object.keys(socialIcons).map(icon => {
            return (
              <a
                href={socialIcons[icon].url}
                key={socialIcons[icon].id}
                className="social-icon-container flex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon}
                title={`${icon} link`}
              >
                <FontAwesomeIcon
                  className="social-icon"
                  icon={socialIcons[icon].icon}
                />
              </a>
            );
          })}
        </div>

        <div className="flex align-items-center copyright-wrapper">
          <h4 className="m-0 align-items-center fw-normal">santdeleon. 2020</h4>
        </div>

        <div className="flex align-items-center heart-wrapper">
          <h4 className="m-0 flex align-items-center fw-normal">
            Made with{" "}
            <FontAwesomeIcon className="social-icon heart" icon={heart} /> by
            Sant
          </h4>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  socialIcons: object.isRequired,
  copyright: object.isRequired,
  heart: object.isRequired
};

export default Footer;
