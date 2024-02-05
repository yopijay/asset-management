const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_routes',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Routes {
    series = async () => { return (await new Builder(`tbl_routes`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_routes`).select().condition(`WHERE id= ${id}`).build()).rows; }

    excel = async data => {
        let columns = '';
        let searchtxt = '';
        let condition = ''; 

        switch(data.type) {
            case 'logs':
                columns = `at.id AS "ID", at.series_no AS "Series no.", rts.route AS "Route", at.field AS "Field affected", UPPER(at.previous) AS "Previous", 
                                        UPPER(at.current) AS "Current", UPPER(at.action) AS "Action", CONCAT(ubi.lname, ', ', ubi.fname) AS "Accountable", at.date AS "Date"`;
                searchtxt = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR rts.route LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                        OR rts.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR at.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%')`;

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
                                    .join({ table: `tbl_routes AS rts`, condition: `at.item_id = rts.id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                                    .condition(`WHERE at.table_name= 'tbl_routes' ${condition} ${data.logssearchtxt !== '' ? search : ''}
                                                        ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                                    .build()).rows
                    }],
                    filename: `Route Logs-${today}`
                }];

            default: 
                columns = `rts.id AS "ID", rts.series_no AS "Series no.", rts.route AS "Route", CONCAT('/', rts.base_url) AS "URL", rts.description AS "Description",
                                    CASE WHEN rts.status > 0 THEN 'ACTIVE' ELSE 'INACTIVE' END AS "Status", 
                                    CONCAT(cb.lname, ', ', cb.fname) AS "Created by", rts.date_created AS "Date created",
                                    CONCAT(ub.lname, ', ', ub.fname) AS "Updated by", rts.date_updated AS "Date updated",
                                    CONCAT(db.lname, ', ', db.fname) AS "Deleted by", rts.date_deleted AS "Date deleted"`;

                return [{
                    sheets: [{
                        sheetname: 'All',
                        data: (await new Builder(`tbl_routes AS rts`)
                                    .select(columns)
                                    .join({ table: `tbl_users_info AS cb`, condition: `rts.created_by = cb.user_id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS ub`, condition: `rts.updated_by = ub.user_id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS db`, condition: `rts.deleted_by = db.user_id`, type: `LEFT` })
                                    .condition(`${data.searchtxt !== '' ? `WHERE rts.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                                            OR rts.route LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY rts.${data.orderby} ${(data.sort).toUpperCase()}`)
                                    .build()).rows
                    }],
                    filename: `Routes-${today}`
                }];
        }
    }

    logs = async data => {
        let condition = '';
        let search = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR rts.route LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                OR rts.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR at.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%')`;

        switch(JSON.parse(atob(data.token)).role) {
            case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
            case 'admin': condition= `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
            default:
        }

        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, 
                                    at.date, rts.series_no AS mdl_series, rts.route, CONCAT(ubi.lname, ', ', ubi.fname) AS ub_name`)
                        .join({ table: `tbl_routes AS rts`, condition: `at.item_id = rts.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_routes' ${condition} ${data.logssearchtxt !== '' ? search : ''}
                                            ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                        .build()).rows;
    }

    list = async data => {
        switch(data.type) {
            case 'with-modules':
                let mdls = [];
                let mdl = (await new Builder(`tbl_routes`).select().build()).rows;

                for(let count = 0; count < mdl.length; count++) {
                    let sub = (await new Builder(`tbl_modules`).select().condition(`WHERE route_id= ${mdl[count].id}`).build()).rows;
                    mdls.push({ name: mdl[count].route, modules: sub });
                }

                return mdls;
            default: 
                return (await new Builder(`tbl_routes AS rts`)
                    .select(`rts.id, rts.series_no, rts.route, rts.base_url, rts.description, rts.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, rts.date_created`)
                    .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = rts.created_by`, type: `LEFT` })
                    .condition(`${data.searchtxt !== '' ? `WHERE rts.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                            OR rts.route LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY rts.${data.orderby} ${(data.sort).toUpperCase()}`)
                    .build()).rows;
        }
    }

    search = async data => {
        return (await new Builder(`tbl_routes AS rts`)
                        .select(`rts.id, rts.series_no, rts.route, rts.base_url, rts.description, rts.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, rts.date_created`)
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = rts.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE rts.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                                OR rts.route LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY rts.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_routes`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_routes`).select().condition(`WHERE route= '${(data.route).toUpperCase()}'`).build();
        let url = await new Builder(`tbl_routes`).select().condition(`WHERE base_url= '${(data.base_url).toLowerCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'route', message: 'Route name already exist!' }); }
        if(url.rowCount > 0) { errors.push({ name: 'base_url', message: 'Base URL already exist!' }); }

        if(!(errors.length > 0)) {
            let rts = (await new Builder(`tbl_routes`)
                                .insert({ columns: `series_no, route, base_url, description, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${(data.route).toUpperCase()}', '${(data.base_url).toLowerCase()}', 
                                                                ${data.description !== '' && data.description !== null ? `'${(data.description).toUpperCase()}'` : null }, 
                                                                ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];
            
            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = rts.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;

            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let date = Global.date(new Date());
        let rts = (await new Builder(`tbl_routes`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let route = await new Builder(`tbl_routes`).select().condition(`WHERE route= '${(data.route).toUpperCase()}'`).build();
        let url = await new Builder(`tbl_routes`).select().condition(`WHERE base_url= '${(data.base_url).toLowerCase()}'`).build();

        if(Global.compare(rts.route, data.route)) {
            if(!(route.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_routes', item_id: rts.id, field: 'route', previous: rts.route,
                    current: (data.route).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'route', message: 'Route name already exist!' }); }
        }

        if(Global.compare(rts.base_url, data.base_url)) {
            if(!(url.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_routes', item_id: rts.id, field: 'base url', previous: rts.base_url,
                    current: (data.base_url).toLowerCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'base_url', message: 'Base URL already exist!' }); }
        }

        if(Global.compare(rts.description, data.description)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_routes', item_id: rts.id, field: 'description', previous: rts.description,
                current: data.description !== '' && data.description !== null ? (data.description).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(rts.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_routes', item_id: rts.id, field: 'status', previous: rts.status === 1 ? 'Active' : 'Inactive', 
                                    current: data.status ? 'Active' : 'Inactive', action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_routes`)
                .update(`route= '${(data.route).toUpperCase()}', base_url= '${(data.base_url).toLowerCase()}',
                    description= ${data.description !== '' && data.description !== null ? `'${(data.description).toUpperCase()}'` : null}, 
                    status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }

    dropdown = async data => {
        switch(data.type) {
            case 'nav': return (await new Builder(`tbl_routes`).select(`id, route`).condition(`WHERE status= 1 ORDER BY route ASC`).build()).rows;
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW' }]
                            .concat((await new Builder(`tbl_routes`).select(`id, route as name, base_url`).condition(`WHERE status= 1 ORDER BY route ASC`).build()).rows);
        }
    }

    navigation = async () => {
        let navs = [];
        let ctg = (await new Builder(`tbl_routes`).select().condition(`WHERE status = 1`).build()).rows;
        
        for(let rtscount = 0; rtscount < ctg.length; rtscount++) {
            let rts = {};
            let mdl = (await new Builder(`tbl_modules`).select().condition(`WHERE route_id= ${ctg[rtscount].id} AND status= 1`).build()).rows;

            rts['route'] = ctg[rtscount].route;
            rts['modules'] = [];
            for(let mdlcount = 0; mdlcount < mdl.length; mdlcount++) {
                (rts['modules']).push({ module: mdl[mdlcount].name, baseurl: ctg[rtscount].base_url, path: mdl[mdlcount].path });
            }
            navs.push(rts);
        }

        return navs;
    }
}

module.exports = Routes;