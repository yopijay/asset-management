const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_position',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Position {
    series = async () =>{ return (await new Builder(`tbl_position`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_position`).select().condition(`WHERE id= ${id}`).build()).rows; }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, pst.series_no AS pst_series, pst.name`)
                        .join({ table: `tbl_position AS pst`, condition: `at.item_id = pst.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_position' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_position AS pst`)
                        .select(`pst.id, pst.series_no, cmp.name AS company, dpt.name AS department, pst.name, pst.status, 
                            CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, pst.date_created`)
                        .join({ table: `tbl_company AS cmp`, condition: `cmp.id = pst.company_id`, type: `LEFT` })
                        .join({ table: `tbl_department AS dpt`, condition: `dpt.id = pst.department_id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = pst.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE pst.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' or pst.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR cmp.name LIKE '%${(data.searchtxt).toUpperCase()}%' OR dpt.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY pst.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_position AS pst`)
                        .select(`pst.id, pst.series_no, cmp.name AS company, dpt.name AS department, pst.name, pst.status, 
                            CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, pst.date_created`)
                        .join({ table: `tbl_company AS cmp`, condition: `cmp.id = pst.company_id`, type: `LEFT` })
                        .join({ table: `tbl_department AS dpt`, condition: `dpt.id = pst.department_id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = pst.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE pst.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' or pst.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR cmp.name LIKE '%${(data.searchtxt).toUpperCase()}%' OR dpt.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY pst.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }
    
    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_position`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_position`).select()
                            .condition(`WHERE company_id= ${data.company_id} AND department_id= ${data.department_id} 
                                                AND name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: `Position already exist in this company department!` }); }

        if(!(errors.length > 0)) {
            let pst = (await new Builder(`tbl_position`)
                                .insert({ columns: `series_no, company_id, department_id, name, status, created_by, date_created`,
                                                values: `'${(data.series_no).toUpperCase()}', ${data.company_id}, ${data.department_id}, '${(data.name).toUpperCase()}',
                                                                ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = pst.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let pst = (await new Builder(`tbl_position`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_position`).select()
                            .condition(`WHERE company_id= ${data.company_id} AND department_id= ${data.department_id} AND name= '${(data.name).toUpperCase()}'`).build();
        
        if(Global.compare(pst.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_position', item_id: dpt.id, field: 'name', previous: dpt.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: 'Position already exist in this company department' }); }
        }
        
        if(Global.compare(pst.company_id, data.company_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_position', item_id: pst.id, field: 'company_id', previous: pst.company_id,
                current: data.company_id, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(pst.department_id, data.department_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_position', item_id: pst.id, field: 'department_id', previous: pst.department_id,
                current: data.department_id, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(pst.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_position', item_id: pst.id, field: 'status', previous: pst.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.lengh > 0)) {
            await new Builder(`tbl_position`)
                .update(`company_id= ${data.company_id}, department_id= ${data.department_id}, name= '${(data.name).toUpperCase()}', status= ${data.status ? 1 : 0},
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
            case 'nav': return [];
            case 'per-department': 
                if(data.department_id) {
                    return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                                    .concat((await new Builder(`tbl_position`).select(`id, name`)
                                                    .condition(`WHERE company_id= ${data.company_id} AND department_id= ${data.department_id} AND status= 1 ORDER BY name ASC`)
                                                    .build()).rows);
                }
                return [];
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_position`).select(`id, name`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows);
        }
    }
}

module.exports = Position;