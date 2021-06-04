import React from "react";
import { Route, Switch } from "react-router-dom";

import SignIn from "../pages/SignIn";
// import MainPage from './pages/MainPage';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn}></Route>
      {/* <Route exact path='/signup' component={Signup}></Route> */}
    </Switch>
  );
}
