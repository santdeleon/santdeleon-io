import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Particles from "particlesjs";

import "./App.css";

import Layout from "./components/Layout";

import { GlobalStyles, LightTheme, DarkTheme } from "./theme/";
import { useLocalStorage } from "./utils/useLocalStorage";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    Particles.init({
      selector: ".background",
      color: theme === "light" ? "#222" : "#B8BABE",
      speed: 0.2
    });
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <div id="App" className="App">
        <div className="rainbow-top" />
        <GlobalStyles />
        <Layout theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
