import React from 'react';
import Home from './sections/Home';
import User from './sections/User';
import './app.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/user">
        <User />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
