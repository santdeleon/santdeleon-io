import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import Emoji from '../../Emoji';
import ToggleSwitch from '../../ToggleSwitch';

import './index.css';

import NavLink from './NavLink';

import { useBrand } from '../../../hooks/useBrand';
import { useTheme } from '../../../hooks/useTheme';

import GithubLight from '../../../assets/img/github-light.svg';
import GithubDark from '../../../assets/img/github-dark.svg';
import Sun from '../../../assets/img/sun.svg';
import Moon from '../../../assets/img/moon.svg';

const NavMenu = () => {
  const { navData } = useBrand();
  const { theme } = useTheme();
  const { color } = useContext(ThemeContext);

  const themeVariables = {
    githubIcon: theme === 'light' ? GithubLight : GithubDark,
    toggleThemeIcon: theme === 'light' ? Moon : Sun,
    altText: theme === 'light' ? 'Dark Mode' : 'Light Mode',
  };

  return (
    <Navbar className="NavMenu">
      <Navbar.Brand
        as={Link}
        to="/"
        aria-label="Home"
        title="Home"
        style={{ color: color }}
      >
        <Emoji ariaLabel="Rainbow Emoji" unicode="🌈" /> Sant Deleon
      </Navbar.Brand>
      <Nav className="mr-auto d-none d-md-flex">
        {navData.map(({ id, name, href, Icon }) => (
          <NavLink
            key={id}
            name={name}
            href={href}
            icon={Icon}
            theme={theme}
            color={color}
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
        <ToggleSwitch />
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
