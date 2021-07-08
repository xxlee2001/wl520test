package com.yonyou.ucf.mdf.app.rule;

import com.yonyou.ucf.mdd.ext.bill.service.IExtSubmitRuleBefore;
import com.yonyou.ucf.mdd.ext.model.BillContext;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.imeta.orm.base.BizObject;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 本类主要用于发起流程前事件
 */
@Slf4j
@Primary
@Component("ExtSubmitRuleBefore")
public class ExtSubmitRuleBefore implements IExtSubmitRuleBefore {

    private static final String REFCODE_BD_BILLTYPEREF = "bd_billtyperef";
    private static final String FIELD_BILLTYPE_FORMID = "billtype_id.form_id";


    @Override
    public List<BizObject> handleDataBeforeSubmit(BillContext billContext, List<BizObject> bills) throws Exception {
        if (CollectionUtils.isEmpty(bills) || !billContext.isSupportBpm()) {
            return bills;
        }

        String cardKey = billContext.getCardKey();
        String billNo = billContext.getBillnum();
        if (StringUtils.isNotEmpty(cardKey)) {
            billNo = cardKey;
        }

        for (BizObject bill : bills) {
            bill.set("isWfControlled", true);// 低代码强行设置为WfControlled
//            String billTypeId = bill.get("billTypeId");
            if (!bill.containsKey("mobileBillNo")) {
                bill.put("mobileBillNo", billNo + "MobileArchive");
            }
            if (!bill.containsKey("mobileBillType")) {
                bill.put("mobileBillType", "yyarchive");
            }
        }

        return bills;
    }


    @Override
    public List<BizObject> handleDataBeforeAudit(BillContext billContext, List<BizObject> bills) throws Exception {
        if (CollectionUtils.isEmpty(bills) || !billContext.isSupportBpm()) {
            return bills;
        }

        for (BizObject bill : bills) {
            bill.set("isWfControlled", true);// 低代码强行设置为WfControlled
        }

        return bills;
    }
}
