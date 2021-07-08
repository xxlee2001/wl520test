// package com.yonyou.ucf.mdf.app.controller;


// import com.yonyou.iuap.context.InvocationInfoProxy;
// import com.yonyou.iuap.ucf.dynamicds.ds.DynamicDataSource;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.jdbc.datasource.DataSourceUtils;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RestController;

// import javax.servlet.http.HttpServletRequest;
// import java.sql.Connection;
// import java.sql.PreparedStatement;
// import java.sql.SQLException;
// import java.util.HashMap;
// import java.util.Map;

// /**
//  * 动态建立租户表
//  */
// @RestController
// @RequestMapping(value = "/tenant")
// public class DynamicCreateTable {
//     private static Logger log = LoggerFactory.getLogger(DynamicCreateTable.class);

//     @Autowired
//     private DynamicDataSource dynamicDataSourcePrivate;

//     @RequestMapping(value = "/createTable", method = RequestMethod.POST)
//     public Object init(HttpServletRequest request, @RequestBody Map<String, Object> params) {
//         String tenantId = (String) params.get("tenantId");
//         String sql = (String) params.get("sql");
// //        log.info("租户信息 tenantId：" + tenantId + ", 建表语句sql: " + sql);

//         Connection connection = null;
//         PreparedStatement executor = null;
//         try {
//             // 设置租户ID的上下文
//             InvocationInfoProxy.setTenantid(tenantId);
//             // 执行建表
//             connection = DataSourceUtils.getConnection(dynamicDataSourcePrivate);
//             executor = connection.prepareStatement(sql);
//             executor.execute();

//             Map<String, Object> result = new HashMap<String, Object>();
//             result.put("status", 1);
//             result.put("msg", "建表成功");
//             return result;
//         } catch (Exception e) {
//             String errMsg = "业务数据表创建失败: " + e.getMessage();
//             log.error(errMsg, e);
//             Map<String, Object> result = new HashMap<>();
//             result.put("status", 0);
//             result.put("msg", errMsg);
//             return result;
//         } finally {
//             if (executor != null) {
//                 try {
//                     executor.close();
//                 } catch (SQLException e) {
//                     log.error("exception when try to close prepare statement in finally block", e);
//                 }
//             }
//             // 归还数据库连接
//             DataSourceUtils.releaseConnection(connection, dynamicDataSourcePrivate);

//         }
//     }
// }
