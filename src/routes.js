// 3rd party import
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// My import
import Phones from "./pages/phones";
import Phone from "./pages/phone";
import basketCart from "./pages/components/basketCart";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Phones} exact />
      <Route path="/phone/basket" component={basketCart} />
      <Route path="/phones/:id" component={Phone} />
    </Switch>
  </BrowserRouter>
);
