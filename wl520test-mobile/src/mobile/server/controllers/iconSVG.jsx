import icons from '../../../../static/t/font_1434800_eajch2fw3fw/iconfont_svg'
const iconSVG = {
  getIconSVG : async function (ctx){
    const type = ctx.query.type;
    if(isEmpty(type)) {
      ctx.response.body = reportError("缺少关键信息 - type");
      return;
    }

    // 根据type读取svg信息返回
    icons.forEach(icon => {
      icon.indexOf(type) !== -1 ? reportSuccess(ctx, icon) : ''
    })
  },

}

function reportSuccess(ctx, data) {
  ctx.response.body = {
    code: 200,
    data
  };
}
function reportError(msg) {
  return {
    code: 1,
    msg: msg,
  };
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

export default iconSVG;
