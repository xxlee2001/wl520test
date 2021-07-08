package com.yonyou.ucf.mdf.app.mobile.web.controller;

import com.alibaba.fastjson.JSON;
import com.yonyou.ucf.mdd.ext.controller.Authentication;
import com.yonyou.ucf.mdd.ext.core.AppContext;
import com.yonyou.ucf.mdf.app.mobile.web.controller.pojo.CommonResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.imeta.spring.support.cache.RedisManager;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * 本类主要用于支持移动端微信预览,传输web端token到移动端
 *
 * @author liuhaoi
 * @since Created At 2020/7/14 11:41 上午
 */
@Authentication(false)
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/mobile/app/preview/wechat")
public class MobileWeChatPreviewController {

    private static final String YHT_TOKEN_KEY = "yht_access_token";
    private static final String DIWORK_TOKEN_KEY = "wb_at";
    private static final String DIWORK_TOKEN_AT = "at";
    private static final String DIWORK_UNAME = "yonyou_uname";
    private static final String DIWORK_UID = "yonyou_uid";
    private static final String CACHE_KEY_PATTERN = "YONBUILDER:MOBILE:PREVIEW:WECHAT:%s";

    private static final int CACHE_EXPIRE_SECONDS = 60 * 60 * 8;

    @PostMapping("qrcode/hash")
    public CommonResponse genHash(@CookieValue(YHT_TOKEN_KEY) String yhtAccessToken,
                                  @CookieValue(DIWORK_TOKEN_KEY) String webAccessToken,
                                  @CookieValue(value = DIWORK_TOKEN_AT, required = false) String at,
                                  @CookieValue(value = DIWORK_UNAME, required = false) String uname,
                                  @CookieValue(value = DIWORK_UID, required = false) String uid,
                                  @RequestBody HashRequest request) {

        String hash = RandomStringUtils.randomAlphanumeric(8);

        Map<String, String> value = new HashMap<>();
        value.put(YHT_TOKEN_KEY, yhtAccessToken);
        value.put(DIWORK_TOKEN_KEY, webAccessToken);
        value.put(DIWORK_TOKEN_AT, at);
        value.put(DIWORK_UNAME, uname);
        value.put(DIWORK_UID, uid);

        CacheBody body = new CacheBody();
        body.setCookies(value);
        body.setUrl(request.getUrl());

        RedisManager cache = AppContext.cache();
        cache.set(buildCacheKey(hash), JSON.toJSONString(body), CACHE_EXPIRE_SECONDS);

        return CommonResponse.success(new HashResponse(hash));
    }

    private String buildCacheKey(String hash) {
        return String.format(CACHE_KEY_PATTERN, hash);
    }

    @GetMapping("/auth/cookie")
    public CommonResponse writeAuthCookie(@RequestParam String hash, HttpServletRequest request, HttpServletResponse response) {

        RedisManager cache = AppContext.cache();
        String value = cache.get(buildCacheKey(hash));
        if (StringUtils.isBlank(value)) {
            return CommonResponse.failed("hash not exists or expired(Survive for " + CACHE_EXPIRE_SECONDS + " second)", "40001");
        }
        CacheBody result = JSON.parseObject(value, CacheBody.class);
        result.setDomain(MobileLoginController.getBaseDomain(request));

        return CommonResponse.success(result);
    }

    @NoArgsConstructor
    @Data
    public static class CacheBody {
        private Map<String, String> cookies;
        private String url;
        private String domain;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class HashRequest {
        private String url;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class HashResponse {
        private String hash;
    }


}
