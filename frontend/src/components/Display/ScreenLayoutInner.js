import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Landing } from "UserPages/Landing";
import { About } from "UserPages/About";
import { Contact } from "UserPages/Contact";
import { Solutions } from "UserPages/Solutions";
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
