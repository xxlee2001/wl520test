import mtl from "mtl-js-sdk";
// import { Toast } from "../components/antd";
import { ToastMes as Toast } from '../components/antd'
import intl from "react-intl-universal";
import notice from "mtl-js-sdk/lib/plugins/notice";
mtl.loadPlugin(notice);
import { get } from '@request'
import { getBaseUrl, getAppId, getNotice } from '@utils'; 

import { loginByVCode } from '@mtlMW'
import { isEmpty, } from 'lodash'

import { testPhoneNumber, tsetEmail, testPhoneNumberTw, testPhoneOrEmail } from '../utils/index'
//正式环境
// const appMsg = {
//   appKey: "b9bda123894a4fcfb9ab7153122a4b19",
//   appSecret: "42d2873655034a22964bb0f4ded443a9",
// };
// 测试环境
// const appMsg = {appKey: '8218b8f2df9d483aa1f773a67213541d',
// appSecret: 'fe16655e8ed947dfa15159dece97ba16',}

import { getDomainPrefix, getConfigInfo } from '@utils';
// import { lstat } from "fs";

const DOMAIN_PREFIX = getDomainPrefix();

export const LOGIN = "LOGIN";
export const REGIONCHANGE = "REGIONCHANGE";

export const ENVURLCHANGE = "ENVURLCHANGE";

/**
 * 删除环境地址
 */
export const DELETE = "DELETE";

export const SAVEURL = "SAVEURL";
export const EDITORUEL = "EDITORUEL";
export const NOTICE_NUM = 'NOTICE_NUM'
export const INIT_URL_FROM_MTL_STORE = 'INIT_URL_FROM_MTL_STORE'

export const initUrlFromStore = (payload) => dispatch => {
  console.log('initUrlFromStore', payload)
  return dispatch({
    type: INIT_URL_FROM_MTL_STORE,
    payload
  })
}

export const changeUrl = (payload) => (dispatch) =>
  dispatch({ type: EDITORUEL, payload });

export const saveURL = (payload) => (dispatch) =>
  dispatch({ type: SAVEURL, payload });

export const delEnv = (payload) => (dispatch) =>
  dispatch({
    type: DELETE,
    payload,
  });
export const envChange = (i) => (dispatch) =>
  dispatch({
    type: ENVURLCHANGE,
    payload: {
      envURL: i.value,
      // envLabel: i.label,
    },
  });

const loginAction = (payload) => (dispatch) =>
  dispatch({
    type: LOGIN,
    payload,
  });
export const noticeNum = payload => dispatch =>
  dispatch({
    type: NOTICE_NUM,
    payload
  })
export const regionChange = (payload) => (dispatch) =>
  dispatch({
    type: REGIONCHANGE,
    payload,
  });
// 登陆成功之后将数据存储起来
function saveSucData(res, action, dispatch) {
  let tenantId = "",
    tenantName = "",
    tenantList = [];
  const {
    data: { userInfo, tenants, yhtToken, sessionInfo },
  } = res;

  window.localStorage.setItem("userName", userInfo.userName);
  window.localStorage.setItem("userAvatar", userInfo.userAvatar);
  window.localStorage.setItem("userId", userInfo.userId);
  mtl.setStorage({
    key: 'userId',
    data: userInfo.userId,
  });
  window.localStorage.setItem("tenantList", JSON.stringify(tenants));
  window.localStorage.setItem(
    "wb_at",
    JSON.stringify(sessionInfo.sessionId)
  );
  window.localStorage.setItem("yhtToken", yhtToken.yhtAccessToken);

  if (
    window.localStorage.getItem("tenantId") &&
    tenantList.some((item) => {
      return (
        item.tenant.tenantId === window.localStorage.getItem("tenantId")
      );
    })
  ) {
    tenantId = window.localStorage.getItem("tenantId");
    tenantName = window.localStorage.getItem("tenantName");
  } else if (tenants[0]) {
    tenantId = tenants[0].tenantId;
    tenantName = tenants[0].tenantName;
    window.localStorage.setItem("tenantId", tenantId);
    window.localStorage.setItem("tenantName", tenantName);
  } else {
    tenantId = "";
    window.localStorage.setItem("tenantId", "");
  }
  dispatch(
    loginAction({
      tenantList: tenants,
      userCode: userInfo.userCode,
      userEmail: userInfo.userEmail,
      userId: userInfo.userId,
      userMobile: userInfo.userMobile,
      userName: userInfo.userName,
      tenantId,
      // access_token,
      tenantName,
      userAvatar: userInfo.userAvatar,
    })
  );
  const { homeMode = 0, homeURL = '' } = getConfigInfo();
  if (+homeMode === 1 && !isEmpty(homeURL)) {
    action.replace(homeURL)
  } else {
    // --todo: 此处为调试使用
    if (mtl.platform.toLowerCase() === 'h5') {
      Toast.hide()
      Toast.success(`登录成功！`, 1);
      action.replace(`${DOMAIN_PREFIX}/workbench/home/work`);
    } else if (
      mtl.platform.toLowerCase() === "qyandroid" ||
      mtl.platform.toLowerCase() === "qyios"
    ) {
      mtl.notice.init({
        // window.localStorage.setItem('notice', JSON.stringify(notice))
        // ...JSON.parse(window.localStorage.getItem('notice')),
        ...JSON.parse(getNotice()),
        // apihost: "https://ezone-u8c-daily.yyuap.com",
        // login_url: "https://build.yyuap.com",
        // im_server: "u8cim-daily.yyuap.com",
        // im_short_server: "u8cim-daily.yyuap.com",
        // im_short_port: 5222,
        // im_short_scheme: "https",
        loginInfo: res.data,
        success: function (res) {
          // alert('初始化成功')
          // console.log('notictInitSuccess',res)
          mtl.notice.getTodoMsgCount({
            success: function (res) {
              let resObj;
              try {
                resObj = JSON.parse(res)
              } catch (error) {
                resObj = res
              }
              let { todoCount, unMsgRead } = resObj;
              console.log("===getTodoMsgCount");
              console.log(typeof (resObj), resObj.todoCount);
              console.log(resObj, todoCount, unMsgRead);
              console.log("====getTodoMsgCount");
              window.localStorage.setItem('unMsgRead', unMsgRead)
              window.localStorage.setItem('unReadTodoCount', todoCount)

              // setNotices(+unMsgRead > 99 ? "99+" : unMsgRead);
              // setTodo(+unReadTodoCount > 99 ? "99+" : unReadTodoCount);
              dispatch(noticeNum({
                unReadTodoCount: todoCount, unMsgRead
              }))
              Toast.hide()
              Toast.success(`登录成功！`, 1);
              // console.log("sdfasdfasdf", action);
              action.replace(`${DOMAIN_PREFIX}/workbench/home/work`);
            },
            fail: function (err) {
              Toast.hide()
              // var message = err.message; // 错误信息
              console.log("err===getTodoMsgCount");
              console.log(err);
              console.log("err====getTodoMsgCount");
            },
          });
        },
        fail: function (err) {
          Toast.hide()
          console.log("notictInitError", err);
          // action.replace(`${DOMAIN_PREFIX}/workbench/login`);
          // window.localStorage.clear()
          Toast.fail('notice插件初始化失败', 1)
          action.replace(`${DOMAIN_PREFIX}/workbench/home/work`);
        },
      });
    }

  }

  // Toast.hide()
}

// 手机号验证码登录
export const loginByPhonCode = (params, action,success, fail) => (dispatch) => {
  const { username, password, url, tenantId, regionCode } = params
  if(!testPhoneOrEmail(username, true, regionCode)) return 
  if (password.trim() === "") {
    Toast.fail(intl.get("codeTips"), 1);
    return;
  }
  // Toast.loading('loading...', 0, () => { }, { mask: true })
  Toast.loading(intl.get("loading"), 0, null, true)
  // {url: '', mobile: '', validateCode:'验证码', tenantId:'租户ID可传可不传'}
  let data = {
    url: url,
    mobile: username,
    validateCode: password,
    tenantId: tenantId
  };
  loginByVCode({
    data,
    success: (res) => {
      Toast.hide()
      // let result = res.resultStr;
      saveSucData(res, action, dispatch)

    },
    fail: (err) => {
      Toast.hide()
      Toast.fail(intl.get("loginerr"), 1);
      fail && fail(err)
      console.log('err :>> ', err);
    }
  })
}
// 手机号密码验证
export const loginFunc = (data, action) => (dispatch) => {
  const { username, password, isRemeberMe, isTel, regionCode } = data
  if(!testPhoneOrEmail(username, isTel, regionCode)) return 
  
  if (password.trim() === "") {
    Toast.fail(intl.get("writePlease")+intl.get("pwd"), 1);
    return;
  }
  Toast.loading(intl.get("loading"), 0, null, true)
  // Toast.loading('loading...', 0, () => { }, { mask: true })
  mtl.login({
    ...data,
    // url: window.localStorage.getItem("baseUrl"),
    url: getBaseUrl(),
    success: (res) => {
      Toast.hide()
      // 根据记住密码保存用户信息
      window.localStorage.setItem("loginUser", username);
      if (isRemeberMe) {
        window.localStorage.setItem("isRemeberMe", isRemeberMe);
        window.localStorage.setItem("regionCode", regionCode)
        mtl.setStorage({
          key: 'password',
          data: password,
        });
      }
      else {
        window.localStorage.removeItem("isRemeberMe")
        window.localStorage.removeItem("regionCode")
        mtl.removeStorage({ key: 'password' })
      }
      saveSucData(res, action, dispatch)
    },
    fail: function (err) {
      Toast.hide()
      Toast.fail(intl.get("loginerr"), 1);
      console.log("登录失败", err);
      //action.replace(`${DOMAIN_PREFIX}/workbench/login`);
      // window.localStorage.clear()
    },
  }); 
};

// 扫描成功的调用
export const loginSuccess = (data, action) => (dispatch) => {
  console.log(data, action, dispatch);
  saveSucData(data, action, dispatch)
}
