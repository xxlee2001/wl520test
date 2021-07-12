package com.yonyou.ucf.mdf;

import com.yonyou.cloud.inotify.client.NotifyStub;
import com.yonyou.cloud.yonscript.filter.J2v8DebugHelperFilter;
import com.yonyou.diwork.config.DiworkEnv;
import com.yonyou.diwork.filter.DiworkRequestListener;
import com.yonyou.iuap.print.client.servlet.PrintDelegateServlet;
import com.yonyou.iuap.ucf.log.filter.MDCLogFilter;
import com.yonyou.iuap.ucf.multilang.runtime.utils.MlRemoteTool;
import com.yonyou.ucf.mdf.domain.util.PropertyUtil;
import com.yonyou.ucf.mdf.interceptor.PrintFilter;
import lombok.SneakyThrows;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.ImportResource;
import org.springframework.scheduling.annotation.EnableAsync;

import java.io.IOException;


/**
 * spring-boot 入口类
 */
@EnableAsync
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, RabbitAutoConfiguration.class})
@ComponentScan(basePackages = {"com.yonyou", "com.yonyoucloud", "com.walsin"},
        excludeFilters = {@ComponentScan.Filter(type = FilterType.REGEX,
                pattern = {"com.yonyoucloud.uretail.*",// "com.yonyou.ucf.mdd.poi.service.POIService",
//                        "com.yonyou.ucf.mdf.app.controller.BillController", "com.yonyou.ucf.mdf.app.controller.BpmController", "com.yonyou.ucf.mdf.app.controller.FileUploadController",
                        "com.yonyou.ucf.mdd.core.file.oss.*", "com.yonyou.ucf.mdd.ext.bill.controller.BillController", "com.yonyou.ucf.mdd.ext.bill.controller.BillPrintController",
                        // "com.yonyou.ucf.mdd.ext.filter.controller.FilterController", "com.yonyou.ucf.mdd.ext.filter.controller.FilterDesignController",
                        // "com.yonyou.ucf.mdd.ext.bpm.controller.BpmController", // 恢复ext的BpmController --yanx于2021/3/24注释
                        "com.yonyou.ucf.mdd.ext.controller.FileUpload",
                        "com.yonyou.ucf.mdd.ext.base.controller.RegionController",
                        "com.yonyou.ucf.mdd.ext.sys.controller.LoginController", "com.yonyou.ucf.mdd.ext.sys.controller.CacheController"
                        , "com.yonyou.ucf.mdd.conf.MddBizDataMybatisConfig"
                        , "com.yonyou.ucf.mdd.ext.aop.AuthServiceContextAop"})})
// 排除MddBizDataMybatisConfig中同名的业务数据源,改用客户端配置的动态数据源(同名同类型的bean只会保留第一个创建) --yanx于2020/5/30注释
@ImportResource(locations = {DiworkEnv.DIWORK_CONFIG_XML,"classpath*:/config/applicationContext*.xml","classpath*:/spring-sub/applicationContext*.xml"})
//@ServletComponentScan
public class MDFApplication extends SpringBootServletInitializer {

    public static void main(String[] args) throws IOException {
        //System.setProperty("mddRpcType", "dubbo");
        ApplicationContext app = SpringApplication.run(MDFApplication.class, args);

        //配置多语缓存 二选一
        //mlCacheConfigRedis(); //TODO 启动多语缓存请打开注释； 并且到此方法下面修改配置
        //mlCacheConfigDataBase();
        MlRemoteTool.init(PropertyUtil.getProperty("spring.profile"));//初始化多语配置
        // 缓存通知配置
        NotifyStub.start();
    }

    @SneakyThrows
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // 注意这里要指向原先用main方法执行的Application启动类
        SpringApplicationBuilder applicationBuilder = builder.sources(MDFApplication.class);

        MlRemoteTool.init(PropertyUtil.getProperty("spring.profile"));//初始化多语配置
        // 缓存通知配置
        NotifyStub.start();
        return applicationBuilder;
    }


    /**
     * 设置redis 缓存
     */
    // 不再需要 --yanx于20/7/30注释
//    private static void mlCacheConfigRedis() {
//        UcfStaticMessageSource messageSource = MddBaseContext.getBean("messageSource", UcfStaticMessageSource.class);
//        if (!ConfigLoader.redisEnable()) {
//            return;
//        }
//        String domainurl = "https://ucfbasedoc.yyuap.com";
//        int index = ConfigLoader.getDefaultDBIndex();
//        Pool pool = PoolFactory.getPool();
//        if (pool instanceof JedisPool) {
//            messageSource.configRedis(PropertyUtil.getProperty("spring.profile"), (JedisPool) pool, domainurl, index);
//        }
//    }

    /**
     * 配置请求上下文拦截器
     */
    @Bean
    public FilterRegistrationBean RequestListener() {
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(new DiworkRequestListener());
        registrationBean.addUrlPatterns("/*");
        registrationBean.addInitParameter("excludedPages",
                "/api/yonscript/,/billstaterule,/graphql,/pub/fileupload/download,/bpm/complete,/bpm/registerInterface,/bpm/,/upd/,/test,/formula/,/tenant/,/mobile/app/");
        return registrationBean;
    }

    //    @Bean
//    public HttpFirewall allowUrlEncodedSlashHttpFirewall() {
//        StrictHttpFirewall firewall = new StrictHttpFirewall();
//        firewall.setAllowUrlEncodedSlash(true);
//        return firewall;
//    }
    @Bean
    public ServletRegistrationBean printServlet() {
        return new ServletRegistrationBean(new PrintDelegateServlet(), "/print/printdelegate");
    }

    @Bean
    public FilterRegistrationBean printFilter() {
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(new PrintFilter());
        registrationBean.addUrlPatterns("/print/printdelegate");
        return registrationBean;
    }

    /**
     * ucf-log 日志接入
     *
     * @return
     */
    @Bean
    public FilterRegistrationBean LogFilter() {
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(new MDCLogFilter());
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }

    /**
     * J2v8 debugHelper
     *
     * @return
     */
    @Bean
    public FilterRegistrationBean debugHelperFilter() {
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(new J2v8DebugHelperFilter());
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }

    // 不再使用hubble --yanx于2020/8/4注释
//    @Bean
//    public FilterRegistrationBean traceListener() {
//        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
//        registrationBean.setFilter(new LogRecordMonitorFilter());
//        registrationBean.addUrlPatterns("/*");
//        return registrationBean;
//    }

}
