
CREATE TABLE IF NOT EXISTS `billcode_mapping` (
  `billnum` varchar(100) NOT NULL,
  `target` varchar(100) NOT NULL,
  `tenant_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`billnum`)
);

-- ----------------------------
-- Table structure for aa_billcondition
-- ----------------------------
CREATE TABLE IF NOT EXISTS aa_billcondition (
  autoid int(11) NOT NULL AUTO_INCREMENT COMMENT '主键 数据库自增',
  cbillnum varchar(64) NOT NULL COMMENT '单据billNum',
  ccondition varchar(255) NOT NULL COMMENT '条件字段名称',
  cconditionresid varchar(255) DEFAULT NULL COMMENT '多语资源ID',
  cconditionid varchar(64) DEFAULT NULL COMMENT '条件ID aa_billprefabricate表预制数据的UUID',
  cconditiontype int(11) NOT NULL COMMENT '条件类型 0=字符串 1=日期 2=数字',
  cconditionvalue TEXT DEFAULT NULL COMMENT '条件值',
  csourcename varchar(255) DEFAULT NULL COMMENT '即datasourceName 取aa_billprefabricate表里的cdatasourceName',
  cfieldname varchar(255) NOT NULL COMMENT '即cFieldName 取aa_billprefabricate表里的cFieldName',
  bMain int(11) DEFAULT 1 COMMENT '是否主表字段 0=否 1=是',
  billnumberid int(11) DEFAULT NULL COMMENT '编码规则主键 编码规则主键',
  billnumberCode varchar(50) NOT NULL COMMENT '规则编码 关联编码规则主表',
  orgId varchar(64) NOT NULL COMMENT '组织ID',
  tenant_id bigint(20) DEFAULT NULL COMMENT '租户 系统租户=0',
  yhtTenantId varchar(20) DEFAULT NULL COMMENT '友户通租户',
  logical varchar(10) DEFAULT NULL COMMENT '逻辑符 &&、||',
  operator varchar(10) NOT NULL COMMENT '操作符 ==、<、>、<=、>=',
  formula varchar(500) DEFAULT NULL COMMENT '公式',
  formuladisplay varchar(500) DEFAULT NULL COMMENT '公式显示',
  iorder int(11) NOT NULL COMMENT '顺序 条件顺序',
  dr int(11) DEFAULT NULL COMMENT '删除标记 1=已删除，0=未删除',
  pubts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '时间戳 当前时间',
  refPropType tinyint(4) DEFAULT NULL COMMENT '属性为参照时，值类型：0=id，1=code，2=name',
  refDisplayName varchar(255) DEFAULT NULL COMMENT '参照显示名称',
  cmdId VARCHAR(255) DEFAULT NULL COMMENT '参照实体元数据id',
  refId TEXT DEFAULT NULL COMMENT '参照id',
  refCode TEXT DEFAULT NULL COMMENT '参照编码',
  refName TEXT DEFAULT NULL COMMENT '参照名称',
  refDataCode TEXT DEFAULT NULL COMMENT '参照数据编码',
  PRIMARY KEY (autoid)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = '条件数据表',
ROW_FORMAT = COMPACT;

CREATE TABLE IF NOT EXISTS `aa_billcontrolrule` (
  `cBillNum` varchar(40) DEFAULT NULL COMMENT '表单编码',
  `cChildrenField` varchar(1000) DEFAULT NULL COMMENT '子表集合属性',
  `cItemName` varchar(200) DEFAULT NULL COMMENT '字段别名',
  `cCaption` varchar(255) DEFAULT NULL,
  `bVisible` bit(1) DEFAULT b'0' COMMENT '是否可见',
  `bEditable` bit(1) DEFAULT b'0' COMMENT '是否可编辑',
  `cRegisterType` varchar(20) DEFAULT NULL COMMENT '开通类型',
  `iControlType` smallint(1) DEFAULT NULL COMMENT '管控类型',
  `bCopyData` bit(1) DEFAULT NULL,
  `bCanBatchEdit` bit(1) DEFAULT b'0',
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `pubts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '时间戳',
  `tenant_id` bigint(20) NOT NULL COMMENT '租户',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `create_date` date DEFAULT NULL COMMENT '创建日期',
  `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
  `modify_date` date DEFAULT NULL COMMENT '修改日期',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `stopstatus` bit(1) DEFAULT b'0' COMMENT '停用状态',
  `stop_time` datetime DEFAULT NULL COMMENT '停用时间',
  `creatorId` bigint(20) DEFAULT NULL COMMENT '创建人',
  `modifierId` bigint(20) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `billforeignkey` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `type` tinyint(4) NOT NULL DEFAULT '0',
  `entityname` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '类名',
  `billno` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '表单',
  `source` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '来源',
  `sourceattr` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `target` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT '转换后的结果',
  `extra` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `extraTarget` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `extra_condition` varchar(500) CHARACTER SET utf8 DEFAULT NULL COMMENT '翻译自定义扩展条件',
  `tenant_id` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '租户id',
  `sort` int(4) DEFAULT '0' COMMENT '排序字段',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);


-- ----------------------------
--  Procedure structure for `SP_ProcessColumn`
--  定义过程，以实现新增/修改/删除列
-- ----------------------------
DROP PROCEDURE IF EXISTS `SP_ProcessColumn`;
delimiter //
CREATE PROCEDURE `SP_ProcessColumn`(TableName VARCHAR(50),ColumnName VARCHAR(50),SqlStr VARCHAR(4000),CType INT)
BEGIN
DECLARE Rows1 INT;
SET Rows1=0;
SELECT COUNT(0) INTO Rows1  FROM INFORMATION_SCHEMA.Columns
WHERE table_schema= DATABASE() AND table_name=TableName AND column_name=ColumnName;
-- 新增列
IF (CType=1 AND Rows1<=0) THEN
SET SqlStr := CONCAT( 'ALTER TABLE ',TableName,' ADD COLUMN ',ColumnName,' ',SqlStr);
-- 修改列类型
ELSEIF (CType=2 AND Rows1>0)  THEN
SET SqlStr := CONCAT('ALTER TABLE ',TableName,' MODIFY  ',ColumnName,' ',SqlStr);
-- 删除列
ELSEIF (CType=3 AND Rows1>0) THEN
SET SqlStr := CONCAT('ALTER TABLE  ',TableName,' DROP COLUMN  ',ColumnName);
ELSE  SET SqlStr :='';
END IF;
-- 执行命令
IF (SqlStr<>'') THEN
SET @SQL1 = SqlStr;
PREPARE stmt1 FROM @SQL1;
EXECUTE stmt1;
END IF;
END //
delimiter ;

-- 使用存储过程进行字段升级
DROP PROCEDURE IF EXISTS db_upgrade;
DELIMITER //
CREATE PROCEDURE db_upgrade() BEGIN
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET @info='ERROR'; -- 列重复等情况会报错，直接跳过
-- CALL SP_ProcessColumn ('aa_billnumber','isDefault','tinyint(1) NOT NULL DEFAULT 1',1);
-- 物料SKU已经执行的脚本
ALTER TABLE aa_billnumber ADD COLUMN isDefault tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否默认，0否 1是';

ALTER TABLE aa_billprefabricate ADD COLUMN bMain tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否主表字段，0否 1是';

ALTER TABLE aa_billprefix ADD COLUMN bMain tinyint(4) DEFAULT '1' COMMENT '是否主表字段，0否 1是';


-- 编码规则升级需要增加脚本

ALTER TABLE aa_billreturn MODIFY COLUMN orgId varchar(64) DEFAULT '-1';
ALTER TABLE aa_billprefix MODIFY COLUMN orgId varchar(64) DEFAULT '-1';
ALTER TABLE aa_billprecode MODIFY COLUMN orgId varchar(64) DEFAULT '-1';
ALTER TABLE aa_billnumber MODIFY COLUMN orgId varchar(64) DEFAULT '-1';
ALTER TABLE aa_billhistory MODIFY COLUMN orgId varchar(64) DEFAULT '-1';

-- alter table aa_billreturn alter column orgId set default '-1';

-- 增加字段，并建立索引
ALTER TABLE aa_billnumber ADD COLUMN code varchar(50) DEFAULT NULL;

ALTER TABLE aa_billprefix ADD COLUMN billnumberCode varchar(50) DEFAULT NULL;

ALTER TABLE aa_billhistory ADD COLUMN billnumberCode varchar(50) DEFAULT NULL;

ALTER TABLE aa_billreturn ADD COLUMN billnumberCode varchar(50) DEFAULT NULL;

ALTER TABLE aa_billprefabricate ADD COLUMN refPropType tinyint(4) DEFAULT NULL COMMENT '属性为参照时，值类型：0=id，1=code，2=name';
ALTER TABLE aa_billprefabricate ADD COLUMN refDomain VARCHAR(255) DEFAULT NULL COMMENT '参照领域';
ALTER TABLE aa_billprefabricate ADD COLUMN refCode VARCHAR(255) DEFAULT NULL COMMENT '参照编码';

END//
DELIMITER ;
CALL db_upgrade();


-- 编码规则字段默认值升级
UPDATE aa_billprefix a INNER JOIN aa_billnumber b on a.cbillnum = b.cbillnum and a.orgId = b.orgId and a.tenant_id = b.tenant_id
SET a.billnumberid = b.autoid where a.billnumberid ='' or a.billnumberid IS NULL;

UPDATE aa_billnumber SET rulename = cbillname WHERE rulename = '' or rulename IS NULL;

UPDATE aa_billnumber SET `code` = `cbillnum` WHERE `code` = '' or `code` IS NULL;

UPDATE aa_billprefix SET `billnumberCode` = `cbillnum` WHERE `billnumberCode` = '' or `billnumberCode` IS NULL;

UPDATE aa_billhistory SET `billnumberCode` = `cbillnum` WHERE `billnumberCode` = '' or `billnumberCode` IS NULL;

UPDATE aa_billreturn SET `billnumberCode` = `cbillnum` WHERE `billnumberCode` = '' or `billnumberCode` IS NULL;

UPDATE aa_billnumber SET `orgId` = '-1' WHERE `orgId` = '' or `orgId` IS NULL;
UPDATE aa_billprefix SET `orgId` = '-1' WHERE `orgId` = '' or `orgId` IS NULL;
UPDATE aa_billhistory SET `orgId` = '-1' WHERE `orgId` = '' or `orgId` IS NULL;
UPDATE aa_billreturn SET `orgId` = '-1' WHERE `orgId` = '' or `orgId` IS NULL;
