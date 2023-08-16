const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_department',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Department {
    series = async () =>{ return (await new Builder(`tbl_department`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_department`).select().condition(`WHERE id= ${id}`).build()).rows; }

    dropdown = async data => {
        switch(data.type) {
            case 'nav': return [];
            case 'per-company': return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                                                .concat((await new Builder(`tbl_department`).select(`id, name`).condition(`WHERE company_id= ${data.id} AND status= 1 ORDER BY name ASC`).build()).rows);
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_department`).select(`id, name`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows);
        }
    }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, dpt.series_no AS dpt_series, dpt.name`)
                        .join({ table: `tbl_department AS dpt`, condition: `at.item_id = dpt.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_department' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_department AS dpt`)
                        .select(`dpt.id, dpt.series_no, cmp.name AS company, dpt.name, dpt.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, dpt.date_created`)
                        .join({ table: `tbl_company AS cmp`, condition: `cmp.id = dpt.company_id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = dpt.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE dpt.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR dpt.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR cmp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY dpt.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_department AS dpt`)
                        .select(`dpt.id, dpt.series_no, cmp.name AS company, dpt.name, dpt.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, dpt.date_created`)
                        .join({ table: `tbl_company AS cmp`, condition: `cmp.id = dpt.company_id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = dpt.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE dpt.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' or dpt.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR cmp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY dpt.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_department`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_department`).select().condition(`WHERE company_id= ${data.company_id} AND name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Department already exist in this company!' }); }

        if(!(errors.length > 0)) {
            let dpt = (await new Builder(`tbl_department`)
                                .insert({ columns: `series_no, company_id, department_head_id, name, description, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', ${data.company_id}, ${data.department_head_id}, '${(data.name).toUpperCase()}', 
                                                                ${data.description !== '' ? `'${(data.description).toUpperCase()}'` : null}, ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = dpt.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let dpt = (await new Builder(`tbl_department`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_department`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(dpt.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: dpt.id, field: 'name', previous: dpt.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: 'Department already exist in this company!' }); }
        }
        
        if(Global.compare(dpt.company_id, data.company_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: dpt.id, field: 'company_id', previous: dpt.company_id,
                current: data.company_id, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(dpt.department_head_id, data.department_head_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: dpt.id, field: 'department_head_id', previous: dpt.department_head_id,
                current: data.department_head_id, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(dpt.description, data.description)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: dpt.id, field: 'description', previous: dpt.description,
                current: data.description !== '' && data.description !== null ? (data.description).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(dpt.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: dpt.id, field: 'status', previous: dpt.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_department`)
                .update(`company_id= ${data.company_id}, department_head_id= ${data.department_head_id}, name= '${(data.name).toUpperCase()}',
                    description= ${data.description !== '' && data.description !== null ? `'${(data.description).toUpperCase()}'` : null}, status= ${data.status ? 1 : 0},
                    updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Department;