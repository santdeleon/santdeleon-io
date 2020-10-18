import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Particles from "particlesjs";
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
    const particles = Particles.init({
      selector: ".particles-background",
      color: theme === "light" ? "#222" : "#B8BABE",
      speed: 0.3
    });

    // reset Particles on cleanup to prevent particle re-renders
    return () => {
      particles.pauseAnimation();
    };
  }, [theme]);

  return (
    <>
      <canvas className="particles-background" />
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
