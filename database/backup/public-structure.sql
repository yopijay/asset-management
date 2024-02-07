/*
 Navicat Premium Data Transfer

 Source Server         : prod_db
 Source Server Type    : PostgreSQL
 Source Server Version : 150005
 Source Host           : dpg-clqq65hjvg7s73e9gn00-a.singapore-postgres.render.com:5432
 Source Catalog        : db_kc_u3sl
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150005
 File Encoding         : 65001

 Date: 07/02/2024 16:51:28
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
-- Sequence structure for tbl_stocks_issuance_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_stocks_issuance_id_seq";
CREATE SEQUENCE "public"."tbl_stocks_issuance_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_stocks_request_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_stocks_request_id_seq";
CREATE SEQUENCE "public"."tbl_stocks_request_id_seq" 
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
-- Sequence structure for tbl_users_permission_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_users_permission_id_seq";
CREATE SEQUENCE "public"."tbl_users_permission_id_seq" 
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
  "date_imported" timestamptz(6),
  "extension" varchar(50) COLLATE "pg_catalog"."default"
)
;

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
-- Table structure for tbl_stocks
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks";
CREATE TABLE "public"."tbl_stocks" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "category_id" int4,
  "brand_id" int4,
  "quantity" int4,
  "status" varchar(50) COLLATE "pg_catalog"."default",
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6),
  "branch" varchar(20) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for tbl_stocks_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks_info";
CREATE TABLE "public"."tbl_stocks_info" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_info_id_seq'::regclass),
  "stocks_id" int4,
  "serial_no" varchar(100) COLLATE "pg_catalog"."default",
  "model" varchar(100) COLLATE "pg_catalog"."default",
  "cpu" varchar(100) COLLATE "pg_catalog"."default",
  "gpu" varchar(100) COLLATE "pg_catalog"."default",
  "hdd" varchar(50) COLLATE "pg_catalog"."default",
  "ssd" varchar(50) COLLATE "pg_catalog"."default",
  "ram" varchar(50) COLLATE "pg_catalog"."default",
  "os" varchar(100) COLLATE "pg_catalog"."default",
  "power_supply" varchar(100) COLLATE "pg_catalog"."default",
  "warranty" varchar(100) COLLATE "pg_catalog"."default",
  "hdmi" int4,
  "vga" int4,
  "dvi" int4,
  "fingerprint" int4,
  "camera" int4,
  "wifi" int4,
  "bluetooth" int4,
  "resolution" varchar(100) COLLATE "pg_catalog"."default",
  "type" varchar(50) COLLATE "pg_catalog"."default",
  "condition" varchar(50) COLLATE "pg_catalog"."default",
  "refresh_rate" varchar(100) COLLATE "pg_catalog"."default",
  "panel" varchar(100) COLLATE "pg_catalog"."default",
  "output_capacity" varchar(50) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for tbl_stocks_issuance
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks_issuance";
CREATE TABLE "public"."tbl_stocks_issuance" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_issuance_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "issued_to" int4,
  "issued_by" int4,
  "item_id" int4,
  "date_issued" varchar(50) COLLATE "pg_catalog"."default",
  "note" text COLLATE "pg_catalog"."default",
  "status" text COLLATE "pg_catalog"."default",
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6),
  "date_received" varbit(50),
  "branch" varchar(20) COLLATE "pg_catalog"."default",
  "quantity" int4
)
;

-- ----------------------------
-- Table structure for tbl_stocks_request
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks_request";
CREATE TABLE "public"."tbl_stocks_request" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_request_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "control_no" varchar(50) COLLATE "pg_catalog"."default",
  "requested_by" int4,
  "approved_by" int4,
  "received_by" int4,
  "date_filed" varchar(50) COLLATE "pg_catalog"."default",
  "date_needed" varchar(50) COLLATE "pg_catalog"."default",
  "items" text COLLATE "pg_catalog"."default",
  "remarks" text COLLATE "pg_catalog"."default",
  "status" varchar(50) COLLATE "pg_catalog"."default",
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
  "gender" varchar(20) COLLATE "pg_catalog"."default",
  "head_id" int4
)
;

-- ----------------------------
-- Table structure for tbl_users_permission
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_users_permission";
CREATE TABLE "public"."tbl_users_permission" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_users_permission_id_seq'::regclass),
  "user_id" int4,
  "permission" text COLLATE "pg_catalog"."default",
  "updated_by" int4,
  "date_updated" timestamptz(6)
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_audit_trail_id_seq"
OWNED BY "public"."tbl_audit_trail"."id";
SELECT setval('"public"."tbl_audit_trail_id_seq"', 1145, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_brands_id_seq"
OWNED BY "public"."tbl_brands"."id";
SELECT setval('"public"."tbl_brands_id_seq"', 38, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_category_id_seq"
OWNED BY "public"."tbl_category"."id";
SELECT setval('"public"."tbl_category_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_company_id_seq"
OWNED BY "public"."tbl_company"."id";
SELECT setval('"public"."tbl_company_id_seq"', 11, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_department_id_seq"
OWNED BY "public"."tbl_department"."id";
SELECT setval('"public"."tbl_department_id_seq"', 60, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_modules_id_seq"
OWNED BY "public"."tbl_modules"."id";
SELECT setval('"public"."tbl_modules_id_seq"', 19, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_position_id_seq"
OWNED BY "public"."tbl_position"."id";
SELECT setval('"public"."tbl_position_id_seq"', 153, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_routes_id_seq"
OWNED BY "public"."tbl_routes"."id";
SELECT setval('"public"."tbl_routes_id_seq"', 14, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_setup_id_seq"
OWNED BY "public"."tbl_setup"."id";
SELECT setval('"public"."tbl_setup_id_seq"', 13, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_id_seq"
OWNED BY "public"."tbl_stocks"."id";
SELECT setval('"public"."tbl_stocks_id_seq"', 180, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_info_id_seq"
OWNED BY "public"."tbl_stocks_info"."id";
SELECT setval('"public"."tbl_stocks_info_id_seq"', 180, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_issuance_id_seq"
OWNED BY "public"."tbl_stocks_issuance"."id";
SELECT setval('"public"."tbl_stocks_issuance_id_seq"', 107, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_request_id_seq"
OWNED BY "public"."tbl_stocks_request"."id";
SELECT setval('"public"."tbl_stocks_request_id_seq"', 10, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_id_seq"
OWNED BY "public"."tbl_users"."id";
SELECT setval('"public"."tbl_users_id_seq"', 262, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_info_id_seq"
OWNED BY "public"."tbl_users_info"."id";
SELECT setval('"public"."tbl_users_info_id_seq"', 262, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_permission_id_seq"
OWNED BY "public"."tbl_users_permission"."id";
SELECT setval('"public"."tbl_users_permission_id_seq"', 262, true);

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
-- Primary Key structure for table tbl_stocks_issuance
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_stocks_request
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_users
-- ----------------------------
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_users_info
-- ----------------------------
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_users_permission
-- ----------------------------
ALTER TABLE "public"."tbl_users_permission" ADD CONSTRAINT "tbl_users_permission_pkey" PRIMARY KEY ("id");

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
ALTER TABLE "public"."tbl_stocks" ADD CONSTRAINT "tbl_stocks_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_stocks_info
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_info" ADD CONSTRAINT "tbl_stocks_info_stocks_id_fkey" FOREIGN KEY ("stocks_id") REFERENCES "public"."tbl_stocks" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_stocks_issuance
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_issued_by_fkey" FOREIGN KEY ("issued_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_issued_to_fkey" FOREIGN KEY ("issued_to") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "public"."tbl_stocks" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_stocks_request
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_approved_by_fkey" FOREIGN KEY ("approved_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_received_by_fkey" FOREIGN KEY ("received_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_requested_by_fkey" FOREIGN KEY ("requested_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_request" ADD CONSTRAINT "tbl_stocks_request_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_head_id_fkey" FOREIGN KEY ("head_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "public"."tbl_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users_info" ADD CONSTRAINT "tbl_users_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_users_permission
-- ----------------------------
ALTER TABLE "public"."tbl_users_permission" ADD CONSTRAINT "tbl_users_permission_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users_permission" ADD CONSTRAINT "tbl_users_permission_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
