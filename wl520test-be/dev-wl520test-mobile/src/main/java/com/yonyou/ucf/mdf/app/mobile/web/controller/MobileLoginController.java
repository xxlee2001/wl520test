package com.yonyou.ucf.mdf.app.mobile.web.controller;

import com.yonyou.diwork.common.web.DiworkWebUtil;
import com.yonyou.diwork.config.DiworkEnv;
import com.yonyou.diwork.exception.BusinessException;
import com.yonyou.iuap.utils.CookieUtil;
import com.yonyou.ucf.mdd.ext.controller.Authentication;
import com.yonyou.ucf.mdf.app.mobile.module.MobileCrossOriginStrategy;
import com.yonyou.ucf.mdf.app.mobile.module.MobileYhtContextSetupService;
import com.yonyou.ucf.mdf.app.mobile.web.controller.pojo.CommonResponse;
import com.yonyou.workbench.core.DiworkSessionBean;
import com.yonyou.workbench.service.session.ISessionManagerInnerService;
import com.yonyou.workbench.util.YkjConfig;
import com.yonyou.workbench.util.YkjInvocationComponent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import static com.yonyou.workbench.cons.Constants.YHT_ACCESS_TOKEN;

@Authentication(false)
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/mobile/app/")
public class MobileLoginController {

    private static final String OAUTH_VALIDATE_PATH = "/certified/userInfo/";

    private static final Pattern DOMAIN_PATTERN = Pattern
            .compile("[\\w-]+\\.(com.cn|net.cn|gov.cn|org\\.nz|org.cn|com|net|org|gov|cc|biz|info|cn|co)\\b()*");

    private final ISessionManagerInnerService sessionManagerInnerService;

    private final DiworkEnv diworkEnv;

    private final MobileYhtAccessTokenController accessTokenController;

    private final MobileCrossOriginStrategy mobileCrossOriginStrategy;

    @GetMapping(value = "index/code/cookie")
    public CommonResponse doAuth(@CookieValue(required = false,value = "yht_access_token") String yhtAccessTokenFromRequest, HttpServletRequest request, HttpServletResponse response) {

        String code = getCodeFromRequest(request, this.diworkEnv.getParamName(), "code", "usercode");
        mobileCrossOriginStrategy.writeAllowCrossDomainHeaders(request, response);
        if (StringUtils.isBlank(code)) {
            if(StringUtils.isNotBlank(yhtAccessTokenFromRequest)) {
                return CommonResponse.success();
            }else{
                return CommonResponse.failed("code is empty", "MOBILE_ERR_001");
            }
        }

        DiworkSessionBean session;
        try {
            session = genSessionByAuthCode(code);
        } catch (Exception e) {
            return CommonResponse.failed(e.getMessage(), "MOBILE_ERR_003");
        }

        String yhtAccessToken = (String) (session.getExt().get(YHT_ACCESS_TOKEN));

        if(StringUtils.isBlank(yhtAccessToken) && StringUtils.isNotBlank(yhtAccessTokenFromRequest)){
            yhtAccessToken = yhtAccessTokenFromRequest;
        }

        if (StringUtils.isNotBlank(yhtAccessToken)) {
            accessTokenController.doAuth(yhtAccessToken, session.getUserId(), session.getTenantId(), request, response);
            log.info("yhtAccessToken is not blank, try update context of the token");
        }

        try {
            session.setSessionId(genSessionId(request));
            session.setClientIp(DiworkWebUtil.getRemortIP(request));
            session.setSessionExpMin(this.getSessionExtMin(request));
            this.sessionManagerInnerService.createSession(session.getSessionId(), session);
            Cookie cookie = new Cookie("wb_at", session.getSessionId());
            cookie.setHttpOnly(true);
            cookie.setSecure(true);// 加入安全cookie设置
            cookie.setPath("/");
            cookie.setDomain(getBaseDomain(request));
            response.addCookie(cookie);
        } catch (BusinessException var7) {
            log.error("Verifier code fail:", var7);
            return CommonResponse.failed(var7.getMessage(), "MOBILE_ERR_003");
        }
        return CommonResponse.success();
    }


    private DiworkSessionBean genSessionByAuthCode(String code) throws BusinessException {
        DiworkSessionBean session;
        YkjInvocationComponent component = new YkjInvocationComponent();
        YkjConfig config = new YkjConfig();
        config.setSalt(this.diworkEnv.getOAuthSalt());
        config.setToken(this.diworkEnv.getOAuthToken());
        config.setAgent_id(this.diworkEnv.getOAuthAgentId());
        config.setInapiHost(this.diworkEnv.getOAuthInApiHost());
        config.setApiVersion(this.diworkEnv.getOAuthVersion());
        component.setConfig(config);
        Map<String, String> params = new HashMap<>();
        params.put("fromChannel", "uspaceApp");
        String result = component.get(OAUTH_VALIDATE_PATH + code, params);
        JSONObject userInfo = JSONObject.fromObject(result);
        session = new DiworkSessionBean();
        session.setTenantId(userInfo.getString("tenant_id"));
        session.setUserId(userInfo.getString("yht_userid"));
        Map<String, Object> ext = new HashMap<>();
        String isAdmin = userInfo.getString("is_admin");
        ext.put("admin", "1".equals(isAdmin));
        if (userInfo.get("yht_token") != null) {
            ext.put(YHT_ACCESS_TOKEN, userInfo.getString("yht_token"));
        }

        session.setExt(ext);
        return session;
    }

    private Integer getSessionExtMin(HttpServletRequest request) throws BusinessException {
        Integer sessionExtMin = DiworkSessionBean.DEFAULTSESSIONEXPMIN;
        String sessionExtMinStr = request.getHeader("sessionExtMin");
        if (StringUtils.isBlank(sessionExtMinStr)) {
            sessionExtMinStr = request.getParameter("sessionExtMin");
        }

        if (StringUtils.isNotBlank(sessionExtMinStr)) {
            int temp = Integer.parseInt(sessionExtMinStr.trim());
            if (temp >= DiworkSessionBean.MINSESSIONEXPMIN && temp <= DiworkSessionBean.MAXSESSIONEXPMIN) {
                sessionExtMin = temp;
            } else {
                log.error("过期时间不符合要求");
            }
        }

        return sessionExtMin;
    }

    private String genSessionId(HttpServletRequest request) {
        String sessionId = CookieUtil.findCookieValue(request.getCookies(), "wb_at");
        if (StringUtils.isBlank(sessionId)) {
            sessionId = UUID.randomUUID().toString();
        }

        return sessionId;
    }

    private String getCodeFromRequest(HttpServletRequest request, String... possibleName) {
        return Stream.of(possibleName)
                .filter(StringUtils::isNotBlank)
                .map(request::getParameter)
                .filter(Objects::nonNull)
                .findAny()
                .orElse(null);
    }

    public static String getBaseDomain(HttpServletRequest request) {

        String domain = request.getHeader(HttpHeaders.REFERER);

        Enumeration<String> headerNames = request.getHeaderNames();
        StringBuilder builder = new StringBuilder("domain related header: ");
        while (headerNames.hasMoreElements()) {
            String header = headerNames.nextElement();
            builder.append(header).append("=").append(request.getHeader(header)).append(" ");
        }
        log.info(builder.toString());

        if (StringUtils.isBlank(domain)) {
            domain = request.getHeader(HttpHeaders.ORIGIN);
        }
        if (StringUtils.isBlank(domain)) {
            domain = request.getHeader("x-forwarded-host");
        }
        if (StringUtils.isBlank(domain)) {
            domain = request.getHeader("X-Forwarded-Host");
        }
        if (StringUtils.isBlank(domain)) {
            domain = request.getHeader(HttpHeaders.HOST);
        }
        if (StringUtils.isBlank(domain)) {
            domain = request.getServerName();
        }
        if (StringUtils.isBlank(domain)) {
            return null;
        }

        domain = domain.replaceAll("https?://", "");
        Matcher matcher = DOMAIN_PATTERN.matcher(domain);
        if (matcher.find()) {
            domain = matcher.group();
        }
        log.info("request with base domain {}", domain);
        return domain;
    }


}
