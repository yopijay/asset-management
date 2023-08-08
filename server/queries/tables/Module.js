const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_module',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Module {
    series = async () => { return (await new Builder(`tbl_module`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_module`).select().condition(`WHERE id= ${id}`).build()).rows; }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date,
                                        mdl.series_no AS mdl_series, mdl.name, mdl.description, mdl.status, mdl.created_by, mdl.updated_by, mdl.deleted_by,
                                        mdl.imported_by, mdl.date_created, mdl.date_updated, mdl.date_deleted, mdl.date_imported`)
                        .join({ table: `tbl_module AS mdl`, condition: `at.item_id = mdl.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_module' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_module AS mdl`)
                        .select(`mdl.id, mdl.series_no, mdl.name, mdl.base_url, mdl.description, mdl.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, mdl.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = mdl.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE mdl.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                                OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY mdl.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_module AS mdl`)
                        .select(`mdl.id, mdl.series_no, mdl.name, mdl.base_url, mdl.description, mdl.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, mdl.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = mdl.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE mdl.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                                OR mdl.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY mdl.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_module`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_module`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();
        let url = await new Builder(`tbl_module`).select().condition(`WHERE base_url= '${(data.base_url).toLowerCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Category already exist!' }); }
        if(url.rowCount > 0) { errors.push({ name: 'base_url', message: 'Base URL already exist!' }); }

        if(!(errors.length > 0)) {
            let mdl = (await new Builder(`tbl_module`)
                                .insert({ columns: `series_no, name, base_url, description, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${(data.name).toUpperCase()}', '${(data.base_url).toLowerCase()}', 
                                                                ${data.description !== '' && data.description !== null ? `'${(data.description).toUpperCase()}'` : null }, 
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
        let mdl = (await new Builder(`tbl_module`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_module`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();
        let url = await new Builder(`tbl_module`).select().condition(`WHERE base_url= '${(data.base_url).toLowerCase()}'`).build();

        if(Global.compare(mdl.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_module', item_id: mdl.id, field: 'name', previous: mdl.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: 'Category already exist!' }); }
        }

        if(Global.compare(mdl.base_url, data.base_url)) {
            if(!(url.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_module', item_id: mdl.id, field: 'base_url', previous: mdl.base_url,
                    current: (data.base_url).toLowerCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'base_url', message: 'Base URL already exist!' }); }
        }

        if(Global.compare(mdl.description, data.description)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_module', item_id: mdl.id, field: 'description', previous: mdl.description,
                current: data.description !== '' && data.description !== null ? (data.description).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(mdl.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_module', item_id: mdl.id, field: 'status', previous: mdl.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_module`)
                .update(`name= '${(data.name).toUpperCase()}', base_url= '${(data.base_url).toLowerCase()}',
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
            case 'nav': return (await new Builder(`tbl_module`).select(`id, name`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows;
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW' }]
                            .concat((await new Builder(`tbl_module`).select(`id, name, base_url`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows);
        }
    }
}

module.exports = Module;