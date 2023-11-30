// Function
const Builder = require("../../../function/builder");
const Global = require("../../../function/global");

class Toner {
    constructor (data) { this.data = data; }

    save = async id => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stocks_id, model, type, condition`, 
                            values: `${id}, ${(this.data).model !== '' ? `'${((this.data).model).toUpperCase()}'` : null}, ${(this.data).type ? `'${(this.data).type}'` : null},
                                            ${(this.data).condition ? `'${(this.data).condition}'` : null}` })
            .build();
    }

    update = async prev => {
        let curr = this.data;
        let user = JSON.parse(atob((this.data).token));
        let date = Global.date(new Date());
        let audits = [];
        let errors = [];

        if(Global.compare(prev.brand_id, curr.brand_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'brand', previous: prev.brand_id,
                current: curr.brand_id, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.model, curr.model)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'model', previous: prev.model,
                current: curr.model !== '' && curr.model !== null ? (curr.model).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.type, curr.type)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'type', previous: prev.type,
                current: curr.type !== '' && curr.type !== null ? curr.type : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.condition, curr.condition)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'condition', previous: prev.condition,
                current: curr.condition !== '' && curr.condition !== null ? curr.condition : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.color, curr.color)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'color', previous: prev.color,
                current: curr.color !== '' && curr.color !== null ? (curr.color).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.quantity, curr.quantity)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'quantity', previous: prev.quantity,
                current: curr.quantity !== '' && curr.quantity !== null ? curr.quantity : null, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_stocks`).update(`brand_id= ${curr.brand_id}, updated_by= ${user.id}, date_updated= '${date}'`).condition(`WHERE id= ${curr.id}`).build();

            await new Builder(`tbl_stocks_info`)
                .update(`model= ${curr.model !== '' && curr.model !== null ? `'${(curr.model).toUpperCase()}'` : null}, type= ${curr.type !== '' && curr.type !== null ? `'${curr.type}'` : null},
                                condition= ${curr.condition !== '' && curr.condition !== null ? `'${curr.condition}'` : null},
                                color= ${curr.color !== '' && curr.color !== null ? `'${(curr.color).toUpperCase()}'` : null},
                                date_received= ${curr.date_received !== '' && curr.date_received !== null ? `'${curr.date_received}'` : null}`)
                .condition(`WHERE stock_id= ${curr.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Toner;