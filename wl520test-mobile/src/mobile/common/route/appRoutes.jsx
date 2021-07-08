import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Confs from "../containers/Confs";
import Login from "../containers/Login/indexNew";
import LoginCode from "../containers/Login/LoginWithMobileCode";
import RegionCode from "../containers/Login/RegionCode";
import Env from "../containers/Login/EnvNew";
import Index from "../containers/Home";
import Mine from "../containers/Mine";
import Editor from "../containers/Editor";
import SetPage from "../containers/SetPage";
import About from "../containers/About";
import I18nSetPage from "../containers/I18nSetPage";
import EnvSet from "../containers/Login/EnvSetNew";
import DebugPage from '../containers/debug';
import { getDomainPrefix } from '@utils'; 
import OtherLogin from "../containers/Login/OtherLogin";
import FirstRegister from "../containers/Register/FirstRegister";
import SecondRegister from "../containers/Register/SecondRegister";
import FindPwdMode from "../containers/FindPwd/FindPwdMode";
import FindPwdFirst from "../containers/FindPwd/FindPwdFirst";
import FindPwdSecond from "../containers/FindPwd/FindPwdSecond";

const DOMAIN_PREFIX = getDomainPrefix();
window.DOMAIN_PREFIX = DOMAIN_PREFIX;


const routes = [
    {
        path: `${DOMAIN_PREFIX}/workbench/login`,
        component: Login,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/region`,
        component: RegionCode,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/logincode`,
        component: LoginCode,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/env`,
        component: Env,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/envset`,
        component: EnvSet,
    },   
    {
        path: `${DOMAIN_PREFIX}/workbench/home`,
        component: Index,
        auth: true,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/home/work`,
        component: Index,
        auth: true,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/home/mine`,
        component: Index,
        auth: true,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/editor`,
        component: Editor,
        auth: true,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/setting`,
        component: SetPage,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/about`,
        component: About,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/i18n`,
        component: I18nSetPage,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/debug`,
        component: DebugPage,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/otherlogin`,
        component: OtherLogin,
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/registerfirst`,
        component: FirstRegister
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/registersecond`,
        component: SecondRegister
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/findPwd`,
        component: FindPwdMode
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/findPwd/firststep`,
        component: FindPwdFirst
    },
    {
        path: `${DOMAIN_PREFIX}/workbench/findPwd/secondstep`,
        component: FindPwdSecond
    },
]
export default routes;

