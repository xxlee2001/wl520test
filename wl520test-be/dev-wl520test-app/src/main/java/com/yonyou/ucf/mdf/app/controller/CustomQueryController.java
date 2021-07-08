package com.yonyou.ucf.mdf.app.controller;

import java.util.List;
import java.util.Map;

import com.yonyou.cloud.hpapaas.yonql.domain.DbType;
import com.yonyou.cloud.hpapaas.yonql.query.YonQLActionFactory;
import com.yonyou.cloud.hpapaas.yonql.query.YonQLResult;
import com.yonyou.iuap.context.InvocationInfoProxy;
import com.yonyou.ucf.mdd.common.dto.BaseReqDto;
import com.yonyou.ucf.mdd.common.model.uimeta.UIMetaBaseInfo;
import com.yonyou.ucf.mdd.core.utils.BizObjUtils;
import com.yonyou.ucf.mdd.core.utils.UIMetaHelper;
import com.yonyou.ucf.mdd.ext.dao.meta.MetaDaoHelper;
import com.yonyou.ucf.mdd.ext.model.BillContext;
import com.yonyou.ucf.mdd.ext.util.BillContextUtils;
import com.yonyou.ucf.mdf.app.common.ResultMessage;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Controller
@RequestMapping("/custom")
public class CustomQueryController extends BaseController {
	
	/**
	 * 自定义聚合函数查询
	 * @param bill.billnum 
	 * @param bill.key 查询字段
	 * @param bill.action 聚合函数，例如sum,max,min,avg,count等
	 * @param bill.extendCondition 自定义where过滤条件
	 * @param request
	 * @param response
	 */
    @RequestMapping("/query")
    public void customQuery(@RequestBody BaseReqDto bill, HttpServletRequest request, HttpServletResponse response) {

        try {
        	Object result = 0;
        	BillContext uiMetaBaseInfo = BillContextUtils.getBillContext(bill.getBillnum());
        	
        	// 使用YONQL转换QuerySchema，执行QuerySchema时如果查询和条件字段里包含子表，会自动关联查询
        	String sql = "select "+bill.getAction()+"("+bill.getKey()+") as data from "+uiMetaBaseInfo.getFullname();
        	if (StringUtils.isNotBlank(bill.getExtendCondition())) {
				sql += " where "+bill.getExtendCondition();
			}
        	YonQLResult qlResult = YonQLActionFactory.create(sql, DbType.MYSQL);
    		if (qlResult != null && qlResult.getQuerySchema() != null) {
    			List<Map<String, Object>> list = MetaDaoHelper.query(uiMetaBaseInfo, qlResult.getQuerySchema());
    			if (list != null && list.size() == 1) {
    	    		result = list.get(0).get("data");
    			}
			}
        	
        	renderJson(response, ResultMessage.data(result));
        	
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
            //e.printStackTrace();
        }

    }
}
