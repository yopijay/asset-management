// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

// Categories
const Laptop = require("./stocks/Laptop");
const SystemUnit = require("./stocks/SystemUnit");
const Toner = require("./stocks/Toner");
const Monitor = require("./stocks/Monitor");
const Mouse = require("./stocks/Mouse");
const Keyboard = require("./stocks/Keyboard");

const audit = { series_no: '', table_name: 'tbl_stocks',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Stocks {
    series = async () => { return (await new Builder(`tbl_stocks`).select().build()).rows; }
    specific = async id => { 
        return (await new Builder(`tbl_stocks AS stck`).select(`stck.*, info.*, ctgy.name AS category`)
                        .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctgy`, condition: `stck.category_id = ctgy.id`, type: `LEFT` })
                        .condition(`WHERE stck.id= ${id}`).build()).rows; 
    }

    logs = async data => {
        return [];
    }

    list = async data => {
        let stcks = [];
        let ctg = [];
        let brd = [];

        switch(data.mode) {
            case 'dashboard':
                ctg = (await new Builder(`tbl_category`).select().condition(`WHERE type= 'assets' AND status= 1`).build()).rows;

                for(let countctg = 0; countctg < ctg.length; countctg++) {
                    let perbrd = [];
                    let brd = (await new Builder(`tbl_brands`).select().condition(`WHERE category_id= ${ctg[countctg].id} AND status= 1`).build()).rows;
                    
                    for(let countbrd = 0; countbrd < brd.length; countbrd++) {
                        let stck = (await new Builder(`tbl_stocks`).select().condition(`WHERE category_id= ${ctg[countctg].id} AND brand_id= ${brd[countbrd].id}`).build()).rows;
                        perbrd.push({ brand: brd[countbrd].name, count: stck.length });
                    }

                    stcks.push({ category: ctg[countctg].name, brands: perbrd });
                } 
            break;
            case 'per-category':
                ctg = (await new Builder(`tbl_category`).select().condition(`WHERE type= 'assets' AND name= '${data.category}'`).build()).rows;
                brd = (await new Builder(`tbl_brands`).select().condition(`WHERE category_id= ${ctg[0].id} AND name= '${data.brand}'`).build()).rows;
                
                stcks = (await new Builder(`tbl_stocks AS stck`)
                                .select(`stck.id, stck.series_no, stck.status, info.serial_no, info.model`)
                                .join({ table: 'tbl_stocks_info AS info', condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                .condition(`WHERE stck.category_id= ${ctg[0].id} AND stck.brand_id= ${brd[0].id} 
                                                    ${data.searchtxt !== '' ? `AND (stck.series_no LIKE '%${(data.searchtxt).toUpperCase()}%')) ` : ''}
                                                    ORDER BY stck.${data.orderby} ${(data.sort).toUpperCase()}`)
                                .build()).rows;
                break;
            default: stcks.push();
        }

        return(stcks);
    }

    search = async data => {
        let stcks = [];
        let ctg = [];
        let brd = [];
        
        ctg = (await new Builder(`tbl_category`).select().condition(`WHERE type= 'assets' AND name= '${data.category}'`).build()).rows;
        brd = (await new Builder(`tbl_brands`).select().condition(`WHERE category_id= ${ctg[0].id} AND name= '${data.brand}'`).build()).rows;
        
        stcks = (await new Builder(`tbl_stocks AS stck`)
                        .select(`stck.id, stck.series_no, stck.status, info.serial_no, info.model`)
                        .join({ table: 'tbl_stocks_info AS info', condition: `info.stocks_id = stck.id`, type: `LEFT` })
                        .condition(`WHERE stck.category_id= ${ctg[0].id} AND stck.brand_id= ${brd[0].id} 
                                            ${data.searchtxt !== '' ? `AND (stck.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%') ` : ''}
                                            ORDER BY stck.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;

        return(stcks);
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];
        let serial = {};
        let quantity = !data.quantity || data.quantity === '' || data.quantity === null;

        let series = await new Builder(`tbl_stocks`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();

        if(data.category === 'laptop' || data.category === 'system_unit' || data.category === 'monitor') {
            serial = await new Builder(`tbl_stocks AS stck`).select()
                            .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                            .condition(`WHERE stck.category_id= ${data.category_id} AND info.serial_no= '${(data.serial_no).toUpperCase()}'`)
                            .build();
        }

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(serial.rowCount > 0) { errors.push({ name: 'serial_no', message: 'Serial number already exist!' }); }

        if(!(errors.length > 0)) {
            let stck = (await new Builder(`tbl_stocks`)
                                .insert({ columns: `series_no, category_id, brand_id, quantity, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', ${data.category_id}, ${data.brand_id}, ${!quantity ? data.quantity : 1}, 'good', ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            switch(data.category) {
                case 'laptop': await new Laptop(data).save(stck.id); break;
                case 'system_unit': await new SystemUnit(data).save(stck.id); break;
                // case 'toner': await new Toner(data).save(stck.id); break;
                // case 'monitor': await new Monitor(data).save(stck.id); break;
                // case 'mouse': await new Mouse(data).save(stck.id); break;
                // case 'keyboard': await new Keyboard(data).save(stck.id); break;
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
                // case 'toner': resolve(await new Toner(data).update(stck)); break;
                // case 'monitor': resolve(await new Monitor(data).update(stck)); break;
                // case 'mouse': resolve(await new Mouse(data).update(stck)); break;
                // case 'keyboard': resolve(await new Keyboard(data).update(stck)); break;
            }
        });
    }

    dropdown = async data => {
        switch(data.type) {
            case 'per-brand': 
                let stocks = (await new Builder(`tbl_stocks AS stck`)
                                        .select(`stck.id, CASE WHEN info.serial_no IS NOT NULL AND info.serial_no <> '' THEN info.serial_no ELSE info.model END AS name`)
                                        .join({ table: `tbl_stocks_info AS info`, condition: `info.stock_id = stck.id`, type: `LEFT` })
                                        .join({ table: `tbl_stocks_issuance AS iss`, condition: `iss.stock_id = stck.id`, type: `LEFT` })
                                        .condition(`WHERE stck.category_id= ${data.category_id} AND stck.brand_id= ${data.brand_id ?? null} 
                                                            ${data.form === 'new' ? `AND stck.status= 1` : 
                                                                `AND ((iss.issued_to= ${data.issued_to} AND iss.stock_id= ${data.stock_id}) OR stck.status= 1)`}`)
                                        .build()).rows;
                                        
                return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }].concat(stocks);
            default: return [];
        }
    }
}

module.exports = Stocks;