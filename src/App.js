import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";

import { BrandProvider } from "./context/useBrand";
import {
  GlobalStyles,
  LightTheme,
  DarkTheme,
  useTheme
} from "./context/useTheme";

import "./App.css";

const App = () => {
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <BrandProvider>
          <div className="App">
            <div className="rainbow-top" />
            <GlobalStyles />
            <Layout theme={theme} toggleTheme={toggleTheme} />
          </div>
        </BrandProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
