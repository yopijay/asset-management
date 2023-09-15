// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

// Categories
const Laptop = require("./stocks/Laptop");

const audit = { series_no: '', table_name: 'tbl_stocks',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Stocks {
    series = async () => { return (await new Builder(`tbl_stocks`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_stocks`).select().condition(`WHERE id= ${id}`).build()).rows; }

    logs = async data => {
        return [];
    }

    list = async data => {
        return [];
    }

    search = async data => {
        return [];
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_stocks`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }

        if(!(errors.length > 0)) {
            let stck = (await new Builder(`tbl_stocks`)
                                .insert({ columns: `category_id, brand_id, quantity, status, created_by, date_created`, 
                                                values: `${data.category_id}, ${data.brand_id}, ${data.quantity}, 1, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            switch(data.category) {
                case 'laptop': await new Laptop().save(data, stck.id); break;
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
    }

    update = async data => {
        return [];
    }
}

module.exports = Stocks;