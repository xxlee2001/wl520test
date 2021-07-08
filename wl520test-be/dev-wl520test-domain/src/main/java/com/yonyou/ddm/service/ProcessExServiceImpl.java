package com.yonyou.ddm.service;

import com.yonyou.ucf.mdd.ext.bpm.service.IProcessExService;
import com.yonyou.ucf.mdd.ext.model.BillContext;
import com.yonyou.ucf.mdd.ext.util.DomainUtils;
import org.springframework.stereotype.Service;

@Service("ddmProcessExService")
public class ProcessExServiceImpl implements IProcessExService {

    /**
     * @Description 应用构建的单据类型格式为 domain.billNum，覆盖ext的ProcessService相关逻辑
     * @Author yanx
     * @Date 2020/9/2
     */
    @Override
    public String getBillTypeId(String subId, String billNum, BillContext billContext) throws Exception {
        String group = null == billContext.getDomain() ? DomainUtils.getAppName() : billContext.getDomain();
        return group + "." + billNum;
    }
}
