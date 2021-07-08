package com.yonyou.ucf.mdf.domain.context;


import com.yonyou.ucf.mdd.common.model.rule.RuleContext;

import java.util.Map;

public interface ContextProcesserItf {

//    public Map<String,Object> processContext(RuleContext ruleContext) throws Exception;

    public void processResult(RuleContext ruleContext, Map<String, Object> map) throws Exception;

}
