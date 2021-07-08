package com.yonyou.ucf.mdf.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yonyou.ucf.mdd.ext.api.IBillService;
import com.yonyou.ucf.mdd.ext.base.BaseController;
import com.yonyou.ucf.mdd.ext.util.Logger;
import com.yonyou.ucf.mdd.ext.util.ResultMessage;
import com.yonyou.ucf.mdd.ext.util.json.GsonHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/print")
public class ExtBillPrintController extends BaseController {
    @Autowired
    private IBillService billService;

    @RequestMapping(value = "/getTemplateContent")//, consumes = {"application/json", "application/x-www-form-urlencoded"}
    public void getTemplateContent(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Map<String, Object> params;
        ObjectMapper mapper = new ObjectMapper();
        String contentType = request.getContentType();
        boolean isJsonReq = false;
        if (null != contentType && contentType.contains(MediaType.APPLICATION_JSON_VALUE)) {
            params = mapper.readValue(request.getInputStream(), Map.class);
            isJsonReq = true;
        } else {
            params = mapper.readValue(request.getParameter("params"), Map.class);
        }
        String billnum = (String) params.get("billno");
        List<Object> ids = (List<Object>) params.get("ids");
        try {
            String jsonRs = billService.getPrintData(billnum, ids, null);
            if (isJsonReq) {
                // 打印data返回json字符串 --yanx于2020/9/8注释
                renderJson(response, ResultMessage.data(jsonRs));
            } else {// FormData调用的场景返回直接数据 --yanx于2020/12/4注释
                renderJson(response, jsonRs);
            }
        } catch (Exception e) {
            Logger.error("获取打印内容失败{}", e.getMessage(), e);
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }

}
