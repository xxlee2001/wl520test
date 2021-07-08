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

-- Dumping data for table iuap_cloud_basedoc.aa_billcode_candidateprop: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billcode_candidateprop` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billcode_candidateprop` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billcode_mapping: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billcode_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billcode_mapping` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billcode_mappingchild: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billcode_mappingchild` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billcode_mappingchild` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billcode_obj: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billcode_obj` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billcode_obj` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billhistory: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billhistory` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billnumber: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billnumber` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billnumber` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billprecode: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billprecode` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billprecode` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billprefabricate: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billprefabricate` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billprefabricate` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billprefix: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billprefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billprefix` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_billreturn: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_billreturn` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_billreturn` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.aa_enum: ~0 rows (大约)
/*!40000 ALTER TABLE `aa_enum` DISABLE KEYS */;
/*!40000 ALTER TABLE `aa_enum` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.billentity_base: ~0 rows (大约)
/*!40000 ALTER TABLE `billentity_base` DISABLE KEYS */;
/*!40000 ALTER TABLE `billentity_base` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.billforeignkey: ~0 rows (大约)
/*!40000 ALTER TABLE `billforeignkey` DISABLE KEYS */;
/*!40000 ALTER TABLE `billforeignkey` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.billitem_base: ~0 rows (大约)
/*!40000 ALTER TABLE `billitem_base` DISABLE KEYS */;
/*!40000 ALTER TABLE `billitem_base` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.billitem_set: ~0 rows (大约)
/*!40000 ALTER TABLE `billitem_set` DISABLE KEYS */;
/*!40000 ALTER TABLE `billitem_set` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.billruleregister: ~23 rows (大约)
/*!40000 ALTER TABLE `billruleregister` DISABLE KEYS */;
INSERT IGNORE INTO `billruleregister` (`id`, `billnum`, `action`, `ruleId`, `iorder`, `overrule`, `tenant_id`, `key`, `isSystem`, `url`, `isSync`, `isAsyn`, `config`) VALUES
	(1397064, 'common', 'uimeta', 'uimetaLoadRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397065, 'common', 'add', 'mddAddRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397066, 'common', 'check', 'mddCheckUniqueRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397067, 'common', 'delete', 'mddReferenceCheckRule', 20.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397068, 'common', 'delete', 'mddDeleteRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397069, 'common', 'detail', 'mddDetailRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397070, 'common', 'query', 'mddQueryRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397071, 'common', 'querytree', 'mddQueryTreeRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397072, 'common', 'refer', 'mddReferDataRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397073, 'common', 'save', 'mddSaveRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397074, 'common', 'save', 'mddRefreshTsRule', 40.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397075, 'common', 'save', 'mddFillPKRule', 20.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397076, 'common', 'movefirst', 'mddMoveFirstRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397077, 'common', 'movelast', 'mddMoveLastRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397078, 'common', 'movenext', 'mddMoveNextRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397079, 'common', 'moveprev', 'mddMovePrevRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397080, 'common', 'movefirst', 'mddDetailRule', 40.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397081, 'common', 'movelast', 'mddDetailRule', 40.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397082, 'common', 'movenext', 'mddDetailRule', 40.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397083, 'common', 'moveprev', 'mddDetailRule', 40.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397084, 'common', 'submit', 'mddSubmitRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397085, 'common', 'unsubmit', 'mddUnSubmitRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(1397086, 'common', 'audit', 'mddAuditRule', 30.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
	(3016652, 'common', 'add', 'mobileMddAddRule', 32.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
    (3017220, 'common', 'save', 'mobileMddUpdateBillCodeRule', 29.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL),
    (3017221, 'common', 'delete', 'mobileMddReturnBillCodeRule', 41.00, NULL, '0', NULL, b'1', NULL, 0, 0, NULL);
/*!40000 ALTER TABLE `billruleregister` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.billtemplate_base: ~0 rows (大约)
/*!40000 ALTER TABLE `billtemplate_base` DISABLE KEYS */;
/*!40000 ALTER TABLE `billtemplate_base` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.billtplgroup_base: ~0 rows (大约)
/*!40000 ALTER TABLE `billtplgroup_base` DISABLE KEYS */;
/*!40000 ALTER TABLE `billtplgroup_base` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_base: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_base` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_base` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_command: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_command` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_command` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_customerdef: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_customerdef` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_customerdef` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_itemrule: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_itemrule` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_itemrule` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_itemrule_define: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_itemrule_define` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_itemrule_define` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_itemrule_script: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_itemrule_script` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_itemrule_script` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_jointquery: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_jointquery` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_jointquery` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_jointquery_parameter: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_jointquery_parameter` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_jointquery_parameter` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_process: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_process` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_process` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_process_node: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_process_node` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_process_node` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_status: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_status` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_status_config: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_status_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_status_config` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_status_profile: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_status_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_status_profile` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_toolbar: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_toolbar` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_toolbar` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.bill_toolbaritem: ~0 rows (大约)
/*!40000 ALTER TABLE `bill_toolbaritem` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_toolbaritem` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.gen_ten_ext_code: ~0 rows (大约)
/*!40000 ALTER TABLE `gen_ten_ext_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `gen_ten_ext_code` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.gql_app_auth: ~0 rows (大约)
/*!40000 ALTER TABLE `gql_app_auth` DISABLE KEYS */;
/*!40000 ALTER TABLE `gql_app_auth` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_filter_graphql: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_filter_graphql` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_filter_graphql` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_filter_quick: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_filter_quick` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_filter_quick` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_filter_solution: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_filter_solution` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_filter_solution` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_filter_solution_advance: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_filter_solution_advance` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_filter_solution_advance` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_filter_solution_common: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_filter_solution_common` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_filter_solution_common` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_meta_filters: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_meta_filters` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_meta_filters` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_meta_filter_item: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_meta_filter_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_meta_filter_item` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pb_meta_filter_item_ext: ~0 rows (大约)
/*!40000 ALTER TABLE `pb_meta_filter_item_ext` DISABLE KEYS */;
/*!40000 ALTER TABLE `pb_meta_filter_item_ext` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.pub_ref: ~0 rows (大约)
/*!40000 ALTER TABLE `pub_ref` DISABLE KEYS */;
/*!40000 ALTER TABLE `pub_ref` ENABLE KEYS */;

-- Dumping data for table iuap_cloud_basedoc.rulelog: ~0 rows (大约)
/*!40000 ALTER TABLE `rulelog` DISABLE KEYS */;
/*!40000 ALTER TABLE `rulelog` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
