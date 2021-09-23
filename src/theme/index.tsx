import React, { FC, createContext, useContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { media } from './media';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const DEFAULT_THEME = {
  theme: 'light' as Theme,
  toggleTheme: () => {
    // do nothing
  },
};

export const ThemeContext = createContext<Partial<ThemeContextProps>>(DEFAULT_THEME);

export const ThemeProvider: FC = ({ children }) => {
  const prefersOSDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage('theme', prefersOSDarkTheme ? 'dark' : 'light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsThemeProvider theme={{ mode: theme, media: { ...media } }}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
