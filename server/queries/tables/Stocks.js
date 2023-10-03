// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

// Categories
const Laptop = require("./stocks/Laptop");
const SystemUnit = require("./stocks/SystemUnit");
const Toner = require("./stocks/Toner");
const Monitor = require("./stocks/Monitor");

const audit = { series_no: '', table_name: 'tbl_stocks',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Stocks {
    series = async () => { return (await new Builder(`tbl_stocks`).select().build()).rows; }
    specific = async id => { 
        return (await new Builder(`tbl_stocks AS stck`).select(`stck.*, info.*, ctgy.name AS category`)
                        .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctgy`, condition: `stck.category_id = ctgy.id`, type: `LEFT` })
                        .condition(`WHERE stck.id= ${id}`).build()).rows; 
    }

    logs = async data => {
        return [];
    }

    list = async data => {
        switch(data.type) {
            case 'per-category':
                let ctg = (await new Builder(`tbl_category`).select().condition(`WHERE name= '${((data.category).replace('-', ' ')).toUpperCase()}'`).build()).rows[0];

                return (await new Builder(`tbl_stocks AS stck`)
                                .select(`stck.id, stck.series_no, stck.status, info.serial_no, info.model, ctg.name AS category, brd.name AS brand, stck.date_created,
                                                CONCAT(it.lname, ', ', it.fname) AS issued_to, stck.issued_date, CONCAT(ib.lname, ', ', ib.fname) AS issued_by`)
                                .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` })
                                .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                .join({ table: `tbl_brands AS brd`, condition: `stck.brand_id = brd.id`, type: `LEFT` })
                                .join({ table: `tbl_employee AS it`, condition: `stck.issued_to = it.user_id`, type: `LEFT` })
                                .join({ table: `tbl_employee AS ib`, condition: `stck.issued_by = ib.user_id`, type: `LEFT` })
                                .condition(`WHERE stck.category_id= ${ctg.id} ${data.searchtxt !== '' ? 
                                                    `AND stck.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                    OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY stck.${(data.orderby).toUpperCase()} ${(data.sort).toUpperCase()}`)
                                .build()).rows;
            default: 
                return (await new Builder(`tbl_stocks AS stck`)
                                .select(`stck.id, stck.series_no, stck.status, info.serial_no, info.model, ctg.name AS category, brd.name AS brand, stck.date_created,
                                                CONCAT(it.lname, ', ', it.fname) AS issued_to, stck.issued_date, CONCAT(ib.lname, ', ', ib.fname) AS issued_by`)
                                .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` })
                                .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                .join({ table: `tbl_brands AS brd`, condition: `stck.brand_id = brd.id`, type: `LEFT` })
                                .join({ table: `tbl_employee AS it`, condition: `stck.issued_to = it.user_id`, type: `LEFT` })
                                .join({ table: `tbl_employee AS ib`, condition: `stck.issued_by = ib.user_id`, type: `LEFT` })
                                .condition(`${data.searchtxt !== '' ? `WHERE stck.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                    OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY stck.${(data.orderby).toUpperCase()} ${(data.sort).toUpperCase()}`)
                                .build()).rows;
        }
    }

    search = async data => {
        return (await new Builder(`tbl_stocks AS stck`)
                        .select(`stck.id, stck.series_no, stck.status, info.serial_no, info.model, ctg.name AS category, brd.name AS brand, stck.date_created,
                                        CONCAT(it.lname, ', ', it.fname) AS issued_to, stck.issued_date, CONCAT(ib.lname, ', ', ib.fname) AS issued_by`)
                        .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `stck.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS it`, condition: `stck.issued_to = it.user_id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS ib`, condition: `stck.issued_by = ib.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE stck.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'
                                            OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY stck.${(data.orderby).toUpperCase()} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];
        let serial = {};

        let series = await new Builder(`tbl_stocks`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();

        if(data.category === 'laptop' || data.category === 'system_unit' || data.category === 'monitor') {
            serial = await new Builder(`tbl_stocks AS stck`).select()
                            .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` })
                            .condition(`WHERE stck.category_id= ${data.category_id} AND info.serial_no= '${(data.serial_no).toUpperCase()}'`)
                            .build();
        }

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(serial.rowCount > 0) { errors.push({ name: 'serial_no', message: 'Serial number already exist!' }); }

        if(!(errors.length > 0)) {
            let stck = (await new Builder(`tbl_stocks`)
                                .insert({ columns: `series_no, category_id, brand_id, quantity, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', ${data.category_id}, ${data.brand_id}, ${data.quantity ? data.quantity : 1}, 1, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            switch(data.category) {
                case 'laptop': await new Laptop(data).save(stck.id); break;
                case 'system_unit': await new SystemUnit(data).save(stck.id); break;
                case 'toner': await new Toner(data).save(stck.id); break;
                case 'monitor': await new Monitor(data).save(stck.id); break;
            }

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = stck.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else{ return { result: 'error', error: errors } }
    }

    update = async data => {
        return new Promise(async resolve => {
            let stck = (await new Builder(`tbl_stocks AS stck`).select()
                                .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` }).condition(`WHERE stck.id= ${data.id}`).build()).rows[0];
    
            switch(data.category) {
                case 'laptop': resolve(await new Laptop(data).update(stck)); break;
                case 'system_unit': resolve(await new SystemUnit(data).update(stck)); break;
                case 'toner': resolve(await new Toner(data).update(stck)); break;
                case 'monitor': resolve(await new Monitor(data).update(stck)); break;
            }
        });
    }

    dropdown = async data => {
        switch(data.type) {
            case 'per-brand': return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                                            .concat((await new Builder(`tbl_stocks AS stck`)
                                                            .select(`stck.id, CASE WHEN info.serial_no IS NOT NULL AND info.serial_no <> '' THEN info.serial_no ELSE info.model END AS name`)
                                                            .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` })
                                                            .condition(`WHERE stck.category_id= ${data.category_id} AND stck.brand_id= ${data.brand_id} AND stck.status= 1`)
                                                            .build()).rows);
            default: return [];
        }
    }
}

module.exports = Stocks;