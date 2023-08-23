// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_assets_supplies_brand',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class AssetsSuppliesBrand {
    series = async () => { return (await new Builder(`tbl_assets_supplies_brand`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_assets_supplies_brand`).select().condition(`WHERE id= ${id}`).build()).rows; }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, asb.series_no AS asb_series, asb.name`)
                        .join({ table: `tbl_assets_supplies_brand AS asb`, condition: `at.item_id = asb.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_assets_supplies_brand' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;    
    }

    list = async data => {
        return (await new Builder(`tbl_assets_supplies_brand AS asb`)
                        .select(`asb.id, asb.series_no, asb.category, asb.name, asb.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, asb.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = asb.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE asb.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR asb.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY asb.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_assets_supplies_brand AS asb`)
                        .select(`asb.id, asb.series_no, asb.category, asb.name, asb.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, asb.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = asb.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE asb.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR asb.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY asb.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_assets_supplies_brand`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_assets_supplies_brand`).select().condition(`WHERE category= '${data.category}' AND name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Brand already exist in this category!' }); }

        if(!(errors.length > 0)) {
            let asb = (await new Builder(`tbl_assets_supplies_brand`)
                                .insert({ columns: `series_no, category, name, description, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${data.category}', '${(data.name).toUpperCase()}',
                                                                ${data.description !== '' ? `'${(data.description).toUpperCase()}'` : null}, ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = asb.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let asb = (await new Builder(`tbl_assets_supplies_brand`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_assets_supplies_brand`).select().condition(`WHERE category= '${data.category}' AND name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(asb.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_brand', item_id: asb.id, field: 'name', previous: asb.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: `Brand already exist in ${(data.category).toUpperCase()}` }); }
        }

        if(Global.compare(asb.category, data.category)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_brand', item_id: asb.id, field: 'category', previous: asb.category,
                    current: data.category, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'category', message: `Brand already exist in ${(data.category).toUpperCase()}` }); }
        }

        if(Global.compare(asb.description, data.description)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_brand', item_id: asb.id, field: 'description', previous: asb.description,
                current: data.description !== '' && data.description !== null ? (data.description).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asb.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_brand', item_id: asb.id, field: 'status', previous: asb.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_assets_supplies_brand`)
                .update(`category= '${data.category}', name= '${(data.name).toUpperCase()}', 
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
            case 'per-category': return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                                                .concat((await new Builder(`tbl_assets_supplies_brand`).select(`id, name`)
                                                    .condition(`WHERE category= '${data.category}' AND status= 1 ORDER BY name ASC`)
                                                    .build()).rows);
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_assets_supplies_brand`).select(`id, name`).condition(`WHERE status= 1`).build()).rows);
        }
    }
}

module.exports = AssetsSuppliesBrand;