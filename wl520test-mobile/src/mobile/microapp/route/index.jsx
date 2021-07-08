import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../src/home/index";

import { DOMAIN_PREFIX } from '../util';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`${DOMAIN_PREFIX}/microapp/home`} component={Home}/>
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
