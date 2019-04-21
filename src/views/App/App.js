import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

// import child Components
import Layout from '../Layout/Layout';
import Contact from '../../components/Contact/Contact';

//import empty icon library
import { library } from '@fortawesome/fontawesome-svg-core';

//imports font-awesome icons
import {
  faGithub,
  faFreeCodeCamp,
  faAngellist,
  faLinkedinIn,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faHome,
  faRedoAlt,
  faHeart,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";

// merge the icon library
library.add(
  faGithub,
  faFreeCodeCamp,
  faAngellist,
  faLinkedinIn,
  faStackOverflow,
  faEnvelope,
  faHome,
  faRedoAlt,
  faHeart,
  faCopyright
);


function App() {
  return (
    <div className="App">
      <div className="rainbow-top"></div>

      <Switch>
        <Route
          exact path="/"
          render={(props) => (
            <Layout
              github={faGithub}
              fcc={faFreeCodeCamp}
              angellist={faAngellist}
              linkedin={faLinkedinIn}
              stackO={faStackOverflow}
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
  );
}

export default App;
