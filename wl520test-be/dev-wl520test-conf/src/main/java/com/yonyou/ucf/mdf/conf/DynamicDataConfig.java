package com.yonyou.ucf.mdf.conf;


import com.yonyou.iuap.ucf.dynamicds.ds.DynamicDataSource;
import com.yonyou.iuap.ucf.dynamicds.ds.MutiInsDataSourceProvider;
import com.yonyou.iuap.ucf.dynamicds.schemas.DynamicSchemasProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

/**
 * 配制动态数据源
 *
 * @author yangfeng
 */
@Configuration
public class DynamicDataConfig {

    @Value("${mdd.dynamicDataSource}")
    String dynamicFlag;

    /**
     * 配置动态数据源
     *
     * @return
     */
//    @Bean(name = "dsConfigDataSource")
//    public DataSource getDataSource(DataSource jdbcDataSource) {
//        return jdbcDataSource;
//    }
    //TEST
    @Bean(name = "main_dataSource")
    public DataSource dynamicDataSource(DataSource dsConfigDataSource, MutiInsDataSourceProvider dsProvider, DynamicSchemasProvider dynamicSchemasProvider) {
        //为保证使用DynamicDataSourcePrivate实例的兼容性,这里初始化的实例会根据参数调整
        if ("false".equalsIgnoreCase(dynamicFlag)) {
            return dsConfigDataSource;
        }

        DynamicDataSource dynamicDataSource = new DynamicDataSource();
        Map<Object, Object> map = new HashMap<>();
        map.put("jdbcDataSource", dsConfigDataSource);
        dynamicDataSource.setTargetDataSources(map);
        dynamicDataSource.setDefaultTargetDataSource(dsConfigDataSource);
        dynamicDataSource.setDsProvider(dsProvider);
        return dynamicDataSource;

    }

//    @Bean(name = "mddBizTransactionManager")
//    public DataSourceTransactionManager userTransactionManager(DynamicDataSource dataSource) {
//        return new DataSourceTransactionManager(dataSource);
//    }

    @Bean
    public DynamicSchemasProvider getDynamicSchemasProvider() {
        DynamicSchemasProvider dynamicSchemasProvider = new DynamicSchemasProvider();
        return dynamicSchemasProvider;
    }

    /*@Bean
    public DefaultDataSourceProvider dsProvider() {
        return new DefaultDataSourceProvider();
    }*/

    @Bean
    public MutiInsDataSourceProvider mutiInsDataSourceProvider() {
        MutiInsDataSourceProvider mutiInsDataSourceProvider = new MutiInsDataSourceProvider();
        return mutiInsDataSourceProvider;
    }
}
