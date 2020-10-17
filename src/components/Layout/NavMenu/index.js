import React from "react";
import { array, bool, func, string } from "prop-types";
import cx from "classnames";
import { Navbar, Nav } from "react-bootstrap";

import NavLink from "./NavLink";

import "./index.css";

import GithubLight from "../../../assets/img/github-light.svg";
import GithubDark from "../../../assets/img/github-dark.svg";
import Sun from "../../../assets/img/sun.svg";
import Moon from "../../../assets/img/moon.svg";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  showSidebar: bool.isRequired,
  setShowSidebar: func.isRequired,
  navData: array.isRequired
};

const NavMenu = ({
  theme,
  toggleTheme,
  showSidebar,
  setShowSidebar,
  navData
}) => {
  const menuBarColor =
    theme === "light"
      ? {
          backgroundColor: "#000",
          borderColor: "#000"
        }
      : {
          backgroundColor: "#fff",
          borderColor: "#fff"
        };

  return (
    <div id="NavMenu" className="NavMenu">
      <Navbar>
        <Navbar.Brand
          href="https://santdeleon.io"
          aria-label="Home"
          title="Home"
          style={theme === "light" ? { color: "#000" } : { color: "#fff" }}
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
              icon={link.Icon}
              theme={theme}
            />
          ))}
        </Nav>
        <Nav className="ml-auto align-items-center">
          <span
            className={cx("toggle-button d-md-none d-flex", {
              "button-open": showSidebar
            })}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <div className="menu-bar menu-bar-top" style={menuBarColor} />
            <div className="menu-bar menu-bar-middle" style={menuBarColor} />
            <div className="menu-bar menu-bar-bottom" style={menuBarColor} />
          </span>
          <a
            href="https://github.com/santdeleon"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
            title="Github"
            aria-label="Github"
          >
            <img
              src={theme === "light" ? GithubLight : GithubDark}
              alt="Github"
            />
          </a>
          <span
            role="button"
            onClick={toggleTheme}
            title="Dark/Light Mode"
            aria-label="Dark/Light Mode"
          >
            <img
              src={theme === "light" ? Moon : Sun}
              alt={theme === "light" ? "Dark Mode" : "Light Mode"}
            />
          </span>
        </Nav>
      </Navbar>
    </div>
  );
};

NavMenu.propTypes = propTypes;
export default NavMenu;
