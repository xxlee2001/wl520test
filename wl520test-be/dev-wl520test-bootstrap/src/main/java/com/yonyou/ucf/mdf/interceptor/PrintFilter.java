package com.yonyou.ucf.mdf.interceptor;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import com.yonyou.ucf.mdd.ext.util.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.yonyou.diwork.service.pub.ITenantUserService;
import com.yonyou.iuap.context.InvocationInfoProxy;
import com.yonyou.workbench.model.TenantVO;
import com.yonyou.workbench.model.UserVO;

public class PrintFilter implements Filter {
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		
		try {
			WebApplicationContext applicationContext = WebApplicationContextUtils.getRequiredWebApplicationContext(request.getServletContext());
			ITenantUserService iTenantUserService = applicationContext.getBean(ITenantUserService.class);
			
			UserVO userVO = iTenantUserService.getUserByUserId(InvocationInfoProxy.getUserid());
			InvocationInfoProxy.setUsername(userVO.getUserName());
			TenantVO tenantVO = iTenantUserService.getTenant(InvocationInfoProxy.getTenantid());
			InvocationInfoProxy.setExtendAttribute("tenantName", tenantVO.getTenantName());
		} catch (Exception e) {
			Logger.error("PrintFilter异常: ", e);
		} finally {
			chain.doFilter(request, response);
		}
	}

}
