import mtl from "mtl-js-sdk";
import { func } from "prop-types";


/**
 * 扫描二维码的API
 * @param {*} params {scanType: ["qrCode","barCode"], needResult: 1}
 */
function scanCode({ params = {}, success, fail }) {
  if (mtl) {
    mtl.scanQRCode({
      needResult: 0,//默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"],//可以指定扫二维码还是一维码，默认二者都有
      ...params,
      success: (res) => {
        success && success(res);
        mtl.closeScanQRCode();
      },
      fail: (err) => {
        fail && fail(err);
      }
    });
  } else {
    console.log('mtl :>> ', mtl);
    fail && fail();

  }
}

/**
 * 获取验证码
 * @param {*} params {url: '', mobile: '',}
 */
function getValidateCode({ params, success, fail }) {
  if (mtl) {
    mtl.sendValidateCode({
      ...params,
      success: (res) => {
        success && success(res);
      },
      fail: (err) => {
        fail && fail(err);
      }
    })
  } else {
    console.log('mtl :>> ', mtl);
    fail && fail();
  }
}

/**
 * 手机验证码登录
 * @param {*} params {url: '', mobile: '', validateCode:'验证码', tenantId:'租户ID可传可不传'}
 */
function loginByVCode({ data, success, fail }) {
  if (mtl) {
    mtl.validateCodeLogin({
      ...data,
      success: (res) => {
        success && success(res);
      },
      fail: (err) => {
        fail && fail(err);
      }
    })
  } else {
    console.log('mtl :>> ', mtl);
    fail && fail();
  }
}



export {
  scanCode,
  getValidateCode,
  loginByVCode,
}