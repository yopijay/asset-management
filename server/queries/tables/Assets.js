// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_assets',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Assets {
    series = async () => { return (await new Builder(`tbl_assets`).select().build()).rows; }
    specific = async id => {
        return (await new Builder(`tbl_assets AS asst`)
                        .select(`asst.*, info.*, brd.name AS brand`)
                        .join({ table: `tbl_assets_info AS info`, condition: `info.assets_id = asst.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `info.brand_id = brd.id`, type: `LEFT` })
                        .condition(`WHERE asst.id= ${id}`)
                        .build()).rows;
    }
    
    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, asst.series_no AS asst_series, asst.serial_no`)
                        .join({ table: `tbl_assets AS asst`, condition: `at.item_id = asst.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_assets' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }
    
    list = async data => {
        return (await new Builder(`tbl_assets AS asst`)
                        .select(`asst.id, asst.series_no, asst.serial_no, asst.status, info.type, brd.name AS brand, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, asst.date_created`)
                        .join({ table: `tbl_assets_info AS info`, condition: `info.assets_id = asst.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `info.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `asst.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE asst.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR asst.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY asst.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => { return []; }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_assets`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let serial = await new Builder(`tbl_assets`).select().condition(`WHERE serial_no= '${(data.serial_no).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(serial.rowCount > 0) { errors.push({ name: 'serial_no', message: 'Serial already used!' }); }

        if(!(errors.length > 0)) {
            switch(data.type) {
                case 'monitor':
                    let asst = (await new Builder(`tbl_assets`)
                                        .insert({ columns: `series_no, serial_no, status, created_by, date_created`, 
                                                        values: `'${(data.series_no).toUpperCase()}', '${(data.serial_no).toUpperCase()}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                        .condition(`RETURNING id`)
                                        .build()).rows[0];

                    await new Builder(`tbl_assets_info`)
                        .insert({ columns: `assets_id, type, brand_id, model, panel, resolution, color, power_supply, warranty, hdmi, vga, dvi`, 
                                        values: `${asst.id}, '${data.type}', ${data.brand_id}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                                        ${data.panel !== '' ? `'${(data.panel).toUpperCase()}'` : null}, ${data.resolution !== '' ? `'${(data.resolution).toUpperCase()}'` : null},
                                                        ${data.color !== '' ? `'${(data.color).toUpperCase()}'` : null}, ${data.power_supply !== '' ? `'${(data.power_supply).toUpperCase()}'` : null},
                                                        ${data.warranty !== '' ? `'${(data.warranty).toUpperCase()}'` : null}, ${data.hdmi ? 1 : 0}, ${data.vga ? 1 : 0}, ${data.dvi ? 1 : 0}` })
                        .build();

                    audit.series_no = Global.randomizer(7);
                    audit.field = 'all';
                    audit.item_id = asst.id;
                    audit.action = 'create';
                    audit.user_id = user.id;
                    audit.date = date;
                    
                    Global.audit(audit);
                    break;
                
                case 'laptop': break;
                case 'system_unit': break;
            }

            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
        
        return data;
    }

    update = async data => {
        return data;
    }
}

module.exports = Assets;