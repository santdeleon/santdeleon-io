import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

import Layout from '../Layout/Layout';


function App() {
  return (
    <div className="App">
      <div className="rainbow-top"></div>

      <Switch>
        <Route exact path="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
