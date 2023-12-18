// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_brands',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Brands {
    series = async () => { return (await new Builder(`tbl_brands`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_brands`).select().condition(`WHERE id= ${id}`).build()).rows; }

    dropdown = async data => {
        switch(data.type) {
            case 'nav': return [];
            case 'per-category-id': return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                                                    .concat((await new Builder(`tbl_brands`).select(`id, name`)
                                                                .condition(`WHERE category_id= ${data.category_id} AND status= 1 ORDER BY name ASC`).build()).rows);
            case 'per-category-name': return [{ id: 'all', name: 'ALL' }]
                                                            .concat((await new Builder(`tbl_brands AS brd`).select(`brd.id, brd.name`)
                                                                            .join({ table: `tbl_category AS ctg`, condition: `brd.category_id = ctg.id`, type: `LEFT` })
                                                                            .condition(`WHERE ctg.name= '${(data.category).toUpperCase()}' AND brd.status= 1 ORDER BY brd.name ASC`).build()).rows);
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_brands`).select(`id, name`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows);
        }
    }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, brd.series_no AS brd_series, brd.name`)
                        .join({ table: `tbl_brands AS brd`, condition: `at.item_id = brd.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_brands' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_brands AS brd`)
                        .select(`brd.id, brd.series_no, ctg.name AS category, brd.name, brd.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, brd.date_created`)
                        .join({ table: `tbl_category AS ctg`, condition: `brd.category_id = ctg.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = brd.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ?
                                                `WHERE brd.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR brd.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                                ORDER BY brd.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_brands AS brd`)
                        .select(`brd.id, brd.series_no, ctg.name AS category, brd.name, brd.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, brd.date_created`)
                        .join({ table: `tbl_category AS ctg`, condition: `brd.category_id = ctg.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = brd.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ?
                                                `WHERE brd.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR brd.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                                ORDER BY brd.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_brands`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_brands`).select().condition(`WHERE category_id= ${data.category_id} AND name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Brand already exist in this category!' }); }

        if(!(errors.length > 0)) {
            let brd = (await new Builder(`tbl_brands`)
                            .insert({ columns: `series_no, category_id, name, status, created_by, date_created`, 
                                            values: `'${(data.series_no).toUpperCase()}', ${data.category_id}, '${(data.name).toUpperCase()}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                            .condition(`RETURNING id`)
                            .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = brd.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let brd = (await new Builder(`tbl_brands`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_brands`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(brd.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_brands', item_id: brd.id, field: 'name', previous: brd.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: 'Name already exist!' }); }
        }

        if(Global.compare(brd.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_brands', item_id: brd.id, field: 'status', previous: brd.status === 1 ? 'Active' : 'Inactive', 
                                    current: data.status ? 'Active' : 'Inactive', action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(brd.category_id, data.category_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_brands', item_id: brd.id, field: 'category_id', previous: brd.category_id, 
                                    current: data.category_id, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length >0)) {
            await new Builder(`tbl_brands`)
                .update(`category_id= ${data.category_id}, name= '${(data.name).toUpperCase()}', status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Brands;