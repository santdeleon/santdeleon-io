import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

// import child Components
import Layout from '../Layout/Layout';

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
  faEnvelope
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
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
