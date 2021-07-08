export const mtlLoginByPassword =  data =>new Promise((resolve,reject) => {
  mtl.yht.loginByPassword({
    ...data,
    success: (res) => {
      resolve(res)
    },
    fail: function (err) {
      reject(err)
    },
  });
})

export const getPlatform = function () {
  // let platform = mtl.platform;
  // platform="wx";
  // if (platform === "ios" || platform === "android") {
  //   return "nativeMobile";
  // } else if (platform === "dd") {
  //   return "dingding";
  // } else if (platform === "wx") {
  //   return "vx"
  // } else if (platform === "h5") {
  //   return "web";
  // } else {
  //   return platform;
  // }
  return 'vx'
}
// 一维数组转换为二维数组
export function arrTrans(num, arr) {
  const iconsArr = [];
  arr.forEach((item, index) => {
    const page = Math.floor(index / num);
    if (!iconsArr[page]) {
      iconsArr[page] = [];
    }
    iconsArr[page].push(item);
  });
  return iconsArr;
}
