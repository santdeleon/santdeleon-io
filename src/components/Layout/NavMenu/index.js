import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { array, bool, func, string, object } from "prop-types";

import NavLink from "./NavLink";

import GithubLight from "../../../assets/img/github-light.svg";
import GithubDark from "../../../assets/img/github-dark.svg";
import Sun from "../../../assets/img/sun.svg";
import Moon from "../../../assets/img/moon.svg";

import "./index.css";

const NavMenu = ({
  navLinks,
  showSidebar,
  theme,
  toggleTheme,
  toggleSidebar,
  socialIcons,
  particles
}) => {
  const menuTopBottomColor =
    theme === "light" ? { borderColor: "#000" } : { borderColor: "#fff" };
  const menuMiddleColor =
    theme === "light"
      ? { backgroundColor: "#000" }
      : { backgroundColor: "#fff" };
  const textColor = theme === "light" ? { color: "#000" } : { color: "#fff" };

  const refreshParticles = () => {
    const particleColor = theme === "dark" ? "#222" : "#B8BABE";

    particles.init({
      color: particleColor,
      speed: 0.2
    });
  };

  return (
    <div id="NavMenu" className="NavMenu">
      <Navbar>
        <Navbar.Brand
          href="https://santdeleon.io"
          aria-label="Home"
          title="Home"
          style={textColor}
        >
          <span role="img" aria-label="Rainbow Emoji">
            🌈
          </span>{" "}
          Sant Deleon
        </Navbar.Brand>
        <Nav className="mr-auto d-none d-md-flex">
          {navLinks.map(link => (
            <NavLink
              className="mr-2"
              key={link.id}
              name={link.name}
              href={link.href}
              icon={link.icon}
              theme={theme}
            />
          ))}
        </Nav>
        <Nav className="ml-auto">
          <span
            className={`toggle-button d-block d-md-none ${showSidebar &&
              "button-open"}`}
            onClick={toggleSidebar}
          >
            <div
              className="menu-bar menu-bar-top"
              style={menuTopBottomColor}
            ></div>
            <div
              className="menu-bar menu-bar-middle"
              style={menuMiddleColor}
            ></div>
            <div
              className="menu-bar menu-bar-bottom"
              style={menuTopBottomColor}
            ></div>
          </span>
          <a
            href="https://github.com/santdeleon"
            className="mr-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            title="Github"
          >
            {theme === "light" ? (
              <img src={GithubLight} alt="Github" />
            ) : (
              <img src={GithubDark} alt="Github" />
            )}
          </a>
          <div>
            <span
              role="button"
              onClick={() => {
                toggleTheme();
                refreshParticles();
              }}
              title="Dark/Light Mode"
              aria-label="Dark/Light Mode"
            >
              {theme === "dark" ? (
                <img src={Sun} alt="Light Mode" />
              ) : (
                <img src={Moon} alt="Dark Mode" />
              )}
            </span>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

NavMenu.propTypes = {
  navLinks: array.isRequired,
  showSidebar: bool.isRequired,
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  toggleSidebar: func.isRequired,
  socialIcons: object.isRequired
};

export default NavMenu;
