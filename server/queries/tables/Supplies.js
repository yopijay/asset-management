// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_supplies',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Supplies {
    series = async () => { return (await new Builder(`tbl_supplies`).select().build()).rows; }
    specific = async id => {
        return (await new Builder(`tbl_supplies AS supp`)
                        .select(`supp.*, info.*`)
                        .join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                        .condition(`WHERE supp.id= ${id}`)
                        .build()).rows;
    }

    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, supp.series_no AS supp_series, supp.name`)
                        .join({ table: `tbl_supplies AS supp`, condition: `at.item_id = supp.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_supplies' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_supplies AS supp`)
                        .select(`supp.id, supp.series_no, supp.model, supp.type, brd.name AS brand, info.quantity, supp.status, 
                                        CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, supp.date_created, info.date_received`)
                        .join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `supp.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `supp.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE supp.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR supp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY supp.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_supplies AS supp`)
                        .select(`supp.id, supp.series_no, supp.model, supp.type, brd.name AS brand, info.quantity, supp.status, 
                                        CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, supp.date_created, info.date_received`)
                        .join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `supp.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `supp.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE supp.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR supp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY supp.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series=  await new Builder(`tbl_supplies`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let model = await new Builder(`tbl_supplies AS supp`).select()
                            .join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                            .condition(`WHERE supp.model= '${(data.model).toUpperCase()}' AND info.date_received= '${data.date_received}'`)
                            .build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(model.rowCount > 0) { errors.push({ name: 'model', message: 'Model already exist!' }); }

        if(!(errors.length > 0)) {
            let supp = (await new Builder(`tbl_supplies`)
                                .insert({ columns: `series_no, type, brand_id, model, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${data.type}', ${data.brand_id}, '${(data.model).toUpperCase()}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            switch(data.type) {
                case 'toner':
                    await new Builder(`tbl_supplies_info`)
                        .insert({ columns: `supplies_id, quantity, date_received, warranty`, 
                                        values: `${supp.id}, ${data.quantity}, '${data.date_received}', '${(data.warranty).toUpperCase()}'` })
                        .build();
                    break;
            }

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = supp.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);

            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let supp = (await new Builder(`tbl_supplies AS supp`)
                                .select(`supp.*, info.*`).join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                                .condition(`WHERE supp.id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let model = await new Builder(`tbl_supplies AS supp`).select()
                            .join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                            .condition(`WHERE supp.model= '${(data.model).toUpperCase()}' AND info.date_received= '${data.date_received}'`)
                            .build();

        if(Global.compare(supp.model, data.model)) {
            if(!(model.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_supplies', item_id: supp.id, field: 'model', previous: supp.model,
                    current: (data.model).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'model', message: 'Model already exist!' }); }
        }

        if(Global.compare(supp.brand_id, data.brand_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_supplies', item_id: supp.id, field: 'brand_id', previous: supp.brand_id,
                current: data.brand_id, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(supp.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_supplies', item_id: supp.id, field: 'status', previous: supp.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }
    
        if(Global.compare(supp.date_received, data.date_received)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_supplies', item_id: supp.id, field: 'date_received', previous: supp.date_received,
                current: data.date_received !== '' && data.date_received !== null ? data.date_received : null, action: 'update', user_id: user.id, date: date });
        }
    
        if(Global.compare(supp.quantity, data.quantity)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_supplies', item_id: supp.id, field: 'quantity', previous: supp.quantity,
                current: data.quantity !== '' && data.quantity !== null ? data.quantity : null, action: 'update', user_id: user.id, date: date });
        }
    
        if(Global.compare(supp.warranty, data.warranty)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_supplies', item_id: supp.id, field: 'warranty', previous: supp.warranty,
                current: data.warranty !== '' && data.warranty !== null ? data.warranty : null, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_supplies`)
                .update(`brand_id= ${data.brand_id}, model= '${(data.model).toUpperCase()}', status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            switch(data.type) {
                case 'toner':
                    await new Builder(`tbl_supplies_info`)
                        .update(`quantity= ${data.quantity !== '' && data.quantity !== null ? data.quantity : null}, 
                                        date_received= ${data.date_received !== '' && data.received !== null ? `'${data.date_received}'` : null},
                                        warranty= ${data.warranty !== '' && data.received !== null ? `'${(data.warranty).toUpperCase()}'` : null}`)
                        .condition(`WHERE supplies_id= ${data.id}`)
                        .build();
                    break;
            }

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Supplies;