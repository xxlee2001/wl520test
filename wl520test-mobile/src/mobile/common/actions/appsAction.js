// import axios from 'axios'
import mtl from "mtl-js-sdk";
import { Toast } from "../components/antd";
// import appCenter from "mtl-js-sdk/lib/plugins/appcenter";
import {arrTrans } from './utils'
import {noticeNum} from './login'
// mtl.loadPlugin(appCenter);
// const dataUrl = '/hpapaas-passport-be/hpaapp/mobileAppInfos'
import { getDomainPrefix, getBaseUrl, getAppId, } from '@utils'; 

 const DOMAIN_PREFIX = getDomainPrefix();
export const APPS_INIT = "APPS_INIT";
export const APPS_PAGE = "APPS_PAGE";
export const TENANT_CHANGE = 'TENANT_CHANGE'
export const RESET = 'RESET'
export const reSetAction = () => ({type:RESET})
export const initApps = (history) => (dispatch) => {
  // mtl.getAppInfo({
  //   url:window.localStorage.getItem(KEY_BASE_URL),
  //   success: function(res) {
  //     console.log('getAppInfo', res);
  //     console.log('resType', typeof(res))
  //     let resObj;
  //     try {
  //       resObj = JSON.parse(res)
  //     } catch (error) {
  //       resObj = res
  //     }
  //     console.log('getAppInfoAppid', resObj.appId);
      mtl.getIndependenceAppList({
        url: getBaseUrl(),
        appId: getAppId(),
        //  COMMENT 添加是否显示审批中心
        includeApproveCenter: true,
        success: function(res) {
          let appsList = [];
          for (let i = 0; i < res.data.length; i++) {
            // console.log(res.data[i].children)
            if (res.data[i].app && res.data[i].app.length) {
              appsList.push.apply(appsList, res.data[i].app);
            }
          }
          // console.log(appsList);
          // appsList = arrTrans(20,appsList)
          window.localStorage.setItem('appsList',JSON.stringify(appsList))
          dispatch({
            type: APPS_INIT,
            payload: {
              total:appsList.length,
              list:arrTrans(20,appsList)
            }

            // payload: arrTrans(20,appsList)
          });
        },
        fail: function(err) {
          console.log('getIndependenceAppList',err)
          // history.replace(`${DOMAIN_PREFIX}/workbench/login`);
        }
      })
  //   },
  //   fail: function(err) {
  //     console.log('getAppInfo_err', err)
  //     Toast.fail('web不支持',1)
  //   }
  // })
  return
};

export const tenantChange = (tenantName, getAppObj, history, complete) => dispatch => {
  mtl.changeTenant({
    url: getBaseUrl(),
    tenantId:getAppObj.tenantId,
    success:function (res) {
      // console.log(res)
      window.localStorage.setItem("tenantId", getAppObj.tenantId);
      window.localStorage.setItem("tenantName", tenantName);
      dispatch({
        type: TENANT_CHANGE,
        payload: {
          tenantId:getAppObj.tenantId,
          tenantName
        }
      })
      dispatch(initApps(history))
      complete && complete()
    },
    fail:function (err) {
      // Toast.fail(err.message, 1)
      complete && complete()
    }
  })
}

export const unReadMsgListener = (unReadTodoCount, unMsgRead) => dispatch => {
  dispatch(noticeNum({
    unReadTodoCount:unReadTodoCount, unMsgRead
  }))
}

