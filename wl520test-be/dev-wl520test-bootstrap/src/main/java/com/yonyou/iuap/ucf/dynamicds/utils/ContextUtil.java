package com.yonyou.iuap.ucf.dynamicds.utils;

import com.yonyou.iuap.context.InvocationInfoProxy;
import com.yonyou.ucf.mdd.ext.core.AppContext;
import org.apache.commons.lang3.StringUtils;

/**
 * @Description 覆写动态数据源的ContextUtil工具类
 * @Author yanx
 */
public class ContextUtil {
    public static final String USE_APP_CONTEXT_KEY = "ds.useAppContext";
    public static final String FETCH_SCHEMA = "ds.forceFetchSchemaFromDB";

    public ContextUtil() {
    }

    public static String getTenantid() {// 直接返回AppContext上下文租户(低代码内部不使用0租户)
        String tenantId = AppContext.getTenantId();
        if (StringUtils.isEmpty(tenantId) || "0".equals(tenantId)) {
            tenantId = InvocationInfoProxy.getTenantid();
        }

        return tenantId;
    }

    public static String getSysId() {
        return InvocationInfoProxy.getSysid();
    }

    public static String getBusinessId() {
        return InvocationInfoProxy.getParameter("businessid");
    }

    public static String getDynamicDsFlag() {
        return InvocationInfoProxy.getParameter("dynamicDsFlag");
    }

    public static String getFetchSchemaFlag() {// 缓存取不到租户Schema时读库
        return "true";
    }
}
