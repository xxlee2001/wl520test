package com.yonyou.ucf.mdf.interceptor;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.yonyou.iuap.context.InvocationInfoProxy;
import com.yonyou.iuap.ucf.thread.InheritableRunnable;
import com.yonyou.ucf.mdd.common.constant.MddConstants;
import com.yonyou.ucf.mdd.common.context.MddBaseContext;
import com.yonyou.ucf.mdd.common.dto.BaseReqDto;
import com.yonyou.ucf.mdd.common.exceptions.ExceptionSubCode;
import com.yonyou.ucf.mdd.common.exceptions.MddMsgException;
import com.yonyou.ucf.mdd.common.interfaces.context.ISimpleUser;
import com.yonyou.ucf.mdd.common.model.uimeta.BillAction;
import com.yonyou.ucf.mdd.common.model.uimeta.ui.Action;
import com.yonyou.ucf.mdd.common.utils.http.IpUtils;
import com.yonyou.ucf.mdd.common.utils.json.GsonHelper;
import com.yonyou.ucf.mdd.ext.bill.dto.BillDataDto;
import com.yonyou.ucf.mdd.ext.controller.Authentication;
import com.yonyou.ucf.mdd.ext.core.AppContext;
import com.yonyou.ucf.mdd.ext.util.operationlog.OperationLog;
import com.yonyou.ucf.mdd.core.utils.PermissionsUtils;
import com.yonyou.ucf.mdd.uimeta.dto.union.Bill;
import com.yonyou.ucf.mdd.uimeta.dto.union.Command;
import com.yonyou.ucf.mdd.uimeta.util.UIMetaUnionDBRestUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.imeta.spring.support.cache.RedisManager;
import org.imeta.spring.support.db.OrmException;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.util.*;

@Slf4j
@Aspect
@Component
@Order(10)
public class MddControllerAop {

    private static final String ACTIONAUTH = "actionAuth_";
    private static final String ACTION = "mddaction_";
    private static final String SUFFIX_LSIT = "List";

    @Pointcut("execution(* com.yonyou.ucf..*.controller.*.*(..))")
    public void serviceApi() {
    }

    private boolean isEmpty(Object[] array) {
        if(array == null) return false;
        return (array.length == 0);
    }
    @Before("serviceApi()")
    public void beforeController(JoinPoint jp) throws Exception {

        try{
            //根据注解配置默认都进行权限过滤
           Class<?> classTarget=jp.getTarget().getClass();
            String methodName=jp.getSignature().getName();

            Class<?>[] par=((MethodSignature) jp.getSignature()).getParameterTypes();
            Method objMethod=classTarget.getMethod(methodName, par);

            Authentication authentication=objMethod.getAnnotation(Authentication.class);
            if(null==authentication){
                authentication=classTarget.getAnnotation(Authentication.class);
            }
            boolean isAuthentication = true;
            if (authentication != null) {
                isAuthentication = authentication.value();
            }
            if(!isAuthentication) return;

            ISimpleUser user = MddBaseContext.getCurrentUser();
            String action=null;
            HttpServletResponse response=null;
            RequestAttributes ra =null;
            ServletRequestAttributes sra=null;
            HttpServletRequest request=null;
            String billnum=null;
            String url=null;
            String _contextPath=null;
            BillDataDto dto=null;
            if(null==user){
                return;
            }

            ra = RequestContextHolder.getRequestAttributes();
            sra = (ServletRequestAttributes) ra;

            if (null != sra) {
                request = sra.getRequest();
                action = request.getParameter("action");

                if (!isEmpty(jp.getArgs())) {
                    if (jp.getArgs()[0] instanceof BillDataDto) {
                        dto = (BillDataDto) jp.getArgs()[0];
                        if (!StringUtils.isEmpty(action)) {//将url上action收集到dto里
                            dto.setAction(action);
                        }
                    }
                }

                url = request.getRequestURI();
                if (null != request.getServletContext())
                    _contextPath = request.getServletContext().getContextPath();
                billnum = request.getParameter("billnum");
                response = sra.getResponse();
            }
            if(null==url){
                return;
            }
            if(null==response) return;
            if(null==billnum && dto!=null){
                billnum=dto.getBillnum();
            }
            if(StringUtils.isNotBlank(_contextPath)){
                url=url.replaceFirst(_contextPath, "");
            }
            doSendOperationLog(request,billnum,user,url, action);

            // 暂不判断功能权限
//            if(user.isAdmin())return;
//            if(null==billnum){
//                return;
//            }
//
//
//            if(!PermissionsUtils.enableFuncPermission() || PermissionsUtils.skipFuncAop()) return;
//            String authId = findAuthId(billnum, url, action);
//            if(null!=authId && !user.isAdmin() ){ //如果是可视化应用构建设计态预览的场景不需要过滤权限
//                Set<String> holdAuthItems = PermissionsUtils.getFuncAuthCodes(user);
//                if(null==holdAuthItems || (null!=holdAuthItems && !holdAuthItems.contains(authId))){
//                    throw new MddMsgException("权限不足", ExceptionSubCode.NO_PERMISSIONS);
//                }
//            }
        }catch(Exception e){
            log.error("FunctionalPermissionsAop",e);
            throw e;
        }

    }

//    private String findAuthId(String billnumber, String url, String action) throws OrmException {
//        boolean enableRedis = MddBaseContext.redisEnable();
//        String authid = null;
//        String cacheKey = getKey(billnumber, url, action);
//        if(enableRedis){
//            authid= MddBaseContext.getCache().getManager().hget(ACTIONAUTH + MddBaseContext.getTenantId(), cacheKey);
//        }
//
//        if(StringUtils.isBlank(authid)){
//            authid = queryActionAuth(billnumber,url,MddBaseContext.getTenantId());
//            if(enableRedis && StringUtils.isNotBlank(authid))
//                MddBaseContext.getCache().getManager().hset(ACTIONAUTH + MddBaseContext.getTenantId(), cacheKey, authid);
//
//        }
//
//        return authid;
//    }

    private String getKey(Object billnumber, Object url) {
        return getKey(billnumber,url,null);
    }
    private String getKey(Object billnumber, Object url,String action) {
        return billnumber + "#" + url+(null==action?"":"?action="+action);
    }

//    public String queryActionAuth(String billnumber, String url, Object tenantId){
//        Map<String,Object> param = new HashMap<>();
//        param.put(MddConstants.PARAM_TENANT_ID,tenantId);
//        param.put(MddConstants.PARAM_BILL_NUMB,billnumber);
//        param.put("svcurl",url);
//        List<BillAction> list = MddBaseContext.getMapperDao(IUimetaBaseMapperDao.class).getBillActions(param);
//
//        if(list != null && list.size()>0)
//            return list.get(0).getAuthid();
//        return null;
//    }

    private void doSendOperationLog(HttpServletRequest request, String billnum , ISimpleUser user, String url, String action){
        String operationLog_url = MddBaseContext.getEnvConfig("operationLog.url");
        if(null==operationLog_url) return;

        String systemCode = MddBaseContext.getEnvConfig("systemCode");
        String systemName = MddBaseContext.getEnvConfig("systemName");
        String yhtToken = AppContext.getToken();

        //有线程变量需要传递
        Runnable loadTask = new InheritableRunnable() {
            @Override
            public void execute() {
                try {
                    AppContext.setToken(yhtToken);
//                    InvocationInfoProxy.setTenantid(tenantId);
                    InvocationInfoProxy.setToken(yhtToken);
                    String action = findAction(billnum, url);
                    if(null==action) return;//action=url;
                    JSONObject actionJson=JSONObject.parseObject(action);
                    String button = StringUtils.isBlank(actionJson.getString("descriptionResid")) ? actionJson.getString("action") : actionJson.getString("descriptionResid");
                    String billName = StringUtils.isBlank(actionJson.getString("billnameResid")) ? actionJson.getString("billname") : actionJson.getString("billnameResid");
                    OperationLog.send(operationLog_url, button, IpUtils.getIpAddress(request), user.getUserId(), user.getUserName(),user.getTenantId(), request.getParameter("terminalType"),systemCode,systemName,billnum, billName);
                } catch (Exception e) {
                    log.error("OperationLogAop Error: ", e);
                }
            }
        };

        new Thread(loadTask).start();
    }


    public String findAction(String billnumber, String url) throws Exception {
        String tenantId = AppContext.getTenantId();
        RedisManager redisCache = AppContext.cache();
        String authTenantFlag = redisCache.get(ACTION + "flag_" + tenantId + "_" + billnumber);
        if (StringUtils.isBlank(authTenantFlag)) {
            Map<String, Object> param = new HashMap<>();
            param.put(MddConstants.PARAM_TENANT_ID, tenantId);
            param.put("billNo", billnumber);
            param.put("svcurl", url);

            List list = UIMetaUnionDBRestUtil.getListBill(param);
            if (CollectionUtils.isEmpty(list)) {
                return null;
            }

            Map<String, String> actions = new HashMap<>();
            for (Object object : list) {
                Bill bill = GsonHelper.GetJSonBuilder().fromJson(GsonHelper.ToJSon(object), Bill.class);
                List<Command> commands = bill.getActions();
                if (commands == null || commands.isEmpty()) {
                    continue;
                }
                commands.forEach(command -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("billnumber", bill.getcBillNo());
                    map.put("svcurl", command.getcSvcUrl());
                    map.put("action", command.getcAction());

                    map.put("description", command.getDescription());
                    map.put("description_resid", command.getDescription_resid());
                    map.put("billname", bill.getcBillName());
                    map.put("billname_resid", bill.getcBillNameResid());
                    String key = getKey(bill.getcBillNo(), command.getcSvcUrl());
                    actions.put(key, GsonHelper.GetJSonBuilder().toJson(map));
                });
            }

            if (actions.size() > 0) {
                redisCache.hmset(ACTION + tenantId + "_" + billnumber, actions);
            }
            redisCache.set(ACTION + "flag_" + tenantId + "_" + billnumber, "true");
            redisCache.expire(ACTION + "flag_" + AppContext.getTenantId(), 60 * 60 * 4); // 设置过期时间
        }
        String action = redisCache.hget(ACTION + tenantId + "_" + billnumber, getKey(billnumber, url));

        if (StringUtils.isEmpty(action) && !billnumber.endsWith(SUFFIX_LSIT)) {// 继续找相应的列表动作
            return this.findAction(billnumber + SUFFIX_LSIT, url);
        }

        return action;
    }

}
