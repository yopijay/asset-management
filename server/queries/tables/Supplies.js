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
                        .select(`supp.id, supp.series_no, supp.type, brd.name AS brand, info.quantity, supp.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, supp.date_created`)
                        .join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `supp.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `supp.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE supp.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR supp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY supp.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_supplies AS supp`)
                        .select(`supp.id, supp.series_no, supp.type, brd.name AS brand, info.quantity, supp.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, supp.date_created`)
                        .join({ table: `tbl_supplies_info AS info`, condition: `info.supplies_id = supp.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `supp.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `supp.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE supp.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR supp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''}
                                            ORDER BY supp.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        return data;
    }

    update = async data => {
        return data;
    }
}

module.exports = Supplies;