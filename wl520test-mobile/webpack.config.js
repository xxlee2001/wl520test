const path = require("path");
const os = require("os");
const webpack = require("webpack");
const moment = require("moment");
const autoprefixer = require("autoprefixer");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const version = require("uuid")();
const GenerateAssetPlugin = require("generate-asset-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const pkg = require("./package.json");
const WatchChangedPlugin = require("webpack-watch-changed");
// const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 });

const isProduction = process.env.NODE_ENV === "production";
const envName = isProduction ? "production" : "development";

const isMobile = process.env.MDF_TARGET === "mobile";
const srcBase = isMobile ? "mobile" : "web";
// 包分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const isAnaly = process.argv[2] === 'analy'
console.log(typeof process.env.npm_config_report)

process.env.__THEMETYPE__ = pkg.themeType;

// const sentryDSN = isProduction ? 'http://819cc95f63d74557b3bf5b6ff622689e@sentry.yyuap.com/4' : ''
const sentryDSN = "";

const globalCssDir = [
  path.resolve("src/mobile/common/styles/globalCss"),
  path.resolve("src/web"),
  path.resolve(__dirname, "node_modules"),
];

const nowDateStr = moment().format("YYYY-MM-DD HH:mm:ss");

const smp = new SpeedMeasurePlugin();

const scriptPort = process.env.SCRIPT_PORT || 3004;
let localPath = "localhost";
if (process.env.IP === "true") {
  // 获取本机ip
  const os = require("os");
  const ifaces = os.networkInterfaces();
  const ips = [];
  for (const dev in ifaces) {
    ifaces[dev].forEach(function (details) {
      if (details.family == "IPv4") {
        // console.log(dev+(alias?':'+alias:''),details.address);
        ips.push(details.address);
      }
    });
  }

  localPath = ips[1];
}

const origin = [path.resolve("node_modules/@mdf"), path.resolve("src")];

const cssPath = isProduction
  ? "public/stylesheets/[name].min.css"
  : "static/stylesheets/[name].css";

const publicPath = isProduction ? "/" : `http://${localPath}:${scriptPort}/`;
const outputPath = path.join(__dirname, isProduction ? "static" : "./");
// console.log('-----------publicPath---------------')
// console.log(publicPath)
// console.log('-----------outputPath---------------')
// console.log(outputPath)
const outputFilename = isProduction
  ? "public/javascripts/[name].min.js"
  : "static/javascripts/[name].js";
const chunkFilename = isProduction
  ? `public/javascripts/[name].bundle.js?_=${version}`
  : undefined;
const entry = {
    "mobile.index": ["./src/mobile/client/index.jsx"],
    "mobile.workbench":['./src/mobile/client/workbench.jsx'],
    "mobile.custom":['./src/custom/index.jsx'],
    "mobile.microapp":['./src/mobile/microapp/index.jsx'],
    };

if (process.env.BUILD_TYPE) {
  const type = process.env.BUILD_TYPE.toLocaleLowerCase();
  delete entry.index;
  entry[`${type}.index`] = `./src/${srcBase}/client`;
  process.env.__THEMETYPE__ = type;
}

const config = {
  mode: isProduction ? "production" : "development",
  entry,
  output: {
    publicPath,
    path: outputPath,
    filename: outputFilename,
    chunkFilename,
  },
  resolve: {
    alias: {
      src: path.join(__dirname, "./src"),
      business: path.join(__dirname, "./src/business"),
      '@request': path.join(__dirname, './src/mobile/common/request'),
      '@utils': path.join(__dirname, './src/mobile/common/utils/loginHandle'),
      '@mtlMW': path.join(__dirname, './src/mobile/common/utils/mtlMiddleware'),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: origin,
        exclude: /node_modules/,
        use: ["happypack/loader?id=happyBabel", "webpack-conditional-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          { loader: "babel-loader" },
          { loader: "awesome-typescript-loader" },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "source-map-loader",
        include: origin,
      },
      {
        test: /\.(map)$/,
        loader: "ignore-map-loader",
        include: origin,
      },
      {
        test: /\.(jpg|png|gif|ico|svg)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "styles/default/images/[hash:8].[name].[ext]",
        },
        include: [origin, path.resolve("static")],
      },
      {
        test: /\.(woff|eot|ttf)\??.*$/,
        loader: "url-loader",
        options: {
          name: "fonts/[name].[md5:hash:hex:7].[ext]",
        },
      },
        {
        test: /\.(less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'},
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                "brand-primary": "#E14C46",
                "brand-primary-tap": "#dc6964",
                "rand-wait": "f53c32",
                '@ant-prefix': 'xapp-ant',
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      // {
      //   test: /\.module\.css$/,
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      // },
    ],
  },
  plugins: [
    new HappyPack({
      id: "happyBabel",
      loaders: [
        {
          loader: "babel-loader?cacheDirectory=true",
        },
      ],
      threadPool: happyThreadPool,
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: cssPath,
      chunkFilename: cssPath,
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new webpack.DefinePlugin({
      "process.env.__CLIENT__": "true",
      "process.env.PREFIX": JSON.stringify(process.env.PREFIX),
      "process.env.__LANG__": process.env.MDF_LANG,
      "process.env.__BASEUI__": JSON.stringify(true),
      "process.env.__PROTOCOL__": JSON.stringify(pkg.themeType),
      "process.env.__THEMETYPE__": process.env.BUILD_TYPE
        ? JSON.stringify(process.env.BUILD_TYPE.toLocaleLowerCase())
        : JSON.stringify(pkg.themeType),
      "process.env.SENTRY_DSN": JSON.stringify(sentryDSN),
      'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(`./static/scripts/manifest.${envName}.json`),
    }),
  ].concat(
    isProduction
      ? [
          new CaseSensitivePathsPlugin(),
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
              safe: true,
              mergeLonghand: false,
              discardComments: { removeAll: true },
            },
            canPrint: true,
          }),
          new GenerateAssetPlugin({
            filename: "../bin/version.json",
            fn: (compilation, cb) => {
              cb(null, JSON.stringify({ version: version }, null, "\t"));
            },
            extraFiles: [],
          }),
        ].concat(
          isMobile
            ? [new webpack.BannerPlugin(`服务项目\nupdate: ${nowDateStr}`)]
            : []
        )
      : [
          new webpack.HotModuleReplacementPlugin(),
          new WatchChangedPlugin(),
          // new UnusedFilesWebpackPlugin({
          //   patterns: [
          //     isMobile ? 'src/mobile/!(server)/**/*.*' : 'src/web/!(server)/**/*.*'
          //   ]
          // })
        ]
  ),
  devtool: isProduction ? "source-map" : "eval-source-map",
  externals: [{ react: "React" }, { "react-dom": "ReactDOM" }, "meta-touch"],
};

if (!isProduction) {
  config.devServer = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host: "0.0.0.0",
    hot: true,
    inline: true,
    port: scriptPort,
    historyApiFallback: true,
    disableHostCheck: true,
  };
  
  config.cache = true;
  config.watchOptions = {
    aggregateTimeout: 1000,
  };
}

module.exports = isProduction ? config : smp.wrap(config);
