import React, { FC, createContext, useContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { media } from './media';

type ThemeContextProps = {
  theme: string;
  toggleTheme: () => void;
};

export type ThemeType = {
  mode: string;
  media: Record<string, unknown>;
};

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {
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

export default ThemeProvider;
