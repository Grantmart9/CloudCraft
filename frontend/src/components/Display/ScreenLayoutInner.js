import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Landing } from "Pages/Landing";
import { About } from "Pages/About";
import { Contact } from "Pages/Contact";
import { Solutions } from "Pages/Solutions";
import { Routes } from "components/Routes";

export const ScreenLayoutInner = () => {
  return (
    <div>
      <Switch>
        <Route path={Routes[0].path}>
          <Landing />
        </Route>
        <Route path={Routes[1].path}>
          <About />
        </Route>
        <Route path={Routes[2].path}>
          <Solutions />
        </Route>
        <Route path={Routes[3].path}>
          <Contact />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
};
