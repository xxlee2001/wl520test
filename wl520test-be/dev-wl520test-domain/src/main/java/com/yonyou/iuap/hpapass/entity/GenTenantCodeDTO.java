package com.yonyou.iuap.hpapass.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * @ClassName GenTenExtCodeDto
 * @Description: TODO
 * @Author Administrator
 * @Date 2019/8/29
 **/
@Data
public class GenTenantCodeDTO{

    private String pkGenPro;
    private String id;
    private String billNo;

    private Integer isEffect;

   // @NotEmpty(message = "文件名不能为空")
   // @Length(max = 40,message = "文件名不能超过40个字符")
    private String fileName;

  //  @Length(max = 10000,message = "文件内容不能超过1W字符")
    private String fileContent;
    private String tenantId;

    private String domain;

    private String creater;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date lastModified;

    private String lastModifyUser;

    private String lastModifyUserName;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    private String createUser;

    private String createUserName;

    private Integer sourceFlag;

    private Date ts;

    private String funId;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getTenantId() {
        return tenantId;
    }

    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getCreater() {
        return creater;
    }

    public void setCreater(String creater) {
        this.creater = creater;
    }

    public Date getLastModified() {
        return lastModified;
    }

    public void setLastModified(Date lastModified) {
        this.lastModified = lastModified;
    }

    public String getLastModifyUser() {
        return lastModifyUser;
    }

    public void setLastModifyUser(String lastModifyUser) {
        this.lastModifyUser = lastModifyUser;
    }

    public String getLastModifyUserName() {
        return lastModifyUserName;
    }

    public void setLastModifyUserName(String lastModifyUserName) {
        this.lastModifyUserName = lastModifyUserName;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName;
    }

    public String getFileContent() {
        return fileContent;
    }

    public void setFileContent(String fileContent) {
        this.fileContent = fileContent;
    }

    public void setIsEffect(Integer isEffect) {
        this.isEffect = isEffect;
    }

    public Integer getIsEffect() {
        return isEffect;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    public String getBillNo() {
        return billNo;
    }
}
