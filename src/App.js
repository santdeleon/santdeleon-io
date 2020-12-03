import React, { useEffect } from "react";
// import Particles from "particlesjs";

import Layout from "./components/Layout";

import { GlobalStyles, useTheme } from "./context/useTheme";

import "./App.css";

const App = () => {
  // const { theme } = useTheme();

  window.onload = () =>
    console.log("%c SANT WUZ HERE! ", "background: #222; color: #bada55");

  // useEffect(() => {
  //   const particles = Particles.init({
  //     selector: ".App__Particles",
  //     color: theme === "light" ? "#222" : "#fff",
  //     speed: 0.3,
  //     sizeVariations: 4
  //   });
  //
  //   // reset Particles on cleanup to prevent particle re-renders
  //   return () => {
  //     particles.pauseAnimation();
  //   };
  // }, [theme]);

  return (
    <div className="App">
      {/* <canvas className="App__Particles" /> */}
      <div className="App__Div--rainbow-top" />
      <GlobalStyles />
      <Layout />
    </div>
  );
};

export default App;
