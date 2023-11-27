/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : PostgreSQL
 Source Server Version : 150001
 Source Host           : localhost:5432
 Source Catalog        : db_ams
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150001
 File Encoding         : 65001

 Date: 27/11/2023 21:08:42
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
-- Sequence structure for tbl_modules_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_modules_id_seq";
CREATE SEQUENCE "public"."tbl_modules_id_seq" 
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
-- Sequence structure for tbl_routes_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_routes_id_seq";
CREATE SEQUENCE "public"."tbl_routes_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_setup_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_setup_id_seq";
CREATE SEQUENCE "public"."tbl_setup_id_seq" 
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
-- Sequence structure for tbl_users_info_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_users_info_id_seq";
CREATE SEQUENCE "public"."tbl_users_info_id_seq" 
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
INSERT INTO "public"."tbl_audit_trail" VALUES (1, 'AMU99J7', 'tbl_company', 1, 'all', NULL, NULL, 'create', 1, '2023-11-22 09:38:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (2, 'T63LO6Q', 'tbl_company', 1, 'status', '1', '0', 'update', 1, '2023-11-22 09:43:52+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (3, 'BRH7MGZ', 'tbl_company', 1, 'status', '0', '1', 'update', 1, '2023-11-22 09:43:55+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (4, 'NG7HZOC', 'tbl_department', 1, 'all', NULL, NULL, 'create', 1, '2023-11-22 10:45:15+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (5, '9NYVCMW', 'tbl_position', 1, 'all', NULL, NULL, 'create', 1, '2023-11-22 11:44:25+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (6, 'Y7W962O', 'tbl_department', 1, 'status', '1', '0', 'update', 1, '2023-11-22 11:44:33+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (7, 'E4XLJ6M', 'tbl_department', 1, 'status', '0', '1', 'update', 1, '2023-11-22 11:44:36+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (8, '7BI0HB4', 'tbl_users', 2, 'all', NULL, NULL, 'create', 1, '2023-11-22 15:00:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (10, 'ZPCOFSY', 'tbl_routes', 2, 'status', 'Active', 'Inactive', 'update', 1, '2023-11-24 08:24:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (11, 'PBPY0IG', 'tbl_modules', 5, 'all', NULL, NULL, 'create', 1, '2023-11-24 08:25:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (12, '65OSL94', 'tbl_modules', 6, 'all', NULL, NULL, 'create', 1, '2023-11-24 08:25:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (13, '1JE46QB', 'tbl_modules', 7, 'all', NULL, NULL, 'create', 1, '2023-11-24 08:26:26+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (14, '523JL7Y', 'tbl_modules', 8, 'all', NULL, NULL, 'create', 1, '2023-11-24 13:14:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (15, 'FQ7JIFB', 'tbl_modules', 9, 'all', NULL, NULL, 'create', 1, '2023-11-24 13:14:26+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (16, 'JHFQKTI', 'tbl_category', 1, 'all', NULL, NULL, 'create', 1, '2023-11-24 13:17:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (17, 'LFSONVA', 'tbl_category', 2, 'all', NULL, NULL, 'create', 1, '2023-11-24 13:18:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (18, 'RB1119U', 'tbl_brands', 2, 'all', NULL, NULL, 'create', 1, '2023-11-24 13:20:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (19, '9DAV68V', 'tbl_brands', 3, 'all', NULL, NULL, 'create', 1, '2023-11-24 13:20:32+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (20, 'JFHZNAA', 'tbl_brands', 4, 'all', NULL, NULL, 'create', 1, '2023-11-24 13:20:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (21, 'LW7IDST', 'tbl_category', 3, 'all', NULL, NULL, 'create', 1, '2023-11-24 15:15:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (22, 'QECXQ31', 'tbl_brands', 5, 'all', NULL, NULL, 'create', 1, '2023-11-25 21:01:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (23, 'JUVOENS', 'tbl_category', 4, 'all', NULL, NULL, 'create', 1, '2023-11-25 21:01:55+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (24, 'XY227WH', 'tbl_brands', 6, 'all', NULL, NULL, 'create', 1, '2023-11-25 21:02:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (25, 'WHUKT8C', 'tbl_brands', 7, 'all', NULL, NULL, 'create', 1, '2023-11-25 21:02:17+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (26, 'ONG8BFI', 'tbl_brands', 8, 'all', NULL, NULL, 'create', 1, '2023-11-25 21:02:28+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (27, '3PJB6U6', 'tbl_brands', 9, 'all', NULL, NULL, 'create', 1, '2023-11-25 21:02:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (28, 'LQXKTNB', 'tbl_brands', 10, 'all', NULL, NULL, 'create', 1, '2023-11-25 21:03:05+08');

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
INSERT INTO "public"."tbl_brands" VALUES (2, 'BRD-0000001', 1, 'LENOVO', 1, 1, NULL, NULL, NULL, '2023-11-24 13:20:27+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (3, 'BRD-0000002', 1, 'DELL', 1, 1, NULL, NULL, NULL, '2023-11-24 13:20:32+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (4, 'BRD-0000003', 2, 'DELL', 1, 1, NULL, NULL, NULL, '2023-11-24 13:20:41+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (5, 'BRD-0000004', 3, 'AOC', 1, 1, NULL, NULL, NULL, '2023-11-25 21:01:46+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (6, 'BRD-0000005', 4, 'SAMSUNG', 1, 1, NULL, NULL, NULL, '2023-11-25 21:02:06+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (7, 'BRD-0000006', 4, 'BROTHER', 1, 1, NULL, NULL, NULL, '2023-11-25 21:02:17+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (8, 'BRD-0000007', 3, 'SAMSUNG', 1, 1, NULL, NULL, NULL, '2023-11-25 21:02:28+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (9, 'BRD-0000008', 2, 'LENOVO', 1, 1, NULL, NULL, NULL, '2023-11-25 21:02:46+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (10, 'BRD-0000009', 3, 'HP', 1, 1, NULL, NULL, NULL, '2023-11-25 21:03:05+08', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_category
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_category";
CREATE TABLE "public"."tbl_category" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_category_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "type" varchar(20) COLLATE "pg_catalog"."default",
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
INSERT INTO "public"."tbl_category" VALUES (1, 'CTG-0000001', 'assets', 'LAPTOP', 1, 1, NULL, NULL, NULL, '2023-11-24 13:17:54+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (2, 'CTG-0000002', 'assets', 'SYSTEM UNIT', 1, 1, NULL, NULL, NULL, '2023-11-24 13:18:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (3, 'CTG-0000003', 'assets', 'MONITOR', 1, 1, NULL, NULL, NULL, '2023-11-24 15:15:16+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (4, 'CTG-0000004', 'assets', 'TONER', 1, 1, NULL, NULL, NULL, '2023-11-25 21:01:55+08', NULL, NULL, NULL);

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
INSERT INTO "public"."tbl_company" VALUES (1, 'CMP-0000001', 'KC ELECTRICAL INNOVATION INC.', '8781-0071', NULL, '#82 CORDILLERA ST. CORNER QUEZON AVE., QUEZON CITY', 1, 1, 1, NULL, NULL, '2023-11-22 09:38:48+08', '2023-11-22 09:43:55+08', NULL, NULL);

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
INSERT INTO "public"."tbl_department" VALUES (1, 'DPT-0000001', 1, 1, 'IT / MIS', NULL, 1, 1, 1, NULL, NULL, '2023-11-22 10:45:15+08', '2023-11-22 11:44:36+08', NULL, NULL);

-- ----------------------------
-- Table structure for tbl_modules
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_modules";
CREATE TABLE "public"."tbl_modules" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_modules_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "route_id" int4,
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "path" varchar(200) COLLATE "pg_catalog"."default",
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
-- Records of tbl_modules
-- ----------------------------
INSERT INTO "public"."tbl_modules" VALUES (1, 'MDL-0000001', 1, 'COMPANY', 'company', 1, 1, NULL, NULL, NULL, '2023-11-10 15:56:40+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_modules" VALUES (2, 'MDL-0000002', 1, 'DEPARTMENT', 'department', 1, 1, NULL, NULL, NULL, '2023-11-10 16:37:43+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_modules" VALUES (3, 'MDL-0000003', 1, 'POSITION', 'position', 1, 1, 1, NULL, NULL, '2023-11-10 16:37:52+08', '2023-11-15 08:41:07+08', NULL, NULL);
INSERT INTO "public"."tbl_modules" VALUES (5, 'MDL-0000004', 3, 'STOCKS', 'stocks', 1, 1, NULL, NULL, NULL, '2023-11-24 08:25:02+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_modules" VALUES (6, 'MDL-0000005', 3, 'REQUEST', 'request', 1, 1, NULL, NULL, NULL, '2023-11-24 08:25:13+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_modules" VALUES (7, 'MDL-0000006', 3, 'ISSUANCE', 'issuance', 1, 1, NULL, NULL, NULL, '2023-11-24 08:26:26+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_modules" VALUES (8, 'MDL-0000007', 1, 'BRANDS', 'brands', 1, 1, NULL, NULL, NULL, '2023-11-24 13:14:19+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_modules" VALUES (9, 'MDL-0000008', 1, 'CATEGORY', 'category', 1, 1, NULL, NULL, NULL, '2023-11-24 13:14:26+08', NULL, NULL, NULL);

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
INSERT INTO "public"."tbl_position" VALUES (1, 'PST-0000001', 1, 1, 'IT PROGRAMMER', 1, 1, NULL, NULL, NULL, '2023-11-22 11:44:25+08', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_routes
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_routes";
CREATE TABLE "public"."tbl_routes" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_routes_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "route" varchar(100) COLLATE "pg_catalog"."default",
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
-- Records of tbl_routes
-- ----------------------------
INSERT INTO "public"."tbl_routes" VALUES (1, 'RTS-0000001', 'MAINTENANCE', 'maintenance', NULL, 1, 1, 1, NULL, NULL, '2023-11-10 08:46:37+08', '2023-11-10 11:41:55+08', NULL, NULL);
INSERT INTO "public"."tbl_routes" VALUES (3, 'RTS-0000003', 'ASSETS', 'assets', NULL, 1, 1, NULL, NULL, NULL, '2023-11-10 11:46:31+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_routes" VALUES (2, 'RTS-0000002', 'TOOLS', 'tools', NULL, 0, 1, 1, NULL, NULL, '2023-11-10 11:45:17+08', '2023-11-24 08:24:49+08', NULL, NULL);

-- ----------------------------
-- Table structure for tbl_setup
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_setup";
CREATE TABLE "public"."tbl_setup" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_setup_id_seq'::regclass),
  "table_name" varchar(50) COLLATE "pg_catalog"."default",
  "table_structure" text COLLATE "pg_catalog"."default",
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
-- Records of tbl_setup
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_stocks
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks";
CREATE TABLE "public"."tbl_stocks" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "type" varchar(20) COLLATE "pg_catalog"."default",
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

-- ----------------------------
-- Table structure for tbl_stocks_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks_info";
CREATE TABLE "public"."tbl_stocks_info" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_info_id_seq'::regclass),
  "stocks_id" int4
)
;

-- ----------------------------
-- Records of tbl_stocks_info
-- ----------------------------

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
INSERT INTO "public"."tbl_users" VALUES (1, 'USR-0000000', 'it@kcic.com.ph', '$2b$10$Gfx6w2bDoCWnLnH/lgsVg.5kuc9kr0xln.iu150LZZ155oEy9fTVy', 'superadmin', 1, 1, NULL, NULL, NULL, '2023-07-28 10:56:57+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (2, 'USR-0000001', 'judan.pauljohn@gmail.com', '$2b$10$n47zSRkKgidOGOMITEvpae2BDpIn2f1yxz0YL2jLk5N/Se8vXviSi', 'user', 1, 1, NULL, NULL, NULL, '2023-11-22 15:00:19+08', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_users_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_users_info";
CREATE TABLE "public"."tbl_users_info" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_users_info_id_seq'::regclass),
  "user_id" int4,
  "employee_no" varchar(20) COLLATE "pg_catalog"."default",
  "rfid" varchar(20) COLLATE "pg_catalog"."default",
  "branch" varchar(50) COLLATE "pg_catalog"."default",
  "company_id" int4,
  "department_id" int4,
  "position_id" int4,
  "fname" varchar(200) COLLATE "pg_catalog"."default",
  "mname" varchar(200) COLLATE "pg_catalog"."default",
  "lname" varchar(200) COLLATE "pg_catalog"."default",
  "address" text COLLATE "pg_catalog"."default",
  "employment_status" varchar(50) COLLATE "pg_catalog"."default",
  "profile" text COLLATE "pg_catalog"."default",
  "gender" varchar(20) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of tbl_users_info
-- ----------------------------
INSERT INTO "public"."tbl_users_info" VALUES (2, 2, '22100427', '0006318192', 'quezon_ave', 1, 1, 1, 'PAUL JOHN', 'SOLANO', 'JUDAN', NULL, 'regular', '"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuMTRlY2I0MiwgMjAyMi8xMi8wMi0xOToxMjo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0wNFQwOToyMDowNCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNS0wNFQwOToyMDowNCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMDRUMDk6MjA6MDQrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJjZDRhNGI5LTA4ZGEtOTg0Yy05OGM4LTkwMzA1NDliY2JmYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyY2Q0YTRiOS0wOGRhLTk4NGMtOThjOC05MDMwNTQ5YmNiZmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyY2Q0YTRiOS0wOGRhLTk4NGMtOThjOC05MDMwNTQ5YmNiZmEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJjZDRhNGI5LTA4ZGEtOTg0Yy05OGM4LTkwMzA1NDliY2JmYSIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0wNFQwOToyMDowNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoUf+IkAAI85SURBVHic7N13mF11tf/xz/qenULvvQtBqiAgSFdACL13MoMFURQVL3iv/V4VO5YfVopSA6ETqqEIAgoiSicg0gJJBAIhvez9Xb8/zkQSSHKSmXPmu8/Z79fz5JlJMnPmk+fJnDlr7bW+29xdAAAAAACgs4XUAQAAAAAAQOvRAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQA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DRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABrw/wDjzAE4Jxj85wAAAABJRU5ErkJggg=="', 'male');
INSERT INTO "public"."tbl_users_info" VALUES (1, 1, '00000000', '0000000000', NULL, NULL, NULL, NULL, 'MIS', NULL, 'ADMIN', NULL, NULL, '"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuMTRlY2I0MiwgMjAyMi8xMi8wMi0xOToxMjo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0wNFQwOToyMDowNCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNS0wNFQwOToyMDowNCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMDRUMDk6MjA6MDQrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJjZDRhNGI5LTA4ZGEtOTg0Yy05OGM4LTkwMzA1NDliY2JmYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyY2Q0YTRiOS0wOGRhLTk4NGMtOThjOC05MDMwNTQ5YmNiZmEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyY2Q0YTRiOS0wOGRhLTk4NGMtOThjOC05MDMwNTQ5YmNiZmEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJjZDRhNGI5LTA4ZGEtOTg0Yy05OGM4LTkwMzA1NDliY2JmYSIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0wNFQwOToyMDowNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoUf+IkAAI85SURBVHic7N13mF11tf/xz/qenULvvQtBqiAgSFdACL13MoMFURQVL3iv/V4VO5YfVopSA6ETqqEIAgoiSicg0gJJBAIhvez9Xb8/zkQSSHKSmXPmu8/Z79fz5JlJMnPmk+fJnDlr7bW+29xdAAAAAACgs4XUAQAAAAAAQOvRAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQADQAAAAAAACqABgAAAAAAABVAAwAAAAAAgAqgAQAAAAAAQAXQAAAAAAAAoAJoAAAAAAAAUAE0AAAAAAAAqAAaAAAAAAAAVAANAAAAAAAAKoAGAAAAAAAAFUADAAAAAACACqABAAAAAABABdAAAAAAAACgAmgAAAAAAABQATQAAAAAAACoABoAAAAAAABUAA0AAAAAAAAqgAYAAAAAAAAVQAMAAAAAAIAKoAEAAAAAAEAF0AAAAAAAAKACaAAAAAAAAFABNAAAAAAAAKgAGgAAAAAAAFQA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DRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABogAAAAAEADBAAAAABogAAAAAAADRAAAAAAoAECAAAAADRAAAAAAIAGCAAAAADQAAEAAAAAGiAAAAAAQAMEAAAAAGiAAAAAAAANEAAAAACgAQIAAAAANEAAAAAAgAYIAAAAANAAAQAAAAAaIAAAAABAAwQAAAAAaIAAAAAAAA0QAAAAAKABAgAAAAA0QAAAAACABggAAAAA0AABAAAAABrw/wDjzAE4Jxj85wAAAABJRU5ErkJggg=="', NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_audit_trail_id_seq"
OWNED BY "public"."tbl_audit_trail"."id";
SELECT setval('"public"."tbl_audit_trail_id_seq"', 29, true);

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
SELECT setval('"public"."tbl_company_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_department_id_seq"
OWNED BY "public"."tbl_department"."id";
SELECT setval('"public"."tbl_department_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_modules_id_seq"
OWNED BY "public"."tbl_modules"."id";
SELECT setval('"public"."tbl_modules_id_seq"', 10, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_position_id_seq"
OWNED BY "public"."tbl_position"."id";
SELECT setval('"public"."tbl_position_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_routes_id_seq"
OWNED BY "public"."tbl_routes"."id";
SELECT setval('"public"."tbl_routes_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_setup_id_seq"
OWNED BY "public"."tbl_setup"."id";
SELECT setval('"public"."tbl_setup_id_seq"', 4, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_id_seq"
OWNED BY "public"."tbl_stocks"."id";
SELECT setval('"public"."tbl_stocks_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_info_id_seq"
OWNED BY "public"."tbl_stocks_info"."id";
SELECT setval('"public"."tbl_stocks_info_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_id_seq"
OWNED BY "public"."tbl_users"."id";
SELECT setval('"public"."tbl_users_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_info_id_seq"
OWNED BY "public"."tbl_users_info"."id";
SELECT setval('"public"."tbl_users_info_id_seq"', 4, true);

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
-- Primary Key structure for table tbl_modules
-- ----------------------------
ALTER TABLE "public"."tbl_modules" ADD CONSTRAINT "tbl_modules_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_position
-- ----------------------------
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_routes
-- ----------------------------
ALTER TABLE "public"."tbl_routes" ADD CONSTRAINT "tbl_routes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_setup
-- ----------------------------
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_stocks
-- ----------------------------
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_stocks_info
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_info" ADD CONSTRAINT "tbl_stocks_info_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_users
-- ----------------------------
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_users_info
-- ----------------------------
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_pkey" PRIMARY KEY ("id");

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
-- Foreign Keys structure for table tbl_modules
-- ----------------------------
ALTER TABLE "public"."tbl_modules" ADD CONSTRAINT "tbl_modules_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_modules" ADD CONSTRAINT "tbl_modules_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_modules" ADD CONSTRAINT "tbl_modules_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_modules" ADD CONSTRAINT "tbl_modules_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "public"."tbl_routes" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_modules" ADD CONSTRAINT "tbl_modules_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_position
-- ----------------------------
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."tbl_company" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."tbl_department" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_routes
-- ----------------------------
ALTER TABLE "public"."tbl_routes" ADD CONSTRAINT "tbl_routes_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_routes" ADD CONSTRAINT "tbl_routes_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_routes" ADD CONSTRAINT "tbl_routes_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_routes" ADD CONSTRAINT "tbl_routes_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_setup
-- ----------------------------
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_stocks
-- ----------------------------
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "public"."tbl_brands" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
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
ALTER TABLE "public"."tbl_stocks_info" ADD CONSTRAINT "tbl_stocks_info_stocks_id_fkey" FOREIGN KEY ("stocks_id") REFERENCES "public"."tbl_stocks" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_users
-- ----------------------------
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_users_info
-- ----------------------------
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."tbl_company" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."tbl_department" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "public"."tbl_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
