package com.yonyou.ucf.mdf.tools.tpl;

import org.imeta.spring.tpl.builder.CodeGenerateService;
import org.imeta.spring.tpl.builder.DocumentBuildService;
import org.junit.Test;
import org.springframework.context.ApplicationContext;

/**
 * 根据元数据 XML 生成Html 文档
 */
public class DocumentBuildTest {
    //@Test
    public void test() throws Exception {
        // 加载元数据，生产环境中只加载一次
        ApplicationContext context = AppLoader.load();
        //如果只想生成某些文档，请使用具体组件，使用逗号分割，例如：rm.*,aa.product
        String appNames = "bd.staff";
        CodeGenerateService service = context.getBean(DocumentBuildService.class);
        service.build(appNames);
    }
}
