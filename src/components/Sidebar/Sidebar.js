import React from 'react';
import { array, bool, string, func, object } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavLink from '../NavLink/NavLink';

import Wolf from "../../assets/img/wolf.svg";

import './Sidebar.css';


const Sidebar = ({ theme, showSidebar, navLinks, socialIcons }) => {
  return (
    <div id="Sidebar" className="Sidebar">
      <div
        className={`flex flex-column align-items-center justify-content-around menu-wrap ${(showSidebar === true) ? "menu-show" : ""}`}
        style={(theme === "light") ? { backgroundColor: "#fff" } : { backgroundColor: "#212121" }}
      >
        <div className="sidebar-links flex flex-column align-items-center justify-content-center text-center">
          <ul className="sidebar-menu flex flex-column align-items-center p-0">
            {navLinks.map(link => <NavLink key={link.id} name={link.name} href={link.href} icon={link.icon} theme={theme}/>)}
          </ul>
        </div>

        <div className="sidebar-wolf-logo-wrapper flex align-items-center justify-content-center">
          <img className="sidebar-wolf-logo" src={Wolf} alt="Wolf"/>
        </div>

        <div className="sidebar-social-links flex align-items-center justify-content-center">
          {Object.keys(socialIcons).map(icon => {
            return  <a href={socialIcons[icon].url} key={socialIcons[icon].id} className="social-icon-container flex" target="_blank" rel="noopener noreferrer" aria-label={icon}>
                      <FontAwesomeIcon className="social-icon" icon={socialIcons[icon].icon}/>
                    </a>
          })}
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  navLinks: array.isRequired,
  showSidebar: bool.isRequired,
  theme: string.isRequired,
  socialIcons: object.isRequired,
};

export default Sidebar;
