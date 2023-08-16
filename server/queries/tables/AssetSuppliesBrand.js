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

    update = async data => { return []; }
}

module.exports = AssetsSuppliesBrand;