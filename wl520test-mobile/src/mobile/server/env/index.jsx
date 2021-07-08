import envConfig from '../../common/config.env'
let localPath = process.env.npm_config_report?'10.0.2.2':'localhost';
if (process.env.IP === 'true') {
  // 获取本机ip
  const os = require('os');
  const ifaces = os.networkInterfaces();
  const ips = [];
  for (const dev in ifaces) {
    // let alias = 0;
    ifaces[dev].forEach(function (details) {
      if (details.family == 'IPv4') {
        // console.log(dev+(alias?':'+alias:''),details.address);
        ips.push(details.address)
        // ++alias;
      }
    });
  }

  localPath = ips[1];
}
// const parseUrl = function (url) {
//   if (!url)
//     return url;
//   if (url.substr(url.length - 1, 1) === '/')
//     url = url.substr(0, url.length - 1);
//   return url;
// }
function combine (baseurl, pathname) {
  const separator = (/\/$/.test(baseurl) === false && /^\//.test(pathname) === false) ? '/' : ''
  return Array.prototype.slice.call(arguments, 0).join(separator)
}
function getVersion(file = '') {
    let version = '';
    try {
      version = require(file).version;
    } catch (e) {
      version = '';
    } finally {
      return version;
    }
}
const { HTTP_SERVICE_BASEURL, HTTP_TPL_SERVER_URL, HTTP_PREVIEW_DOMAIN } = envConfig

console.log('preview domain: ', HTTP_PREVIEW_DOMAIN)
const env = {
  DOMAIN : HTTP_PREVIEW_DOMAIN,
  HTTP_SCRIPT_BASEURL: `http://${localPath}:${process.env.SCRIPT_PORT || 3004}/static`,
  HTTP_SERVICE_BASEURL, // 后台服务地址，可修改
  HTTP_PRINT_SERVER: envConfig.HTTP_PRINT_SERVER,
  HTTP_WORKFLOW_SERVER: envConfig.HTTP_WORKFLOW_SERVER,
  HTTP_SERVER_PORT: envConfig.HTTP_SERVER_PORT || 3003,
  HTTP_SCRIPT_SUFFIX: '',
  STATIC_RANDOM_SUFFIX: getVersion('../../version.json'),
  PACKAGE_VERSION: getVersion('../../package.version.json'),
  HTTP_CONTENT_TYPE: Object.assign({//
    JSON: 'application/json',
    PDF: 'application/pdf',
    XLS: 'application/vnd.ms-excel',
    FORM: 'multipart/form-data'
  }, envConfig.HTTP_CONTENT_TYPE), // 接口请求的content-type类型，不建议修改

  // 关于用户的ajax接口
  HTTP_USER_AUTHENTICATION: combine(HTTP_SERVICE_BASEURL, '/user/login?terminaltype=PC'),
  HTTP_USER_REG_CORP: combine(HTTP_SERVICE_BASEURL, '/register/registerCorp'),
  HTTP_USER_CREATE_ACC: combine(HTTP_SERVICE_BASEURL, '/register/addCorpAccount'),
  HTTP_USER_VERIFYTOKEN: combine(HTTP_SERVICE_BASEURL, '/login/token?terminaltype=PC&token={0}'),
  HTTP_USER_FETCH_METABYMENU: combine(HTTP_TPL_SERVER_URL, '/billmeta/getbill'),
  HTTP_USER_FETCH_METABYBILLMAKER: combine(HTTP_TPL_SERVER_URL, '/makebillmeta/getBill'),
  HTTP_USER_FETCH_METABYBILLNO: combine(HTTP_SERVICE_BASEURL, '/menu/getMetaByMenu'),
  HTTP_USER_FETCH_TREE: combine(HTTP_SERVICE_BASEURL, '/menu/getMenuTree?token={0}&terminalType={1}'),
  HTTP_USER_FETCH_TREE_NODE: combine(HTTP_SERVICE_BASEURL, '/menu/getMetaByMenu'),
  HTTP_USER_FETCH_OPTIONMETA: combine(HTTP_SERVICE_BASEURL, '/option/getOptionMeta'),
  HTTP_USER_FETCH_OPTIONDATA: combine(HTTP_SERVICE_BASEURL, '/option/getOptionData'),
  HTTP_USER_FETCH_PROCESSMETA: combine(HTTP_SERVICE_BASEURL, '/billproc/vm'),
  HTTP_USER_FETCH_TPLLIST: combine(HTTP_SERVICE_BASEURL, '/billmeta/tpllist'),
  HTTP_USER_FETCH_BILLMETA: combine(HTTP_SERVICE_BASEURL, '/billmeta/group'),
  HTTP_USER_POST_BILLMETA: combine(HTTP_SERVICE_BASEURL, '/billmeta/groupset'),
  HTTP_USER_COR_ACC: combine(HTTP_SERVICE_BASEURL, '/login/getCorpAccounts'), // gen()
  HTTP_USER_ORG: combine(HTTP_SERVICE_BASEURL, '/login/getUserOrgs'),
  HTTP_USER_UPLOAD: combine(HTTP_SERVICE_BASEURL, '/pub/fileupload/upload'),
  HTTP_USER_UPLOAD2LOCAL: combine(HTTP_SERVICE_BASEURL, '/pub/fileupload/upload2Local'),
  HTTP_USER_VALIDCODE: combine(HTTP_SERVICE_BASEURL, '/register/validcode'),
  AUTH_WHITELIST: [new RegExp('/view/*'), new RegExp('/meta/*'), new RegExp('/.*')]
}
if (process.env.NODE_ENV === 'production') {
  Object.assign(env, {
    HTTP_PREFIX: process.env.PREFIX || '',
    PORTAL_LOG_LEVEL: 'error',
    HTTP_SCRIPT_BASEURL: process.env.PREFIX || '',
    HTTP_SCRIPT_SUFFIX: '.min',
  })
}
export default env
