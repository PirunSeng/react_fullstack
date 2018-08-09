import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Controlled from './components/controlled';
import Uncontrolled from './components/uncontrolled';
import User from './components/user';

class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/controlled" exact component={Controlled} />
        <Route path="/uncontrolled" exact component={Uncontrolled} />
        <Route path="/user" exact component={User} />
      </Switch>
    )
  }
}

export default Routes;
