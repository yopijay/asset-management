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

 Date: 21/09/2023 16:56:29
*/


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
-- Sequence structure for tbl_category_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_category_id_seq";
CREATE SEQUENCE "public"."tbl_category_id_seq" 
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
-- Sequence structure for tbl_issuance_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_issuance_id_seq";
CREATE SEQUENCE "public"."tbl_issuance_id_seq" 
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
-- Sequence structure for tbl_stocks_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_stocks_id_seq";
CREATE SEQUENCE "public"."tbl_stocks_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_stocks_info_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_stocks_info_id_seq";
CREATE SEQUENCE "public"."tbl_stocks_info_id_seq" 
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
INSERT INTO "public"."tbl_audit_trail" VALUES (1, 'FMVZPLU', 'tbl_module', 1, 'all', NULL, NULL, 'create', 1, '2023-09-07 11:10:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (2, 'PE3CNZK', 'tbl_module', 2, 'all', NULL, NULL, 'create', 1, '2023-09-07 11:11:30+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (3, 'FSL70RE', 'tbl_sub_module', 1, 'all', NULL, NULL, 'create', 1, '2023-09-07 11:11:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (4, '6M8K4FN', 'tbl_sub_module', 2, 'all', NULL, NULL, 'create', 1, '2023-09-07 11:12:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (5, 'B2VGLJD', 'tbl_sub_module', 3, 'all', NULL, NULL, 'create', 1, '2023-09-07 11:12:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (6, 'WF9TDFK', 'tbl_sub_module', 4, 'all', NULL, NULL, 'create', 1, '2023-09-07 11:12:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (7, 'GQX61DN', 'tbl_sub_module', 5, 'all', NULL, NULL, 'create', 1, '2023-09-07 11:13:05+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (8, 'HSD0YPA', 'tbl_sub_module', 6, 'all', NULL, NULL, 'create', 1, '2023-09-11 09:01:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (9, 'S4IAZA3', 'tbl_sub_module', 7, 'all', NULL, NULL, 'create', 1, '2023-09-11 09:01:56+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (10, 'MGPM6GL', 'tbl_sub_module', 8, 'all', NULL, NULL, 'create', 1, '2023-09-11 11:48:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (11, '8BAJ218', 'tbl_category', 1, 'all', NULL, NULL, 'create', 1, '2023-09-11 15:04:45+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (12, 'E9HURSG', 'tbl_category', 2, 'all', NULL, NULL, 'create', 1, '2023-09-11 15:04:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (13, '34Z8J3W', 'tbl_category', 3, 'all', NULL, NULL, 'create', 1, '2023-09-11 15:05:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (14, 'J693UZC', 'tbl_category', 4, 'all', NULL, NULL, 'create', 1, '2023-09-11 15:05:15+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (15, 'STK2WKC', 'tbl_category', 4, 'status', '1', '0', 'update', 1, '2023-09-11 15:22:28+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (16, '7W84F0M', 'tbl_category', 4, 'name', 'MONITOR', 'MONITOR1', 'update', 1, '2023-09-11 15:22:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (17, 'TDAHDI8', 'tbl_category', 4, 'status', '0', '1', 'update', 1, '2023-09-11 15:22:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (18, 'HR0JURF', 'tbl_category', 4, 'name', 'MONITOR1', 'MONITOR', 'update', 1, '2023-09-11 15:22:35+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (19, 'TFKH7VM', 'tbl_brands', 1, 'all', NULL, NULL, 'create', 1, '2023-09-11 15:59:44+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (20, 'FYIPNPT', 'tbl_brands', 2, 'all', NULL, NULL, 'create', 1, '2023-09-11 16:04:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (21, 'TSIOK1N', 'tbl_brands', 3, 'all', NULL, NULL, 'create', 1, '2023-09-11 16:04:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (22, 'U57RPTY', 'tbl_brands', 4, 'all', NULL, NULL, 'create', 1, '2023-09-11 16:04:32+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (23, 'PKWDPH6', 'tbl_brands', 5, 'all', NULL, NULL, 'create', 1, '2023-09-11 16:04:40+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (24, '3OZRX34', 'tbl_brands', 6, 'all', NULL, NULL, 'create', 1, '2023-09-11 16:04:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (25, 'FF0P63F', 'tbl_brands', 7, 'all', NULL, NULL, 'create', 1, '2023-09-11 16:04:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (26, 'YDKEZL7', 'tbl_brands', 8, 'all', NULL, NULL, 'create', 1, '2023-09-11 16:04:59+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (27, 'WD1MMRK', 'tbl_brands', 9, 'all', NULL, NULL, 'create', 1, '2023-09-18 08:43:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (28, 'UOI0NRR', 'tbl_stocks', 1, 'all', NULL, NULL, 'create', 1, '2023-09-18 08:55:17+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (29, 'UOULXJ9', 'tbl_brands', 10, 'all', NULL, NULL, 'create', 1, '2023-09-18 10:33:28+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (30, 'TZV98HN', 'tbl_stocks', 3, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:06:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (31, '2273IIQ', 'tbl_stocks', 1, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:08:04+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (32, 'QRYR6ZN', 'tbl_stocks', 2, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:09:44+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (33, '2TZ6BJW', 'tbl_stocks', 3, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:20:30+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (34, 'OO2K2K4', 'tbl_stocks', 5, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:28:00+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (35, '1B2C8MX', 'tbl_stocks', 5, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:33:32+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (36, 'IA6GLZ2', 'tbl_stocks', 6, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:35:22+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (37, 'WCTV3PG', 'tbl_stocks', 7, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:36:08+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (38, 'NY0SVNT', 'tbl_stocks', 8, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:38:11+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (39, 'V2SQHK5', 'tbl_stocks', 11, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:50:18+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (40, 'U44T35C', 'tbl_stocks', 10, 'all', NULL, NULL, 'create', 1, '2023-09-18 11:54:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (41, 'LHS1XYM', 'tbl_stocks', 11, 'all', NULL, NULL, 'create', 1, '2023-09-19 09:08:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (42, 'DJHMT0F', 'tbl_stocks', 3, 'vga', '0', NULL, 'update', 1, '2023-09-21 08:42:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (43, '8XH4WYM', 'tbl_stocks', 3, 'vga', '1', NULL, 'update', 1, '2023-09-21 08:42:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (44, 'FUDGRAZ', 'tbl_stocks', 5, 'color', 'BLACK', 'BLACK1', 'update', 1, '2023-09-21 09:38:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (45, 'XCMT1I8', 'tbl_stocks', 5, 'color', 'BLACK1', 'BLACK', 'update', 1, '2023-09-21 09:38:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (46, 'GK557QT', 'tbl_stocks', 1, 'hdmi', '1', '0', 'update', 1, '2023-09-21 10:17:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (47, 'T80VF03', 'tbl_stocks', 8, 'hdmi', '1', '0', 'update', 1, '2023-09-21 10:18:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (48, 'L6GR8LQ', 'tbl_sub_module', 9, 'all', NULL, NULL, 'create', 1, '2023-09-21 15:39:51+08');

-- ----------------------------
-- Table structure for tbl_brands
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_brands";
CREATE TABLE "public"."tbl_brands" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_brands_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "category_id" int4,
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
INSERT INTO "public"."tbl_brands" VALUES (1, 'BRD-0000001', 1, 'DELL', 1, 1, NULL, NULL, NULL, '2023-09-11 15:59:44+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (2, 'BRD-0000002', 2, 'DELL', 1, 1, NULL, NULL, NULL, '2023-09-11 16:04:16+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (3, 'BRD-0000003', 1, 'HP', 1, 1, NULL, NULL, NULL, '2023-09-11 16:04:27+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (4, 'BRD-0000004', 2, 'HP', 1, 1, NULL, NULL, NULL, '2023-09-11 16:04:32+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (5, 'BRD-0000005', 3, 'SAMSUNG', 1, 1, NULL, NULL, NULL, '2023-09-11 16:04:47+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (6, 'BRD-0000006', 3, 'BROTHER', 1, 1, NULL, NULL, NULL, '2023-09-11 16:04:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (7, 'BRD-0000007', 4, 'AOC', 1, 1, NULL, NULL, NULL, '2023-09-11 16:04:59+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (8, 'BRD-0000008', 4, 'SAMSUNG', 1, 1, 1, NULL, NULL, '2023-09-11 16:05:04+08', '2023-09-11 16:05:33+08', NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (9, 'BRD-0000009', 3, 'HP', 1, 1, NULL, NULL, NULL, '2023-09-18 08:43:43+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (10, 'BRD-0000010', 1, 'LENOVO', 1, 1, NULL, NULL, NULL, '2023-09-18 10:33:28+08', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_category
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_category";
CREATE TABLE "public"."tbl_category" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_category_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
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
-- Records of tbl_category
-- ----------------------------
INSERT INTO "public"."tbl_category" VALUES (1, 'CTG-0000001', 'LAPTOP', 1, 1, NULL, NULL, NULL, '2023-09-11 15:04:45+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (2, 'CTG-0000002', 'SYSTEM UNIT', 1, 1, NULL, NULL, NULL, '2023-09-11 15:04:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (3, 'CTG-0000003', 'TONER', 1, 1, NULL, NULL, NULL, '2023-09-11 15:05:10+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (4, 'CTG-0000004', 'MONITOR', 1, 1, 1, NULL, NULL, '2023-09-11 15:05:15+08', '2023-09-11 15:22:35+08', NULL, NULL);

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

-- ----------------------------
-- Table structure for tbl_issuance
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_issuance";
CREATE TABLE "public"."tbl_issuance" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_issuance_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "category" varchar(30) COLLATE "pg_catalog"."default",
  "type" varchar(50) COLLATE "pg_catalog"."default",
  "brand_id" int4,
  "item_id" int4,
  "company_id" int4,
  "department_id" int4,
  "position_id" int4,
  "issued_to" int4,
  "date_issued" varchar(50) COLLATE "pg_catalog"."default",
  "date_returned" varchar(50) COLLATE "pg_catalog"."default",
  "issued_by" int4,
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
-- Records of tbl_issuance
-- ----------------------------

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
INSERT INTO "public"."tbl_module" VALUES (1, 'MDL-0000001', 'MAINTENANCE', 'maintenance', NULL, 1, 1, NULL, NULL, NULL, '2023-09-07 11:10:37+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_module" VALUES (2, 'MDL-0000002', 'ASSETS & SUPPLIES', 'assets-supplies', NULL, 1, 1, NULL, NULL, NULL, '2023-09-07 11:11:30+08', NULL, NULL, NULL);

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

-- ----------------------------
-- Table structure for tbl_stocks
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks";
CREATE TABLE "public"."tbl_stocks" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "category_id" int4,
  "brand_id" int4,
  "quantity" int4,
  "status" int4,
  "issued_to" int4,
  "issued_date" varchar(100) COLLATE "pg_catalog"."default",
  "issued_by" int4,
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
-- Records of tbl_stocks
-- ----------------------------
INSERT INTO "public"."tbl_stocks" VALUES (2, 'STOCK-0000002', 1, 10, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-09-18 11:09:44+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (7, 'STOCK-0000007', 3, 6, 6, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-09-18 11:36:08+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (11, 'STOCK-0000011', 1, 1, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-19 09:08:03+08', '2023-09-21 08:28:42+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (3, 'STOCK-0000003', 2, 2, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:20:30+08', '2023-09-21 08:42:50+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (6, 'STOCK-0000006', 3, 9, 3, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:35:22+08', '2023-09-21 09:37:59+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (5, 'STOCK-0000005', 3, 9, 3, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:33:32+08', '2023-09-21 09:38:13+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (1, 'STOCK-0000001', 1, 10, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:08:04+08', '2023-09-21 10:17:09+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (8, 'STOCK-0000008', 2, 2, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:38:11+08', '2023-09-21 10:18:07+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (4, 'STOCK-0000004', 2, 2, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:26:47+08', '2023-09-21 10:39:20+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (10, 'STOCK-0000010', 4, 7, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:54:19+08', '2023-09-21 10:42:01+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (9, 'STOCK-0000009', 4, 7, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-09-18 11:47:44+08', '2023-09-21 10:43:35+08', NULL, NULL);

-- ----------------------------
-- Table structure for tbl_stocks_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks_info";
CREATE TABLE "public"."tbl_stocks_info" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_info_id_seq'::regclass),
  "stock_id" int4,
  "serial_no" varchar(100) COLLATE "pg_catalog"."default",
  "model" varchar(100) COLLATE "pg_catalog"."default",
  "type" varchar(50) COLLATE "pg_catalog"."default",
  "condition" varchar(20) COLLATE "pg_catalog"."default",
  "color" varchar(50) COLLATE "pg_catalog"."default",
  "cpu" varchar(100) COLLATE "pg_catalog"."default",
  "gpu" varchar(100) COLLATE "pg_catalog"."default",
  "hdd" varchar(100) COLLATE "pg_catalog"."default",
  "ssd" varchar(100) COLLATE "pg_catalog"."default",
  "ram" varchar(50) COLLATE "pg_catalog"."default",
  "operating_system" varchar(100) COLLATE "pg_catalog"."default",
  "power_supply" varchar(100) COLLATE "pg_catalog"."default",
  "warranty" varchar(100) COLLATE "pg_catalog"."default",
  "hdmi" int4,
  "vga" int4,
  "dvi" int4,
  "bluetooth" int4,
  "wifi" int4,
  "fingerprint" int4,
  "webcamera" int4,
  "backlit" int4,
  "date_received" varchar(50) COLLATE "pg_catalog"."default",
  "panel" varchar(100) COLLATE "pg_catalog"."default",
  "resolution" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of tbl_stocks_info
-- ----------------------------
INSERT INTO "public"."tbl_stocks_info" VALUES (2, 2, 'PF400PSP', 'IDEAPAD 1', NULL, NULL, NULL, 'INTEL N4020', 'INTEGRATED', '64 GB', NULL, '4 GB', 'WINDOWS 11 HOME', NULL, NULL, 1, 0, 0, 1, NULL, 0, 0, 0, '2022-07-26', NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (7, 7, NULL, 'LQ-310', 'ribbon', 'original', 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-09-13', NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (11, 11, 'DTWN0H3', 'G5 15', NULL, NULL, NULL, 'INTEL CORE I5-11400', 'NVIDIA GEFORCE GRAPHICS', NULL, '512 GB', '8 GB', 'WINDOWS 10 HOME', NULL, '1', 1, 0, 0, 1, NULL, 0, 0, 0, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (3, 3, '172DNK3', 'XPS 8940', NULL, NULL, NULL, '11TH GEN INTEL(4) CORE(TM) I7-11700 @ 2.50 GHZ', 'NVIDIA GEFORCE GTX 1660 TI', '1 TB', '250 GB', '16 GB', 'WINDOWS 11 HOME', NULL, NULL, 1, 0, 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (6, 6, NULL, 'HP 85A', 'laser', 'rema', 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-04', NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (5, 5, NULL, 'MLT-101S', 'laser', 'rema', 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-28', NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (1, 1, 'PF3ZKC5C', 'IDEAPAD 1', NULL, NULL, NULL, 'INTEL N4020', 'INTEGRATED', '64 GB', NULL, '4 GB', 'WINDOWS 11 HOME', NULL, NULL, 0, 0, 0, 1, NULL, 0, 0, 0, '2022-07-26', NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (8, 8, 'H7M2H03', 'INSPIRON 3671', NULL, NULL, NULL, 'INTEL CORE(TM) I3-9100', 'INTEGRATED INTEL UHD GRAPHICS', '1 TB', NULL, '8 GB', 'WINDOWS 11 HOME', NULL, '1', 0, 0, 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (4, 4, 'HGP5RJ3', 'INSPIRON 3891', NULL, NULL, NULL, 'INTEL CORE(TM) I3-10105', 'INTEGRATED INTEL UHD GRAPHICS', '1 TB', NULL, '8 GB', 'WINDOWS 11 HOME', NULL, NULL, 1, 0, 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (10, 10, 'GCDG7HA097603', 'M2060W', NULL, NULL, 'SRGB IEC61966-2.1', NULL, NULL, NULL, NULL, NULL, NULL, '100~240V AC, 50/60HZ', '1', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, '19.53 INCH W', '1920×1080@60HZ');
INSERT INTO "public"."tbl_stocks_info" VALUES (9, 9, 'GCDLAHA236824', 'M2060SW', NULL, NULL, 'SRGB IEC61966-2.1', NULL, NULL, NULL, NULL, NULL, NULL, '100~240V AC, 50/60HZ', '1', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, '19.53 INCH W', '1920×1080@60HZ');

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
INSERT INTO "public"."tbl_sub_module" VALUES (1, 'SMDL-0000001', 1, 'COMPANY', 'company', 1, 1, NULL, NULL, NULL, '2023-09-07 11:11:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (2, 'SMDL-0000002', 1, 'DEPARTMENT', 'department', 1, 1, NULL, NULL, NULL, '2023-09-07 11:12:01+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (3, 'SMDL-0000003', 1, 'POSITION', 'position', 1, 1, NULL, NULL, NULL, '2023-09-07 11:12:09+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (4, 'SMDL-0000004', 1, 'EMPLOYEE', 'employee', 1, 1, NULL, NULL, NULL, '2023-09-07 11:12:21+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (5, 'SMDL-0000005', 1, 'BRANDS', 'brands', 1, 1, NULL, NULL, NULL, '2023-09-07 11:13:05+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (6, 'SMDL-0000006', 2, 'STOCKS', 'stocks', 1, 1, NULL, NULL, NULL, '2023-09-11 09:01:47+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (7, 'SMDL-0000007', 2, 'ISSUANCE', 'issuance', 1, 1, NULL, NULL, NULL, '2023-09-11 09:01:56+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (8, 'SMDL-0000008', 1, 'CATEGORY', 'category', 1, 1, NULL, NULL, NULL, '2023-09-11 11:48:27+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (9, 'SMDL-0000009', 2, 'ASSETS', 'assets', 1, 1, NULL, NULL, NULL, '2023-09-21 15:39:51+08', NULL, NULL, NULL);

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
INSERT INTO "public"."tbl_users" VALUES (1, 'USR-0000000', 'superadmin@kcic.com.ph', '$2b$10$MLqGnzCb5YHnvV/XbGgYvuj7xkKrFbVlmX3cJT6urlysKlmy2FAty', 'superadmin', 1, 1, NULL, NULL, NULL, '2023-07-28 10:56:57+08', NULL, NULL, NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_audit_trail_id_seq"
OWNED BY "public"."tbl_audit_trail"."id";
SELECT setval('"public"."tbl_audit_trail_id_seq"', 49, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_brands_id_seq"
OWNED BY "public"."tbl_brands"."id";
SELECT setval('"public"."tbl_brands_id_seq"', 11, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_category_id_seq"
OWNED BY "public"."tbl_category"."id";
SELECT setval('"public"."tbl_category_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_company_id_seq"
OWNED BY "public"."tbl_company"."id";
SELECT setval('"public"."tbl_company_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_department_id_seq"
OWNED BY "public"."tbl_department"."id";
SELECT setval('"public"."tbl_department_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_employee_id_seq"
OWNED BY "public"."tbl_employee"."id";
SELECT setval('"public"."tbl_employee_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_issuance_id_seq"
OWNED BY "public"."tbl_issuance"."id";
SELECT setval('"public"."tbl_issuance_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_module_id_seq"
OWNED BY "public"."tbl_module"."id";
SELECT setval('"public"."tbl_module_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_position_id_seq"
OWNED BY "public"."tbl_position"."id";
SELECT setval('"public"."tbl_position_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_id_seq"
OWNED BY "public"."tbl_stocks"."id";
SELECT setval('"public"."tbl_stocks_id_seq"', 12, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_info_id_seq"
OWNED BY "public"."tbl_stocks_info"."id";
SELECT setval('"public"."tbl_stocks_info_id_seq"', 12, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_sub_module_id_seq"
OWNED BY "public"."tbl_sub_module"."id";
SELECT setval('"public"."tbl_sub_module_id_seq"', 10, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_id_seq"
OWNED BY "public"."tbl_users"."id";
SELECT setval('"public"."tbl_users_id_seq"', 2, true);

-- ----------------------------
-- Primary Key structure for table tbl_audit_trail
-- ----------------------------
ALTER TABLE "public"."tbl_audit_trail" ADD CONSTRAINT "tbl_audit_trail_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_brands
-- ----------------------------
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_category
-- ----------------------------
ALTER TABLE "public"."tbl_category" ADD CONSTRAINT "tbl_category_pkey" PRIMARY KEY ("id");

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
-- Primary Key structure for table tbl_issuance
-- ----------------------------
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_module
-- ----------------------------
ALTER TABLE "public"."tbl_module" ADD CONSTRAINT "tbl_module_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_position
-- ----------------------------
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_stocks
-- ----------------------------
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_stocks_info
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_info" ADD CONSTRAINT "tbl_stocks_info_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_sub_module
-- ----------------------------
ALTER TABLE "public"."tbl_sub_module" ADD CONSTRAINT "tbl_sub_module_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_users
-- ----------------------------
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table tbl_audit_trail
-- ----------------------------
ALTER TABLE "public"."tbl_audit_trail" ADD CONSTRAINT "tbl_audit_trail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_brands
-- ----------------------------
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."tbl_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_brands" ADD CONSTRAINT "tbl_brands_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_category
-- ----------------------------
ALTER TABLE "public"."tbl_category" ADD CONSTRAINT "tbl_category_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_category" ADD CONSTRAINT "tbl_category_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_category" ADD CONSTRAINT "tbl_category_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_category" ADD CONSTRAINT "tbl_category_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Foreign Keys structure for table tbl_issuance
-- ----------------------------
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."tbl_company" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."tbl_department" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_issued_by_fkey" FOREIGN KEY ("issued_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_issued_to_fkey" FOREIGN KEY ("issued_to") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "public"."tbl_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_issuance" ADD CONSTRAINT "tbl_issuance_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Foreign Keys structure for table tbl_stocks
-- ----------------------------
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."tbl_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_issued_by_fkey" FOREIGN KEY ("issued_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_issued_to_fkey" FOREIGN KEY ("issued_to") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_stocks_info
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_info" ADD CONSTRAINT "tbl_stocks_info_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "public"."tbl_stocks" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
