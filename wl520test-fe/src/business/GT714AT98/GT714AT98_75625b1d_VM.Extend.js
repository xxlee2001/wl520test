cb.define(process.env.__DOMAINKEY__, [], function () {

    let GT714AT98_75625b1dList_VM_Extend = {
        doAction: function (name, viewmodel) {
            if (this[name]) {
                this[name](viewmodel);
            }
        },
        init: function (viewmodel) {
            // 初始化页面
            console.log("Voucher List loading... ...")

        }
    };

    try {
        module.exports = GT714AT98_75625b1dList_VM_Extend;
    } catch (error) {
        console.log(error);
    }
    return GT714AT98_75625b1dList_VM_Extend;
})