// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_assets_supplies_brand',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Assets {
    series = async () => { return (await new Builder(`tbl_assets`).select().build()).rows; }

    specific = async id => { return []; }
    
    logs = async data => { return []; }
    
    list = async data => { return []; }

    search = async data => { return []; }

    save = async data => {
        return data;
    }

    update = async data => {
        return data;
    }
}

module.exports = Assets;