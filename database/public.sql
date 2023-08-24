/*
 Navicat Premium Data Transfer

 Source Server         : kc
 Source Server Type    : PostgreSQL
 Source Server Version : 140003
 Source Host           : localhost:5432
 Source Catalog        : db_kc_ams
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140003
 File Encoding         : 65001

 Date: 24/08/2023 16:56:01
*/


-- ----------------------------
-- Sequence structure for tbl_assets_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_assets_id_seq";
CREATE SEQUENCE "public"."tbl_assets_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_audit_trail_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_audit_trail_id_seq";
CREATE SEQUENCE "public"."tbl_audit_trail_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_brands_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_brands_id_seq";
CREATE SEQUENCE "public"."tbl_brands_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_company_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_company_id_seq";
CREATE SEQUENCE "public"."tbl_company_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_department_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_department_id_seq";
CREATE SEQUENCE "public"."tbl_department_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_employee_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_employee_id_seq";
CREATE SEQUENCE "public"."tbl_employee_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_module_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_module_id_seq";
CREATE SEQUENCE "public"."tbl_module_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_position_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_position_id_seq";
CREATE SEQUENCE "public"."tbl_position_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_sub_module_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_sub_module_id_seq";
CREATE SEQUENCE "public"."tbl_sub_module_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_users_id_seq";
CREATE SEQUENCE "public"."tbl_users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for tbl_assets
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_assets";
CREATE TABLE "public"."tbl_assets" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_assets_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "serial_no" varchar(100) COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_assets
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_audit_trail
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_audit_trail";
CREATE TABLE "public"."tbl_audit_trail" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_audit_trail_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "table_name" varchar(100) COLLATE "pg_catalog"."default",
  "item_id" int4,
  "field" varchar(100) COLLATE "pg_catalog"."default",
  "previous" text COLLATE "pg_catalog"."default",
  "current" text COLLATE "pg_catalog"."default",
  "action" varchar(20) COLLATE "pg_catalog"."default",
  "user_id" int4,
  "date" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_audit_trail
-- ----------------------------
INSERT INTO "public"."tbl_audit_trail" VALUES (1, '534VB8G', 'tbl_company', 1, 'all', NULL, NULL, 'create', 1, '2023-08-02 15:00:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (2, 'JGWISHP', 'tbl_company', 2, 'all', NULL, NULL, 'create', 1, '2023-08-02 16:38:22+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (3, 'XTBJ2QL', 'tbl_company', 2, 'status', '1', '0', 'update', 1, '2023-08-03 16:56:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (4, 'FR68V5B', 'tbl_company', 2, 'status', '0', '1', 'update', 1, '2023-08-03 16:56:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (5, 'T6WIV1U', 'tbl_company', 2, 'address', NULL, '#82 CORDILLERA ST. CORNER QUEZON AVE., QUEZON CITY', 'update', 1, '2023-08-03 16:58:40+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (6, 'I4PS89Y', 'tbl_company', 3, 'all', NULL, NULL, 'create', 1, '2023-08-04 09:55:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (7, 'IKSHBG0', 'tbl_module', 1, 'all', NULL, NULL, 'create', 1, '2023-08-04 16:32:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (8, 'HZGNAQ1', 'tbl_module', 1, 'description', NULL, 'TESTING', 'update', 1, '2023-08-04 16:51:57+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (9, 'YDZK8LC', 'tbl_module', 1, 'description', 'TESTING', NULL, 'update', 1, '2023-08-04 16:52:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (10, '26W61SD', 'tbl_module', 1, 'status', '1', '0', 'update', 1, '2023-08-04 16:52:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (11, 'X5MDSEZ', 'tbl_module', 1, 'status', '0', '1', 'update', 1, '2023-08-04 16:52:08+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (12, 'UZQZLWB', 'tbl_module', 2, 'all', NULL, NULL, 'create', 1, '2023-08-04 16:54:26+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (13, 'GWY06BI', 'tbl_module', 3, 'all', NULL, NULL, 'create', 1, '2023-08-04 16:55:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (14, '3UKOM4X', 'tbl_module', 4, 'all', NULL, NULL, 'create', 1, '2023-08-04 16:55:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (15, '1AURXEL', 'tbl_module', 4, 'status', '1', '0', 'update', 1, '2023-08-07 08:37:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (16, 'CTP4SJN', 'tbl_module', 4, 'status', '0', '1', 'update', 1, '2023-08-07 08:37:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (17, '3YWWB7K', 'tbl_module', 4, 'status', '1', '0', 'update', 1, '2023-08-07 10:19:17+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (18, 'UIVISJH', 'tbl_module', 4, 'status', '0', '1', 'update', 1, '2023-08-07 10:19:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (19, 'XJCWPI6', 'tbl_sub_module', 1, 'all', NULL, NULL, 'create', 1, '2023-08-07 15:00:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (20, 'X0PHH1E', 'tbl_sub_module', 2, 'all', NULL, NULL, 'create', 1, '2023-08-07 15:40:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (21, 'Q7C5IRE', 'tbl_sub_module', 3, 'all', NULL, NULL, 'create', 1, '2023-08-07 15:53:55+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (22, 'PY0QM4G', 'tbl_sub_module', 4, 'all', NULL, NULL, 'create', 1, '2023-08-07 16:00:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (23, 'W884MBE', 'tbl_module', 4, 'status', '1', '0', 'update', 1, '2023-08-07 16:21:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (24, '83NCSJY', 'tbl_module', 4, 'status', '0', '1', 'update', 1, '2023-08-07 16:21:15+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (25, 'HUHIKVW', 'tbl_module', 4, 'status', '1', '0', 'update', 1, '2023-08-09 15:39:08+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (26, 'S7T22JL', 'tbl_module', 4, 'status', '0', '1', 'update', 1, '2023-08-09 15:39:11+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (27, 'V8EF1N4', 'tbl_sub_module', 4, 'status', '1', '0', 'update', 1, '2023-08-10 16:34:42+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (28, '4L2MQW4', 'tbl_sub_module', 4, 'status', '0', '1', 'update', 1, '2023-08-10 16:34:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (29, 'ULCNWOX', 'tbl_company', 2, 'address', '#82 CORDILLERA ST. CORNER QUEZON AVE., QUEZON CITY', NULL, 'update', 1, '2023-08-14 09:27:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (30, 'XWKAM3C', 'tbl_company', 4, 'all', NULL, NULL, 'create', 1, '2023-08-14 11:26:04+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (31, 'TVK1MFJ', 'tbl_department', 1, 'all', NULL, NULL, 'create', 1, '2023-08-14 11:29:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (32, 'S5N0Y9G', 'tbl_department', 2, 'all', NULL, NULL, 'create', 1, '2023-08-14 11:40:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (33, 'KTK1JXQ', 'tbl_department', 3, 'all', NULL, NULL, 'create', 1, '2023-08-14 11:40:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (34, 'HGKYPOG', 'tbl_department', 4, 'all', NULL, NULL, 'create', 1, '2023-08-14 11:41:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (35, '3E2JW11', 'tbl_company', 4, 'status', '1', '0', 'update', 1, '2023-08-14 11:56:42+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (36, '7PV5MYN', 'tbl_company', 4, 'status', '0', '1', 'update', 1, '2023-08-14 11:56:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (37, 'O1S9IET', 'tbl_department', 4, 'status', '1', '0', 'update', 1, '2023-08-14 11:57:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (38, 'X67OKPX', 'tbl_department', 4, 'status', '0', '1', 'update', 1, '2023-08-14 11:57:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (39, 'I13IHMP', 'tbl_position', 1, 'all', NULL, NULL, 'create', 1, '2023-08-14 14:40:08+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (40, '07772PO', 'tbl_position', 2, 'all', NULL, NULL, 'create', 1, '2023-08-14 14:40:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (41, '8XV90RU', 'tbl_position', 3, 'all', NULL, NULL, 'create', 1, '2023-08-14 14:41:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (42, '25D4UZK', 'tbl_department', 3, 'status', '1', '0', 'update', 1, '2023-08-14 14:58:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (43, 'VZPMR1Y', 'tbl_position', 3, 'status', '0', '1', 'update', 1, '2023-08-14 14:58:59+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (44, '11HNU8B', 'tbl_position', 3, 'status', '1', '0', 'update', 1, '2023-08-14 14:59:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (45, '3A36YCQ', 'tbl_position', 3, 'status', '0', '1', 'update', 1, '2023-08-14 14:59:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (46, 'YY7AETT', 'tbl_sub_module', 5, 'all', NULL, NULL, 'create', 1, '2023-08-14 15:07:56+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (47, 'P5MH0QM', 'tbl_users', 2, 'all', NULL, NULL, 'create', 1, '2023-08-15 16:45:58+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (48, 'MP14657', 'tbl_position', 4, 'all', NULL, NULL, 'create', 1, '2023-08-16 09:01:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (49, 'OU90ZRQ', 'tbl_users', 2, 'all', NULL, NULL, 'create', 1, '2023-08-16 09:48:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (50, '4MIOSV4', 'tbl_users', 3, 'all', NULL, NULL, 'create', 1, '2023-08-16 10:35:22+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (51, 'NG0ULDQ', 'tbl_users', 3, 'status', '1', '0', 'update', 1, '2023-08-16 14:33:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (52, 'M4HELQW', 'tbl_users', 3, 'status', '0', '1', 'update', 1, '2023-08-16 14:33:36+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (53, 'JBQ2OBT', 'tbl_assets_supplies_brand', 1, 'all', NULL, NULL, 'create', 1, '2023-08-16 16:53:32+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (54, 'GAGOGKD', 'tbl_assets_supplies_brand', 2, 'all', NULL, NULL, 'create', 1, '2023-08-16 16:54:28+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (55, 'KS5FE8E', 'tbl_assets_supplies_brand', 2, 'status', '1', '0', 'update', 1, '2023-08-17 09:05:42+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (56, 'KO3I2CI', 'tbl_assets_supplies_brand', 2, 'status', '0', '1', 'update', 1, '2023-08-17 09:05:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (57, '0T7W429', 'tbl_sub_module', 6, 'all', NULL, NULL, 'create', 1, '2023-08-17 10:24:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (58, 'YXF87W5', 'tbl_assets_supplies_classification', 1, 'all', NULL, NULL, 'create', 1, '2023-08-17 15:25:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (59, 'LTW1MS8', 'tbl_assets_supplies_classification', 2, 'all', NULL, NULL, 'create', 1, '2023-08-17 15:27:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (60, '6JNL8WM', 'tbl_assets_supplies_classification', 2, 'status', '1', '0', 'update', 1, '2023-08-17 15:44:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (61, 'TK3J7CR', 'tbl_assets_supplies_classification', 2, 'status', '0', '1', 'update', 1, '2023-08-17 15:44:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (62, 'YMAD4S3', 'tbl_sub_module', 7, 'all', NULL, NULL, 'create', 1, '2023-08-17 16:27:58+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (63, 'ZRGJ0Y0', 'tbl_sub_module', 8, 'all', NULL, NULL, 'create', 1, '2023-08-17 16:28:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (64, '5OBX35V', 'tbl_assets_supplies_brand', 3, 'all', NULL, NULL, 'create', 1, '2023-08-24 16:17:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (65, '4EULG9T', 'tbl_assets_supplies_brand', 4, 'all', NULL, NULL, 'create', 1, '2023-08-24 16:17:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (66, 'LXWOVIR', 'tbl_assets_supplies_brand', 5, 'all', NULL, NULL, 'create', 1, '2023-08-24 16:19:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (67, 'K38164S', 'tbl_assets_supplies_classification', 3, 'all', NULL, NULL, 'create', 1, '2023-08-24 16:19:41+08');

-- ----------------------------
-- Table structure for tbl_brands
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_brands";
CREATE TABLE "public"."tbl_brands" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_brands_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "category" varchar(20) COLLATE "pg_catalog"."default",
  "type" varchar(100) COLLATE "pg_catalog"."default",
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_brands
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_company
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_company";
CREATE TABLE "public"."tbl_company" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_company_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "telephone" varchar(100) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "address" text COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_company
-- ----------------------------
INSERT INTO "public"."tbl_company" VALUES (1, 'CMP-0000001', 'KC INDUSTRIAL CORPORATION', '8781-0071', NULL, '#82 CORDILLERA ST. CORNER QUEZON AVE., QUEZON CITY', 1, 1, NULL, NULL, NULL, '2023-08-02 15:00:29+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_company" VALUES (3, 'CMP-0000003', 'SYSTEMS POWERMARK CORPORATION', NULL, NULL, NULL, 1, 1, 1, NULL, NULL, '2023-08-04 09:55:41+08', '2023-08-14 09:27:31+08', NULL, NULL);
INSERT INTO "public"."tbl_company" VALUES (2, 'CMP-0000002', 'S-POWER CORPORATION', '8230-4008, 8230-3275, 8230-4015', NULL, NULL, 1, 1, 1, NULL, NULL, '2023-08-02 16:38:22+08', '2023-08-14 09:27:49+08', NULL, NULL);
INSERT INTO "public"."tbl_company" VALUES (4, 'CMP-0000004', 'KC ELECTRICAL INNOVATION INC.', '8781-0071', NULL, '#82 CORDILLERA ST. CORNER QUEZON AVE., QUEZON CITY', 1, 1, NULL, NULL, NULL, '2023-08-14 11:26:04+08', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_department
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_department";
CREATE TABLE "public"."tbl_department" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_department_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "company_id" int4,
  "department_head_id" int4,
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_department
-- ----------------------------
INSERT INTO "public"."tbl_department" VALUES (1, 'DPT-0000001', 4, 1, 'IT/MIS', NULL, 1, 1, NULL, NULL, NULL, '2023-08-14 11:29:03+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (2, 'DPT-0000002', 4, 1, 'ACCOUNTING', NULL, 1, 1, NULL, NULL, NULL, '2023-08-14 11:40:31+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (3, 'DPT-0000003', 2, 1, 'ACCOUNTING', NULL, 1, 1, NULL, NULL, NULL, '2023-08-14 11:40:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (4, 'DPT-0000004', 2, 1, 'IT/MIS', NULL, 1, 1, 1, NULL, NULL, '2023-08-14 11:41:01+08', '2023-08-14 11:57:19+08', NULL, NULL);

-- ----------------------------
-- Table structure for tbl_employee
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_employee";
CREATE TABLE "public"."tbl_employee" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_employee_id_seq'::regclass),
  "user_id" int4,
  "employee_no" varchar(50) COLLATE "pg_catalog"."default",
  "rfid" varchar(50) COLLATE "pg_catalog"."default",
  "branch" varchar(20) COLLATE "pg_catalog"."default",
  "company_id" int4,
  "department_id" int4,
  "position_id" int4,
  "fname" varchar(200) COLLATE "pg_catalog"."default",
  "mname" varchar(200) COLLATE "pg_catalog"."default",
  "lname" varchar(200) COLLATE "pg_catalog"."default",
  "address" text COLLATE "pg_catalog"."default",
  "profile" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of tbl_employee
-- ----------------------------
INSERT INTO "public"."tbl_employee" VALUES (1, 1, '000000000', '0000000000', NULL, NULL, NULL, NULL, 'SUPER', NULL, 'ADMIN', NULL, NULL);
INSERT INTO "public"."tbl_employee" VALUES (2, 2, '22100427', '0006318192', 'quezon_ave', 4, 1, 1, 'PAUL JOHN', 'SOLANO', 'JUDAN', '#364 RIVERA ST. BRGY. SANGANDAAN, QUEZON CITY', NULL);
INSERT INTO "public"."tbl_employee" VALUES (3, 3, '23100002', '0000000001', 'quezon_ave', 4, 1, 4, 'CALVIN', 'PUA', 'SY', '#75 IBA ST BRGY. STA. TERESITA QUEZON CITY', NULL);

-- ----------------------------
-- Table structure for tbl_module
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_module";
CREATE TABLE "public"."tbl_module" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_module_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "base_url" varchar(200) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_module
-- ----------------------------
INSERT INTO "public"."tbl_module" VALUES (1, 'MDL-0000001', 'TOOLS', 'tools', NULL, 1, 1, 1, NULL, NULL, '2023-08-04 16:32:03+08', '2023-08-04 16:52:08+08', NULL, NULL);
INSERT INTO "public"."tbl_module" VALUES (2, 'MDL-0000002', 'ASSETS & SUPPLIES', 'assets-supplies', NULL, 1, 1, NULL, NULL, NULL, '2023-08-04 16:54:26+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_module" VALUES (3, 'MDL-0000003', 'WAREHOUSE', 'warehouse', NULL, 1, 1, NULL, NULL, NULL, '2023-08-04 16:55:09+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_module" VALUES (4, 'MDL-0000004', 'MAINTENANCE', 'maintenance', NULL, 1, 1, 1, NULL, NULL, '2023-08-04 16:55:19+08', '2023-08-14 09:24:58+08', NULL, NULL);

-- ----------------------------
-- Table structure for tbl_position
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_position";
CREATE TABLE "public"."tbl_position" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_position_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "company_id" int4,
  "department_id" int4,
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_position
-- ----------------------------
INSERT INTO "public"."tbl_position" VALUES (1, 'PST-0000001', 4, 1, 'IT PROGRAMMER', 1, 1, NULL, NULL, NULL, '2023-08-14 14:40:08+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (2, 'PST-0000002', 4, 1, 'IT STAFF', 1, 1, NULL, NULL, NULL, '2023-08-14 14:40:29+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (3, 'PST-0000003', 2, 4, 'IT STAFF', 1, 1, 1, NULL, NULL, '2023-08-14 14:41:53+08', '2023-08-14 14:59:06+08', NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (4, 'PST-0000004', 4, 1, 'IT SUPERVISOR', 1, 1, NULL, NULL, NULL, '2023-08-16 09:01:02+08', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_sub_module
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_sub_module";
CREATE TABLE "public"."tbl_sub_module" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_sub_module_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "module_id" int4,
  "name" varchar(50) COLLATE "pg_catalog"."default",
  "path" text COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_sub_module
-- ----------------------------
INSERT INTO "public"."tbl_sub_module" VALUES (1, 'SMDL-0000001', 4, 'COMPANY', 'company', 1, 1, NULL, NULL, NULL, '2023-08-07 15:00:37+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (2, 'SMDL-0000002', 2, 'BRAND', 'brand', 1, 1, NULL, NULL, NULL, '2023-08-07 15:40:31+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (3, 'SMDL-0000003', 4, 'DEPARTMENT', 'department', 1, 1, NULL, NULL, NULL, '2023-08-07 15:53:55+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (4, 'SMDL-0000004', 4, 'POSITION', 'position', 1, 1, 1, NULL, NULL, '2023-08-07 16:00:12+08', '2023-08-14 09:25:08+08', NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (5, 'SMDL-0000005', 4, 'EMPLOYEE', 'employee', 1, 1, NULL, NULL, NULL, '2023-08-14 15:07:56+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (6, 'SMDL-0000006', 2, 'CLASSIFICATION', 'classification', 1, 1, NULL, NULL, NULL, '2023-08-17 10:24:10+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (7, 'SMDL-0000007', 2, 'ASSETS', 'assets', 1, 1, NULL, NULL, NULL, '2023-08-17 16:27:58+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (8, 'SMDL-0000008', 2, 'SUPPLIES', 'supplies', 1, 1, NULL, NULL, NULL, '2023-08-17 16:28:06+08', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_users
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_users";
CREATE TABLE "public"."tbl_users" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_users_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "email" varchar(100) COLLATE "pg_catalog"."default",
  "password" text COLLATE "pg_catalog"."default",
  "user_level" varchar(20) COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6)
)
;

-- ----------------------------
-- Records of tbl_users
-- ----------------------------
INSERT INTO "public"."tbl_users" VALUES (2, 'USR-0000001', 'judan.pauljohn@gmail.com', '$2b$10$M04V3NlsNRFxTzLdcPWKDOhpYHIz7L45tdsRNK6coTizF7gXtnFAW', 'user', 1, 1, NULL, NULL, NULL, '2023-08-16 09:48:47+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (1, 'USR-0000000', 'superadmin@kcic.com.ph', '$2b$10$MLqGnzCb5YHnvV/XbGgYvuj7xkKrFbVlmX3cJT6urlysKlmy2FAty', 'superadmin', 1, 1, NULL, NULL, NULL, '2023-07-28 10:56:57+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (3, 'USR-0000001', 'calvs23@gmail.com', '$2b$10$3dMZ21R6KZhyt5DNpnHtj.MLql6C1gUVaMoSwfu2PPoEmyHFKo/Ay', 'admin', 1, 1, 1, NULL, NULL, '2023-08-16 10:35:22+08', '2023-08-16 14:34:57+08', NULL, NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_assets_id_seq"
OWNED BY "public"."tbl_assets"."id";
SELECT setval('"public"."tbl_assets_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_audit_trail_id_seq"
OWNED BY "public"."tbl_audit_trail"."id";
SELECT setval('"public"."tbl_audit_trail_id_seq"', 68, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_brands_id_seq"
OWNED BY "public"."tbl_brands"."id";
SELECT setval('"public"."tbl_brands_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_company_id_seq"
OWNED BY "public"."tbl_company"."id";
SELECT setval('"public"."tbl_company_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_department_id_seq"
OWNED BY "public"."tbl_department"."id";
SELECT setval('"public"."tbl_department_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_employee_id_seq"
OWNED BY "public"."tbl_employee"."id";
SELECT setval('"public"."tbl_employee_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_module_id_seq"
OWNED BY "public"."tbl_module"."id";
SELECT setval('"public"."tbl_module_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_position_id_seq"
OWNED BY "public"."tbl_position"."id";
SELECT setval('"public"."tbl_position_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_sub_module_id_seq"
OWNED BY "public"."tbl_sub_module"."id";
SELECT setval('"public"."tbl_sub_module_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_id_seq"
OWNED BY "public"."tbl_users"."id";
SELECT setval('"public"."tbl_users_id_seq"', 4, true);

-- ----------------------------
-- Primary Key structure for table tbl_assets
-- ----------------------------
ALTER TABLE "public"."tbl_assets" ADD CONSTRAINT "tbl_assets_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_audit_trail
-- ----------------------------
ALTER TABLE "public"."tbl_audit_trail" ADD CONSTRAINT "tbl_audit_trail_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_brands
-- ----------------------------
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_company
-- ----------------------------
ALTER TABLE "public"."tbl_company" ADD CONSTRAINT "tbl_company_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_department
-- ----------------------------
ALTER TABLE "public"."tbl_department" ADD CONSTRAINT "tbl_department_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_employee
-- ----------------------------
ALTER TABLE "public"."tbl_employee" ADD CONSTRAINT "tbl_employee_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_module
-- ----------------------------
ALTER TABLE "public"."tbl_module" ADD CONSTRAINT "tbl_module_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_position
-- ----------------------------
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_sub_module
-- ----------------------------
ALTER TABLE "public"."tbl_sub_module" ADD CONSTRAINT "tbl_sub_module_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_users
-- ----------------------------
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table tbl_assets
-- ----------------------------
ALTER TABLE "public"."tbl_assets" ADD CONSTRAINT "tbl_assets_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_assets" ADD CONSTRAINT "tbl_assets_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_assets" ADD CONSTRAINT "tbl_assets_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_assets" ADD CONSTRAINT "tbl_assets_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_audit_trail
-- ----------------------------
ALTER TABLE "public"."tbl_audit_trail" ADD CONSTRAINT "tbl_audit_trail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_brands
-- ----------------------------
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_company
-- ----------------------------
ALTER TABLE "public"."tbl_company" ADD CONSTRAINT "tbl_company_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_company" ADD CONSTRAINT "tbl_company_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_company" ADD CONSTRAINT "tbl_company_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_company" ADD CONSTRAINT "tbl_company_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_department
-- ----------------------------
ALTER TABLE "public"."tbl_department" ADD CONSTRAINT "tbl_department_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."tbl_company" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_department" ADD CONSTRAINT "tbl_department_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_department" ADD CONSTRAINT "tbl_department_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_department" ADD CONSTRAINT "tbl_department_department_head_id_fkey" FOREIGN KEY ("department_head_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_department" ADD CONSTRAINT "tbl_department_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_department" ADD CONSTRAINT "tbl_department_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_employee
-- ----------------------------
ALTER TABLE "public"."tbl_employee" ADD CONSTRAINT "tbl_employee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_module
-- ----------------------------
ALTER TABLE "public"."tbl_module" ADD CONSTRAINT "tbl_module_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_module" ADD CONSTRAINT "tbl_module_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_module" ADD CONSTRAINT "tbl_module_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_module" ADD CONSTRAINT "tbl_module_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_position
-- ----------------------------
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."tbl_company" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."tbl_department" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_sub_module
-- ----------------------------
ALTER TABLE "public"."tbl_sub_module" ADD CONSTRAINT "tbl_sub_module_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_sub_module" ADD CONSTRAINT "tbl_sub_module_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_sub_module" ADD CONSTRAINT "tbl_sub_module_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_sub_module" ADD CONSTRAINT "tbl_sub_module_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "public"."tbl_module" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_sub_module" ADD CONSTRAINT "tbl_sub_module_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_users
-- ----------------------------
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
