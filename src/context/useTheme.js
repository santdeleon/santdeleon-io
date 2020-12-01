import React, { createContext, useContext } from "react";
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle
} from "styled-components";

import { useLocalStorage } from "./useLocalStorage";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;

const LightTheme = {
  color: "#000",
  backgroundColor: "#fff"
};

const DarkTheme = {
  color: "#fff",
  backgroundColor: "#222"
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const hasOSDarkTheme =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useLocalStorage(
    "theme",
    hasOSDarkTheme ? "light" : "dark"
  );

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsThemeProvider
        theme={theme === "light" ? LightTheme : DarkTheme}
        children={children}
      />
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("You must useTheme within a <ThemeProvider />");
  return context;
};

export { ThemeProvider, GlobalStyles, LightTheme, DarkTheme, useTheme };
