import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

// import child Components
import Layout from '../Layout/Layout';

//import empty icon library
import { library } from '@fortawesome/fontawesome-svg-core';

//imports font-awesome icons
import {
  faInstagram,
  faYoutube,
  faGithub,
  faFacebookF,
  faTwitter,
  faTelegramPlane,
  faLinkedinIn,
  faRedditAlien
} from "@fortawesome/free-brands-svg-icons";

// merge the icon library
library.add(
  faInstagram,
  faYoutube,
  faGithub,
  faFacebookF,
  faTwitter,
  faTelegramPlane,
  faLinkedinIn,
  faRedditAlien,
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
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
