package com.yonyou.ucf.mdf.app.service.impl;

import com.alibaba.fastjson.JSON;
import com.google.gson.JsonParseException;
import com.google.gson.JsonParser;
import com.yonyou.iuap.context.InvocationInfoProxy;
import com.yonyou.iuap.print.client.business.PrintEntrance;
import com.yonyou.ucf.mdd.common.constant.MddConstants;
import com.yonyou.ucf.mdd.common.context.MddBaseContext;
import com.yonyou.ucf.mdd.common.exceptions.ExceptionSubCode;
import com.yonyou.ucf.mdd.common.exceptions.MddMsgException;
import com.yonyou.ucf.mdd.core.http.HttpsRequest;
import com.yonyou.ucf.mdd.ext.core.AppContext;
import com.yonyou.ucf.mdd.ext.model.BillContext;
import com.yonyou.ucf.mdd.ext.util.BillContextUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service("mddPrintService")
public class MddPrintServiceImpl {

    private static final String GETTEMPLATEBYBOURL = "/template/getTemplatesByTenantIdAndClassifyCode";
    private static final String DOMAIN_NAME = "domainDataBaseByCode";
    private static final String BO_BILLNO = "classifyCode";
    private static final String EXTKEY_BIZDOMAINCODE = "bizDomainCode";

    private static final String DOMAIN_CODE = "spring.domain.name"; // 领域domain名称
    private static final String SERVICE_DOMAIN = "spring.application.name"; // 服务domain名称

    private static final String QUERYBOFORPRINT = "/rest/bomanage/queryBoforprint";
    private static final String QUERYBYCODEWITHBO = "/rest/printTemplate/queryBycodewithBO";
    private static final String QUERYPKBYBO = "/rest/bomanage/querypkbo";


    public List<Map<String, Object>> getTemplateByBo(String billno) throws Exception {
        return getTemplateByBo("", billno);
    }

    /**
     * 通过业务对象获取所有的模版
     *
     * @param billno
     * @return
     */
    @SuppressWarnings("unchecked")
    public List<Map<String, Object>> getTemplateByBo(String appCode, String billno) throws Exception {
        String tenantId = AppContext.getTenantId();// 删除了部分逻辑TODO:可能有问题
        // 调用打印接口获取数据
        Map<String, String> params = new HashMap<>();
        Map<String, String> headers = new HashMap<>();
        // String domainDataBaseByCode = "DEV";
//        String domainDataBaseByCode = MddBaseContext.getEnvConfig(DOMAIN_CODE);
        // String classifyCode = null;
        String classifyCode = "";
        BillContext billContext = BillContextUtils.getBillContext(billno);
//        UIMetaHelper.getUIMetaBaseInfo(billno, MddBaseContext.getTenantId());
        Map extProps = billContext.getExtProps();
        String bizDomainCode = AppContext.getEnvConfig(DOMAIN_CODE);// 支持元数据携带业务类型 --yanx于2020/6/11注释
        if (null != extProps && extProps.containsKey(EXTKEY_BIZDOMAINCODE)) {
            bizDomainCode = (String) extProps.get(EXTKEY_BIZDOMAINCODE);
        }

        if (StringUtils.isEmpty(appCode)) {
            appCode = billContext.getSubid();
        }
        classifyCode = appCode + "." + billno;
        /*if (null == billno || !billno.contains(".")) {
            log.error("传入的参数为空或者参数未包含领域信息");
            throw new MddMsgException("传入的参数为空或者参数未包含领域信息", ExceptionSubCode.DATA_IS_NULL);
        } else {
            String[] paramString = billno.split("\\.");
            domainDataBaseByCode = paramString[0];
            domainDataBaseByCode = "DEV";
            classifyCode = billno;
        }*/
        headers.put(DOMAIN_NAME, bizDomainCode);
        params.put(BO_BILLNO, classifyCode);
        params.put(MddConstants.PARAM_TENANT_ID, tenantId);
        String resultStr = PrintEntrance.doRequest("get", GETTEMPLATEBYBOURL, params, headers);
        if (isGoodJson(resultStr)) {
            Map<String, Object> resultMap = JSON.parseObject(resultStr, Map.class);
            Object resultStatus = resultMap.get("status");
            Object tempResult = resultMap.get("templates");
            if (null != resultStatus && 1 == Integer.parseInt(resultStatus.toString()) && isGoodJson(tempResult.toString())) {
                List<Map<String, Object>> temps = (List<Map<String, Object>>) tempResult;
                List<Map<String, Object>> resultTemps = new ArrayList<Map<String, Object>>();
                for (Map<String, Object> temp : temps) {
                    Map<String, Object> map = new HashMap<String, Object>();
                    map.put("pk_print_template", temp.get("id"));
                    map.put("templatecode", temp.get("code"));
                    map.put("templatename", temp.get("name"));
                    map.put("isdefault", temp.get("isDefault"));
                    map.put(EXTKEY_BIZDOMAINCODE, bizDomainCode);// 业务域返回
                    resultTemps.add(map);
                }
                return resultTemps;
            } else {
                throw new MddMsgException("通过租户获取模版失败", ExceptionSubCode.BILL_TPL_NULL);
            }
        } else {
            throw new MddMsgException("通过租户获取模版失败", ExceptionSubCode.BILL_TPL_NULL);
        }
    }

    /**
     * 判断字符串是否是正确的json串
     *
     * @param json
     * @return
     */
    private boolean isGoodJson(String json) {
        if (StringUtils.isBlank(json))
            return false;
        try {
            new JsonParser().parse(json);
            return true;
        } catch (JsonParseException e) {
            return false;
        }
    }



    /**
     * @Author zhanghbs
     * @Description //获取打印get的基础url
     * @Date 2020/3/18 16:04
     * @Param * @param ：
     * @Return java.lang.String
     **/
    private String getGetBaseUrl() throws Exception {
        String locale = getUserLocale();
        String printBaseUrl = getPropertyByKey("printBaseUrl") + "/print/doget?print_token=" + getPropertyByKey("print_token") + "&lang=" + locale;
        return printBaseUrl;
    }

    /**
     * @Author zhanghbs
     * @Description //配置文件获取属性
     * @Date 2020/3/18 16:04
     * @Param * @param ： key
     * @Return java.lang.StringgetGetBaseUrl
     **/
    private String getPropertyByKey(String key) throws Exception {
        return MddBaseContext.getEnvConfig(key);
        /* return ApplicationContextUtil.getAppConfig().getProperty(key);*/
    }

    /**
     * @Author zhanghbs
     * @Description //获取当前用户的语种
     * @Date 2020/3/18 16:06
     * @Param * @param ：
     * @Return java.lang.String
     **/
    private static String getUserLocale() throws Exception {
        String locale = InvocationInfoProxy.getLocale();
        return locale;
    }

    /**
     * @param ： tenantId
     * @Author zhanghbs
     * @Description //通过租户获取BO来源
     * @Date 2020/3/18 16:27
     * @Param * @param ： billno
     * @Return java.lang.String
     **/
    private String queryPkByBo(String billno, String tenantId) throws Exception {
        HttpsRequest request = new HttpsRequest();
        String url = getGetBaseUrl() + "&url=" + QUERYPKBYBO + "&tenantId=" + tenantId + "&bocode=" + billno;
        log.info("[BillPrintService] queryPkByBo 请求URL===" + url);
        String resultStr = request.sendGet(url);
        log.info("[BillPrintService] queryPkByBo 返回resultStr===" + resultStr);
        if (isGoodJson(resultStr)) {
            Map<String, Object> map = JSON.parseObject(resultStr, Map.class);
            if (map.get("status") != null && Integer.parseInt(map.get("status").toString()) == 1 && map.get("data") != null) {
                return map.get("data").toString();
            }
        }
        return null;
    }

}
