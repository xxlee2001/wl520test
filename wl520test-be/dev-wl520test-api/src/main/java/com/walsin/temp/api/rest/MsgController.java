package com.walsin.temp.api.rest;

import com.alibaba.fastjson.JSONObject;
import com.walsin.temp.api.entity.TodoMessage;
import com.yonyou.cloud.auth.sdk.client.AuthSDKClient;
import com.yonyou.cloud.auth.sdk.client.utils.http.HttpResult;
import com.yonyou.iuap.message.platform.entity.MessageInfoEntity;
import com.yonyou.iuap.message.platform.entity.MessageSendEntity;
import com.yonyou.iuap.message.platform.rpc.IMsgSendService;
import com.yonyou.ucf.mdf.app.common.ResultMessage;
import com.yonyou.ucf.mdf.app.controller.BaseController;
import org.apache.http.client.methods.HttpGet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

/**
 * Author: Cody Chiu
 * Date: 2021/06/24
 */
@RestController
@CrossOrigin
@RequestMapping("/msg")
public class MsgController extends BaseController {
    @Autowired
    IMsgSendService msgService;

    @PostMapping("/send/v1")
    public void sendMsg1(@RequestBody MessageInfoEntity msgEntity, HttpServletRequest request, HttpServletResponse response) {
        Map result = null;

        try {
            result = msgService.sendMessage(msgEntity);
            renderJson(response, ResultMessage.data(result));
        } catch(Exception ex) {
            ex.printStackTrace();
            renderJson(response, ResultMessage.error(ex.getMessage()));
        }
    }

    @PostMapping("/send/v2")
    public void sendMsg2(@RequestBody MessageSendEntity msgEntity, HttpServletRequest request, HttpServletResponse response) {
        Map result = null;

        try {
            result = msgService.sendPlainMessageToUsers(msgEntity.getSysId(), msgEntity.getTenantId(), msgEntity.getReceivers(), msgEntity.getChannels(), msgEntity.getMessageType(), msgEntity.getTitle(), msgEntity.getContent(), msgEntity.getExtParams());
            renderJson(response, ResultMessage.data(result));
        } catch(Exception ex) {
            ex.printStackTrace();
            renderJson(response, ResultMessage.error(ex.getMessage()));
        }
    }

    @PostMapping("/todo/handle")
    public void handleTodo(@RequestBody TodoMessage todo, HttpServletRequest request, HttpServletResponse response) {
        Object result = null;
        try {
            result = msgService.handleCreateTodoMessage(todo.getBusinessKey(), todo.getYyUserId(), todo.getTenantId(), todo.getAppId(),
                    null, null, 1);

            renderJson(response, ResultMessage.data(result));
        } catch (Exception ex) {
            ex.printStackTrace();
            renderJson(response, ResultMessage.error(ex.getMessage()));
        }
    }

    @RequestMapping("/echo")
    public void testInterface(@RequestBody(required = false) Map params, HttpServletRequest request, HttpServletResponse response) {
        JSONObject result = new JSONObject();
        result.put("status", "200");
        result.put("request", params);
        result.put("message", "success");

        renderJson(response, ResultMessage.data(result));
    }

    @PostMapping("/send/demo")
    public void sendDemo(@RequestBody Map params, HttpServletRequest request, HttpServletResponse response) {
        MessageSendEntity msgEntity = new MessageSendEntity();
        msgEntity.setTenantId((String)params.get("tenantId"));
        msgEntity.setSysId((String)params.get("sysId"));
        msgEntity.setReceivers((List)params.get("receivers"));
        msgEntity.setChannels((List)params.get("channels"));
        msgEntity.setTitle((String)params.get("title"));
        msgEntity.setContent((String)params.get("content"));

        Map result;

        try {
            result = msgService.sendPlainMessageToUsers(msgEntity.getSysId(), msgEntity.getTenantId(), msgEntity.getReceivers(), msgEntity.getChannels(), msgEntity.getMessageType(), msgEntity.getTitle(), msgEntity.getContent(), msgEntity.getExtParams());
            renderJson(response, ResultMessage.data(result));
        } catch(Exception ex) {
            ex.printStackTrace();
            renderJson(response, ResultMessage.error(ex.getMessage()));
        }
    }
}
