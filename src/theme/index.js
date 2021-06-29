import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { oneOfType, arrayOf, node } from 'prop-types';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { media } from './media';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const prefersOSDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage(
    'theme',
    prefersOSDarkTheme ? 'dark' : 'light',
  );
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsThemeProvider
        theme={{ mode: theme, media: { ...media } }}
      >
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = { children: oneOfType([arrayOf(node), node]) };

export default ThemeProvider;
