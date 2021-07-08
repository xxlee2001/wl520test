
CREATE TABLE IF NOT EXISTS `ds_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `end_id` int(11) DEFAULT NULL,
  `name` varchar(64) NOT NULL,
  `type` varchar(32) DEFAULT NULL,
  `status` char(8) NOT NULL,
  `isdirty` char(8) NOT NULL,
  `driver_class_name` varchar(255) NOT NULL,
  `url` varchar(1024) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `encrypt` tinyint(3) DEFAULT NULL,
  `default_catalog` varchar(50) NOT NULL DEFAULT '0',
  `remove_abandoned` varchar(8) DEFAULT NULL,
  `remove_abandoned_timeout` int(11) DEFAULT NULL,
  `log_abandoned` varchar(8) DEFAULT NULL,
  `max_active` int(11) DEFAULT NULL,
  `max_idle` int(11) DEFAULT NULL,
  `min_idle` int(11) DEFAULT NULL,
  `initial_size` int(11) DEFAULT NULL,
  `max_wait` int(11) DEFAULT NULL,
  `test_on_borrow` char(8) DEFAULT NULL,
  `test_on_connect` char(8) DEFAULT NULL,
  `test_on_return` char(8) DEFAULT NULL,
  `test_while_idle` char(8) DEFAULT NULL,
  `validation_query` varchar(255) DEFAULT NULL,
  `validation_query_timeout` int(11) DEFAULT NULL,
  `default_auto_commit` varchar(8) DEFAULT NULL,
  `time_between_eviction_run_millis` int(11) DEFAULT NULL,
  `min_evictable_idle_time_millis` int(11) DEFAULT NULL,
  `pool_name` varchar(64) DEFAULT NULL,
  `max_lifetime` int(11) DEFAULT NULL,
  `update_date` bigint(20) DEFAULT NULL,
  `extend_property` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `unique_index_name` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for ds_mapping
-- ----------------------------
CREATE TABLE IF NOT EXISTS `ds_mapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) DEFAULT NULL,
  `showname` varchar(64) DEFAULT NULL,
  `tenant` varchar(64) DEFAULT NULL,
  `app` varchar(32) DEFAULT NULL,
  `business` varchar(32) DEFAULT NULL,
  `dft` varchar(8) DEFAULT NULL,
  `update_date` bigint(20) DEFAULT NULL,
  `status` char(8) NOT NULL,
  `isdirty` char(8) NOT NULL,
  `config_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `unique_index_code` (`code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for ds_schema
-- ----------------------------
CREATE TABLE IF NOT EXISTS `ds_schema` (
  `id_` varchar(64) NOT NULL,
  `schema_` varchar(255) DEFAULT NULL,
  `create_time_` datetime DEFAULT NULL,
  `modify_time_` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `current_` char(1) NOT NULL,
  `config_id` int(11) NOT NULL,
  PRIMARY KEY (`id_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for schema_mapping
-- ----------------------------
CREATE TABLE IF NOT EXISTS `schema_mapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(64) DEFAULT NULL,
  `showname` varchar(64) DEFAULT NULL,
  `tenant` varchar(64) DEFAULT NULL,
  `app` varchar(32) DEFAULT NULL,
  `business` varchar(32) DEFAULT NULL,
  `dft` varchar(8) DEFAULT NULL,
  `update_date` bigint(20) DEFAULT NULL,
  `status` char(8) DEFAULT NULL,
  `isdirty` char(8) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

CREATE TABLE IF NOT EXISTS `billcode_mapping` (
  `billnum` varchar(100) NOT NULL,
  `target` varchar(100) NOT NULL,
  `tenant_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`billnum`)
);


--
-- Create table `aa_billreturn`
--
CREATE TABLE IF NOT EXISTS aa_billreturn (
  autoid INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  tenant_id BIGINT(20) DEFAULT 0 COMMENT '租户',
  orgId INT(11) NOT NULL DEFAULT -1 COMMENT '组织',
  cbillnum VARCHAR(100) DEFAULT NULL COMMENT '表单编码',
  ownerorg BIGINT(20) DEFAULT NULL COMMENT '所属组织',
  cglide VARCHAR(250) DEFAULT NULL COMMENT '前缀名称',
  cgliderule VARCHAR(250) DEFAULT NULL COMMENT '取值规则',
  cseed VARCHAR(250) NOT NULL COMMENT '编号前缀',
  inumber INT(11) NOT NULL COMMENT '流水号',
  totalBasis VARCHAR(500) NOT NULL COMMENT '总依据(依据1|依据2|依据3|...)',
  billnumberid INT(11) COMMENT '规则id（外键）',-- 应用构建不预置编码规则,改为可空
  dr TINYINT(1) DEFAULT NULL COMMENT '删除标记',
  pubts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间戳',
  yhtTenantId VARCHAR(36) DEFAULT NULL,
  PRIMARY KEY (autoid)
)
COMMENT = '退号表';

--
-- Create table `aa_billprefix`
--
CREATE TABLE IF NOT EXISTS `aa_billprefix` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT '0' COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT '-1' COMMENT '组织',
  `cprefix` varchar(50) NOT NULL COMMENT '编码段名称：如门店代码，手工输入等',
  `iprefixlen` int(11) NOT NULL COMMENT '长度',
  `cprefixrule` varchar(50) DEFAULT NULL COMMENT '取值规则(例如yyyymmdd)',
  `cprefixseed` varchar(50) DEFAULT NULL COMMENT '依据参数：如y，ym，ymd',
  `iorder` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `bfix` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否依据',
  `cprefixid` varchar(50) DEFAULT NULL COMMENT '关联前缀预设的id',
  `cprefixtype` int(11) NOT NULL DEFAULT '1' COMMENT '前缀类型 0(字符字段)、1（日期字段）、2（常量）、3(系统时间)，4（单据参照属性），5 随机码',
  `cprefixsep` varchar(10) DEFAULT NULL COMMENT '分隔符',
  `cfieldname` varchar(50) DEFAULT NULL COMMENT '取值字段',
  `csourcename` varchar(50) DEFAULT NULL,
  `ipurpose` tinyint(4) DEFAULT NULL,
  `fillstyle` tinyint(4) DEFAULT NULL COMMENT '补位方式（0-不补位，1-左补位，2-右补位）',
  `fillsign` varchar(4) DEFAULT NULL COMMENT '补位符（最长4位）  ',
  `billnumberid` int(11) COMMENT '规则id',
  `dr` tinyint(1) DEFAULT NULL COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间戳',
  `cbillnum` varchar(100) DEFAULT NULL,
  `yhtTenantId` varchar(36) DEFAULT NULL,
  `formula` varchar(500) DEFAULT NULL COMMENT '公式',
  `formuladisplay` varchar(500) DEFAULT NULL COMMENT '公式显示',
  PRIMARY KEY (`autoid`),
  KEY `ix_aa_billprefix_cbillnum_cprefix` (`cbillnum`,`cprefix`,`orgId`)
) COMMENT='编码规则子表';

CREATE TABLE IF NOT EXISTS `aa_billcondition` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键 数据库自增',
  `cbillnum` varchar(64) NOT NULL,
  `ccondition` varchar(255) NOT NULL COMMENT '条件字段名称',
  `cconditionresid` varchar(255) DEFAULT NULL COMMENT '多语资源ID',
  `cconditionid` varchar(64) DEFAULT NULL,
  `cconditiontype` int(11) NOT NULL COMMENT '条件类型 0=字符串 1=日期 2=数字',
  `cconditionvalue` text,
  `csourcename` varchar(255) DEFAULT NULL COMMENT '即datasourceName 取aa_billprefabricate表里的cdatasourceName',
  `cfieldname` varchar(255) NOT NULL COMMENT '即cFieldName 取aa_billprefabricate表里的cFieldName',
  `bMain` int(11) NOT NULL DEFAULT '1' COMMENT '是否主表字段 0=否 1=是',
  `billnumberid` int(11) DEFAULT NULL COMMENT '编码规则主键 编码规则主键',
  `billnumberCode` varchar(50) NOT NULL COMMENT '规则编码 关联编码规则主表',
  `orgId` varchar(64) NOT NULL COMMENT '组织ID',
  `tenant_id` bigint(20) DEFAULT NULL,
  `yhtTenantId` varchar(36) DEFAULT NULL,
  `logical` varchar(10) DEFAULT NULL COMMENT '逻辑符 &&、||',
  `operator` varchar(10) NOT NULL COMMENT '操作符 ==、<、>、<=、>=',
  `formula` varchar(500) DEFAULT NULL COMMENT '公式',
  `formuladisplay` varchar(500) DEFAULT NULL COMMENT '公式显示',
  `iorder` int(11) NOT NULL COMMENT '顺序 条件顺序',
  `dr` int(11) DEFAULT NULL COMMENT '删除标记 1=已删除，0=未删除',
  `pubts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `propType` tinyint(4) DEFAULT NULL COMMENT '属性为参照时，值类型：0=id，1=code，2=name',
  `refDisplayName` varchar(255) DEFAULT NULL COMMENT '参照显示名称',
  `cmdId` varchar(255) DEFAULT NULL COMMENT '参照实体元数据id',
  `refPropType` tinyint(4) DEFAULT NULL COMMENT '属性为参照时，值类型：0=id，1=code，2=name',
  `refId` text COMMENT '参照id',
  `refCode` text COMMENT '参照编码',
  `refName` text COMMENT '参照名称',
  `refDataCode` text COMMENT '参照数据编码',
  PRIMARY KEY (`autoid`),
  KEY `ix_aa_billcondition_cbillnum_tenantId` (`cbillnum`,`tenant_id`),
  KEY `ix_aa_billcondition_cbillnum_yhtTenantId` (`cbillnum`,`yhtTenantId`)
);

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

--
-- Create table `aa_billprefabricate`
--
CREATE TABLE IF NOT EXISTS `aa_billprefabricate` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT,
  `cbillnum` varchar(100) NOT NULL COMMENT '表单编码',
  `cprefix` varchar(50) NOT NULL COMMENT '前缀名字',
  `cprefixid` varchar(50) NOT NULL COMMENT '唯一uid',
  `cprefixtype` int(11) NOT NULL COMMENT '前缀类型 0=字符串 1=date 2=文本',
  `iprefixtype` tinyint(4) DEFAULT NULL,
  `ipurpose` tinyint(4) DEFAULT NULL,
  `csourcename` varchar(50) DEFAULT NULL,
  `cfieldname` varchar(50) DEFAULT NULL COMMENT '取值字段',
  `carchname` varchar(50) DEFAULT NULL,
  `carchfieldname` varchar(50) DEFAULT NULL,
  `carchclsfieldname` varchar(50) DEFAULT NULL,
  `ckeyword` varchar(50) DEFAULT NULL,
  `ckeywordnamefield` varchar(50) DEFAULT NULL,
  `tenant_id` bigint(20) DEFAULT NULL,
  `yhtTenantId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`autoid`),
  KEY `ix_aa_billprefabricate_cbillnum_cprefix` (`cbillnum`,`cprefix`)
) COMMENT='预置表单';

--
-- Create table `aa_billprecode`
--
CREATE TABLE IF NOT EXISTS aa_billprecode (
  autoid INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  tenant_id BIGINT(20) DEFAULT 0 COMMENT '租户',
  orgId INT(11) NOT NULL DEFAULT -1 COMMENT '组织',
  cbillnum VARCHAR(100) DEFAULT NULL COMMENT '表单编码',
  ownerorg BIGINT(20) DEFAULT NULL COMMENT '所属组织',
  cglide VARCHAR(250) DEFAULT NULL COMMENT '前缀名称',
  cgliderule VARCHAR(250) DEFAULT NULL COMMENT '取值规则',
  cseed VARCHAR(250) NOT NULL COMMENT '编号前缀',
  inumber INT(11) NOT NULL COMMENT '流水号',
  totalBasis VARCHAR(500) NOT NULL COMMENT '总依据(依据1|依据2|依据3|...)',
  billnumberid INT(11) COMMENT '规则id（外键）',
  billcode VARCHAR(250) DEFAULT NULL COMMENT '编码号',
  dr TINYINT(1) DEFAULT NULL COMMENT '删除标记',
  pubts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间戳',
  yhtTenantId VARCHAR(36) DEFAULT NULL,
  PRIMARY KEY (autoid)
)
COMMENT = '预取表';

--
-- Create table `aa_billnumber`
--
CREATE TABLE IF NOT EXISTS `aa_billnumber` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT '0' COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT '-1' COMMENT '组织',
  `cbillnum` varchar(100) NOT NULL COMMENT '作为规则编码，表单模式下是表单编码，元数据模式下是元数据ID，自定义实体模式下是自定义实体主键ID',
  `cbillname` varchar(50) NOT NULL COMMENT '表单名称',
  `csubid` varchar(20) DEFAULT NULL,
  `ballowhandwork` tinyint(4) NOT NULL COMMENT '允许手动编码',
  `brepeatredo` tinyint(4) NOT NULL COMMENT '允许手工可改',
  `istartnumber` int(11) NOT NULL COMMENT '流水号初始值',
  `iseriallen` tinyint(4) NOT NULL COMMENT '流水号长度',
  `billnumLen` int(11) NOT NULL DEFAULT '8' COMMENT '流水号长度',
  `billnumInit` int(11) NOT NULL DEFAULT '1' COMMENT '流水号初始值',
  `billnumTruncatType` int(11) NOT NULL DEFAULT '0' COMMENT '截断类型0 = 左截断 1 = 右截断',
  `billnumFillType` int(11) NOT NULL DEFAULT '0' COMMENT '补位类型0=不补位 1=左补位 2=右补位',
  `billnumFillMark` varchar(20) NOT NULL DEFAULT '0' COMMENT '补位符',
  `billnumMode` int(11) NOT NULL DEFAULT '0' COMMENT '0=手工编号 1=自动编号 2=自动编号 手工可改',
  `billnumRule` int(11) NOT NULL DEFAULT '0' COMMENT '使用规则 0 企业默认 1 自定义规则',
  `isReuse` tinyint(1) DEFAULT '0' COMMENT '是否开启退号补号',
  `sysid` varchar(40) NOT NULL COMMENT '系统ID',
  `datatype` tinyint(4) NOT NULL DEFAULT '2' COMMENT '编码实体类型，1：表单，2：元数据，3：自定义实体',
  `rulecode` varchar(100) NOT NULL COMMENT '规则编码',
  `rulename` varchar(255) DEFAULT NULL COMMENT '规则名称',
  `dr` tinyint(4) NOT NULL DEFAULT '0' COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间戳',
  `yhtTenantId` varchar(36) DEFAULT NULL,
  `sntype` tinyint(4) NOT NULL DEFAULT '0',
  `isDefault` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否默认，0否 1是',
  `code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`autoid`),
  UNIQUE KEY `ix_aa_billnumber_cbillnum_orgid` (`cbillnum`,`orgId`,`yhtTenantId`),
  KEY `i_tenant_id` (`tenant_id`),
  KEY `ix_aa_billnumber_cbillnum` (`cbillnum`),
  KEY `ix_aa_billnumber_rulecode` (`rulecode`)
) COMMENT='编码规则-主表';

--
-- Create table `aa_billhistory`
--
CREATE TABLE IF NOT EXISTS `aa_billhistory` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT '0' COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT '-1' COMMENT '组织',
  `cbillnum` varchar(100) NOT NULL COMMENT '表单编码',
  `ownerorg` bigint(20) DEFAULT NULL COMMENT '所属组织',
  `cglide` varchar(100) DEFAULT NULL COMMENT '前缀名称',
  `cgliderule` varchar(100) DEFAULT NULL COMMENT '取值规则',
  `cseed` varchar(100) NOT NULL COMMENT '编号前缀',
  `inumber` int(11) NOT NULL COMMENT '流水号',
  `totalBasis` varchar(100) NOT NULL COMMENT '总依据(依据1|依据2|依据3|...)',
  `billnumberid` int(11) COMMENT '规则id（外键）',
  `dr` tinyint(1) DEFAULT NULL COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间戳',
  `yhtTenantId` varchar(36) DEFAULT NULL COMMENT '友户通租户Id',
  `formula` varchar(500) DEFAULT NULL COMMENT '公式',
  `formuladisplay` varchar(500) DEFAULT NULL COMMENT '公式显示',
  `billnumberCode` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`autoid`),
  KEY `cbillnum` (`tenant_id`,`cbillnum`,`cseed`),
  KEY `ix_aa_billhistory_cbillnum_cglide` (`cbillnum`,`cglide`),
  KEY `ix_aa_billhistory_cbillnum_billnumberCode_orgId_tenantId` (`cbillnum`,`billnumberCode`,`orgId`,`tenant_id`),
  KEY `ix_aa_billhistory_cbillnum_bnCode_orgId_tenantId` (`cbillnum`,`billnumberCode`,`orgId`,`tenant_id`)
) COMMENT='流水号';

--
-- Create table `aa_billcode_obj`
--
CREATE TABLE IF NOT EXISTS aa_billcode_obj (
  pk_billobj VARCHAR(40) NOT NULL,
  code VARCHAR(40) DEFAULT NULL,
  name VARCHAR(40) DEFAULT NULL,
  name2 VARCHAR(40) DEFAULT NULL,
  name3 VARCHAR(40) DEFAULT NULL,
  name4 VARCHAR(40) DEFAULT NULL,
  name5 VARCHAR(40) DEFAULT NULL,
  name6 VARCHAR(40) DEFAULT NULL,
  name_ext VARCHAR(40) DEFAULT NULL,
  createdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  tenantid VARCHAR(64) DEFAULT NULL COMMENT '租户id，当租户值为''system''时，表示该实体为系统级',
  sysid VARCHAR(64) DEFAULT NULL,
  classify_code VARCHAR(64) DEFAULT NULL COMMENT '该编码实体所属的二级分类树code',
  service_code VARCHAR(64) DEFAULT NULL COMMENT '关联diwork的原子服务code',
  PRIMARY KEY (pk_billobj)
);

--
-- Create table `aa_billcode_mappingchild`
--
CREATE TABLE IF NOT EXISTS aa_billcode_mappingchild (
  autoid INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  pk_map_id INT(11) DEFAULT NULL COMMENT '映射主表主键值',
  pk_ref VARCHAR(200) DEFAULT NULL COMMENT '属性值（参照属性主键值）',
  map_val VARCHAR(200) DEFAULT NULL COMMENT '编码',
  ref_code VARCHAR(255) DEFAULT NULL,
  ref_name VARCHAR(255) DEFAULT NULL,
  pubts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  ref_code_display VARCHAR(200) DEFAULT NULL,
  tenantid VARCHAR(200) DEFAULT NULL,
  sysid VARCHAR(200) DEFAULT NULL,
  PRIMARY KEY (autoid)
);

--
-- Create table `aa_billcode_mapping`
--
CREATE TABLE IF NOT EXISTS aa_billcode_mapping (
  autoid INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  name VARCHAR(200) DEFAULT NULL COMMENT '名称',
  domain VARCHAR(200) NOT NULL COMMENT '应用编码',
  ref_code VARCHAR(200) NOT NULL COMMENT '参照编码',
  md_en_id VARCHAR(200) NOT NULL COMMENT '元数据实体ID',
  map_length INT(11) NOT NULL COMMENT '映射值长度',
  fill_style TINYINT(1) NOT NULL DEFAULT 0 COMMENT '补位方式，0不补位 1左补位 2右补位',
  fill_char VARCHAR(1) DEFAULT NULL COMMENT '补位符号',
  map_prop_type TINYINT(1) NOT NULL DEFAULT 0 COMMENT '映射的值是mappingchild中的pk，code还是name，pk为0 code为1  name为2',
  pubts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  tenantid VARCHAR(255) NOT NULL,
  sysid VARCHAR(255) DEFAULT NULL,
  default_map_value VARCHAR(255) DEFAULT NULL COMMENT '默认映射值',
  label VARCHAR(255) DEFAULT NULL COMMENT '标签 (为了处理组织类的元数据通过标签来匹配)',
  PRIMARY KEY (autoid)
)
COMMENT = '编码映射主表';

--
-- Create table `aa_billcode_candidateprop`
--
CREATE TABLE IF NOT EXISTS aa_billcode_candidateprop (
  autoid INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  pk_bcr_obj VARCHAR(200) DEFAULT NULL COMMENT '编码对象主键',
  en_prop_name VARCHAR(200) DEFAULT NULL COMMENT '实体属性名',
  display_name VARCHAR(200) DEFAULT NULL COMMENT '显示名称',
  elem_type VARCHAR(200) DEFAULT NULL COMMENT '类型（时间，字符，参照）',
  mapping_entity VARCHAR(200) DEFAULT NULL COMMENT '所属编码映射实体',
  pubts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (autoid)
)
COMMENT = '候选属性表';

CREATE TABLE IF NOT EXISTS `billforeignkey_tenant` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `type` tinyint(4) NOT NULL DEFAULT '0',
  `entityname` varchar(100) DEFAULT NULL COMMENT '类名',
  `billno` varchar(100) DEFAULT NULL COMMENT '表单',
  `source` varchar(45) DEFAULT NULL COMMENT '来源',
  `sourceattr` varchar(45) DEFAULT NULL,
  `target` varchar(45) DEFAULT NULL COMMENT '转换后的结果',
  `extra` varchar(500) DEFAULT NULL,
  `extraTarget` varchar(500) DEFAULT NULL,
  `extra_condition` varchar(500) DEFAULT NULL COMMENT '翻译自定义扩展条件',
  `tenant_id` varchar(50) DEFAULT NULL COMMENT '租户id',
  `sort` int(4) DEFAULT '0' COMMENT '排序字段',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
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


