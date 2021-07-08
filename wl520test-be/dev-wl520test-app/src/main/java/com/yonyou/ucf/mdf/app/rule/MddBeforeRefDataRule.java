package com.yonyou.ucf.mdf.app.rule;

import com.yonyou.ucf.mdd.common.dto.BaseReqDto;
import com.yonyou.ucf.mdd.common.model.rule.RuleContext;
import com.yonyou.ucf.mdd.common.model.rule.RuleExecuteResult;
import com.yonyou.ucf.mdd.common.model.uimeta.UIMetaBaseInfo;
import com.yonyou.ucf.mdd.common.model.uimeta.filter.vo.FilterCommonVO;
import com.yonyou.ucf.mdd.common.model.uimeta.filter.vo.FilterVO;
import com.yonyou.ucf.mdd.ext.bill.dto.BillDataDto;
import com.yonyou.ucf.mdd.rule.base.AbstractRule;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import yonyou.bpm.rest.utils.StringUtils;

/**
 * 本类主要用于交易类型参照过滤条件
 */
@Slf4j
@Primary
@NoArgsConstructor
@Component("MddBeforeRefDataRule")
public class MddBeforeRefDataRule extends AbstractRule {

    private static final String REFCODE_BD_BILLTYPEREF = "bd_billtyperef";
    private static final String FIELD_BILLTYPE_FORMID = "billtype_id.form_id";

    @Override
    public <T> RuleExecuteResult execute(RuleContext ruleContext, T... tObjs) throws Exception {
        UIMetaBaseInfo uiMetaBaseInfo = ruleContext.getUiMetaBaseInfo();
        BillDataDto refDataReqParam =  ruleContext.getParamObj();
        String domain;
        String refCode = refDataReqParam.getRefCode();
        if (refCode.indexOf(".") > 0) {
            String[] arr = refCode.split("\\.");
            domain = arr[0];
            refCode = arr[1];
        }
        if (REFCODE_BD_BILLTYPEREF.equals(refCode)) {// 预设交易类型按单据类型过滤 --yanx于2020/7/1注释
            prepareBillTypeCondition(ruleContext, uiMetaBaseInfo, refDataReqParam);
        }

        return new RuleExecuteResult();
    }

    private void prepareBillTypeCondition(RuleContext ruleContext, UIMetaBaseInfo uiMetaBaseInfo, BillDataDto refDataReqParam) {
        String billNum = uiMetaBaseInfo.getBillnum();
        String billTypeFormId = uiMetaBaseInfo.getDomain() + "." + billNum;
        if (StringUtils.isNotEmpty(billNum)) {
            FilterVO condition = refDataReqParam.getCondition();
            if (null == condition) {
                condition = new FilterVO();
                refDataReqParam.setCondition(condition);
                FilterCommonVO[] commonVOs = condition.getCommonVOs();
                if (null == commonVOs) {
                    commonVOs = new FilterCommonVO[1];
                    FilterCommonVO filterCommonVO = new FilterCommonVO();
                    commonVOs[0] = filterCommonVO;
                    condition.setCommonVOs(commonVOs);

                    filterCommonVO.setItemName(FIELD_BILLTYPE_FORMID);
                    filterCommonVO.setValue1(billTypeFormId);
                }
            }
        }
    }
}
