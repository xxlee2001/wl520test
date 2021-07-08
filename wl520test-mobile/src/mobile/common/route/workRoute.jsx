// TODO: deprecated 被废弃
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Confs from "../containers/Confs";
import Login from "../containers/Login";
import LoginCode from "../containers/Login/Login";
import RegionCode from "../containers/Login/RegionCode";
import Env from "../containers/Login/Env";
import Index from "../containers/Home";
import Editor from "../containers/Editor";
import SetPage from "../containers/SetPage";
import About from "../containers/About";
import I18nSetPage from "../containers/I18nSetPage";
import EnvSet from "../containers/Login/EnvSetNew";
import { getDomainPrefix } from '@utils'; 

 const DOMAIN_PREFIX = getDomainPrefix();
window.DOMAIN_PREFIX = DOMAIN_PREFIX;
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${DOMAIN_PREFIX}/workbench/login`} component={Login} />
        <Route
          path={`${DOMAIN_PREFIX}/workbench/region`}
          component={RegionCode}
        />
        {/* <Route path={`${DOMAIN_PREFIX}/workbench/config/:id`} component={Confs} />
        <Route path={`${DOMAIN_PREFIX}/workbench/config`} component={Confs} /> */}
        <Route
          path={`${DOMAIN_PREFIX}/workbench/logincode`}
          component={LoginCode}
        />
        <Route path={`${DOMAIN_PREFIX}/workbench/env`} component={Env} />
        <Route path={`${DOMAIN_PREFIX}/workbench/envset`} component={EnvSet} />
        <Route path={`${DOMAIN_PREFIX}/workbench/envconfig/:id`} component={EnvSet} />
        <Route path={`${DOMAIN_PREFIX}/workbench/home`} component={Index} />
        <Route path={`${DOMAIN_PREFIX}/workbench/editor`} component={Editor} />
        <Route
          path={`${DOMAIN_PREFIX}/workbench/setting`}
          component={SetPage}
        />
        <Route
          path={`${DOMAIN_PREFIX}/workbench/about`}
          component={About}
        />
        <Route
          path={`${DOMAIN_PREFIX}/workbench/i18n`}
          component={I18nSetPage}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
