import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';
import Nav from './Nav';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/App" component={App} />
      <Route exact path="/Quote" component={Quote} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
