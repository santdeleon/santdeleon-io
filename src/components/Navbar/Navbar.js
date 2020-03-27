import React from "react";
import { array, bool, func, string, object } from 'prop-types';
import { Search } from 'react-feather';

import NavLink from '../NavLink/NavLink';

import './Navbar.css';


const Navbar = ({navLinks, showSidebar, theme, toggleTheme, toggleSidebar, socialIcons, particles}) => {

  const refreshParticles = () => {
    const color = (theme === "dark") ? "#222" : "#B8BABE";

    particles.init({
      color: color,
      speed: 0.2
    });
  }

  return (
    <div id="Navbar" className="Navbar">
      <nav className="navbar flex align-items-center justify-content-between">
        <div className="nav-left flex align-items-center">
          <a className="app-logo" href="http://santdeleon.co" aria-label="Home" title="Home"><h2 className="m-0">santdeleon.</h2></a>

          <div className="nav-links-wrapper navbar-nav flex align-items-center">
            <ul className="navbar-menu flex align-items-center">
              {navLinks.map(link => <NavLink key={link.id} name={link.name} href={link.href} icon={link.icon} theme={theme} />)}
            </ul>
          </div>
        </div>

        <div className="nav-right flex align-items-center">
          <span className={`toggle-button ${(showSidebar === true) ? "button-open" : ""}`} onClick={toggleSidebar}>
            <div className="menu-bar menu-bar-top" style={(theme === "light") ? { borderColor: "#000" } : { borderColor: "#fff" }}></div>
            <div className="menu-bar menu-bar-middle" style={(theme === "light") ? { backgroundColor: "#000" } : { backgroundColor: "#fff" }}></div>
            <div className="menu-bar menu-bar-bottom" style={(theme === "light") ? { borderColor: "#000" } : { borderColor: "#fff" }}></div>
          </span>

          <div className="search-wrapper flex align-items-center">
            <label htmlFor="search-bar"></label>
            <input id="search" type="text" name="search-bar" className="search-bar" style={(theme === "light") ? { backgroundColor: "#fee78d" } : { borderColor: '#9e558a', backgroundColor: "#e375e2", boxShadow: 'inset 0 0 0 0.04em #6f1db7, 0px 3px 0px 0px rgba(40, 40, 40, 0.4)' }}/>
            <Search className="search-icon" size={18} />
          </div>

          <a href="https://github.com/santdeleon" className="github-link" target="_blank" rel="noopener noreferrer" aria-label="Github" title="Github">
            <svg id="githubIcon" width="22" height="30" version="1.1" viewBox="0 0 19 22">
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fillRule="nonzero" stroke={`${(theme === "light") ? "#000" : "#fff"}`} transform="translate(-46.000000, -2.000000)">
                  <g transform="translate(0.000000, 2.000000)">
                    <path className="github-icon-dimensions" d="M58.8972767,19.6145492 L58.8972767,17.4934028 C58.8972767,16.3784561 58.5228424,15.5584034 57.7738655,15.0331892 C58.2431536,14.9871362 58.673948,14.9226178 59.0664652,14.8396893 C59.4589824,14.7567607 59.8741302,14.6369566 60.3116921,14.4803322 C60.7493623,14.3237078 61.1418794,14.1371186 61.4892436,13.9205645 C61.836716,13.7040104 62.1705451,13.4229932 62.4908391,13.0774576 C62.8112414,12.731922 63.0796149,12.3403334 63.2961761,11.9026365 C63.5127373,11.4649396 63.6842538,10.9397255 63.810509,10.3269941 C63.9368724,9.71426271 64,9.03927962 64,8.3021554 C64,6.87395994 63.5443552,5.65767457 62.6329574,4.65329928 C63.0481052,3.54758531 63.0029522,2.34512136 62.4976067,1.04590744 C61.834388,1.06739515 61.2997525,1.15493084 60.8937003,1.30851451 C60.2846219,1.53889002 59.6011006,1.9166572 58.8431364,2.44187133 C57.769426,2.13779999 56.6550021,1.98576432 55.5000271,1.98576432 C54.3360106,1.98576432 53.2261345,2.13779999 52.1703986,2.44187133 C51.6921774,2.11015714 51.0537916,1.62030489 50.2345378,1.30851451 C49.6883685,1.10065426 49.1109871,1.01311857 48.5023933,1.04590744 C48.1354304,2.71984783 48.0903135,3.92231177 48.3670426,4.65329928 C47.4556989,5.65767457 47,6.87395994 47,8.3021554 C47,9.03927962 47.0631817,9.71426271 47.189491,10.3269941 C47.3158004,10.9397255 47.4872627,11.4649396 47.7038239,11.9026365 C47.9203851,12.3403334 48.1888127,12.731922 48.5091609,13.0774576 C48.829509,13.4229932 49.1633381,13.7040104 49.5107564,13.9205645 C49.8581747,14.1371186 50.2506919,14.3237078 50.6883079,14.4803322 C51.125924,14.6369566 51.5410176,14.7567607 51.9335348,14.8396893 C52.326052,14.9226178 52.7569005,14.9871362 53.2261345,15.0331892 C52.486199,15.5491706 52.1162583,16.3692787 52.1162583,17.4934028 L52.1162583,19.6559029 C52.5926195,20.5627671 53.7205334,21.0107731 55.5,20.9999212 C57.2794666,20.9890692 58.4118922,20.5272785 58.8972767,19.6145492 Z"/>
                  </g>
                </g>
              </g>
            </svg>
          </a>

          {
          (theme === "dark")
          ?
            <svg id="sunIcon" className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="25" version="1.1" viewBox="0 0 24 23" aria-label="light mode button" onClick={() => {toggleTheme(); refreshParticles();}}>
              <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="1">
                <g stroke="#fff" transform="translate(1.000000, 0.000000)">
                  <circle className="sun" cx="11" cy="11.507" r="5" />
                  <path className="sun" strokeLinecap="round" d="M12.4412109,2.97817383 L9.39291538,2.97817383" transform="translate(10.484863, 2.478174) rotate(-90.000000) translate(-10.484863, -2.478174)"/>
                  <path className="sun" strokeLinecap="round" d="M19.0388351,4.43089148 L17.0824874,4.43089148" transform="translate(18.060661, 4.430891) rotate(-45.000000) translate(-18.060661, -4.430891)"/>
                  <path className="sun" strokeLinecap="round" d="M21.9697266,11.5066895 L19.0710812,11.5066895"/>
                  <path className="sun" strokeLinecap="round" d="M19.0388351,18.5824874 L17.0824874,18.5824874" transform="translate(18.060661, 18.582487) rotate(45.000000) translate(-18.060661, -18.582487)"/>
                  <path className="sun" strokeLinecap="round" d="M12.9412109,21.5352051 L9.98809762,21.5352051" transform="translate(11.484863, 21.035205) rotate(90.000000) translate(-11.484863, -21.035205)"/>
                  <path className="sun" strokeLinecap="round" d="M4.88723914,18.5824874 L2.93089148,18.5824874" transform="translate(3.909065, 18.582487) rotate(135.000000) translate(-3.909065, -18.582487)"/>
                  <path className="sun" strokeLinecap="round" d="M3.00918598,11.5066895 L2.66453526e-14,11.5066895" transform="translate(1.504593, 11.506689) rotate(180.000000) translate(-1.504593, -11.506689)"/>
                  <path className="sun" strokeLinecap="round" d="M4.88723914,4.43089148 L2.93089148,4.43089148" transform="translate(3.909065, 4.430891) rotate(225.000000) translate(-3.909065, -4.430891)"/>
                </g>
              </g>
            </svg>
          :
            <svg id="moonIcon" className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" version="1.1" viewBox="0 0 24 23" aria-label="dark mode button" onClick={() => {toggleTheme(); refreshParticles();}}>
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g stroke="#000" transform="translate(4.000000, 4.000000)">
                  <path className="moon" d="M5.05590899,-5.24580379e-14 C4.98906163,0.403462803 4.95433153,0.817286714 4.95433153,1.23894741 C4.95433153,5.5346106 8.55879242,9.01693366 13.0051203,9.01693366 C14.0635388,9.01693366 15.0742532,8.81960918 16,8.46096116 C15.3858407,12.1677707 12.0606667,15 8.05078873,15 C3.60446089,15 0,11.5176769 0,7.22201375 C0,3.94890437 2.09267079,1.14800239 5.05590899,1.05082609e-13 Z"/>
                </g>
              </g>
            </svg>
          }
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  navLinks: array.isRequired,
  showSidebar: bool.isRequired,
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  toggleSidebar: func.isRequired,
  socialIcons: object.isRequired,
};

export default Navbar;
