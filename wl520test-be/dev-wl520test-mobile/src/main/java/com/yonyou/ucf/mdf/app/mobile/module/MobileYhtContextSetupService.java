package com.yonyou.ucf.mdf.app.mobile.module;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.yonyou.diwork.exception.BusinessException;
import com.yonyou.diwork.exception.DiworkRuntimeException;
import com.yonyou.diwork.multilingual.service.ILanguageService;
import com.yonyou.diwork.service.pub.ITenantUserService;
import com.yonyou.iuap.bd.common.exception.BaseDocException;
import com.yonyou.iuap.data.service.itf.TenantStatusApi;
import com.yonyou.iuap.org.dto.TenantMultiOrgInfo;
import com.yonyou.iuap.tenant.status.entity.bo.TenantStatus;
import com.yonyou.workbench.cons.Constants;
import com.yonyou.workbench.dto.OptionsDTO;
import com.yonyou.workbench.util.SDKResultUtils;
import com.yonyou.yht.sdk.UserCenter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@RequiredArgsConstructor
@Service
@Slf4j
public class MobileYhtContextSetupService {

    private final ITenantUserService userService;

    private final TenantStatusApi tenantStatusApi;

    private final ILanguageService languageService;

    public Map<String, Object> buildYhtAccessTokenContext(String tenantId, String userId, Locale locale) {
        Map<String, Object> map = new HashMap<>();
        //租户ID
        map.put("tenantId", tenantId);
        //当前系统
        map.put("syscode", "U8C3");
        //设置业务日期
        map.put("businessDate", null);

        fillUserOptions(tenantId, userId, locale, map);
        fillOrgInfo(tenantId, map);

        //产品线
        map.put(Constants.PRODUCT_LINE, "diwork");
        map.put("multilist", JSONObject.toJSONString(languageService.findAllEnable(tenantId)));

        return map;
    }

    public String syncYhtAccessTokenContextInfo(String yhtAccessToken, Map<String, Object> context) {

        String token = yhtAccessToken;
        //移除已经设置过上下文的token后缀
        if (yhtAccessToken.contains("__")) {
            token = yhtAccessToken.split("__")[0];
        }

        String syncResult = UserCenter.setUserCurrentTenant(token, context);
        if (SDKResultUtils.getData(syncResult).isSuccess()) {
            return parseVersionToken(syncResult, token);
        }
        String errorMessage = String
                .format("setUserCurrentTenant error!! origin token: %s, token:%s,values:%s,result:%s", yhtAccessToken, token, JSON.toJSONString(context), syncResult);
        log.error(errorMessage);
        throw new DiworkRuntimeException("友户通服务异常", new RuntimeException(errorMessage));
    }

    private String parseVersionToken(String setTenantResult, String yhtAccessToken) {
        String versionToken = null;
        try {
            versionToken = JSON.parseObject(setTenantResult).getString("version");
        } catch (Exception e) {
            log.warn("exception when get version token", e);
        }
        if (StringUtils.isNotBlank(versionToken)) {
            return versionToken;
        }
        return yhtAccessToken;
    }

    private void fillOrgInfo(String tenantId, Map<String, Object> map) {
        try {
            TenantMultiOrgInfo multiOrgInfo = tenantStatusApi.getTenantMultiOrgInfo(tenantId, Constants.SYSCODE);
            if (multiOrgInfo != null && StringUtils.isNotBlank(multiOrgInfo.getType())) {
                if (TenantStatus.TENANT_STATUS_SINGLE.equals(multiOrgInfo.getType())) {
                    map.put("orgId", multiOrgInfo.getSingleOrgId());
                }
            }
        } catch (BaseDocException e) {
            log.error(e.getMessage(), e);
            throw new DiworkRuntimeException("查询组织信息失败:" + e.getMessage());
        } catch (BusinessException e) {
            log.error(e.getMessage(), e);
            throw new DiworkRuntimeException(e.getMessage());
        }
    }

    private void fillUserOptions(String tenantId, String userId, Locale locale, Map<String, Object> map) {
        OptionsDTO userOptions = userService.getUserOptions(tenantId, userId);
        //当前语种
        if (locale != null) {
            map.put("locale", locale);
        } else {
            map.put("locale", userOptions.getLocale());
        }
        //时区
        map.put("timezone", userOptions.getTimezone());
        //date
        map.put("dataformat", userOptions.getDataformat());
    }

}
