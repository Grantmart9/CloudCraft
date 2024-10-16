import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { QOL } from "UserPages/QOL";
import { Landing } from "UserPages/Landing";
import { Report } from "UserPages/Report";
import { fontType } from "components/Display/feutures";

const Pages = [
  { page: Landing, path: "HOME" },
  { page: QOL, path: "/qol" },
  { page: Report, path: "/REPORT" },
  { page: Landing, path: "/" },
];

export const ScreenLayoutInner = () => {
  return (
    <div>
      <Switch>
        <Route path={Pages[0].path}>
          <Landing />
        </Route>
        <Route path={Pages[1].path}>
          <QOL />
        </Route>
        <Route path={Pages[2].path}>
          <Report />
        </Route>
        <Route path={Pages[3].path}>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
};
