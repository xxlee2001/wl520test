package com.yonyou.ucf.mdf.tools.tpl;

import org.imeta.spring.tpl.builder.CodeGenerateService;
import org.imeta.spring.tpl.builder.TableBuildService;
import org.junit.Test;
import org.springframework.context.ApplicationContext;

/**
 * 根据 xml 元数据生成业务表的 DDL
 */
public class TableBuildTest {
    @Test
    public void test() throws Exception {
        // 加载元数据，生产环境中只加载一次
        ApplicationContext context = AppLoader.load();
        //如果只想生成某些数据库表，请使用具体组件，使用逗号分割，例如：rm.*,aa.product
        String appNames = "ucf.customer";
        CodeGenerateService service = context.getBean(TableBuildService.class);
        service.build(appNames);
    }
}
