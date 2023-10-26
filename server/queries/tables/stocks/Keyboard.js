// Function
const Builder = require("../../../function/builder");
const Global = require("../../../function/global");

class Keyboard {
    constructor (data) { this.data = data; }

    save = async id => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, serial_no, model, type, warranty, date_received, no_of_keys`, 
                            values: `${id}, ${(this.data).serial_no !== '' ? `'${((this.data).serial_no).toUpperCase()}'` : null}, ${(this.data).model !== '' ? `'${((this.data).model).toUpperCase()}'` : null},
                                            ${(this.data).type ? `'${(this.data).type}'` : null}, ${(this.data).warranty !== '' ? `'${((this.data).warranty).toUpperCase()}'` : null}, 
                                            ${(this.data).backlit ? 1 : 0}, ${(this.data).date_received !== '' ? `'${(this.data).date_received}'` : null}, 
                                            ${(this.data).no_of_keys !== '' ? (this.data).no_of_keys : null}` })
            .build();
    }

    update = async prev => {
        let curr = this.data;
        let user = JSON.parse(atob((this.data).token));
        let date = Global.date(new Date());
        let audits = [];
        let errors = [];

        let serial = await new Builder(`tbl_stocks_info`).select().condition(`WHERE serial_no= '${(curr.serial_no).toUpperCase()}'`).build();

        if(Global.compare(prev.brand_id, curr.brand_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'brand', previous: prev.brand_id,
                current: curr.brand_id, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.serial_no, curr.serial_no)) {
            if(!(serial.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'serial_no', previous: prev.serial_no,
                    current: (curr.serial_no).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'serial_no', message: 'Serial number already exist!' }); }
        }

        if(Global.compare(prev.model, curr.model)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'model', previous: prev.model,
                current: curr.model !== '' && curr.model !== null ? (curr.model).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.warranty, curr.warranty)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'warranty', previous: prev.warranty,
                current: curr.warranty !== '' && curr.warranty !== null ? (curr.warranty).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.type, curr.type)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'type', previous: prev.type,
                current: curr.type !== '' && curr.type !== null ? curr.type : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.no_of_keys, curr.no_of_keys)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'no_of_keys', previous: prev.no_of_keys,
                current: curr.no_of_keys !== '' && curr.no_of_keys !== null ? curr.no_of_keys : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.date_received, curr.date_received)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'date_received', previous: prev.date_received,
                current: curr.date_received !== '' && curr.date_received !== null ? curr.date_received : null, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.backlit, curr.backlit ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'backlit', previous: prev.backlit,
                current: curr.backlit ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_stocks`).update(`brand_id= ${curr.brand_id}, updated_by= ${user.id}, date_updated= '${date}'`).condition(`WHERE id= ${curr.id}`).build();

            await new Builder(`tbl_stocks_info`)
                .update(`serial_no= '${curr.serial_no}', model= ${curr.model !== '' && curr.model !== null ? `'${(curr.model).toUpperCase()}'` : null},
                                type= ${curr.type !== '' && curr.type !== null ? `'${curr.type}'` : null},
                                warranty= ${curr.warranty !== '' && curr.warranty !== null ? `'${(curr.warranty).toUpperCase()}'` : null}, backlit= ${curr.backlit ? 1 : 0},
                                date_received= ${curr.date_received !== '' && curr.date_received !== null ? `'${curr.date_received}'` : null},
                                no_of_keys= ${curr.no_of_keys !== '' && curr.no_of_keys !== null ? curr.no_of_keys : null}`)
                .condition(`WHERE stock_id= ${curr.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Keyboard;