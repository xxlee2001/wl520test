//yyarchive

console.info('%c GT37133AT593_d7f501acMobileArchive_VM js init, yon can debug it by setting the [window.__debugger = true]', 'color:steelblue');
if (window && window.__debugger) debugger;
cb.viewmodels.register('GT37133AT593_d7f501acMobileArchive_VM', function(modelType) {

    var model = function(data) {
        cb.models.ContainerModel.call(this, data);
        this.init();
    };
    model.prototype = cb.utils.getPrototype(cb.models.ContainerModel.prototype);
    model.prototype.modelType = modelType;

    model.prototype.init = function() {
        var _this = this;
        var fields = {


            'code': new cb.models.SimpleModel({
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
                "cControlType": "autocode",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "code",
                "cFieldName": "code",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "自动编码",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157633",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "自动编码",
                "bFilter": true,
                "iAlign": 1,
                "bSelfDefine": false,
                "bIsNull": true
            }),


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
                "onChange": "new1_onChange",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157557",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段1",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "c8acab08ef194894bea9567b3eed4e0a",
                        "action": "d7f501acMobileArchive_new1_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }],
                    "onFocus": [{
                        "scriptId": "211776c9d55c44279b1ec38bc9999938",
                        "action": "d7f501acMobileArchive_new1_onFocus",
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


            '1599204704463_32': new cb.models.SimpleModel({
                "onClick": "1599204704463_32_onClick",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "mode": "toolbar-primary",
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "loading": false,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "size": "small",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599204704463_32",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "显示文本框",
                "bPrintCaption": true,
                "iTplId": 11582,
                "icon": "",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "iOrder": 0,
                "key": "Field157631",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "显示文本框",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "0fc9774950e44ceab95973f8d16ad3b4",
                        "action": "d7f501acMobileArchive_1599204704463_32_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            '1599202767313_2': new cb.models.SimpleModel({
                "onClick": "1599202767313_2_onClick",
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
                "cControlType": "icon",
                "size": "md",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599202767313_2",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "图标",
                "bPrintCaption": true,
                "iTplId": 11582,
                "color": "",
                "icon": "check-circle",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157621",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "图标",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "093791101b724c1c8984172f5f5ae7ce",
                        "action": "d7f501acMobileArchive_1599202767313_2_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            '1599202810652_5': new cb.models.SimpleModel({
                "onClick": "1599202810652_5_onClick",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "textAlign": "left",
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "label",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599202810652_5",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "标签",
                "bPrintCaption": true,
                "rightIcon": "",
                "iTplId": 11582,
                "leftIcon": "",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157623",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "标签",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "3c355b2e3e5f4268b664a61fce7b2f4f",
                        "action": "d7f501acMobileArchive_1599202810652_5_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
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
                "onChange": "new2_onChange",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "onFocus": "new2_onFocus",
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "textarea",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 0,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157558",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段2",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "9f6bd4dffcc84132b41787840089ba3e",
                        "action": "d7f501acMobileArchive_new2_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
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
                "cControlType": "inputmultilang",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157559",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段3",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "4c559b721c434c7b95a269f53cb8684c",
                        "action": "d7f501acMobileArchive_new3_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            '1599202997614_14': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "singleLineCenter": false,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "onChange": "1599202997614_14_onChange",
                "isExport": true,
                "bExtend": false,
                "bMustSelect": false,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "language",
                "bShowIt": true,
                "splitLine": true,
                "bJointQuery": false,
                "cItemName": "1599202997614_14",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "maxLength": 200,
                "cCaption": "多语文本框",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "请填写描述",
                "iOrder": 0,
                "key": "Field157626",
                "cSubId": "",
                "showExtraLabelIcon": false,
                "bNeedSum": false,
                "subLabel": "",
                "cShowCaption": "多语文本框",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "c7c0dc4480a94eee91a7b9dcda7f929a",
                        "action": "d7f501acMobileArchive_1599202997614_14_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            '1599205304960_38': new cb.models.SimpleModel({
                "onClick": "1599205304960_38_onClick",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "mode": "toolbar-primary",
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "loading": false,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "size": "small",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599205304960_38",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "隐藏自动编码",
                "bPrintCaption": true,
                "iTplId": 11582,
                "icon": "",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "iOrder": 0,
                "key": "Field157634",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "隐藏自动编码",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "c2bd0c0e9085450a996adfd2ced3267d",
                        "action": "d7f501acMobileArchive_1599205304960_38_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            'new4': new cb.models.SimpleModel({
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
                "onFocus": "new4_onFocus",
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "mobile",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new4",
                "cFieldName": "new4",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段4",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 50,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157560",
                "bNeedSum": false,
                "iMaxLength": 50,
                "multiple": false,
                "cShowCaption": "字段4",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "f3be6c355cc14dbea53b57201063663c",
                        "action": "d7f501acMobileArchive_new4_onFocus",
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


            'new5': new cb.models.SimpleModel({
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
                "cControlType": "map",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new5",
                "cFieldName": "new5",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段5",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157561",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段5",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'new6': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "onChange": "new6_onChange",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "switch",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new6",
                "cFieldName": "new6",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段6",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 5,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157562",
                "bNeedSum": false,
                "iMaxLength": 5,
                "multiple": false,
                "cShowCaption": "字段6",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "9cca692823064d529a9aa1864484a7a2",
                        "action": "d7f501acMobileArchive_new6_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'new7': new cb.models.SimpleModel({
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
                "cControlType": "datepicker",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new7",
                "cFieldName": "new7",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段7",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 23,
                "isDeleted": 0,
                "onCancel": "new7_onCancel",
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157563",
                "bNeedSum": false,
                "iMaxLength": 23,
                "multiple": false,
                "cShowCaption": "字段7",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onCancel": [{
                        "scriptId": "911c31bf2972404291e7d0348a35b910",
                        "action": "d7f501acMobileArchive_new7_onCancel",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onCancel"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'new8': new cb.models.SimpleModel({
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
                "cControlType": "timepicker",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new8",
                "cFieldName": "new8",
                "authLevel": 3,
                "uncopyable": false,
                "onChangeDate": "new8_onChangeDate",
                "cCaption": "字段8",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 23,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157564",
                "bNeedSum": false,
                "iMaxLength": 23,
                "multiple": false,
                "cShowCaption": "字段8",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChangeDate": [{
                        "scriptId": "a304e93f77f843f0b2e00790ea43f989",
                        "action": "d7f501acMobileArchive_new8_onChangeDate",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChangeDate"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            '1599202906735_11': new cb.models.SimpleModel({
                "bEnum": false,
                "defaultValue": "",
                "prefix": "",
                "iFieldType": 1,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bPrintUpCase": false,
                "isExport": true,
                "thousands": true,
                "singleLine": true,
                "bEnableFormat": false,
                "cControlType": "inputnumber",
                "splitLine": true,
                "bJointQuery": false,
                "uncopyable": false,
                "cCaption": "数值",
                "min": -2147483648,
                "bHidden": false,
                "disabled": false,
                "key": "Field157625",
                "cSubId": "",
                "bNeedSum": false,
                "subLabel": "",
                "max": 2147483648,
                "scaleValue": 1,
                "suffix": "",
                "iBillTplGroupId": 290667,
                "mode": "normal",
                "singleLineCenter": false,
                "bVmExclude": 0,
                "bCanModify": true,
                "check": true,
                "bExtend": false,
                "onFocus": "1599202906735_11_onFocus",
                "bMustSelect": false,
                "iNumPoint": 2,
                "bMain": true,
                "bShowIt": true,
                "cItemName": "1599202906735_11",
                "cFieldName": "",
                "authLevel": 3,
                "maxLength": 18,
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "placeholder": "请输入",
                "iOrder": 0,
                "showExtraLabelIcon": false,
                "cShowCaption": "数值",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "ce99da41a455485187de219b4e597edf",
                        "action": "d7f501acMobileArchive_1599202906735_11_onFocus",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onFocus"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            'new11': new cb.models.SimpleModel({
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
                "iNumPoint": 0,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "numberwidget",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new11",
                "cFieldName": "new11",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段11",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 11,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157567",
                "bNeedSum": false,
                "iMaxLength": 11,
                "multiple": false,
                "cShowCaption": "字段11",
                "bFilter": true,
                "iAlign": 1,
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'new12': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "onChange": "new12_onChange",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 8,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "rate",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new12",
                "cFieldName": "new12",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段12",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 32,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157568",
                "bNeedSum": false,
                "iMaxLength": 32,
                "multiple": false,
                "cShowCaption": "字段12",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "6bd94c13b5c94004a00b8d729313b509",
                        "action": "d7f501acMobileArchive_new12_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }),


            'sys_intboolean': new cb.models.ListModel({
                "bEnum": true,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "enumArray": "[\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"启用\",\n    \"resid\": null,\n    \"key\": \"1\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"停用\",\n    \"resid\": null,\n    \"key\": \"0\"\n  }\n]",
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "onChange": "sys_intboolean_onChange",
                "BASEURL": "https://build.yyuap.com/iuap-front",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "optionwidget",
                "iColWidth": 0,
                "bShowIt": true,
                "cEnumType": "sys_intboolean",
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "sys_intboolean",
                "cFieldName": "sys_intboolean",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "启用停用枚举",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 36,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157569",
                "bNeedSum": false,
                "iMaxLength": 36,
                "multiple": false,
                "cShowCaption": "启用停用枚举",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "ff48df9207844a64b6c242033d7d4c08",
                        "action": "d7f501acMobileArchive_sys_intboolean_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "cEnumString": "{\n  \"1\": \"启用\",\n  \"0\": \"停用\"\n}",
                "bIsNull": true,
                "canMultiple": false
            }),


            '1599203124429_20': new cb.models.ListModel({
                "bEnum": true,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "mode": "list",
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "enumArray": "[\n  {\n    \"nameType\": null,\n    \"icon\": null,\n    \"value\": \"202006131318056b8ZO5lCzy\",\n    \"resid\": null,\n    \"key\": \"202006131318056b8ZO5lCzy\"\n  },\n  {\n    \"nameType\": null,\n    \"icon\": null,\n    \"value\": \"2020061313180573AWA5oI3C\",\n    \"resid\": null,\n    \"key\": \"2020061313180573AWA5oI3C\"\n  },\n  {\n    \"nameType\": null,\n    \"icon\": null,\n    \"value\": \"202006131318055jUVvUf4t3\",\n    \"resid\": null,\n    \"key\": \"202006131318055jUVvUf4t3\"\n  }\n]",
                "bCanModify": true,
                "bPrintUpCase": false,
                "onChange": "1599203124429_20_onChange",
                "isExport": true,
                "singleLine": false,
                "bExtend": false,
                "bMustSelect": false,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "radio",
                "bShowIt": true,
                "splitLine": true,
                "cEnumType": "xx_1592025488987745",
                "bJointQuery": false,
                "cItemName": "1599203124429_20",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "选项",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "iOrder": 0,
                "key": "Field157627",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "选项",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "8ffd3f0ab4ed4f68a112a0eac6db40d9",
                        "action": "d7f501acMobileArchive_1599203124429_20_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bSelfDefine": false,
                "cEnumString": "{\n  \"202006131318056b8ZO5lCzy\": \"202006131318056b8ZO5lCzy\",\n  \"2020061313180573AWA5oI3C\": \"2020061313180573AWA5oI3C\",\n  \"202006131318055jUVvUf4t3\": \"202006131318055jUVvUf4t3\"\n}",
                "bIsNull": true,
                "needClear": false
            }),


            'compareLogic': new cb.models.ListModel({
                "bEnum": true,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "enumArray": "[\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"等于\",\n    \"resid\": null,\n    \"key\": \"eq\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"不等于\",\n    \"resid\": null,\n    \"key\": \"neq\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"大于\",\n    \"resid\": null,\n    \"key\": \"gt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"小于\",\n    \"resid\": null,\n    \"key\": \"lt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"大于等于\",\n    \"resid\": null,\n    \"key\": \"egt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"小于等于\",\n    \"resid\": null,\n    \"key\": \"elt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"区间\",\n    \"resid\": null,\n    \"key\": \"between\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"介于\",\n    \"resid\": null,\n    \"key\": \"like\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"左介于\",\n    \"resid\": null,\n    \"key\": \"leftlike\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"右介于\",\n    \"resid\": null,\n    \"key\": \"rightlike\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"包含\",\n    \"resid\": null,\n    \"key\": \"in\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"不包含\",\n    \"resid\": null,\n    \"key\": \"nin\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"为空\",\n    \"resid\": null,\n    \"key\": \"is_null\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"非空\",\n    \"resid\": null,\n    \"key\": \"is_not_null\"\n  }\n]",
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "onChange": "compareLogic_onChange",
                "BASEURL": "https://build.yyuap.com/iuap-front",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "optionwidget",
                "iColWidth": 0,
                "bShowIt": true,
                "cEnumType": "compareLogic",
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "compareLogic",
                "cFieldName": "compareLogic",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "比较符",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157570",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": true,
                "cShowCaption": "比较符",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "288d1244e8fa41529a327f664eb78820",
                        "action": "d7f501acMobileArchive_compareLogic_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "cEnumString": "{\n  \"eq\": \"等于\",\n  \"neq\": \"不等于\",\n  \"gt\": \"大于\",\n  \"lt\": \"小于\",\n  \"egt\": \"大于等于\",\n  \"elt\": \"小于等于\",\n  \"between\": \"区间\",\n  \"like\": \"介于\",\n  \"leftlike\": \"左介于\",\n  \"rightlike\": \"右介于\",\n  \"in\": \"包含\",\n  \"nin\": \"不包含\",\n  \"is_null\": \"为空\",\n  \"is_not_null\": \"非空\"\n}",
                "bIsNull": true,
                "canMultiple": true
            }),


            'new15': new cb.models.SimpleModel({
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
                "cControlType": "pictureupload",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new15",
                "cFieldName": "new15",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段15",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157571",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段15",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onSuccess": [{
                        "scriptId": "a0630dc647644d32b6038467c9fa9e2a",
                        "action": "d7f501acMobileArchive_new15_onSuccess",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onSuccess"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false,
                "onSuccess": "new15_onSuccess"
            }),


            'new16': new cb.models.SimpleModel({
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
                "cControlType": "filelist",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new16",
                "cFieldName": "new16",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段16",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 0,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157572",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段16",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onSuccess": [{
                        "scriptId": "96096199d14649ea9e6baed0597ad2fa",
                        "action": "d7f501acMobileArchive_new16_onSuccess",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onSuccess"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false,
                "onSuccess": "new16_onSuccess"
            }),


            'new17': new cb.models.SimpleModel({
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "onChange": "new17_onChange",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "inputidentity",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new17",
                "cFieldName": "new17",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段17",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 50,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157573",
                "bNeedSum": false,
                "iMaxLength": 50,
                "multiple": false,
                "cShowCaption": "字段17",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "7b387117402a40f8abce14dad0edc765",
                        "action": "d7f501acMobileArchive_new17_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 256,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157574",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157575",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 11,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157576",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 36,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157577",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 0,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": true,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157578",
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


            '1599202859338_8': new cb.models.SimpleModel({
                "onClick": "1599202859338_8_onClick",
                "bEnum": false,
                "showLabel": true,
                "iBillTplGroupId": 111070,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "流式布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "picture",
                "size": "md",
                "borderRadius": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599202859338_8",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "图片",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157624",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "图片",
                "bFilter": true,
                "label": "显隐性",
                "url": "",
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "39d722fcfba14eb6a8a6a29a273d2eea",
                        "action": "d7f501acMobileArchive_1599202859338_8_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            '1599203459569_29': new cb.models.SimpleModel({
                "onClick": "1599203459569_29_onClick",
                "bEnum": false,
                "showLabel": true,
                "iBillTplGroupId": 111070,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "流式布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "picture",
                "size": "md",
                "borderRadius": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599203459569_29",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "图片",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157629",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "图片",
                "bFilter": true,
                "label": "alert",
                "url": "",
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "1dd02f57123f41d1b3336a0d4877a290",
                        "action": "d7f501acMobileArchive_1599203459569_29_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }),


            'mActionList': new cb.models.SimpleModel({
                "onClick": "1599205304960_38_onClick",
                "onFail": "1595918997321_2_onFail",
                "bEnum": false,
                "iBillTplGroupId": 290675,
                "iFieldType": 1,
                "bVmExclude": 2,
                "cTplGroupName": "动作列表(勿动)",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "onChange": "new1_onChange",
                "isExport": true,
                "bExtend": false,
                "onFocus": "new4_onFocus",
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
                "onChangeDate": "new9_onChangeDate",
                "cCaption": "mActionList",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iMaxShowLen": 255,
                "onCancel": "new7_onCancel",
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
                "bIsNull": true,
                "onSuccess": "new16_onSuccess"
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
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "buttonType": "toolbar-default",
                "bHidden": false,
                "iOrder": 0,
                "key": "3147",
                "cSubId": "GT37133AT593",
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
                "isCoded": false
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
                "cSubId": "GT37133AT593",
                "iMaxLength": 255,
                "iTabIndex": 0,
                "cShowCaption": "mActionList",
                "bFilter": true,
                "iAlign": 1,
                "bIsNull": true,
                "x_evt_onClick": "1599205304960_38_onClick",
                "forceFireEvent": true,
                "x_evt_forceFireEvent": true,
                "x_evt_onFail": "1595918997321_2_onFail",
                "x_evt_onChange": "new1_onChange",
                "x_evt_onFocus": "new4_onFocus",
                "x_evt_onChangeDate": "new9_onChangeDate",
                "x_evt_onCancel": "new7_onCancel",
                "x_evt_onSuccess": "new16_onSuccess"
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
            "cAction": "1599202997614_14_onChange",
            "cCommand": "1599202997614_14_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new1_onChange",
            "cCommand": "new1_onChange"
        }, {
            "cAction": "saveandadd",
            "cHttpMethod": "POST",
            "cCommand": "cmdSaveAndAdd",
            "cSvcUrl": "/bill/save"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new8_onChangeDate",
            "cCommand": "new8_onChangeDate"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599203124429_20_onChange",
            "cCommand": "1599203124429_20_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new4_onFocus",
            "cCommand": "new4_onFocus"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new6_onChange",
            "cCommand": "new6_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new1_onFocus",
            "cCommand": "new1_onFocus"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new17_onChange",
            "cCommand": "new17_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599203459569_29_onClick",
            "cCommand": "1599203459569_29_onClick"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "compareLogic_onChange",
            "cCommand": "compareLogic_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new16_onSuccess",
            "cCommand": "new16_onSuccess"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new2_onChange",
            "cCommand": "new2_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new12_onChange",
            "cCommand": "new12_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new3_onChange",
            "cCommand": "new3_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599202906735_11_onFocus",
            "cCommand": "1599202906735_11_onFocus"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599202859338_8_onClick",
            "cCommand": "1599202859338_8_onClick"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599202767313_2_onClick",
            "cCommand": "1599202767313_2_onClick"
        }, {
            "cAction": "deleteRow",
            "cHttpMethod": "GET",
            "cCommand": "cmdDeleteRow",
            "cSvcUrl": "/bill/deleteRow"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new7_onCancel",
            "cCommand": "new7_onCancel"
        }, {
            "cAction": "edit",
            "cHttpMethod": "GET",
            "cCommand": "cmdEdit",
            "cSvcUrl": "/bill/edit"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new9_onChangeDate",
            "cCommand": "new9_onChangeDate"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new2_onFocus",
            "cCommand": "new2_onFocus"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599204704463_32_onClick",
            "cCommand": "1599204704463_32_onClick"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599202810652_5_onClick",
            "cCommand": "1599202810652_5_onClick"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "1599205304960_38_onClick",
            "cCommand": "1599205304960_38_onClick"
        }, {
            "cAction": "abandon",
            "cHttpMethod": "GET",
            "cCommand": "cmdAbandon",
            "cSvcUrl": "/bill/abandon"
        }, {
            "cAction": "submit",
            "cHttpMethod": "POST",
            "cCommand": "cmdSubmit",
            "cSvcUrl": "/bill/submit"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new10_onFocus",
            "cCommand": "new10_onFocus"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "sys_intboolean_onChange",
            "cCommand": "sys_intboolean_onChange"
        }, {
            "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
            "cAction": "new15_onSuccess",
            "cCommand": "new15_onSuccess"
        }, {
            "cAction": "save",
            "cHttpMethod": "POST",
            "cCommand": "cmdSave",
            "cSvcUrl": "/bill/save"
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



        //check



        _this.on('columnSetting', function(params) {
            biz.do('columnSetting', _this, params);
        });
        //common command events end


        // common standard events start ***************>>>
        // standardEvents

        _this.allEvents = [{
            "name": "new1",
            "event": "change",
            "cAction": "new1_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new1_onChange\",\"cCommand\":\"new1_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"input\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new1\",\"cFieldName\":\"new1\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段1\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157557\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段1\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"c8acab08ef194894bea9567b3eed4e0a\",\"action\":\"d7f501acMobileArchive_new1_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}],\"onFocus\":[{\"scriptId\":\"211776c9d55c44279b1ec38bc9999938\",\"action\":\"d7f501acMobileArchive_new1_onFocus\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onFocus\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new1",
            "event": "focus",
            "cAction": "new1_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new1_onFocus\",\"cCommand\":\"new1_onFocus\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"input\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new1\",\"cFieldName\":\"new1\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段1\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157557\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段1\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"c8acab08ef194894bea9567b3eed4e0a\",\"action\":\"d7f501acMobileArchive_new1_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}],\"onFocus\":[{\"scriptId\":\"211776c9d55c44279b1ec38bc9999938\",\"action\":\"d7f501acMobileArchive_new1_onFocus\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onFocus\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "1599204704463_32",
            "event": "click",
            "cAction": "1599204704463_32_onClick",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599204704463_32_onClick\",\"cCommand\":\"1599204704463_32_onClick\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"mode\":\"toolbar-primary\",\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"loading\":false,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"size\":\"small\",\"bShowIt\":true,\"bJointQuery\":false,\"cItemName\":\"1599204704463_32\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"显示文本框\",\"bPrintCaption\":true,\"iTplId\":11582,\"icon\":\"\",\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"iOrder\":0,\"key\":\"Field157631\",\"cSubId\":\"\",\"bNeedSum\":false,\"cShowCaption\":\"显示文本框\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onClick\":[{\"scriptId\":\"0fc9774950e44ceab95973f8d16ad3b4\",\"action\":\"d7f501acMobileArchive_1599204704463_32_onClick\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onClick\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "1599202767313_2",
            "event": "click",
            "cAction": "1599202767313_2_onClick",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599202767313_2_onClick\",\"cCommand\":\"1599202767313_2_onClick\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"icon\",\"size\":\"md\",\"bShowIt\":true,\"bJointQuery\":false,\"cItemName\":\"1599202767313_2\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"图标\",\"bPrintCaption\":true,\"iTplId\":11582,\"color\":\"\",\"icon\":\"check-circle\",\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field157621\",\"cSubId\":\"\",\"bNeedSum\":false,\"cShowCaption\":\"图标\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onClick\":[{\"scriptId\":\"093791101b724c1c8984172f5f5ae7ce\",\"action\":\"d7f501acMobileArchive_1599202767313_2_onClick\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onClick\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "1599202810652_5",
            "event": "click",
            "cAction": "1599202810652_5_onClick",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599202810652_5_onClick\",\"cCommand\":\"1599202810652_5_onClick\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"textAlign\":\"left\",\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"label\",\"bShowIt\":true,\"bJointQuery\":false,\"cItemName\":\"1599202810652_5\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"标签\",\"bPrintCaption\":true,\"rightIcon\":\"\",\"iTplId\":11582,\"leftIcon\":\"\",\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field157623\",\"cSubId\":\"\",\"bNeedSum\":false,\"cShowCaption\":\"标签\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onClick\":[{\"scriptId\":\"3c355b2e3e5f4268b664a61fce7b2f4f\",\"action\":\"d7f501acMobileArchive_1599202810652_5_onClick\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onClick\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "new2",
            "event": "change",
            "cAction": "new2_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new2_onChange\",\"cCommand\":\"new2_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"textarea\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new2\",\"cFieldName\":\"new2\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段2\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":0,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157558\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段2\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"9f6bd4dffcc84132b41787840089ba3e\",\"action\":\"d7f501acMobileArchive_new2_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new2",
            "event": "focus",
            "cAction": "new2_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new2_onFocus\",\"cCommand\":\"new2_onFocus\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"textarea\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new2\",\"cFieldName\":\"new2\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段2\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":0,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157558\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段2\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"9f6bd4dffcc84132b41787840089ba3e\",\"action\":\"d7f501acMobileArchive_new2_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new3",
            "event": "change",
            "cAction": "new3_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new3_onChange\",\"cCommand\":\"new3_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"inputmultilang\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new3\",\"cFieldName\":\"new3\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段3\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157559\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段3\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"4c559b721c434c7b95a269f53cb8684c\",\"action\":\"d7f501acMobileArchive_new3_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "1599202997614_14",
            "event": "change",
            "cAction": "1599202997614_14_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599202997614_14_onChange\",\"cCommand\":\"1599202997614_14_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"singleLineCenter\":false,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":false,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"language\",\"bShowIt\":true,\"splitLine\":true,\"bJointQuery\":false,\"cItemName\":\"1599202997614_14\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"maxLength\":200,\"cCaption\":\"多语文本框\",\"bPrintCaption\":true,\"iTplId\":11582,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"请填写描述\",\"iOrder\":0,\"key\":\"Field157626\",\"cSubId\":\"\",\"showExtraLabelIcon\":false,\"bNeedSum\":false,\"subLabel\":\"\",\"cShowCaption\":\"多语文本框\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"c7c0dc4480a94eee91a7b9dcda7f929a\",\"action\":\"d7f501acMobileArchive_1599202997614_14_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "1599205304960_38",
            "event": "click",
            "cAction": "1599205304960_38_onClick",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599205304960_38_onClick\",\"cCommand\":\"1599205304960_38_onClick\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"mode\":\"toolbar-primary\",\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"loading\":false,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"size\":\"small\",\"bShowIt\":true,\"bJointQuery\":false,\"cItemName\":\"1599205304960_38\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"隐藏自动编码\",\"bPrintCaption\":true,\"iTplId\":11582,\"icon\":\"\",\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"iOrder\":0,\"key\":\"Field157634\",\"cSubId\":\"\",\"bNeedSum\":false,\"cShowCaption\":\"隐藏自动编码\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onClick\":[{\"scriptId\":\"c2bd0c0e9085450a996adfd2ced3267d\",\"action\":\"d7f501acMobileArchive_1599205304960_38_onClick\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onClick\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "new4",
            "event": "focus",
            "cAction": "new4_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new4_onFocus\",\"cCommand\":\"new4_onFocus\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"mobile\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new4\",\"cFieldName\":\"new4\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段4\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":50,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157560\",\"bNeedSum\":false,\"iMaxLength\":50,\"multiple\":false,\"cShowCaption\":\"字段4\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onFocus\":[{\"scriptId\":\"f3be6c355cc14dbea53b57201063663c\",\"action\":\"d7f501acMobileArchive_new4_onFocus\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onFocus\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new6",
            "event": "change",
            "cAction": "new6_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new6_onChange\",\"cCommand\":\"new6_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"switch\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new6\",\"cFieldName\":\"new6\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段6\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":5,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157562\",\"bNeedSum\":false,\"iMaxLength\":5,\"multiple\":false,\"cShowCaption\":\"字段6\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"9cca692823064d529a9aa1864484a7a2\",\"action\":\"d7f501acMobileArchive_new6_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new7",
            "event": "cancel",
            "cAction": "new7_onCancel",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new7_onCancel\",\"cCommand\":\"new7_onCancel\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"datepicker\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new7\",\"cFieldName\":\"new7\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段7\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":23,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157563\",\"bNeedSum\":false,\"iMaxLength\":23,\"multiple\":false,\"cShowCaption\":\"字段7\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onCancel\":[{\"scriptId\":\"911c31bf2972404291e7d0348a35b910\",\"action\":\"d7f501acMobileArchive_new7_onCancel\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onCancel\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new8",
            "event": "changeDate",
            "cAction": "new8_onChangeDate",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new8_onChangeDate\",\"cCommand\":\"new8_onChangeDate\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"timepicker\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new8\",\"cFieldName\":\"new8\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段8\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":23,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157564\",\"bNeedSum\":false,\"iMaxLength\":23,\"multiple\":false,\"cShowCaption\":\"字段8\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChangeDate\":[{\"scriptId\":\"a304e93f77f843f0b2e00790ea43f989\",\"action\":\"d7f501acMobileArchive_new8_onChangeDate\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChangeDate\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "1599202906735_11",
            "event": "focus",
            "cAction": "1599202906735_11_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599202906735_11_onFocus\",\"cCommand\":\"1599202906735_11_onFocus\",\"bEnum\":false,\"defaultValue\":\"\",\"prefix\":\"\",\"iFieldType\":1,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bPrintUpCase\":false,\"isExport\":true,\"thousands\":true,\"singleLine\":true,\"bEnableFormat\":false,\"cControlType\":\"inputnumber\",\"splitLine\":true,\"bJointQuery\":false,\"uncopyable\":false,\"cCaption\":\"数值\",\"min\":-2147483648,\"bHidden\":false,\"disabled\":false,\"key\":\"Field157625\",\"cSubId\":\"\",\"bNeedSum\":false,\"subLabel\":\"\",\"max\":2147483648,\"scaleValue\":1,\"suffix\":\"\",\"iBillTplGroupId\":290667,\"mode\":\"normal\",\"singleLineCenter\":false,\"bVmExclude\":0,\"bCanModify\":true,\"check\":true,\"bExtend\":false,\"bMustSelect\":false,\"iNumPoint\":2,\"bMain\":true,\"bShowIt\":true,\"cItemName\":\"1599202906735_11\",\"cFieldName\":\"\",\"authLevel\":3,\"maxLength\":18,\"bPrintCaption\":true,\"iTplId\":11582,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"placeholder\":\"请输入\",\"iOrder\":0,\"showExtraLabelIcon\":false,\"cShowCaption\":\"数值\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onFocus\":[{\"scriptId\":\"ce99da41a455485187de219b4e597edf\",\"action\":\"d7f501acMobileArchive_1599202906735_11_onFocus\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onFocus\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "new12",
            "event": "change",
            "cAction": "new12_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new12_onChange\",\"cCommand\":\"new12_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":8,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"rate\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new12\",\"cFieldName\":\"new12\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段12\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":32,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157568\",\"bNeedSum\":false,\"iMaxLength\":32,\"multiple\":false,\"cShowCaption\":\"字段12\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"6bd94c13b5c94004a00b8d729313b509\",\"action\":\"d7f501acMobileArchive_new12_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "sys_intboolean",
            "event": "change",
            "cAction": "sys_intboolean_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"sys_intboolean_onChange\",\"cCommand\":\"sys_intboolean_onChange\",\"bEnum\":true,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"enumArray\":\"[\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"启用\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"1\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"停用\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"0\\\"\\n  }\\n]\",\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"BASEURL\":\"https://build.yyuap.com/iuap-front\",\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"optionwidget\",\"iColWidth\":0,\"bShowIt\":true,\"cEnumType\":\"sys_intboolean\",\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"sys_intboolean\",\"cFieldName\":\"sys_intboolean\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"启用停用枚举\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":36,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157569\",\"bNeedSum\":false,\"iMaxLength\":36,\"multiple\":false,\"cShowCaption\":\"启用停用枚举\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"ff48df9207844a64b6c242033d7d4c08\",\"action\":\"d7f501acMobileArchive_sys_intboolean_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"cEnumString\":\"{\\n  \\\"1\\\": \\\"启用\\\",\\n  \\\"0\\\": \\\"停用\\\"\\n}\",\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "1599203124429_20",
            "event": "change",
            "cAction": "1599203124429_20_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599203124429_20_onChange\",\"cCommand\":\"1599203124429_20_onChange\",\"bEnum\":true,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"mode\":\"list\",\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"enumArray\":\"[\\n  {\\n    \\\"nameType\\\": null,\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"202006131318056b8ZO5lCzy\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"202006131318056b8ZO5lCzy\\\"\\n  },\\n  {\\n    \\\"nameType\\\": null,\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"2020061313180573AWA5oI3C\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"2020061313180573AWA5oI3C\\\"\\n  },\\n  {\\n    \\\"nameType\\\": null,\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"202006131318055jUVvUf4t3\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"202006131318055jUVvUf4t3\\\"\\n  }\\n]\",\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":false,\"bExtend\":false,\"bMustSelect\":false,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"radio\",\"bShowIt\":true,\"splitLine\":true,\"cEnumType\":\"xx_1592025488987745\",\"bJointQuery\":false,\"cItemName\":\"1599203124429_20\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"选项\",\"bPrintCaption\":true,\"iTplId\":11582,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"iOrder\":0,\"key\":\"Field157627\",\"cSubId\":\"\",\"bNeedSum\":false,\"cShowCaption\":\"选项\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"8ffd3f0ab4ed4f68a112a0eac6db40d9\",\"action\":\"d7f501acMobileArchive_1599203124429_20_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bSelfDefine\":false,\"cEnumString\":\"{\\n  \\\"202006131318056b8ZO5lCzy\\\": \\\"202006131318056b8ZO5lCzy\\\",\\n  \\\"2020061313180573AWA5oI3C\\\": \\\"2020061313180573AWA5oI3C\\\",\\n  \\\"202006131318055jUVvUf4t3\\\": \\\"202006131318055jUVvUf4t3\\\"\\n}\",\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "compareLogic",
            "event": "change",
            "cAction": "compareLogic_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"compareLogic_onChange\",\"cCommand\":\"compareLogic_onChange\",\"bEnum\":true,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"enumArray\":\"[\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"等于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"eq\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"不等于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"neq\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"大于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"gt\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"小于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"lt\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"大于等于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"egt\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"小于等于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"elt\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"区间\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"between\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"介于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"like\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"左介于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"leftlike\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"右介于\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"rightlike\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"包含\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"in\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"不包含\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"nin\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"为空\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"is_null\\\"\\n  },\\n  {\\n    \\\"nameType\\\": \\\"text\\\",\\n    \\\"icon\\\": null,\\n    \\\"value\\\": \\\"非空\\\",\\n    \\\"resid\\\": null,\\n    \\\"key\\\": \\\"is_not_null\\\"\\n  }\\n]\",\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"BASEURL\":\"https://build.yyuap.com/iuap-front\",\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"optionwidget\",\"iColWidth\":0,\"bShowIt\":true,\"cEnumType\":\"compareLogic\",\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"compareLogic\",\"cFieldName\":\"compareLogic\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"比较符\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157570\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":true,\"cShowCaption\":\"比较符\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"288d1244e8fa41529a327f664eb78820\",\"action\":\"d7f501acMobileArchive_compareLogic_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"cEnumString\":\"{\\n  \\\"eq\\\": \\\"等于\\\",\\n  \\\"neq\\\": \\\"不等于\\\",\\n  \\\"gt\\\": \\\"大于\\\",\\n  \\\"lt\\\": \\\"小于\\\",\\n  \\\"egt\\\": \\\"大于等于\\\",\\n  \\\"elt\\\": \\\"小于等于\\\",\\n  \\\"between\\\": \\\"区间\\\",\\n  \\\"like\\\": \\\"介于\\\",\\n  \\\"leftlike\\\": \\\"左介于\\\",\\n  \\\"rightlike\\\": \\\"右介于\\\",\\n  \\\"in\\\": \\\"包含\\\",\\n  \\\"nin\\\": \\\"不包含\\\",\\n  \\\"is_null\\\": \\\"为空\\\",\\n  \\\"is_not_null\\\": \\\"非空\\\"\\n}\",\"bIsNull\":true,\"canMultiple\":true}",
            "needReduce": false
        }, {
            "name": "new15",
            "event": "success",
            "cAction": "new15_onSuccess",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new15_onSuccess\",\"cCommand\":\"new15_onSuccess\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"pictureupload\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new15\",\"cFieldName\":\"new15\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段15\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":200,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157571\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段15\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onSuccess\":[{\"scriptId\":\"a0630dc647644d32b6038467c9fa9e2a\",\"action\":\"d7f501acMobileArchive_new15_onSuccess\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onSuccess\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new16",
            "event": "success",
            "cAction": "new16_onSuccess",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new16_onSuccess\",\"cCommand\":\"new16_onSuccess\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"filelist\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new16\",\"cFieldName\":\"new16\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段16\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":0,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157572\",\"bNeedSum\":false,\"iMaxLength\":200,\"multiple\":false,\"cShowCaption\":\"字段16\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onSuccess\":[{\"scriptId\":\"96096199d14649ea9e6baed0597ad2fa\",\"action\":\"d7f501acMobileArchive_new16_onSuccess\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onSuccess\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "new17",
            "event": "change",
            "cAction": "new17_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new17_onChange\",\"cCommand\":\"new17_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290667,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"Flex布局\",\"iSystem\":1,\"bCanModify\":true,\"cDefaultValue\":\"\",\"bPrintUpCase\":false,\"isExport\":true,\"singleLine\":true,\"bExtend\":false,\"bMustSelect\":true,\"iNumPoint\":2,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"inputidentity\",\"iColWidth\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cSourceType\":\"\",\"cItemName\":\"new17\",\"cFieldName\":\"new17\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"字段17\",\"bPrintCaption\":true,\"iTplId\":11582,\"iFunctionType\":0,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":50,\"isDeleted\":0,\"bSplit\":false,\"bHidden\":false,\"disabled\":false,\"placeholder\":\"\",\"iOrder\":0,\"key\":\"Field157573\",\"bNeedSum\":false,\"iMaxLength\":50,\"multiple\":false,\"cShowCaption\":\"字段17\",\"bFilter\":true,\"iAlign\":1,\"_actions\":{\"onChange\":[{\"scriptId\":\"7b387117402a40f8abce14dad0edc765\",\"action\":\"d7f501acMobileArchive_new17_onChange\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onChange\"}]},\"bFixed\":true,\"bSelfDefine\":false,\"bIsNull\":true,\"canMultiple\":false}",
            "needReduce": false
        }, {
            "name": "1599202859338_8",
            "event": "click",
            "cAction": "1599202859338_8_onClick",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599202859338_8_onClick\",\"cCommand\":\"1599202859338_8_onClick\",\"bEnum\":false,\"showLabel\":true,\"iBillTplGroupId\":111070,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"流式布局\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"picture\",\"size\":\"md\",\"borderRadius\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cItemName\":\"1599202859338_8\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"图片\",\"bPrintCaption\":true,\"iTplId\":11582,\"cDataSourceName\":\"GT37133AT593.GT37133AT593.test1111test\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field157624\",\"cSubId\":\"\",\"bNeedSum\":false,\"cShowCaption\":\"图片\",\"bFilter\":true,\"label\":\"显隐性\",\"url\":\"\",\"iAlign\":1,\"_actions\":{\"onClick\":[{\"scriptId\":\"39d722fcfba14eb6a8a6a29a273d2eea\",\"action\":\"d7f501acMobileArchive_1599202859338_8_onClick\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onClick\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "1599203459569_29",
            "event": "click",
            "cAction": "1599203459569_29_onClick",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599203459569_29_onClick\",\"cCommand\":\"1599203459569_29_onClick\",\"bEnum\":false,\"showLabel\":true,\"iBillTplGroupId\":111070,\"iFieldType\":1,\"bVmExclude\":0,\"cTplGroupName\":\"流式布局\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"picture\",\"size\":\"md\",\"borderRadius\":0,\"bShowIt\":true,\"bJointQuery\":false,\"cItemName\":\"1599203459569_29\",\"cFieldName\":\"\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"图片\",\"bPrintCaption\":true,\"iTplId\":11582,\"cDataSourceName\":\"\",\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field157629\",\"cSubId\":\"\",\"bNeedSum\":false,\"cShowCaption\":\"图片\",\"bFilter\":true,\"label\":\"alert\",\"url\":\"\",\"iAlign\":1,\"_actions\":{\"onClick\":[{\"scriptId\":\"1dd02f57123f41d1b3336a0d4877a290\",\"action\":\"d7f501acMobileArchive_1599203459569_29_onClick\",\"description\":\"前端函数\",\"type\":\"fun\",\"event\":\"onClick\"}]},\"bSelfDefine\":false,\"bIsNull\":true,\"needClear\":false}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "click",
            "cAction": "1599205304960_38_onClick",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"1599205304960_38_onClick\",\"cCommand\":\"1599205304960_38_onClick\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11582,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "fail",
            "cAction": "1595918997321_2_onFail",
            "isCommandEvent": false,
            "params": "{\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11582,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "change",
            "cAction": "new1_onChange",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new1_onChange\",\"cCommand\":\"new1_onChange\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11582,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "focus",
            "cAction": "new4_onFocus",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new4_onFocus\",\"cCommand\":\"new4_onFocus\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11582,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "changeDate",
            "cAction": "new9_onChangeDate",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new9_onChangeDate\",\"cCommand\":\"new9_onChangeDate\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11582,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "cancel",
            "cAction": "new7_onCancel",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new7_onCancel\",\"cCommand\":\"new7_onCancel\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11582,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }, {
            "name": "mActionList",
            "event": "success",
            "cAction": "new16_onSuccess",
            "isCommandEvent": true,
            "params": "{\"cmdParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cParameter\":\"{\\\"X_ISFUN\\\":\\\"true\\\",\\\"X_ISFRONT\\\":\\\"true\\\"}\",\"cAction\":\"new16_onSuccess\",\"cCommand\":\"new16_onSuccess\",\"bEnum\":false,\"iBillTplGroupId\":290675,\"iFieldType\":1,\"bVmExclude\":2,\"cTplGroupName\":\"动作列表(勿动)\",\"iSystem\":1,\"bCanModify\":true,\"bPrintUpCase\":false,\"isExport\":true,\"bExtend\":false,\"bMustSelect\":true,\"bMain\":true,\"bEnableFormat\":false,\"cControlType\":\"button\",\"bShowIt\":false,\"bJointQuery\":false,\"cItemName\":\"mActionList\",\"cFieldName\":\"mActionList\",\"authLevel\":3,\"uncopyable\":false,\"cCaption\":\"mActionList\",\"bPrintCaption\":true,\"iTplId\":11582,\"iMaxShowLen\":255,\"bSplit\":false,\"bHidden\":false,\"iOrder\":0,\"key\":\"Field822352\",\"bNeedSum\":false,\"iMaxLength\":255,\"cShowCaption\":\"mActionList\",\"bFilter\":true,\"iAlign\":1,\"bSelfDefine\":false,\"bIsNull\":true}",
            "needReduce": false
        }];





        // standard event 1
        _this.get('new1').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new1] execute Event[change] and do Action[new1_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new1_onChange",
                "cCommand": "new1_onChange",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157557",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段1",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "c8acab08ef194894bea9567b3eed4e0a",
                        "action": "d7f501acMobileArchive_new1_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }],
                    "onFocus": [{
                        "scriptId": "211776c9d55c44279b1ec38bc9999938",
                        "action": "d7f501acMobileArchive_new1_onFocus",
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

            return biz.do('new1_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new1] addEventListner on [change] event and will do Acttion[new1_onChange]!', 'color:teal');



        // standard event 2
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157557",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段1",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "c8acab08ef194894bea9567b3eed4e0a",
                        "action": "d7f501acMobileArchive_new1_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }],
                    "onFocus": [{
                        "scriptId": "211776c9d55c44279b1ec38bc9999938",
                        "action": "d7f501acMobileArchive_new1_onFocus",
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



        // standard event 3
        _this.get('1599204704463_32').on('click', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599204704463_32] execute Event[click] and do Action[1599204704463_32_onClick]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599204704463_32_onClick",
                "cCommand": "1599204704463_32_onClick",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "mode": "toolbar-primary",
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "loading": false,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "size": "small",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599204704463_32",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "显示文本框",
                "bPrintCaption": true,
                "iTplId": 11582,
                "icon": "",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "iOrder": 0,
                "key": "Field157631",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "显示文本框",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "0fc9774950e44ceab95973f8d16ad3b4",
                        "action": "d7f501acMobileArchive_1599204704463_32_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599204704463_32'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599204704463_32_onClick', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599204704463_32] addEventListner on [click] event and will do Acttion[1599204704463_32_onClick]!', 'color:teal');



        // standard event 4
        _this.get('1599202767313_2').on('click', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599202767313_2] execute Event[click] and do Action[1599202767313_2_onClick]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599202767313_2_onClick",
                "cCommand": "1599202767313_2_onClick",
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
                "cControlType": "icon",
                "size": "md",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599202767313_2",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "图标",
                "bPrintCaption": true,
                "iTplId": 11582,
                "color": "",
                "icon": "check-circle",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157621",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "图标",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "093791101b724c1c8984172f5f5ae7ce",
                        "action": "d7f501acMobileArchive_1599202767313_2_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599202767313_2'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599202767313_2_onClick', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599202767313_2] addEventListner on [click] event and will do Acttion[1599202767313_2_onClick]!', 'color:teal');



        // standard event 5
        _this.get('1599202810652_5').on('click', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599202810652_5] execute Event[click] and do Action[1599202810652_5_onClick]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599202810652_5_onClick",
                "cCommand": "1599202810652_5_onClick",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "textAlign": "left",
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "label",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599202810652_5",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "标签",
                "bPrintCaption": true,
                "rightIcon": "",
                "iTplId": 11582,
                "leftIcon": "",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157623",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "标签",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "3c355b2e3e5f4268b664a61fce7b2f4f",
                        "action": "d7f501acMobileArchive_1599202810652_5_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599202810652_5'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599202810652_5_onClick', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599202810652_5] addEventListner on [click] event and will do Acttion[1599202810652_5_onClick]!', 'color:teal');



        // standard event 6
        _this.get('new2').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new2] execute Event[change] and do Action[new2_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new2_onChange",
                "cCommand": "new2_onChange",
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
                "cControlType": "textarea",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 0,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157558",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段2",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "9f6bd4dffcc84132b41787840089ba3e",
                        "action": "d7f501acMobileArchive_new2_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
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

            return biz.do('new2_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new2] addEventListner on [change] event and will do Acttion[new2_onChange]!', 'color:teal');



        // standard event 7
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
                "cControlType": "textarea",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 0,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157558",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段2",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "9f6bd4dffcc84132b41787840089ba3e",
                        "action": "d7f501acMobileArchive_new2_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
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



        // standard event 8
        _this.get('new3').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new3] execute Event[change] and do Action[new3_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new3_onChange",
                "cCommand": "new3_onChange",
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
                "cControlType": "inputmultilang",
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
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157559",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段3",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "4c559b721c434c7b95a269f53cb8684c",
                        "action": "d7f501acMobileArchive_new3_onChange",
                        "description": "前端函数",
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

            return biz.do('new3_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new3] addEventListner on [change] event and will do Acttion[new3_onChange]!', 'color:teal');



        // standard event 9
        _this.get('1599202997614_14').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599202997614_14] execute Event[change] and do Action[1599202997614_14_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599202997614_14_onChange",
                "cCommand": "1599202997614_14_onChange",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "singleLineCenter": false,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": false,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "language",
                "bShowIt": true,
                "splitLine": true,
                "bJointQuery": false,
                "cItemName": "1599202997614_14",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "maxLength": 200,
                "cCaption": "多语文本框",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "请填写描述",
                "iOrder": 0,
                "key": "Field157626",
                "cSubId": "",
                "showExtraLabelIcon": false,
                "bNeedSum": false,
                "subLabel": "",
                "cShowCaption": "多语文本框",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "c7c0dc4480a94eee91a7b9dcda7f929a",
                        "action": "d7f501acMobileArchive_1599202997614_14_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599202997614_14'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599202997614_14_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599202997614_14] addEventListner on [change] event and will do Acttion[1599202997614_14_onChange]!', 'color:teal');



        // standard event 10
        _this.get('1599205304960_38').on('click', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599205304960_38] execute Event[click] and do Action[1599205304960_38_onClick]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599205304960_38_onClick",
                "cCommand": "1599205304960_38_onClick",
                "bEnum": false,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "mode": "toolbar-primary",
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "loading": false,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "button",
                "size": "small",
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599205304960_38",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "隐藏自动编码",
                "bPrintCaption": true,
                "iTplId": 11582,
                "icon": "",
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "iOrder": 0,
                "key": "Field157634",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "隐藏自动编码",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "c2bd0c0e9085450a996adfd2ced3267d",
                        "action": "d7f501acMobileArchive_1599205304960_38_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599205304960_38'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599205304960_38_onClick', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599205304960_38] addEventListner on [click] event and will do Acttion[1599205304960_38_onClick]!', 'color:teal');



        // standard event 11
        _this.get('new4').on('focus', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new4] execute Event[focus] and do Action[new4_onFocus]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new4_onFocus",
                "cCommand": "new4_onFocus",
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
                "cControlType": "mobile",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new4",
                "cFieldName": "new4",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段4",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 50,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157560",
                "bNeedSum": false,
                "iMaxLength": 50,
                "multiple": false,
                "cShowCaption": "字段4",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "f3be6c355cc14dbea53b57201063663c",
                        "action": "d7f501acMobileArchive_new4_onFocus",
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
                "key": 'new4'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new4_onFocus', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new4] addEventListner on [focus] event and will do Acttion[new4_onFocus]!', 'color:teal');



        // standard event 12
        _this.get('new6').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new6] execute Event[change] and do Action[new6_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new6_onChange",
                "cCommand": "new6_onChange",
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
                "cControlType": "switch",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new6",
                "cFieldName": "new6",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段6",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 5,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157562",
                "bNeedSum": false,
                "iMaxLength": 5,
                "multiple": false,
                "cShowCaption": "字段6",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "9cca692823064d529a9aa1864484a7a2",
                        "action": "d7f501acMobileArchive_new6_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new6'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new6_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new6] addEventListner on [change] event and will do Acttion[new6_onChange]!', 'color:teal');



        // standard event 13
        _this.get('new7').on('cancel', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new7] execute Event[cancel] and do Action[new7_onCancel]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new7_onCancel",
                "cCommand": "new7_onCancel",
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
                "cControlType": "datepicker",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new7",
                "cFieldName": "new7",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段7",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 23,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157563",
                "bNeedSum": false,
                "iMaxLength": 23,
                "multiple": false,
                "cShowCaption": "字段7",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onCancel": [{
                        "scriptId": "911c31bf2972404291e7d0348a35b910",
                        "action": "d7f501acMobileArchive_new7_onCancel",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onCancel"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new7'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new7_onCancel', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new7] addEventListner on [cancel] event and will do Acttion[new7_onCancel]!', 'color:teal');



        // standard event 14
        _this.get('new8').on('changeDate', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new8] execute Event[changeDate] and do Action[new8_onChangeDate]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new8_onChangeDate",
                "cCommand": "new8_onChangeDate",
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
                "cControlType": "timepicker",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new8",
                "cFieldName": "new8",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段8",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 23,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157564",
                "bNeedSum": false,
                "iMaxLength": 23,
                "multiple": false,
                "cShowCaption": "字段8",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChangeDate": [{
                        "scriptId": "a304e93f77f843f0b2e00790ea43f989",
                        "action": "d7f501acMobileArchive_new8_onChangeDate",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChangeDate"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new8'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new8_onChangeDate', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new8] addEventListner on [changeDate] event and will do Acttion[new8_onChangeDate]!', 'color:teal');



        // standard event 15
        _this.get('1599202906735_11').on('focus', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599202906735_11] execute Event[focus] and do Action[1599202906735_11_onFocus]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599202906735_11_onFocus",
                "cCommand": "1599202906735_11_onFocus",
                "bEnum": false,
                "defaultValue": "",
                "prefix": "",
                "iFieldType": 1,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "bPrintUpCase": false,
                "isExport": true,
                "thousands": true,
                "singleLine": true,
                "bEnableFormat": false,
                "cControlType": "inputnumber",
                "splitLine": true,
                "bJointQuery": false,
                "uncopyable": false,
                "cCaption": "数值",
                "min": -2147483648,
                "bHidden": false,
                "disabled": false,
                "key": "Field157625",
                "cSubId": "",
                "bNeedSum": false,
                "subLabel": "",
                "max": 2147483648,
                "scaleValue": 1,
                "suffix": "",
                "iBillTplGroupId": 290667,
                "mode": "normal",
                "singleLineCenter": false,
                "bVmExclude": 0,
                "bCanModify": true,
                "check": true,
                "bExtend": false,
                "bMustSelect": false,
                "iNumPoint": 2,
                "bMain": true,
                "bShowIt": true,
                "cItemName": "1599202906735_11",
                "cFieldName": "",
                "authLevel": 3,
                "maxLength": 18,
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "placeholder": "请输入",
                "iOrder": 0,
                "showExtraLabelIcon": false,
                "cShowCaption": "数值",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onFocus": [{
                        "scriptId": "ce99da41a455485187de219b4e597edf",
                        "action": "d7f501acMobileArchive_1599202906735_11_onFocus",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onFocus"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599202906735_11'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599202906735_11_onFocus', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599202906735_11] addEventListner on [focus] event and will do Acttion[1599202906735_11_onFocus]!', 'color:teal');



        // standard event 16
        _this.get('new12').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new12] execute Event[change] and do Action[new12_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new12_onChange",
                "cCommand": "new12_onChange",
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
                "iNumPoint": 8,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "rate",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new12",
                "cFieldName": "new12",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段12",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 32,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157568",
                "bNeedSum": false,
                "iMaxLength": 32,
                "multiple": false,
                "cShowCaption": "字段12",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "6bd94c13b5c94004a00b8d729313b509",
                        "action": "d7f501acMobileArchive_new12_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new12'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new12_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new12] addEventListner on [change] event and will do Acttion[new12_onChange]!', 'color:teal');



        // standard event 17
        _this.get('sys_intboolean').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [sys_intboolean] execute Event[change] and do Action[sys_intboolean_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "sys_intboolean_onChange",
                "cCommand": "sys_intboolean_onChange",
                "bEnum": true,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "enumArray": "[\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"启用\",\n    \"resid\": null,\n    \"key\": \"1\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"停用\",\n    \"resid\": null,\n    \"key\": \"0\"\n  }\n]",
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "BASEURL": "https://build.yyuap.com/iuap-front",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "optionwidget",
                "iColWidth": 0,
                "bShowIt": true,
                "cEnumType": "sys_intboolean",
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "sys_intboolean",
                "cFieldName": "sys_intboolean",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "启用停用枚举",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 36,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157569",
                "bNeedSum": false,
                "iMaxLength": 36,
                "multiple": false,
                "cShowCaption": "启用停用枚举",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "ff48df9207844a64b6c242033d7d4c08",
                        "action": "d7f501acMobileArchive_sys_intboolean_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "cEnumString": "{\n  \"1\": \"启用\",\n  \"0\": \"停用\"\n}",
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'sys_intboolean'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('sys_intboolean_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [sys_intboolean] addEventListner on [change] event and will do Acttion[sys_intboolean_onChange]!', 'color:teal');



        // standard event 18
        _this.get('1599203124429_20').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599203124429_20] execute Event[change] and do Action[1599203124429_20_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599203124429_20_onChange",
                "cCommand": "1599203124429_20_onChange",
                "bEnum": true,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "mode": "list",
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "enumArray": "[\n  {\n    \"nameType\": null,\n    \"icon\": null,\n    \"value\": \"202006131318056b8ZO5lCzy\",\n    \"resid\": null,\n    \"key\": \"202006131318056b8ZO5lCzy\"\n  },\n  {\n    \"nameType\": null,\n    \"icon\": null,\n    \"value\": \"2020061313180573AWA5oI3C\",\n    \"resid\": null,\n    \"key\": \"2020061313180573AWA5oI3C\"\n  },\n  {\n    \"nameType\": null,\n    \"icon\": null,\n    \"value\": \"202006131318055jUVvUf4t3\",\n    \"resid\": null,\n    \"key\": \"202006131318055jUVvUf4t3\"\n  }\n]",
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "singleLine": false,
                "bExtend": false,
                "bMustSelect": false,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "radio",
                "bShowIt": true,
                "splitLine": true,
                "cEnumType": "xx_1592025488987745",
                "bJointQuery": false,
                "cItemName": "1599203124429_20",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "选项",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "iOrder": 0,
                "key": "Field157627",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "选项",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "8ffd3f0ab4ed4f68a112a0eac6db40d9",
                        "action": "d7f501acMobileArchive_1599203124429_20_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bSelfDefine": false,
                "cEnumString": "{\n  \"202006131318056b8ZO5lCzy\": \"202006131318056b8ZO5lCzy\",\n  \"2020061313180573AWA5oI3C\": \"2020061313180573AWA5oI3C\",\n  \"202006131318055jUVvUf4t3\": \"202006131318055jUVvUf4t3\"\n}",
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599203124429_20'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599203124429_20_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599203124429_20] addEventListner on [change] event and will do Acttion[1599203124429_20_onChange]!', 'color:teal');



        // standard event 19
        _this.get('compareLogic').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [compareLogic] execute Event[change] and do Action[compareLogic_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "compareLogic_onChange",
                "cCommand": "compareLogic_onChange",
                "bEnum": true,
                "iBillTplGroupId": 290667,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "Flex布局",
                "iSystem": 1,
                "enumArray": "[\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"等于\",\n    \"resid\": null,\n    \"key\": \"eq\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"不等于\",\n    \"resid\": null,\n    \"key\": \"neq\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"大于\",\n    \"resid\": null,\n    \"key\": \"gt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"小于\",\n    \"resid\": null,\n    \"key\": \"lt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"大于等于\",\n    \"resid\": null,\n    \"key\": \"egt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"小于等于\",\n    \"resid\": null,\n    \"key\": \"elt\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"区间\",\n    \"resid\": null,\n    \"key\": \"between\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"介于\",\n    \"resid\": null,\n    \"key\": \"like\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"左介于\",\n    \"resid\": null,\n    \"key\": \"leftlike\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"右介于\",\n    \"resid\": null,\n    \"key\": \"rightlike\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"包含\",\n    \"resid\": null,\n    \"key\": \"in\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"不包含\",\n    \"resid\": null,\n    \"key\": \"nin\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"为空\",\n    \"resid\": null,\n    \"key\": \"is_null\"\n  },\n  {\n    \"nameType\": \"text\",\n    \"icon\": null,\n    \"value\": \"非空\",\n    \"resid\": null,\n    \"key\": \"is_not_null\"\n  }\n]",
                "bCanModify": true,
                "cDefaultValue": "",
                "bPrintUpCase": false,
                "BASEURL": "https://build.yyuap.com/iuap-front",
                "isExport": true,
                "singleLine": true,
                "bExtend": false,
                "bMustSelect": true,
                "iNumPoint": 2,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "optionwidget",
                "iColWidth": 0,
                "bShowIt": true,
                "cEnumType": "compareLogic",
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "compareLogic",
                "cFieldName": "compareLogic",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "比较符",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157570",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": true,
                "cShowCaption": "比较符",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "288d1244e8fa41529a327f664eb78820",
                        "action": "d7f501acMobileArchive_compareLogic_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "cEnumString": "{\n  \"eq\": \"等于\",\n  \"neq\": \"不等于\",\n  \"gt\": \"大于\",\n  \"lt\": \"小于\",\n  \"egt\": \"大于等于\",\n  \"elt\": \"小于等于\",\n  \"between\": \"区间\",\n  \"like\": \"介于\",\n  \"leftlike\": \"左介于\",\n  \"rightlike\": \"右介于\",\n  \"in\": \"包含\",\n  \"nin\": \"不包含\",\n  \"is_null\": \"为空\",\n  \"is_not_null\": \"非空\"\n}",
                "bIsNull": true,
                "canMultiple": true
            }, {
                "key": 'compareLogic'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('compareLogic_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [compareLogic] addEventListner on [change] event and will do Acttion[compareLogic_onChange]!', 'color:teal');



        // standard event 20
        _this.get('new15').on('success', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new15] execute Event[success] and do Action[new15_onSuccess]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new15_onSuccess",
                "cCommand": "new15_onSuccess",
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
                "cControlType": "pictureupload",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new15",
                "cFieldName": "new15",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段15",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 200,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157571",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段15",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onSuccess": [{
                        "scriptId": "a0630dc647644d32b6038467c9fa9e2a",
                        "action": "d7f501acMobileArchive_new15_onSuccess",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onSuccess"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new15'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new15_onSuccess', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new15] addEventListner on [success] event and will do Acttion[new15_onSuccess]!', 'color:teal');



        // standard event 21
        _this.get('new16').on('success', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new16] execute Event[success] and do Action[new16_onSuccess]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new16_onSuccess",
                "cCommand": "new16_onSuccess",
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
                "cControlType": "filelist",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new16",
                "cFieldName": "new16",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段16",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 0,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157572",
                "bNeedSum": false,
                "iMaxLength": 200,
                "multiple": false,
                "cShowCaption": "字段16",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onSuccess": [{
                        "scriptId": "96096199d14649ea9e6baed0597ad2fa",
                        "action": "d7f501acMobileArchive_new16_onSuccess",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onSuccess"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new16'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new16_onSuccess', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new16] addEventListner on [success] event and will do Acttion[new16_onSuccess]!', 'color:teal');



        // standard event 22
        _this.get('new17').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [new17] execute Event[change] and do Action[new17_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new17_onChange",
                "cCommand": "new17_onChange",
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
                "cControlType": "inputidentity",
                "iColWidth": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cSourceType": "",
                "cItemName": "new17",
                "cFieldName": "new17",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "字段17",
                "bPrintCaption": true,
                "iTplId": 11582,
                "iFunctionType": 0,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 50,
                "isDeleted": 0,
                "bSplit": false,
                "bHidden": false,
                "disabled": false,
                "placeholder": "",
                "iOrder": 0,
                "key": "Field157573",
                "bNeedSum": false,
                "iMaxLength": 50,
                "multiple": false,
                "cShowCaption": "字段17",
                "bFilter": true,
                "iAlign": 1,
                "_actions": {
                    "onChange": [{
                        "scriptId": "7b387117402a40f8abce14dad0edc765",
                        "action": "d7f501acMobileArchive_new17_onChange",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onChange"
                    }]
                },
                "bFixed": true,
                "bSelfDefine": false,
                "bIsNull": true,
                "canMultiple": false
            }, {
                "key": 'new17'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('new17_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [new17] addEventListner on [change] event and will do Acttion[new17_onChange]!', 'color:teal');



        // standard event 23
        _this.get('1599202859338_8').on('click', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599202859338_8] execute Event[click] and do Action[1599202859338_8_onClick]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599202859338_8_onClick",
                "cCommand": "1599202859338_8_onClick",
                "bEnum": false,
                "showLabel": true,
                "iBillTplGroupId": 111070,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "流式布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "picture",
                "size": "md",
                "borderRadius": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599202859338_8",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "图片",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "GT37133AT593.GT37133AT593.test1111test",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157624",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "图片",
                "bFilter": true,
                "label": "显隐性",
                "url": "",
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "39d722fcfba14eb6a8a6a29a273d2eea",
                        "action": "d7f501acMobileArchive_1599202859338_8_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599202859338_8'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599202859338_8_onClick', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599202859338_8] addEventListner on [click] event and will do Acttion[1599202859338_8_onClick]!', 'color:teal');



        // standard event 24
        _this.get('1599203459569_29').on('click', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [1599203459569_29] execute Event[click] and do Action[1599203459569_29_onClick]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599203459569_29_onClick",
                "cCommand": "1599203459569_29_onClick",
                "bEnum": false,
                "showLabel": true,
                "iBillTplGroupId": 111070,
                "iFieldType": 1,
                "bVmExclude": 0,
                "cTplGroupName": "流式布局",
                "iSystem": 1,
                "bCanModify": true,
                "bPrintUpCase": false,
                "isExport": true,
                "bExtend": false,
                "bMustSelect": true,
                "bMain": true,
                "bEnableFormat": false,
                "cControlType": "picture",
                "size": "md",
                "borderRadius": 0,
                "bShowIt": true,
                "bJointQuery": false,
                "cItemName": "1599203459569_29",
                "cFieldName": "",
                "authLevel": 3,
                "uncopyable": false,
                "cCaption": "图片",
                "bPrintCaption": true,
                "iTplId": 11582,
                "cDataSourceName": "",
                "iMaxShowLen": 255,
                "bSplit": false,
                "bHidden": false,
                "iOrder": 0,
                "key": "Field157629",
                "cSubId": "",
                "bNeedSum": false,
                "cShowCaption": "图片",
                "bFilter": true,
                "label": "alert",
                "url": "",
                "iAlign": 1,
                "_actions": {
                    "onClick": [{
                        "scriptId": "1dd02f57123f41d1b3336a0d4877a290",
                        "action": "d7f501acMobileArchive_1599203459569_29_onClick",
                        "description": "前端函数",
                        "type": "fun",
                        "event": "onClick"
                    }]
                },
                "bSelfDefine": false,
                "bIsNull": true,
                "needClear": false
            }, {
                "key": '1599203459569_29'
            }, {
                params: params
            });
            args.cShowCaption = this._get_data('cShowCaption');
            args.cCaption = this._get_data('cCaption');

            return biz.do('1599203459569_29_onClick', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [1599203459569_29] addEventListner on [click] event and will do Acttion[1599203459569_29_onClick]!', 'color:teal');



        // standard event 25
        _this.get('mActionList').on('click', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[click] and do Action[1599205304960_38_onClick]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "1599205304960_38_onClick",
                "cCommand": "1599205304960_38_onClick",
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
                "iTplId": 11582,
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

            return biz.do('1599205304960_38_onClick', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [click] event and will do Acttion[1599205304960_38_onClick]!', 'color:teal');



        // standard event 26
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
                "iTplId": 11582,
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



        // standard event 27
        _this.get('mActionList').on('change', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[change] and do Action[new1_onChange]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new1_onChange",
                "cCommand": "new1_onChange",
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
                "iTplId": 11582,
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

            return biz.do('new1_onChange', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [change] event and will do Acttion[new1_onChange]!', 'color:teal');



        // standard event 28
        _this.get('mActionList').on('focus', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[focus] and do Action[new4_onFocus]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new4_onFocus",
                "cCommand": "new4_onFocus",
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
                "iTplId": 11582,
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

            return biz.do('new4_onFocus', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [focus] event and will do Acttion[new4_onFocus]!', 'color:teal');



        // standard event 29
        _this.get('mActionList').on('changeDate', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[changeDate] and do Action[new9_onChangeDate]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new9_onChangeDate",
                "cCommand": "new9_onChangeDate",
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
                "iTplId": 11582,
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

            return biz.do('new9_onChangeDate', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [changeDate] event and will do Acttion[new9_onChangeDate]!', 'color:teal');



        // standard event 30
        _this.get('mActionList').on('cancel', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[cancel] and do Action[new7_onCancel]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new7_onCancel",
                "cCommand": "new7_onCancel",
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
                "iTplId": 11582,
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

            return biz.do('new7_onCancel', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [cancel] event and will do Acttion[new7_onCancel]!', 'color:teal');



        // standard event 31
        _this.get('mActionList').on('success', function(params) {
            if (window && window.__debugger) {
                debugger;
            }
            console.info('%c*** AUTO GENERATE SCRIPT RUNNING : [mActionList] execute Event[success] and do Action[new16_onSuccess]', 'color:seagreen');
            let eventArgs = {
                "eventUIMetaType": "commamdEvent"
            };
            var args = cb.utils.extend(true, eventArgs, {
                "cmdParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cParameter": "{\"X_ISFUN\":\"true\",\"X_ISFRONT\":\"true\"}",
                "cAction": "new16_onSuccess",
                "cCommand": "new16_onSuccess",
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
                "iTplId": 11582,
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

            return biz.do('new16_onSuccess', _this, args); //standard event action
        });
        console.info('%c*** AUTO GENERATE SCRIPT ADDEVENTLISTNER : [mActionList] addEventListner on [success] event and will do Acttion[new16_onSuccess]!', 'color:teal');


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
        // if(cb.biz['GT37133AT593'] && cb.biz['GT37133AT593']['GT37133AT593_d7f501acMobileArchive_VM_Extend']){
        //   console.info('%c GT37133AT593_d7f501acMobileArchive_VM_Extend extendjs doAction', 'color:green');
        //   cb.biz['GT37133AT593']['GT37133AT593_d7f501acMobileArchive_VM_Extend'].doAction("init", this);
        // }else{
        //   console.log('%c no extend js' , 'font-size:22pt;color:red');
        // }
        var self = this;
        var extendFile = 'GT37133AT593/GT37133AT593_d7f501acMobileArchive_VM.Extend.js';
        cb.require('', [extendFile], function(extend) {
            if (extend && extend.doAction) {
                console.info('%c GT37133AT593_d7f501acMobileArchive_VM_Extend extendjs doAction', 'color:green');
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
                console.error('%c extendVmName-->GT37133AT593_d7f501acMobileArchive_VM_Extend', 'font-size:12pt;color:#860786')
            }
            self.execute('extendReady', self);
        }, function(error) {
            console.info('%c 未找到  ' + extendFile, 'font-size:12pt;color:#860786');
            console.info('%c extendVmName-->GT37133AT593_d7f501acMobileArchive_VM_Extend', 'font-size:12pt;color:#860786')
            self.execute('extendReady', self);
        });
    };

    return model;
});