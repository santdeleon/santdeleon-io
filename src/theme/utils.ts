import { Theme } from './types';

/**
 * Determines if a given Theme is "dark".
 * @param theme A theme.
 * @returns True or false.
 */
export function isDarkTheme(theme: Theme): theme is 'dark' {
  return theme === 'dark';
}

/**
 * Determines if a given Theme is "light".
 * @param theme A theme.
 * @returns True or false.
 */
export function isLightTheme(theme: Theme): theme is 'light' {
  return theme === 'light';
}
