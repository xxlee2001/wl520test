import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import cb from "@mdf/cube/lib/cube";
import "./init";
import "@mdf/cube/lib/helpers/polyfill";
import { configureStore, createHistory } from "../common/store";
import { Router } from "../common/route";
// import { push, replace, goBack } from "react-router-redux";
import env from "@mdf/cube/lib/helpers/env";
import { initCache } from "@mdf/metaui-mobile/lib/helpers/injectCache";
// import "@mdf/theme-mobile/theme";
import "./client.css";
const businessContext = require.context("business");
cb.registerBusinessContext(businessContext);

const { pathname } = window.location;
export const store = configureStore();
const history = createHistory(store, pathname);
initCache(cb);
env.INTERACTIVE_MODE = "mobile";
cb.rest.nodeEnv = process.env.NODE_ENV;
cb.rest.interMode = env.INTERACTIVE_MODE;
// cb.rest.terminalType = 1; // TODO: 由于 terminalType == 3 (移动)，请求元数据时会丢失 toolbar，所以暂时使用 PC 的。
cb.rest.terminalType = 3;

const getPathWith = (page) => {
  // http://myhost.yyuap.com:3003/view/yylist/01ad63e4MobileList?terminalType=3
  const pathname = history.location.pathname;
  let elements;
  if (pathname.includes(window.DOMAIN_PREFIX)) {
    elements = pathname.split("/").slice(0, 5);
  } else {
    elements = pathname.split("/").slice(0, 4);
  }
  if (page) {
    elements.push(page);
  }
  return elements.join("/");
};

cb.route = {
  pushPage: function (route) {
    history.push(route);
  },
  push: function (page) {
    history.push(getPathWith(page));
  },
  replacePage: function (route) {
    history.replace(route);
  },
  replace: function (page) {
    history.replace(getPathWith(page));
  },
  goBack: function () {
    history.goBack();
  },
};

cb.rest.invokeFunction = function (id, data, callback, options)  {
  var proxy = cb.rest.DynamicProxy.create({
    doProxy: {
      url: "/web/function/invoke/" + id,
      method: "POST",
      options: options
    }
  });
  if (options && params.async === false) {
    const ajaxResult = proxy.doProxy(data);
    if (ajaxResult) callback(ajaxResult.error, ajaxResult.result);
  } else {
    proxy.doProxy(data, callback);
  }
}

cb.utils.loading = function (status) {
  store.dispatch({
    type: "PLATFORM_UI_TOGGLE_LOADING_BAR_STATUS",
    status,
  });
};

// 兼容处理fetch问题
cb.rest.mode = "xhr";
const renderDom = () => {
  ReactDOM.render(
    <Provider store={store}>

        {/* <Loading /> */}
        <Router history={history} />

    </Provider>,
    document.getElementById("container")
  );
};
renderDom();

if (module.hot) {
  module.hot.accept();
}
