import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from '../../global';
import './App.css';

import Layout from '../Layout/Layout';
import Contact from '../Contact/Contact.js';

import { faGithub, faAngellist, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faRedoAlt, faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => { (theme === 'light') ? setTheme('dark') : setTheme('light'); }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <div className="rainbow-top"></div>

        <GlobalStyles />

        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <Layout
                theme={theme}
                toggleTheme={toggleTheme}
                github={faGithub}
                angellist={faAngellist}
                linkedin={faLinkedinIn}
                mail={faEnvelope}
                heart={faHeart}
                copyright={faCopyright}
                refresh={faRedoAlt}
                home={faHome}
              />
            )}
          />

          <Route
            path="/contact"
            render={(props) => (
              <Contact
                refresh={faRedoAlt}
                home={faHome}
              />
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
