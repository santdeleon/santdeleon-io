import React from 'react';
import { array, bool, string, object } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavLink from '../NavLink/NavLink';

import SantLight from '../../assets/img/sant-light.svg';
import SantDark from '../../assets/img/sant-dark.svg';

import './Sidebar.css';


const Sidebar = ({ theme, showSidebar, navLinks, socialIcons, toggleSidebar, }) => {
  return (
    <div id="Sidebar" className="Sidebar">
      <div
        className={`flex flex-column align-items-center justify-content-around menu-wrap ${(showSidebar === true) ? "menu-show" : ""}`}
        style={(theme === "light") ? { backgroundColor: "#fff" } : { backgroundColor: "#212121" }}
      >
        <div className="sidebar-links flex flex-column align-items-center justify-content-center text-center">
          <ul className="sidebar-menu flex flex-column align-items-center p-0">
            {navLinks.map(link => <NavLink key={link.id} name={link.name} href={link.href} icon={link.icon} theme={theme} toggleSidebar={toggleSidebar} isSidebarLink={true}/>)}
          </ul>
        </div>

        <div className="sidebar-wolf-logo-wrapper flex align-items-center justify-content-center">
          <div className="sidebar-logo-wrapper flex justify-content-center align-items-center">
            {(theme === 'light') ?
            <img src={SantLight} className="m-0 p-0" alt="Lightmode Header Cartoon" />
            :
            <img src={SantDark} className="m-0 p-0" alt="Darkmode Header Cartoon" />
            }
          </div>
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
