package com.yonyou.ucf.mdf.app.util;

import com.yonyou.ucf.mdd.common.constant.MddConstants;
import com.yonyou.ucf.mdd.common.context.MddBaseContext;
import com.yonyou.ucf.mdd.common.dto.BaseReqDto;
import com.yonyou.ucf.mdd.common.enums.OperationTypeEnum;
import com.yonyou.ucf.mdd.common.model.rule.RuleContext;
import com.yonyou.ucf.mdd.common.model.uimeta.UIMetaBaseInfo;
import com.yonyou.ucf.mdd.core.utils.UIMetaHelper;
import com.yonyou.ucf.mdd.ext.core.AppContext;
import com.yonyou.ucf.mdd.ext.model.BillContext;
import com.yonyou.ucf.mdd.ext.util.BillContextUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;

public class RuleEngineUtils {

    public static RuleContext prepareRuleContext(BaseReqDto queryParam, String action) throws Exception {
        RuleContext ruleContext = prepareRuleContext(queryParam);
        OperationTypeEnum operationTypeEnum = OperationTypeEnum.find(action);
        if (null == operationTypeEnum) {
            ruleContext.setOperationTypeEx(action);
        }
        ruleContext.setOperateType(operationTypeEnum);
        return ruleContext;
    }

    public static RuleContext prepareRuleContext(BaseReqDto queryParam, OperationTypeEnum operationTypeEnum) throws Exception {
        RuleContext ruleContext = prepareRuleContext(queryParam);
        ruleContext.setOperateType(operationTypeEnum);
        return ruleContext;
    }

    /**
     * 构造默认的param为key的custommap
     *
     * @param queryParam
     * @return
     * @throws Exception
     */
    public static RuleContext prepareRuleContext(BaseReqDto queryParam) throws Exception {
        RuleContext ruleContext = new RuleContext();
        String billnum = queryParam.getBillnum();
        Object tenantId = queryParam.getTenantId();
        if (null == tenantId || StringUtils.isBlank(tenantId.toString())) {
            tenantId = AppContext.getTenantId();
        }
        BillContext uiMetaBaseInfo = null;
        if (null == billnum) {
            //if (!(queryParam instanceof BaseReqDto)) {
                uiMetaBaseInfo = new BillContext();
            //} else {
            //    throw new MddMsgException("表单编码不能为空", ExceptionSubCode.PARAM_IS_NULL,new String[]{"billnum"});
            //}
        } else {
            uiMetaBaseInfo = ruleContext.getBillContext();
            if(null == uiMetaBaseInfo || StringUtils.isBlank(uiMetaBaseInfo.getBillnum())){
                uiMetaBaseInfo = BillContextUtils.getBillContext(billnum);
            }
        }
        uiMetaBaseInfo.setI18ndoc(true);// 暂时强行设置启用单据多语 --yanx于2020/7/1注释
        uiMetaBaseInfo.setPartitonable(queryParam.isPartitionable());
        ruleContext.setTenantId(tenantId);
        ruleContext.setUserId(AppContext.getUserId());
        ruleContext.setBillContext(uiMetaBaseInfo);
        // 增加打印多语的判断条件
        if(queryParam.isPrint()){
            uiMetaBaseInfo.setI18ndoc(false);
        }

        ruleContext.setParamObj(queryParam);
        prepareParams(ruleContext, null, queryParam);
        String[] ruleLvs = new String[3];
        ruleLvs[0] = "common";
        ruleLvs[1] = uiMetaBaseInfo.getSubid();
        ruleLvs[2] = uiMetaBaseInfo.getBillnum();
        ruleContext.setRuleLvs(ruleLvs);
        ruleContext.setCusMapValue(MddConstants.PARAM_PARAM, queryParam);
        // ruleContext.setRuleListHandler(new RemoteRuleListHandler());
        return ruleContext;
    }

    public static RuleContext prepareRuleContext(BaseReqDto bill, OperationTypeEnum refer, Map<String, Object> params) throws Exception {
        RuleContext ruleContext = prepareRuleContext(bill, refer);
        ruleContext.setCustomMap(params);
        return ruleContext;
    }

    private static void prepareParams(RuleContext ruleContext, String key, Object param) {
        if (StringUtils.isEmpty(key)) {
            key = "ref";
        }
        ruleContext.setCusMapValue(key, param);
    }

}
