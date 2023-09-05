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

 Date: 05/09/2023 11:24:48
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
-- Sequence structure for tbl_assets_info_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_assets_info_id_seq";
CREATE SEQUENCE "public"."tbl_assets_info_id_seq" 
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
-- Sequence structure for tbl_supplies_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_supplies_id_seq";
CREATE SEQUENCE "public"."tbl_supplies_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tbl_supplies_info_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tbl_supplies_info_id_seq";
CREATE SEQUENCE "public"."tbl_supplies_info_id_seq" 
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
-- Table structure for tbl_assets_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_assets_info";
CREATE TABLE "public"."tbl_assets_info" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_assets_info_id_seq'::regclass),
  "assets_id" int4,
  "type" varchar(50) COLLATE "pg_catalog"."default",
  "brand_id" int4,
  "model" varchar(100) COLLATE "pg_catalog"."default",
  "panel" varchar(100) COLLATE "pg_catalog"."default",
  "resolution" varchar(100) COLLATE "pg_catalog"."default",
  "color" varchar(100) COLLATE "pg_catalog"."default",
  "cpu" varchar(100) COLLATE "pg_catalog"."default",
  "gpu" varchar(100) COLLATE "pg_catalog"."default",
  "hdd" varchar(50) COLLATE "pg_catalog"."default",
  "ssd" varchar(50) COLLATE "pg_catalog"."default",
  "ram" varchar(50) COLLATE "pg_catalog"."default",
  "os" varchar(150) COLLATE "pg_catalog"."default",
  "power_supply" varchar(70) COLLATE "pg_catalog"."default",
  "warranty" varchar(100) COLLATE "pg_catalog"."default",
  "hdmi" int4,
  "vga" int4,
  "dvi" int4,
  "wifi" int4,
  "bluetooth" int4,
  "fingerprint" int4,
  "webcam" int4,
  "backlit_keyboard" int4
)
;

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
-- Table structure for tbl_supplies
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_supplies";
CREATE TABLE "public"."tbl_supplies" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_supplies_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "type" varchar(50) COLLATE "pg_catalog"."default",
  "brand_id" int4,
  "model" varchar(100) COLLATE "pg_catalog"."default",
  "status" int4,
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6),
  "date_received" varchar(100) COLLATE "pg_catalog"."default",
  "warranty" varchar(50) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for tbl_supplies_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_supplies_info";
CREATE TABLE "public"."tbl_supplies_info" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_supplies_info_id_seq'::regclass),
  "supplies_id" int4,
  "quantity" int4,
  "date_received" varchar(50) COLLATE "pg_catalog"."default",
  "warranty" varchar(20) COLLATE "pg_catalog"."default"
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
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_assets_id_seq"
OWNED BY "public"."tbl_assets"."id";
SELECT setval('"public"."tbl_assets_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_assets_info_id_seq"
OWNED BY "public"."tbl_assets_info"."id";
SELECT setval('"public"."tbl_assets_info_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_audit_trail_id_seq"
OWNED BY "public"."tbl_audit_trail"."id";
SELECT setval('"public"."tbl_audit_trail_id_seq"', 20, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_brands_id_seq"
OWNED BY "public"."tbl_brands"."id";
SELECT setval('"public"."tbl_brands_id_seq"', 16, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_company_id_seq"
OWNED BY "public"."tbl_company"."id";
SELECT setval('"public"."tbl_company_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_department_id_seq"
OWNED BY "public"."tbl_department"."id";
SELECT setval('"public"."tbl_department_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_employee_id_seq"
OWNED BY "public"."tbl_employee"."id";
SELECT setval('"public"."tbl_employee_id_seq"', 8, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_module_id_seq"
OWNED BY "public"."tbl_module"."id";
SELECT setval('"public"."tbl_module_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_position_id_seq"
OWNED BY "public"."tbl_position"."id";
SELECT setval('"public"."tbl_position_id_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_sub_module_id_seq"
OWNED BY "public"."tbl_sub_module"."id";
SELECT setval('"public"."tbl_sub_module_id_seq"', 13, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_supplies_id_seq"
OWNED BY "public"."tbl_supplies"."id";
SELECT setval('"public"."tbl_supplies_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_supplies_info_id_seq"
OWNED BY "public"."tbl_supplies_info"."id";
SELECT setval('"public"."tbl_supplies_info_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_id_seq"
OWNED BY "public"."tbl_users"."id";
SELECT setval('"public"."tbl_users_id_seq"', 8, true);

-- ----------------------------
-- Primary Key structure for table tbl_assets
-- ----------------------------
ALTER TABLE "public"."tbl_assets" ADD CONSTRAINT "tbl_assets_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_assets_info
-- ----------------------------
ALTER TABLE "public"."tbl_assets_info" ADD CONSTRAINT "tbl_assets_info_pkey" PRIMARY KEY ("id");

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
-- Primary Key structure for table tbl_supplies
-- ----------------------------
ALTER TABLE "public"."tbl_supplies" ADD CONSTRAINT "tbl_supplies_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_supplies_info
-- ----------------------------
ALTER TABLE "public"."tbl_supplies_info" ADD CONSTRAINT "tbl_supplies_info_pkey" PRIMARY KEY ("id");

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
-- Foreign Keys structure for table tbl_assets_info
-- ----------------------------
ALTER TABLE "public"."tbl_assets_info" ADD CONSTRAINT "tbl_assets_info_assets_id_fkey" FOREIGN KEY ("assets_id") REFERENCES "public"."tbl_assets" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_assets_info" ADD CONSTRAINT "tbl_assets_info_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "public"."tbl_brands" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Foreign Keys structure for table tbl_supplies
-- ----------------------------
ALTER TABLE "public"."tbl_supplies" ADD CONSTRAINT "tbl_supplies_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "public"."tbl_brands" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_supplies" ADD CONSTRAINT "tbl_supplies_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_supplies" ADD CONSTRAINT "tbl_supplies_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_supplies" ADD CONSTRAINT "tbl_supplies_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_supplies" ADD CONSTRAINT "tbl_supplies_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_supplies_info
-- ----------------------------
ALTER TABLE "public"."tbl_supplies_info" ADD CONSTRAINT "tbl_supplies_info_supplies_id_fkey" FOREIGN KEY ("supplies_id") REFERENCES "public"."tbl_supplies" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tbl_users
-- ----------------------------
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
