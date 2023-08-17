// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_assets_supplies_classification',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class AssetsSuppliesClassification {
    series = async () => { return (await new Builder(`tbl_assets_supplies_classification`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_assets_supplies_classification`).select().condition(`WHERE id= ${id}`).build()).rows; }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, ascn.series_no AS ascn_series, ascn.name`)
                        .join({ table: `tbl_assets_supplies_classification AS ascn`, condition: `at.item_id = ascn.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_assets_supplies_classification' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;    
    }

    list = async data => {
        return (await new Builder(`tbl_assets_supplies_classification AS ascn`)
                        .select(`ascn.id, ascn.series_no, ascn.category, ascn.name, ascn.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, ascn.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = ascn.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE ascn.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR ascn.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY ascn.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_assets_supplies_classification AS ascn`)
                        .select(`ascn.id, ascn.series_no, ascn.category, ascn.name, ascn.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, ascn.date_created`)
                        .join({ table: `tbl_employee AS cb`, condition: `cb.user_id = ascn.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE ascn.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR ascn.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY ascn.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_assets_supplies_classification`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_assets_supplies_classification`).select()
                                .condition(`WHERE category= '${data.category}' AND brand_id= ${data.brand_id} AND name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Brand already exist in this category!' }); }

        if(!(errors.length > 0)) {
            let asc = (await new Builder(`tbl_assets_supplies_classification`)
                                .insert({ columns: `series_no, category, brand_id,  name, description, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${data.category}', ${data.brand_id}, '${(data.name).toUpperCase()}',
                                                                ${data.description !== '' ? `'${(data.description).toUpperCase()}'` : null}, ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = asc.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let asc = (await new Builder(`tbl_assets_supplies_classification`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_assets_supplies_classification`).select()
                            .condition(`WHERE category= '${data.category}' AND brand_id= ${data.brand_id} AND name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(asc.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_classification', item_id: asc.id, field: 'name', previous: asc.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: `Classification already exist in  this brand!` }); }
        }

        if(Global.compare(asc.category, data.category)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_classification', item_id: asc.id, field: 'category', previous: asc.category,
                    current: data.category, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: `Classification already exist in  this brand!` }); }
        }

        if(Global.compare(asc.brand_id, data.brand_id)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_classification', item_id: asc.id, field: 'brand_id', previous: asc.brand_id,
                    current: data.brand_id, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: `Classification already exist in  this brand!` }); }
        }

        if(Global.compare(asc.description, data.description)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_classification', item_id: asc.id, field: 'description', previous: asc.description,
                current: data.description !== '' && data.description !== null ? (data.description).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asc.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets_supplies_classification', item_id: asc.id, field: 'status', previous: asc.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_assets_supplies_classification`)
                .update(`category= '${data.category}', brand_id= ${data.brand_id}, name= '${(data.name).toUpperCase()}', 
                                description= ${data.description !== '' && data.description !== null ? `'${(data.description).toUpperCase()}'` : null},
                                status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = AssetsSuppliesClassification