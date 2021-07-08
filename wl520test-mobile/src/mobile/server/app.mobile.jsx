import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import logger from 'koa-logger'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import proxies from 'koa-proxies'
import chalk from 'chalk'
import impressRouter from 'impress-router';

import viewhook from './middlewares/viewhook/mobile'
import auth from '@mdf/middlewares-auth/'
import log4js from '@mdf/middlewares-log4js';
import env from './env'
import '@mdf/cube/lib/helpers/polyfill'
import envMiddleware from './middlewares/env';

require('isomorphic-fetch')
const PREFIX = process.env.PREFIX || '/';
const https = 'https://';
//使用中间件，改在编码逻辑
const iRouter = new impressRouter();
const router = require('./router').default;

console.log('PREFIX -------> ', PREFIX)
const app = new Koa()
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', `${https}yonbuilder-dbox.yyuap.com`)
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Allow-Methods', 'PUT,GET,OPTIONS,POST')
  ctx.set('Access-Control-Allow-Headers', 'url,content-type')
  if (ctx.method === 'OPTIONS'){
    ctx.body = 200
  } else {
    await next()
  }
})
app.use(async (ctx, next) => {
    await next();

    /**
     * 缓存目录设置
     * @author rongqb@yonyou.com
     * @date 20201218
     */
    if(new RegExp(`^${PREFIX}/?(t|react|scripts|react-dom|componentLib|util|style)/`, '').test(ctx.request.path)) {
        // ============================= 强缓存 start ====================================
        // 1.强缓存 Cache-Control max-age
        ctx.set('Cache-Control', `max-age=${ 365 * 24 * 60 * 60 }, public`);
        // ctx.set('Cache-Control', `no-cache`);
        // ctx.set('Cache-Control', `no-store`);

        // 2.强缓存 Expires
        // ctx.set('Cache-Control', ``);
        // ctx.set('Expires', `${new Date(1639722002024)}`);
        // ============================= 强缓存 end ======================================

        // ============================= 协商缓存 start ==================================
        // 1. Last-Modified/If-Modified-Since

        // 2. Etag/If-None-Match
        // ctx.set('ETag', '123456');
        // ctx.set('ETag', Date.now());

        // check for fresh, return 304
        if (ctx.fresh) {
            ctx.status = 304;
        }
        // ============================= 协商缓存 end ====================================
    }
});
app.use(log4js())
app.use(auth({ config: env }))
app.use(viewhook())
app.use(logger())
app.use(compress())
app.use(bodyParser({ enableTypes: ['json'], jsonLimit: '10mb' }))
app.use(router.routes())
app.use(router.allowedMethods())
app.use(iRouter)

iRouter.use(PREFIX, serve(path.join(process.cwd(), 'static', 'public'), { maxage: 365 * 24 * 60 * 60 * 1000 }))
iRouter.use(PREFIX, serve(path.join(process.cwd(), 'home')))
iRouter.use(PREFIX, serve(path.join(process.cwd(), 'static')))
app.use(proxies(`${PREFIX}/mobile/app/index/yht/token/context`, {
  target: env.HTTP_SERVICE_BASEURL,
  rewrite: path => path.replace(PREFIX, ''),
  logs: true,
  changeOrigin: true
}))
app.use(proxies('/hpapaas-passport-be/hpaapp/mobileAppInfos', {
  target: `${https}build.yyuap.com`,
  changeOrigin: true}))
app.use(envMiddleware)
app.listen(env.HTTP_SERVER_PORT)

console.log(chalk.blue(`listening on port ${env.HTTP_SERVER_PORT} -- ${process.env.NODE_ENV}`))
