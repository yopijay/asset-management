const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_modules',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Modules {
    series = async () => { return (await new Builder(`tbl_modules`).select().build()).rows; }
    dashboard = async data => { return { total: (await new Builder(`tbl_modules`).select().condition(`WHERE status= 1`).build()).rowCount } }

    specific = async id => { 
        return (await new Builder(`tbl_modules AS mdl`)
                        .select(`mdl.*, rts.base_url AS route`)
                        .join({ table: `tbl_routes AS rts`, condition: `mdl.route_id = rts.id`, type: `LEFT` })
                        .condition(`WHERE mdl.id= ${id}`)
                        .build()).rows; 
    }


    excel = async data => {
        let columns = '';
        let searchtxt = '';
        let condition = ''; 
        
        switch(data.type) {
            case 'logs':
                columns = `at.id AS "ID", at.series_no AS "Series no.", mdl.name AS "Module", at.field AS "Field affected", UPPER(at.previous) AS "Previous", 
                                        UPPER(at.current) AS "Current", UPPER(at.action) AS "Action", CONCAT(ubi.lname, ', ', ubi.fname) AS "Accountable", at.date AS "Date"`;
                searchtxt = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR mdl.name LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                        OR mdl.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR at.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%')`;

                switch(JSON.parse(atob(data.token)).role) {
                    case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
                    case 'admin': condition= `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
                    default:
                }

                return [{
                    sheets: [{
                        sheetname: 'Logs',
                        data: (await new Builder(`tbl_audit_trail AS at`)
                                    .select(columns)
                                    .join({ table: `tbl_modules AS mdl`, condition: `at.item_id = mdl.id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                                    .condition(`WHERE at.table_name= 'tbl_modules' ${condition} ${data.logssearchtxt !== '' ? searchtxt : ''}
                                                        ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                                    .build()).rows
                    }],
                    filename: `Module Logs-${today}`
                }];

            default:
                columns = `mdl.id AS "ID", mdl.series_no AS "Series no.", rts.route AS "Route", mdl.name AS "Module", CONCAT('/', rts.base_url, '/', mdl.path) AS "URL",
                                    CASE WHEN mdl.status > 0 THEN 'ACTIVE' ELSE 'INACTIVE' END AS "Status", 
                                    CONCAT(cb.lname, ', ', cb.fname) AS "Created by", mdl.date_created AS "Date created",
                                    CONCAT(ub.lname, ', ', ub.fname) AS "Updated by", mdl.date_updated AS "Date updated",
                                    CONCAT(db.lname, ', ', db.fname) AS "Deleted by", mdl.date_deleted AS "Date deleted"`;

                return [{
                    sheets: [{
                        sheetname: 'All',
                        data: (await new Builder(`tbl_modules AS mdl`)
                                    .select(columns)
                                    .join({ table: `tbl_routes AS rts`, condition: `mdl.route_id = rts.id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS cb`, condition: `mdl.created_by = cb.user_id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS ub`, condition: `mdl.updated_by = ub.user_id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS db`, condition: `mdl.deleted_by = db.user_id`, type: `LEFT` })
                                    .condition(`${data.searchtxt !== '' ? `WHERE mdl.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                            OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY mdl.${data.orderby} ${(data.sort).toUpperCase()}`)
                                    .build()).rows
                    }],
                    filename: `Modules-${today}`
                }];
        }
    }

    logs = async data => {
        let condition = '';
        let search = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR mdl.name LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                OR mdl.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR at.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%')`;

        switch(JSON.parse(atob(data.token)).role) {
            case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
            case 'admin': condition= `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
            default:
        }

        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, 
                                        at.user_id, at.date, mdl.series_no AS mdl_series, mdl.name, CONCAT(ubi.lname, ', ', ubi.fname) AS ub_name`)
                        .join({ table: `tbl_modules AS mdl`, condition: `at.item_id = mdl.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_modules' ${condition} ${data.logssearchtxt !== '' ? search : ''}
                                            ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_modules AS mdl`)
                        .select(`mdl.id, mdl.series_no, rts.route, rts.base_url AS base_url, mdl.name, mdl.path, mdl.status,
                                        CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, mdl.date_created`)
                        .join({ table: `tbl_routes AS rts`, condition: `mdl.route_id = rts.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = mdl.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE mdl.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY mdl.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_modules AS mdl`)
                        .select(`mdl.id, mdl.series_no, rts.route, rts.base_url AS base_url, mdl.name, mdl.path, mdl.status,
                                        CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, mdl.date_created`)
                        .join({ table: `tbl_routes AS rts`, condition: `mdl.route_id = rts.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = mdl.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE mdl.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY mdl.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_modules`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_modules`).select().condition(`WHERE  route_id= ${data.route_id } AND name= '${(data.name).toUpperCase()}'`).build();
        let path = await new Builder(`tbl_modules`).select()
                            .condition(`WHERE route_id= ${data.route_id } AND name= '${(data.name).toUpperCase()}' AND path= '${(data.path).toLowerCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Category already exist!' }); }
        if(path.rowCount > 0) { errors.push({ name: 'path', message: 'Path already exist!' }); }

        if(!(errors.length > 0)) {
            let mdl = (await new Builder(`tbl_modules`)
                                .insert({ columns: `series_no, route_id, name, path, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', ${data.route_id}, '${(data.name).toUpperCase()}', '${(data.path).toLowerCase()}', 
                                                                ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];
            
            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = mdl.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;

            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let mdl = (await new Builder(`tbl_modules`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_modules`).select().condition(`WHERE route_id= ${data.route_id} AND name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(mdl.route_id, data.route_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_modules', item_id: mdl.id, field: 'route_id', previous: mdl.route_id,
                    current: data.route_id, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(mdl.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_modules', item_id: mdl.id, field: 'name', previous: mdl.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: 'Sub module already exist in this module!' }); }
        }

        if(Global.compare(mdl.path, data.path)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_modules', item_id: mdl.id, field: 'path', previous: mdl.path,
                    current: (data.path).toLowerCase(), action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(mdl.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_modules', item_id: mdl.id, field: 'status', previous: mdl.status === 1 ? 'Active' : 'Inactive', 
                                    current: data.status ? 'Active' : 'Inactive', action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_modules`)
                .update(`route_id= ${data.route_id}, name= '${(data.name).toUpperCase()}', path= '${(data.path).toLowerCase()}', status= ${data.status ? 1 : 0},
                    updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

                audits.forEach(data => Global.audit(data));
                return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }

    dropdown = async data => {
        switch(data.type) {
            case 'nav': return (await new Builder(`tbl_modules AS sub`)
                                            .select(`sub.id, sub.name, rts.base_url, sub.path`)
                                            .join({ table: `tbl_routes AS rts`, condition: `sub.route_id = rts.id`, type: `LEFT` })
                                            .condition(`WHERE sub.route_id= ${data.id} AND sub.status= 1 ORDER BY sub.name ASC`)
                                            .build()).rows;

            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_modules`).select(`id, name, path`).condition(`WHERE route_id= ${data.id} AND status= 1 ORDER BY name ASC`).build()).rows);
        }
    }
}

module.exports = Modules;