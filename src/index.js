import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./index.css";

import Index from "./views/HomePage";
import NotFound from "./views/NotFound";
import { Menu } from "./components/Menu/dropDown";
import { Regulamento } from "./components/Regulamento/regulamento";
import { Cronograma } from "./components/Cronograma/cronograma";

const routes = () => (
  <Fragment>
    <Menu />
    <Switch>
      <Route path="/index" component={Index} />
      <Route path="/regulamento" component={Regulamento} />
      <Route path="/cronograma" component={Cronograma} />
      <Redirect exact from="/" to="index" />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

ReactDOM.render(
  <BrowserRouter>{routes()}</BrowserRouter>,
  document.getElementById("root")
);
