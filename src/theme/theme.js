import React, { createContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { oneOfType, array, node, string } from 'prop-types';

import { useLocalStorage } from '../hooks';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const prefersOSDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage(
    'theme',
    prefersOSDarkTheme ? 'dark' : 'light',
  );
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsThemeProvider theme={{ mode: theme }}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = { children: oneOfType([array, node, string]) };

export default ThemeProvider;
