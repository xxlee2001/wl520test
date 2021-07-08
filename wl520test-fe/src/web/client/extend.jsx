
// const businessContext = require.context('business')
// cb.extend.registerScripts(process.env.__DOMAINKEY__, {})
const businessContext = require.context('business')
cb.extend.registerScripts(process.env.__DOMAINKEY__, businessContext)

// 注册自定义页面按照项目实际调整
const extendComponents = require('../common/extends').default
cb.extend.registerComponents(process.env.__DOMAINKEY__, extendComponents)
