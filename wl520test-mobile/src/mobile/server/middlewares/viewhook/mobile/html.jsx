import env from "../../../env";

const baseUrl = env.HTTP_SCRIPT_BASEURL;
const suffix = env.HTTP_SCRIPT_SUFFIX;
const HTTP_PREFIX = env.HTTP_PREFIX || '';

// const isDev = process.env.NODE_ENV === "development";
// const random = isDev ? "" : `?_=${env.STATIC_RANDOM_SUFFIX}`;
const random = `?_=${env.STATIC_RANDOM_SUFFIX || Date.now()}`;
// 开发环境使用样式热更新, 不再用打包后的独立css文件

export default function html(workbenchType) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
    <title>MDF-Mobile</title>

    <script src="${HTTP_PREFIX}/react/umd/react.production.min.js${random}"></script>
    <script src="${HTTP_PREFIX}/react-dom/umd/react-dom.production.min.js${random}"></script>

    ${((workbenchType) => {
        var scripts = [];
        if (workbenchType !== 'workbench') {
            scripts.push(`<script src="${HTTP_PREFIX}/componentLib/index.js${random}"></script>
            <link rel="stylesheet" type="text/css" href="${HTTP_PREFIX}/componentLib/index.css${random}"/>`)
        }
        return scripts.join('\n')
    })(workbenchType)}

  </head>

  <body>
    <div id="container"><div></div></div>
    <div id="popup-container"></div>

    <script>
      (function(doc, win) {
        window.__fontUnit = 0
        var docEl = doc.documentElement,
        recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if (clientWidth >= 750) { //750这个值，根据设计师的psd宽度来修改，是多少就写多少，现在手机端一般是750px的设计稿，如果设计师给的1920的psd，自己用Photoshop等比例缩小
            window.__fontUnit = 100;
            docEl.style.fontSize = window.__fontUnit + 'px';

          } else {
            window.__fontUnit = 100 * (clientWidth / 750);
            docEl.style.fontSize = window.__fontUnit + 'px'; //750这个值，根据设计师的psd宽度来修改，是多少就写多少，现在手机端一般是750px的设计稿，如果设计师给的1920的psd，自己用Photoshop等比例缩小
          }
        };

        if (!doc.addEventListener) return;
        //   win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
    </script>

    <script src="${HTTP_PREFIX}/vconsole/vconsole.min.js${random}"></script>
    <script>
      // init vConsole
      window._baseUrl = '${HTTP_PREFIX }' || ''
      // if (window.location.search.includes('debug=true') || ${workbenchType === 'workbench'}  ) {
      //   var vConsole = new VConsole();
      // }
      

    </script>

    <script src="${HTTP_PREFIX}/scripts/vendor${suffix}.js${random}"></script>

    ${((workbenchType) => {
      switch(workbenchType) {
          case 'microapp':
          case 'workbench':
          case 'custom':
            return `<script src="${baseUrl}/javascripts/mobile.${workbenchType}${suffix}.js${random}"></script>`;
          default:
            return `<script src="${baseUrl}/javascripts/mobile.index${suffix}.js${random}"></script>`;
      }
    })(workbenchType)}
  </body>
</html>`;
}
