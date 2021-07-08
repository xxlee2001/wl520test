module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3 // 参考官方文档
      }
    ],
    [
      "module-resolver",
      {
        "alias": {
          "src": process.env.MDF_TARGET === "mobile" ? "./src/mobile" : "./src/web",
          "web": "./src/web",
          "client": "./src/client",
          "business": "./src/business",
          "static": "./static"
          // "SvgIcon": "./node_modules/@mdf/metaui-web/lib/components/common/SvgIcon.js"
        }
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-json-strings",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    // ["import", {
    //   "libraryName": "antd-mobile",
    //   "libraryDirectory": "es",
    // }],
    // ["import", {
    //   "libraryName": "antd",
    //   "libraryDirectory": "es",
    // }],
    ["import", { "libraryName": "antd", "libraryDirectory": "es" }, "ant"],
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es" }, "antd-mobile"],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-proposal-pipeline-operator",
      {
        "proposal": "minimal"
      }
    ],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-do-expressions"
  ],
  "env": {
    "development": {
      "plugins": ['react-hot-loader/babel']
    }
  }
}
