package com.yonyou.ucf.mdf.domain.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

/**
 * @author haomiaosong
 * @date 2019-12-07 09:49
 */
public class PropertyUtil {
    private static final Logger logger = LoggerFactory.getLogger(PropertyUtil.class);
    private static Properties props;

    static {
        loadProps();
    }

    synchronized private static void loadProps() {
        logger.info("开始加载properties文件");
        props = new Properties();
        InputStream in = null;
        try {
            in = PropertyUtil.class.getClassLoader().getResourceAsStream("application.properties");
            props.load(in);
        } catch (FileNotFoundException e) {
            logger.error("文件未找到");
        } catch (IOException e) {
            logger.error("IO异常");
        } finally {
            try {
                if (null != in) {
                    in.close();
                }
            } catch (Exception e2) {
                logger.error("io关闭失败");
            }
        }

        logger.info("加载文件成功");
        logger.info("文件内容" + props);
    }

    public static String getProperty(String key) {
        if (null == props) {
            loadProps();
        }
        return props.getProperty(key);
    }

    public static Map getDefaultParams() {
        if (null == props) {
            loadProps();
        }
        Map<String, Object> result = new HashMap();

        Set<String> keys = props.stringPropertyNames();

        for (String key : keys) {
            if (key.startsWith("param.")) {
                result.put(key.replace("param.", ""), props.get(key));
            }

        }
        return result;

    }

}
