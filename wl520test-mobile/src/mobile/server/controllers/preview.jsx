import env from '../env'



const preview = {
  render : async function (ctx){
    const pid = ctx.query.pid;
    if(isEmpty(pid)) {
      ctx.response.body = reportError("缺少关键信息 - pid");
      return;
    }
    const url =
      `${env.HTTP_SERVICE_BASEURL}/mobile/app/preview/wechat/auth/cookie?hash=${pid}`;
    const options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
    };
    await fetch(url, options)
      .then((response) => {
        return checkResponse(response);
      })
      .then((json) => {
        if (isEmpty(json)) {
          ctx.response.body = reportError("后端没有返回数据");
          return;
        }
        const result = JSON.parse(json);
        const {cookies} = result.data;
        const redirectURL = result.data.url;
        const domain = env.DOMAIN;
        const option = this.setCertificateCookie(ctx, cookies,domain);
        const test = ctx.query.test;
        if(!test) {
          ctx.response.redirect(decodeURIComponent(redirectURL));
        } else {
          ctx.response.body = {
            option,
            result
          }
        }
      })
      .catch((error) => {
        console.log(error);
        ctx.response.body = reportError(error);
      });
  },

  hash : async function (ctx) {
    const redirectURL = this.getUrlValue(ctx);
    if(!redirectURL) {
      ctx.response.body = reportError("缺少关键参数 - url");
      return;
    }
    const body = {
      url: redirectURL,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        "Cookie":ctx.headers["cookie"]
      },
      credentials: "include",
    };
    const url = `${env.HTTP_SERVICE_BASEURL}/mobile/app/preview/wechat/qrcode/hash`;
    await fetch(url, options)
      .then((response) => {
        return checkResponse(response);
      })
      .then((json) => {
        if (isEmpty(json)) {
          ctx.response.body = reportError("后端没有返回数据");
        } else {
          const rs = JSON.parse(json);
          ctx.response.body = rs;
        }
      })
      .catch((error) => {
        ctx.response.body = reportError(error);
      });
  },

  getUrlValue : function (ctx) {
    let reurl = ctx.headers.url;
    if(!reurl) {
      reurl = ctx.query.url;
    }
    return reurl;
  },

  setCertificateCookie : function (ctx, cookies, domain) {
    // const {wb_at,yht_access_token,at,yonyou_uname,yonyou_uid} = cookies;
    const option = {
      domain: `${domain}`, // 写cookie所在的域名
      path: "/", // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date("2025-02-15"), // cookie失效时间
      httpOnly: true, // 是否只用于http请求中获取
      overwrite: false, // 是否允许重写
    };

    for (let key in cookies) {
      ctx.cookies.set(key, cookies[key], option);
    }
    // ctx.cookies.set("wb_at", wb_at, option);
    // ctx.cookies.set("yht_access_token", yht_access_token, option);
    // ctx.cookies.set("at", at, option);
    // ctx.cookies.set("yonyou_uname", yonyou_uname, option);
    // ctx.cookies.set("yonyou_uid", yonyou_uid, option);
    return option;
  }
}

function checkResponse(response) {
  if (response.status != 200) {
    return {
      code: response.status,
      message: "服务器叕异常了",
    };
  } else {
    return response.text()
  }
}

function reportError(msg) {
  return {
    code: 1,
    msg: msg,
  };
}

function reportSuccess(data) {
  return data;
}

function isEmpty(data) {
  // console.log("isEmpty->" + data);
  if (!data) {
    return true;
  }
  if (data == "") {
    return true;
  }
  return false;
}

export default preview;
