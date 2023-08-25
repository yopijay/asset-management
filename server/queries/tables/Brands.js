// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_brands',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Brands {
    series = async () => { return (await new Builder(`tbl_brands`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_brands`).select().condition(`WHERE id= ${id}`).build()).rows; }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, brs.series_no AS brs_series, brs.name`)
                        .join({ table: `tbl_brands AS brs`, condition: `at.item_id = brs.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_brands' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;    
    }

    list = async data => {
        return (await new Builder(`tbl_brands AS brs`)
                        .select(`brs.id, brs.series_no, brs.category, brs.type, brs.name, brs.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, brs.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = brs.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE brs.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR brs.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY brs.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_brands AS brs`)
                        .select(`brs.id, brs.series_no, brs.category, brs.type, brs.name, brs.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, brs.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = brs.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE brs.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR brs.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY brs.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_brands`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_brands`).select().condition(`WHERE category= '${data.category}' AND type= '${data.type}' AND name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Brand already exist in this category!' }); }

        if(!(errors.length > 0)) {
            let brs = (await new Builder(`tbl_brands`)
                                .insert({ columns: `series_no, category, type, name, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${data.category}', '${data.type}', '${(data.name).toUpperCase()}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = brs.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let brs = (await new Builder(`tbl_brands`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_brands`).select().condition(`WHERE category= '${data.category}' AND name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(brs.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_brands', item_id: brs.id, field: 'name', previous: brs.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: `Brand already exist in ${(data.category).toUpperCase()}` }); }
        }

        if(Global.compare(brs.category, data.category)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_brands', item_id: brs.id, field: 'category', previous: brs.category,
                    current: data.category, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'category', message: `Brand already exist in ${(data.category).toUpperCase()}` }); }
        }

        if(Global.compare(brs.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_brands', item_id: brs.id, field: 'status', previous: brs.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_brands`)
                .update(`category= '${data.category}', name= '${(data.name).toUpperCase()}', status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }

    dropdown = async data => {
        switch(data.type) {
            case 'per-category': return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                                                .concat((await new Builder(`tbl_brands`).select(`DISTINCT LOWER(type) AS id, REPLACE(UPPER(type), '_', ' ') AS name`)
                                                    .condition(`WHERE category= '${data.category}' AND status= 1 ORDER BY name ASC`)
                                                    .build()).rows);
            
            case 'per-type': return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                                                .concat((await new Builder(`tbl_brands`).select(`id, name`)
                                                    .condition(`WHERE type= '${data.id}' AND status= 1 ORDER BY name ASC`)
                                                    .build()).rows);
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_brands`).select(`id, name`).condition(`WHERE status= 1`).build()).rows);
        }
    }
}

module.exports = Brands;