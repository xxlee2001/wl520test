package com.yonyou.ucf.mdf.conf.i18n;

import com.yonyou.iuap.context.InvocationInfoProxy;
import com.yonyou.iuap.ml.provider.IMultiLangProvider;
import com.yonyou.iuap.ml.vo.LanguageVO;
import com.yonyou.ucf.mdd.common.context.MddBaseContext;

import java.util.LinkedList;
import java.util.List;

/**
 * MDD 和框架之间通过这个中转到DIwork实现 提供的实现对接
 */
public class MddMultiLangProvider implements IMultiLangProvider {

    private static final String ML_KEY_ALLLANGS = "ml_key_alllangs";
    private static final String ML_KEY_ENABLELANGS = "ml_key_enablelangs";
    private static final String ML_KEY_DEFAULTLANG = "ml_key_defaultlang";
    private IMultiLangProvider provider = MddBaseContext.getBean(IMultiLangProvider.class);

    @Override
    public LinkedList<LanguageVO> getAllLangVos() {
        LinkedList<LanguageVO> list = (LinkedList<LanguageVO>) InvocationInfoProxy.getExtendAttribute(ML_KEY_ALLLANGS);
        if(list == null || list.size()<1){
            list = provider.getAllLangVos();
            InvocationInfoProxy.setExtendAttribute(ML_KEY_ALLLANGS,list);
        }
        return list;
    }

    @Override
    public LinkedList<LanguageVO> getEnableLangVOs() {
        LinkedList<LanguageVO> list = (LinkedList<LanguageVO>) InvocationInfoProxy.getExtendAttribute(ML_KEY_ENABLELANGS);
        if(list == null || list.size()<1){
            list = provider.getEnableLangVOs();
            InvocationInfoProxy.setExtendAttribute(ML_KEY_ENABLELANGS,list);
        }
        return list;
    }

    @Override
    public LanguageVO getDefaultLangVO() {
        LanguageVO languageVO = (LanguageVO) InvocationInfoProxy.getExtendAttribute(ML_KEY_DEFAULTLANG);
        if(languageVO == null){
            languageVO = provider.getDefaultLangVO();
            InvocationInfoProxy.setExtendAttribute(ML_KEY_DEFAULTLANG,languageVO);
        }
        return languageVO;
    }

}
