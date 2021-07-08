//package com.yonyou.ucf.mdf.app.service;
//
//import com.yonyou.cloud.hpapaas.rpc.IScriptManagerService;
//import com.yonyou.iuap.hpapass.entity.GenTenExtCode;
//import com.yonyou.iuap.hpapass.entity.GenTenExtCodeExample;
//import com.yonyou.iuap.hpapass.entity.GenTenantCodeDTO;
//import com.yonyou.ucf.mdd.common.interfaces.dao.IBizDataDao;
//import com.yonyou.ucf.mdd.common.context.MddBaseContext;
//import org.springframework.beans.BeanUtils;
//import org.springframework.stereotype.Service;
//
//@Service
//public class ScriptManagerServiceImpl implements IScriptManagerService {
//	@Override
//	public void updateScript(GenTenantCodeDTO genTenExtCodeDto) {
//		IBizDataDao iBizDataDao = MddBaseContext.bizDataDao();
//		GenTenExtCode genTenExtCode = new GenTenExtCode();
//		BeanUtils.copyProperties(genTenExtCodeDto,genTenExtCode);
//		//删除所有billNo的数据
//		GenTenExtCodeExample genTenExtCodeExample = new GenTenExtCodeExample();
//		genTenExtCodeExample.createCriteria().andBillnoEqualTo(genTenExtCodeDto.getBillNo());
//		iBizDataDao.delete("com.yonyou.ucf.mdf.app.dao.GenTenExtCodeMapper.deleteByExample",genTenExtCodeExample);
//		//重新新增一条数据
//		iBizDataDao.insert("com.yonyou.ucf.mdf.app.dao.GenTenExtCodeMapper.insertSelective", genTenExtCode);
//	}
//
//	@Override
//	public void deleteScript(String id) {
//		IBizDataDao iBizDataDao = MddBaseContext.bizDataDao();
//		iBizDataDao.delete("com.yonyou.ucf.mdf.app.dao.GenTenExtCodeMapper.deleteByPrimaryKey",id);
//	}
//
//}
