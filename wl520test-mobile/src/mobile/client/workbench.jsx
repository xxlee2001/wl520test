import React, { useEffect } from "react";
import ReactDom from "react-dom";
import Router from "../common/route/router";
// TODO: deprecated 被废弃
// import Router from "../common/route/workRoute";
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.less'



import intl from 'react-intl-universal'

import "./client.css";

// import zh_CN from '../common/components/utils/zh-CN'
// import zh_TW from '../common/components/utils/zh-TW'
// import { useState } from "react";


// const locales = {
//   'zh-CN': zh_CN,
//   'zh-TW': zh_TW
// }
// export const useTheLang = () => {
// const [initDone, setInitDone] = useState(false)
let currentLocale = intl.determineLocale({
    urlLocaleKey: "lang",
    cookieLocaleKey: "language",
    localStorageLocaleKey: 'language'
});

// if (currentLocale === 'default') {
//   // console.log()
//   currentLocale = window.navigator.language
// }
if (currentLocale === 'default') {
  // console.log()
    currentLocale = window.navigator.language
    if (window.navigator.language.includes('en')) {
        console.log('init langs')
        currentLocale = 'zh-cn'
    }

}
currentLocale = currentLocale.includes('zh') ? 'zh-cn' : currentLocale

intl.init({
    currentLocale,
    locales: {
        [currentLocale]: require(`../common/components/utils/${currentLocale.toLowerCase()}`).default
    }
}).then(() => {
  // setInitDone( true )
})

// }
const { configureStore } = require("../common/store");

const store = configureStore();
const SERVER_ENV = process.env.SERVER_ENV;
switch(SERVER_ENV.toLocaleLowerCase()){
    case 'sandbox':
    case 'yonbip':
    case 'pre':
    case 'daily':{
        if (window.location?.href?.includes('/workbench')){
            var vConsole = new VConsole();
        }
        break;
    }

}
const App = () => {
  // const [initDone,setInitDone]= useState(false)
  // useTheLang()
    useEffect(() => {
    // window.document.getElementById("container").style.height =
    //   window.innerHeight + "px";
    //   window.document.body.style.height = window.innerHeight + "px";
        window.document.body.style.overflowY = "auto";
        return () => {
      // window.document.getElementById("container").removeAttribute("style");
      // window.document.body.style.height = '';
            window.document.body.style.overflowY = "";
        };
    }, []);
    return (
        <ConfigProvider prefixCls="xapp-ant">
            <Provider store={store} >
                <Router history>
                    <Router />
                </Router>
            </Provider>
        </ConfigProvider>
    );
};

ReactDom.render(<App />, document.getElementById("container"));

// if (module.hot) {
//   module.hot.accept();
// }
