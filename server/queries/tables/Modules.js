const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_modules',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Modules {
    series = async () => { return (await new Builder(`tbl_modules`).select().build()).rows; }

    specific = async id => { 
        return (await new Builder(`tbl_modules AS mdl`)
                        .select(`mdl.*, rts.base_url AS route`)
                        .join({ table: `tbl_routes AS rts`, condition: `mdl.route_id = rts.id`, type: `LEFT` })
                        .condition(`WHERE mdl.id= ${id}`)
                        .build()).rows; 
    }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, mdl.series_no AS mdl_series, mdl.name`)
                        .join({ table: `tbl_modules AS mdl`, condition: `at.item_id = mdl.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_modules' ORDER BY at.date DESC LIMIT 3`)
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
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_modules', item_id: mdl.id, field: 'status', previous: mdl.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
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