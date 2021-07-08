package com.yonyou.ucf.mdf.tools.tpl;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AppLoader {
    public static ApplicationContext load() throws Exception {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext4test.xml");
        return context;
    }
}
