import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App.js";

import Admin from "../components/screens/Admin";

import Teacher from "../components/screens/Teacher";

import Student from "../components/screens/Student";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/admin" component={Admin} />
      <Route path="/teacher" component={Teacher} />

      <Route path="/teacher/notices" component={Teacher} />
      <Route path="/teacher/timetable" component={Teacher} />
      <Route path="/teacher/assignment" component={Teacher} />
      <Route path="/teacher/books" component={Teacher} />

      <Route path="/student" component={Student} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
