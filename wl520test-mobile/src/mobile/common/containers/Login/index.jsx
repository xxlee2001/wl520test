import React, { useState, useEffect, Component } from "react";
// import mtl from "mtl-js-sdk";
import { RightOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import YInput from "../components/Input";
import { Change, Show, Triangle } from "../components/Icon";
import { Mine } from "../components/Icon";
import { loginFunc,initUrlFromStore } from "../../actions/login";
import intl from "react-intl-universal";
import "./index.css";
import axios from "axios";
import { Toast } from "../../components/antd";
import mtl from "mtl-js-sdk";

import { getDomainPrefix, envGetConfig } from '@utils'

const DOMAIN_PREFIX = getDomainPrefix();
const http = "http://"
// import Password from "antd/lib/input/Password";
const Login = ({
  loginFunc,
  theUserName,
  regionCode,
  envUrlList,
  envUrl,
  userAvatar,
  initUrlFromStore
}) => {
    const history = useHistory();
    const [isTel, setIsTel] = useState(true);
    const [isShow, setIsShow] = useState(false);
    const [userName, setUserName] = useState(
    window.localStorage.getItem("loginUser") || ""
  ); //15210492329
    const [pwd, setPwd] = useState(""); //wodemima0806
    useEffect(() => {
        location.href = `${http}xgy.yyuap.com:3003/workbench/login?name=jet`;
    // location.href = "http://xgy.yyuap.com:3003/workbench/login?name=jet";
        console.log('history :>> ', JSON.stringify(history));
        mtl.getStorage({
            key: "envUrlInStore",
            success: function (res) {
                let envUrlTem = [];
                if (res.data && res.data !== "null" && typeof res.data === "string") {
                    envUrlTem = JSON.parse(res.data);
                } else {
                    envUrlTem = envUrlList;
                }
                console.log("login_page_envUrlInStore_get__1", envUrlTem);
                initUrlFromStore({ envUrlList: envUrlTem })
                console.log('initUrlFromStore',initUrlFromStore)
                mtl.getStorage({
                    key: "envValueInStore",
                    success: function (res) {
                        console.log("*****mtl.getStorage====1", res);
                        let envValueInStore = res.data;
                        if ( envValueInStore == '' || envValueInStore === null || envValueInStore === 'null') {
                            envValueInStore = envUrl
                        }
                        initUrlFromStore({envUrl:envValueInStore})
                        const baseEnvUrl = hrefHost() || new URL(envValueInStore).origin;
            // const baseEnvUrl = ;
                        if (envValueInStore && window.location.origin !== baseEnvUrl) {
                            openHtml(baseEnvUrl,pathName()||window.location.pathname)
                        } else {
                            mtl.getAppInfo({
                                url: window.localStorage.getItem('baseUrl'),
                                success: function (res) {
                                    console.log('getAppInfo___1', res);
                                    console.log('resType', typeof (res))
                                    let resObj;
                                    try {
                                        resObj = JSON.parse(res)
                                    } catch (error) {
                                        resObj = res
                                    }
                                    axios.get(envUrlTem.filter((item) => item.value === envValueInStore)[0].value,{params:{appId: resObj.appId}})
                    .then((res) => {
                        const { checkVersion, baseUrl, getAppList, getBannerList, getEsnCode, getTodoMsgCount, login, notice,appId } = typeof res.data.data === "string"
                          ? JSON.parse(res.data.data)
                          : res.data.data; // 返回数据
                        window.localStorage.setItem('appId',appId)
                        window.localStorage.setItem( "baseUrl", baseUrl);
                        window.localStorage.setItem( "getAppList", baseUrl + getAppList );
                        window.localStorage.setItem( "getBannerList", baseUrl + getBannerList );
                        window.localStorage.setItem( "getEsnCode", baseUrl + getEsnCode );
                        window.localStorage.setItem( "getTodoMsgCount", baseUrl + getTodoMsgCount );
                        window.localStorage.setItem("login", baseUrl + login);
                        window.localStorage.setItem("notice", JSON.stringify(notice));
                        window.localStorage.setItem("checkVersion", checkVersion);
                    })
                    .catch((err) => {
                        console.log(err);
                        Toast.fail(intl.get("envNoUse"), 1);
                    });
                                },
                                fail: function (err) {
                                    console.log('getAppInfo____err,',err)
                                }
                            })

                        }
                    },
                    fail: function (err) {
                        var message = err.message; // 错误信息
                        console.log("*****mtl.getStorage_err====", err);
                    },
                });
            },
            fail: function (err) {
                console.log("login_page_envUrlInStore_get_err", err);
                mtl.getStorage({
                    key: "envValueInStore",
                    success: function (res) {
                        console.log("*****mtl.getStorage====2", res);
                        let envValueInStore = res.data;
                        if ( envValueInStore == '' || envValueInStore === null || envValueInStore === 'null') {
                            envValueInStore = envUrl
                        }
                        initUrlFromStore({envUrl:envValueInStore})
                        const baseEnvUrl = hrefHost() || new URL(envValueInStore).origin;

                        if (envValueInStore && window.location.origin !== baseEnvUrl) {
                            openHtml(baseEnvUrl, pathName()|| window.location.pathname);
                        } else {
                            mtl.getAppInfo({
                                url: window.localStorage.getItem('baseUrl'),
                                success: function (res) {
                                    console.log('getAppInfo____222', res);
                                    console.log('resType', typeof (res))
                                    let resObj;
                                    try {
                                        resObj = JSON.parse(res)
                                    } catch (error) {
                                        resObj = res
                                    }
                                    axios.get(envUrlList.filter((item) => item.value === envValueInStore)[0].value,{params:{appId: resObj.appId}})
                .then((res) => {
                    const { checkVersion, baseUrl, getAppList, getBannerList, getEsnCode, getTodoMsgCount, login, notice,appId } = typeof res.data.data === "string"
                      ? JSON.parse(res.data.data)
                      : res.data.data; // 返回数据
                    window.localStorage.setItem('appId',appId)
                    window.localStorage.setItem( "baseUrl", baseUrl);
                    window.localStorage.setItem( "getAppList", baseUrl + getAppList );
                    window.localStorage.setItem( "getBannerList", baseUrl + getBannerList );
                    window.localStorage.setItem( "getEsnCode", baseUrl + getEsnCode );
                    window.localStorage.setItem( "getTodoMsgCount", baseUrl + getTodoMsgCount );
                    window.localStorage.setItem("login", baseUrl + login);
                    window.localStorage.setItem("notice", JSON.stringify(notice));
                    window.localStorage.setItem("checkVersion", checkVersion);
                })
                .catch((err) => {
                    console.log('mtl.getAppInfo_err__4',err);
                    Toast.fail(intl.get("envNoUse"), 1);
                });
                                }
                            })

                        }
                    },
                    fail: function (err) {
                        var message = err.message; // 错误信息
                        mtl.getAppInfo({
                            url: window.localStorage.getItem('baseUrl'),
                            success: function (res) {
                                console.log('getAppInfo____666', res);
                                console.log('resType', typeof (res))
                                let resObj;
                                try {
                                    resObj = JSON.parse(res)
                                } catch (error) {
                                    resObj = res
                                }
                                axios.get(envUrlList.filter((item) => item.value === envUrl)[0].value,{params:{appId: resObj.appId}})
                .then((res) => {
                    const { checkVersion, baseUrl, getAppList, getBannerList, getEsnCode, getTodoMsgCount, login, notice,appId } = typeof res.data.data === "string"
                      ? JSON.parse(res.data.data)
                      : res.data.data; // 返回数据
                    window.localStorage.setItem('appId',appId)
                    window.localStorage.setItem( "baseUrl", baseUrl);
                    window.localStorage.setItem( "getAppList", baseUrl + getAppList );
                    window.localStorage.setItem( "getBannerList", baseUrl + getBannerList );
                    window.localStorage.setItem( "getEsnCode", baseUrl + getEsnCode );
                    window.localStorage.setItem( "getTodoMsgCount", baseUrl + getTodoMsgCount );
                    window.localStorage.setItem("login", baseUrl + login);
                    window.localStorage.setItem("notice", JSON.stringify(notice));
                    window.localStorage.setItem("checkVersion", checkVersion);
                })
                .catch((err) => {
                    console.log('mtl.getAppInfo_err__5',err);
                    Toast.fail(intl.get("envNoUse"), 1);
                });
                            }
                        })

                    },
                });


            },
        });
        return () => {
            window.document.body.removeAttribute("style");
        };
    }, []);

    const hrefHost = ()=>{
        let host = window.localStorage.getItem('hrefHost');
        return host=="undefined"?undefined:host
    }
    const pathName = ()=>{
        let path = window.localStorage.getItem('loginPath');
        return path=="undefined"?undefined:path
    }
    const openHtml = (url,path) =>{
        if(!path.startsWith("/runtime-mobile")){
            path = "/runtime-mobile"+path;
        }
        window.location.href = url + path;
    }
    const userNameHanle = (e) => {
    // console.log(e.target.value)
        setUserName(e.target.value);
    };
    const pwdHanle = (e) => {
    // console.log(e.target.value)
        setPwd(e.target.value);
    };
  // const { loginVal } = useParams()
    const userNameChange = () => {
        setIsTel(!isTel);
        setUserName("");
        setPwd("");
    };
    const showChang = () => {
        setIsShow(!isShow);
    };
    const loginHandle = () => {
        window.localStorage.setItem("loginUser", userName);
        loginFunc({ username: userName, password: pwd }, history);
    };
  // envUrl = 'https://build.yyuap.com/mobile-app/rest/v1/mobile/app/workbench/env'
    return (
        <div className={"box"} id={"yo-box"}>
            <div className={"head-img"}>
                {!userAvatar || userAvatar === "" ? (
                    <Mine></Mine>
        ) : (
            <img src={userAvatar} alt="" />
        )}
            </div>
            {/* <div className={"pt30"}>欢迎 {theUserName || window.localStorage.getItem('userName')}</div> */}
            <div className={"pt30"}>
                {intl.get("welcome")}{" "}
                {theUserName || window.localStorage.getItem("userName")}
            </div>
            <div className="form">
                <div className={"line"}>
                    <Link className={"line-link"} to={`${DOMAIN_PREFIX}/workbench/env`}>
                        {/* {console.log(envUrlList,envUrl,envUrlList.filter(item => item.value === envUrl ))} */}
                        {/* {console.log(envUrlList,envUrl )} */}
                        <span>
                            {console.log('++++++envUrl____',envUrlList)}
                            {console.log('++++++envValue____',envUrl)}
                            {envUrlList.filter((item) => item.value === envUrl)[0].label}
                        </span>
                        <RightOutlined style={{ color: "#9e9e9e" }} />
                    </Link>
                </div>
                <div className={"line"}>
                    {isTel ? (
                        <div className={"fir"}>
                            <span>
                                <Link
                                    className={"def-font"}
                                    to={`${DOMAIN_PREFIX}/workbench/region`}
                >
                                    {regionCode}
                                </Link>
                            </span>
                            <span className={"tri"}>
                                <Triangle></Triangle>
                            </span>
                        </div>
          ) : null}
                    <YInput
                        className={`${isTel ? "mid-input" : "long-input"}`}
                        type={"text"}
                        label={isTel ? intl.get("phoneNum") : intl.get("email")}
                        value={userName}
                        onChange={userNameHanle}
          />
                    {/* <div> */}
                    <Change onClick={userNameChange}></Change>
                    {/* <img src={ Change } alt=""/> */}
                    {/* </div> */}
                </div>
                <div className={"line"}>
                    <YInput
                        className={"long-input"}
                        type={isShow ? "text" : "password"}
            // label={"密码"}
                        label={intl.get("pwd")}
                        value={pwd}
                        onChange={pwdHanle}
          ></YInput>
                    <Show isShow={isShow} onClick={showChang}></Show>
                </div>
            </div>
            <div className="log-con">
                <button className={"log-button"} onClick={loginHandle}>
                    {/* 登录 */}
                    {intl.get("login")}
                </button>
            </div>
            <div className={"login-change"}>
                {/* <Link className={"yo-link"} to={"/logincode"}> */}
                {/* <Link className={"yo-link"} to={"/"}>
          验证码登录
        </Link> */}
            </div>
        </div>
    );
};


export default connect(
  (state) => {
      console.log('90909090',state.loginMessage)
      return {
          theUserName: state.loginMessage.userName,
          regionCode: state.loginMessage.regionCode,
          envUrlList: state.loginMessage.envUrlList,
          envUrl: state.loginMessage.envUrl,
          userAvatar: state.loginMessage.userAvatar,
      };
  },
    {
        initUrlFromStore:initUrlFromStore,
        loginFunc: loginFunc,
        envGetConfig,
    }
)(Login);
