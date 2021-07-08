package com.yonyou.ucf.mdf.app.service.impl;


import com.yonyou.ucf.mdd.common.model.uimeta.ui.Action;
import com.yonyou.ucf.mdf.app.exceptions.BusinessException;
import com.yonyou.ucf.mdf.app.service.IBillCommandService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Method;
import java.util.*;

@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class BillCommandServiceImpl implements IBillCommandService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Set<Action> getBillCommands(String billNo) throws BusinessException{
        // 通用命令中对应的单据编号
        String commonBillNo = "mdfsystem";
        List<Map<String,Object>> commonActions = jdbcTemplate.queryForList("select * from bill_command where billnumber = '" + commonBillNo+"'");
        // 各单据个性化命令
        List<Map<String,Object>> customActions = jdbcTemplate.queryForList("select * from bill_command where billnumber = '" + billNo +"'");

        if(null == commonActions) {
            customActions = new ArrayList<>();
        }

        // 去除commonActions中已经在customActions中存在的
        Iterator<Map<String,Object>> customIt = customActions.iterator();
        while(customIt.hasNext()) {
            Map<String,Object> customAction = customIt.next();
            Iterator<Map<String,Object>> commonIt = commonActions.iterator();
            while(commonIt.hasNext()) {
                Map<String,Object> commonAction = commonIt.next();
                if(customAction.get("name").equals(commonAction.get("name")) && customAction.get("action").equals(commonAction.get("action"))) {
                    commonIt.remove();
                    break;
                }
            }
        }

        // 合并customActions和commonActions,并生成Set
        customActions.addAll(commonActions);
        Set<Action> actions = new HashSet<>();
        for(Map<String,Object> actionMap: customActions) {
            Action action = new Action();
            try {
                Method setCommand = action.getClass().getDeclaredMethod("setCommand", String.class);
                setCommand.setAccessible(true);
                setCommand.invoke(action,actionMap.get("name"));

                Method setAction = action.getClass().getDeclaredMethod("setAction", String.class);
                setAction.setAccessible(true);
                setAction.invoke(action,actionMap.get("action"));

                Method setSrvUrl = action.getClass().getDeclaredMethod("setSrvUrl", String.class);
                setSrvUrl.setAccessible(true);
                setSrvUrl.invoke(action,actionMap.get("svcurl"));

                Method setHttpMethod = action.getClass().getDeclaredMethod("setHttpMethod", String.class);
                setHttpMethod.setAccessible(true);
                setHttpMethod.invoke(action,actionMap.get("httpmethod"));

                Method setRuleId = action.getClass().getDeclaredMethod("setRuleId", String.class);
                setRuleId.setAccessible(true);
                setRuleId.invoke(action,actionMap.get("ruleid"));

                Method setTarget = action.getClass().getDeclaredMethod("setTarget", String.class);
                setTarget.setAccessible(true);
                setTarget.invoke(action,actionMap.get("target"));

                Method setcParameter = action.getClass().getDeclaredMethod("setcParameter", String.class);
                setcParameter.setAccessible(true);
                setcParameter.invoke(action,actionMap.get("parameter"));

            } catch (Exception e) {
                log.error("Set value failed");
                throw new BusinessException("Reflect set Action value failed");
            }

            actions.add(action);
        }

        return actions;
    }
}
