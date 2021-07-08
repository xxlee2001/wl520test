package com.yonyou.ucf.mdf.app.controller;

import com.alibaba.fastjson.JSON;
import com.yonyou.ucf.mdd.common.context.MddBaseContext;
import com.yonyou.ucf.mdd.common.dto.BaseReqDto;
import com.yonyou.ucf.mdd.common.enums.OperationTypeEnum;
import com.yonyou.ucf.mdd.common.model.Pager;
import com.yonyou.ucf.mdd.common.model.rule.RuleExecuteResult;
import com.yonyou.ucf.mdd.common.model.uimeta.UIMetaBaseInfo;
import com.yonyou.ucf.mdd.common.model.uimeta.filter.vo.FilterVO;
import com.yonyou.ucf.mdd.common.utils.json.GsonHelper;
import com.yonyou.ucf.mdd.core.dto.POIDto;
import com.yonyou.ucf.mdd.core.utils.DateKit;
import com.yonyou.ucf.mdd.core.utils.UIMetaHelper;
import com.yonyou.ucf.mdd.ext.bill.biz.BillBiz;
import com.yonyou.ucf.mdd.ext.bill.dto.BillDataDto;
import com.yonyou.ucf.mdd.ext.core.AppContext;
import com.yonyou.ucf.mdd.ext.data.fill.ThreadLocalUtil;
import com.yonyou.ucf.mdd.ext.exceptions.BusinessException;
import com.yonyou.ucf.mdd.ext.i18n.utils.MddMultilingualUtil;
import com.yonyou.ucf.mdd.ext.poi.model.ExcelExportData;
import com.yonyou.ucf.mdd.ext.poi.model.ProcessData;
import com.yonyou.ucf.mdd.ext.poi.model.StreamParam;
import com.yonyou.ucf.mdd.ext.poi.service.POIService;
import com.yonyou.ucf.mdd.ext.poi.util.POIUtils;
import com.yonyou.ucf.mdf.app.common.ResultMessage;
import com.yonyou.ucf.mdf.app.service.IBillService;
import com.yonyou.ucf.mdf.domain.util.CommonUtil;
import org.apache.commons.lang3.StringUtils;
import org.imeta.biz.base.BizException;
import org.imeta.spring.support.cache.RedisManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;


@Controller
@RequestMapping("/bill")
public class MddBillController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(MddBillController.class);

    @Autowired
    private IBillService billService;
    @Autowired
    private com.yonyou.ucf.mdd.ext.api.IBillService extBillService;

//    @RequestMapping("/list")
    public void list(@RequestBody BaseReqDto queryParam, HttpServletRequest request, HttpServletResponse response) {
        //System.out.println("list Thread:" + Thread.currentThread().getId());

        Pager pager = null;
        try {
                pager = billService.queryByPage(queryParam);
            renderJson(response, ResultMessage.data(pager));
        } catch (Exception e) {
            logger.error(e.getMessage());
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }

//    @RequestMapping("/detail")
    public void detail(String billnum, String id, Long groupSchemaId, HttpServletRequest request, HttpServletResponse response) {
        //System.out.println("Thread:" + Thread.currentThread().getId());
        try {
            BaseReqDto bill = new BaseReqDto();
            bill.setId(id);
            bill.setBillnum(billnum);
            bill.setTenantId(CommonUtil.getTenantId());
            bill.setUserId(CommonUtil.getUserId());
            bill.setGroupSchemaId(groupSchemaId);
            Map map = billService.detail(bill);
            renderJson(response, ResultMessage.data(map));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }
    @RequestMapping("/print")
    public void print(String billnum, String ids, Long groupSchemaId, HttpServletRequest request, HttpServletResponse response) {
        //System.out.println("Thread:" + Thread.currentThread().getId());
        try {
            BaseReqDto bill = new BaseReqDto();
            bill.setId(ids);
            bill.setBillnum(billnum);
            bill.setTenantId(CommonUtil.getTenantId());
            bill.setUserId(CommonUtil.getUserId());
            bill.setGroupSchemaId(groupSchemaId);
            Map map = billService.print(bill,"print");//printnow
            renderJson(response, GsonHelper.ToJSon(map));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }

//    @RequestMapping("/add")
    public void add(@RequestBody BaseReqDto bill, HttpServletRequest request, HttpServletResponse response) {

        try {
            String json = billService.add(bill);
            renderJson(response, ResultMessage.toMap(json, true));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
            //e.printStackTrace();
        }

    }

//    @RequestMapping("/delete")
    public void delete(@RequestBody BaseReqDto bill, HttpServletRequest request, HttpServletResponse response) {
        try {
            String json = billService.delete(bill);
            renderJson(response, ResultMessage.toMap(json, true));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
            //e.printStackTrace();
        }
    }

//    @RequestMapping("/export")
//    public void export(@RequestBody POIDto poiDto, HttpServletRequest request, HttpServletResponse response) {
//        try {
//            UIMetaBaseInfo baseInfo = UIMetaHelper.getUIMetaBaseInfo(poiDto.getBillnum(), MddBaseContext.getTenantId());
//            POIDto queryBill=new POIDto();
//            BeanUtils.copyProperties(poiDto,queryBill);
//            queryBill.setAction("query");
//            queryBill.setIsIncludeMeta(true);
//            poiDto.setTenantId(MddBaseContext.getTenantId());
//            poiDto.setUserId(MddBaseContext.getThreadContext("userId"));
//            // 如果模板信息需要过滤需要传入ViewControlParams参数
//            String[] ruleLvs = new String[3];
//            ruleLvs[0] = "common";
//            ruleLvs[1] = baseInfo.getSubid();
//            ruleLvs[2] = baseInfo.getBillnum();
//            poiDto.setRuleLvs(ruleLvs);
//            IPerdicateHandler perdicateHandler = MddBaseContext.getBean(IPerdicateHandler.class);
//            if (null == perdicateHandler) {
//                perdicateHandler = new DefaultPerdicateHandler();
//            }
//            ExcelExportData excelData = poiService.export(poiDto, perdicateHandler);
//            String fileName = StringUtils.isNotBlank(poiDto.getFileName()) ? poiDto.getFileName() : poiDto.getBillnum() + DateKit.getCurrTime();
//            excelData.setFileName(fileName);
//            StreamParam streamParam = new StreamParam(fileName, excelData, response);
//            poiService.downLoadToResponse(streamParam);
//        } catch (Exception e) {
//            logger.error(e.getMessage());
//            renderJson(response, ResultMessage.error(e.getMessage()));
//        }
//    }


    // 支持异步导出
    @RequestMapping("/export")
    public void export(@RequestBody BillDataDto bill, HttpServletRequest request, HttpServletResponse response){
        try {
            if (StringUtils.isNotBlank(bill.getAsyncKey())) {
                Map<String, Object> localThreadInfo = ThreadLocalUtil.getLocalThreadInfo();
                String asyncKey = bill.getAsyncKey();
                ProcessData.builder(1, 200, null, null).percentage("0").build(bill.getAsyncKey());
                CompletableFuture<String> result =  CompletableFuture.supplyAsync(() -> {
                    try {
                        ThreadLocalUtil.setLocalThreadInfo(localThreadInfo);
                        ExcelExportData exportData = extBillService.export(bill);
                        ProcessData.builder(1, 200, null, null).percentage("33.33").build(bill.getAsyncKey());
                        StreamParam streamParam =
                                new StreamParam(bill.getBillnum() + com.yonyou.ucf.mdd.ext.util.DateKit.getCurrTime(), exportData, response);
                        ProcessData.builder(1, 200, null, null).percentage("66.66").build(bill.getAsyncKey());
                        if (null == streamParam || null == streamParam.getExcelExportData()) {
                            ProcessData.builder(0, 999, null, MddMultilingualUtil.getFWMessage("P_YS_FW-PUB_MDD-BACK_0001065550", "文件内容为空"));
                            return "";
                        }
                        String fileName = null != streamParam.getExcelExportData().getFileName() ? streamParam.getExcelExportData().getFileName() : streamParam.getFileName();
                        String filePath = POIUtils.getProcessFileName(bill, fileName, streamParam.getFileExtension());
                        POIService.export2File(streamParam, filePath);
                        ProcessData.builder(1, 200, null, null).percentage("100").build(bill.getAsyncKey());
                        return "";
                    } catch (Exception e) {
                        RedisManager redis= AppContext.cache();
                        Map<String,Object> map=new HashMap<>();
                        map.put("data", e.getMessage());
                        map.put("flag", "0");
                        map.put("count", 0);
                        map.put("successCount", 0);
                        map.put("failCount", 0);
                        map.put("percentage", "100");
                        redis.set(asyncKey, GsonHelper.ToJSon(map));
                        throw new BusinessException("异步导出异常",e);
                    }
                });
                renderJson(response, com.yonyou.ucf.mdd.ext.util.ResultMessage.data(null));
            } else {
                ExcelExportData exportData = extBillService.export(bill);
                StreamParam streamParam =
                        new StreamParam(bill.getBillnum() + com.yonyou.ucf.mdd.ext.util.DateKit.getCurrTime(), exportData, response);
                POIService.downLoadToResponse(streamParam);
            }
        } catch (Exception e) {
            // log.error("导出Excel异常", e);
            renderJson(response, com.yonyou.ucf.mdd.ext.util.ResultMessage.error(e.getMessage()));
        }
    }

    /**
     * 单据 导入数据
     *
     * @param file
     * @param billnum
     * @param request
     * @param response
     */

//    @RequestMapping("/billImport")
    public void billImport(@RequestParam("file") MultipartFile file,
                           @RequestParam(value = "billnum", required = false) String billnum,@RequestParam(value = "asyncKey", required = false) String asyncKey,@RequestParam( required = false) String mapCondition,  HttpServletRequest request,
                           HttpServletResponse response) {
        try {
            logger.info("asyncKey", asyncKey);
            Map<String,Object> params=new HashMap<String,Object>();
            params.put("billnum", billnum);
            params.put("asyncKey", asyncKey);
            params.put("mapCondition", mapCondition);
            com.yonyou.ucf.mdd.ext.bill.rule.common.ResultList resultList = null;
            if (StringUtils.isNotBlank(asyncKey)) {
                CompletableFuture<com.yonyou.ucf.mdd.ext.bill.rule.common.ResultList> result =  CompletableFuture.supplyAsync(() -> {
                    try {
                        return extBillService.billImport(params,file);
                    } catch (Exception e) {
                        RedisManager redis=AppContext.cache();
                        Map<String,Object> map=new HashMap<String,Object>();
                        map.put("data", e.getMessage());
                        map.put("flag", "0");
                        map.put("count", 0);
                        map.put("successCount", 0);
                        map.put("failCount", 0);
                        map.put("percentage", "100");
                        redis.set(asyncKey, JSON.toJSONString(map));
                        throw new BizException(com.yonyou.ucf.mdd.ext.i18n.utils.MddMultilingualUtil.getFWMessage("P_YS_FW-PUB_MDD-BACK_0001065338","异步导入异常") /* "异步导入异常" */,e);
                    }
                });
            } else {
                Map<String, Object> datas = POIService.getImportData(file);
                resultList = extBillService.billImport(params,datas);
            }
            renderJson(response, ResultMessage.data(resultList));
        } catch (Exception e) {
            if(!StringUtils.isEmpty(asyncKey)){
                RedisManager redis=AppContext.cache();
                Map<String,Object> map=new HashMap<String,Object>();
                map.put("flag","0");
                map.put("data", e.getMessage());
                redis.set(asyncKey,JSON.toJSONString(map));
                logger.error("异步导入失败", e);
            } else {
                logger.error("同步导入失败", e);
            }
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }


    /**
     * 保存业务数据
     *
     * @param bill
     * @param request
     * @param response
     */
//    @RequestMapping("/save")
    public void save(@RequestBody BaseReqDto bill, HttpServletRequest request, HttpServletResponse response) {
        try {
            RuleExecuteResult result = billService.executeUpdate("save", bill);
            renderJson(response, ResultMessage.data(result.getData(), false));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
            logger.error("save error: ", e);
        }
    }




//    @RequestMapping("/ref/getRefData") //保持和 原前端请求路径一致
    public void getRefData(@RequestBody(required = false) BaseReqDto baseReqDto, HttpServletRequest request, HttpServletResponse response) {
        try {
            //TODO 对于元素可见控制需要实现封装 ViewControlParams
            if (null == baseReqDto.getTenantId() || StringUtils.isBlank(baseReqDto.getTenantId().toString())) {// 指定租户查询
                baseReqDto.setTenantId(CommonUtil.getTenantId());
            }

//            if (StringUtils.isEmpty(baseReqDto.getBillnum())) {
//                logger.error("baseReqDto 的billbum不能为空!");
//                throw new RuntimeException("billnum不能为空!");
//            }

            Object refData = BillBiz.getRefData(baseReqDto);
            renderJson(response, ResultMessage.data(refData));
        } catch (Exception e) {
            logger.error("查询参照异常",e);
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }

//    @RequestMapping("/querytree")
    public void querytree(@RequestBody BaseReqDto baseReqDto,HttpServletRequest request,HttpServletResponse response){
        try {
            List list = billService.querytree(baseReqDto);
            renderJson(response,ResultMessage.data(list));
        } catch (Exception e) {
            logger.error("querytree失败!", e);
            renderJson(response, ResultMessage.error(e.getMessage()));
        }

    }

    //-------------------move x-----------------------------------------
//    @RequestMapping("/enter")
//    public void enter(String billnum, String id, HttpServletRequest request, HttpServletResponse response) {
//        try {
//            BaseReqDto baseReqDto = new BaseReqDto();
//            baseReqDto.setId(id);
//            baseReqDto.setBillnum(billnum);
//            Map map = billService.enter(baseReqDto);
//            renderJson(response, ResultMessage.data(map));
//        } catch (Exception e) {
//            renderJson(response, ResultMessage.error(e.getMessage()));
//        }
//
//    }

//    @RequestMapping("/movefirst")
    public void movefirst(String billnum, String condition, @RequestBody FilterVO filterVO, HttpServletRequest request, HttpServletResponse response) {

        try {
            BaseReqDto baseReqDto = new BaseReqDto();
            baseReqDto.setBillnum(billnum);
            FilterVO fv = parseFilterVO(condition,filterVO,request);
            baseReqDto.setCondition(fv);
            Map map = billService.movefirst(baseReqDto);
            renderJson(response, ResultMessage.data(map));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }

    }

//    @RequestMapping("/moveprev")
    public void moveprev(String billnum, String id, String condition, FilterVO filterVO, HttpServletRequest request, HttpServletResponse response) {

        try {
            BaseReqDto baseReqDto = new BaseReqDto();
            baseReqDto.setBillnum(billnum);
            baseReqDto.setId(id);
            //baseReqDto.setCondition(parseFilterVO(condition,filterVO,request));
            Map map = billService.moveprev(baseReqDto);
            renderJson(response, ResultMessage.data(map));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }

    }

//    @RequestMapping("/movenext")
    public void movenext(String billnum, String id, String condition, FilterVO filterVO, HttpServletRequest request, HttpServletResponse response) {

        try {
            BaseReqDto baseReqDto = new BaseReqDto();
            baseReqDto.setBillnum(billnum);
            baseReqDto.setId(id);
            //baseReqDto.setCondition(parseFilterVO(condition,filterVO,request));
            Map map = billService.movenext(baseReqDto);
            renderJson(response, ResultMessage.data(map));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }

    }

//    @RequestMapping("/movelast")
    public void movelast(String billnum, String condition, @RequestBody FilterVO filterVO, HttpServletRequest request, HttpServletResponse response) {
        try {
            BaseReqDto baseReqDto = new BaseReqDto();
            baseReqDto.setBillnum(billnum);
            FilterVO fv = parseFilterVO(condition,filterVO,request);
            baseReqDto.setCondition(fv);
            Map map = billService.movelast(baseReqDto);
            renderJson(response, ResultMessage.data(map));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }


//    @RequestMapping("/stop")
    public void stop(@RequestBody BaseReqDto baseReqDto, HttpServletRequest request, HttpServletResponse response) {
        try {
            RuleExecuteResult result = billService.executeUpdate(OperationTypeEnum.STOP.getValue(), baseReqDto);
            renderJson(response, ResultMessage.data(result.getData(), false));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }

//    @RequestMapping("/unstop")
    public void unstop(@RequestBody BaseReqDto baseReqDto, HttpServletRequest request, HttpServletResponse response) {
        try {
            RuleExecuteResult result = billService.executeUpdate(OperationTypeEnum.UNSTOP.getValue(), baseReqDto);
            renderJson(response, ResultMessage.data(result.getData(), false));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }

    /**
     * 审核操作
     * @param baseReqDto
     * @param request
     * @param response
     */
//    @RequestMapping("/audit")
    public void audit(@RequestBody BaseReqDto baseReqDto, HttpServletRequest request, HttpServletResponse response) {
        try {
            RuleExecuteResult result = billService.executeUpdate(OperationTypeEnum.AUDIT.getValue(), baseReqDto);
            renderJson(response, ResultMessage.data(result.getData(), false));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }


    /**
     * 弃审操作
     * @param baseReqDto
     * @param request
     * @param response
     */
//    @RequestMapping("/unaudit")
    public void unaudit(@RequestBody BaseReqDto baseReqDto, HttpServletRequest request, HttpServletResponse response) {
        try {
            RuleExecuteResult result = billService.executeUpdate(OperationTypeEnum.UNAUDIT.getValue(), baseReqDto);
            renderJson(response, ResultMessage.data(result.getData(), false));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
        }
    }


//    @RequestMapping("/copy")
    public void copy(@RequestBody BaseReqDto bill, HttpServletRequest request, HttpServletResponse response) {

        try {
            String json = billService.copy(bill);
            renderJson(response, ResultMessage.toMap(json, true));
        } catch (Exception e) {
            renderJson(response, ResultMessage.error(e.getMessage()));
            //e.printStackTrace();
        }

    }
}
