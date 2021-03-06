//voucher

console.info('%c AXT000069_5111842d_VM js init', 'color:green');
cb.viewmodels.register('AXT000069_5111842d_VM', function(modelType) {

    var model = function(data) {
        cb.models.ContainerModel.call(this, data);
        this.init();
    };
    model.prototype = cb.utils.getPrototype(cb.models.ContainerModel.prototype);
    model.prototype.modelType = modelType;

    model.prototype.init = function() {
        var _this = this;
        var fields = {


            'new1': new cb.models.SimpleModel({
                "cFieldName": "new1",
                "cItemName": "new1",
                "cCaption": "new1",
                "cShowCaption": "new1",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 200,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 0,
                "isshoprelated": false,
                "iSystem": 2,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false,
                "cExtProps": "{\"formulaDisplay\":\"new2+\\\"test\\\"\",\"formula\":\"new2+\\\"test\\\"\"}"
            }),


            'new2': new cb.models.SimpleModel({
                "cFieldName": "new2",
                "cItemName": "new2",
                "cCaption": "new2",
                "cShowCaption": "new2",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 200,
                "iFieldType": 1,
                "bEnum": true,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "bCheck": true,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 10,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'new3': new cb.models.SimpleModel({
                "cFieldName": "new3",
                "cItemName": "new3",
                "cCaption": "new3",
                "cShowCaption": "new3",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 200,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 20,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'autotest': new cb.models.SimpleModel({
                "cFieldName": "autotest",
                "cItemName": "autotest",
                "cCaption": "autotest",
                "cShowCaption": "autotest",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 200,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 30,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'dr': new cb.models.SimpleModel({
                "cFieldName": "dr",
                "cItemName": "dr",
                "cCaption": "????????????",
                "cShowCaption": "????????????",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 4,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": true,
                "bExtend": false,
                "iNumPoint": 2,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": false,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "inputnumber",
                "bVmExclude": 0,
                "iOrder": 40,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'tenant_id': new cb.models.SimpleModel({
                "cFieldName": "tenant_id",
                "cItemName": "tenant_id",
                "cCaption": "??????id",
                "cShowCaption": "??????id",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 256,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": true,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": false,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 50,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'org_id': new cb.models.SimpleModel({
                "cFieldName": "org_id",
                "cItemName": "org_id",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 256,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": true,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": false,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 60,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'id': new cb.models.SimpleModel({
                "cFieldName": "id",
                "cItemName": "id",
                "cCaption": "ID",
                "cShowCaption": "ID",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 36,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": true,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": false,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": true,
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 70,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'pubts': new cb.models.SimpleModel({
                "cFieldName": "pubts",
                "cItemName": "pubts",
                "cCaption": "?????????",
                "cShowCaption": "?????????",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152429,
                "iTplId": 21002,
                "iMaxLength": 255,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": true,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": false,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cOrder": "desc",
                "cTplGroupName": "shiczyq008_at_yy001_at_st001",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "datepicker",
                "bVmExclude": 0,
                "iOrder": 80,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'creator_userName': new cb.models.SimpleModel({
                "cFieldName": "creator.userName",
                "cItemName": "creator_userName",
                "cCaption": "?????????",
                "cShowCaption": "?????????",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152430,
                "iTplId": 21002,
                "iMaxLength": 36,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "?????????",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 90,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'creationtime': new cb.models.SimpleModel({
                "cFieldName": "creationtime",
                "cItemName": "creationtime",
                "cCaption": "????????????",
                "cShowCaption": "????????????",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152430,
                "iTplId": 21002,
                "iMaxLength": 255,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "?????????",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "datepicker",
                "bVmExclude": 0,
                "iOrder": 100,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'modifier_userName': new cb.models.SimpleModel({
                "cFieldName": "modifier.userName",
                "cItemName": "modifier_userName",
                "cCaption": "?????????",
                "cShowCaption": "?????????",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152430,
                "iTplId": 21002,
                "iMaxLength": 36,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "?????????",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "input",
                "bVmExclude": 0,
                "iOrder": 110,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'modifiedtime': new cb.models.SimpleModel({
                "cFieldName": "modifiedtime",
                "cItemName": "modifiedtime",
                "cCaption": "????????????",
                "cShowCaption": "????????????",
                "iBillEntityId": 28422,
                "iBillTplGroupId": 152430,
                "iTplId": 21002,
                "iMaxLength": 255,
                "iFieldType": 1,
                "cEnumType": "",
                "bMustSelect": true,
                "bHidden": false,
                "bExtend": false,
                "bCanModify": true,
                "iColWidth": 1,
                "bShowIt": true,
                "bFilter": true,
                "bIsNull": true,
                "bJointQuery": false,
                "cTplGroupName": "?????????",
                "bMain": true,
                "cDataSourceName": "AXT000069.AXT000069.shiczyq008_at_yy001_at_st001",
                "cControlType": "datepicker",
                "bVmExclude": 0,
                "iOrder": 120,
                "isshoprelated": false,
                "iSystem": 1,
                "authLevel": 3,
                "isExport": true,
                "uncopyable": false,
                "iAlign": 1,
                "bEnableFormat": false
            }),


            'btnAbandonBrowst': new cb.models.SimpleModel({
                "cItemName": "btnAbandonBrowst",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cCommand": "cmdAbandon",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299140",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnEdit': new cb.models.SimpleModel({
                "cItemName": "btnEdit",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cCommand": "cmdEdit",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299146",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'spliter': new cb.models.SimpleModel({
                "cItemName": "spliter",
                "cCaption": "?????????",
                "cShowCaption": "?????????",
                "cControlType": "spliter",
                "iStyle": 0,
                "cCommand": "spliter",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299147",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnAudit': new cb.models.SimpleModel({
                "cItemName": "btnAudit",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cCommand": "cmdAudit",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299139",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnUnaudit': new cb.models.SimpleModel({
                "cItemName": "btnUnaudit",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cCommand": "cmdUnaudit",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299144",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'spliter': new cb.models.SimpleModel({
                "cItemName": "spliter",
                "cCaption": "?????????",
                "cShowCaption": "?????????",
                "cControlType": "spliter",
                "iStyle": 0,
                "cCommand": "spliter",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299141",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnModelPreview': new cb.models.ListModel({
                "cItemName": "btnModelPreview",
                "cCaption": "????????????",
                "cShowCaption": "????????????",
                "cControlType": "printtemplate",
                "iStyle": 0,
                "cCommand": "cmdModelPreview",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299142",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnPreviewDrop': new cb.models.SimpleModel({
                "cItemName": "btnPreviewDrop",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "dropdownbutton",
                "iStyle": 0,
                "cCommand": "cmdPreviewDrop",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299148",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnPreview': new cb.models.SimpleModel({
                "cItemName": "btnPreview",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cParent": "299148",
                "cCommand": "cmdPreview",
                "cParameter": "{\"printTplItemName\":\"btnModelPreview\"}",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299149",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'spliter': new cb.models.SimpleModel({
                "cItemName": "spliter",
                "cCaption": "?????????",
                "cShowCaption": "?????????",
                "cControlType": "spliter",
                "iStyle": 0,
                "cCommand": "spliter",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299137",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnDelete': new cb.models.SimpleModel({
                "cItemName": "btnDelete",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cCommand": "cmdDelete",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299138",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnSave': new cb.models.SimpleModel({
                "cItemName": "btnSave",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "primarybutton",
                "iStyle": 0,
                "cCommand": "cmdSave",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299143",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnSaveAndAdd': new cb.models.SimpleModel({
                "cItemName": "btnSaveAndAdd",
                "cCaption": "???????????????",
                "cShowCaption": "???????????????",
                "cControlType": "button",
                "iStyle": 0,
                "cCommand": "cmdSaveAndAdd",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299136",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'btnAbandon': new cb.models.SimpleModel({
                "cItemName": "btnAbandon",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cCommand": "cmdAbandon",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299145",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "needClear": false
            }),


            'params': {
                "billType": "Voucher",
                "foreignKey": "",
                "primaryKey": "id",
                "masterOrgField": null
            },


            'depends': {},

        };
        this.setData(fields);
        this.setDirty(false);



        var billType = "voucher" || 'voucher';
        var biz;
        if (billType == 'option' || billType == 'freeview') {
            biz = cb.biz.common[billType];
        } else {
            biz = cb.biz.common.voucher;
        }


        //common events start
        //actions

        _this.allActions = [{
            "cCommand": "cmdSave",
            "cAction": "save",
            "cSvcUrl": "/bill/save",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdAudit",
            "cAction": "audit",
            "cSvcUrl": "/bill/audit",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdSaveAndAdd",
            "cAction": "saveandadd",
            "cSvcUrl": "/bill/save",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"???????????????\"}"
        }, {
            "cCommand": "cmdBizFlowPush",
            "cAction": "bizflowpush",
            "cSvcUrl": "/bizflow/push",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdEdit",
            "cAction": "edit",
            "cSvcUrl": "/bill/edit",
            "cHttpMethod": "GET",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdUnsubmit",
            "cAction": "unsubmit",
            "cSvcUrl": "/bill/unsubmit",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdSubmit",
            "cAction": "submit",
            "cSvcUrl": "/bill/submit",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdAbandon",
            "cAction": "abandon",
            "cSvcUrl": "/bill/abandon",
            "cHttpMethod": "GET",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdPreview",
            "cAction": "preview",
            "cSvcUrl": "/report",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdWorkflow",
            "cAction": "workflow",
            "cSvcUrl": "/bill/workflow",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdUnaudit",
            "cAction": "unaudit",
            "cSvcUrl": "/bill/unaudit",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }, {
            "cCommand": "cmdDelete",
            "cAction": "delete",
            "cSvcUrl": "/bill/delete",
            "cHttpMethod": "POST",
            "cExtProps": "{\"title\":\"??????\"}"
        }];




        _this.get('btnSave').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdSave",
                "cAction": "save",
                "cSvcUrl": "/bill/save",
                "cHttpMethod": "POST",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnSave",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "primarybutton",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299143",
                "needClear": false
            }, {
                key: 'btnSave'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('save', _this, args)
        });


        _this.get('btnAudit').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdAudit",
                "cAction": "audit",
                "cSvcUrl": "/bill/audit",
                "cHttpMethod": "POST",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnAudit",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299139",
                "needClear": false
            }, {
                key: 'btnAudit'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('audit', _this, args)
        });


        _this.get('btnSaveAndAdd').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdSaveAndAdd",
                "cAction": "saveandadd",
                "cSvcUrl": "/bill/save",
                "cHttpMethod": "POST",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnSaveAndAdd",
                "cCaption": "???????????????",
                "cShowCaption": "???????????????",
                "cControlType": "button",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299136",
                "needClear": false
            }, {
                key: 'btnSaveAndAdd'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('saveandadd', _this, args)
        });


        _this.get('btnEdit').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdEdit",
                "cAction": "edit",
                "cSvcUrl": "/bill/edit",
                "cHttpMethod": "GET",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnEdit",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299146",
                "needClear": false
            }, {
                key: 'btnEdit'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('edit', _this, args)
        });


        _this.get('btnAbandonBrowst').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdAbandon",
                "cAction": "abandon",
                "cSvcUrl": "/bill/abandon",
                "cHttpMethod": "GET",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnAbandonBrowst",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299140",
                "needClear": false
            }, {
                key: 'btnAbandonBrowst'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('abandon', _this, args)
        });


        _this.get('btnAbandon').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdAbandon",
                "cAction": "abandon",
                "cSvcUrl": "/bill/abandon",
                "cHttpMethod": "GET",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnAbandon",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299145",
                "needClear": false
            }, {
                key: 'btnAbandon'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('abandon', _this, args)
        });


        _this.get('btnPreview').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdPreview",
                "cAction": "preview",
                "cSvcUrl": "/report",
                "cHttpMethod": "POST",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnPreview",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "cParent": "299148",
                "cParameter": "{\"printTplItemName\":\"btnModelPreview\"}",
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299149",
                "needClear": false
            }, {
                key: 'btnPreview'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('preview', _this, args)
        });


        _this.get('btnUnaudit').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdUnaudit",
                "cAction": "unaudit",
                "cSvcUrl": "/bill/unaudit",
                "cHttpMethod": "POST",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnUnaudit",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299144",
                "needClear": false
            }, {
                key: 'btnUnaudit'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('unaudit', _this, args)
        });


        _this.get('btnDelete').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cCommand": "cmdDelete",
                "cAction": "delete",
                "cSvcUrl": "/bill/delete",
                "cHttpMethod": "POST",
                "cExtProps": "{\"cSubId\":\"AXT000069\"}",
                "cItemName": "btnDelete",
                "cCaption": "??????",
                "cShowCaption": "??????",
                "cControlType": "button",
                "iStyle": 0,
                "bVmExclude": 0,
                "iOrder": 0,
                "uncopyable": false,
                "bEnableFormat": false,
                "key": "299138",
                "needClear": false
            }, {
                key: 'btnDelete'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            var self = this;
            args.disabledCallback = function() {
                self.setDisabled(true);
            }
            args.enabledCallback = function() {
                self.setDisabled(false);
            }

            biz.do('delete', _this, args)
        });



        //check


        _this.get('new2').on('afterValueChange', function(params) {
            if (params) params.key = 'new2';
            biz.do('check', _this, params);
        });



        _this.on('columnSetting', function(params) {
            biz.do('columnSetting', _this, params);
        });
        //common events end


        // common billitem events start
        // events




        //common billitem events end


        var girdModelKeys = []
        if (girdModelKeys) {
            girdModelKeys.forEach(function(key) {
                var gridModel = _this.get(key);
                if (gridModel) {
                    gridModel.on('afterCellValueChange', function(params) {
                        if (params) params.childrenField = key;
                        biz.do('cellCheck', _this, params);
                    })
                }
            })
        }

        //??????
        _this.on('filterClick', function(params) {
            biz.do('search', _this, params);
        });



        this.biz = biz;
        // this.initData();
    };
    model.prototype.initData = function() {
        // if(cb.biz['AXT000069'] && cb.biz['AXT000069']['AXT000069_5111842d_VM_Extend']){
        //   console.info('%c AXT000069_5111842d_VM_Extend extendjs doAction', 'color:green');
        //   cb.biz['AXT000069']['AXT000069_5111842d_VM_Extend'].doAction("init", this);
        // }else{
        //   console.log('%c no extend js' , 'font-size:22pt;color:red');
        // }
        var self = this;
        var extendFile = 'AXT000069/AXT000069_5111842d_VM.Extend.js';
        cb.require([extendFile], function(extend) {
            if (extend && extend.doAction) {
                console.info('%c AXT000069_5111842d_VM_Extend extendjs doAction', 'color:green');
                // ?????????????????????????????????????????? yueming
                try {
                    extend.doAction("init", self);
                } catch (error) {
                    console.error('Exception in business script, please check');
                    console.error(error);
                }
            } else {
                console.error('%c ????????????  ' + extendFile, 'font-size:12pt;color:#860786');
                console.error('%c extendVmName-->AXT000069_5111842d_VM_Extend', 'font-size:12pt;color:#860786')
            }
            self.execute('extendReady', self);
        }, function(error) {
            console.info('%c ?????????  ' + extendFile, 'font-size:12pt;color:#860786');
            console.info('%c extendVmName-->AXT000069_5111842d_VM_Extend', 'font-size:12pt;color:#860786')
            self.execute('extendReady', self);
        });
    };

    return model;
});