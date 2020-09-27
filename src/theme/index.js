import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;

export const LightTheme = {
  color: "#000",
  backgroundColor: "#ffffff"
};

export const DarkTheme = {
  color: "#fff",
  backgroundColor: "#212121"
};
