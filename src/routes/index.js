import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
// import MainPage from './pages/MainPage';
// import SomePage from './components/SomePage';
// import SomeOtherPage from './components/SomeOtherPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route path="/home" component={Home}></Route>
        {/* <Route exact path='/signup' component={Signup}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}
