import React, { Component } from "react";

import { Switch, Route } from "react-router";
import Phones from "../phones/index";

const routes = (
  <Switch>
    <Route path="/" component={Phones}></Route>
  </Switch>
);

const Layout = () => (
  <div className="view-container">
    <div className="container">
      <div className="row">
        <div className="col-md-3">Sidebar</div>
        <div className="col-md-9">{routes}</div>
      </div>
    </div>
  </div>
);

export default Layout;
