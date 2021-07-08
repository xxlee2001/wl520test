import React, { useEffect,useState } from "react";
import { NavList } from "../components/NavList";
import { useHistory, Switch, Route } from "react-router-dom";
import {connect} from 'react-redux'
import mtl from "mtl-js-sdk";
import { ActivityIndicator } from 'antd-mobile'
import { getConfigInfoAsync } from '@utils'
import { initUrlFromStore } from '../../actions/login'
import { addStyle } from '../../utils/thememArray'
// import { DOMAIN_PREFIX } from '../../route'
import "./index.css";
import Work from "../Work";
import Mine from "../Mine";
import ActivLoading from '../../components/utils/ActivLoading'
const PREFIX = process.env.__CLIENT__ ? (window._baseUrl || '') : (process.env.PREFIX || '');
const CLIENT = process.env.__CLIENT__;
let DOMAIN_PREFIX = CLIENT ? (window._baseUrl || '') : (PREFIX || '');
if (DOMAIN_PREFIX === undefined) {
    DOMAIN_PREFIX = ""
}
const Index = ({theme, initUrlFromStore}) => {
    // addStyle(theme)
    const history = useHistory();
  // console.log('===========',history.location.pathname,history.location.pathname === `${DOMAIN_PREFIX}/workbench/home/mine`)
    const [clickIndex, setClickIndex] = useState(history.location.pathname === `${DOMAIN_PREFIX}/workbench/home/mine`? 1 : 0)
    const [showPage, setShowPage] = useState(false)
    useEffect(()=>{
        // if(theme===undefined) {
        getConfigInfoAsync(info=>{
            const data = {
                theme: info.theme, 
                showRememberPwd: info.showRememberPwd, 
                loginType: info.loginType, 
                envURL: info.envURL,
                appIdConfig: info.appId,
                appName: info.appName,
                appId: info.appId,
                envMode: info.envMode
            }
            initUrlFromStore(data)
            setShowPage(true)
            addStyle(info.theme)
        })
        // }else {
        //     setShowPage(true)
        //     addStyle(theme)
        // }
    },[])

    useEffect(() => {
        window.document.getElementById("container").style.height =
          window.innerHeight + "px";
        if (
            mtl.platform.toLowerCase() === "qyandroid" ||
            mtl.platform.toLowerCase() === "qyios"
          ) {
            mtl.settingNavBar({
                hide: 1,
                success: function (res) {
                // window.document.body.style.height = window.innerHeight + "px";
                    window.document.body.style.overflowY = "auto";
                // window.document.getElementById("container").style.height =
                // window.innerHeight + "px";
                    console.log('settingNavBarSuccess', res)
                },
                fail: function (err) {
                    console.log('settingNavBarErr', err)
                }
            })
        }
    
        return () => {
            window.document.getElementById("container").style.height='auto';
        }
    });
  // console.log(history,clickIndex)
    return showPage ? (
        <div className={"yo-home"}>
            <div className="yo-index">
                <Switch>
                    <Route path={`${DOMAIN_PREFIX}/workbench/home/work`} component={Work} />
                    <Route path={`${DOMAIN_PREFIX}/workbench/home/mine`} component={Mine} />
                </Switch>
            </div>
            <NavList clickIndex={clickIndex} setClickIndex={setClickIndex} theme={theme}></NavList>
        </div>
    ): <ActivLoading size={"large"} text={"loading..."}/>
    // ): <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}> <ActivityIndicator size="large"  text="loading...." /> </div> 
};

//export default Index;
export default connect((state) => {
    return {
        theme: state.loginMessage.theme,
    };
}, {
    initUrlFromStore: initUrlFromStore
})(Index);
