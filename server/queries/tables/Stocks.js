// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

// Categories
const Laptop = require("./stocks/Laptop");
const SystemUnit = require("./stocks/SystemUnit");
const Toner = require("./stocks/Toner");
const Monitor = require("./stocks/Monitor");
const Printer = require("./stocks/Printer");
const UPS = require("./stocks/UPS");
const Scanner = require("./stocks/Scanner");
const Telephone = require("./stocks/Telephone");

const audit = { series_no: '', table_name: 'tbl_stocks',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Stocks {
    series = async () => { return (await new Builder(`tbl_stocks`).select().build()).rows; }
    specific = async id => { 
        return (await new Builder(`tbl_stocks AS stck`)
                        .select(`stck.id, stck.series_no, stck.category_id, stck.brand_id, stck.quantity, stck.status, stck.branch, info.*, ctgy.name AS category`)
                        .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctgy`, condition: `stck.category_id = ctgy.id`, type: `LEFT` })
                        .condition(`WHERE stck.id= ${id}`)
                        .build()).rows;
    }

    logs = async data => {
        let condition = '';
        let search = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR info.serial_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' 
                                OR info.model LIKE '%${(data.logssearchtxt).toUpperCase()}%') `;

        switch(JSON.parse(atob(data.token)).role) {
            case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
            case 'admin': condition = `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
            default: 
        }

        return (await new Builder(`tbl_audit_trail AS at`)
                    .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, 
                        at.user_id, at.date, stck.series_no AS stck_series, info.serial_no, info.model, CONCAT(ubi.lname, ', ', ubi.fname) AS ub_name`)
                    .join({ table: `tbl_stocks AS stck`, condition: `at.item_id = stck.id`, type: `LEFT` })
                    .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = at.item_id`, type: `LEFT` })
                    .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                    .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                    .condition(`WHERE at.table_name= 'tbl_stocks' AND ctg.name= '${data.category}' ${condition}
                                        ${data.logssearchtxt !== '' ? search : ''}
                                        ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                    .build()).rows;
    }

    list = async data => {
        let stocks = [];
        let user = (await new Builder(`tbl_users AS usr`)
                            .select(`usr.id, info.branch`)
                            .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                            .condition(`WHERE usr.id= ${JSON.parse(atob(data.token)).id}`)
                            .build()).rows[0];

        const columns = `stck.id, stck.series_no, stck.quantity, stck.status, info.serial_no, info.model, info.condition`;
        const searchtxt = `(stck.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%')`;

        switch(JSON.parse(atob(data.token)).role) {
            case 'user':
                stocks = (await new Builder(`tbl_stocks AS stck`)
                                    .select(columns)
                                    .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                    .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                    .join({ table: `tbl_brands AS brd`, condition: `stck.brand_id = brd.id`, type: `LEFT` })
                                    .condition(`WHERE ctg.name= '${data.category}' AND stck.branch= '${user.branch}'
                                                        ${data.searchtxt !== '' ? `AND ${searchtxt}` : ''}
                                                        ${data.brand !== 'all' ? `AND stck.brand_id= ${data.brand}` : ''}
                                                        ORDER BY info.${data.orderby} ${(data.sort).toUpperCase()}`)
                                    .build()).rows;
                break;
            default:
                stocks = (await new Builder(`tbl_stocks AS stck`)
                                    .select(columns)
                                    .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                    .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                    .join({ table: `tbl_brands AS brd`, condition: `stck.brand_id = brd.id`, type: `LEFT` })
                                    .condition(`WHERE ctg.name= '${data.category}' ${data.searchtxt !== '' ? `AND ${searchtxt}` : ''}
                                                        ${data.brand !== 'all' ? `AND stck.brand_id= ${data.brand}` : ''}
                                                        ORDER BY info.${data.orderby} ${(data.sort).toUpperCase()}`)
                                    .build()).rows;
        }

        return stocks;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];
        let serial = {};
        let model = {};
        let quantity = !data.quantity || data.quantity === '' || data.quantity === null;

        let series = await new Builder(`tbl_stocks`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();

        if(data.category === 'laptop' || data.category === 'system_unit' || data.category === 'monitor' || data.cateogry === 'printer') {
            serial = await new Builder(`tbl_stocks AS stck`).select()
                            .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                            .condition(`WHERE stck.category_id= ${data.category_id} AND info.serial_no= '${(data.serial_no).toUpperCase()}'`)
                            .build();
        }

        if(data.category === 'toner') {
            model = await new Builder(`tbl_stocks AS stck`).select()
                                .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                .condition(`WHERE stck.category_id= ${data.category_id} AND info.model= '${(data.model).toUpperCase()}'
                                                    AND info.type= '${data.type}' AND info.condition= '${data.condition}'`)
                                .build();
        }

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(serial.rowCount > 0) { errors.push({ name: 'serial_no', message: 'Serial number already exist!' }); }
        if(model.rowCount > 0) { errors.push({ name: 'model', message: 'Model already exist!' }); }

        if(!(errors.length > 0)) {
            let stck = (await new Builder(`tbl_stocks`)
                                .insert({ columns: `series_no, category_id, brand_id, quantity, status, created_by, date_created, branch`, 
                                                values: `'${(data.series_no).toUpperCase()}', ${data.category_id}, ${data.brand_id}, ${!quantity ? data.quantity : 1}, 'good', ${user.id}, '${date}', '${data.branch}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            switch(data.category) {
                case 'laptop': await new Laptop(data).save(stck.id); break;
                case 'system_unit': await new SystemUnit(data).save(stck.id); break;
                case 'monitor': await new Monitor(data).save(stck.id); break;
                case 'toner': await new Toner(data).save(stck.id); break;
                case 'printer': await new Printer(data).save(stck.id); break;
                case 'ups': await new UPS(data).save(stck.id); break;
                case 'scanner': await new Scanner(data).save(stck.id); break;
                case 'telephone': await new Telephone(data).save(stck.id); break;
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
                                .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` }).condition(`WHERE stck.id= ${data.id}`).build()).rows[0];
    
            switch(data.category) {
                case 'laptop': resolve(await new Laptop(data).update(stck)); break;
                case 'system_unit': resolve(await new SystemUnit(data).update(stck)); break;
                case 'monitor': resolve(await new Monitor(data).update(stck)); break;
                case 'toner': resolve(await new Toner(data).update(stck)); break;
                case 'printer': resolve(await new Printer(data).update(stck)); break;
                case 'ups': resolve(await new UPS(data).update(stck)); break;
                case 'scanner': resolve(await new Scanner(data).update(stck)); break;
                case 'telephone': await new Telephone(data).save(stck.id); break;
            }
        });
    }

    dropdown = async data => {
        let stocks = null;
        switch(data.type) {
            case 'per-brand': 
                stocks = (await new Builder(`tbl_stocks AS stck`)
                                        .select(`stck.id, 
                                                        CONCAT(CASE WHEN info.serial_no IS NOT NULL AND info.serial_no <> '' THEN info.serial_no ELSE info.model END, 
                                                                        CASE WHEN ctg.name = 'TONER' THEN CONCAT(' - ', UPPER(info.condition)) ELSE '' END) AS name`)
                                        .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                        .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                        .condition(`WHERE stck.category_id= ${data.category_id} AND stck.brand_id= ${data.brand_id} AND stck.status= 'good' 
                                                            ${data.form === 'new' ? `AND stck.quantity > 0` : ''}`)
                                        .build()).rows;
                                        
                return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }].concat(stocks);
            case 'per-branch':
                stocks = (await new Builder(`tbl_stocks AS stck`)
                                        .select(`stck.id, 
                                                        CONCAT(CASE WHEN info.serial_no IS NOT NULL AND info.serial_no <> '' THEN info.serial_no ELSE info.model END, 
                                                                        CASE WHEN ctg.name = 'TONER' THEN CONCAT(' - ', UPPER(info.condition)) ELSE '' END) AS name`)
                                        .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                        .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                        .condition(`WHERE stck.category_id= ${data.category_id} AND stck.brand_id= ${data.brand_id} AND stck.status= 'good' AND stck.branch= '${data.branch}'
                                                            ${data.form === 'new' ? `AND stck.quantity > 0` : ''}`)
                                        .build()).rows;
                                        
                return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }].concat(stocks);
            default: return [];
        }
    }
}

module.exports = Stocks;