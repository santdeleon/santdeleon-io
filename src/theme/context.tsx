import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { Breakpoint, Theme } from './types';

// =============================================================================
// Constants
// =============================================================================

const STORAGE_KEY = 'theme';

const THEME_CONTEXT = createContext<{ theme: Theme; toggleTheme(): void } | null>(null);

const MEDIA = generateMedia({
  xxxs: `${Breakpoint.XXXS}px`,
  xxs: `${Breakpoint.XXS}px`,
  xs: `${Breakpoint.XS}px`,
  sm: `${Breakpoint.SM}px`,
  md: `${Breakpoint.MD}px`,
  lg: `${Breakpoint.LG}px`,
  xl: `1${Breakpoint.XL}px`,
  xxl: `1${Breakpoint.XXL}px`,
  xxxl: `1${Breakpoint.XXXL}px`,
});

// =============================================================================
// Main Component
// =============================================================================

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(window.matchMedia(`(prefers-color-scheme: "dark")`) ? 'dark' : 'light');

  const toggleTheme = useCallback(async () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    await window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }, [theme]);

  // get theme from storage on mount and sync it with state
  useEffect(() => {
    (async () => {
      const result = window.localStorage.getItem(STORAGE_KEY);
      if (Theme.safeParse(result).success) setTheme(result as Theme);
    })();
  }, []);

  return (
    <THEME_CONTEXT.Provider value={{ theme, toggleTheme }}>
      <SCThemeProvider theme={{ mode: theme, media: MEDIA }}>{children}</SCThemeProvider>
    </THEME_CONTEXT.Provider>
  );
};

// =============================================================================
// Hooks
// =============================================================================

export const useTheme = () => {
  const context = useContext(THEME_CONTEXT);
  if (!context) throw new Error('Missing ThemeContext. Your child component is not wrapped in a ThemeProvider.');
  return context;
};
