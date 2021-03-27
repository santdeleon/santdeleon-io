import React from 'react';

import { Emoji, Img, Navbar, Nav, Row, Text, ToggleSwitch } from '.';

import { useTheme } from '../hooks';

import GithubLight from '../assets/img/github-light.svg';
import GithubDark from '../assets/img/github-dark.svg';
import Moon from '../assets/img/moon.svg';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar className="pb-0">
        <Text fontSize={700} className="mb-0">
          Sant Deleon
        </Text>
        <Nav className="ml-auto align-items-center">
          <a
            href="https://github.com/santdeleon"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="mr-5 d-flex align-items-center"
          >
            <Img
              src={theme === 'light' ? GithubLight : GithubDark}
              alt="GitHub"
            />
          </a>
          <ToggleSwitch
            isThemeToggle
            id="Navbar__ToggleSwitch--theme-toggle"
            title={`Activate ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            ariaLabel={`Activate ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            on={theme === 'light' ? 'false' : 'true'}
            onClick={toggleTheme}
          >
            <Img src={Moon} alt="Moon" ariaLabel="Moon" width={25} />
          </ToggleSwitch>
        </Nav>
      </Navbar>
      <Row>
        <Text className="mb-0">
          Front-end & Blockchain Engineer{' '}
          <Emoji alt="Sparkles Emoji" ariaLabel="Sparkles Emoji">
            ✨
          </Emoji>
        </Text>
      </Row>
    </>
  );
};

export default Header;
