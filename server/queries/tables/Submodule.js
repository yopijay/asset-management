const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_sub_module',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Submodule {
    series = async () => { return (await new Builder(`tbl_sub_module`).select().build()).rows; }
    navs = async id => { return (await new Builder(`tbl_sub_module`).select().condition(`WHERE module_id= ${id}`).build()).rows; }

    dropdown = async data => {
        switch(data.type) {
            case 'nav': return (await new Builder(`tbl_sub_module AS sub`)
                                            .select(`sub.id, sub.name, mdl.base_url, sub.path`)
                                            .join({ table: `tbl_module AS mdl`, condition: `sub.module_id = mdl.id`, type: `LEFT` })
                                            .condition(`WHERE sub.module_id= ${data.id} AND sub.status= 1 ORDER BY sub.name ASC`)
                                            .build()).rows;

            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_sub_module`).select(`id, name, path`).condition(`WHERE module_id= ${data.id} AND status= 1 ORDER BY name ASC`).build()).rows);
        }
    }

    specific = async id => { 
        return (await new Builder(`tbl_sub_module AS sub`)
                        .select(`sub.*, mdl.base_url AS module`)
                        .join({ table: `tbl_module AS mdl`, condition: `sub.module_id = mdl.id`, type: `LEFT` })
                        .condition(`WHERE sub.id= ${id}`)
                        .build()).rows; 
    }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, sub.name`)
                        .join({ table: `tbl_sub_module AS sub`, condition: `at.item_id = sub.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_sub_module' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_sub_module AS sub`)
                        .select(`sub.id, sub.series_no, mdl.name AS module, mdl.base_url AS base_url, sub.name, sub.path, sub.status, 
                                        CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, sub.date_created`)
                        .join({ table: `tbl_module AS mdl`, condition: `sub.module_id = mdl.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = sub.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE sub.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR sub.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY sub.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_sub_module AS sub`)
                        .select(`sub.id, sub.series_no, mdl.name AS module, mdl.base_url AS base_url, sub.name, sub.path, sub.status, 
                                        CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, sub.date_created`)
                        .join({ table: `tbl_module AS mdl`, condition: `sub.module_id = mdl.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = sub.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE sub.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR sub.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY sub.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_sub_module`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_sub_module`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();
        let path = await new Builder(`tbl_sub_module`).select().condition(`WHERE path= '${(data.path).toLowerCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Category already exist!' }); }
        if(path.rowCount > 0) { errors.push({ name: 'path', message: 'Path already exist!' }); }

        if(!(errors.length > 0)) {
            let sub = (await new Builder(`tbl_sub_module`)
                                .insert({ columns: `series_no, module_id, name, path, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', ${data.module_id}, '${(data.name).toUpperCase()}', '${(data.path).toLowerCase()}', 
                                                                ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];
            
            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = sub.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;

            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let sub = (await new Builder(`tbl_sub_module`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
    }
}

module.exports = Submodule;