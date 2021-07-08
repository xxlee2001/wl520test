//yyarchive

console.info('%c GT37362AT601_26d7a6e7MobileArchive_VM js init, yon can debug it by setting the [window.__debugger = true]', 'color:steelblue');
if (window && window.__debugger) debugger;
cb.viewmodels.register('GT37362AT601_26d7a6e7MobileArchive_VM', function(modelType) {

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
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "onFocus": "new1_onFocus",
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new1",
                "cFieldName": "new1",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段1",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158112",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段1",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "16a15dc26d0d4c22bf71da3972722e34",
                        "action": "26d7a6e7MobileArchive_new1_onFocus",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onFocus"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'new2': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "onFocus": "new2_onFocus",
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new2",
                "cFieldName": "new2",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段2",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158113",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段2",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "a9f56b54b41c43fcb0bfe4d04f5494a8",
                        "action": "26d7a6e7MobileArchive_new2_onFocus",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onFocus"
                    }]
                },
                "onBlur": "new2_onBlur",
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'new3': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "onChange": "new3_onChange",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new3",
                "cFieldName": "new3",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段3",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158114",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段3",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "0907e12e8a1243a6a1306ef748564952",
                        "action": "26d7a6e7MobileArchive_new3_onChange",
                        "description": "后端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'code': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": false,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "autocode",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "code",
                "cFieldName": "code",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "编码",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158115",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "编码",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            '1599471512431_2': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "showType": "picture",
                "iconSize": "md",
                "bCanModify": true,
                "bPrintUpCase": false,
                "textAlign": "left",
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "facerecognition",
                "size": "lg",
                "borderRadius": 0,
                "picLabel": "",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599471512431_2",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "人脸识别",
                "bPrintCaption": true,
                "rightIcon": "",
                "iTplId": 11605,
                "color": "",
                "leftIcon": "",
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 255,
                "showPicLabel": false,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field158631",
                "showIcon": "icon-renlianshibie2",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "人脸识别",
                "bFilter": true,
                "url": "data:image/jpeg;base64,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",
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            'TaxRateVO_name': new cb.models.ReferModel({
                "bEnum": false,
                "defaultValue": "",
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "refReturn": "name",
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": false,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "refer",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "TaxRateVO_name",
                "cFieldName": "TaxRateVO.name",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "税目税率",
                "bPrintCaption": true,
                "iTplId": 11605,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 255,
                "metaDataField": {
                    "biztype": "quote",
                    "fieldName": "fidstr_0",
                    "terms": [],
                    "displayName": "税目税率",
                    "dataType": {
                        "code": "TaxRateVO",
                        "displayName": "税目税率",
                        "name": "TaxRateVO",
                        "metaType": "Class",
                        "id": "01e7528c-c35c-4d33-b2aa-382b4b4f4534",
                        "uri": "bd.taxrate.TaxRateVO"
                    },
                    "name": "TaxRateVO"
                },
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field158163",
                "showIcon": true,
                "cSubId": "",
                "cRefRetId": "{\"TaxRateVO\":\"id\"}",
                "bNeedSum": false,
                "cShowCaption": "税目税率",
                "bFilter": true,
                "iAlign": 1,
                "referConfig": {
                    "cRefRetId": "{\"TaxRateVO\":\"id\"}",
                    "displayname": "name",
                    "cRefType": "ucfbasedoc.bd_taxrate",
                    "refReturn": "name"
                },
                "bSelfDefine": false,
                "cRefType": "ucfbasedoc.bd_taxrate",
                "bIsNull": true
            }),


            'tenant_id': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": false,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "tenant_id",
                "cFieldName": "tenant_id",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "租户id",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 256,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158116",
                "bNeedSum": false,
                "iMaxLength": 256,
                "multiple": false,
                "cShowCaption": "租户id",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'pk_temp': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": false,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "pk_temp",
                "cFieldName": "pk_temp",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "模版",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158117",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "模版",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'version': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "numberwidget",
                "iColWidth": 0,
                "bShowIt": false,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "version",
                "cFieldName": "version",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "版本",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 11,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158118",
                "bNeedSum": false,
                "iMaxLength": 11,
                "multiple": false,
                "cShowCaption": "版本",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'id': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "numberwidget",
                "iColWidth": 0,
                "bShowIt": false,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "id",
                "cFieldName": "id",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "ID",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 36,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158119",
                "bNeedSum": false,
                "iMaxLength": 36,
                "multiple": false,
                "cShowCaption": "ID",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'pubts': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "datetimepicker",
                "iColWidth": 0,
                "bShowIt": false,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "pubts",
                "cFieldName": "pubts",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "时间戳",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 0,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158120",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "时间戳",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'TaxRateVO': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "bShowIt": false,
                "bJointQuery": false,
                "cItemName": "TaxRateVO",
                "cFieldName": "TaxRateVO",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "税目税率ID",
                "bPrintCaption": true,
                "iTplId": 11605,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": true,
                "iOrder": 0,
                "key": "Field158164",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "税目税率ID",
                "bFilter": true,
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true
            }),


            'mActionList': new cb.models.SimpleModel({
                "onFail": "1595918997321_2_onFail",
                "bEnum": false,
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "动作列表(勿动)",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "onChange": "new3_onChange",
                "isExport": true,
                "bExtend": false,
                "onFocus": "new2_onFocus",
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "bShowIt": false,
                "bJointQuery": false,
                "cItemName": "mActionList",
                "cFieldName": "mActionList",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "mActionList",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field822352",
                "bNeedSum": false,
                "iMaxLength": 255,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "onBlur": "new2_onBlur",
                "bSelfDefine": false,
                "bIsNull": true,
                "onSuccess": "1595916323036_2_onSuccess"
            }),


            'btnEdit': new cb.models.SimpleModel({
                "bVmExclude": 0,
                "cCommand": "cmdEdit",
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnEdit",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "编辑",
                "iOrder": 0,
                "key": "494745",
                "cShowCaption": "编辑",
                "needClear": false
            }),


            'btnSubmit': new cb.models.SimpleModel({
                "bVmExclude": 0,
                "cCommand": "cmdSubmit",
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnSubmit",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "提交",
                "iOrder": 0,
                "key": "494746",
                "cShowCaption": "提交",
                "_actions": {
                    "onClick": [{
                        "action": "cmdSubmit",
                        "type": "command",
                        "event": "onClick"
                    }]
                },
                "needClear": false
            }),


            'workflowbtn': new cb.models.SimpleModel({
                "bVmExclude": 0,
                "cName": "",
                "bEnableFormat": false,
                "cControlType": "workflowbtn",
                "size": "small",
                "bShowIt": true,
                "cItemName": "workflowbtn",
                "cFieldName": "",
                "uncopyable": false,
                "cCaption": "业务流",
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "buttonType": "toolbar-default",
                "bHidden": false,
                "iOrder": 0,
                "key": "3147",
                "cSubId": "GT37362AT601",
                "cShowCaption": "业务流",
                "label": "下推",
                "needClear": false
            }),


            'approveflow': new cb.models.SimpleModel({
                "bVmExclude": 0,
                "cCommand": "cmdApproveFlow",
                "bEnableFormat": false,
                "cControlType": "approveflow",
                "cItemName": "approveflow",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "审批",
                "iOrder": 0,
                "key": "494747",
                "cShowCaption": "审批",
                "needClear": false
            }),


            'btnSave': new cb.models.SimpleModel({
                "mode": "toolbar-primary",
                "bVmExclude": 0,
                "cCommand": "cmdSave",
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnSave",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "保存",
                "iOrder": 0,
                "key": "494750",
                "cShowCaption": "保存",
                "needClear": false
            }),


            'btnSaveAndAdd': new cb.models.SimpleModel({
                "mode": "toolbar-default",
                "bVmExclude": 0,
                "cCommand": "cmdSaveAndAdd",
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnSaveAndAdd",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "保存并新增",
                "iOrder": 0,
                "key": "494749",
                "cShowCaption": "保存并新增",
                "needClear": false
            }),


            'btnAbandon': new cb.models.SimpleModel({
                "mode": "toolbar-default",
                "bVmExclude": 0,
                "cCommand": "cmdAbandon",
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnAbandon",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "取消",
                "iOrder": 0,
                "key": "494748",
                "cShowCaption": "取消",
                "needClear": false
            }),


            'stateRules': [{
                "code": "CommonVoucher_StateRule",
                "name": "公共状态管理",
                "type": 1,
                "actionGroups": [{
                    "code": "browse",
                    "ordernum": 0,
                    "system": 0,
                    "ctype": 0,
                    "name": "浏览",
                    "tenantId": "0",
                    "disabled": 0,
                    "id": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                    "ruleId": "609e0a9a-59cd-4a61-90a8-834972883209",
                    "conditions": [{
                        "exprType": 0,
                        "code": "browseCondition",
                        "mode": "browse",
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "disabled": 0,
                        "id": "35fc109f-8985-4be9-9f23-b5aa38ae1624",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 0,
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "处于浏览状态时",
                        "tenantId": "0"
                    }],
                    "actions": [{
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "278879fa-4d61-44ea-a5f9-6540d2172330",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 0,
                        "srcExpression": "true",
                        "target": "btnAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnEdit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "41b34365-f1a9-4e66-9785-a548164bb7ea",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 1,
                        "srcExpression": "true",
                        "target": "btnEdit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDelete",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "d1599a5b-c529-4937-8282-5fbb6083499b",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 2,
                        "srcExpression": "true",
                        "target": "btnDelete",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b343fa94-6101-4b71-a683-f60b36c721c2",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 3,
                        "srcExpression": "true",
                        "target": "btnSubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnsubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "acac9b36-859d-4ff3-a2bc-ab45a9341639",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 4,
                        "srcExpression": "true",
                        "target": "btnUnsubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnWorkflow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a08a91a0-6e91-4e3e-92df-c43fbb01c6af",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 5,
                        "srcExpression": "true",
                        "target": "btnWorkflow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnstop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "0ca1e187-b392-48db-b7d1-0a35710f1256",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 6,
                        "srcExpression": "true",
                        "target": "btnUnstop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnStop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8cbbb43b-a9c8-4911-a912-cbf3b4e66e38",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 7,
                        "srcExpression": "true",
                        "target": "btnStop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnPrintPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "87331129-46df-4409-b023-1cda95078f1d",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 8,
                        "srcExpression": "true",
                        "target": "btnPrintPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnModelPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7f0d31b6-01e9-4af6-a744-35b294e4693c",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 10,
                        "srcExpression": "true",
                        "target": "btnModelPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandonBrowst",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "772ba56b-238b-47b4-b35f-1e64621d62ff",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 11,
                        "srcExpression": "true",
                        "target": "btnAbandonBrowst",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "e11e7750-a578-476f-aeca-54cae7a7a354",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 12,
                        "srcExpression": "true",
                        "target": "btnBatchImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "d3bbb6ea-9d45-4aeb-908f-bdad3f889a7e",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 13,
                        "srcExpression": "true",
                        "target": "btnImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnTempexport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3cb31ce8-f6a2-4687-b22b-d6eeb39afa39",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 14,
                        "srcExpression": "true",
                        "target": "btnTempexport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "73075a7a-0b0b-4f20-83a8-e5deda3adea1",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 15,
                        "srcExpression": "true",
                        "target": "btnBatchExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "94d6a220-c5c0-45ef-8fed-01775ba4fc00",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 16,
                        "srcExpression": "true",
                        "target": "btnExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSave",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3950192d-066f-4d23-98cb-923f6db9e165",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 17,
                        "srcExpression": "false",
                        "target": "btnSave",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSaveAndAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "0ec9b806-5da2-4743-a658-cdf89ff80f78",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 18,
                        "srcExpression": "false",
                        "target": "btnSaveAndAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandon",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "cf3c3755-8940-4b42-83c6-81977e42de42",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 19,
                        "srcExpression": "false",
                        "target": "btnAbandon",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAddRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "784260f0-c224-48eb-83c5-3ba2ab66c1ac",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 20,
                        "srcExpression": "false",
                        "target": "btnAddRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDeleteRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "ceb6ca34-2298-48a3-95d7-56677e3ceee3",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 21,
                        "srcExpression": "false",
                        "target": "btnDeleteRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnCopy",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "eef6d051-1467-4b9e-b3ce-c2527577d69a",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 22,
                        "srcExpression": "true",
                        "target": "btnCopy",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7d975ce5-8b92-4275-9f8e-c3b6e4b939c1",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 23,
                        "srcExpression": "true",
                        "target": "btnAudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnaudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "45770f49-5539-45dc-93a3-2ff980470d3f",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 24,
                        "srcExpression": "true",
                        "target": "btnUnaudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBizFlowPush",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "57bea210-184a-494f-8d37-0d5bb3897f16",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 25,
                        "srcExpression": "true",
                        "target": "btnBizFlowPush",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMoveprev",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "83f3b8a5-900e-4d12-84e2-838d914bd09e",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 26,
                        "srcExpression": "true",
                        "target": "btnMoveprev",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMovenext",
                        "srcExpr2Type": 0,
                        "actionGroupId": "d45ea334-34fb-4f19-9bc6-002b726f428a",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "f97f77b1-9d90-40fc-9fda-dae287fb221b",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 27,
                        "srcExpression": "true",
                        "target": "btnMovenext",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }]
                }, {
                    "code": "add",
                    "ordernum": 1,
                    "system": 0,
                    "ctype": 0,
                    "name": "新增",
                    "tenantId": "0",
                    "disabled": 0,
                    "id": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                    "ruleId": "609e0a9a-59cd-4a61-90a8-834972883209",
                    "conditions": [{
                        "exprType": 0,
                        "code": "addCondition",
                        "mode": "add",
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "disabled": 0,
                        "id": "8a446a49-3280-427c-99e6-3eb0d1554fbc",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 0,
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "处于新增状态时",
                        "tenantId": "0"
                    }],
                    "actions": [{
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "5d7565c5-d520-4818-9d5e-9264950723f6",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 0,
                        "srcExpression": "false",
                        "target": "btnAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnEdit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "17e81048-9699-48c9-be51-b8f374b35c08",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 1,
                        "srcExpression": "false",
                        "target": "btnEdit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDelete",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3abd59ea-40a0-408c-b45c-5aa37ef6f6c6",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 2,
                        "srcExpression": "false",
                        "target": "btnDelete",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "ed5904b5-f8d8-4cfe-81b1-8e8b6ab6e160",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 3,
                        "srcExpression": "false",
                        "target": "btnSubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnsubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8f1255dc-6dbe-44e5-9295-288c996a9219",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 4,
                        "srcExpression": "false",
                        "target": "btnUnsubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnWorkflow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "660ca497-41fb-4c2f-82a5-53007f7dcfa3",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 5,
                        "srcExpression": "false",
                        "target": "btnWorkflow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnstop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "43fa0705-06cd-4f1d-a497-08b10f8809a0",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 6,
                        "srcExpression": "false",
                        "target": "btnUnstop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnStop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7983702e-fc38-4f64-ba18-0643e747417a",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 7,
                        "srcExpression": "false",
                        "target": "btnStop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnPrintPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "29127d78-b1c7-4fe8-a775-9f429bfe0dc7",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 8,
                        "srcExpression": "false",
                        "target": "btnPrintPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnModelPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "17d9cb47-f7d3-4eef-ac82-88d5f33c0bda",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 10,
                        "srcExpression": "false",
                        "target": "btnModelPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandonBrowst",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "c2edd2c9-cf17-40a5-b9c6-0a71ff761634",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 11,
                        "srcExpression": "true",
                        "target": "btnAbandonBrowst",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "46cc454c-b3de-465d-a52d-eb7cec63117c",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 12,
                        "srcExpression": "false",
                        "target": "btnBatchImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a6d1a88a-a45d-42a1-a140-22fc4b76832f",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 13,
                        "srcExpression": "false",
                        "target": "btnImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnTempexport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8889a7d8-a4c2-4948-b943-fa207ee5bb39",
                        "pubts": "2020-04-26 15:21:48",
                        "ordernum": 14,
                        "srcExpression": "false",
                        "target": "btnTempexport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "863b27dc-5187-4ebd-aab7-3eefa9b59bf6",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 15,
                        "srcExpression": "false",
                        "target": "btnBatchExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b1579407-b098-459b-a32c-38296604e2b6",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 16,
                        "srcExpression": "false",
                        "target": "btnExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSave",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "33be0bdc-695f-4f61-befc-92838b359170",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 17,
                        "srcExpression": "true",
                        "target": "btnSave",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSaveAndAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b3c43442-a313-46a0-adda-0925134556d2",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 18,
                        "srcExpression": "true",
                        "target": "btnSaveAndAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandon",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7669608f-f3b5-4787-a7b4-f7dbd425f414",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 19,
                        "srcExpression": "true",
                        "target": "btnAbandon",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAddRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "21467cf9-d4a4-4c21-ac11-c84b61dea5a1",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 20,
                        "srcExpression": "true",
                        "target": "btnAddRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDeleteRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "808d3321-b5c0-440d-aa01-b4901b36b38d",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 21,
                        "srcExpression": "true",
                        "target": "btnDeleteRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnCopy",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "42474543-abf1-4d6c-bc7f-32c653f99f14",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 22,
                        "srcExpression": "false",
                        "target": "btnCopy",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3c616a51-b694-4511-902d-8ac6ae7e3da8",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 23,
                        "srcExpression": "false",
                        "target": "btnAudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnaudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "35b8c419-1322-4ec1-baa8-bf8e49fce6aa",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 24,
                        "srcExpression": "false",
                        "target": "btnUnaudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBizFlowPush",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a8b4f9a1-a510-4505-8e62-c88a8c4c1b12",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 25,
                        "srcExpression": "false",
                        "target": "btnBizFlowPush",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMoveprev",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "c9953ec8-e814-4a62-a043-a9a67e626d34",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 26,
                        "srcExpression": "false",
                        "target": "btnMoveprev",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMovenext",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9815ce55-61e9-4346-b8e6-e0ab720aa5dd",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7b91d185-1c44-4a3c-9a6f-8e4e6408c68d",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 27,
                        "srcExpression": "false",
                        "target": "btnMovenext",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }]
                }, {
                    "code": "edit",
                    "ordernum": 2,
                    "system": 0,
                    "ctype": 0,
                    "name": "编辑",
                    "tenantId": "0",
                    "disabled": 0,
                    "id": "fd55ee88-2793-4d33-8b66-75588c953925",
                    "ruleId": "609e0a9a-59cd-4a61-90a8-834972883209",
                    "conditions": [{
                        "exprType": 0,
                        "code": "editCondition",
                        "mode": "edit",
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "disabled": 0,
                        "id": "794503d3-0ea8-4c88-8352-f116dbeeafeb",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 0,
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "处于编辑状态时",
                        "tenantId": "0"
                    }],
                    "actions": [{
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a2488821-f3ac-4979-a4b5-c637bd09e05c",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 0,
                        "srcExpression": "false",
                        "target": "btnAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnEdit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "de86a26e-fe97-4190-a2dc-a4688bee0737",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 1,
                        "srcExpression": "false",
                        "target": "btnEdit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDelete",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3d391547-f683-4908-8875-a9a6465be37e",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 2,
                        "srcExpression": "false",
                        "target": "btnDelete",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bcfaf171-1819-43f6-8696-188185f7067f",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 3,
                        "srcExpression": "false",
                        "target": "btnSubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnsubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "db0e33db-6b0d-4d64-a4b3-b98d6c20449a",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 4,
                        "srcExpression": "false",
                        "target": "btnUnsubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnWorkflow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b5725800-7b4a-4f6c-a8c1-e02d13194462",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 5,
                        "srcExpression": "false",
                        "target": "btnWorkflow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnstop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "c23884e5-22aa-4d7e-addc-fe2d8a4d8585",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 6,
                        "srcExpression": "false",
                        "target": "btnUnstop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnStop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "4f9b2c44-cbcf-4fea-a199-3a3511ebdcfb",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 7,
                        "srcExpression": "false",
                        "target": "btnStop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnPrintPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "d5a07c58-c1bb-4be0-ae7b-b3f3b2664d10",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 8,
                        "srcExpression": "false",
                        "target": "btnPrintPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnModelPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "cc7ecef4-08d9-4558-9783-8f29365c009e",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 10,
                        "srcExpression": "false",
                        "target": "btnModelPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandonBrowst",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8d307b42-c0c1-479c-8336-6200a9f959cd",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 11,
                        "srcExpression": "true",
                        "target": "btnAbandonBrowst",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "4ea97f4a-0150-4991-8697-aad6714bc210",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 12,
                        "srcExpression": "false",
                        "target": "btnBatchImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "55d79506-3ebe-4337-9644-875bd2c39f26",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 13,
                        "srcExpression": "false",
                        "target": "btnImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnTempexport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "813d4732-ff24-4583-a081-a82a75893d4d",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 14,
                        "srcExpression": "false",
                        "target": "btnTempexport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "f27efdc4-70b0-4ce8-a8b5-012ddb0dc3cf",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 15,
                        "srcExpression": "false",
                        "target": "btnBatchExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "ff789837-bb70-487f-b960-898768f32e3e",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 16,
                        "srcExpression": "false",
                        "target": "btnExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSave",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "52e10105-cc7e-45e9-a836-9f5b7bac8e1c",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 17,
                        "srcExpression": "true",
                        "target": "btnSave",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSaveAndAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "ec262fc4-ff9d-40b6-a3c9-7b38404a939d",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 18,
                        "srcExpression": "true",
                        "target": "btnSaveAndAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandon",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "d9528b6b-c731-4ff8-8105-068e30191924",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 19,
                        "srcExpression": "true",
                        "target": "btnAbandon",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAddRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b29e5e95-efc3-40d6-ae38-9b410b6facca",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 20,
                        "srcExpression": "true",
                        "target": "btnAddRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDeleteRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "9a416565-4291-47f2-ab7a-68abfd7d9304",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 21,
                        "srcExpression": "true",
                        "target": "btnDeleteRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnCopy",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bc8e7fe2-a214-4fec-810e-a44b82447552",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 22,
                        "srcExpression": "false",
                        "target": "btnCopy",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bc86f8c0-8546-4ead-9264-9d88c55db72f",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 23,
                        "srcExpression": "false",
                        "target": "btnAudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnaudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "213ae150-3521-4aa2-8336-2a9195577328",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 24,
                        "srcExpression": "false",
                        "target": "btnUnaudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBizFlowPush",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a8c3994f-9210-43f7-987c-0da5e897b881",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 25,
                        "srcExpression": "false",
                        "target": "btnBizFlowPush",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMoveprev",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "15ace2c3-dd69-4e19-8870-b886a4e0030f",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 26,
                        "srcExpression": "false",
                        "target": "btnMoveprev",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMovenext",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fd55ee88-2793-4d33-8b66-75588c953925",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8d5a28ca-7892-401f-9434-4ca9c838dd64",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 27,
                        "srcExpression": "false",
                        "target": "btnMovenext",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }]
                }, {
                    "code": "verifystate0",
                    "ordernum": 3,
                    "system": 0,
                    "ctype": 0,
                    "name": "开立态",
                    "tenantId": "0",
                    "disabled": 0,
                    "id": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                    "ruleId": "609e0a9a-59cd-4a61-90a8-834972883209",
                    "conditions": [{
                        "exprType": 0,
                        "code": "browseCondition",
                        "mode": "browse",
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "disabled": 0,
                        "id": "5a4142c4-aa04-4663-86f9-c597bd7e6290",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 0,
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "处于浏览状态时",
                        "tenantId": "0"
                    }, {
                        "exprType": 0,
                        "code": "verifystate0Condition",
                        "leftExpression": "$data.verifystate",
                        "leftTarget": "",
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "disabled": 0,
                        "id": "9652a33a-c264-42a5-acd1-dfbcc6ad89b1",
                        "leftLogicOper": "&&",
                        "pubts": "2020-04-26 15:21:49",
                        "leftProperty": "",
                        "ordernum": 1,
                        "rightExpression": "0",
                        "rightProperty": "",
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "开立态",
                        "tenantId": "0",
                        "compareOper": "===",
                        "rightTarget": ""
                    }],
                    "actions": [{
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "6cdd7164-cf21-423f-b5bc-be65695e0485",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 0,
                        "srcExpression": "true",
                        "target": "btnAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnEdit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "750c7fab-a2c6-4ccc-9566-4e87e89d7901",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 1,
                        "srcExpression": "true",
                        "target": "btnEdit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDelete",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "53959141-3aea-4d5e-98aa-2b8ae7c9e61d",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 2,
                        "srcExpression": "true",
                        "target": "btnDelete",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "c48f68ee-296f-469e-a82e-c9cfb1e9b21d",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 3,
                        "srcExpression": "true",
                        "target": "btnSubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnsubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3079e788-7bf9-4b68-a915-db61107521a5",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 4,
                        "srcExpression": "false",
                        "target": "btnUnsubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnWorkflow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "72035fac-b802-4a94-bccf-261b16fcdeba",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 5,
                        "srcExpression": "false",
                        "target": "btnWorkflow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnstop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "6c50d575-d834-4ed0-a66e-18cd0416a830",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 6,
                        "srcExpression": "true",
                        "target": "btnUnstop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnStop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "cebc3ebd-c151-4a59-9c90-d5309ef26e32",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 7,
                        "srcExpression": "true",
                        "target": "btnStop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnPrintPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "96f80c67-36ff-43e4-bf23-86452e2f769c",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 8,
                        "srcExpression": "true",
                        "target": "btnPrintPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnModelPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8c2b08d9-f6fa-4f88-a964-9069a6763490",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 10,
                        "srcExpression": "true",
                        "target": "btnModelPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandonBrowst",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "edb5e7b8-62fd-4de6-9f30-4767fa9ee140",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 11,
                        "srcExpression": "true",
                        "target": "btnAbandonBrowst",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "09bf8f7d-f151-49dd-b9c5-912be298af36",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 12,
                        "srcExpression": "true",
                        "target": "btnBatchImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "503a1b18-48a0-42a7-8b8d-398396dbec96",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 13,
                        "srcExpression": "true",
                        "target": "btnImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnTempexport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "fcfe8d05-463d-48d1-b16a-c1752ce216b3",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 14,
                        "srcExpression": "true",
                        "target": "btnTempexport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7534e0e6-54a2-4f52-8a01-0ae669939191",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 15,
                        "srcExpression": "true",
                        "target": "btnBatchExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "31b26535-ccd3-44da-bd3f-ce9ccbda399f",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 16,
                        "srcExpression": "true",
                        "target": "btnExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSave",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "86334730-dc33-4669-90ef-7533e79f5fc5",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 17,
                        "srcExpression": "false",
                        "target": "btnSave",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSaveAndAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "0efc915c-9c4b-436e-826b-4661d88c8789",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 18,
                        "srcExpression": "false",
                        "target": "btnSaveAndAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandon",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "e3b8f48f-d355-417e-9387-1ac611910dab",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 19,
                        "srcExpression": "false",
                        "target": "btnAbandon",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAddRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "1261ead5-aa12-441e-9a29-134236129063",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 20,
                        "srcExpression": "false",
                        "target": "btnAddRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDeleteRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "49be9474-627e-4d2c-8d5a-c5ec727e3792",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 21,
                        "srcExpression": "false",
                        "target": "btnDeleteRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnCopy",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "e40dea26-dc47-4d8c-9e2b-9d991df0944f",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 22,
                        "srcExpression": "true",
                        "target": "btnCopy",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "39f16f76-a4f0-4e97-9ca5-d469cd859169",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 23,
                        "srcExpression": "true",
                        "target": "btnAudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnaudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "0fde4b1e-1268-4fe9-ade7-43d38c37324a",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 24,
                        "srcExpression": "true",
                        "target": "btnUnaudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBizFlowPush",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "359242d9-88c1-4325-8e9f-a253d7b76e95",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 25,
                        "srcExpression": "true",
                        "target": "btnBizFlowPush",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMoveprev",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "40d89dfc-378d-4b7b-a033-99121e9b1437",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 26,
                        "srcExpression": "true",
                        "target": "btnMoveprev",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMovenext",
                        "srcExpr2Type": 0,
                        "actionGroupId": "c020acf9-6480-49d8-b674-07d7f6b03ff0",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bb08cb64-244d-4eac-a0b2-3de05a2dc73e",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 27,
                        "srcExpression": "true",
                        "target": "btnMovenext",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }]
                }, {
                    "code": "verifystate1",
                    "ordernum": 4,
                    "system": 0,
                    "ctype": 0,
                    "name": "审核中",
                    "tenantId": "0",
                    "disabled": 0,
                    "id": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                    "ruleId": "609e0a9a-59cd-4a61-90a8-834972883209",
                    "conditions": [{
                        "exprType": 0,
                        "code": "browseCondition",
                        "mode": "browse",
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "disabled": 0,
                        "id": "a993bb73-7669-4241-b27e-b54312a86eec",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 0,
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "处于浏览状态时",
                        "tenantId": "0"
                    }, {
                        "exprType": 0,
                        "code": "verifystate1Condition",
                        "leftExpression": "$data.verifystate",
                        "leftTarget": "",
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "disabled": 0,
                        "id": "4bb513e1-57e1-45d4-a183-cc0f529db373",
                        "leftLogicOper": "&&",
                        "pubts": "2020-04-26 15:21:49",
                        "leftProperty": "",
                        "ordernum": 1,
                        "rightExpression": "1",
                        "rightProperty": "",
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "审核中",
                        "tenantId": "0",
                        "compareOper": "===",
                        "rightTarget": ""
                    }],
                    "actions": [{
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8699d513-e4b9-4a0b-b360-c8ec39ac821b",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 0,
                        "srcExpression": "true",
                        "target": "btnAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnEdit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bb69a058-86c9-45d7-8e50-62fc7a24a72c",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 1,
                        "srcExpression": "true",
                        "target": "btnEdit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDelete",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bc60f612-4a55-4d72-a99d-491be9b442e8",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 2,
                        "srcExpression": "false",
                        "target": "btnDelete",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "aa9694fc-f3c1-4fa8-9e93-6bd7c58ec1d7",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 3,
                        "srcExpression": "false",
                        "target": "btnSubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnsubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "aef7fed3-5e01-4f59-97c3-3408f4335faa",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 4,
                        "srcExpression": "true",
                        "target": "btnUnsubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnWorkflow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "d32551a0-eb65-4671-9a7d-a1cb72c51ba2",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 5,
                        "srcExpression": "true",
                        "target": "btnWorkflow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnstop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "5fbf079f-6fab-4111-969d-fe4c0e8bbce0",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 6,
                        "srcExpression": "true",
                        "target": "btnUnstop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnStop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "cbd58fa7-0118-4ec0-bb10-13ce4879d720",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 7,
                        "srcExpression": "true",
                        "target": "btnStop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnPrintPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "44af560b-b1d0-4064-a457-786ab3792e99",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 8,
                        "srcExpression": "true",
                        "target": "btnPrintPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnModelPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "5540a82d-8513-4813-9e63-c9f046f6e19c",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 10,
                        "srcExpression": "true",
                        "target": "btnModelPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandonBrowst",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8cd4847a-a392-4b44-822d-2375e8e9a3e1",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 11,
                        "srcExpression": "true",
                        "target": "btnAbandonBrowst",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "e3e1202a-29b9-4589-bed3-db9e7c032a63",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 12,
                        "srcExpression": "true",
                        "target": "btnBatchImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "26b50595-1156-4807-b3e3-24c2d12cfc53",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 13,
                        "srcExpression": "true",
                        "target": "btnImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnTempexport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "888690ab-250e-4d82-9c7e-a497251fa1e7",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 14,
                        "srcExpression": "true",
                        "target": "btnTempexport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7c7feccb-0ec4-40ca-b03e-c1e623100288",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 15,
                        "srcExpression": "true",
                        "target": "btnBatchExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b9af0c44-d88d-4def-b2fe-615986e483bd",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 16,
                        "srcExpression": "true",
                        "target": "btnExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSave",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "cd9639d3-239d-4fe6-9379-1320e6e38467",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 17,
                        "srcExpression": "false",
                        "target": "btnSave",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSaveAndAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "609ba7a0-385a-4200-b9a7-a7e23d61dab9",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 18,
                        "srcExpression": "false",
                        "target": "btnSaveAndAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandon",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "26b5657f-a8c6-4218-b3ce-5a290f944f1d",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 19,
                        "srcExpression": "false",
                        "target": "btnAbandon",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAddRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "5336459d-c022-4449-b764-89e4d5dad8de",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 20,
                        "srcExpression": "false",
                        "target": "btnAddRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDeleteRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "88209a3f-d787-4a0c-bf8a-3229678fe797",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 21,
                        "srcExpression": "false",
                        "target": "btnDeleteRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnCopy",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "98402342-5a34-4126-8637-edc7cf3f2f9b",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 22,
                        "srcExpression": "true",
                        "target": "btnCopy",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "2e2d9ac4-fc4d-4d3b-9cc3-21c1c10a66d4",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 23,
                        "srcExpression": "true",
                        "target": "btnAudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnaudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "ed838af2-3e6c-4c94-b8ba-16ec12ecb804",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 24,
                        "srcExpression": "true",
                        "target": "btnUnaudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBizFlowPush",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b4486032-42a5-4f9c-a8b4-97984255d34c",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 25,
                        "srcExpression": "true",
                        "target": "btnBizFlowPush",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMoveprev",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "864050e5-09fd-43ae-bb8d-a094d5263fe3",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 26,
                        "srcExpression": "true",
                        "target": "btnMoveprev",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMovenext",
                        "srcExpr2Type": 0,
                        "actionGroupId": "fc5ff041-1a15-4edd-8eba-c93d2063efd6",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8f9378d5-3194-492b-8b89-e1dc96a973d1",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 27,
                        "srcExpression": "true",
                        "target": "btnMovenext",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }]
                }, {
                    "code": "verifystate2",
                    "ordernum": 5,
                    "system": 0,
                    "ctype": 0,
                    "name": "已审核",
                    "tenantId": "0",
                    "disabled": 0,
                    "id": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                    "ruleId": "609e0a9a-59cd-4a61-90a8-834972883209",
                    "conditions": [{
                        "exprType": 0,
                        "code": "browseCondition",
                        "mode": "browse",
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "disabled": 0,
                        "id": "ed6f3976-69c6-4d16-a444-17d1552f7eb5",
                        "pubts": "2020-04-26 15:21:49",
                        "ordernum": 0,
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "处于浏览状态时",
                        "tenantId": "0"
                    }, {
                        "exprType": 0,
                        "code": "verifystate2Condition",
                        "leftExpression": "$data.verifystate",
                        "leftTarget": "",
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "disabled": 0,
                        "id": "1f1c8581-bcc2-4227-bdab-d7dd68075ede",
                        "leftLogicOper": "&&",
                        "pubts": "2020-04-26 15:21:50",
                        "leftProperty": "",
                        "ordernum": 1,
                        "rightExpression": "2",
                        "rightProperty": "",
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "已审核",
                        "tenantId": "0",
                        "compareOper": "===",
                        "rightTarget": ""
                    }],
                    "actions": [{
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a55f6b9b-f9ec-40fd-a16b-c8ae871f17c3",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 0,
                        "srcExpression": "true",
                        "target": "btnAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnEdit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a619fdd3-b4cd-4799-9769-80c1bcaa7920",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 1,
                        "srcExpression": "false",
                        "target": "btnEdit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDelete",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "0dce4eba-a78c-4f9a-8058-31664a2796f0",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 2,
                        "srcExpression": "false",
                        "target": "btnDelete",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "e2683c92-39ae-4547-9f3a-e97bea3c3c09",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 3,
                        "srcExpression": "false",
                        "target": "btnSubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnsubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "115055a8-743f-4f55-bc41-933a4b7a1dd3",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 4,
                        "srcExpression": "false",
                        "target": "btnUnsubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnWorkflow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "d1f68615-757c-4797-b99c-6c1c55c31d5b",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 5,
                        "srcExpression": "true",
                        "target": "btnWorkflow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnstop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "5f4c98be-efe8-44cf-981b-fac13ebd8384",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 6,
                        "srcExpression": "true",
                        "target": "btnUnstop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnStop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "65c38532-10cd-4536-90e1-31793c59b946",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 7,
                        "srcExpression": "true",
                        "target": "btnStop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnPrintPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "b57ab6e3-046d-43c9-b7cc-7e1e9359fea1",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 8,
                        "srcExpression": "true",
                        "target": "btnPrintPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnModelPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "54b7bcf6-8acb-4af8-bb25-275d95bad696",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 10,
                        "srcExpression": "true",
                        "target": "btnModelPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandonBrowst",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "6b832869-f9d7-40e2-9e41-37908bb803a4",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 11,
                        "srcExpression": "true",
                        "target": "btnAbandonBrowst",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "9427bf6b-16af-4a47-a293-fa4de8f08ba5",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 12,
                        "srcExpression": "true",
                        "target": "btnBatchImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "f74e63ce-9257-44af-b5d2-0e87c35f3f1d",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 13,
                        "srcExpression": "true",
                        "target": "btnImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnTempexport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a0425201-74ca-4d9d-8c64-00ad0d788cba",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 14,
                        "srcExpression": "true",
                        "target": "btnTempexport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "4e0b0cb3-e032-430b-a846-2f9829dd4996",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 15,
                        "srcExpression": "true",
                        "target": "btnBatchExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "2274bbe4-722e-4b87-ba02-04dfd625e435",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 16,
                        "srcExpression": "true",
                        "target": "btnExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSave",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "89703203-cd43-45ff-b61f-c0f0240e6886",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 17,
                        "srcExpression": "false",
                        "target": "btnSave",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSaveAndAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8276848b-8583-4047-956b-477a1f572b37",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 18,
                        "srcExpression": "false",
                        "target": "btnSaveAndAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandon",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "8f2be4ef-0ef6-4730-98a4-0fbaa2c035e0",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 19,
                        "srcExpression": "false",
                        "target": "btnAbandon",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAddRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "6ebe4cd8-4e5c-4266-9516-61ba6f142a9e",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 20,
                        "srcExpression": "false",
                        "target": "btnAddRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDeleteRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "5aa7fa45-7d99-42e3-ab41-a4efae53027b",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 21,
                        "srcExpression": "false",
                        "target": "btnDeleteRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnCopy",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "86864c7e-81d8-4e8f-bd46-9aed50e792df",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 22,
                        "srcExpression": "true",
                        "target": "btnCopy",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "d7499416-b5e2-4ea8-b120-9fb2c31f010d",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 23,
                        "srcExpression": "true",
                        "target": "btnAudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnaudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "38931c45-74db-451f-97af-5753b5944965",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 24,
                        "srcExpression": "true",
                        "target": "btnUnaudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBizFlowPush",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "9a852833-7066-47db-b441-ad947e8309fa",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 25,
                        "srcExpression": "true",
                        "target": "btnBizFlowPush",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMoveprev",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "1456a5c1-7485-4f34-a306-c66c453633f7",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 26,
                        "srcExpression": "true",
                        "target": "btnMoveprev",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMovenext",
                        "srcExpr2Type": 0,
                        "actionGroupId": "9a9bed96-83d4-44a1-8de4-b0f56d45e7ad",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3aefc3eb-2977-453e-8815-d0d1150c74c7",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 27,
                        "srcExpression": "true",
                        "target": "btnMovenext",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }]
                }, {
                    "code": "verifystate3",
                    "ordernum": 6,
                    "system": 0,
                    "ctype": 0,
                    "name": "终止态",
                    "tenantId": "0",
                    "disabled": 0,
                    "id": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                    "ruleId": "609e0a9a-59cd-4a61-90a8-834972883209",
                    "conditions": [{
                        "exprType": 0,
                        "code": "browseCondition",
                        "mode": "browse",
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "disabled": 0,
                        "id": "55b54bd7-fc3e-4901-99ac-feee88eeacbb",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 0,
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "处于浏览状态时",
                        "tenantId": "0"
                    }, {
                        "exprType": 0,
                        "code": "verifystate3Condition",
                        "leftExpression": "$data.verifystate",
                        "leftTarget": "",
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "disabled": 0,
                        "id": "d043159f-959e-4055-9ba1-667b26af78be",
                        "leftLogicOper": "&&",
                        "pubts": "2020-04-26 15:21:50",
                        "leftProperty": "",
                        "ordernum": 1,
                        "rightExpression": "3",
                        "rightProperty": "",
                        "leftExprType": 0,
                        "system": 0,
                        "rightExprType": 0,
                        "name": "终止态",
                        "tenantId": "0",
                        "compareOper": "===",
                        "rightTarget": ""
                    }],
                    "actions": [{
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "cd718031-cba5-415b-8a5c-80986a4f56b3",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 0,
                        "srcExpression": "true",
                        "target": "btnAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnEdit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bcecfd03-9bd0-4cbd-9d60-1b3f8281cbe3",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 1,
                        "srcExpression": "false",
                        "target": "btnEdit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDelete",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "f9915386-0346-428e-8eeb-86163561f607",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 2,
                        "srcExpression": "true",
                        "target": "btnDelete",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "2bbd9add-b277-4268-856e-ede587ee3a79",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 3,
                        "srcExpression": "false",
                        "target": "btnSubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnsubmit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3cfa8ba2-8d5c-4c10-ac95-4b9921d58ffc",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 4,
                        "srcExpression": "false",
                        "target": "btnUnsubmit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnWorkflow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "1cd5072a-8adc-4958-8ea2-f58415377018",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 5,
                        "srcExpression": "true",
                        "target": "btnWorkflow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnstop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a3bdef1c-fa15-41db-8240-a78d7b1496b5",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 6,
                        "srcExpression": "true",
                        "target": "btnUnstop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnStop",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "2489f4f7-e948-4d7b-9c22-70ef98a30163",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 7,
                        "srcExpression": "true",
                        "target": "btnStop",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnPrintPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "922357db-dc51-4085-9d3e-a074dd3082e6",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 8,
                        "srcExpression": "true",
                        "target": "btnPrintPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnModelPreview",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "bfb45e6e-89c7-4d3d-a65f-3884d173a116",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 10,
                        "srcExpression": "true",
                        "target": "btnModelPreview",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandonBrowst",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "06375dd1-c69a-4572-bbef-dfcf7625da21",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 11,
                        "srcExpression": "true",
                        "target": "btnAbandonBrowst",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "e636889b-88b0-41c5-a6aa-40d92a9379fd",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 12,
                        "srcExpression": "true",
                        "target": "btnBatchImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnImport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "9b99d4f1-45cd-4e41-a01d-322b78e73aa4",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 13,
                        "srcExpression": "true",
                        "target": "btnImport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnTempexport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "15747049-8a10-4fa6-a3e1-8551acc8b578",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 14,
                        "srcExpression": "true",
                        "target": "btnTempexport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBatchExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "91a81e6f-0593-4753-b972-4e6129364b69",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 15,
                        "srcExpression": "true",
                        "target": "btnBatchExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnExport",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "2d581f6b-e8e0-4740-9a5e-5c139a097811",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 16,
                        "srcExpression": "true",
                        "target": "btnExport",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSave",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "fe8f4ace-35b4-4942-a8c8-4177a3910076",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 17,
                        "srcExpression": "false",
                        "target": "btnSave",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnSaveAndAdd",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a538be02-b331-4018-adf7-0e78fde97464",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 18,
                        "srcExpression": "false",
                        "target": "btnSaveAndAdd",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAbandon",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "7d5d4da7-bf0a-43a6-b089-86e4395bce72",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 19,
                        "srcExpression": "false",
                        "target": "btnAbandon",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAddRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "89023617-a000-4402-bcf5-6617d09cca22",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 20,
                        "srcExpression": "false",
                        "target": "btnAddRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnDeleteRow",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "3078d8c8-95b9-4645-95a5-d53e9cc8397c",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 21,
                        "srcExpression": "false",
                        "target": "btnDeleteRow",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnCopy",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "de35a790-3d8e-41c0-b7b2-d91f2f005553",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 22,
                        "srcExpression": "true",
                        "target": "btnCopy",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnAudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "2012b1b0-fb5d-4f79-a69a-33caedfaf44f",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 23,
                        "srcExpression": "true",
                        "target": "btnAudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnUnaudit",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "505fb6e4-84e3-43e0-bdb9-35a3e50bc07b",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 24,
                        "srcExpression": "true",
                        "target": "btnUnaudit",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnBizFlowPush",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a04b2982-5d0b-423c-aa27-6177b88792b1",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 25,
                        "srcExpression": "true",
                        "target": "btnBizFlowPush",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMoveprev",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "a774c0c7-5a63-4171-9d2f-54de7f9ca2cd",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 26,
                        "srcExpression": "true",
                        "target": "btnMoveprev",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }, {
                        "exprType": 1,
                        "srcExprType": 0,
                        "code": "btnMovenext",
                        "srcExpr2Type": 0,
                        "actionGroupId": "979c92ff-f2e6-4aa8-b5fb-407b33d88ecf",
                        "property": "bShowIt",
                        "disabled": 0,
                        "id": "4c3f732a-ead2-47e6-9d41-6aa8f3c145a2",
                        "pubts": "2020-04-26 15:21:50",
                        "ordernum": 27,
                        "srcExpression": "true",
                        "target": "btnMovenext",
                        "system": 0,
                        "name": "",
                        "tenantId": "0"
                    }]
                }]
            }],


            'params': {
                "billType": "YYArchive",
                "foreignKey": "",
                "primaryKey": "id",
                "masterOrgField": null,
                "isCoded": true
            },


            'depends': {},


            'mActionList': new cb.models.SimpleModel({
                "controls": [],
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cName": "mActionList",
                "iSystem": 1,
                "id": 822352,
                "bCanModify": true,
                "bExtend": false,
                "bMustSelect": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "bShowIt": false,
                "bJointQuery": false,
                "cEnumType": "",
                "cItemName": "mActionList",
                "cFieldName": "mActionList",
                "authLevel": 3,
                "cCaption": "mActionList",
                "enterDirection": 4,
                "bHidden": false,
                "iOrder": 0,
                "cSubId": "GT37362AT601",
                "iMaxLength": 255,
                "iTabIndex": 0,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "bIsNull": true,
                "x_evt_onFail": "1595918997321_2_onFail",
                "forceFireEvent": true,
                "x_evt_forceFireEvent": true,
                "x_evt_onChange": "new3_onChange",
                "x_evt_onFocus": "new2_onFocus",
                "x_evt_onBlur": "new2_onBlur",
                "x_evt_onSuccess": "1595916323036_2_onSuccess"
            }),

        };
        this.setData(fields);
        this.setDirty(false);



        var billType = "yyarchive" || 'yyarchive';
        var biz;
        if (billType == 'option' || billType == 'freeview') {
            biz = cb.biz.common[billType];
        } else {
            biz = cb.biz.common.yyarchive;
        }


        //common command events start
        //actions

        _this.allActions = [{
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new2_onFocus",
            "cCommand": "new2_onFocus"
        }, {
            "cAction": "deleteRow",
            "cHttpMethod": "GET",
            "cCommand": "cmdDeleteRow",
            "cSvcUrl": "/bill/deleteRow"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new1_onFocus",
            "cCommand": "new1_onFocus"
        }, {
            "cAction": "saveandadd",
            "cHttpMethod": "POST",
            "cCommand": "cmdSaveAndAdd",
            "cSvcUrl": "/bill/save"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new3_onFocus",
            "cCommand": "new3_onFocus"
        }, {
            "cAction": "abandon",
            "cHttpMethod": "GET",
            "cCommand": "cmdAbandon",
            "cSvcUrl": "/bill/abandon"
        }, {
            "cParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
            "cAction": "ui_new2_onBlur",
            "cCommand": "new2_onBlur",
            "cSvcUrl": "/custom/do/ui_new2_onBlur"
        }, {
            "cParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
            "cAction": "ui_new3_onChange",
            "cCommand": "new3_onChange",
            "cSvcUrl": "/custom/do/ui_new3_onChange"
        }, {
            "cAction": "edit",
            "cHttpMethod": "GET",
            "cCommand": "cmdEdit",
            "cSvcUrl": "/bill/edit"
        }, {
            "cAction": "save",
            "cHttpMethod": "POST",
            "cCommand": "cmdSave",
            "cSvcUrl": "/bill/save"
        }, {
            "cAction": "submit",
            "cHttpMethod": "POST",
            "cCommand": "cmdSubmit",
            "cSvcUrl": "/bill/submit"
        }, {
            "cCommand": "cmdAddRow",
            "cAction": "addrow"
        }, {
            "cCommand": "cmdBatchSubmit",
            "cAction": "batchsubmit",
            "cSvcUrl": "/bill/batchsubmit",
            "cHttpMethod": "POST",
            "cParameter": "{\"isWeb\":\"false\"}"
        }, {
            "cAction": "bizflowbatchpush",
            "cCommand": "cmdBizFlowBatchPush",
            "cHttpMethod": "POST",
            "cSvcUrl": "/bizflow/batchPush"
        }, {
            "cAction": "bizflowpush",
            "cCommand": "cmdBizFlowPush",
            "cHttpMethod": "POST",
            "cSvcUrl": "/bizflow/push"
        }];




        _this.get('btnSaveAndAdd').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cAction": "saveandadd",
                "cHttpMethod": "POST",
                "cCommand": "cmdSaveAndAdd",
                "cSvcUrl": "/bill/save",
                "mode": "toolbar-default",
                "bVmExclude": 0,
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnSaveAndAdd",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "保存并新增",
                "iOrder": 0,
                "key": "494749",
                "cShowCaption": "保存并新增",
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


        _this.get('btnAbandon').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cAction": "abandon",
                "cHttpMethod": "GET",
                "cCommand": "cmdAbandon",
                "cSvcUrl": "/bill/abandon",
                "mode": "toolbar-default",
                "bVmExclude": 0,
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnAbandon",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "取消",
                "iOrder": 0,
                "key": "494748",
                "cShowCaption": "取消",
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


        _this.get('btnEdit').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cAction": "edit",
                "cHttpMethod": "GET",
                "cCommand": "cmdEdit",
                "cSvcUrl": "/bill/edit",
                "bVmExclude": 0,
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnEdit",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "编辑",
                "iOrder": 0,
                "key": "494745",
                "cShowCaption": "编辑",
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


        _this.get('btnSave').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cAction": "save",
                "cHttpMethod": "POST",
                "cCommand": "cmdSave",
                "cSvcUrl": "/bill/save",
                "mode": "toolbar-primary",
                "bVmExclude": 0,
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnSave",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "保存",
                "iOrder": 0,
                "key": "494750",
                "cShowCaption": "保存",
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


        _this.get('btnSubmit').on('click', function(params) {
            var args = cb.utils.extend(true, {}, {
                "cAction": "submit",
                "cHttpMethod": "POST",
                "cCommand": "cmdSubmit",
                "cSvcUrl": "/bill/submit",
                "bVmExclude": 0,
                "bEnableFormat": false,
                "cControlType": "button",
                "cItemName": "btnSubmit",
                "iStyle": 0,
                "uncopyable": false,
                "cCaption": "提交",
                "iOrder": 0,
                "key": "494746",
                "cShowCaption": "提交",
                "_actions": {
                    "onClick": [{
                        "action": "cmdSubmit",
                        "type": "command",
                        "event": "onClick"
                    }]
                },
                "needClear": false
            }, {
                key: 'btnSubmit'
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

            biz.do('submit', _this, args)
        });



        //check



        _this.on('columnSetting', function(params) {
            biz.do('columnSetting', _this, params);
        });
        //common command events end


        // common standard events start ***************>>>
        // standardEvents

        _this.allEvents = [{
            "name": "new1",
            "event": "focus",
            "cAction": "new1_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new1_onFocus\",\"cCommand\":\"new1_onFocus\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"input\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new1\",\"cFieldName\":\"new1\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段1\",\"bPrintCaption\":true,\"iTplId\":11605,\"iFunctionType\":0,\"cDataSourceName\":\"GT37362AT601.GT37362AT601.qianduantest01\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field158112\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段1\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onFocus\":[{\"scriptId\":\"16a15dc26d0d4c22bf71da3972722e34\",\"action\":\"26d7a6e7MobileArchive_new1_onFocus\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onFocus\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new2",
            "event": "focus",
            "cAction": "new2_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new2_onFocus\",\"cCommand\":\"new2_onFocus\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"input\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new2\",\"cFieldName\":\"new2\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段2\",\"bPrintCaption\":true,\"iTplId\":11605,\"iFunctionType\":0,\"cDataSourceName\":\"GT37362AT601.GT37362AT601.qianduantest01\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field158113\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段2\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onFocus\":[{\"scriptId\":\"a9f56b54b41c43fcb0bfe4d04f5494a8\",\"action\":\"26d7a6e7MobileArchive_new2_onFocus\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onFocus\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new2",
            "event": "blur",
            "cAction": "ui_new2_onBlur",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cAction\":\"ui_new2_onBlur\",\"cCommand\":\"new2_onBlur\",\"cSvcUrl\":\"/custom/do/ui_new2_onBlur\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"input\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new2\",\"cFieldName\":\"new2\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段2\",\"bPrintCaption\":true,\"iTplId\":11605,\"iFunctionType\":0,\"cDataSourceName\":\"GT37362AT601.GT37362AT601.qianduantest01\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field158113\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段2\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onFocus\":[{\"scriptId\":\"a9f56b54b41c43fcb0bfe4d04f5494a8\",\"action\":\"26d7a6e7MobileArchive_new2_onFocus\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onFocus\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": true
        }, {
            "name": "new3",
            "event": "change",
            "cAction": "ui_new3_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cAction\":\"ui_new3_onChange\",\"cCommand\":\"new3_onChange\",\"cSvcUrl\":\"/custom/do/ui_new3_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"input\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new3\",\"cFieldName\":\"new3\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段3\",\"bPrintCaption\":true,\"iTplId\":11605,\"iFunctionType\":0,\"cDataSourceName\":\"GT37362AT601.GT37362AT601.qianduantest01\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field158114\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段3\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"0907e12e8a1243a6a1306ef748564952\",\"action\":\"26d7a6e7MobileArchive_new3_onChange\",\"description\":\"后端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": true
        }, {
            "name": "mActionList",
            "event": "fail",
            "cAction": "1595918997321_2_onFail",
            "isCommandEvent": false,
            "params": "{\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11605,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "change",
            "cAction": "ui_new3_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cAction\":\"ui_new3_onChange\",\"cCommand\":\"new3_onChange\",\"cSvcUrl\":\"/custom/do/ui_new3_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11605,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": true
        }, {
            "name": "mActionList",
            "event": "focus",
            "cAction": "new2_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new2_onFocus\",\"cCommand\":\"new2_onFocus\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11605,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "blur",
            "cAction": "ui_new2_onBlur",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cParameter\":\"{\\\"X_ACTIONTYPE\\\":\\\"customdo\\\",\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"false\\\"}\",\"cAction\":\"ui_new2_onBlur\",\"cCommand\":\"new2_onBlur\",\"cSvcUrl\":\"/custom/do/ui_new2_onBlur\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11605,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": true
        }, {
            "name": "mActionList",
            "event": "success",
            "cAction": "1595916323036_2_onSuccess",
            "isCommandEvent": false,
            "params": "{\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11605,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }];





        // standard event 1
        _this.get('new1').on('focus', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new1] execute Event[focus] and do Action[new1_onFocus]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new1_onFocus",
                "cCommand": "new1_onFocus",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new1",
                "cFieldName": "new1",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段1",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158112",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段1",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "16a15dc26d0d4c22bf71da3972722e34",
                        "action": "26d7a6e7MobileArchive_new1_onFocus",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onFocus"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new1'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new1_onFocus', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new1] addEventListner on [focus] event and will do Acttion[new1_onFocus]!', 'color:teal');



        // standard event 2
        _this.get('new2').on('focus', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new2] execute Event[focus] and do Action[new2_onFocus]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new2_onFocus",
                "cCommand": "new2_onFocus",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new2",
                "cFieldName": "new2",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段2",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158113",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段2",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "a9f56b54b41c43fcb0bfe4d04f5494a8",
                        "action": "26d7a6e7MobileArchive_new2_onFocus",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onFocus"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new2'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new2_onFocus', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new2] addEventListner on [focus] event and will do Acttion[new2_onFocus]!', 'color:teal');



        // standard event 3
        _this.get('new2').on('blur', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new2] execute Event[blur] and do Action[ui_new2_onBlur]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cAction": "ui_new2_onBlur",
                "cCommand": "new2_onBlur",
                "cSvcUrl": "/custom/do/ui_new2_onBlur",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new2",
                "cFieldName": "new2",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段2",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158113",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段2",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "a9f56b54b41c43fcb0bfe4d04f5494a8",
                        "action": "26d7a6e7MobileArchive_new2_onFocus",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onFocus"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new2'
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

            return biz.do('ui_new2_onBlur', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new2] addEventListner on [blur] event and will do Acttion[ui_new2_onBlur]!', 'color:teal');



        // standard event 4
        _this.get('new3').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new3] execute Event[change] and do Action[ui_new3_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cAction": "ui_new3_onChange",
                "cCommand": "new3_onChange",
                "cSvcUrl": "/custom/do/ui_new3_onChange",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "input",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new3",
                "cFieldName": "new3",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段3",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iFunctionType": 0,
                "cDataSourceName": "GT37362AT601.GT37362AT601.qianduantest01",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field158114",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段3",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "0907e12e8a1243a6a1306ef748564952",
                        "action": "26d7a6e7MobileArchive_new3_onChange",
                        "description": "后端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new3'
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

            return biz.do('ui_new3_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new3] addEventListner on [change] event and will do Acttion[ui_new3_onChange]!', 'color:teal');



        // standard event 5
        _this.get('mActionList').on('fail', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[fail] and do Action[1595918997321_2_onFail]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "standardEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "bEnum": false,
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "动作列表(勿动)",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "bShowIt": false,
                "bJointQuery": false,
                "cItemName": "mActionList",
                "cFieldName": "mActionList",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "mActionList",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field822352",
                "bNeedSum": false,
                "iMaxLength": 255,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true
            }, {
                "key": 'mActionList'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1595918997321_2_onFail', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [fail] event and will do Acttion[1595918997321_2_onFail]!', 'color:teal');



        // standard event 6
        _this.get('mActionList').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[change] and do Action[ui_new3_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cAction": "ui_new3_onChange",
                "cCommand": "new3_onChange",
                "cSvcUrl": "/custom/do/ui_new3_onChange",
                "bEnum": false,
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "动作列表(勿动)",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "bShowIt": false,
                "bJointQuery": false,
                "cItemName": "mActionList",
                "cFieldName": "mActionList",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "mActionList",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field822352",
                "bNeedSum": false,
                "iMaxLength": 255,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true
            }, {
                "key": 'mActionList'
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

            return biz.do('ui_new3_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [change] event and will do Acttion[ui_new3_onChange]!', 'color:teal');



        // standard event 7
        _this.get('mActionList').on('focus', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[focus] and do Action[new2_onFocus]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new2_onFocus",
                "cCommand": "new2_onFocus",
                "bEnum": false,
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "动作列表(勿动)",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "bShowIt": false,
                "bJointQuery": false,
                "cItemName": "mActionList",
                "cFieldName": "mActionList",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "mActionList",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field822352",
                "bNeedSum": false,
                "iMaxLength": 255,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true
            }, {
                "key": 'mActionList'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new2_onFocus', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [focus] event and will do Acttion[new2_onFocus]!', 'color:teal');



        // standard event 8
        _this.get('mActionList').on('blur', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[blur] and do Action[ui_new2_onBlur]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cParameter": "{\"X_ACTIONTYPE\":\"customdo\",\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"false\"}",
                "cAction": "ui_new2_onBlur",
                "cCommand": "new2_onBlur",
                "cSvcUrl": "/custom/do/ui_new2_onBlur",
                "bEnum": false,
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "动作列表(勿动)",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "bShowIt": false,
                "bJointQuery": false,
                "cItemName": "mActionList",
                "cFieldName": "mActionList",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "mActionList",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field822352",
                "bNeedSum": false,
                "iMaxLength": 255,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true
            }, {
                "key": 'mActionList'
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

            return biz.do('ui_new2_onBlur', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [blur] event and will do Acttion[ui_new2_onBlur]!', 'color:teal');



        // standard event 9
        _this.get('mActionList').on('success', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[success] and do Action[1595916323036_2_onSuccess]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "standardEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "bEnum": false,
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "动作列表(勿动)",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "bShowIt": false,
                "bJointQuery": false,
                "cItemName": "mActionList",
                "cFieldName": "mActionList",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "mActionList",
                "bPrintCaption": true,
                "iTplId": 11605,
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field822352",
                "bNeedSum": false,
                "iMaxLength": 255,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true
            }, {
                "key": 'mActionList'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1595916323036_2_onSuccess', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [success] event and will do Acttion[1595916323036_2_onSuccess]!', 'color:teal');


        //common standard events end <<<***************


        var girdModelKeys = []
        if (girdModelKeys) {
            girdModelKeys.forEach(function(key) {
                var gridModel = _this.get(key);
                if (gridModel) {
                    gridModel.on('afterCellValueChange', function(params) {
                        if (params) params.childrenField = key;
                        biz.do('cellCheck', _this, params);
                    })

                    //sub events start
                    //subActions



                    //sub events end

                }
            })
        }

        //注册
        _this.on('filterClick', function(params) {
            biz.do('search', _this, params);
        });



        this.biz = biz;
        // this.initData();
    };
    model.prototype.initData = function() {
        // if(cb.biz['GT37362AT601'] && cb.biz['GT37362AT601']['GT37362AT601_26d7a6e7MobileArchive_VM_Extend']){
        //   console.info('%c GT37362AT601_26d7a6e7MobileArchive_VM_Extend extendjs doAction', 'color:green');
        //   cb.biz['GT37362AT601']['GT37362AT601_26d7a6e7MobileArchive_VM_Extend'].doAction("init", this);
        // }else{
        //   console.log('%c no extend js' , 'font-size:22pt;color:red');
        // }
        var self = this;
        var extendFile = 'GT37362AT601/GT37362AT601_26d7a6e7MobileArchive_VM.Extend.js';
        cb.require('', [extendFile], function(extend) {
            if (extend && extend.doAction) {
                console.info('%c GT37362AT601_26d7a6e7MobileArchive_VM_Extend extendjs doAction', 'color:green');
                // 处理扩展脚本异常导致渲染失败 yueming
                try {
                    // 临时切换到lazyExecute
                    cb.models.BaseModel.prototype.lazyExecuteMode = true
                    extend.doAction("init", self);
                    // 再切换回来
                    cb.models.BaseModel.prototype.lazyExecuteMode = false
                } catch (error) {
                    console.error('Exception in business script, please check');
                    console.error(error);
                }
            } else {
                console.error('%c 语法错误  ' + extendFile, 'font-size:12pt;color:#860786');
                console.error('%c extendVmName-->GT37362AT601_26d7a6e7MobileArchive_VM_Extend', 'font-size:12pt;color:#860786')
            }
            self.execute('extendReady', self);
        }, function(error) {
            console.info('%c 未找到  ' + extendFile, 'font-size:12pt;color:#860786');
            console.info('%c extendVmName-->GT37362AT601_26d7a6e7MobileArchive_VM_Extend', 'font-size:12pt;color:#860786')
            self.execute('extendReady', self);
        });
    };

    return model;
});