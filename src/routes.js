import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/home';
import Controlled from './components/controlled';
import Uncontrolled from './components/uncontrolled';
import User from './components/user';
import Login from './components/login';
import Dashboard from './components/dashboard';

const PrivateRoute = ({
  isLogged,
  component: Comp,
  ...rest
})=> {
  return <Route {...rest} component={(props)=> (
      isLogged ?
        <Comp {...props} />
        :
        <Redirect to="/login" />
    )} />
}

const Routes = (props) => {
  // console.log(props)

  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/controlled" exact component={Controlled} />
      <Route path="/uncontrolled" exact component={Uncontrolled} />
      <Route path="/user" exact component={User} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute isLogged={props.auth} path="/dashboard" exact component={Dashboard} />
    </Switch>
  )
}

export default Routes;
