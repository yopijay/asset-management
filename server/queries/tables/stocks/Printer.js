// Function
const Builder = require("../../../function/builder");
const Global = require("../../../function/global");

class Printer {
    constructor (data) { this.data = data; }

    save = async id => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stocks_id, serial_no, model, type`, 
                            values: `${id}, ${(this.data).serial_no !== '' ? `'${((this.data).serial_no).toUpperCase()}'` : null}, ${(this.data).model !== '' ? `'${((this.data).model).toUpperCase()}'` : null}, 
                                            ${(this.data).type ? `'${(this.data).type}'` : null}` })
            .build()
    }

    update = async prev => {
        let curr = this.data;
        let user = JSON.parse(atob((this.data).token));
        let date = Global.date(new Date());
        let audits = [];
        let errors = [];

        let serial = await new Builder(`tbl_stocks_info`).select().condition(`WHERE serial_no= '${(curr.serial_no).toUpperCase()}'`).build();
        let model = await new Builder(`tbl_stocks AS stck`).select()
                                .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                .condition(`WHERE stck.category_id= ${curr.category_id} AND info.model= '${(curr.model).toUpperCase()}' AND info.type= '${curr.type}'`)
                                .build();
        
        if(Global.compare(prev.serial_no, curr.serial_no)) {
            if(!(serial.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'Serial no.', previous: prev.serial_no,
                    current: (curr.serial_no).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'serial_no', message: 'Serial number already exist!' }); }
        }

        if(Global.compare(prev.brand_id, curr.brand_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'Brand', previous: prev.brand_id,
                current: curr.brand_id, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.model, curr.model)) {
            if(!(model.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'Model', previous: prev.model,
                    current: curr.model !== '' && curr.model !== null ? (curr.model).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'model', message: 'Model already exist!' }); }
        }

        if(Global.compare(prev.type, curr.type)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'Type', previous: prev.type,
                current: curr.type !== '' && curr.type !== null ? curr.type : null, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_stocks`)
                .update(`brand_id= ${curr.brand_id}, updated_by= ${user.id}, date_updated= '${date}', branch= '${curr.branch}'`)
                .condition(`WHERE id= ${curr.id}`)
                .build();

            await new Builder(`tbl_stocks_info`)
                .update(`serial_no= ${curr.serial_no !== '' && curr.serial_no !== null ? `'${(curr.serial_no).toUpperCase()}'` : null}, 
                                model= ${curr.model !== '' && curr.model !== null ? `'${(curr.model).toUpperCase()}'` : null}, type= ${curr.type !== '' && curr.type !== null ? `'${curr.type}'` : null}`)
                .condition(`WHERE stocks_id= ${curr.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Printer;