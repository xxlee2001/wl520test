
import mtl from 'mtl-js-sdk';
import { get } from '@request';

import configInfoMock from '../mock/configData';


const KEY_ENV_URL_LIST = 'key_env_url_list';
const KEY_ENV_URL = "key_env_url";
const KEY_BASE_URL = "key_base_url";
const KEY_APP_ID = "key_app_id";
const KEY_HREF_HOST = "key_href_host";
const KEY_LOGIN_URL = "key_login_url";
const KEY_LOGIN_PATH = "key_login_path";
const KEY_GET_APP_LIST = "key_get_app_list";
const KEY_GET_BANNER_LIST = "key_get_banner_list";
const KEY_GET_ESN_CODE = "key_get_esn_code";
const KEY_GET_TODO_MSG_COUNT = "key_get_todo_msg_count";
const KEY_LOGIN = "key_login";
const KEY_NOTICE = "key_notice";
const KEY_CHECK_VERSION = "key_check_version";
const KEY_SCAN_LOGIN = "key_scan_login";
const saveLocal = ({ checkVersion, baseUrl, getAppList, getBannerList, getEsnCode, getTodoMsgCount, login, notice, appId = getConfigInfo()?.appId, hrefHost, loginPath, scanLogin }) => {
  localStorage.setItem(KEY_BASE_URL, baseUrl)
  localStorage.setItem(KEY_APP_ID, appId)
  localStorage.setItem(KEY_HREF_HOST, hrefHost)
  localStorage.setItem(KEY_LOGIN_PATH, loginPath)
  localStorage.setItem(KEY_GET_APP_LIST, baseUrl + getAppList)
  localStorage.setItem(KEY_GET_BANNER_LIST, baseUrl + getBannerList)
  localStorage.setItem(KEY_GET_ESN_CODE, baseUrl + getEsnCode)
  localStorage.setItem(KEY_GET_TODO_MSG_COUNT, baseUrl + getTodoMsgCount)
  // localStorage.setItem('login', baseUrl + login)
  localStorage.setItem(KEY_LOGIN, baseUrl + login)
  // localStorage.setItem('notice', JSON.stringify(notice))
  localStorage.setItem(KEY_NOTICE, JSON.stringify(notice))
  // localStorage.setItem('checkVersion', checkVersion)
  localStorage.setItem(KEY_CHECK_VERSION, checkVersion)
  localStorage.setItem(KEY_SCAN_LOGIN, scanLogin)
}
function getCheckVersion(){
  return localStorage.getItem(KEY_CHECK_VERSION);
}
function getNotice() {
  return localStorage.getItem(KEY_NOTICE);
}
function getLogin(){
  return localStorage.getItem(KEY_LOGIN);
}
function getBaseUrl() {
  return localStorage.getItem(KEY_BASE_URL);
}

function getAppId() {
  return localStorage.getItem(KEY_APP_ID);
}

function getScanLoginUrl() {
  return localStorage.getItem(KEY_SCAN_LOGIN);
}

function _processConfig(projectInfo){
  const info = projectInfo && JSON.parse(projectInfo) || configInfoMock;
  return { ...configInfoMock?.config, ...info?.config };
}
function getConfigInfo() {
  const projectInfo = mtl.getConfigSync();
  return _processConfig(projectInfo)
}

function getConfigInfoAsync(success = () => {}, fail = () => {}) {
  // const projectInfo = mtl.getConfigSync();
  // if (projectInfo) {
  //   console.log("getConfigInfoAsync----projectInfo====------------------", projectInfo);
  //   success && success(_processConfig(projectInfo));
  // } else {
    mtl.getConfig({
      success(res) {
        const info = res || configInfoMock;
        success && success({ ...configInfoMock?.config, ...info?.config })
      },
      fail(err) {
        const info = configInfoMock;
        success && success(configInfoMock?.config);
      }
    })
  // }
}

function setEnvUrlList(envUrlList = []) {
  mtl.setStorage({
    key: KEY_ENV_URL_LIST,
    data: JSON.stringify(envUrlList),
    success: () => {
      // 成功回调
    },
    fail: (err) => {
      // var message = err.message; // 错误信息
    }
  });
}

function getEnvUrlList(success, fail) {
  mtl.getStorage({
    key: KEY_ENV_URL_LIST,
    success: function (res) {
      success && success(JSON.parse(res.data));
    },
    fail: function (err) {
      fail && fail(err)
    }
  });
}

function setEnvUrl(envURL = '', success, fail) {
  mtl.setStorage({
    key: KEY_ENV_URL,
    data: envURL,
    success: function () {
      // 成功回调
      success && success()
    },
    fail: function (err) {
      fail && fail(err)
    }
  });
}

function getEnvUrl(success, fail) {
  mtl.getStorage({
    key: KEY_ENV_URL,
    success: function (res) {
      success && success(res.data);
    },
    fail: function (err) {
      fail && fail(err)
    }
  });
}


function openHtml(value) {
  if (!value) {
    console.log('loginHandle->openHtlm:value :>> ', value);
    return;
  }
  // window.location.href = `${location.origin}/workbench/login?envURL=${value}`;
  // const baseEnvUrl = new URL(value).origin;
  // const path = '/runtime-mobile/workbench/login';
  // window.location.href = `${baseEnvUrl}${path}?envURL=${value}`;

  getConfigInfoAsync( info => {
    const {
      theme,
      showRememberPwd,
      loginType,
      homeMode,
      appId,
      envMode,
      appName,
    } = info;
    let path = "/runtime-mobile/workbench/home/work";
    if (+homeMode === 0) {
      // window.location.href = `${location.origin}/workbench/login?envURL=${value}`;
      path = "/runtime-mobile/workbench/home/work";
    } else {
      path = "/runtime-mobile/workbench/login";
    }
    const baseEnvUrl = new URL(value).origin;
    window.location.href =
      `${baseEnvUrl}${path}?
      envURL=${value}&
      theme=${theme}&
      envMode=${envMode}&
      appName=${appName}&
      appIdConfig=${appId}&
      showRememberPwd=${showRememberPwd}&
      loginType=${loginType.join()}`;
  })
  
  
}

function handleEnvAddress() {
  mtl.getStorage({
    key: KEY_ENV_URL,
    success: (res) => {
      //  COMMENT 成功时
      const value = res.data;
      openHtml(value);
    },
    fail: () => {
      //  COMMENT 失败时获取配置信息里面的环境地址
      const configInfo = getConfigInfo();
      console.log('configInfo :>> ', configInfo);
      mtl.setStorage({
        key: KEY_ENV_URL,
        data: configInfo?.envURL,
      });
      const value = configInfo?.envURL;
      openHtml(value);
    }
  });
}


function getAppInfo({ envURL, appId }) {
  return get(envURL, { appId });
}


function getDomainPrefix() {
  const PREFIX = process.env.__CLIENT__
    ? window._baseUrl || ''
    : process.env.PREFIX || ''
  const CLIENT = process.env.__CLIENT__;
  const DOMAIN_PREFIX = CLIENT ? window._baseUrl || '' : PREFIX || '';
  return DOMAIN_PREFIX;
}

const requestConfig = (config, params, success, fail) => {
  get(config.value, params).then(res => {
    const result = typeof res.data.data === 'string' ? JSON.parse(res.data.data) : res.data.data;
    saveLocal(result); // 返回数据
    setEnvUrl(config.value,
      () => {
        // 成功回调
        success && success(result)
      },
      (err) => {
        fail && fail(err)
      })

    Promise.resolve(res);
  }).catch(err => {
    // var message = err.message; // 错误信息
    Promise.reject(err);
  })
}

const env_get_config = (config, params, success, fail) => {
  requestConfig(config, params, success, fail)
}



export {
  getConfigInfo,
  getConfigInfoAsync,
  KEY_ENV_URL_LIST,
  KEY_ENV_URL,
  KEY_BASE_URL,
  KEY_APP_ID,
  KEY_HREF_HOST,
  KEY_LOGIN_URL,
  KEY_LOGIN_PATH,
  KEY_GET_APP_LIST,
  KEY_GET_BANNER_LIST,
  KEY_GET_ESN_CODE,
  KEY_GET_TODO_MSG_COUNT,
  KEY_LOGIN,
  KEY_NOTICE,
  KEY_CHECK_VERSION,
  handleEnvAddress,
  getAppInfo,
  openHtml,
  setEnvUrlList,
  getEnvUrlList,
  setEnvUrl,
  getEnvUrl,
  getDomainPrefix,
  env_get_config as envGetConfig,
  getBaseUrl,
  getAppId,
  getScanLoginUrl,
  getLogin,
  getNotice,
  getCheckVersion
}