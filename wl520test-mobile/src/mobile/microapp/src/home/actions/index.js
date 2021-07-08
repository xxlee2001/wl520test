
import axios from "axios";

export async function ajax(options = {}) {
  try {
      const res = await axios({
          ...options
      })
      const { status, data } = res || {};
      if (status == 200) {
          return Promise.resolve(data);
      } else {
          return Promise.reject(data);
      }
  } catch (e) {
      return Promise.reject(e);
  }
}

export function getHash () {
    const reg = /^.*[?&]hash=([^=&?]+).*$/;
    if(reg.test(window.location.href)) {
        return window.location.href.replace(reg, '$1');
    }
    return '';
}

/**
 * 获取应用信息
 * @param {*} options
 */
export function getAppInfoByHash (options = {}) {
    return ajax({
        method: 'get',
        url: `/mobile-app/rest/v1/mobile/login/hash/${getHash()}`,
        ...options
    })
}

/**
 * 发送认证短信
 * @param {*} options
 */
export function sendValidCodeByHash (options = {}) {
    return ajax({
        method: 'post',
        url: `/mobile-app/rest/v1/mobile/login/validCode/send/${getHash()}`,
        ...options
    })
}

/**
 * 验证码登录
 * @param {*} options
 */
export function loginByValidCode (options = {}) {
    return ajax({
        method: 'post',
        url: `/mobile-app/rest/v1/mobile/login/validCode/${getHash()}`,
        ...options
    })
}

/**
 * 友互通登录
 * @param {*} options
 */
export function loginByPassword (options = {}) {
    return ajax({
        method: 'post',
        url: `/mobile-app/rest/v1/mobile/login/password`,
        ...options
    })
}
