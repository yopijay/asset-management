// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

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
        return [];
    }

    update = async data => {
        return [];
    }
}

module.exports = Stocks;