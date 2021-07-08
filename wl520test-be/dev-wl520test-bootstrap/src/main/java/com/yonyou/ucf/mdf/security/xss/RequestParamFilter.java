package com.yonyou.ucf.mdf.security.xss;

import org.apache.commons.lang3.StringUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RequestParamFilter implements Filter {

    private List<String> excludedPages = new ArrayList<>();

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        String excludedPages = filterConfig.getInitParameter("excludedPages");
        if (StringUtils.isNotEmpty(excludedPages)) {
            this.excludedPages.addAll(Arrays.asList(excludedPages.split(",")));
        }
    }

    @Override
    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        if (inExcludedPage(servletRequest)) {
            filterChain.doFilter(servletRequest, servletResponse);
        }
        filterChain.doFilter(new HttpServletRequestParamWrapper((HttpServletRequest) servletRequest), servletResponse);
    }

    private boolean inExcludedPage(ServletRequest servletRequest) {
        HttpServletRequest httpReq = (HttpServletRequest) servletRequest;
        for (String excludedPage : excludedPages) {
            if (httpReq.getRequestURI().contains(excludedPage)) {
                return true;
            }
        }
        return false;
    }
}
