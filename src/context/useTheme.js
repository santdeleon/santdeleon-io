import { useLocalStorage } from "./useLocalStorage";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;

const LightTheme = {
  color: "#000",
  backgroundColor: "#ffffff"
};

const DarkTheme = {
  color: "#fff",
  backgroundColor: "#212121"
};

const useTheme = () => {
  const hasOSDarkTheme =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  const [theme, setTheme] = useLocalStorage(
    "theme",
    hasOSDarkTheme ? "dark" : "light"
  );
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return [theme, toggleTheme];
};

export { GlobalStyles, LightTheme, DarkTheme, useTheme };
