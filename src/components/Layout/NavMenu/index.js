import React, { useContext } from "react";
import { func, string } from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { ThemeContext } from "styled-components";

import "./index.css";

import NavLink from "./NavLink";

import { useBrand } from "../../../context/useBrand";

import GithubLight from "../../../assets/img/github-light.svg";
import GithubDark from "../../../assets/img/github-dark.svg";
import Sun from "../../../assets/img/sun.svg";
import Moon from "../../../assets/img/moon.svg";

const propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

const NavMenu = ({ theme, toggleTheme }) => {
  const { navData } = useBrand();
  const themeContext = useContext(ThemeContext);

  const themeVariables = {
    githubIcon: theme === "light" ? GithubLight : GithubDark,
    toggleThemeIcon: theme === "light" ? Moon : Sun,
    altText: theme === "light" ? "Dark Mode" : "Light Mode"
  };

  return (
    <>
      <Navbar className="NavMenu">
        <Navbar.Brand
          href="https://santdeleon.io"
          aria-label="Home"
          title="Home"
          style={{ color: themeContext.color }}
        >
          <span role="img" aria-label="Rainbow Emoji">
            🌈
          </span>{" "}
          Sant Deleon
        </Navbar.Brand>
        <Nav className="mr-auto d-none d-md-flex">
          {navData.map(({ id, name, href, Icon }) => (
            <NavLink
              key={id}
              name={name}
              href={href}
              icon={Icon}
              theme={theme}
              color={themeContext.color}
            />
          ))}
        </Nav>
        <Nav className="ml-auto align-items-center">
          <Button
            variant="link"
            href="https://github.com/santdeleon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-0 mr-2"
            title="Github"
            aria-label="Github"
          >
            <img src={themeVariables.githubIcon} alt="Github" />
          </Button>
          <Button
            variant="link"
            className="p-0"
            title="Dark/Light Mode"
            aria-label="Dark/Light Mode"
            onClick={toggleTheme}
          >
            <img
              src={themeVariables.toggleThemeIcon}
              alt={themeVariables.altText}
            />
          </Button>
        </Nav>
      </Navbar>
    </>
  );
};

NavMenu.propTypes = propTypes;
export default NavMenu;
