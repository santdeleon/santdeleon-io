import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { Row, Col } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import Particles from "particlesjs";

import "./App.css";

import Loader from "./assets/img/rainbow-loader-1.gif";

import Layout from "./components/Layout";
import Contact from "./pages/Contact";

import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/globalStyles";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  window.onload = () => {
    Particles.init({
      selector: ".background",
      color: "#222"
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return (
      <Row>
        <Col className="text-center" style={{ backgroundColor: "#042260" }}>
          <img src={Loader} alt="Loading Screen" style={{ height: "100vh" }} />
        </Col>
      </Row>
    );
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        {/* rainbow top border on all pages */}
        <div className="rainbow-top"></div>

        {/* provides globalStyles to entire app */}
        <GlobalStyles />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Layout
                toggleTheme={toggleTheme}
                theme={theme}
                particles={Particles}
              />
            )}
          />

          <Route
            path="/contact"
            render={props => (
              <Contact
                toggleTheme={toggleTheme}
                theme={theme}
                particles={Particles}
              />
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
