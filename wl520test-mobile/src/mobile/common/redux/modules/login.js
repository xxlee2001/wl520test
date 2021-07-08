import {
  LOGIN,
  REGIONCHANGE,
  ENVURLCHANGE,
  DELETE,
  SAVEURL,
  EDITORUEL,
  NOTICE_NUM,
  INIT_URL_FROM_MTL_STORE,
} from "../../actions/login";
import { TENANT_CHANGE, RESET } from "../../actions/appsAction";
import intl from "react-intl-universal";
import { getConfigInfo, setEnvUrlList, } from '@utils';

// import { fromJS }  from 'immutable'
// console.log(window.localStorage.getItem("envUrl")||"https://build.yyuap.com/")
const DAILY_URL = 'https://build.yyuap.com/mobile-app/rest/v1/mobile/app/workbench/env'
const PRE_URL = 'https://yonbuilder-pre.diwork.com/mobile-app/rest/v1/mobile/app/workbench/env?tenantId=pre'
const PROD_URL = 'https://yonbuilder.diwork.com/mobile-app/rest/v1/mobile/app/workbench/env'
const orginEnvList = [
  {
    label: intl.get("daily"),
    value: DAILY_URL,
    noEditor: true,
    id:'daily'
  },
  {
    label: intl.get("pre"),
    value: PRE_URL,
    noEditor: true,
    id:'pre',
  },
  {
    label: intl.get("prod"),
    value: PROD_URL,
    noEditor: true,
    id:'prod'
  },
]

const configInfo = getConfigInfo();
console.log('redux:login:configInfo :>> ', configInfo);
const defaultState = {
  regionCode: "+86",
  userName: window.localStorage.getItem("userName") || "",
  tenantList: window.localStorage.getItem("tenantList")
    ? JSON.parse(window.localStorage.getItem("tenantList"))
    : [],
  userCode: "",
  userEmail: "",
  userId: window.localStorage.getItem("userId") || "",
  userMobile: [],
  tenantId: window.localStorage.getItem("tenantId") || "",
  access_token: window.localStorage.getItem("access_token") || "",
  tenantName: window.localStorage.getItem("tenantName") || "",
  envUrlList: orginEnvList,
  userAvatar: window.localStorage.getItem("userAvatar") || "",
  envURL: `${window.location.origin}/mobile-app/rest/v1/mobile/app/workbench/env${window.location.origin === 'https://yonbuilder-pre.diwork.com'?'?tenantId=pre' :''}`,
  // envUrl: DAILY_URL,
  /*
    window.localStorage.setItem('unMsgRead',unMsgRead)
    window.localStorage.setItem('unReadTodoCount',unReadTodoCount)
  */
  unReadTodoCount: window.localStorage.getItem('unReadTodoCount')?window.localStorage.getItem('unReadTodoCount'):"0",
  unMsgRead: window.localStorage.getItem('unMsgRead')?window.localStorage.getItem('unMsgRead'):"0",
  appName: configInfo?.appName,
  envMode: configInfo?.envMode,
  // configEnvURL: configInfo?.envURL,
  // loginType: configInfo?.loginType,
  // theme: configInfo?.theme,
  // showRememberPwd: configInfo?.showRememberPwd,
  appIdConfig: configInfo?.appId,
  homeURL: configInfo?.homeURL,
};
console.log('redux:login:defaultState :>> ', defaultState);

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case INIT_URL_FROM_MTL_STORE:
      console.log('store_INIT_URL_FROM_MTL_STORE:',payload)
      return {
        ...state,
        ...payload
      }
    case RESET:
      window.localStorage.removeItem("wb_at");
      window.localStorage.removeItem("notice");
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("unReadTodoCount");
      window.localStorage.removeItem("unMsgRead");
      window.localStorage.setItem("tenantList",JSON.stringify(['logout']));
      return {
        ...state,
        regionCode: "+86",
        userName: "",
        tenantList: ['logout'],
        userCode: "",
        userEmail: "",
        userId: "",
        userMobile: [],
        userAvatar: window.local,
        envURL: `${window.location.origin}/mobile-app/rest/v1/mobile/app/workbench/env${window.location.origin === 'https://yonbuilder-pre.diwork.com'?'?tenantId=pre' :''}`,
        tenantId: "",
        access_token: window.localStorage.getItem("access_token") || "",
        tenantName: window.localStorage.getItem("tenantName") || "",
        unReadTodoCount: window.localStorage.getItem('unReadTodoCount')?window.localStorage.getItem('unReadTodoCount'):"0",
        unMsgRead: window.localStorage.getItem('unMsgRead')?window.localStorage.getItem('unMsgRead'):"0",
      };
    case LOGIN:
      // console.log('payload',payload)
      return {
        ...state,
        ...payload,
      };
    case TENANT_CHANGE:
      return {
        ...state,
        ...payload,
      };
    case REGIONCHANGE:
      return {
        ...state,
        ...payload,
      };
    case ENVURLCHANGE:
      return {
        ...state,
        ...payload,
      };
    case DELETE: {
      const envUrlList = state.envUrlList.filter((i) => i.id !== payload.id);
      // console.log(envUrlList)
      // window.localStorage.setItem("envUrlList", JSON.stringify(envUrlList));
      setEnvUrlList(envUrlList)
      let envURL = state.envURL;
      if (state.envURL === payload.value) {
        envURL = DAILY_URL;
      }
      return {
        ...state,
        envUrlList,
        envURL,
      };
    }
    case SAVEURL: {
      // console.log(payload)
      const envUrlList = [...state.envUrlList, payload];
      // window.localStorage.setItem("envUrlList", JSON.stringify(envUrlList));
      setEnvUrlList(envUrlList);
      return {
        ...state,
        envUrlList,
      };
    }
    case EDITORUEL: {
      // console.log(payload)
      const envUrlList = state.envUrlList.map((val) => {
        if (val.id === payload.id) {
          return {
            ...val,
            label: payload.label,
            value: payload.value,
          };
        }
        return val;
      });
      setEnvUrlList(envUrlList);
      // window.localStorage.setItem('envUrlList',JSON.stringify(envUrlList))
      return {
        ...state,
        envUrlList,
      };
    }
    case NOTICE_NUM: {
      return {
        ...state,
        ...payload
      };
    }
  }
  return state;
};
