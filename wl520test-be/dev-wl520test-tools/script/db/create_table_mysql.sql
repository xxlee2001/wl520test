####################
--	客户报价单
####################
-- ----------------------------
-- Table structure for mdd_cus_quotation
-- ----------------------------
DROP TABLE IF EXISTS `mdd_cus_quotation`;
CREATE TABLE `mdd_cus_quotation` (
	`transaction_type` varchar(36) COMMENT '交易类型',
	`quotation_num` varchar(64) COMMENT '报价单号',
	`bill_date` datetime COMMENT '单据日期',
	`customer_id` bigint COMMENT '客户档案ID',
	`cus_contacts` varchar(255) COMMENT '客户联系人',
	`cus_contacts_tel` varchar(255) COMMENT '客户联系人固定电话',
	`cus_contacts_mobil` varchar(255) COMMENT '客户联系人手机号',
	`salesman_id` varchar(36) COMMENT '销售业务员',
	`trans_currency_id` varchar(36) COMMENT '交易币种',
	`local_currency_id` varchar(36) COMMENT '本币',
	`exchange_rate` varchar(36) COMMENT '汇率',
	`tax_free_amount` decimal(11,6) COMMENT '无税金额',
	`tax_amount` decimal(11,6) COMMENT '税额',
	`value_tax_total` decimal(11,6) COMMENT '价税合计',
	`tax_free_in_local` decimal(11,6) COMMENT '本币无税金额',
	`tax_in_local` decimal(11,6) COMMENT '本币税额',
	`value_tax_in_local` decimal(11,6) COMMENT '本币价税合计',
	`memo` varchar(255) COMMENT '备注',
	`inquiry_org_id` varchar(36) COMMENT '询价组织',
	`inquiry_dept_id` varchar(36) COMMENT '询价部门',
	`customer_vip` int(64) COMMENT '客户VIP属性',
	`id` varchar(64) NOT NULL COMMENT 'ID',
	`pubts` timestamp COMMENT '时间戳' NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`isWfControlled` bit DEFAULT 0 COMMENT '是否审批流控制',
	`verifystate` smallint DEFAULT 0 COMMENT '审批状态',
	`returncount` smallint DEFAULT 0 COMMENT '退回次数',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8;
-- ----------------------------
-- Table structure for mdd_cus_quotation_materiel
-- ----------------------------
DROP TABLE IF EXISTS `mdd_cus_quotation_materiel`;
CREATE TABLE `mdd_cus_quotation_materiel` (
	`materiel_id` bigint COMMENT '物料ID',
	`materiel_num` varchar(64) COMMENT '物料编号',
	`unit_name` varchar(64) COMMENT '主单位名称',
	`sku_id` varchar(64) COMMENT '物料SKU_ID',
	`sku_num` varchar(64) COMMENT '物料SKU编号',
	`sku_name` varchar(64) COMMENT '物料SKU名称',
	`quantity` decimal(11,6) COMMENT '数量',
	`inventory_quantity` decimal(11,6) COMMENT '库存数量',
	`inventory_unit` varchar(64) COMMENT '库存单位',
	`valuation_quantity` decimal(11,6) COMMENT '计价数量',
	`valuation_unit` varchar(64) COMMENT '计价单位',
	`tax_free_price` decimal(11,6) COMMENT '无税单价',
	`tax_rate` decimal(11,6) COMMENT '税率',
	`tax_price` decimal(11,6) COMMENT '含税单价',
	`tax_free_amount` decimal(11,6) COMMENT '无税金额',
	`tax_amount` decimal(11,6) COMMENT '税额',
	`value_tax_total` decimal(11,6) COMMENT '价税合计',
	`tax_free_price_in_local` decimal(11,6) COMMENT '本币无税单价',
	`tax_price_in_local` decimal(11,6) COMMENT '本币含税单价',
	`tax_free_in_local` decimal(11,6) COMMENT '本币无税金额',
	`tax_in_local` decimal(11,6) COMMENT '本币税额',
	`value_tax_in_local` decimal(11,6) COMMENT '本币价税合计',
	`buyer` varchar(36) COMMENT '采购员/专管员',
	`memo` varchar(255) COMMENT '备注',
	`cus_quotation_id` varchar(64) NOT NULL COMMENT '客户报价单主键',
	`id` varchar(64) NOT NULL COMMENT 'ID',
	`pubts` timestamp COMMENT '时间戳' NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	KEY `IX_cus_quotation_id` (`cus_quotation_id`) COMMENT '客户报价单主键',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8;
