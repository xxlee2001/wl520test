const param = getUrlParams() || {};
const { billType, billNo, tenantId, hideTitle, pid } = param;


function init() {
  let origin = window.location.origin;
  if(pid && getPlatform() == "wx" ) {
    console.log("current is wx");
    getToken(pid);
  }
  if (billType && billNo) {
    if(origin == "http://localhost:3003") {
      //仅仅用于调试
      origin = "https://mdf-mobile-runtime.diwork.com"
    }
    url = `${origin}/view/${billType}/${billNo}?tenantId=${tenantId}&s=1&terminalType=3`;
    //alert(url);
    this.window.location = url;
  }
}


function getPlatform() {
    let userAgent = window.navigator.userAgent;
    let platform = null;
    if (userAgent.indexOf("miniProgram") !== -1 || userAgent.indexOf("wxwork") !== -1) {
      platform = "wx";
    } else if (userAgent.indexOf("mtlAndroid") !== -1) {
      platform = "android";
    } else if (userAgent.indexOf("Android_") !== -1) {
      platform = "QYAndroid";
    } else if (userAgent.indexOf("mtlIOS") !== -1) {
      platform = "ios";
    } else if (userAgent.indexOf("QYios") !== -1) {
      platform = "QYIos";
    } else if (userAgent.indexOf("QYZone") !== -1) {
      platform = "upesn";
    } else {
      console && console.log && console.log('use default platform "h5"');
      platform = "h5";
    }
    return platform;
}

function getUrlParams() {
  let res = {};
  let serach = window.location.search;
  if (!serach) {
    serach = window.location.href.split("?").pop();
  }
  let str = decodeURIComponent(serach);
  str = str.trim().replace(/^[?#&]/, "");

  if (!str) {
    return res;
  }
  str.split("&").forEach((strItem) => {
    if (strItem) {
      let parts = strItem.split("=");
      let partKey = parts[0],
        partValue = parts[1] || "";
      res[partKey] = partValue;
    }
  });
  return res;
}

init();
