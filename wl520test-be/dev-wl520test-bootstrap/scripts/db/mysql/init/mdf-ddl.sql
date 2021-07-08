-- --------------------------------------------------------
-- 主机:                           172.20.52.131
-- 服务器版本:                        10.2.24-MariaDB - MariaDB Server
-- 服务器OS:                        Linux
-- HeidiSQL 版本:                  10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table iuap_cloud_basedoc.aa_billcode_candidateprop
CREATE TABLE IF NOT EXISTS `aa_billcode_candidateprop` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pk_bcr_obj` varchar(200) DEFAULT NULL COMMENT '编码对象主键',
  `en_prop_name` varchar(200) DEFAULT NULL COMMENT '实体属性名',
  `display_name` varchar(200) DEFAULT NULL COMMENT '显示名称',
  `elem_type` varchar(200) DEFAULT NULL COMMENT '类型（时间，字符，参照）',
  `mapping_entity` varchar(200) DEFAULT NULL COMMENT '所属编码映射实体',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '创建时间',
  PRIMARY KEY (`autoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=1260 ROW_FORMAT=COMPACT COMMENT='候选属性表';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billcode_mapping
CREATE TABLE IF NOT EXISTS `aa_billcode_mapping` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(200) DEFAULT NULL COMMENT '名称',
  `domain` varchar(200) NOT NULL COMMENT '应用编码',
  `ref_code` varchar(200) NOT NULL COMMENT '参照编码',
  `md_en_id` varchar(200) NOT NULL COMMENT '元数据实体ID',
  `map_length` int(11) NOT NULL COMMENT '映射值长度',
  `fill_style` tinyint(1) NOT NULL DEFAULT 0 COMMENT '补位方式，0不补位 1左补位 2右补位',
  `fill_char` varchar(1) DEFAULT NULL COMMENT '补位符号',
  `map_prop_type` tinyint(1) NOT NULL DEFAULT 0 COMMENT '映射的值是mappingchild中的pk，code还是name，pk为0 code为1  name为2',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '创建时间',
  `tenantid` varchar(255) NOT NULL,
  `sysid` varchar(255) DEFAULT NULL,
  `default_map_value` varchar(255) DEFAULT NULL COMMENT '默认映射值',
  `label` varchar(255) DEFAULT NULL COMMENT '标签 (为了处理组织类的元数据通过标签来匹配)',
  PRIMARY KEY (`autoid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=1820 COMMENT='编码映射主表';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billcode_mappingchild
CREATE TABLE IF NOT EXISTS `aa_billcode_mappingchild` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pk_map_id` int(11) DEFAULT NULL COMMENT '映射主表主键值',
  `pk_ref` varchar(200) DEFAULT NULL COMMENT '属性值（参照属性主键值）',
  `map_val` varchar(200) DEFAULT NULL COMMENT '编码',
  `ref_code` varchar(255) DEFAULT NULL,
  `ref_name` varchar(255) DEFAULT NULL,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '创建时间',
  `ref_code_display` varchar(200) DEFAULT NULL,
  `tenantid` varchar(200) DEFAULT NULL,
  `sysid` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`autoid`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=252 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billcode_obj
CREATE TABLE IF NOT EXISTS `aa_billcode_obj` (
  `pk_billobj` varchar(40) NOT NULL,
  `code` varchar(40) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `name2` varchar(40) DEFAULT NULL,
  `name3` varchar(40) DEFAULT NULL,
  `name4` varchar(40) DEFAULT NULL,
  `name5` varchar(40) DEFAULT NULL,
  `name6` varchar(40) DEFAULT NULL,
  `name_ext` varchar(40) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tenantid` varchar(64) DEFAULT NULL COMMENT '租户id，当租户值为''system''时，表示该实体为系统级',
  `sysid` varchar(64) DEFAULT NULL,
  `classify_code` varchar(64) DEFAULT NULL COMMENT '该编码实体所属的二级分类树code',
  `service_code` varchar(64) DEFAULT NULL COMMENT '关联diwork的原子服务code',
  PRIMARY KEY (`pk_billobj`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=103 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billhistory
CREATE TABLE IF NOT EXISTS `aa_billhistory` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT 0 COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT -1 COMMENT '组织',
  `cbillnum` varchar(50) NOT NULL COMMENT '表单编码',
  `ownerorg` bigint(20) DEFAULT NULL COMMENT '所属组织',
  `cglide` varchar(100) DEFAULT NULL COMMENT '前缀名称',
  `cgliderule` varchar(100) DEFAULT NULL COMMENT '取值规则',
  `cseed` varchar(100) NOT NULL COMMENT '编号前缀',
  `inumber` int(11) NOT NULL COMMENT '流水号',
  `totalBasis` varchar(100) NOT NULL COMMENT '总依据(依据1|依据2|依据3|...)',
  `billnumberid` int(11) COMMENT '规则id（外键）',
  `dr` tinyint(1) DEFAULT NULL COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '时间戳',
  `yhtTenantId` varchar(20) DEFAULT NULL COMMENT '友户通租户Id',
  PRIMARY KEY (`autoid`),
  KEY `cbillnum` (`tenant_id`,`cbillnum`,`cseed`),
  KEY `ix_aa_billhistory_cbillnum_cglide` (`cbillnum`,`cglide`)
) ENGINE=InnoDB AUTO_INCREMENT=5580 DEFAULT CHARSET=utf8mb4 AVG_ROW_LENGTH=606 ROW_FORMAT=COMPACT COMMENT='流水号';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billnumber
CREATE TABLE IF NOT EXISTS `aa_billnumber` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT 0 COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT -1 COMMENT '组织',
  `cbillnum` varchar(50) NOT NULL COMMENT '作为规则编码，表单模式下是表单编码，元数据模式下是元数据ID，自定义实体模式下是自定义实体主键ID',
  `cbillname` varchar(50) NOT NULL COMMENT '表单名称',
  `csubid` varchar(20) DEFAULT NULL,
  `ballowhandwork` tinyint(4) NOT NULL COMMENT '允许手动编码',
  `brepeatredo` tinyint(4) NOT NULL COMMENT '允许手工可改',
  `istartnumber` int(11) NOT NULL COMMENT '流水号初始值',
  `iseriallen` tinyint(4) NOT NULL COMMENT '流水号长度',
  `billnumLen` int(11) NOT NULL DEFAULT 8 COMMENT '流水号长度',
  `billnumInit` int(11) NOT NULL DEFAULT 1 COMMENT '流水号初始值',
  `billnumTruncatType` int(11) NOT NULL DEFAULT 0 COMMENT '截断类型0 = 左截断 1 = 右截断',
  `billnumFillType` int(11) NOT NULL DEFAULT 0 COMMENT '补位类型0=不补位 1=左补位 2=右补位',
  `billnumFillMark` varchar(20) NOT NULL DEFAULT '0' COMMENT '补位符',
  `billnumMode` int(11) NOT NULL DEFAULT 0 COMMENT '0=手工编号 1=自动编号 2=自动编号 手工可改',
  `billnumRule` int(11) NOT NULL DEFAULT 0 COMMENT '使用规则 0 企业默认 1 自定义规则',
  `isReuse` tinyint(1) DEFAULT 0 COMMENT '是否开启退号补号',
  `sysid` varchar(40) NOT NULL COMMENT '系统ID',
  `datatype` tinyint(4) NOT NULL DEFAULT 2 COMMENT '编码实体类型，1：表单，2：元数据，3：自定义实体',
  `rulecode` varchar(100) NOT NULL COMMENT '规则编码',
  `rulename` varchar(255) DEFAULT NULL COMMENT '规则名称',
  `dr` tinyint(4) NOT NULL DEFAULT 0 COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '时间戳',
  `yhtTenantId` varchar(20) DEFAULT NULL,
  `sntype` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`autoid`),
  UNIQUE KEY `ix_aa_billnumber_cbillnum_orgid` (`cbillnum`,`orgId`,`tenant_id`),
  KEY `ix_aa_billnumber_cbillnum` (`cbillnum`),
  KEY `ix_aa_billnumber_rulecode` (`rulecode`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 AVG_ROW_LENGTH=496 ROW_FORMAT=COMPACT COMMENT='编码规则-主表';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billprecode
CREATE TABLE IF NOT EXISTS `aa_billprecode` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT 0 COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT -1 COMMENT '组织',
  `cbillnum` varchar(50) DEFAULT NULL COMMENT '表单编码',
  `ownerorg` bigint(20) DEFAULT NULL COMMENT '所属组织',
  `cglide` varchar(250) DEFAULT NULL COMMENT '前缀名称',
  `cgliderule` varchar(250) DEFAULT NULL COMMENT '取值规则',
  `cseed` varchar(250) NOT NULL COMMENT '编号前缀',
  `inumber` int(11) NOT NULL COMMENT '流水号',
  `totalBasis` varchar(500) NOT NULL COMMENT '总依据(依据1|依据2|依据3|...)',
  `billnumberid` int(11) COMMENT '规则id（外键）',
  `billcode` varchar(250) DEFAULT NULL COMMENT '编码号',
  `dr` tinyint(1) DEFAULT NULL COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '时间戳',
  `yhtTenantId` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`autoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='预取表';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billprefabricate
CREATE TABLE IF NOT EXISTS `aa_billprefabricate` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT,
  `cbillnum` varchar(50) NOT NULL COMMENT '表单编码',
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
  `yhtTenantId` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`autoid`),
  KEY `ix_aa_billprefabricate_cbillnum_cprefix` (`cbillnum`,`cprefix`)
) ENGINE=InnoDB AUTO_INCREMENT=17667 DEFAULT CHARSET=utf8mb4 AVG_ROW_LENGTH=4096 ROW_FORMAT=COMPACT COMMENT='预置表单';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billprefix
CREATE TABLE IF NOT EXISTS `aa_billprefix` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT 0 COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT -1 COMMENT '组织',
  `cprefix` varchar(50) NOT NULL COMMENT '编码段名称：如门店代码，手工输入等',
  `iprefixlen` int(11) NOT NULL COMMENT '长度',
  `cprefixrule` varchar(50) DEFAULT NULL COMMENT '取值规则(例如yyyymmdd)',
  `cprefixseed` varchar(50) DEFAULT NULL COMMENT '依据参数：如y，ym，ymd',
  `iorder` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `bfix` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否依据',
  `cprefixid` varchar(50) DEFAULT NULL COMMENT '关联前缀预设的id',
  `cprefixtype` int(11) NOT NULL DEFAULT 1 COMMENT '前缀类型 0(字符字段)、1（日期字段）、2（常量）、3(系统时间)，4（单据参照属性），5 随机码',
  `cprefixsep` varchar(10) DEFAULT NULL COMMENT '分隔符',
  `cfieldname` varchar(50) DEFAULT NULL COMMENT '取值字段',
  `csourcename` varchar(50) DEFAULT NULL,
  `ipurpose` tinyint(4) DEFAULT NULL,
  `fillstyle` tinyint(4) DEFAULT NULL COMMENT '补位方式（0-不补位，1-左补位，2-右补位）',
  `fillsign` varchar(4) DEFAULT NULL COMMENT '补位符（最长4位）  ',
  `billnumberid` int(11) DEFAULT NULL COMMENT '规则id',
  `dr` tinyint(1) DEFAULT NULL COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '时间戳',
  `cbillnum` varchar(50) DEFAULT NULL,
  `yhtTenantId` varchar(20) DEFAULT NULL,
  `formula` varchar(500) DEFAULT NULL COMMENT '公式',
  `formuladisplay` varchar(500) DEFAULT NULL COMMENT '公式显示',
  PRIMARY KEY (`autoid`),
  KEY `ix_aa_billprefix_cbillnum_cprefix` (`cbillnum`,`cprefix`,`orgId`)
) ENGINE=InnoDB AUTO_INCREMENT=24663 DEFAULT CHARSET=utf8mb4 AVG_ROW_LENGTH=334 ROW_FORMAT=COMPACT COMMENT='编码规则子表';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_billreturn
CREATE TABLE IF NOT EXISTS `aa_billreturn` (
  `autoid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tenant_id` bigint(20) DEFAULT 0 COMMENT '租户',
  `orgId` int(11) NOT NULL DEFAULT -1 COMMENT '组织',
  `cbillnum` varchar(50) DEFAULT NULL COMMENT '表单编码',
  `ownerorg` bigint(20) DEFAULT NULL COMMENT '所属组织',
  `cglide` varchar(250) DEFAULT NULL COMMENT '前缀名称',
  `cgliderule` varchar(250) DEFAULT NULL COMMENT '取值规则',
  `cseed` varchar(250) NOT NULL COMMENT '编号前缀',
  `inumber` int(11) NOT NULL COMMENT '流水号',
  `totalBasis` varchar(500) NOT NULL COMMENT '总依据(依据1|依据2|依据3|...)',
  `billnumberid` int(11) COMMENT '规则id（外键）',
  `dr` tinyint(1) DEFAULT NULL COMMENT '删除标记',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '时间戳',
  `yhtTenantId` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`autoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='退号表';

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.aa_enum
CREATE TABLE IF NOT EXISTS `aa_enum` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `enumtype` varchar(50) NOT NULL,
  `nametype` varchar(100) DEFAULT 'text',
  `enumcode` varchar(50) NOT NULL,
  `localid` varchar(32) NOT NULL,
  `enumname` varchar(100) NOT NULL,
  `subid` varchar(30) NOT NULL,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp(),
  `ideleted` int(11) DEFAULT 0,
  `enumindex` int(11) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `unique` (`enumtype`,`enumcode`,`subid`,`ideleted`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10000111 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.billentity_base
CREATE TABLE IF NOT EXISTS `billentity_base` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cCode` varchar(200) NOT NULL COMMENT 'group编码',
  `cSubId` varchar(45) DEFAULT NULL COMMENT '子产品号',
  `cName` varchar(100) DEFAULT NULL COMMENT 'Group名称',
  `iOrder` int(11) DEFAULT NULL COMMENT '排序号，从高到低排',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除标记',
  `cDataSourceName` varchar(500) DEFAULT NULL COMMENT '数据源名称，可能是一个表或者一个试图',
  `cPrimaryKey` varchar(100) DEFAULT NULL COMMENT 'cDsName主键名称',
  `iBillId` bigint(20) NOT NULL COMMENT '所属bill',
  `iSystem` tinyint(1) DEFAULT 0 COMMENT 'bit型，0代表系统定义，其他再细分客户／行业等',
  `bMain` tinyint(1) DEFAULT NULL COMMENT ' 是否主表',
  `cForeignKey` varchar(100) DEFAULT NULL COMMENT '如果是子表，则该字段代表该子表中存的主表主键',
  `cParentCode` varchar(500) DEFAULT NULL,
  `childrenField` varchar(200) DEFAULT NULL,
  `cModelType` varchar(100) DEFAULT NULL,
  `bIsNull` tinyint(1) DEFAULT NULL,
  `sysid` bigint(20) DEFAULT NULL,
  `isprint` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否打印相关',
  `queryJoin` varchar(800) DEFAULT NULL,
  `printKey` varchar(50) DEFAULT NULL,
  `isTplExport` tinyint(1) NOT NULL DEFAULT 1,
  `label` varchar(255) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  UNIQUE KEY `cCode_UNIQUE` (`cCode`,`tenant_id`) USING BTREE,
  KEY `iOrder_Index` (`iOrder`) USING BTREE,
  KEY `is_deleted_Index` (`isDeleted`) USING BTREE,
  KEY `iBillId_Index` (`iBillId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2268737 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.billforeignkey
CREATE TABLE IF NOT EXISTS `billforeignkey` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `type` tinyint(4) NOT NULL DEFAULT 0,
  `entityname` varchar(100) DEFAULT NULL COMMENT '类名',
  `billno` varchar(100) DEFAULT NULL COMMENT '表单',
  `source` varchar(45) DEFAULT NULL COMMENT '来源',
  `sourceattr` varchar(45) DEFAULT NULL,
  `target` varchar(45) DEFAULT NULL COMMENT '转换后的结果',
  `extra` varchar(500) DEFAULT NULL,
  `extraTarget` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2437 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.billitem_base
CREATE TABLE IF NOT EXISTS `billitem_base` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cSubId` varchar(45) DEFAULT NULL COMMENT '子产品号',
  `iBillId` bigint(20) NOT NULL COMMENT '所属bill',
  `cFieldName` varchar(1000) DEFAULT NULL COMMENT '带关联关系的字段名',
  `cName` varchar(200) DEFAULT NULL COMMENT '字段名',
  `cCaption` varchar(200) DEFAULT NULL COMMENT '名称',
  `cShowCaption` varchar(200) DEFAULT NULL COMMENT '显示名称',
  `iBillEntityId` bigint(20) NOT NULL COMMENT 'billentityid',
  `iBillTplGroupId` bigint(20) NOT NULL COMMENT '所属billtplgroup',
  `iTplId` bigint(20) NOT NULL COMMENT '模版id',
  `iOrder` float(10,2) DEFAULT NULL,
  `iMaxLength` int(11) DEFAULT NULL COMMENT '最大长度',
  `iFieldType` int(11) DEFAULT NULL COMMENT '字段类型',
  `bEnum` tinyint(1) DEFAULT NULL COMMENT '是否枚举',
  `cEnumString` varchar(45) DEFAULT NULL COMMENT '枚举信息',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除标记',
  `bMustSelect` tinyint(1) DEFAULT NULL COMMENT '是否必选',
  `bHidden` tinyint(1) DEFAULT NULL COMMENT '是否隐藏',
  `cRefType` varchar(200) DEFAULT NULL COMMENT '参照类型',
  `cRefId` varchar(45) DEFAULT NULL COMMENT '参照Id',
  `cRefRetId` varchar(6000) DEFAULT NULL,
  `cDataRule` varchar(200) DEFAULT NULL COMMENT '规则信息，可能是公式规则，或者规则系统中的规则，取规则编码',
  `iFunctionType` int(11) DEFAULT NULL COMMENT 'tinyint,一个字段标识可能的功能，\r\n00000000\r\n用八位二进制0，1代表8个功能\r\n比如第一位代表业务通知，第二位代表UU消息，第三位代表智能输入，如果该字段三个功能都有则为00000111，为7。以此类推，是否关联查询也在此字段上标识\r\n',
  `bSplit` tinyint(1) DEFAULT NULL COMMENT '是否支持行拆分',
  `bExtend` tinyint(1) DEFAULT NULL COMMENT '是否扩展字段',
  `iNumPoint` int(11) DEFAULT NULL COMMENT '小数点',
  `bCanModify` tinyint(1) DEFAULT NULL COMMENT '是否可修改',
  `cSourceType` varchar(45) DEFAULT NULL COMMENT '数据来源类型',
  `iMaxShowLen` int(11) DEFAULT NULL COMMENT '最大显示长度',
  `cMemo` varchar(45) DEFAULT NULL COMMENT '备注',
  `iColWidth` int(11) DEFAULT NULL COMMENT '列宽',
  `cSumType` varchar(45) DEFAULT NULL COMMENT '汇总类型',
  `iAlign` tinyint(1) DEFAULT NULL COMMENT '对齐方式',
  `bNeedSum` tinyint(1) DEFAULT NULL COMMENT '是否支持合计',
  `bShowIt` tinyint(1) DEFAULT NULL COMMENT '是否是显示字段',
  `bFixed` tinyint(1) DEFAULT NULL COMMENT '是否是固定列',
  `bFilter` tinyint(1) DEFAULT NULL COMMENT '是否过滤字段',
  `cDefaultValue` text DEFAULT NULL COMMENT '默认值',
  `cFormatData` varchar(60) DEFAULT NULL,
  `cUserId` varchar(45) DEFAULT NULL COMMENT '用户信息',
  `iTabIndex` int(11) DEFAULT NULL COMMENT 'Tab键的index',
  `bIsNull` tinyint(1) DEFAULT NULL COMMENT '是否可以为空',
  `bPrintCaption` tinyint(1) DEFAULT NULL COMMENT '是否打印栏目标题',
  `bJointQuery` tinyint(1) DEFAULT NULL COMMENT '是否支持关联查询',
  `bPrintUpCase` tinyint(1) DEFAULT NULL COMMENT '是否打印金额大写',
  `bSelfDefine` tinyint(1) DEFAULT NULL COMMENT '是否自定义项目',
  `cSelfDefineType` varchar(50) DEFAULT NULL COMMENT '自定义项classId',
  `cDataSourceName` varchar(500) DEFAULT NULL COMMENT '数据源名称，可能是一个表或者一个视图，group上有就按照group上的值赋值，也可以自行赋值，为了考虑一个页签可能包含多个实体的情况',
  `cOrder` varchar(45) DEFAULT NULL COMMENT '排序信息，为null说明该字段不是排序字段',
  `bCheck` tinyint(1) DEFAULT NULL COMMENT '是否向后端发送校验请求',
  `cControlType` varchar(45) DEFAULT NULL COMMENT '控件类型',
  `cEnumType` varchar(45) DEFAULT '' COMMENT '枚举类型',
  `refReturn` varchar(50) DEFAULT NULL,
  `bShowInRowAuth` bit(1) DEFAULT NULL COMMENT '记录权限分配界面是否显示',
  `iRowAuthBillId` bigint(20) DEFAULT NULL,
  `cStyle` varchar(1000) DEFAULT NULL,
  `bRowAuthControlled` bit(1) DEFAULT NULL,
  `bVmExclude` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否是从ViewModel中排列',
  `bRowAuthDim` bit(1) DEFAULT b'0',
  `sysid` bigint(20) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `isprint` tinyint(1) NOT NULL DEFAULT 1,
  `multiple` bit(1) DEFAULT NULL,
  `isshoprelated` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否门店相关',
  `depends` varchar(50) DEFAULT NULL,
  `iSystem` tinyint(1) NOT NULL DEFAULT 1,
  `auth_level` smallint(6) DEFAULT 3,
  `cDefineName` varchar(1000) DEFAULT NULL,
  `enterDirection` int(10) NOT NULL DEFAULT 4,
  `isExport` tinyint(1) NOT NULL DEFAULT 1,
  `isMasterOrg` bit(1) DEFAULT NULL,
  `uncopyable` tinyint(1) NOT NULL DEFAULT 0,
  `cSensFieldName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  KEY `iBillId_Index` (`iBillId`) USING BTREE,
  KEY `iBllEntityId_Index` (`iBillEntityId`) USING BTREE,
  KEY `iBillTplGroupId_Index` (`iBillTplGroupId`) USING BTREE,
  KEY `is_deleted_Index` (`isDeleted`) USING BTREE,
  KEY `iTplId_Index` (`iTplId`) USING BTREE,
  KEY `cUserId_Index` (`cUserId`) USING BTREE,
  KEY `billitem_base_tenant_id_idx` (`tenant_id`) USING BTREE,
  KEY `billitem_base_cname_idx` (`cName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.billitem_set
CREATE TABLE IF NOT EXISTS `billitem_set` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `iItemId` bigint(20) DEFAULT NULL,
  `cUserId` varchar(45) NOT NULL DEFAULT '' COMMENT '用户信息',
  `iBillId` bigint(20) NOT NULL COMMENT '所属bill',
  `iBillEntityId` bigint(20) NOT NULL COMMENT 'billentityid',
  `iBillTplGroupId` bigint(20) NOT NULL COMMENT '所属billtplgroup',
  `iTplId` bigint(20) NOT NULL COMMENT '模版id',
  `cFieldName` varchar(100) DEFAULT NULL COMMENT '带关联关系的字段名',
  `cName` varchar(200) NOT NULL,
  `cCaption` varchar(45) DEFAULT NULL COMMENT '名称',
  `cShowCaption` varchar(45) DEFAULT NULL COMMENT '显示名称',
  `iOrder` float(10,2) DEFAULT NULL,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `bHidden` tinyint(1) DEFAULT NULL COMMENT '是否隐藏',
  `iColWidth` int(11) DEFAULT NULL COMMENT '列宽',
  `bShowIt` tinyint(1) DEFAULT NULL COMMENT '是否是显示字段',
  `bFixed` tinyint(1) DEFAULT NULL COMMENT '是否是固定列',
  `cStyle` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`cUserId`,`iBillTplGroupId`,`iBillEntityId`,`cName`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  KEY `iBillId_Index` (`iBillId`) USING BTREE,
  KEY `iBllEntityId_Index` (`iBillEntityId`) USING BTREE,
  KEY `iBillTplGroupId_Index` (`iBillTplGroupId`) USING BTREE,
  KEY `iTplId_Index` (`iTplId`) USING BTREE,
  KEY `cUserId_Index` (`cUserId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=58101 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.billruleregister
CREATE TABLE IF NOT EXISTS `billruleregister` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `billnum` varchar(60) NOT NULL,
  `action` varchar(30) NOT NULL,
  `ruleId` varchar(60) DEFAULT NULL,
  `iorder` float(10,2) DEFAULT NULL,
  `overrule` varchar(100) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `key` varchar(64) DEFAULT NULL,
  `isSystem` bit(1) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `isSync` tinyint(1) NOT NULL DEFAULT 0,
  `isAsyn` tinyint(1) NOT NULL DEFAULT 0,
  `config` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_billruleregister_tenantid` (`tenant_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1397087 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.billtemplate_base
CREATE TABLE IF NOT EXISTS `billtemplate_base` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cName` varchar(100) DEFAULT NULL COMMENT '模版名称',
  `iOrder` int(11) DEFAULT NULL COMMENT '排序号，从高到低排',
  `iTplMode` int(11) NOT NULL COMMENT '模版类型,0代表显示模版，1代表打印模版，2代表word模版',
  `iBillId` bigint(20) NOT NULL COMMENT '所属bill',
  `cTotalColor` varchar(45) DEFAULT NULL COMMENT '表体合计行颜色',
  `cAmongColor` varchar(45) DEFAULT NULL COMMENT '隔行颜色',
  `iWidth` int(11) DEFAULT NULL COMMENT '画布宽度',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除标记',
  `cPrintSetting` varchar(2000) DEFAULT NULL COMMENT '打印设置',
  `cPageHeader` varchar(1000) DEFAULT NULL COMMENT '页眉',
  `cPageFooter` varchar(1000) DEFAULT NULL COMMENT '页脚',
  `cFixedColor` varchar(45) DEFAULT NULL COMMENT '固定行颜色',
  `cTitleHeight` varchar(45) DEFAULT NULL COMMENT '标题区高度',
  `iPrintTotal` int(11) DEFAULT NULL COMMENT '是否打印具体行\r\n00000000,第一位代表打印合计行，第二位代表打印小计行，第三位代表表体标题行\r\n',
  `iFixedCols` int(11) DEFAULT NULL COMMENT '固定列数',
  `cMemo` varchar(1000) DEFAULT NULL COMMENT '备注',
  `cTitle` varchar(200) DEFAULT NULL COMMENT '模版标题',
  `iGridStyle` int(11) DEFAULT NULL COMMENT '网格风格',
  `cRowLayout` varchar(2000) DEFAULT NULL COMMENT '行布局',
  `cTitleStyle` varchar(500) DEFAULT NULL COMMENT '标题风格，比如字体，可以用xml或者json',
  `sysid` bigint(20) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `templateType` varchar(20) DEFAULT NULL COMMENT '模板类型，目前主要用于指定触屏模板类型',
  `systemCode` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  KEY `iTplMode_Index` (`iTplMode`) USING BTREE,
  KEY `iBillId_Index` (`iBillId`) USING BTREE,
  KEY `is_deleted_Index` (`isDeleted`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1443570 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.billtplgroup_base
CREATE TABLE IF NOT EXISTS `billtplgroup_base` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cCode` varchar(45) NOT NULL COMMENT 'group编码',
  `cSubId` varchar(45) DEFAULT NULL COMMENT '子产品号',
  `cName` varchar(100) DEFAULT NULL COMMENT 'Group名称',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `iOrder` int(11) DEFAULT NULL COMMENT '排序号，从高到低排',
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除标记',
  `cPrimaryKey` varchar(100) DEFAULT NULL COMMENT 'cDsName主键名称',
  `cDataSourceName` varchar(100) DEFAULT NULL COMMENT '数据源名称，可能是一个表或者一个试图',
  `iBillId` bigint(20) NOT NULL COMMENT '所属bill',
  `iBillEntityId` bigint(20) NOT NULL COMMENT '所属billentity',
  `iSystem` tinyint(1) DEFAULT 0 COMMENT 'bit型，0代表系统定义，其他再细分客户／行业等',
  `bMain` tinyint(1) DEFAULT NULL COMMENT ' 是否主表',
  `cForeignKey` varchar(100) DEFAULT NULL COMMENT '如果是子表，则该字段代表该子表中存的主表主键',
  `cParentDataSource` varchar(45) DEFAULT NULL COMMENT '主表数据源名称，如果是子表填此项，否则为null',
  `iTplId` bigint(20) NOT NULL COMMENT '模版id',
  `cImage` varchar(100) DEFAULT NULL COMMENT '图标',
  `cType` varchar(45) DEFAULT NULL COMMENT 'group标识类型，比如TabControl,Grid,Tree,Table等',
  `iParentId` bigint(20) DEFAULT NULL COMMENT '父级billtplgroupid',
  `cAlign` varchar(45) DEFAULT NULL COMMENT 'group的排列方式',
  `iCols` int(11) DEFAULT NULL,
  `cStyle` varchar(1000) DEFAULT NULL,
  `sysid` bigint(20) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `cDataRule` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`id`) USING BTREE,
  KEY `iBillId_Index` (`iBillId`) USING BTREE,
  KEY `iBillEntityId_Index` (`iBillEntityId`) USING BTREE,
  KEY `iTplId_Index` (`iTplId`) USING BTREE,
  KEY `is_deleted_Index` (`isDeleted`) USING BTREE,
  KEY `iParentId_Index` (`iParentId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=69839124 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_base
CREATE TABLE IF NOT EXISTS `bill_base` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '表单主表主键',
  `cBillNo` varchar(40) NOT NULL COMMENT '单据编号-cardnumber',
  `cName` varchar(200) NOT NULL COMMENT '单据名称',
  `cCardKey` varchar(100) DEFAULT NULL COMMENT '单据cardNumber(对于列表来说，此字段代表列表所对应的单据的cardNumber）',
  `cSubId` varchar(45) DEFAULT NULL COMMENT '子产品ID',
  `iDefTplId` bigint(20) DEFAULT NULL COMMENT '单据默认显示模版',
  `iDefPrnTplId` bigint(20) DEFAULT NULL COMMENT '单据默认打印模版',
  `iOrder` int(11) DEFAULT NULL COMMENT '排序号，从高往低排序',
  `bAllowMultiTpl` tinyint(1) DEFAULT NULL COMMENT '是否允许多模版',
  `cDefWhere` varchar(1000) DEFAULT NULL COMMENT '单据识别条件',
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '逻辑删除标记',
  `bPrintLimited` tinyint(1) DEFAULT NULL COMMENT '是否打印控制',
  `iSystem` tinyint(1) DEFAULT 0 COMMENT 'bit型，0代表系统定义，其他再细分客户／行业等',
  `cAuthId` varchar(45) DEFAULT NULL COMMENT '权限号',
  `cBillType` varchar(45) DEFAULT NULL COMMENT '标识是单据，列表还是档案',
  `cBeanId` varchar(100) DEFAULT NULL COMMENT 'billservice,beanid—ufsystem的billregister的beanid',
  `cFilterId` varchar(100) DEFAULT NULL COMMENT 'BillType为列表时列表的过滤ID  cFilterId',
  `bRowAuthControl` bit(1) DEFAULT NULL,
  `bColumnAuthControl` bit(1) DEFAULT NULL,
  `bRowAuthObject` bit(1) DEFAULT NULL,
  `bColumnAuthControlled` bit(1) DEFAULT NULL COMMENT '是否控制字段权限',
  `bRowAuthControlled` bit(1) DEFAULT NULL COMMENT '是否控制记录权限',
  `cPersonDataSource` varchar(100) DEFAULT NULL,
  `cCarry` varchar(200) DEFAULT NULL,
  `authGroupKey` varchar(100) DEFAULT NULL,
  `printBoPk` varchar(100) DEFAULT NULL COMMENT '打印业务对象的主键',
  `sysid` bigint(20) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `datasourcetype` varchar(100) DEFAULT NULL,
  `datasourcesql` varchar(2000) DEFAULT NULL,
  `batchoperate` bit(1) DEFAULT b'1',
  `authType` varchar(40) DEFAULT NULL,
  `pkField` varchar(10) DEFAULT NULL,
  `parentField` varchar(10) DEFAULT NULL,
  `domain` varchar(20) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `isSupportBpm` bit(1) DEFAULT NULL,
  `isBpmInited` bit(1) DEFAULT b'0',
  `isCoded` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id_UNIQUE` (`cBillNo`,`tenant_id`) USING BTREE,
  KEY `cBillNo_Index` (`cBillNo`) USING BTREE,
  KEY `is_deleted_Index` (`isDeleted`) USING BTREE,
  KEY `iOrder_Index` (`iOrder`) USING BTREE,
  KEY `cBillType_Index` (`cBillType`) USING BTREE,
  KEY `i_tenant_id` (`tenant_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1001336299 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_command
CREATE TABLE IF NOT EXISTS `bill_command` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `action` varchar(100) NOT NULL,
  `billnumber` varchar(200) NOT NULL,
  `target` varchar(200) DEFAULT NULL,
  `ruleid` varchar(100) DEFAULT NULL,
  `parameter` varchar(200) DEFAULT NULL COMMENT '命令参数',
  `svcurl` varchar(1000) DEFAULT NULL,
  `httpmethod` varchar(10) DEFAULT NULL,
  `subid` varchar(32) DEFAULT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tenant_id` varchar(50) DEFAULT NULL,
  `authid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `billnumber_Index` (`billnumber`) USING BTREE,
  KEY `tenant_Index` (`tenant_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=71648426 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_customerdef
CREATE TABLE IF NOT EXISTS `bill_customerdef` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `cbillno` varchar(40) NOT NULL,
  `extscripturl` varchar(500) NOT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_itemrule
CREATE TABLE IF NOT EXISTS `bill_itemrule` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `billnumber` varchar(200) NOT NULL,
  `ruleid` varchar(100) NOT NULL,
  `rulename` varchar(200) DEFAULT NULL,
  `ruletype` int(11) DEFAULT 0,
  `entity` varchar(200) NOT NULL,
  `item` varchar(200) NOT NULL,
  `defined` tinyint(1) DEFAULT 0,
  `condition` varchar(2000) DEFAULT NULL,
  `expression` varchar(2000) NOT NULL,
  `triggers` varchar(1000) DEFAULT NULL,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sysid` bigint(20) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_itemrule_define
CREATE TABLE IF NOT EXISTS `bill_itemrule_define` (
  `id` varchar(36) NOT NULL COMMENT '公式定义ID',
  `text` varchar(1000) DEFAULT NULL COMMENT '公式定义原始文本',
  `source` varchar(2000) NOT NULL COMMENT '经过编译的公式表达式',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_itemrule_script
CREATE TABLE IF NOT EXISTS `bill_itemrule_script` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `billnumber` varchar(100) NOT NULL,
  `language` varchar(100) NOT NULL,
  `script` text DEFAULT NULL,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tenant_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_jointquery
CREATE TABLE IF NOT EXISTS `bill_jointquery` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `billnumber` varchar(200) NOT NULL,
  `entity` varchar(200) NOT NULL,
  `item` varchar(200) NOT NULL,
  `target` varchar(2000) DEFAULT NULL,
  `targettype` int(11) DEFAULT 0,
  `condition` varchar(1000) DEFAULT NULL,
  `action` varchar(200) DEFAULT NULL,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1501 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_jointquery_parameter
CREATE TABLE IF NOT EXISTS `bill_jointquery_parameter` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `queryid` bigint(20) NOT NULL,
  `paraname` varchar(100) NOT NULL,
  `source` varchar(1000) NOT NULL,
  `operator` varchar(100) DEFAULT NULL,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_process
CREATE TABLE IF NOT EXISTS `bill_process` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `billnumber` varchar(200) NOT NULL,
  `condition` varchar(2000) DEFAULT NULL,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_process_node
CREATE TABLE IF NOT EXISTS `bill_process_node` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `processid` bigint(20) NOT NULL,
  `nodekey` varchar(100) NOT NULL DEFAULT 'key',
  `title` varchar(200) NOT NULL,
  `order` int(11) NOT NULL,
  `value` varchar(1000) DEFAULT NULL,
  `statusstyle` varchar(100) DEFAULT NULL,
  `status` varchar(1000) DEFAULT NULL,
  `actionstyle` varchar(100) DEFAULT NULL,
  `actiontext` varchar(1000) DEFAULT NULL,
  `command` varchar(100) DEFAULT NULL,
  `summary` varchar(1000) DEFAULT NULL,
  `condition` varchar(1000) DEFAULT NULL,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_status
CREATE TABLE IF NOT EXISTS `bill_status` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `billnumber` varchar(200) NOT NULL,
  `cmdvisible` int(11) DEFAULT 1,
  `cmdenable` int(11) DEFAULT 1,
  `itemvisible` int(11) DEFAULT 1,
  `itemenable` int(11) DEFAULT 1,
  `condition` varchar(400) DEFAULT NULL,
  `subId` varchar(32) DEFAULT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tenant_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24374 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_status_config
CREATE TABLE IF NOT EXISTS `bill_status_config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `billnumber` varchar(200) NOT NULL,
  `basedon` varchar(1000) DEFAULT NULL,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tenant_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=232152 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_status_profile
CREATE TABLE IF NOT EXISTS `bill_status_profile` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `billnumber` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `item` varchar(200) NOT NULL,
  `cGroup` varchar(100) NOT NULL,
  `visible` int(11) DEFAULT 0,
  `enable` int(11) DEFAULT 0,
  `subid` varchar(32) NOT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tenant_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `billnumber_Index` (`billnumber`) USING BTREE,
  KEY `item_Index` (`item`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=423253 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_toolbar
CREATE TABLE IF NOT EXISTS `bill_toolbar` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `billnumber` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `ismain` tinyint(1) DEFAULT NULL,
  `parent` varchar(200) DEFAULT NULL,
  `orderNum` int(11) DEFAULT 0,
  `align` varchar(100) NOT NULL,
  `subid` varchar(32) DEFAULT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `childrenField` varchar(200) DEFAULT NULL,
  `tplmode` int(11) DEFAULT 0,
  `cStyle` varchar(255) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `templateType` varchar(20) NOT NULL DEFAULT '1' COMMENT '模板类型，目前主要用于终端类型',
  `terminalType` varchar(20) NOT NULL DEFAULT '1' COMMENT '终端类型',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `billnumber_Index` (`billnumber`) USING BTREE,
  KEY `name_Index` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=74099779 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.bill_toolbaritem
CREATE TABLE IF NOT EXISTS `bill_toolbaritem` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `billnumber` varchar(100) NOT NULL,
  `toolbar` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `command` varchar(100) DEFAULT NULL,
  `authid` varchar(100) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `style` int(11) DEFAULT 0,
  `text` varchar(200) DEFAULT NULL,
  `imgsrc` varchar(400) DEFAULT NULL,
  `parent` varchar(100) DEFAULT NULL,
  `parameter` varchar(200) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `subid` varchar(32) DEFAULT NULL,
  `system` int(11) DEFAULT 0,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `authcontrol` bit(1) DEFAULT b'1',
  `authname` varchar(200) DEFAULT NULL,
  `bMerge` bit(1) DEFAULT b'0',
  `icon` varchar(20) DEFAULT NULL,
  `sysid` bigint(20) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `auth_level` smallint(6) DEFAULT 3,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `billnumber_Index` (`billnumber`) USING BTREE,
  KEY `tenant_Index` (`tenant_id`) USING BTREE,
  KEY `name_Index` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=74132385 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.gen_ten_ext_code
CREATE TABLE IF NOT EXISTS `gen_ten_ext_code` (
  `id` varchar(64) NOT NULL,
  `fileName` varchar(300) DEFAULT NULL,
  `fileContent` text DEFAULT NULL,
  `tenantId` varchar(64) DEFAULT NULL,
  `billNo` varchar(64) DEFAULT NULL,
  `domain` varchar(64) DEFAULT NULL,
  `isEffect` int(2) DEFAULT 0 COMMENT '0：不生效 1：生效',
  `creater` varchar(255) DEFAULT NULL,
  `last_modified` varchar(255) DEFAULT NULL COMMENT '修改时间',
  `last_modify_user` varchar(64) DEFAULT NULL COMMENT '修改人',
  `last_modify_user_name` varchar(64) DEFAULT NULL COMMENT '修改人名称',
  `create_time` varchar(28) DEFAULT NULL COMMENT '创建时间',
  `create_user` varchar(64) DEFAULT NULL COMMENT '创建人',
  `create_user_name` varchar(64) DEFAULT NULL COMMENT '创建人名称',
  `dr` int(2) DEFAULT 0 COMMENT '删除标识',
  `ts` varchar(255) DEFAULT NULL COMMENT '日期',
  `tenant_Id` varchar(64) DEFAULT NULL,
  `source_flag` int(2) DEFAULT 1 COMMENT '脚本来源： 1：前端 2：后端',
  `fk_fun` varchar(64) DEFAULT NULL COMMENT '外键',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.gql_app_auth
CREATE TABLE IF NOT EXISTS `gql_app_auth` (
  `id` varchar(36) COLLATE utf8mb4_bin NOT NULL,
  `fk_mdd_fun` varchar(36) COLLATE utf8mb4_bin DEFAULT NULL,
  `app_id` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  `app_name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `api_name` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_app` (`api_name`,`app_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_filter_graphql
CREATE TABLE IF NOT EXISTS `pb_filter_graphql` (
  `id` varchar(36) NOT NULL,
  `filter_id` varchar(36) NOT NULL,
  `app_id` varchar(100) NOT NULL,
  `filter_name` varchar(200) NOT NULL,
  `uri` varchar(200) NOT NULL,
  `filter_json` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_appid` (`app_id`) USING BTREE,
  KEY `idx_filter_id` (`filter_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_filter_quick
CREATE TABLE IF NOT EXISTS `pb_filter_quick` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemName` varchar(50) DEFAULT NULL,
  `userId` varchar(50) DEFAULT NULL,
  `filtersId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_filter_solution
CREATE TABLE IF NOT EXISTS `pb_filter_solution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filtersId` int(11) DEFAULT NULL,
  `solutionName` varchar(255) DEFAULT NULL,
  `isDefault` int(11) DEFAULT NULL,
  `isPublic` int(11) DEFAULT NULL,
  `userId` varchar(50) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `terminalType` varchar(20) NOT NULL DEFAULT '1' COMMENT '终端类型',
  `tenant_id` varchar(50) DEFAULT NULL,
  `sysid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_filter_solution_filtersId` (`filtersId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=711867124 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_filter_solution_advance
CREATE TABLE IF NOT EXISTS `pb_filter_solution_advance` (
  `id` varchar(50) NOT NULL,
  `parentId` varchar(50) DEFAULT NULL,
  `solutionId` int(11) DEFAULT NULL,
  `logicSymbol` enum('and','or') DEFAULT NULL,
  `itemId` bigint(20) DEFAULT NULL,
  `itemName` varchar(50) DEFAULT NULL,
  `compareLogic` enum('is_not_null','is_null','between','like','rightlike','leftlike','egt','elt','gt','lt','neq','nin','in','eq') DEFAULT NULL,
  `value1` varchar(50) DEFAULT NULL,
  `value2` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_filter_solution_common
CREATE TABLE IF NOT EXISTS `pb_filter_solution_common` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `solutionId` int(11) DEFAULT NULL,
  `itemName` varchar(255) DEFAULT NULL,
  `itemId` bigint(20) DEFAULT NULL,
  `itemTitle` varchar(50) DEFAULT NULL,
  `refType` int(11) DEFAULT NULL,
  `isCommon` int(11) DEFAULT NULL,
  `rangeInput` int(11) DEFAULT NULL,
  `multSelect` int(11) DEFAULT NULL,
  `compareLogic` enum('is_not_null','is_null','between','like','rightlike','leftlike','egt','elt','gt','lt','neq','nin','in','eq') DEFAULT NULL,
  `defaultVal1` varchar(50) DEFAULT NULL,
  `defaultVal2` varchar(50) DEFAULT NULL,
  `orderId` float(10,2) DEFAULT NULL,
  `saveHistory` int(11) DEFAULT NULL,
  `checkRefer` int(11) DEFAULT NULL,
  `pb_filter_solution_commoncol` varchar(45) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `defineId` varchar(100) DEFAULT NULL COMMENT '自定义项对应字段',
  `itemType` varchar(100) DEFAULT NULL,
  `refercode` varchar(255) DEFAULT NULL,
  `bhidden` bit(1) DEFAULT b'0',
  `isshoprelated` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否门店相关',
  `cEnumType` varchar(40) DEFAULT NULL,
  `bEnum` tinyint(4) DEFAULT NULL,
  `bAutoflt` tinyint(4) DEFAULT NULL,
  `cDataRule` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `pb_filter_solution_common_tenant_id_idx` (`tenant_id`) USING BTREE,
  KEY `idx_filter_solution_common_id` (`solutionId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=712555933 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_meta_filters
CREATE TABLE IF NOT EXISTS `pb_meta_filters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filterName` varchar(50) DEFAULT NULL,
  `filterDesc` varchar(500) DEFAULT NULL,
  `subId` varchar(50) DEFAULT NULL,
  `createTime` varchar(25) DEFAULT NULL,
  `updateTime` varchar(26) DEFAULT NULL,
  `isUpGrade` int(11) DEFAULT NULL,
  `dr` int(11) DEFAULT NULL,
  `advanceSupport` int(11) DEFAULT NULL,
  `behaviorObject` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=73379390 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_meta_filter_item
CREATE TABLE IF NOT EXISTS `pb_meta_filter_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filtersId` int(11) DEFAULT NULL,
  `itemName` varchar(1000) DEFAULT NULL,
  `itemTitle` varchar(50) DEFAULT NULL,
  `itemType` varchar(100) DEFAULT NULL,
  `referId` int(11) DEFAULT NULL,
  `referCode` varchar(255) DEFAULT NULL,
  `refType` int(11) DEFAULT NULL,
  `refReturn` varchar(64) DEFAULT NULL,
  `compareLogic` enum('is_not_null','is_null','between','like','rightlike','leftlike','egt','elt','gt','lt','neq','in','nin','eq') DEFAULT NULL,
  `iprecision` int(11) DEFAULT NULL,
  `dataSource` varchar(300) DEFAULT NULL,
  `descValue` int(11) DEFAULT NULL,
  `isCommon` int(11) DEFAULT NULL,
  `mustInput` int(11) DEFAULT NULL,
  `rangeInput` int(11) DEFAULT NULL,
  `multSelect` int(11) DEFAULT NULL,
  `allowUpdateCompare` int(11) DEFAULT NULL,
  `orLogic` int(11) DEFAULT NULL,
  `defaultVal1` varchar(50) DEFAULT NULL,
  `defaultVal2` varchar(50) DEFAULT NULL,
  `groupName` varchar(50) DEFAULT NULL,
  `isSys` int(11) DEFAULT NULL,
  `createTime` varchar(25) DEFAULT NULL,
  `updateTime` varchar(25) DEFAULT NULL,
  `dr` int(11) DEFAULT NULL,
  `cEnumType` varchar(45) DEFAULT NULL,
  `bEnum` tinyint(4) DEFAULT NULL,
  `bAutoflt` tinyint(4) DEFAULT NULL,
  `displayname` varchar(64) DEFAULT NULL,
  `cFormatData` varchar(45) DEFAULT NULL,
  `extendField` varchar(100) DEFAULT NULL,
  `auth_level` smallint(6) DEFAULT 3,
  `isMasterOrg` bit(1) DEFAULT b'0',
  `cDataRule` varchar(200) DEFAULT NULL,
  `attribute` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_filter_item_filtersId` (`filtersId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=712139841 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pb_meta_filter_item_ext
CREATE TABLE IF NOT EXISTS `pb_meta_filter_item_ext` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `filtersId` int(11) DEFAULT NULL,
  `itemName` varchar(255) NOT NULL,
  `itemTitle` varchar(50) DEFAULT NULL,
  `itemType` varchar(100) DEFAULT NULL,
  `referId` int(11) DEFAULT NULL,
  `referCode` varchar(255) DEFAULT NULL,
  `refType` int(11) DEFAULT NULL,
  `refReturn` varchar(64) DEFAULT NULL,
  `compareLogic` enum('is_not_null','is_null','between','like','rightlike','leftlike','egt','elt','gt','lt','neq','in','nin','eq') DEFAULT NULL,
  `iprecision` int(11) DEFAULT NULL,
  `dataSource` varchar(500) DEFAULT NULL,
  `descValue` int(11) DEFAULT NULL,
  `isCommon` int(11) DEFAULT NULL,
  `mustInput` int(11) DEFAULT NULL,
  `rangeInput` int(11) DEFAULT NULL,
  `multSelect` int(11) DEFAULT NULL,
  `allowUpdateCompare` int(11) DEFAULT NULL,
  `orLogic` int(11) DEFAULT NULL,
  `defaultVal1` varchar(50) DEFAULT NULL,
  `defaultVal2` varchar(50) DEFAULT NULL,
  `groupName` varchar(50) DEFAULT NULL,
  `isSys` int(11) DEFAULT NULL,
  `createTime` varchar(25) DEFAULT NULL,
  `updateTime` varchar(25) DEFAULT NULL,
  `dr` int(11) DEFAULT NULL,
  `cEnumType` varchar(45) DEFAULT NULL,
  `bEnum` tinyint(4) DEFAULT NULL,
  `bAutoflt` tinyint(4) DEFAULT NULL,
  `displayname` varchar(64) DEFAULT NULL,
  `cFormatData` varchar(45) DEFAULT NULL,
  `extendField` varchar(100) DEFAULT NULL,
  `auth_level` smallint(6) DEFAULT 3,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `tenant_id` bigint(20) NOT NULL,
  `itemNameDesc` varchar(500) DEFAULT NULL,
  `isMasterOrg` bit(1) DEFAULT b'0',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_filter_item_filtersid` (`filtersId`) USING BTREE,
  KEY `idx_filter_item_tenantid` (`tenant_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.pub_ref
CREATE TABLE IF NOT EXISTS `pub_ref` (
  `id` int(32) NOT NULL DEFAULT 0,
  `code` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `reftype` varchar(100) DEFAULT NULL,
  `isorgrel` bit(1) DEFAULT NULL,
  `datasourcetype` varchar(100) DEFAULT NULL,
  `datasourcesql` varchar(2000) DEFAULT NULL,
  `datasourcegridsql` varchar(100) DEFAULT NULL,
  `iparentrefid` int(11) DEFAULT NULL,
  `csub_id` varchar(100) DEFAULT NULL,
  `centitykeyfld` varchar(100) DEFAULT NULL,
  `ctpltype` varchar(100) DEFAULT NULL,
  `centitynamefld` varchar(100) DEFAULT NULL,
  `cretfld` varchar(100) DEFAULT NULL,
  `bmultisel` bit(1) DEFAULT NULL,
  `creffiltersql` varchar(100) DEFAULT NULL,
  `cautocompletefiltersql` varchar(100) DEFAULT NULL,
  `bauth` bit(1) DEFAULT NULL,
  `ccheckflds` varchar(100) DEFAULT NULL,
  `ctipprefix` varchar(100) DEFAULT NULL,
  `ctipfld` varchar(100) DEFAULT NULL,
  `ifilterstyle` int(11) DEFAULT NULL,
  `ishowstyle` int(11) DEFAULT NULL,
  `bpage` bit(1) DEFAULT NULL,
  `lPageSize` varchar(100) DEFAULT NULL,
  `cdatagrid_fullname` varchar(100) DEFAULT NULL,
  `cdatagrid_classfk` varchar(100) DEFAULT NULL,
  `cdataclass_fullname` varchar(100) DEFAULT NULL,
  `cdataclass_refclsname` varchar(100) DEFAULT NULL,
  `bdataclass_rule` bit(1) DEFAULT NULL,
  `bdataclass_retenddata` bit(1) DEFAULT NULL,
  `cdataclass_lscode` varchar(100) DEFAULT NULL,
  `cdataclass_lsname` varchar(100) DEFAULT NULL,
  `cdataclass_sortfield` varchar(100) DEFAULT NULL,
  `clsname` varchar(100) DEFAULT NULL,
  `sortfield` varchar(100) DEFAULT NULL,
  `cbillnum` varchar(100) DEFAULT NULL,
  `eventbean` varchar(200) DEFAULT NULL,
  `svcKey` varchar(100) DEFAULT NULL,
  `cFilterId` varchar(100) DEFAULT NULL,
  `authType` varchar(40) DEFAULT NULL,
  `extendField` varchar(100) DEFAULT NULL,
  `domain` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `pub_ref_code_idx` (`code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table iuap_cloud_basedoc.rulelog
CREATE TABLE IF NOT EXISTS `rulelog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `ruleid` varchar(60) DEFAULT NULL,
  `billnum` varchar(60) NOT NULL,
  `ruleaction` varchar(30) NOT NULL,
  `iorder` float(10,2) DEFAULT NULL,
  `tenant_id` varchar(50) DEFAULT NULL,
  `pubts` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '时间戳',
  `issuccess` int(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
