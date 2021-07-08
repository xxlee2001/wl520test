package com.yonyou.ucf.mdf.security.xss;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Filter;

@Configuration
public class ParamFilterConfig {

    /**
     * 创建一个bean
     * @return
     */
//    @Bean(name = "requestParamFilter")
//    public Filter RequestParamFilter() {
//        return new RequestParamFilter();
//    }
//
//    @Bean
//    public FilterRegistrationBean filterRegistrationBean() {
//        FilterRegistrationBean registration = new FilterRegistrationBean();
//        registration.setFilter(RequestParamFilter());
//        registration.addUrlPatterns("/*");
//        registration.addInitParameter("paramName", "paramValue");
//        registration.setName("requestParamFilter");
//        return registration;
//    }



}
