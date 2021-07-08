import html from './html'

export default function viewhook () {
  return async function (ctx, next) {
    // console.log('%%%%%%%%%%%%%%%%%%')
    // console.log(ctx.request.url)
    // console.log('%%%%%%%%%%%%%%%%%%')
    ctx.render = function () {
      ctx.type = 'html';
      if (ctx.request.url.includes('/microapp')) {
        ctx.body = html('microapp')
      } else if (ctx.request.url.includes('/workbench')) {
        ctx.body = html('workbench')
      } else if (ctx.request.url.includes('/custom')) {
        ctx.body = html('custom')
      } else {
        ctx.body = html()
      }
    }

    await next()
  }
}
