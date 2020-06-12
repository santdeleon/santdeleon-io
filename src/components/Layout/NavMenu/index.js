import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { array, bool, func, string } from "prop-types";
import { Folder, Code, MessageCircle } from "react-feather";

import NavLink from "./NavLink";

import "./index.css";

import GithubLight from "../../../assets/img/github-light.svg";
import GithubDark from "../../../assets/img/github-dark.svg";
import Sun from "../../../assets/img/sun.svg";
import Moon from "../../../assets/img/moon.svg";

const propTypes = {
  navLinks: array.isRequired,
  showSidebar: bool.isRequired,
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

const defaultProps = {
  navLinks: [],
  showSidebar: false,
  theme: "light",
  toggleTheme: () => {}
};

const navData = [
  {
    id: 0,
    name: "Portfolio",
    href: "#Portfolio",
    icon: <Folder size="20" height={16} />
  },
  {
    id: 1,
    name: "Technologies",
    href: "#Tech",
    icon: <Code size="20" height={16} />
  },
  {
    id: 2,
    name: "Get in touch",
    href: "/contact",
    icon: <MessageCircle size="20" height={16} />
  }
];

const NavMenu = ({ theme, toggleTheme, particles }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

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
    <div className="NavMenu">
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
          {navData.map(link => (
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
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
            title="Github"
            aria-label="Github"
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

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;
export default NavMenu;
