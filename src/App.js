import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from './components';
import { Home } from './pages';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default App;
