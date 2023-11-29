// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_category',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Category {
    series = async () => { return (await new Builder(`tbl_category`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_category`).select().condition(`WHERE id= ${id}`).build()).rows; }

    dropdown = async data => {
        if(data.type) {
            return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_category`).select(`id, name`).condition(`WHERE type= '${data.type}' AND status= 1 ORDER BY name ASC`).build()).rows);
        }
        else {
            return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_category`).select(`id, name`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows);
        }
    }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, ctg.series_no AS ctg_series, ctg.name`)
                        .join({ table: `tbl_category AS ctg`, condition: `at.item_id = ctg.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_category' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }

    list = async data => {
        switch(data.type) {
            case 'count': 
                let _count = [];

                let ctg = (await new Builder(`tbl_category`).select('id, name').condition(`WHERE status= 1`).build()).rows;
                
                for(let count = 0; count < ctg.length; count++) {
                    let qty = (await new Builder(`tbl_stocks`).select().condition(`WHERE category_id= ${ctg[count].id}`).build()).rowCount;

                    _count.push({ name: ctg[count].name, count: qty });
                }
                
                return _count;
            default: return (await new Builder(`tbl_category AS ctg`)
                                        .select(`ctg.id, ctg.series_no, ctg.type, ctg.name, ctg.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, ctg.date_created`)
                                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = ctg.created_by`, type: `LEFT` })
                                        .condition(`${data.searchtxt !== '' ? `WHERE ctg.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR ctg.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                                            ORDER BY ctg.${data.orderby} ${(data.sort).toUpperCase()}`)
                                        .build()).rows;
        }
    }

    search = async data => {
        return (await new Builder(`tbl_category AS ctg`)
                        .select(`ctg.id, ctg.series_no, ctg.type, ctg.name, ctg.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, ctg.date_created`)
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = ctg.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ?
                                                `WHERE ctg.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR ctg.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                                ORDER BY ctg.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_category`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_category`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Cateogry already exist!' }); }

        if(!(errors.length > 0)) {
            let ctg = (await new Builder(`tbl_category`)
                            .insert({ columns: `series_no, type, name, status, created_by, date_created`, 
                                            values: `'${(data.series_no).toUpperCase()}', '${data.type}', '${(data.name).toUpperCase()}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                            .condition(`RETURNING id`)
                            .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = ctg.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let ctg = (await new Builder(`tbl_category`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_category`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(ctg.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_category', item_id: ctg.id, field: 'name', previous: ctg.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: 'Name already exist!' }); }
        }

        if(Global.compare(ctg.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_category', item_id: ctg.id, field: 'status', previous: ctg.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length >0)) {
            await new Builder(`tbl_category`)
                .update(`name= '${(data.name).toUpperCase()}', status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Category;