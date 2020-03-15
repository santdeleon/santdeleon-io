import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLink from '../NavLink/NavLink';
import Wolf from "../../assets/img/wolf.svg";
import './Sidebar.css';


function Sidebar(props) {

  return (
    <div id="Sidebar" className="Sidebar">
      <div
        className={`flex flex-column align-items-center justify-content-around menu-wrap ${(props.showSidebar === true) ? "menu-show" : ""}`}
        style={(props.theme === "light") ? { backgroundColor: "#fff" } : { backgroundColor: "#131313" }}
      >
        <div className="sidebar-links flex flex-column align-items-center justify-content-center text-center">
          <ul className="sidebar-menu flex flex-column align-items-center">
            {props.navLinks.map(link => <NavLink key={link.id} name={link.name} href={link.href} icon={link.icon}/>)}
          </ul>
        </div>

        <div className="sidebar-wolf-logo-wrapper flex align-items-center justify-content-center">
          <img className="sidebar-wolf-logo" src={Wolf} alt="Wolf"/>
        </div>

        <div className="sidebar-social-links flex align-items-center justify-content-center">
          {Object.keys(props.socialIcons).map(icon => {
            return  <a href={props.socialIcons[icon].url} key={props.socialIcons[icon].id} className="social-icon-container flex" target="_blank" rel="noopener noreferrer" aria-label={icon}>
                      <FontAwesomeIcon className="social-icon" icon={props.socialIcons[icon].icon}/>
                    </a>
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
