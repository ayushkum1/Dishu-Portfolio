import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Portfolio} path="/portfolio" />
        <Route exact component={() => <div>NOT FOUND!!! 404</div>} path="*" />
      </Switch>
    </BrowserRouter>
  );
}
