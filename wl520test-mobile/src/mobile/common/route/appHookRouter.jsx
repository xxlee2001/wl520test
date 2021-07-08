import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { initUrlFromStore, INIT_URL_FROM_MTL_STORE } from '../actions/login';
import { getEnvUrlList } from '@utils';
import { isEmpty } from 'lodash'
class FrontendAuth extends Component {

  render() {
    const props = this.props;
    getEnvUrlList((data) => {
      !isEmpty(data) && props.dispatch({
        type: INIT_URL_FROM_MTL_STORE,
        payload: { envUrlList: data }
      });
    })
    const { routerConfig, location } = this.props;
    const { pathname, search, state } = location;

    // TODO: 读取登录信息
    const tenantList = window.localStorage.getItem("tenantList")
      ? JSON.parse(window.localStorage.getItem("tenantList"))
      : ['logout']
    const isLogin = tenantList[0] !== 'logout';
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    const targetRouterConfig = routerConfig?.find(
      (item) => {
        return item.path.replace(/\s*/g, "") === pathname
      }
    );
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact location={location} component={component} />
    }
    if (isLogin) {
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if (targetRouterConfig) {
        return (<Route location={location} component={targetRouterConfig.component} />);
        // return (<Route path={`${pathname}${search}`} component={targetRouterConfig.component} />);
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouterConfig && targetRouterConfig.auth) {
        console.log('跳转登录登录')
        const targetLocation = pathname.substring(0, pathname.indexOf('/workbench')).concat('/workbench/login')
        return <Redirect to={{
          pathname: targetLocation,
          search: search,
        }}/>;
        // return <Redirect to={`${targetLocation}${search}`} />;
      } else {
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to={location}/>;
        //  <Redirect to={`${pathname}${search}`} />;
      }
    }
  }
}

export default connect()(FrontendAuth);