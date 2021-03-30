import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App.js";

import Admin from "../components/screens/admin";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
