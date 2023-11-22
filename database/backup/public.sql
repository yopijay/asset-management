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

 Date: 06/11/2023 11:42:22
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
INSERT INTO "public"."tbl_audit_trail" VALUES (1, 'KUFG6BI', 'tbl_department', 1, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:14:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (2, 'P6NNBC3', 'tbl_department', 2, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:15:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (3, 'ZKXWYM1', 'tbl_department', 3, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:15:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (4, 'I3LBBF4', 'tbl_department', 4, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:15:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (5, 'NQP5BF1', 'tbl_department', 5, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:15:44+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (6, 'CRPMREM', 'tbl_department', 6, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:15:59+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (7, '2XV1GK5', 'tbl_department', 7, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:16:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (8, 'XM430V5', 'tbl_department', 8, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:53:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (9, '20LKL6P', 'tbl_department', 9, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:54:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (10, 'Z435819', 'tbl_department', 10, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:54:22+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (11, 'X11TIQ6', 'tbl_department', 11, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:54:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (12, 'N7RF5LJ', 'tbl_department', 12, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:54:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (13, 'OSGJUOP', 'tbl_department', 13, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:54:52+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (14, 'PGBOYTL', 'tbl_department', 14, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:55:00+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (15, 'BUSLTSA', 'tbl_department', 15, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:55:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (16, 'W1VEDJS', 'tbl_department', 16, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:55:23+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (17, 'WST39Z0', 'tbl_department', 17, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:55:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (18, 'W61RHXE', 'tbl_department', 18, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:55:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (19, 'HMPG9KJ', 'tbl_department', 19, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:55:55+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (20, 'NIHJH0V', 'tbl_sub_module', 8, 'status', '1', '0', 'update', 1, '2023-10-16 15:56:15+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (21, 'O1VSTQ8', 'tbl_sub_module', 8, 'status', '0', '1', 'update', 1, '2023-10-16 15:56:20+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (22, '7BP9I8I', 'tbl_position', 1, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:57:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (23, 'MU1KGEU', 'tbl_position', 2, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:57:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (24, '40OQPKO', 'tbl_position', 3, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:57:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (25, 'DJ526EZ', 'tbl_position', 4, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:58:00+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (26, '5UJSJWR', 'tbl_position', 5, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:58:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (27, 'AMR1GXI', 'tbl_position', 6, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:58:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (28, 'DR8B6VB', 'tbl_position', 7, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:59:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (29, 'XQ7ML4Z', 'tbl_position', 8, 'all', NULL, NULL, 'create', 1, '2023-10-16 15:59:35+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (30, 'LB1QF59', 'tbl_position', 9, 'all', NULL, NULL, 'create', 1, '2023-10-16 16:15:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (31, 'SDV41JB', 'tbl_position', 10, 'all', NULL, NULL, 'create', 1, '2023-10-16 16:15:17+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (32, 'YEMWP0S', 'tbl_users', 2, 'all', NULL, NULL, 'create', 1, '2023-10-16 16:19:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (33, 'VHEMY60', 'tbl_position', 11, 'all', NULL, NULL, 'create', 1, '2023-10-16 16:20:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (34, 'JV8YPR3', 'tbl_users', 3, 'all', NULL, NULL, 'create', 1, '2023-10-16 16:21:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (35, 'R5O7XCN', 'tbl_department', 20, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:44:11+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (36, 'KF5JX64', 'tbl_department', 21, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:44:28+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (37, '7Z0E6WE', 'tbl_department', 22, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:44:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (38, 'BSD9PEW', 'tbl_department', 23, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:45:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (39, 'NTUR0HP', 'tbl_department', 24, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:45:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (40, '80A57L4', 'tbl_department', 25, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:45:58+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (41, '0HL36XH', 'tbl_department', 26, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:46:36+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (42, 'M2TAF6C', 'tbl_department', 27, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:46:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (43, '7UMC6VT', 'tbl_department', 28, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:47:56+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (44, 'IIOLKBU', 'tbl_department', 29, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:48:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (45, '8PEV0NJ', 'tbl_department', 11, 'department_head_id', '1', '2', 'update', 1, '2023-10-18 08:50:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (46, 'X2IKEBP', 'tbl_department', 30, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:51:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (47, '5968ASE', 'tbl_department', 31, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:51:25+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (48, 'PEJ3RLS', 'tbl_department', 32, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:51:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (49, 'VYMA43B', 'tbl_department', 33, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:51:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (50, 'W0VEDMU', 'tbl_department', 34, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:52:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (51, '1V1SLWP', 'tbl_department', 35, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:52:18+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (52, 'QW5OSTB', 'tbl_department', 36, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:52:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (53, 'KX52TGE', 'tbl_department', 37, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:52:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (54, 'M8SVM39', 'tbl_department', 38, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:52:52+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (55, 'WHKBSS3', 'tbl_department', 39, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:53:04+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (56, 'YRJT768', 'tbl_department', 40, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:53:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (57, 'XM5EHVA', 'tbl_department', 41, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:53:34+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (58, 'QMWE6WB', 'tbl_department', 42, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:53:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (59, 'R4FGB3Y', 'tbl_department', 43, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:54:04+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (60, 'SN5BBN6', 'tbl_department', 44, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:54:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (61, 'WIGTJIU', 'tbl_department', 45, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:54:40+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (62, '1W8CI9R', 'tbl_department', 46, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:57:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (63, 'I1X96EJ', 'tbl_department', 47, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:58:33+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (64, 'CRD8YXO', 'tbl_department', 48, 'all', NULL, NULL, 'create', 1, '2023-10-18 08:59:34+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (65, 'NE7AU58', 'tbl_department', 49, 'all', NULL, NULL, 'create', 1, '2023-10-18 09:00:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (66, 'VJV3K99', 'tbl_department', 50, 'all', NULL, NULL, 'create', 1, '2023-10-18 09:00:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (67, '1QPQESG', 'tbl_department', 51, 'all', NULL, NULL, 'create', 1, '2023-10-18 09:00:51+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (68, 'BQ6OJKS', 'tbl_department', 52, 'all', NULL, NULL, 'create', 1, '2023-10-18 09:01:04+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (69, 'QV5P5FD', 'tbl_users', 4, 'all', NULL, NULL, 'create', 1, '2023-10-18 11:50:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (70, 'ZGCOFT9', 'tbl_users', 5, 'all', NULL, NULL, 'create', 1, '2023-10-18 11:55:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (71, 'LYP3TDZ', 'tbl_users', 5, 'password', '$2b$10$tffQiIy9iipFxUHYgIZZje/m6R.qzIMs.NnqO4gH4ReCMAdRiC4Vm', '$2b$10$SF7pk3QI.fGZkodSbCIR.OF6oF.Tqysh1mIvXqejt.xMczkftlSYK', 'update', 1, '2023-10-18 11:55:56+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (72, '1PEMTFT', 'tbl_users', 6, 'all', NULL, NULL, 'create', 1, '2023-10-18 12:01:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (73, 'WQAGQRN', 'tbl_users', 7, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:12:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (74, '3KPIKSK', 'tbl_users', 8, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:13:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (75, '5OBX2LB', 'tbl_users', 4, 'password', '$2b$10$h6FN3xIEP85DSwTHPOKSzOyUVak1Py/gAzdbby82rvcy5Pe5d/dYS', '$2b$10$iqfXGN1v1i37sgt/DRYteOgpx5IXCxtaNekksbKDoyVOJ6tXEaJGC', 'update', 1, '2023-10-18 13:26:26+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (76, 'OLOMU8K', 'tbl_users', 5, 'password', '$2b$10$SF7pk3QI.fGZkodSbCIR.OF6oF.Tqysh1mIvXqejt.xMczkftlSYK', '$2b$10$LAzyGvgOctyYkbgWoYgfTedpEW1WXiatA3qetALpVmi2z/FMQCQba', 'update', 1, '2023-10-18 13:26:42+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (77, '8TBZLYQ', 'tbl_users', 9, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:28:22+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (78, 'D2UEG38', 'tbl_category', 1, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:28:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (79, 'TC9F2D0', 'tbl_brands', 1, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:29:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (80, '9VNSXB1', 'tbl_stocks', 1, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:31:25+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (81, '1ESNM9R', 'tbl_users', 10, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:49:05+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (82, 'JKHKQ6L', 'tbl_users', 11, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:50:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (83, 'K9VD1DD', 'tbl_users', 12, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:52:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (84, 'EIYQL83', 'tbl_users', 13, 'all', NULL, NULL, 'create', 1, '2023-10-18 13:58:56+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (85, 'TQ5OMOL', 'tbl_position', 12, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:00:44+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (86, 'E8GHLH8', 'tbl_users', 14, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:01:00+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (87, 'O2T7YD0', 'tbl_position', 13, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:04:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (88, 'EJVP5PA', 'tbl_users', 15, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:04:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (89, 'TW4K0AI', 'tbl_users', 16, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:06:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (90, 'KYFR0NZ', 'tbl_stocks_issuance', 1, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:06:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (91, 'TMC1HOP', 'tbl_users', 3, 'user_level', 'user', 'admin', 'update', 1, '2023-10-18 14:07:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (92, 'TB2MKG5', 'tbl_users', 3, 'password', '$2b$10$FG5I6PIQl.E/YqdD0sH5ee7MiCVJUtw29PwLafovDdFkUqAwDsKFq', '$2b$10$S9sG74goSLFMQm6eBUD8y.ztepjjncwYdJKDLAsYXmdbbuL1KCFUO', 'update', 1, '2023-10-18 14:07:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (93, 'SEF1FXY', 'tbl_users', 16, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (94, 'CUA2PK6', 'tbl_users', 15, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:17+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (95, 'Z1KV2WT', 'tbl_users', 14, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:20+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (96, '9BQWS95', 'tbl_users', 13, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:23+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (97, '1KCKY62', 'tbl_users', 12, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (98, 'VRKU6L0', 'tbl_users', 11, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:35+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (99, 'LGZJSCR', 'tbl_users', 10, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (100, 'XEADOVJ', 'tbl_users', 9, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:42+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (101, 'RTVGPAW', 'tbl_users', 8, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (102, 'B7QDFYH', 'tbl_users', 7, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (103, 'M73282Y', 'tbl_users', 6, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:54:59+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (104, 'TW7W45L', 'tbl_users', 5, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:55:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (105, 'NHAHJVJ', 'tbl_users', 4, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:55:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (106, 'PBKK9JT', 'tbl_users', 3, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:55:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (107, 'T2TDNFN', 'tbl_users', 2, 'employment_status', NULL, 'regular', 'update', 1, '2023-10-18 14:55:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (108, 'U7MMTYW', 'tbl_position', 14, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:57:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (109, 'WDQHBTI', 'tbl_users', 17, 'all', NULL, NULL, 'create', 1, '2023-10-18 14:58:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (110, '4N0URBN', 'tbl_position', 15, 'all', NULL, NULL, 'create', 1, '2023-10-18 15:00:18+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (111, 'KV1H4T5', 'tbl_users', 18, 'all', NULL, NULL, 'create', 1, '2023-10-18 15:00:30+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (112, '9A280XW', 'tbl_position', 16, 'all', NULL, NULL, 'create', 1, '2023-10-18 15:00:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (113, 'AF6OXFA', 'tbl_users', 20, 'all', NULL, NULL, 'create', 1, '2023-10-18 15:36:33+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (114, 'YLSA10F', 'tbl_users', 21, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:15:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (115, 'KT9I9P2', 'tbl_users', 22, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:17:00+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (116, 'IIMOIHV', 'tbl_position', 17, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:18:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (117, 'M3OP86U', 'tbl_users', 23, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:20:56+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (118, 'F6QANI2', 'tbl_position', 18, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:30:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (119, 'AANC6AT', 'tbl_users', 24, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:30:58+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (120, '28D0Z16', 'tbl_position', 19, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:34:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (121, 'ALA7W39', 'tbl_position', 20, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:34:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (122, 'RKZ3P5K', 'tbl_position', 21, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:34:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (123, '5VQEXCI', 'tbl_users', 25, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:35:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (124, 'IR1KCUT', 'tbl_users', 26, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:37:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (125, 'JDWB0X4', 'tbl_users', 27, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:40:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (126, '9FAUZWM', 'tbl_users', 28, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:42:34+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (127, 'MJ54NU6', 'tbl_position', 22, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:47:18+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (128, 'J70W8IZ', 'tbl_position', 23, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:47:30+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (129, 'H2U6LB8', 'tbl_users', 29, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:47:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (130, 'QHSGB7S', 'tbl_users', 30, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:49:52+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (131, 'MN8FAAU', 'tbl_position', 24, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:56:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (132, 'WXUEXY0', 'tbl_position', 25, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:56:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (133, 'Z9YFD0B', 'tbl_position', 26, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:56:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (134, 'HQMYNZC', 'tbl_position', 27, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:56:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (135, 'R8JPIGS', 'tbl_position', 28, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:57:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (136, 'UAFE22P', 'tbl_position', 29, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:57:25+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (137, 'CNE5L37', 'tbl_position', 30, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:57:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (138, 'ML8R1Y1', 'tbl_position', 31, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:57:58+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (139, 'QSNOE9F', 'tbl_position', 32, 'all', NULL, NULL, 'create', 1, '2023-10-19 11:58:51+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (140, 'TQWJ7W8', 'tbl_users', 31, 'all', NULL, NULL, 'create', 1, '2023-10-19 12:01:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (141, '1ALOOIJ', 'tbl_users', 32, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:13:35+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (142, 'VO7CDVQ', 'tbl_users', 33, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:15:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (143, 'GQR9QSN', 'tbl_users', 34, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:16:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (144, '32VL2ZK', 'tbl_users', 35, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:18:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (145, 'LBYPDGH', 'tbl_users', 2, 'password', '$2b$10$7CaSsO8UGZW3zl12ULsOI.jClCeZdPMWaOA8x8WM9TdM4YSbQyBGW', '$2b$10$xHTJ3bSvaQBdMDVHzS3CvOG7/nT2zHf0N1MkM/tmHCBrjUS3H5Pqq', 'update', 1, '2023-10-19 13:19:15+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (146, '6HGZLY5', 'tbl_users', 3, 'password', '$2b$10$S9sG74goSLFMQm6eBUD8y.ztepjjncwYdJKDLAsYXmdbbuL1KCFUO', '$2b$10$IzLA2wySfGfenRJ.ZvlUhegbSfoXkXHD4PKA9Zc4DwQx0zEMeoi1S', 'update', 1, '2023-10-19 13:19:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (147, 'HRQ2W97', 'tbl_users', 4, 'password', '$2b$10$iqfXGN1v1i37sgt/DRYteOgpx5IXCxtaNekksbKDoyVOJ6tXEaJGC', '$2b$10$huzNX12tQXYKD8ISv20GD.wkk95xnXgFEfyQKrbw3oIa.cONfmtFG', 'update', 1, '2023-10-19 13:20:04+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (148, 'HPAWW87', 'tbl_users', 5, 'password', '$2b$10$LAzyGvgOctyYkbgWoYgfTedpEW1WXiatA3qetALpVmi2z/FMQCQba', '$2b$10$tFs3DccPe4jgwMJdGpOh9O7TXjBWyjj9RBZG1jtlJruQhWTQl.Y1.', 'update', 1, '2023-10-19 13:20:19+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (149, 'TNRD2MP', 'tbl_users', 6, 'password', '$2b$10$wViqNatWjCF7nBP2gn9RyevLqiY2GxOUu0GJ5YtZlWbihs.l3YZGC', '$2b$10$oeO7tpsaUa/LVSfVgfzhkOUqYIKnpKf2Xii7yaBDgqEXvkHIZUuwG', 'update', 1, '2023-10-19 13:20:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (150, 'QVA4I1M', 'tbl_users', 7, 'password', '$2b$10$z7w3KCJt/.b4UUowONcDZuufXEwKITyIJj2y0e2m.aBvk/yxthFjC', '$2b$10$1vzl2lVfU8GYGlqrM.z/L./iUsR2vQN0vO6lxRdb4jgvZI.qeez.e', 'update', 1, '2023-10-19 13:34:28+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (151, '0NC0XA8', 'tbl_users', 8, 'password', '$2b$10$0cK38Rnk7TyG8MpdecbsfuxZEdr0Iujuo4milcp63affS7pliCjOy', '$2b$10$g3YJtkF4kFlWCDwVp/p4XOuxg5PdmCki7R2a.xBJuj4aemKJ55CfC', 'update', 1, '2023-10-19 13:35:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (152, 'FPPQH8S', 'tbl_users', 9, 'password', '$2b$10$20PpZxk6Vfh9F9YAGyJfHOxer1BUKY.W0toa/DQw.uKAKvVD1.t4C', '$2b$10$Um27QeOk7gpqRftQjLYMMelMlyDTSIaGLmothJtmAjrSrquAEvwEC', 'update', 1, '2023-10-19 13:36:32+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (153, 'X3C52PD', 'tbl_users', 10, 'password', '$2b$10$HJ6h52tjFoCSbZAXFCuvPuGQ/ohsOwAh6xDJ8cyU1A7fRMikFaQ7i', '$2b$10$xgvvnAb8uhcfchySlg40xO79nPa2Wi2MRYLA7QC2WgzhSvFLDuqje', 'update', 1, '2023-10-19 13:36:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (154, 'JSOO9SK', 'tbl_users', 11, 'password', '$2b$10$A8E1ul3Tpc40uZAuWDZkc.T/CnXI4JD9vG5C/XQx/7ytRuLUtyEtq', '$2b$10$RmwnaVw1h3dY5dusew5hJ.Cen74L5soUkIYobKzdyah/sVXH03qOK', 'update', 1, '2023-10-19 13:37:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (155, 'Z568GAX', 'tbl_users', 12, 'password', '$2b$10$WjIaz0M6yMl48tw313vSP.0n6CoLLnP2SdUrkFF/Ts5c44h3DydAm', '$2b$10$OrNoEtKWmhGvJzUBk8/9qOhCmWO5i.BK61cBCtMCrH7/cQ/HhQBou', 'update', 1, '2023-10-19 13:37:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (156, 'IBTMTTL', 'tbl_users', 13, 'password', '$2b$10$yNBfMAe8pO7asGWeErdqheIX/l9TSbwj6Y6i.vzWANuXBztORbvXq', '$2b$10$uhZ5lTD1QZou02X6qscnde03j40nlnnWibfE0ggG5Xr.fWL321Mhm', 'update', 1, '2023-10-19 13:37:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (157, '10CDPYS', 'tbl_users', 14, 'password', '$2b$10$qIzD2KGpX4DmGRKAhY9CsuzlrBMlLjhDPRWQT1CnAXOXDdlHJeVom', '$2b$10$oHZDycne1NIYbt0/t9Ge6OEh4BHoAQc54Q/e/geQJFIgqtcowZZZ6', 'update', 1, '2023-10-19 13:37:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (158, 'XVGAXBQ', 'tbl_users', 15, 'password', '$2b$10$uP3QjA7EyGl7ptdoo0d6lu/aXun0nnXpNS84YDwTHRizr/M1Zo/Za', '$2b$10$XPVuPGrwbbPHhCZ7tWXEiuPt1VYciLQYi.T3SgE9v5xVgoAJdh2iu', 'update', 1, '2023-10-19 13:37:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (159, '46UJR42', 'tbl_users', 16, 'password', '$2b$10$9k2L3YRdBjuIVAfIMvV0YO40jeqIqJ.1ZeIH6FJ0lp.Q1ytHpd7vm', '$2b$10$HQyMLK0JREt9omC583bPI.VxYgzsRB8xhomRkNSBlbyZ4MhX6HCAS', 'update', 1, '2023-10-19 13:38:08+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (160, '71VCWPA', 'tbl_users', 17, 'password', '$2b$10$G5anxGJRqPFgEaOj9irjDuVK33VktuF42b051Rh8yhndCsdT.DIoO', '$2b$10$i5F5.qsKP7NuqOwNEY179uVtl9kYOJJfokViEN.QBsHoZeOqs.1BO', 'update', 1, '2023-10-19 13:38:23+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (161, '0TM3540', 'tbl_users', 18, 'password', '$2b$10$d5wjMxaM1.JfaQ63VET/Oe4DO.rKtI/lAKgMLGDb9mSerbP6COHXW', '$2b$10$BRjFKGD1N4oQyArjFJITf.4vxlaQKZvBfbaZp54pHm8KU5s0bCwL2', 'update', 1, '2023-10-19 13:39:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (162, 'FP56GWS', 'tbl_users', 19, 'password', '$2b$10$c/g2qIPDL8xwPaFEXKgSwO9CjVp6AhipsUbl4Wu4EHYP58.mduxTW', '$2b$10$Pp683za4WPQCvw2HNjLgcuFxDIue5GxzqEpFkuLzL7UGJpgI/gxLa', 'update', 1, '2023-10-19 13:39:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (163, '0GA271L', 'tbl_users', 20, 'password', '$2b$10$t0JsFxnnWJ6/Kfw1K/VmEOPFRw4UUyjQao73Qn10DnLJYcoyqXMde', '$2b$10$S2TnbSeIhz5tWfcck4ZAhOTiAl75Uu42rO4JgDc3z80VYx9eEKbXy', 'update', 1, '2023-10-19 13:40:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (164, 'KJ2UOLY', 'tbl_users', 21, 'password', '$2b$10$SWIPqqe9YEiB7eakjDxd/.yCvAo15DmqymV8HfisEWDroH2xQdehm', '$2b$10$sjImiGr3Aqgvc7maZztq4Oyi5lIMosrt.vM.rvXtBSRMMYViIvBLG', 'update', 1, '2023-10-19 13:40:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (165, 'QFNKDDF', 'tbl_users', 22, 'password', '$2b$10$PMT5pFiNFKF7iresgTMeSuaFUHI8x.sSH9Kcz8m1FiHBKO.AtcwDy', '$2b$10$HXdoEHeFyj8HCiM7ns70xeZpl5XIbb8Hl39cVqdndNHmvdChKyglu', 'update', 1, '2023-10-19 13:40:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (166, 'Y2BR3PO', 'tbl_users', 23, 'password', '$2b$10$QP.fgSr9/Wr8IYL3.o72m.y8kwZbnneNuG7JpC1BS0Bbd446IK6De', '$2b$10$N.13YWuu3Gj.o4toIKSq4OIY0YoWtNQoVJe6cQhTaMhAWyDlV7Z0K', 'update', 1, '2023-10-19 13:40:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (167, 'BKD8B12', 'tbl_users', 24, 'password', '$2b$10$Tgwr321GYpYiOxNSSAd65OkpHq.SBaoljXWcs/y.UydVpXIh4RBkO', '$2b$10$k0fUZuzmowSRYSEHHz1g/uqQey1954TvcRP7DMR3yUF.Z85wV1lIW', 'update', 1, '2023-10-19 13:41:00+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (168, 'NP449CZ', 'tbl_users', 25, 'password', '$2b$10$jHqc6Irzfr8VtmTMVakp/uzNIGcq6G29aXAJ3yhyd/hy/3pvahzD.', '$2b$10$GWXvk6aqw4xBZp5kawa9ZeqaWi7n.natwSpi/mz5sdObKW.d.44Ve', 'update', 1, '2023-10-19 13:41:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (169, 'K57XWBB', 'tbl_users', 26, 'password', '$2b$10$mHjLY8w1eOu0a55rF4h1suT0GfvBrAzCEFGs0kEpm8vrj8AvEPlVG', '$2b$10$DwzKpo50QErAsWaCQW8Zje/.Jd9OWloch8mY64LF9oAyuSyYklLZq', 'update', 1, '2023-10-19 13:41:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (170, 'LUDX8HW', 'tbl_users', 27, 'password', '$2b$10$.HMS63XDuBlnTTA4gqx8cOmD6OERUlHSJ3w8cx6igFGJxrFI8qVB.', '$2b$10$0qWNNpISI4GcWpyDMVsLJOZ8ROMV48Mo/yhN8SggRWpSXeMZmAy22', 'update', 1, '2023-10-19 13:41:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (171, 'QI3API2', 'tbl_users', 28, 'password', '$2b$10$fVZPn29Jl/WKexwjLEKHw.MeE/V8SG2rLpvcNImr3wUC/kS43nYYm', '$2b$10$LDMssiFrZ9QtIIsIKom9qunX3f7Lcerpk0Y7dPqNPuyxjAYciwMTu', 'update', 1, '2023-10-19 13:41:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (172, '1TSC6QW', 'tbl_users', 29, 'password', '$2b$10$8j2zKka.fHKes4nsEvYinubp/zrWqpj23BzG1OjzjzeaiYBFFFZsq', '$2b$10$lEdXMBdP1qn8jc.yXYWVQ.rfTjGx77E./WaDVPAQE4B09dGntPXTO', 'update', 1, '2023-10-19 13:42:05+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (173, 'VMAU03T', 'tbl_users', 30, 'password', '$2b$10$ADoWgv7fiCn1D1IyAxptheq6sQu5BWGPPymUiZybYsEeH2rHPPhXO', '$2b$10$2lJvjzrjX5ijp3c6MZG/WubkYqf4CUvWBZf.iJ1CmYvPQWzuZRqcC', 'update', 1, '2023-10-19 13:42:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (174, 'PNIKCVE', 'tbl_users', 31, 'password', '$2b$10$ewrQacE4mU035jRb7qs9WeipXrkXk4qGxnskNcPgukGVByPf2RjVG', '$2b$10$V4kYe913OX0C6WkCSBg2ouOfVF7fVVn1tUQBJrzSMkmykMJI97hYe', 'update', 1, '2023-10-19 13:42:25+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (175, 'BLAKBUT', 'tbl_users', 32, 'password', '$2b$10$Ac1jzQXwqfNmBgQBr4UDW.0i8EatybBuBJ0MS/JhXg6nPD.tG4Uvu', '$2b$10$fEVLlwYXy5EPe7qNS98nTu9rJYZJuoFxNy/1TyQAOzUOEj2ocCtM2', 'update', 1, '2023-10-19 13:42:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (176, 'XCCFJAI', 'tbl_users', 33, 'password', '$2b$10$2BebT8/Y6kc6UUxuAbjGoOnehooWn27svjSHxHNEYKwyl19Rn1iBO', '$2b$10$BnjWd81hPjqhWwW/YYeSgOBcCPer03ZGsPUZCQ5l7UtR6x7lHW2su', 'update', 1, '2023-10-19 13:42:51+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (177, 'LB9QLT0', 'tbl_users', 34, 'password', '$2b$10$/FgbJ2HzhHzTZPuSqDar7.V.LkT/FXgeYXBhGShfVT/n51n/iVnW.', '$2b$10$G2YGiYL6tV5AxzTE6mg3Ke7rlQILlzPHF1LLW4AiOHCFmBDYsa10W', 'update', 1, '2023-10-19 13:43:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (178, 'OVGIRUP', 'tbl_users', 35, 'password', '$2b$10$GlA0DJ/mD6hoY1zX//1m0uL5n4v31EZ5OXzwGItDXEv7HGFBH6VNO', '$2b$10$NWD6HLEKeK9W0UwOWtpKFOgF4yWU3twNy8kLJd22/sbk/U3p4ERXu', 'update', 1, '2023-10-19 13:43:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (179, 'GG7S1WO', 'tbl_users', 36, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:45:45+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (180, 'IJSNNDB', 'tbl_users', 37, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:48:05+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (181, '71IKXG8', 'tbl_users', 38, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:55:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (182, 'MS8XBG7', 'tbl_users', 39, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:57:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (183, '0PWBP56', 'tbl_users', 40, 'all', NULL, NULL, 'create', 1, '2023-10-19 13:59:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (184, 'NG0GN27', 'tbl_users', 41, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:00:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (185, 'HI20PKC', 'tbl_users', 42, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:02:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (186, 'S2U3M79', 'tbl_users', 43, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:04:49+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (187, 'OOPAGZX', 'tbl_users', 44, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:06:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (188, 'CDMTUS7', 'tbl_position', 33, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:11:57+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (189, 'C5QJVF4', 'tbl_position', 34, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:12:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (190, 'FN2MDFW', 'tbl_users', 45, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:12:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (191, '98EII7P', 'tbl_users', 46, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:14:15+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (192, 'VNTYXCM', 'tbl_position', 35, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:16:30+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (193, '7UV30GU', 'tbl_position', 36, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:16:42+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (194, 'FX7WZT6', 'tbl_position', 37, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:16:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (195, 'PWG37L1', 'tbl_position', 38, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:17:03+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (196, '5646GO6', 'tbl_position', 39, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:17:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (197, '4DZWGJQ', 'tbl_users', 47, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:17:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (198, 'Y6AARO2', 'tbl_users', 46, 'address', NULL, '3618 LINGAYEN ST., STA. MESA, MANILA', 'update', 1, '2023-10-19 14:18:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (199, 'GSDTSGN', 'tbl_users', 46, 'employee_no', '3618 lingayen st., sta. mesa, manila', '20100216', 'update', 1, '2023-10-19 14:18:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (200, 'NP2M37Y', 'tbl_users', 48, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:20:20+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (201, 'MAUO43O', 'tbl_users', 49, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:21:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (202, '0E7JPT3', 'tbl_users', 50, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:23:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (203, '1FPMNOZ', 'tbl_users', 51, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:25:26+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (204, 'ESWWOYR', 'tbl_users', 52, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:27:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (205, '5QYF0Z4', 'tbl_users', 53, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:28:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (206, 'T0BGD7H', 'tbl_position', 40, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:35:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (207, 'KPXD6V8', 'tbl_position', 41, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:35:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (208, 'GSM9E6I', 'tbl_users', 54, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:36:36+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (209, '6BKWZO4', 'tbl_users', 55, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:38:53+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (210, 'UL2U4UY', 'tbl_users', 56, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:40:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (211, 'TCQYT6F', 'tbl_position', 42, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:47:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (212, 'TEWOVIR', 'tbl_position', 43, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:47:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (213, 'JJ4PDOQ', 'tbl_users', 57, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:53:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (214, '8VFFJR1', 'tbl_users', 58, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:55:33+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (215, '7SS5SAI', 'tbl_users', 59, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:57:35+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (216, 'BJYE69S', 'tbl_position', 44, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:58:25+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (217, 'T95L7DU', 'tbl_position', 45, 'all', NULL, NULL, 'create', 1, '2023-10-19 14:58:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (218, '91QY8RI', 'tbl_users', 60, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:00:33+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (219, 'PT1L6F6', 'tbl_users', 61, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:04:33+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (220, '918C6P0', 'tbl_users', 62, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:08:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (221, 'RKGQXSS', 'tbl_users', 63, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:10:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (222, 'VM3E2MT', 'tbl_users', 64, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:11:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (223, 'NDBW1FJ', 'tbl_users', 65, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:14:22+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (224, 'FT32GTQ', 'tbl_position', 46, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:15:36+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (225, 'QLRZMQI', 'tbl_position', 47, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:15:50+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (226, '6STO2TR', 'tbl_position', 48, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:16:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (227, '1J81HHB', 'tbl_position', 49, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:16:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (228, 'GU9ZLFD', 'tbl_department', 53, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:16:59+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (229, 'L0BVKQN', 'tbl_position', 50, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:20:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (230, '6XAO3VC', 'tbl_users', 66, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:22:51+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (231, 'KUS6QTX', 'tbl_users', 67, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:25:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (232, 'BH871H3', 'tbl_users', 68, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:27:46+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (233, 'DM4GXFG', 'tbl_category', 2, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:58:01+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (234, '9QVBCS8', 'tbl_brands', 2, 'all', NULL, NULL, 'create', 1, '2023-10-19 15:58:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (235, 'OW6WP34', 'tbl_stocks', 2, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:02:44+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (236, 'D5QM0M0', 'tbl_stocks', 3, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:03:45+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (237, '1VGS2EG', 'tbl_stocks', 2, 'warranty', NULL, '1 YR', 'update', 1, '2023-10-19 16:03:55+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (238, '1PX2C8S', 'tbl_stocks', 4, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:04:58+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (239, '7CSZW5I', 'tbl_stocks', 5, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:05:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (240, 'JS6OW2B', 'tbl_stocks', 6, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:06:29+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (241, '8EAO0GK', 'tbl_stocks', 7, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:10:07+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (242, 'OX66PV2', 'tbl_stocks_issuance', 2, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:10:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (243, 'R54KBGF', 'tbl_stocks', 8, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:12:12+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (244, 'HMGA90Q', 'tbl_stocks', 7, 'warranty', '1', '1 YR', 'update', 1, '2023-10-19 16:12:20+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (245, 'BGISC3E', 'tbl_stocks_issuance', 3, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:13:00+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (246, 'SY2TBE2', 'tbl_category', 3, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:14:35+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (247, '3TD2OGP', 'tbl_category', 4, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:14:40+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (248, '2KCNE3Y', 'tbl_category', 5, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:14:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (249, '2TF5RIQ', 'tbl_category', 6, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:14:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (250, 'EI79TJ4', 'tbl_brands', 3, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:15:18+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (251, 'PJVMA7V', 'tbl_stocks', 9, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:17:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (252, 'FOHBE8O', 'tbl_stocks', 9, 'hdmi', '1', '0', 'update', 1, '2023-10-19 16:18:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (253, '3ZQ0387', 'tbl_stocks', 9, 'dvi', '1', '0', 'update', 1, '2023-10-19 16:18:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (254, 'JB02HKZ', 'tbl_stocks', 9, 'fingerprint', '1', '0', 'update', 1, '2023-10-19 16:18:14+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (255, 'XFNT3KX', 'tbl_sub_module', 10, 'all', NULL, NULL, 'create', 1, '2023-10-19 16:24:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (256, 'CC9SDW4', 'tbl_sub_module', 10, 'status', '0', '1', 'update', 1, '2023-10-19 16:24:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (257, 'D7US595', 'tbl_sub_module', 10, 'status', '1', '0', 'update', 1, '2023-10-19 16:24:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (258, '42B3VOA', 'tbl_brands', 4, 'all', NULL, NULL, 'create', 1, '2023-10-26 09:06:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (259, 'S6F1J8H', 'tbl_category', 7, 'all', NULL, NULL, 'create', 1, '2023-10-26 13:01:41+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (260, 'MTGF304', 'tbl_category', 8, 'all', NULL, NULL, 'create', 1, '2023-10-26 13:01:45+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (261, '08LPAUV', 'tbl_brands', 5, 'all', NULL, NULL, 'create', 1, '2023-10-26 13:17:05+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (262, 'QYNV9US', 'tbl_brands', 6, 'all', NULL, NULL, 'create', 1, '2023-10-26 13:30:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (263, 'XV7XY4Z', 'tbl_brands', 7, 'all', NULL, NULL, 'create', 1, '2023-10-26 13:30:28+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (264, 'CTAH2UV', 'tbl_brands', 8, 'all', NULL, NULL, 'create', 1, '2023-10-26 14:09:24+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (265, '1MRECAA', 'tbl_brands', 9, 'all', NULL, NULL, 'create', 1, '2023-10-26 14:09:30+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (266, 'O782ZIL', 'tbl_stocks', 10, 'all', NULL, NULL, 'create', 1, '2023-10-26 14:22:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (267, 'SRGL0GI', 'tbl_stocks', 11, 'all', NULL, NULL, 'create', 1, '2023-10-26 14:23:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (268, 'HZVT8NQ', 'tbl_stocks', 11, 'serial_no', 'CN-049PR0-CH400-079P-A00', 'CN-049PR0-CH400-973-079P-A00', 'update', 1, '2023-10-26 14:27:35+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (269, '9AMM1J1', 'tbl_stocks', 11, 'type', 'wired', 'wireless', 'update', 1, '2023-10-26 14:32:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (270, '1GU8HOC', 'tbl_stocks', 11, 'type', 'wired', 'wireless', 'update', 1, '2023-10-26 14:32:20+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (271, 'T0CWTKX', 'tbl_stocks', 12, 'all', NULL, NULL, 'create', 1, '2023-10-26 15:17:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (272, 'ERCF924', 'tbl_stocks', 13, 'all', NULL, NULL, 'create', 1, '2023-10-26 15:41:44+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (273, 'ZI32TTM', 'tbl_stocks', 12, 'backlit', NULL, '0', 'update', 1, '2023-10-26 15:41:48+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (274, 'KVNNKRH', 'tbl_stocks', 14, 'all', NULL, NULL, 'create', 1, '2023-10-27 11:18:54+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (275, '24EFOXC', 'tbl_stocks', 15, 'all', NULL, NULL, 'create', 1, '2023-10-27 11:25:15+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (276, '2D20BL8', 'tbl_brands', 10, 'all', NULL, NULL, 'create', 1, '2023-10-27 11:36:44+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (277, '7TRHYDK', 'tbl_stocks', 16, 'all', NULL, NULL, 'create', 1, '2023-10-27 11:37:38+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (278, 'SXJEESG', 'tbl_brands', 11, 'all', NULL, NULL, 'create', 1, '2023-10-27 11:55:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (279, '5QI4N2F', 'tbl_brands', 12, 'all', NULL, NULL, 'create', 1, '2023-11-06 09:55:37+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (280, '04MYXQN', 'tbl_stocks', 18, 'all', NULL, NULL, 'create', 1, '2023-11-06 09:56:51+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (281, '95SZDEF', 'tbl_brands', 12, 'name', 'DELL', 'DELL1', 'update', 1, '2023-11-06 10:58:10+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (282, 'OP2Z28B', 'tbl_brands', 12, 'name', 'DELL1', 'DELL', 'update', 1, '2023-11-06 10:59:23+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (283, 'NZQ0FPW', 'tbl_brands', 12, 'status', '1', '0', 'update', 1, '2023-11-06 10:59:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (284, 'GVL267L', 'tbl_brands', 12, 'status', '0', '1', 'update', 1, '2023-11-06 10:59:30+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (285, 'HNRZ5N4', 'tbl_category', 8, 'name', 'TONER', 'TONER1', 'update', 1, '2023-11-06 11:01:02+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (286, 'HIBBMZL', 'tbl_category', 8, 'name', 'TONER1', 'TONER', 'update', 1, '2023-11-06 11:01:06+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (287, 'WKA6B3G', 'tbl_category', 8, 'status', '1', '0', 'update', 1, '2023-11-06 11:01:08+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (288, 'QHXFFQN', 'tbl_category', 8, 'status', '0', '1', 'update', 1, '2023-11-06 11:01:11+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (289, '5UVU3DT', 'tbl_company', 2, 'name', 'S-POWER CORPORATION', 'S-POWER CORPORATION1', 'update', 1, '2023-11-06 11:01:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (290, '9HMCI8I', 'tbl_company', 2, 'name', 'S-POWER CORPORATION1', 'S-POWER CORPORATION', 'update', 1, '2023-11-06 11:01:21+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (291, 'LB91SSZ', 'tbl_company', 2, 'description', NULL, 'TESTING', 'update', 1, '2023-11-06 11:01:33+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (292, '5KB1JNX', 'tbl_company', 2, 'description', 'TESTING', NULL, 'update', 1, '2023-11-06 11:01:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (293, '4ZG499R', 'tbl_company', 2, 'address', NULL, 'TESTING', 'update', 1, '2023-11-06 11:01:39+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (296, 'ERI94A6', 'tbl_company', 2, 'status', '1', '0', 'update', 1, '2023-11-06 11:01:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (294, 'EG5L45L', 'tbl_company', 2, 'telephone', '8230-4008', '8230-40081', 'update', 1, '2023-11-06 11:01:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (295, 'GHL6HSH', 'tbl_company', 2, 'address', 'TESTING', NULL, 'update', 1, '2023-11-06 11:01:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (297, 'QDFI0NU', 'tbl_company', 2, 'telephone', '8230-40081', '8230-4008', 'update', 1, '2023-11-06 11:01:51+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (299, 'Z2YTMWA', 'tbl_department', 53, 'name', 'ENGINEERING - COSTING', 'ENGINEERING - COSTING1', 'update', 1, '2023-11-06 11:07:31+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (300, 'H5KT07P', 'tbl_department', 53, 'name', 'ENGINEERING - COSTING1', 'ENGINEERING - COSTING', 'update', 1, '2023-11-06 11:08:09+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (301, '9OIMV6P', 'tbl_department', 53, 'description', NULL, 'TESTING', 'update', 1, '2023-11-06 11:08:13+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (302, 'Q0CT5WW', 'tbl_department', 53, 'status', '1', '0', 'update', 1, '2023-11-06 11:08:16+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (304, 'B531Y8V', 'tbl_department', 53, 'status', '0', '1', 'update', 1, '2023-11-06 11:08:20+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (303, 'YJWML79', 'tbl_department', 53, 'description', 'TESTING', NULL, 'update', 1, '2023-11-06 11:08:20+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (306, 'Y6EO4SI', 'tbl_users', 68, 'lname', 'TIU1', 'TIU', 'update', 1, '2023-11-06 11:12:27+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (305, '2WHDQNW', 'tbl_users', 68, 'lname', 'TIU', 'TIU1', 'update', 1, '2023-11-06 11:12:23+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (307, '1ZH9V7O', 'tbl_position', 50, 'name', 'COSTING ENGINEER', 'COSTING ENGINEER1', 'update', 1, '2023-11-06 11:13:43+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (308, '8Y02T01', 'tbl_position', 50, 'name', 'COSTING ENGINEER1', 'COSTING ENGINEER', 'update', 1, '2023-11-06 11:13:47+08');
INSERT INTO "public"."tbl_audit_trail" VALUES (298, '45TSWMP', 'tbl_company', 2, 'status', '0', '1', 'update', 1, '2023-11-06 11:01:51+08');

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
INSERT INTO "public"."tbl_brands" VALUES (1, 'BRD-0000001', 1, 'LENOVO', 1, 1, NULL, NULL, NULL, '2023-10-18 13:29:01+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (2, 'BRD-0000002', 2, 'AOC', 1, 1, NULL, NULL, NULL, '2023-10-19 15:58:13+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (3, 'BRD-0000003', 1, 'DELL', 1, 1, NULL, NULL, NULL, '2023-10-19 16:15:18+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (4, 'BRD-0000004', 5, 'EPSON', 1, 1, NULL, NULL, NULL, '2023-10-26 09:06:10+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (5, 'BRD-0000005', 3, 'DELL', 1, 1, NULL, NULL, NULL, '2023-10-26 13:17:05+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (6, 'BRD-0000006', 4, 'IBUYPOWER', 1, 1, NULL, NULL, NULL, '2023-10-26 13:30:13+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (7, 'BRD-0000007', 4, 'DELL', 1, 1, NULL, NULL, NULL, '2023-10-26 13:30:28+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (8, 'BRD-0000008', 5, 'SAMSUNG', 1, 1, NULL, NULL, NULL, '2023-10-26 14:09:24+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (9, 'BRD-0000009', 6, 'APC', 1, 1, NULL, NULL, NULL, '2023-10-26 14:09:30+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (10, 'BRD-0000010', 3, 'HP', 1, 1, NULL, NULL, NULL, '2023-10-27 11:36:44+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (11, 'BRD-0000011', 4, 'LENOVO', 1, 1, NULL, NULL, NULL, '2023-10-27 11:55:27+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_brands" VALUES (12, 'BRD-0000012', 7, 'DELL', 1, 1, 1, NULL, NULL, '2023-11-06 09:55:37+08', '2023-11-06 10:59:30+08', NULL, NULL);

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
INSERT INTO "public"."tbl_category" VALUES (1, 'CTG-0000001', 'LAPTOP', 1, 1, NULL, NULL, NULL, '2023-10-18 13:28:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (2, 'CTG-0000002', 'MONITOR', 1, 1, NULL, NULL, NULL, '2023-10-19 15:58:01+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (3, 'CTG-0000003', 'MOUSE', 1, 1, NULL, NULL, NULL, '2023-10-19 16:14:35+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (4, 'CTG-0000004', 'KEYBOARD', 1, 1, NULL, NULL, NULL, '2023-10-19 16:14:40+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (5, 'CTG-0000005', 'PRINTER', 1, 1, NULL, NULL, NULL, '2023-10-19 16:14:48+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (6, 'CTG-0000006', 'UPS', 1, 1, NULL, NULL, NULL, '2023-10-19 16:14:54+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (7, 'CTG-0000007', 'SYSTEM UNIT', 1, 1, NULL, NULL, NULL, '2023-10-26 13:01:41+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_category" VALUES (8, 'CTG-0000008', 'TONER', 1, 1, 1, NULL, NULL, '2023-10-26 13:01:45+08', '2023-11-06 11:01:11+08', NULL, NULL);

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
INSERT INTO "public"."tbl_company" VALUES (1, 'CMP-0000001', 'KC ELECTRICAL INNOVATION INC.', '8781-0071', NULL, '#82 CORDILLERA ST. CORNER QUEZON AVE., QUEZON CITY', 1, 1, NULL, NULL, NULL, '2023-10-05 16:55:37+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_company" VALUES (2, 'CMP-0000002', 'S-POWER CORPORATION', '8230-4008', NULL, NULL, 1, 1, 1, NULL, NULL, '2023-10-16 14:43:41+08', '2023-11-06 11:01:51+08', NULL, NULL);

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
INSERT INTO "public"."tbl_department" VALUES (1, 'DPT-0000001', 1, 1, 'ACCOUNTING - AUDIT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:14:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (2, 'DPT-0000002', 1, 1, 'ACCOUNTING - FINANCE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:15:01+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (3, 'DPT-0000003', 1, 1, 'ACCOUNTING - PAYABLES', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:15:14+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (4, 'DPT-0000004', 1, 1, 'ACCOUNTING - PRE AUDIT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:15:29+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (5, 'DPT-0000005', 1, 1, 'ACCOUNTING - PROJECT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:15:44+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (6, 'DPT-0000006', 1, 1, 'ACCOUNTING - WHOLESALE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:15:59+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (7, 'DPT-0000007', 1, 1, 'ADMIN', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:16:12+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (8, 'DPT-0000008', 1, 1, 'EXECUTIVE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:53:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (9, 'DPT-0000009', 1, 1, 'HUMAN RESOURCE - PAYROLL', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:54:06+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (10, 'DPT-0000010', 1, 1, 'HUMAN RESOURCES - RECRUITMENT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:54:22+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (12, 'DPT-0000012', 1, 1, 'LOGISTICS', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:54:38+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (13, 'DPT-0000013', 1, 1, 'MANAGEMENT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:54:52+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (14, 'DPT-0000014', 1, 1, 'MARKETING', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:55:00+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (15, 'DPT-0000015', 1, 1, 'SALES - CDD', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:55:14+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (16, 'DPT-0000016', 1, 1, 'SALES - PSD', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:55:23+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (17, 'DPT-0000017', 1, 1, 'SALES - WHOLESALE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:55:39+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (18, 'DPT-0000018', 1, 1, 'TECHNICAL', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:55:48+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (19, 'DPT-0000019', 1, 1, 'WAREHOUSE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-16 15:55:55+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (20, 'DPT-0000020', 2, 1, 'ACCOUNTING - AUDIT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:44:11+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (21, 'DPT-0000021', 2, 1, 'ACCOUNTING - FINANCE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:44:28+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (22, 'DPT-0000022', 2, 1, 'ACCOUNTING - PAYABLES', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:44:48+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (23, 'DPT-0000023', 2, 1, 'ACCOUNTING - PRE AUDIT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:45:21+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (24, 'DPT-0000024', 2, 1, 'ACCOUNTING - PROJECT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:45:38+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (25, 'DPT-0000025', 2, 1, 'ACCOUNTING - WHOLESALE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:45:58+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (26, 'DPT-0000026', 2, 1, 'ADMIN', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:46:36+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (27, 'DPT-0000027', 2, 1, 'BUSWAY - DESIGN', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:46:49+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (28, 'DPT-0000028', 2, 1, 'BUSWAY - IMPLEMENTATION', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:47:56+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (29, 'DPT-0000029', 2, 1, 'ENGINEERING - CAD', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:48:37+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (11, 'DPT-0000011', 1, 2, 'IT / MIS', NULL, 1, 1, 1, NULL, NULL, '2023-10-16 15:54:29+08', '2023-10-18 08:50:37+08', NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (30, 'DPT-0000030', 2, 1, 'ENGINEERING - COSTING', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:51:13+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (31, 'DPT-0000031', 2, 1, 'ENGINEERING - DESIGN', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:51:25+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (32, 'DPT-0000032', 2, 1, 'ENGINEERING - PROGRAMMING', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:51:41+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (33, 'DPT-0000033', 2, 1, 'EXECUTIVE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:51:49+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (34, 'DPT-0000034', 2, 1, 'HUMAN RESOURCE - PAYROLL', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:52:01+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (35, 'DPT-0000035', 2, 1, 'HUMAN RESOURCE - RECRUITMENT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:52:18+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (36, 'DPT-0000036', 2, 2, 'IT / MIS', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:52:31+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (37, 'DPT-0000037', 2, 1, 'LOGISTICS', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:52:43+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (38, 'DPT-0000038', 2, 1, 'MANAGEMENT', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:52:52+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (39, 'DPT-0000039', 2, 1, 'MARKETING', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:53:04+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (40, 'DPT-0000040', 2, 1, 'PRPDUCTION - ASSEMBLY', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:53:19+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (41, 'DPT-0000041', 2, 1, 'PRODUCTION - BUSBARRING', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:53:34+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (42, 'DPT-0000042', 2, 1, 'PRODUCTION - FABRICATION 1', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:53:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (43, 'DPT-0000043', 2, 1, 'PRODUCTION - FABRICATION 2', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:54:04+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (44, 'DPT-0000044', 2, 1, 'PRODUCTION - PAINTING', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:54:24+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (45, 'DPT-0000045', 2, 1, 'PRODUCTION - QUALITY CONTROL', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:54:40+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (46, 'DPT-0000046', 2, 1, 'PURCHASING', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:57:48+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (47, 'DPT-0000047', 2, 1, 'QUALITY MANAGEMENT OFFICE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:58:33+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (48, 'DPT-0000048', 2, 1, 'SALES - CDD', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 08:59:34+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (49, 'DPT-0000049', 2, 1, 'SALES - PSD', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 09:00:12+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (50, 'DPT-0000050', 2, 1, 'SALES - WHOLESALE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 09:00:27+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (51, 'DPT-0000051', 2, 1, 'TECHNICAL', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 09:00:51+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (52, 'DPT-0000052', 2, 1, 'WAREHOUSE', NULL, 1, 1, NULL, NULL, NULL, '2023-10-18 09:01:04+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_department" VALUES (53, 'DPT-0000053', 1, 1, 'ENGINEERING - COSTING', NULL, 1, 1, 1, NULL, NULL, '2023-10-19 15:16:59+08', '2023-11-06 11:08:20+08', NULL, NULL);

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
  "profile" text COLLATE "pg_catalog"."default",
  "employment_status" varchar(20) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of tbl_employee
-- ----------------------------
INSERT INTO "public"."tbl_employee" VALUES (1, 1, '00000000', '0000000000', NULL, NULL, NULL, NULL, 'SUPER', NULL, 'ADMIN', NULL, NULL, NULL);
INSERT INTO "public"."tbl_employee" VALUES (18, 18, '11100040', NULL, 'quezon_ave', 1, 1, 15, 'MILLICENT', 'ANG', 'LIU', '#1715 TECSON ST. STA. CRUZ, MANILA', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (19, 19, '19100156', NULL, 'sto_domingo', 2, 20, 16, 'MARIA CONCEPCION', 'DIAZ', 'CARREON', '160-J SIOSON ST. BANGKULASI NAVOTAS CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (20, 20, '22400485', NULL, 'cavite', 2, 20, NULL, 'MARVIN KARL', 'BARCELONA', 'TUMAMPIL', 'PASONG LANGKA SILANG CAVITE', NULL, 'intern');
INSERT INTO "public"."tbl_employee" VALUES (21, 21, '22400486', NULL, 'cavite', 2, 20, NULL, 'KYRGYZ', 'MARASIGAN', 'PAYAD', 'PASONG LANGKA SILANG CAVITE', NULL, 'intern');
INSERT INTO "public"."tbl_employee" VALUES (22, 22, '22400487', NULL, 'cavite', 2, 20, NULL, 'RICHARD', 'MARTILLANA', 'ORANDE', 'PASONG LANGKA SILANG CAVITE', NULL, 'intern');
INSERT INTO "public"."tbl_employee" VALUES (23, 23, '14100055', NULL, 'quezon_ave', 1, 2, 17, 'KATRINA JOYCE', 'TAN', 'CHUA', '39C MARIANO MARCOS COR BARCELONA ST. BRGY. MAYTUNAS SAN JUAN MANILA', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (6, 6, '77100003', NULL, 'cavite', 1, 19, 7, 'PATERSON', 'LUZON', 'NAVARRO', '#1872 ANTIPOLO ST., STA. CRUZ, MANILA', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (7, 7, '23100006', NULL, 'quezon_ave', 1, 19, 8, 'RODOLFO', 'LIM', 'BELLEZA', '54-D 8TH STREET BRGY MARIANA NEW MANILA QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (8, 8, '86100006', NULL, 'quezon_ave', 1, 7, 4, 'MARIA CRISTINA', 'VOLANTE', 'EUGENIO', '67 FLORENTINO SUITE, COR BANAWE, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (9, 9, '90100009', NULL, 'quezon_ave', 1, 17, 6, 'MARLON', 'UY', 'LASAM', '1519 THE AMARYLLIS RESIDENCE 12TH ST.', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (10, 10, '91100010', NULL, 'quezon_ave', 1, 9, 5, 'ROSE LILY', 'UY', 'TAN', '39-C MARIANO MARCOS COR. BARCELONA ST. BRGY. MAYTUNAS SAN JUAN', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (11, 11, '97100013', NULL, 'quezon_ave', 1, 1, 3, 'LITA', 'LIU', 'NG', '#1441 T. MAPUA ST., STA. CRUZ, MANILA', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (12, 12, '99100015', NULL, 'quezon_ave', 1, 8, 2, 'CHERYL', 'UY', 'YOUNG', '#82 CORDILLERA ST., COR., QUEZON AVE., QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (13, 13, '15100068', NULL, 'quezon_ave', 1, 11, 9, 'CALVIN', 'PUA', 'SY', '#75 IBA ST. BRGY. STA. TERESITA, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (14, 14, '20100212', NULL, 'cavite', 2, 36, 12, 'MABEL', 'CASIL', 'RABIA', '#23 ROTC HUNTERS ST. PINATAG AREA BRGY. TATALON, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (15, 15, '21100322', NULL, 'sto_domingo', 2, 36, 13, 'JOSE', 'CABANG', 'LAPUZ, JR.', '#148 FABRE CMPD. PHILAND BRGY. PASONG TAMO, QUEZON CITY, 1107', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (16, 16, '22100492', NULL, 'cavite', 2, 36, 12, 'JAZZEL', 'ISAGA', 'ANARETA', 'B1 L2 CURSILLISTA ST. BRGY. STA. LUCIA, NOVALICHES, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (17, 17, '3100019', NULL, 'quezon_ave', 1, 1, 14, 'JULIE', 'BUENAOBRA', 'PALMA', 'B17 L12 CAMELLA PROVENCE PHASE 6', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (24, 24, '18100110', NULL, 'sto_domingo', 2, 21, 18, 'IRIS', 'GO', 'ALTURA', '3A CETACIO ST. BRGY. SIENNA, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (25, 25, '16100081', NULL, 'sto_domingo', 2, 22, 19, 'ELYANNA MYRA', 'ANDAL', 'PASCUAL', '400B PASCUAL ST., COLOONG 2, VALENZUELA CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (26, 26, '18100106', NULL, 'sto_domingo', 2, 22, 19, 'MICHELLE', 'ADESAS', 'TALINGDAN', '43 POOK DELA PAZ ST. BRGY. MATANDANG BALARA, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (27, 27, '19100142', NULL, 'sto_domingo', 2, 22, 20, 'JOHN ROBERT', 'AVENDAÑO', 'CRISOSTOMO', '176 C. SANTOS ST. PANGHULO OBANDO, BULACAN', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (28, 28, '19100143', NULL, 'sto_domingo', 2, 22, 19, 'JOANNA', 'MALTE', 'DE GUZMAN', '#12 JORDAN ST. CLEMENTE SUBD. BRGY. SAN AUSTIN, NOVALICHES, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (2, 2, '00000001', '0000000001', 'quezon_ave', 1, 11, 10, 'IT', NULL, 'MIS', NULL, NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (3, 3, '22100427', '0006318192', 'quezon_ave', 1, 11, 11, 'PAUL JOHN', 'SOLANO', 'JUDAN', '#364 RIVERA ST. BRGY. SANGANDAAN, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (4, 4, '77100001', NULL, 'sto_domingo', 1, 8, 1, 'AGUSTIN', 'TAN', 'UY', '#82 CORDILLERA ST. COR. QUEZON AVE., QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (5, 5, '77100002', NULL, 'quezon_ave', 1, 8, 2, 'CONSTANCIA', 'FRANCISCO', 'UY', '#82 CORDILLERA ST. COR. QUEZON AVE., QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (29, 29, '97100012', NULL, 'sto_domingo', 2, 23, 22, 'EMELYN', 'PALOMARES', 'CORCINO', 'L4 B21 PH3 ST. AGATHA HOMES, BRGY. TIKAY, MALOLOS CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (30, 30, '19100157', NULL, 'sto_domingo', 2, 23, 23, 'ROSCEL', 'PALOMO', 'PADUA', '#22 ROSE ST. BRGY. HOLY SPIRIT, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (31, 31, '4100020', NULL, 'cavite', 2, 24, 24, 'MARICEL', 'ESCALANTE', 'MARTINEZ', '#37 B11 LOT 13, TIERRA VERDE RESIDENCES ST. BUROL III DASMARIÑAS CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (32, 32, '13100052', NULL, 'sto_domingo', 2, 24, 25, 'ELVIRA', 'PALMARIA', 'AYURO', 'UNIT 410 PARKLANE TOWER, ROCHESTER CONDOMINIUM, 1601 ELISCO ROAD', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (33, 33, '19100126', NULL, 'sto_domingo', 2, 24, 26, 'MARIA CRISTINA', 'GENETA', 'BIGAYAN', '#0396 UNIT A CATALINA ST. DE CASTRO COMPOUND STA. QUITERIA CALOOCAN CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (34, 34, '19100132', NULL, 'sto_domingo', 2, 24, 31, 'MERO FE', 'AGOS', 'DELA CRUZ', 'B2 L23 VILLA LIBRADA BRGY. SAN JOSE PLARIDEL, BULACAN', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (35, 35, '19100135', NULL, 'sto_domingo', 2, 24, 28, 'CHARMAINE KAYE', 'ASEO', 'REGIS', 'B6 L15 EMERALD STREET STA. CECILIA SUBDIVISION GUITNANG BAYAN 1, SAN MATEO, RIZAL', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (36, 36, '19100139', NULL, 'sto_domingo', 2, 24, 29, 'MARIA VICTORIA', 'ESTRADA', 'ARANTE', '#49 DON PEDRO MALASIQUI, PANGASINAN', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (37, 37, '23100036', NULL, 'sto_domingo', 2, 24, 30, 'ROXANNE LEA MAE', 'QUINTERO', 'ATIENZA', '#3 LIPTOP 2 ST. FILINVEST II BATASAN HILLS, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (38, 38, '19100153', NULL, 'sto_domingo', 2, 24, 26, 'JOHN ABEL', 'YRAG', 'TIBANG', '20A CATTLEYA ST. IVC, MARIKINA CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (39, 39, '20100203', NULL, 'cavite', 2, 24, 31, 'MARY GRACE', 'CALAMIONG', 'SANTOS', 'B5 L9 APARTMENT C ORANGE DRIVE GOODWILL 2 BRGY. BF SUCAT, PARAÑAQUE CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (40, 40, '20100204', NULL, 'cavite', 2, 24, 24, 'LESLIE', 'MENDOZA', 'DELOS SANTOS', '#170 BRGY. MAGUYAMI SILANG, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (41, 41, '20100208', NULL, 'cavite', 2, 24, 32, 'DARREN', 'PARDINES', 'MANJARES', 'B5 L1, 3-2-7 STERLING TECHNOPARK, BRGY. LANTIC, CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (42, 42, '21100285', NULL, 'cavite', 2, 24, 24, 'MARICAR', 'PARDUCHO', 'DELOS SANTOS', '210 SITIO GITNA MAGUYAM, SILANG, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (43, 43, '22100364', NULL, 'sto_domingo', 2, 24, 25, 'ARSENIO', 'FLORES', 'FLORES', 'ROCHESTER GARDEN PARKLANE TOWER ELISCO ROAD BRGY. SAN JOAQUIN, PASIG CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (44, 44, '22100388', NULL, 'sto_domingo', 2, 24, 32, 'HEIRESS', 'FERNANDEZ', 'HORTELANO', 'B43 L3&5 CARISSA HOMES EAST 2 DALIG TERESA, RIZAL', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (45, 45, '19100116', NULL, 'quezon_ave', 1, 6, 33, 'JOANNA MARIE', 'POLINTAN', 'BERNABE', '200 SOLI ST. SANGANDAAN, CALOOCAN CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (47, 47, '8100034', NULL, 'cavite', 2, 26, 35, 'NOEL', 'OSAL', 'CABAGTONG', 'B7 L8 R5 BRGY. LANKAAN, DASMARIÑAS, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (46, 46, '20100216', NULL, 'quezon_ave', 1, 6, 34, 'YVETTE MARIE', 'TEH', 'LIM', '3618 LINGAYEN ST., STA. MESA, MANILA', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (48, 48, '14100062', NULL, 'cavite', 2, 26, 36, 'RAMIL', 'ALDAY', 'MAGYAYA', 'L1 B1 PH3 STERLING TECHNOPARK BRGY. LANTIC CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (49, 49, '20100206', NULL, 'cavite', 2, 26, 37, 'ALEXCYS MAE', 'ROSEL', 'CELIS', '#263 SITIO GITNA BRGY. MAGUYAM SILANG, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (50, 50, '20100209', NULL, 'cavite', 2, 26, 36, 'ODELON GRIFFIN', 'BUHAY', 'MALLARI', 'L1 B1 PH3 STERLING TECHNO PARK BRGY. LANTIC, CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (51, 51, '21100340', NULL, 'cavite', 2, 26, 38, 'LILET', 'ILAO', 'MAGYAYA', 'L1 B1 PH3 BRGY. LANTIC STERLING TECHNO PARK, CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (52, 52, '22100460', NULL, 'cavite', 2, 26, 39, 'CHARLIE', 'ARCILLA', 'MARQUEZ', 'CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (53, 53, '22100494', NULL, 'cavite', 2, 26, 35, 'CHRISTIAN', 'OCAMPO', 'PASTELERO', '#44 RIZAL, PILAR, BATAAN', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (54, 54, '17100088', NULL, 'sto_domingo', 2, 27, 40, 'JOHN REY', 'SUNGA', 'MASANQUE', '#15 ANDRADE ST. BALINGSA, QUEZON CITY, METRO MANILA', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (55, 55, '22100453', NULL, 'sto_domingo', 2, 27, 41, 'JOHN ERICSON', 'FACTORAN', 'RASOS', 'B8 L8 4TH ST. BREEZEWOODS 3 MAMBOG 3, BACOOR CITY, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (56, 56, '22100490', NULL, 'sto_domingo', 2, 27, 41, 'RYAN', 'LACSA', 'FRANCISCO', '31 G. MOLINA ST., CANUMAY EAST VALENZUELA CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (57, 57, '14100057', NULL, 'sto_domingo', 2, 28, 42, 'REY', 'RECOPERTO', 'MONTANO', 'LOT2A B3 JASMINE ST. DONA MARCIA A SUBD. BRGY. UGONG, VALENZUELA CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (58, 58, '16100086', NULL, 'sto_domingo', 2, 28, 43, 'AL DIHN', 'TORRENUEVA', 'MIRADORA', '#93 SUNFLOWER ST. GREENHEIGHTS NEWTOWN 1A SUBD. MAYAMOT, ANITPOLO CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (59, 59, '22100479', NULL, 'sto_domingo', 2, 28, 43, 'ENARD', 'BAYANGOS', 'MARQUEZ', '#38 SAMPAGUITA ST., C.V.S, PORO, CITY OF SAN FERNANDO, LA UNION', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (60, 60, '15100067', NULL, 'cavite', 2, 29, 44, 'MYRA', 'ANINGAT', 'DOMINE', 'B5 L1, 3-7 PH2 STERLING TECHNO PARK, LANTIC, CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (61, 61, '20100166', NULL, 'cavite', 2, 29, 45, 'MANUEL', 'SAGUN', 'RAMOS', 'B6 L9 DON ONOFEE VILL., BRGY. BANAY-BANAY, CABUYAO CITY, LAGUNA', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (62, 62, '20100168', NULL, 'cavite', 2, 29, 44, 'MARY JEAN', 'MALLON', 'MIRABETE', 'L1 B5 PH2 STERLING TECHNO PARK, BRGY. LANTIC, CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (63, 63, '20100219', NULL, 'cavite', 2, 29, 44, 'CRISTELLE LYN', 'TORREJOS', 'MOFAN', 'B5 L1 PH2 STERLING TECHNO PARK, BRGY. LANTIC, CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (64, 64, '221000414', NULL, 'cavite', 2, 29, 44, 'ANTHONY', 'ESPAÑOL', 'ABELIDA', 'BRGY. MAGAYUM, SILANG, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (65, 65, '22100428', NULL, 'cavite', 2, 29, 44, 'LALAIN', 'BALURAN', 'LACOSTALES', 'B41 L13 BRGY. ANAHAW 2, SILANG, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (66, 66, '13100046', NULL, 'cavite', 2, 30, 46, 'PAUL JOSEPH', 'RAFANAN', 'LLANES', '501 JM LOYOLA ST., BRGY. 5, CARMONA, CAVITE', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (67, 67, '16100082', NULL, 'sto_domingo', 2, 30, 47, 'MA LUISA', 'ANTONIO', 'LAURENTE', '#19 ALIBANGBANG ST. VETERANS VILLAGE, PROJECT 7, QUEZON CITY', NULL, 'regular');
INSERT INTO "public"."tbl_employee" VALUES (68, 68, '17100093', NULL, 'quezon_ave', 1, 53, 50, 'JUWIREX', 'TO', 'TIU', '411 REV AGLIPAY ST., BRGY. OLD ZANIGA, MANDALUYONG CITY', NULL, 'regular');

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
INSERT INTO "public"."tbl_module" VALUES (2, 'MDL-0000002', 'ASSETS & SUPPLIES', 'assets-supplies', NULL, 1, 1, NULL, NULL, NULL, '2023-09-07 11:11:30+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_module" VALUES (1, 'MDL-0000001', 'MAINTENANCE', 'maintenance', NULL, 1, 1, 1, NULL, NULL, '2023-09-07 11:10:37+08', '2023-10-16 13:34:25+08', NULL, NULL);

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
INSERT INTO "public"."tbl_position" VALUES (1, 'PST-0000001', 1, 8, 'PRESIDENT', 1, 1, NULL, NULL, NULL, '2023-10-16 15:57:02+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (2, 'PST-0000002', 1, 8, 'VICE PRESIDENT', 1, 1, NULL, NULL, NULL, '2023-10-16 15:57:19+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (3, 'PST-0000003', 1, 1, 'AUDIT HEAD', 1, 1, NULL, NULL, NULL, '2023-10-16 15:57:47+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (4, 'PST-0000004', 1, 7, 'ADMIN HEAD', 1, 1, NULL, NULL, NULL, '2023-10-16 15:58:00+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (5, 'PST-0000005', 1, 9, 'PAYROLL SPECIALIST', 1, 1, NULL, NULL, NULL, '2023-10-16 15:58:24+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (6, 'PST-0000006', 1, 17, 'SALES MANAGER', 1, 1, NULL, NULL, NULL, '2023-10-16 15:58:48+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (7, 'PST-0000007', 1, 19, 'CHECKER', 1, 1, NULL, NULL, NULL, '2023-10-16 15:59:03+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (8, 'PST-0000008', 1, 19, 'WAREHOUSE MANAGER', 1, 1, NULL, NULL, NULL, '2023-10-16 15:59:35+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (9, 'PST-0000009', 1, 11, 'IT SUPERVISOR', 1, 1, NULL, NULL, NULL, '2023-10-16 16:15:03+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (10, 'PST-0000010', 1, 11, 'IT STAFF', 1, 1, NULL, NULL, NULL, '2023-10-16 16:15:17+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (11, 'PST-0000011', 1, 11, 'IT PROGRAMMER', 1, 1, NULL, NULL, NULL, '2023-10-16 16:20:27+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (12, 'PST-0000012', 2, 36, 'IT PROGRAMMER', 1, 1, NULL, NULL, NULL, '2023-10-18 14:00:44+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (13, 'PST-0000013', 2, 36, 'IT STAFF', 1, 1, NULL, NULL, NULL, '2023-10-18 14:04:13+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (14, 'PST-0000014', 1, 1, 'AUDITOR', 1, 1, NULL, NULL, NULL, '2023-10-18 14:57:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (15, 'PST-0000015', 1, 1, 'ACCOUNTING ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-18 15:00:18+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (16, 'PST-0000016', 2, 20, 'ACCOUNTING LEAD', 1, 1, NULL, NULL, NULL, '2023-10-18 15:00:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (17, 'PST-0000017', 1, 2, 'ACCOUNTING ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-19 11:18:54+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (18, 'PST-0000018', 2, 21, 'ACCOUNTING ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-19 11:30:47+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (19, 'PST-0000019', 2, 22, 'ACCOUNTING ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-19 11:34:21+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (20, 'PST-0000020', 2, 22, 'ACCOUNTING LEAD', 1, 1, NULL, NULL, NULL, '2023-10-19 11:34:29+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (21, 'PST-0000021', 2, 22, 'ADMIN ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-19 11:34:49+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (22, 'PST-0000022', 2, 23, 'GENERAL COORDINATOR', 1, 1, NULL, NULL, NULL, '2023-10-19 11:47:18+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (23, 'PST-0000023', 2, 23, 'TECHNICAL AUDITOR', 1, 1, NULL, NULL, NULL, '2023-10-19 11:47:30+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (24, 'PST-0000024', 2, 24, 'ACCOUNTING COORDINATOR', 1, 1, NULL, NULL, NULL, '2023-10-19 11:56:09+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (25, 'PST-0000025', 2, 24, 'MANAGER - BILLING & AR', 1, 1, NULL, NULL, NULL, '2023-10-19 11:56:29+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (26, 'PST-0000026', 2, 24, 'LEAD - BILLING', 1, 1, NULL, NULL, NULL, '2023-10-19 11:56:38+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (28, 'PST-0000028', 2, 24, 'ASSOCIATE - ACCOUNTS RECEIVABLE', 1, 1, NULL, NULL, NULL, '2023-10-19 11:57:06+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (29, 'PST-0000029', 2, 24, 'LEAD - ACCOUNTS RECEIVABLE', 1, 1, NULL, NULL, NULL, '2023-10-19 11:57:25+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (30, 'PST-0000030', 2, 24, 'ASSISTANT LEAD - BILLING', 1, 1, NULL, NULL, NULL, '2023-10-19 11:57:39+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (31, 'PST-0000031', 2, 24, 'ACCOUNTING LEAD', 1, 1, NULL, NULL, NULL, '2023-10-19 11:57:58+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (27, 'PST-0000027', 2, 24, 'ACCOUNTING COORDINATOR', 1, 1, 1, NULL, NULL, '2023-10-19 11:56:54+08', '2023-10-19 11:58:29+08', NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (32, 'PST-0000032', 2, 24, 'ACCOUNTING ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-19 11:58:51+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (33, 'PST-0000033', 1, 6, 'SALES COORDINATOR', 1, 1, NULL, NULL, NULL, '2023-10-19 14:11:57+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (34, 'PST-0000034', 1, 6, 'ACCOUNTING ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-19 14:12:09+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (35, 'PST-0000035', 2, 26, 'HELPER', 1, 1, NULL, NULL, NULL, '2023-10-19 14:16:30+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (36, 'PST-0000036', 2, 26, 'CARETAKER', 1, 1, NULL, NULL, NULL, '2023-10-19 14:16:42+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (37, 'PST-0000037', 2, 26, 'ADMIN ASSISTANT', 1, 1, NULL, NULL, NULL, '2023-10-19 14:16:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (38, 'PST-0000038', 2, 26, 'COMPANY NURSE', 1, 1, NULL, NULL, NULL, '2023-10-19 14:17:03+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (39, 'PST-0000039', 2, 26, 'UTILITY', 1, 1, NULL, NULL, NULL, '2023-10-19 14:17:10+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (40, 'PST-0000040', 2, 27, 'SERVICE ENGINEER', 1, 1, NULL, NULL, NULL, '2023-10-19 14:35:43+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (41, 'PST-0000041', 2, 27, 'JR DESIGN ENGINEER', 1, 1, NULL, NULL, NULL, '2023-10-19 14:35:54+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (42, 'PST-0000042', 2, 28, 'ELECTRICIAN', 1, 1, NULL, NULL, NULL, '2023-10-19 14:47:43+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (43, 'PST-0000043', 2, 28, 'SITE IMPLEMENTATION ENGINEER', 1, 1, NULL, NULL, NULL, '2023-10-19 14:47:54+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (44, 'PST-0000044', 2, 29, 'CAD OPERATOR', 1, 1, NULL, NULL, NULL, '2023-10-19 14:58:25+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (45, 'PST-0000045', 2, 29, 'CAD SUPERVISOR', 1, 1, NULL, NULL, NULL, '2023-10-19 14:58:37+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (46, 'PST-0000046', 2, 30, 'SR COSTING ENGINEER', 1, 1, NULL, NULL, NULL, '2023-10-19 15:15:36+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (47, 'PST-0000047', 2, 30, 'COSTING COORDINATOR', 1, 1, NULL, NULL, NULL, '2023-10-19 15:15:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (48, 'PST-0000048', 2, 30, 'COSTING ENGINEER', 1, 1, NULL, NULL, NULL, '2023-10-19 15:16:07+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (49, 'PST-0000049', 2, 30, 'JR COSTING ENGINEER', 1, 1, NULL, NULL, NULL, '2023-10-19 15:16:21+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_position" VALUES (50, 'PST-0000050', 1, 53, 'COSTING ENGINEER', 1, 1, 1, NULL, NULL, '2023-10-19 15:20:07+08', '2023-11-06 11:13:47+08', NULL, NULL);

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
INSERT INTO "public"."tbl_stocks" VALUES (1, 'STOCK-0000001', 1, 1, 1, 0, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-18 13:31:25+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (3, 'STOCK-0000003', 2, 2, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-19 16:03:45+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (2, 'STOCK-0000002', 2, 2, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-10-19 16:02:44+08', '2023-10-19 16:03:55+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (4, 'STOCK-0000004', 2, 2, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-19 16:04:58+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (5, 'STOCK-0000005', 2, 2, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-19 16:05:41+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (6, 'STOCK-0000006', 2, 2, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-19 16:06:29+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (7, 'STOCK-0000007', 2, 2, 1, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-10-19 16:10:07+08', '2023-10-19 16:12:20+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (8, 'STOCK-0000008', 2, 2, 1, 0, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-19 16:12:12+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (9, 'STOCK-0000009', 1, 1, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-10-19 16:17:54+08', '2023-10-19 16:18:14+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (10, 'STOCK-0000010', 3, 5, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-26 14:22:43+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (11, 'STOCK-0000011', 3, 5, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-10-26 14:23:21+08', '2023-10-26 14:32:20+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (13, 'STOCK-0000013', 4, 6, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-10-26 15:41:44+08', '2023-10-26 15:46:04+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (12, 'STOCK-0000012', 4, 7, 1, 1, NULL, NULL, NULL, 1, 1, NULL, NULL, '2023-10-26 15:17:16+08', '2023-10-27 11:07:32+08', NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (14, 'STOCK-0000014', 1, 3, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-27 11:18:54+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (15, 'STOCK-0000015', 2, 2, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-27 11:25:15+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (16, 'STOCK-0000016', 3, 10, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-27 11:37:38+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (17, 'STOCK-0000017', 4, 11, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-10-27 11:56:49+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks" VALUES (18, 'STOCK-0000018', 7, 12, 1, 1, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2023-11-06 09:56:51+08', NULL, NULL, NULL);

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
  "hdd" varchar(50) COLLATE "pg_catalog"."default",
  "ssd" varchar(50) COLLATE "pg_catalog"."default",
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
  "resolution" varchar(100) COLLATE "pg_catalog"."default",
  "no_of_keys" int4,
  "with_scanner" int4,
  "printer_resolution" varchar(100) COLLATE "pg_catalog"."default",
  "scanner_resolution" varchar(100) COLLATE "pg_catalog"."default",
  "output_capicity" varchar(50) COLLATE "pg_catalog"."default",
  "input_voltage" varchar(50) COLLATE "pg_catalog"."default",
  "input_frequency" varchar(50) COLLATE "pg_catalog"."default",
  "input_current" varchar(50) COLLATE "pg_catalog"."default",
  "output_voltage" varchar(50) COLLATE "pg_catalog"."default",
  "output_frequency" varchar(50) COLLATE "pg_catalog"."default",
  "output_current" varchar(50) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of tbl_stocks_info
-- ----------------------------
INSERT INTO "public"."tbl_stocks_info" VALUES (1, 1, 'PF3ZKV5V', 'IDEAPAD 1 14IGL7', NULL, NULL, NULL, 'INTEL N4020', 'INTEGRATED', '64 GB', NULL, '4 GB', 'WINDOWS 11 HOME', NULL, NULL, 0, 1, 0, 1, NULL, 0, 0, 0, '2022-07-26', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (3, 3, 'GCDLAHA237173', 'M2060SWD', NULL, NULL, 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 YR', 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1920 X 1080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (2, 2, 'GCDLAHA236936', 'M2060SWD', NULL, NULL, 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 YR', 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1920 X 1080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (4, 4, 'GCDLAHA236854', 'M2060SWD', NULL, NULL, 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 YR', 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1920 X 1080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (5, 5, 'GCDLAHA236950', 'M2060SWD', NULL, NULL, 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 YR', 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1920 X 1080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (6, 6, 'GCDLAHA236859', 'M2060SWD', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 YR', 1, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1920 X 1080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (8, 8, 'GCDLAHA236824', NULL, NULL, NULL, 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1920 X 1080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (7, 7, 'GCDG7HA097603', 'M2060SWD', NULL, NULL, 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 YR', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1920 X 1080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (9, 9, 'PF400PSP', 'IDEAPAD 1', NULL, NULL, NULL, 'INTEL N4020', 'INTEGRATED', '64 GB', NULL, ' 4 GB', 'WINDOWS 11 HO.E', NULL, '1 YR', 0, 1, 0, 1, NULL, 0, 0, 0, '2022-07-26', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (10, 10, 'CN-0DMV3P-CH400-155-01GZ-A01', 'MS116C', 'wired', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (11, 11, 'CN-049PR0-CH400-973-079P-A00', 'MS116C', 'wired', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 0, 0, 0, 0, NULL, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (13, 13, '517218937510', 'IBP-ARES E1', 'wired', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, 104, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (12, 12, 'CN-0N8WF8-71581-484-05YX-A00', 'KB113P', 'wired', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1 YR', 0, 0, 0, 0, NULL, 0, 0, 0, NULL, NULL, NULL, 102, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (14, 14, '00325-82199-26022-AAOEM', 'DELL G15', NULL, NULL, NULL, '11TH GEN INTEL(R) CORE(TM) I5-11400H', 'NVIDIA GEFORCE RTX 3050', NULL, '500 GB', '8 GB', 'WINDOWS 10 HOME', NULL, '1', 1, 0, 0, 1, NULL, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (15, 15, 'HNDF21A008752', 'E970SW', NULL, NULL, 'BLACK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (16, 16, 'FBNWL0BVB0V3M7', 'MSU0923', 'wired', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."tbl_stocks_info" VALUES (17, 18, 'BKSZDF3', 'DELL INSPIRION', NULL, NULL, NULL, 'INTEL CORE I5-10400', 'INTEGRATED', NULL, '256 GB', '12 GB', 'WINDOWS 10 HOME', NULL, NULL, 1, 1, 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tbl_stocks_issuance
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_stocks_issuance";
CREATE TABLE "public"."tbl_stocks_issuance" (
  "id" int4 NOT NULL DEFAULT nextval('tbl_stocks_issuance_id_seq'::regclass),
  "series_no" varchar(20) COLLATE "pg_catalog"."default",
  "stock_id" int4,
  "issued_to" int4,
  "issued_by" int4,
  "date_issued" varchar(50) COLLATE "pg_catalog"."default",
  "remarks" text COLLATE "pg_catalog"."default",
  "created_by" int4,
  "updated_by" int4,
  "deleted_by" int4,
  "imported_by" int4,
  "date_created" timestamptz(6),
  "date_updated" timestamptz(6),
  "date_deleted" timestamptz(6),
  "date_imported" timestamptz(6),
  "branch" varchar(30) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of tbl_stocks_issuance
-- ----------------------------
INSERT INTO "public"."tbl_stocks_issuance" VALUES (1, 'ISS-0000001', 1, 15, 1, '2023-10-18T14:06:37', NULL, 1, NULL, NULL, NULL, '2023-10-18 14:06:37+08', NULL, NULL, NULL, 'sto_domingo');
INSERT INTO "public"."tbl_stocks_issuance" VALUES (2, 'ISS-0000002', 7, 3, 1, '2023-10-19T16:10:41', NULL, 1, NULL, NULL, NULL, '2023-10-19 16:10:41+08', NULL, NULL, NULL, 'quezon_ave');
INSERT INTO "public"."tbl_stocks_issuance" VALUES (3, 'ISS-0000003', 8, 3, 1, '2023-10-19T16:13:00', NULL, 1, NULL, NULL, NULL, '2023-10-19 16:13:00+08', NULL, NULL, NULL, 'quezon_ave');

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
INSERT INTO "public"."tbl_sub_module" VALUES (9, 'SMDL-0000009', 2, 'ASSETS', 'assets', 0, 1, 1, NULL, NULL, '2023-10-13 15:17:01+08', '2023-10-16 10:20:05+08', NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (8, 'SMDL-0000008', 1, 'CATEGORY', 'category', 1, 1, 1, NULL, NULL, '2023-09-11 11:48:27+08', '2023-10-16 15:56:20+08', NULL, NULL);
INSERT INTO "public"."tbl_sub_module" VALUES (10, 'SMDL-0000010', 2, 'RECEIVE', 'receive', 0, 1, 1, NULL, NULL, '2023-10-19 16:24:41+08', '2023-10-19 16:24:54+08', NULL, NULL);

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
INSERT INTO "public"."tbl_users" VALUES (19, 'USR-0000018', 'diazmariaconcepcion08@gmail.com', '$2b$10$Pp683za4WPQCvw2HNjLgcuFxDIue5GxzqEpFkuLzL7UGJpgI/gxLa', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 15:02:37+08', '2023-10-19 13:39:38+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (20, 'USR-0000019', 'mtumampil03@gmail.com', '$2b$10$S2TnbSeIhz5tWfcck4ZAhOTiAl75Uu42rO4JgDc3z80VYx9eEKbXy', 'user', 1, 1, 1, NULL, NULL, '2023-10-18 15:36:33+08', '2023-10-19 13:40:12+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (21, 'USR-0000020', 'payadkyrgyz2@gmail.com', '$2b$10$sjImiGr3Aqgvc7maZztq4Oyi5lIMosrt.vM.rvXtBSRMMYViIvBLG', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:15:47+08', '2023-10-19 13:40:24+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (22, 'USR-0000021', 'oranderichard@gmail.com', '$2b$10$HXdoEHeFyj8HCiM7ns70xeZpl5XIbb8Hl39cVqdndNHmvdChKyglu', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:17:00+08', '2023-10-19 13:40:37+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (23, 'USR-0000022', 'katuytan@gmail.com', '$2b$10$N.13YWuu3Gj.o4toIKSq4OIY0YoWtNQoVJe6cQhTaMhAWyDlV7Z0K', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:20:56+08', '2023-10-19 13:40:49+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (24, 'USR-0000023', 'irisgoaltura@gmail.com', '$2b$10$k0fUZuzmowSRYSEHHz1g/uqQey1954TvcRP7DMR3yUF.Z85wV1lIW', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:30:58+08', '2023-10-19 13:41:00+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (25, 'USR-0000024', 'elyannamyraapascual@gmail.com', '$2b$10$GWXvk6aqw4xBZp5kawa9ZeqaWi7n.natwSpi/mz5sdObKW.d.44Ve', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:35:07+08', '2023-10-19 13:41:10+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (10, 'USR-0000009', 'sanly_29@yahoo.com', '$2b$10$xgvvnAb8uhcfchySlg40xO79nPa2Wi2MRYLA7QC2WgzhSvFLDuqje', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 13:49:05+08', '2023-10-19 13:36:48+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (11, 'USR-0000010', 'nglita99@gmail.com', '$2b$10$RmwnaVw1h3dY5dusew5hJ.Cen74L5soUkIYobKzdyah/sVXH03qOK', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 13:50:53+08', '2023-10-19 13:37:03+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (12, 'USR-0000011', 'cheryl_uy@kcic.com.ph', '$2b$10$OrNoEtKWmhGvJzUBk8/9qOhCmWO5i.BK61cBCtMCrH7/cQ/HhQBou', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 13:52:24+08', '2023-10-19 13:37:16+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (13, 'USR-0000012', 'calvs23@gmail.com', '$2b$10$uhZ5lTD1QZou02X6qscnde03j40nlnnWibfE0ggG5Xr.fWL321Mhm', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 13:58:56+08', '2023-10-19 13:37:27+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (14, 'USR-0000013', 'mabel.rabia@yahoo.com', '$2b$10$oHZDycne1NIYbt0/t9Ge6OEh4BHoAQc54Q/e/geQJFIgqtcowZZZ6', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 14:01:00+08', '2023-10-19 13:37:39+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (15, 'USR-0000014', 'jrj.lapuz@gmail.com', '$2b$10$XPVuPGrwbbPHhCZ7tWXEiuPt1VYciLQYi.T3SgE9v5xVgoAJdh2iu', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 14:04:29+08', '2023-10-19 13:37:53+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (16, 'USR-0000015', 'jazzel.anareta11@gmail.com', '$2b$10$HQyMLK0JREt9omC583bPI.VxYgzsRB8xhomRkNSBlbyZ4MhX6HCAS', 'user', 1, 1, 1, NULL, NULL, '2023-10-18 14:06:02+08', '2023-10-19 13:38:08+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (17, 'USR-0000016', 'jle_2152@yahoo.com', '$2b$10$i5F5.qsKP7NuqOwNEY179uVtl9kYOJJfokViEN.QBsHoZeOqs.1BO', 'user', 1, 1, 1, NULL, NULL, '2023-10-18 14:58:03+08', '2023-10-19 13:38:23+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (2, 'USR-0000001', 'it@kcic.com.ph', '$2b$10$xHTJ3bSvaQBdMDVHzS3CvOG7/nT2zHf0N1MkM/tmHCBrjUS3H5Pqq', 'admin', 1, 1, 1, NULL, NULL, '2023-10-16 16:19:27+08', '2023-10-19 13:19:15+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (3, 'USR-0000002', 'judan.pauljohn@gmail.com', '$2b$10$IzLA2wySfGfenRJ.ZvlUhegbSfoXkXHD4PKA9Zc4DwQx0zEMeoi1S', 'admin', 1, 1, 1, NULL, NULL, '2023-10-16 16:21:02+08', '2023-10-19 13:19:43+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (4, 'USR-0000003', 'agustin_uy@kcic.com.ph', '$2b$10$huzNX12tQXYKD8ISv20GD.wkk95xnXgFEfyQKrbw3oIa.cONfmtFG', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 11:50:13+08', '2023-10-19 13:20:04+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (5, 'USR-0000004', 'constancia_uy@kcic.com.ph', '$2b$10$tFs3DccPe4jgwMJdGpOh9O7TXjBWyjj9RBZG1jtlJruQhWTQl.Y1.', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 11:55:02+08', '2023-10-19 13:20:19+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (6, 'USR-0000005', 'navarropaterson08@gmail.com', '$2b$10$oeO7tpsaUa/LVSfVgfzhkOUqYIKnpKf2Xii7yaBDgqEXvkHIZUuwG', 'user', 1, 1, 1, NULL, NULL, '2023-10-18 12:01:12+08', '2023-10-19 13:20:38+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (7, 'USR-0000006', 'rodolfo_belleza@kcic.com.ph', '$2b$10$1vzl2lVfU8GYGlqrM.z/L./iUsR2vQN0vO6lxRdb4jgvZI.qeez.e', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 13:12:19+08', '2023-10-19 13:34:28+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (8, 'USR-0000007', 'cristy_eugenio@yahoo.com.ph', '$2b$10$g3YJtkF4kFlWCDwVp/p4XOuxg5PdmCki7R2a.xBJuj4aemKJ55CfC', 'user', 1, 1, 1, NULL, NULL, '2023-10-18 13:13:14+08', '2023-10-19 13:35:07+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (9, 'USR-0000008', 'marlonuylasam@yahoo.com', '$2b$10$Um27QeOk7gpqRftQjLYMMelMlyDTSIaGLmothJtmAjrSrquAEvwEC', 'admin', 1, 1, 1, NULL, NULL, '2023-10-18 13:28:22+08', '2023-10-19 13:36:32+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (18, 'USR-0000017', 'liumillie@yahoo.com.hk', '$2b$10$BRjFKGD1N4oQyArjFJITf.4vxlaQKZvBfbaZp54pHm8KU5s0bCwL2', 'user', 1, 1, 1, NULL, NULL, '2023-10-18 15:00:30+08', '2023-10-19 13:39:24+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (26, 'USR-0000025', 'michelletalingdan@gmail.com', '$2b$10$DwzKpo50QErAsWaCQW8Zje/.Jd9OWloch8mY64LF9oAyuSyYklLZq', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:37:24+08', '2023-10-19 13:41:21+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (27, 'USR-0000026', 'crisostomojohnrobert@gmail.com', '$2b$10$0qWNNpISI4GcWpyDMVsLJOZ8ROMV48Mo/yhN8SggRWpSXeMZmAy22', 'admin', 1, 1, 1, NULL, NULL, '2023-10-19 11:40:27+08', '2023-10-19 13:41:41+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (28, 'USR-0000027', 'joannadgzmn0830@gmail.com', '$2b$10$LDMssiFrZ9QtIIsIKom9qunX3f7Lcerpk0Y7dPqNPuyxjAYciwMTu', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:42:34+08', '2023-10-19 13:41:54+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (29, 'USR-0000028', 'emspalomares@gmail.com', '$2b$10$lEdXMBdP1qn8jc.yXYWVQ.rfTjGx77E./WaDVPAQE4B09dGntPXTO', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:47:53+08', '2023-10-19 13:42:05+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (30, 'USR-0000029', 'scelpadua@gmail.com', '$2b$10$2lJvjzrjX5ijp3c6MZG/WubkYqf4CUvWBZf.iJ1CmYvPQWzuZRqcC', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 11:49:52+08', '2023-10-19 13:42:14+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (31, 'USR-0000030', 'maricelmartinez1976@gmail.com', '$2b$10$V4kYe913OX0C6WkCSBg2ouOfVF7fVVn1tUQBJrzSMkmykMJI97hYe', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 12:01:01+08', '2023-10-19 13:42:25+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (32, 'USR-0000031', 'elvira_p_ayuro@yahoo.com', '$2b$10$fEVLlwYXy5EPe7qNS98nTu9rJYZJuoFxNy/1TyQAOzUOEj2ocCtM2', 'admin', 1, 1, 1, NULL, NULL, '2023-10-19 13:13:35+08', '2023-10-19 13:42:38+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (33, 'USR-0000032', 'cristinageneta@gmail.com', '$2b$10$BnjWd81hPjqhWwW/YYeSgOBcCPer03ZGsPUZCQ5l7UtR6x7lHW2su', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 13:15:10+08', '2023-10-19 13:42:51+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (34, 'USR-0000033', 'm.delacruz1711@gmail.com', '$2b$10$G2YGiYL6tV5AxzTE6mg3Ke7rlQILlzPHF1LLW4AiOHCFmBDYsa10W', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 13:16:46+08', '2023-10-19 13:43:01+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (35, 'USR-0000034', 'charmainekaye25@gmail.com', '$2b$10$NWD6HLEKeK9W0UwOWtpKFOgF4yWU3twNy8kLJd22/sbk/U3p4ERXu', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 13:18:21+08', '2023-10-19 13:43:09+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (36, 'USR-0000035', 'mariavictoriaarante@gmail.com', '$2b$10$fKksl7pvohtyRhQut/q0Ne.dDTEXUxC5/JYx8fs.w7PwGc4KJmPz6', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 13:45:45+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (37, 'USR-0000036', 'anne.atienza2@gmail.com', '$2b$10$QEXtOkM3fD3n5HdemqNi3u6w6kB4nHR8gYYhqcfvE8u95U9tdrgyO', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 13:48:05+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (38, 'USR-0000037', 'johnabeltibang0197@gmail.com', '$2b$10$wEPGZlYo3hFMDjTiLrc4P.1HdEhZIKjYk54eSDahTXB4vNIq/LF.i', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 13:55:48+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (39, 'USR-0000038', 'gcsantos.2914@gmail.com', '$2b$10$roKMsfA51Az2kBxqfxICb.kBpfgSxu0lTpVegEWGfyu8O1ht.eKty', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 13:57:41+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (40, 'USR-0000039', 'leslie.delossantos24@gmail.com', '$2b$10$sFl9FOOtIHQXYyAjV6x72.4o3zIocgeahCKOL4rEB91Pz4O/VHzzy', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 13:59:09+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (41, 'USR-0000040', 'darrenmanjares@gmail.com', '$2b$10$E8Z/z6oVK2RivshzxUzEaumd0u06GGs6HaAXXrOBfvKOZIf9wYYFW', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:00:50+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (42, 'USR-0000041', 'maricardelossantos065@gmail.com', '$2b$10$qhyPLSUXO7uvao9LZKBzmO3KUJ/eZ36ARAQ4DrcdMPtoZTh94Ky.C', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:02:16+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (43, 'USR-0000042', 'arseflores05@gmail.com', '$2b$10$O7KkKrPPqmWY5x.uAjCy4.7ddVXom967qteYrKMTj3Ez.UYDtgf7i', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:04:49+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (44, 'USR-0000043', 'heiress.hortelano13@gmail.com', '$2b$10$tzfDTUdlLhH/wgEeqCEHP.5tx9aI68HugoDCqHa4OpgWKA8u.yhUi', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:06:38+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (45, 'USR-0000044', 'joannamariebernabe95@gmail.com', '$2b$10$Dm/MzuMhpclyijPYhcsEJeqRynNv4PsC27s4pq1ku.TRO8ymr0vaO', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:12:24+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (47, 'USR-0000046', 'marymint02@yahoo.com', '$2b$10$hkspjodiqIvDBsjtL3cWHuK9qXY.h2Db29S1fzauINux0Hahw6emi', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:17:39+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (46, 'USR-0000045', 'yvelim.928@gmail.com', '$2b$10$rOfZSr31L2qb8C9wFoMSwO.5Z96swT.VN264g3zLraodOF78.VTfO', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 14:14:15+08', '2023-10-19 14:18:48+08', NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (48, 'USR-0000047', 'ramil.magyaya29@yahoo.com', '$2b$10$LtG60/Vtf0Azg0o.iUneU.o4S60c50x1xHSczhJHJBRLebwSttfVe', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:20:20+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (49, 'USR-0000048', 'alexcyscelis28@gmail.com', '$2b$10$Os1TKi.zNqVvjL7mDtwzzulkeMLp9hs6RYe2mfxxQjU8.4mw/ttuG', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:21:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (50, 'USR-0000049', 'eigodelon@gmail.com', '$2b$10$QU3swzQURnKE5c2Ly0vNWeeNVjqWYojWuXc2pchHMw//6agFmUKcu', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:23:39+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (51, 'USR-0000050', 'leth_ilao08@yahoo.com.ph', '$2b$10$vbQn8ftNrUxs7C.inxayoOgBw7KZ/L0EmiPwVfACgGAzjAgg.7Rma', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:25:26+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (52, 'USR-0000051', 'charliemarquez474@gmail.com', '$2b$10$kOdHEvMW4k9UdL34n1mC5.D94MMayuPek5I492BD65nwFcm3y7Uzq', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:27:09+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (53, 'USR-0000052', 'pasteleroc30@gmail.com', '$2b$10$sKdSDA5VMqOWoIQqe6MDZOcT7pCR3s/IKWRoT1KT3f2/21Vpvo62u', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:28:47+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (54, 'USR-0000053', 'johnreymasanque_017@yahoo.com', '$2b$10$4GDuj8txLbImoL.wPvNJuOw0lvsmjZIrZV2SXq8aC2.Zl4ncUC8kq', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:36:36+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (55, 'USR-0000054', 'johnericsonrasos@gmail.com', '$2b$10$dzUJD/viE3luq0WiQ2O9deeq7mRaE9tyctJkw17WmnlPPXh/ynoMa', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:38:53+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (56, 'USR-0000055', 'ryanfrancisco.ryn@gmail.com', '$2b$10$S./rEniQgF1d/H8hbSjzAO8WnHJBlAUTkn295IM3dB5LoFt3RB4lW', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:40:31+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (57, 'USR-0000056', 'reysrmontano@gmail.com', '$2b$10$W1kYeiBZaBZujEmoqO4Byus0YkS7e4tqW8wODWFvaqn.r6dNvRz3O', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:53:27+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (58, 'USR-0000057', 'aldihnmiradora68@gmail.com', '$2b$10$KQi1H3rOxX5l7m8bqAYrV.6bfakCqBAt/LDcmPJn/6JBMoqjMJcda', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:55:33+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (59, 'USR-0000058', 'esbmarquez@gmail.com', '$2b$10$pZqspOxMankl8OUzpXIkVuq8zELCnK640i9MTFLhuPO1gLQR8CNiO', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 14:57:35+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (60, 'USR-0000059', 'aningatmyra011994@gmail.com', '$2b$10$4juHiHdCYRSpZXNASlo3QOI1WDCS30aw4DSSEzOa/yzgnA0XAJYtm', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:00:33+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (61, 'USR-0000060', 'noel.ramos27@yahoo.com', '$2b$10$WxhaNXWRvqzXwiPz2NJ35uYgdk5hSjKGuczRtV.5iyVW5I016rlqG', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:04:33+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (62, 'USR-0000061', 'jeanviruz21@gmail.com', '$2b$10$UKzCnzVvVy1OWsrbsuAxBeKDk1rv7KKONC17QiIAdX0P.gIBbmhXe', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:08:06+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (63, 'USR-0000062', 'cristellemorfz@gmail.com', '$2b$10$FiGxksHUHH409KsVGca1relUbzQOTLPV5RmTuVAr1SbGdD5kRDNY2', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:10:12+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (64, 'USR-0000063', 'tontonanthony007@gmail.com', '$2b$10$b0SeT5ubCy2q4LyUmjWkD.5YzzPQheU79uGkNAxo1lFBbpBl4C6y2', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:11:43+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (65, 'USR-0000064', 'lalain1231lacostales@gmail.com', '$2b$10$nx5QotGARpRRCpIifJAHTuM2XeZxRhd6HBb9SOI52yBVW23C6vZYO', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:14:22+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (66, 'USR-0000065', 'pauljosephllanes@yahoo.com', '$2b$10$lhtltS0LLnhkU.AFhaQwQuR0Y/Y6xhp0ymRXO4wDXlJ6wofDhnmkO', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:22:51+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (67, 'USR-0000066', 'laurentema.luisa@gmail.com', '$2b$10$bo8W8j2UziuJKJMjvN/uJuEpbegFO5tgYZSDRQgyxGTpTUm0C9FUa', 'user', 1, 1, NULL, NULL, NULL, '2023-10-19 15:25:07+08', NULL, NULL, NULL);
INSERT INTO "public"."tbl_users" VALUES (68, 'USR-0000067', 'juwirextiu15@gmail.com', '$2b$10$CsBynUD/ZDdRbAvsiBn58eCZ/jd8/iIfahS02Mp46/WuZ1wszXAF.', 'user', 1, 1, 1, NULL, NULL, '2023-10-19 15:27:46+08', '2023-11-06 11:12:27+08', NULL, NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_audit_trail_id_seq"
OWNED BY "public"."tbl_audit_trail"."id";
SELECT setval('"public"."tbl_audit_trail_id_seq"', 309, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_brands_id_seq"
OWNED BY "public"."tbl_brands"."id";
SELECT setval('"public"."tbl_brands_id_seq"', 13, true);

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
SELECT setval('"public"."tbl_company_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_department_id_seq"
OWNED BY "public"."tbl_department"."id";
SELECT setval('"public"."tbl_department_id_seq"', 54, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_employee_id_seq"
OWNED BY "public"."tbl_employee"."id";
SELECT setval('"public"."tbl_employee_id_seq"', 69, true);

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
SELECT setval('"public"."tbl_position_id_seq"', 51, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_setup_id_seq"
OWNED BY "public"."tbl_setup"."id";
SELECT setval('"public"."tbl_setup_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_id_seq"
OWNED BY "public"."tbl_stocks"."id";
SELECT setval('"public"."tbl_stocks_id_seq"', 19, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_info_id_seq"
OWNED BY "public"."tbl_stocks_info"."id";
SELECT setval('"public"."tbl_stocks_info_id_seq"', 18, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_stocks_issuance_id_seq"
OWNED BY "public"."tbl_stocks_issuance"."id";
SELECT setval('"public"."tbl_stocks_issuance_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_sub_module_id_seq"
OWNED BY "public"."tbl_sub_module"."id";
SELECT setval('"public"."tbl_sub_module_id_seq"', 11, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tbl_users_id_seq"
OWNED BY "public"."tbl_users"."id";
SELECT setval('"public"."tbl_users_id_seq"', 69, true);

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
-- Primary Key structure for table tbl_module
-- ----------------------------
ALTER TABLE "public"."tbl_module" ADD CONSTRAINT "tbl_module_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_position
-- ----------------------------
ALTER TABLE "public"."tbl_position" ADD CONSTRAINT "tbl_position_pkey" PRIMARY KEY ("id");

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
-- Foreign Keys structure for table tbl_setup
-- ----------------------------
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_setup" ADD CONSTRAINT "tbl_setup_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
-- Foreign Keys structure for table tbl_stocks_issuance
-- ----------------------------
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_imported_by_fkey" FOREIGN KEY ("imported_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_issued_by_fkey" FOREIGN KEY ("issued_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_issued_to_fkey" FOREIGN KEY ("issued_to") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "public"."tbl_stocks" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tbl_stocks_issuance" ADD CONSTRAINT "tbl_stocks_issuance_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "public"."tbl_users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

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
