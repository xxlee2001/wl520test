/**
 * 证明开具移动端列表页面
 * 刘董
 * 2020年10月22日
 */
cb.define('developplatform',['common/common_VM.Extend.js'], function (common) {
  var GT4276AT136_0b0b6898MobileList_VM_Extend = {
    doAction: function (name, viewmodel) {
      if (this[name])
        this[name](viewmodel);
    },
    init: function (viewmodel) {
      cb.utils.alert("111111111111111")

    }
  };
  try {
    module.exports = GT4276AT136_0b0b6898MobileList_VM_Extend;
  } catch (error) {}
  return GT4276AT136_0b0b6898MobileList_VM_Extend;
});
