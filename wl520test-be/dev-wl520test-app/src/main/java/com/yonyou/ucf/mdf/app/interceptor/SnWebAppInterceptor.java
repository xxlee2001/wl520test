package com.yonyou.ucf.mdf.app.interceptor;

import com.yonyou.iuap.context.InvocationInfoProxy;
import com.yonyou.iuap.utils.CookieUtil;
import com.yonyou.metadata.unified.context.UnifiedMDContextHolder;
import com.yonyou.ucf.mdd.common.constant.MddConstants;
import com.yonyou.ucf.mdd.common.context.MddBaseContext;
import com.yonyou.ucf.mdd.common.interfaces.login.ILoginService;
import com.yonyou.ucf.mdf.domain.util.ApplicationContextUtil;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SnWebAppInterceptor implements HandlerInterceptor {

    private final ILoginService loginService = MddBaseContext.getBean(ILoginService.class);

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        MddBaseContext.setThreadContext("userId", InvocationInfoProxy.getUserid());

        //由于历史原因有个别地方获取的是冗余存储key accessToken 和token
        String yhtToken = String.valueOf(InvocationInfoProxy.getParameter("yht_access_token"));
        MddBaseContext.setThreadContext("accessToken", yhtToken);
        MddBaseContext.setThreadContext(MddConstants.PARAM_TOKEN, yhtToken);
        MddBaseContext.setThreadContext(MddConstants.PARAM_TENANT_ID, InvocationInfoProxy.getTenantid());

        //serviceCode
        String serviceCode = request.getParameter(MddConstants.PARAM_SERVICE_CODE);
        MddBaseContext.setThreadContext(MddConstants.PARAM_SERVICE_CODE,serviceCode);
        
        String debugcode = CookieUtil.findCookieValue(request.getCookies(), "debugcode");
        if (StringUtils.isNotBlank(debugcode)) {
        	InvocationInfoProxy.setExtendAttribute("debugcode",debugcode);
        	ApplicationContextUtil.setThreadContext("debugcode", debugcode);
		}

        return true;
    }
}