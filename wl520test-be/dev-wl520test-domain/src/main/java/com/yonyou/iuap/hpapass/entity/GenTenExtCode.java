package com.yonyou.iuap.hpapass.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @ClassName GenTenExtCode
 * @Description: TODO
 * @Author Administrator
 * @Date 2019/10/6
 **/
@Data
public class GenTenExtCode implements Serializable {
    private static final long serialVersionUID = 1L;
    private String id;
    private String fileName;

    private String tenantId;

    private String billNo;

    private String domain;

    private Integer isEffect;

    private String creater;
    private Date lastModified;

    private String lastModifyUser;

    private String lastModifyUserName;
    private Date createTime;

    private String createUser;

    private String createUserName;

    private String fileContent;

}
