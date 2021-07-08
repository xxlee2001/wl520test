import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import FrontendAuth from './appHookRouter';
import routes from './appRoutes';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <FrontendAuth routerConfig={routes} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;