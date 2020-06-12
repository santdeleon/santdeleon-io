import React, { useState } from "react";
import { Switch, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import Particles from "particlesjs";

import "./App.css";

import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/global";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";

import {
  faGithub,
  faAngellist,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHome,
  faRedoAlt,
  faHeart,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [theme, setTheme] = useState("light");

  const socialIcons = {
    linkedin: {
      id: 0,
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/sant-deleon/"
    },
    angellist: {
      id: 1,
      icon: faAngellist,
      url: "https://angel.co/santdeleon"
    },
    mail: {
      id: 2,
      icon: faEnvelope,
      url: "mailto:sant@santdeleon.co"
    }
  };

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <div className="rainbow-top"></div>

        <GlobalStyles />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Layout
                toggleTheme={toggleTheme}
                theme={theme}
                socialIcons={socialIcons}
                github={faGithub}
                angellist={faAngellist}
                linkedin={faLinkedinIn}
                mail={faEnvelope}
                heart={faHeart}
                copyright={faCopyright}
                refresh={faRedoAlt}
                home={faHome}
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
                socialIcons={socialIcons}
                refresh={faRedoAlt}
                home={faHome}
                particles={Particles}
              />
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
