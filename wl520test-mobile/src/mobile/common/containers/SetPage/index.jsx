import React from "react";
import { Link, useHistory } from "react-router-dom";
import BackIcon from "../../components/Icon/Back";
import { NavBar, Icon, List, Modal } from "../../components/antd";
import intl from "react-intl-universal";
import { connect } from "react-redux";
import { reSetAction } from "../../actions/appsAction";
import { addStyle } from '../../utils/thememArray'
import Axios from "axios";
const alert = Modal.alert;

import { getDomainPrefix } from '@utils'; 
import './index.css'

const DOMAIN_PREFIX = getDomainPrefix();

const setCookie = function (name, value, day) {
    if (day !== 0) {
        const expires = day * 24 * 60 * 60 * 1000;
        const date = new Date(+new Date() + expires);
        document.cookie =
      name + "=" + escape(value) + ";expires=" + date.toUTCString();
    } else {
        document.cookie = name + "=" + escape(value);
    }
};
const delCookie = function (name) {
    setCookie(name, " ", -1);
};

const Item = List.Item;
const https = "https://"

const SetPage = ({ theme,reSetAction }) => {
    addStyle(theme)
    const history = useHistory();
    const link2I18n = () => {
        history.push(`${DOMAIN_PREFIX}/workbench/i18n`);
    };
    const logout = () => {
        alert(" ", intl.get("areLogOut"), [
      { text: intl.get("cancel") },
            {
                text: intl.get("OK"),
                onPress: () => {
          // window.localStorage.clear();
                    reSetAction();
                    Axios.get(`${https}build.yyuap.com/mobile-app/rest/v1/mobile/login/logout`)
                    // Axios.get('https://build.yyuap.com/mobile-app/rest/v1/mobile/login/logout')
          // console.log('logout')
          // delCookie('wb_at','',-1)
          // delCookie('yonyou_uid','',-1)
                    history.replace(`${DOMAIN_PREFIX}/workbench/login`);
                },
            },
        ]);
    };
    const onClearn = () => {
        alert(" ", intl.get("delOkLo"), [
      { text: intl.get("cancel") },
      { text: intl.get("del") },
        ]);
    };
    return (
        <div className="env-content">
            <NavBar
                mode="light"
                icon={
                    <Link to={`${DOMAIN_PREFIX}/workbench/home/mine`} replace>
                        {/* <Icon style={{ color: "#333" }} size={'md'} type="left" /> */}
                        <BackIcon />
                    </Link>
        }
      >
                {intl.get("set")}
            </NavBar>
            <div className={"white-space-20"}></div>
            <List class="setting-botoom-line">
                {/* <Link to={`${DOMAIN_PREFIX}/workbench/i18n`}> */}
                <Item arrow="horizontal" onClick={link2I18n} className="lanuageSet">
                    {/* 多语言设置 */}
                    {intl.get("i18nset")}
                </Item>
                {/* </Link> */}
                <Item onClick={onClearn}>
                    {/* 清除本地缓存 */}
                    {intl.get("clearnCatch")}
                </Item>
            </List>
            <div className={"white-space-20"}></div>
            <List>
                <Item>
                    <div
                        onClick={() => logout(alert)}
                        style={{ width: "100%", color: "#e83c3a", textAlign: "center" }}
                        className="logoutStyle"
          >
                        {/* 退出登录 */}
                        {intl.get("logout")}
                    </div>
                </Item>
            </List>
        </div>
    );
};

export default connect((state) => {
    return {
        theme: state.loginMessage.theme,
    };
}, {
    reSetAction: reSetAction,

})(SetPage);
