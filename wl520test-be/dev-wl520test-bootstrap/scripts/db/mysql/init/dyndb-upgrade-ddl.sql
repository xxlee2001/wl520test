
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