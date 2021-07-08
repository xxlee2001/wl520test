package com.yonyou.iuap.billcode.common;

import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import com.yonyou.cloud.utils.CollectionUtils;
import com.yonyou.ucf.mdd.ext.core.AppContext;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 * @Description 覆写编码规则工具类,billnum对照关系扩展
 * @Author yanx
 * @Date 2021/1/12
 */
public class BillCodeMappingConfUtils {
    private static Logger logger = LoggerFactory.getLogger(BillCodeMappingConfUtils.class);
    private static Properties BILL_CODE_MAPPING_PROPERTIES = new Properties();

    public BillCodeMappingConfUtils() {
    }

    public static String getBillCode(String billNum) {
        String mappedBillNum = getMappedBillNumFromDB(billNum);// 优先从数据库中获取映射到的billnum
        if (null != mappedBillNum) {
            return mappedBillNum;
        }

        String new_billNum = "";
        if (null != billNum && billNum.contains("|")) {
            String[] split_billNums = StringUtils.split(billNum, "|", 2);
            String mapping_billNum = BILL_CODE_MAPPING_PROPERTIES.getProperty(split_billNums[0].trim(), split_billNums[0].trim());
            new_billNum = mapping_billNum + "|" + split_billNums[1].trim();
        } else {
            new_billNum = BILL_CODE_MAPPING_PROPERTIES.getProperty(billNum, billNum);
        }

        return new_billNum;
    }

    public static String getMappedBillNumFromDB(String billNum) {
        String mappedBillCodeFromDB = AppContext.getEnvConfig("mapped.billcode.fromdb", "1");// 加入开关控制,默认为打开
        if (!"1".equals(mappedBillCodeFromDB)) {
            return null;
        }

        String key = billNum;
        String targetBillNum = AppContext.getThreadContext(key);
        if ("-1".equals(targetBillNum)) {// 已经查找过targetBillNum但未配置
            return null;
        }
        if (null != targetBillNum) {
            return targetBillNum;
        }

        String sql = "select * from billcode_mapping where billNum = ?";
        JdbcTemplate jdbcTemplate = (JdbcTemplate) AppContext.getBean("pubJdbcTemplate");
        List<Map<String, Object>> mappingInfos = jdbcTemplate.queryForList(sql, new Object[]{billNum});
        if (CollectionUtils.isEmpty(mappingInfos)) {
            AppContext.setThreadContext(key, "-1");
            return null;
        }

        targetBillNum = (String) mappingInfos.get(0).get("target");
        AppContext.setThreadContext(key, targetBillNum);
        AppContext.setThreadContext(targetBillNum, "-1");// 避免目标billNum再查库
        return targetBillNum;
    }

    static {
        InputStream inputStream = BillCodeMappingConfUtils.class.getClassLoader().getResourceAsStream("billCode-mapping.properties");
        if (inputStream != null) {
            try {
                BILL_CODE_MAPPING_PROPERTIES.load(inputStream);
            } catch (Exception var2) {
                logger.error("初始化编码规则映射关系配置发生异常，默认使用表单billNum.异常信息：{}", new Object[]{var2.getMessage(), var2});
            }
        }

    }
}
