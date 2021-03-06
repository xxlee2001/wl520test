package com.yonyou.ucf.mdf;

import com.yonyou.cloud.middleware.rpc.RPCBeanFactory;
import com.yonyou.cloud.middleware.rpc.SpringExecuteTartgetLoader;
import com.yonyou.ucf.mdd.api.interfaces.rpc.*;
import com.yonyou.ucf.mdd.core.meta.MetaDaoDataAccessProxy;
import com.yonyou.ucf.mdd.core.meta.crud.QuerySchemaAllHandlerAdapter;
import com.yonyou.ucf.mdd.core.service.proxy.MddESQuerySchemaService;
import com.yonyou.ucf.mdd.core.service.proxy.MddQuerySchemaServie;
import com.yonyou.ucf.mdf.domain.util.PropertyUtil;
import org.imeta.orm.schema.DataAccessProxy;
import org.imeta.orm.schema.QuerySchemaServiceProxy;
import org.imeta.spring.support.orm.QuerySchemaHandlerAdapter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ResourceBundleMessageSource;

import java.util.ArrayList;
import java.util.List;

@Configuration
@ImportResource(locations = {"classpath*:/config/applicationContext*.xml", "classpath*:/spring-sub/applicationContext-billNumber-service.xml"})
public class SpringConfig {

    @Bean
    public QuerySchemaHandlerAdapter serviceDataFetchHandler(@Qualifier("mddQuerySchemaServie") MddQuerySchemaServie mddQuerySchemaServie) {
        QuerySchemaHandlerAdapter serviceDataFetchHandler = new QuerySchemaHandlerAdapter();
        serviceDataFetchHandler.setProxy(mddQuerySchemaServie);
        return serviceDataFetchHandler;
    }

    @Bean
    public QuerySchemaHandlerAdapter esDataFetchHandler(@Qualifier("mddESQuerySchemaServie") MddESQuerySchemaService mddESQuerySchemaServie) {
        QuerySchemaHandlerAdapter esDataFetchHandler = new QuerySchemaHandlerAdapter();
        esDataFetchHandler.setProxy(mddESQuerySchemaServie);
        return esDataFetchHandler;
    }

    @Bean
    public QuerySchemaAllHandlerAdapter serviceDataFetchAllHandler(@Qualifier("mddQuerySchemaServie") MddQuerySchemaServie mddQuerySchemaServie) {
        QuerySchemaAllHandlerAdapter serviceDataFetchAllHandler = new QuerySchemaAllHandlerAdapter();
        serviceDataFetchAllHandler.setProxy(mddQuerySchemaServie);
        return serviceDataFetchAllHandler;
    }

    @Bean
    public QuerySchemaAllHandlerAdapter esDataFetchAllHandler(@Qualifier("mddESQuerySchemaServie") MddESQuerySchemaService mddESQuerySchemaServie) {
        QuerySchemaAllHandlerAdapter esDataFetchAllHandler = new QuerySchemaAllHandlerAdapter();
        esDataFetchAllHandler.setProxy(mddESQuerySchemaServie);
        return esDataFetchAllHandler;
    }

    @Bean
    public QuerySchemaServiceProxy esQuerySchemaServiceProxy(@Qualifier("mddESQuerySchemaServie") MddESQuerySchemaService mddESQuerySchemaServie) {
        return mddESQuerySchemaServie;
    }

    @Bean
    public QuerySchemaServiceProxy serviceQuerySchemaServiceProxy(@Qualifier("mddQuerySchemaServie") MddQuerySchemaServie mddQuerySchemaServie) {
        return mddQuerySchemaServie;
    }

    @Bean
    public DataAccessProxy localDataAccessProxy() {
        return new MetaDaoDataAccessProxy();
    }

    // ??????messageSource ??????Spring????????????
    // ??????????????????bean, name ??? messageSource??? ?????????com.yonyou.iuap.ucf.multilang.runtime.UcfStaticMessageSource,
    // ??????Spring Boot??????????????????????????????:
    @Bean
    public ResourceBundleMessageSource messageSource() throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        ResourceBundleMessageSource messageSource = (ResourceBundleMessageSource) Class.forName("com.yonyou.iuap.ucf.multilang.runtime.UcfStaticMessageSource").newInstance();
        return messageSource;
    }

    /**
     * ??????IRIS ??????RPC??????
     *
     * @return
     */
    @Bean // TODO ?????????????????????????????????????????????
    public RPCBeanFactory mddServiceRpc() {
        // ?????????
        List <String> serviceFullClassNames = new ArrayList <>();

        // ??????iris????????????
        serviceFullClassNames.add(IComOperateApi.class.getName());
        serviceFullClassNames.add(IComQueryApi.class.getName());
        serviceFullClassNames.add(IRefApi.class.getName());
        serviceFullClassNames.add(IRuleApi.class.getName());
        serviceFullClassNames.add(IUimetaApi.class.getName());
        SpringExecuteTartgetLoader.putBeanCache(IComOperateApi.class, "mddExtComOperateApiService");
        SpringExecuteTartgetLoader.putBeanCache(IComQueryApi.class, "mddExtComQueryApiService");
        SpringExecuteTartgetLoader.putBeanCache(IRefApi.class, "mddExtRefApiService");
        SpringExecuteTartgetLoader.putBeanCache(IRuleApi.class, "mddExtRuleApiService");
        SpringExecuteTartgetLoader.putBeanCache(IUimetaApi.class, "mddExtUimetaApiService");

        String appDomain = PropertyUtil.getProperty("spring.application.name");
        return new RPCBeanFactory(appDomain, "c87e2267-1001-4c70-bb2a-ab41f3b81aa3", serviceFullClassNames);

    }

    //????????????        SpringExecuteTartgetLoader.putBeanCache(ICommonQueryRPCService.class, "mddCommonQueryService");
    //????????????????????????????????????        ???????????????????????????????????????

}
