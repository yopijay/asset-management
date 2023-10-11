// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_stocks_issuance',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Issuance {
    series = async () => { return (await new Builder(`tbl_stocks_issuance`).select().build()).rows; }

    specific = async id => { console.log(id); }

    list = async data => {
        return (await new Builder(`tbl_stocks_issuance AS iss`)
                        .select(`iss.id, iss.series_no, iss.date_issued, CONCAT(it.lname, ', ', it.fname, ' ', it.mname) AS issued_to, 
                                        CONCAT(ib.lname, ', ', ib.fname, ' ', ib.mname) AS issued_by, info.serial_no, info.model, iss.status`)
                        .join({ table: `tbl_stocks_info AS info`, condition: `iss.stock_id = info.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS it`, condition: `it.user_id = iss.issued_to`, type: `LEFT` })
                        .join({ table: `tbl_employee AS ib`, condition: `ib.user_id = iss.issued_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE iss.series_no LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => { return []; }
    logs = async data => { return []; }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_stocks_issuance`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }

        if(!(errors.length > 0)) {
            let iss = (await new Builder(`tbl_stocks_issuance`)
                            .insert({ columns: `series_no, stock_id, issued_to, issued_by, date_issued, remarks, status, created_by, date_created`, 
                                            values: `'${(data.series_no).toUpperCase()}', ${data.stock_id}, ${data.issued_to}, ${user.id}, '${date}', 
                                                            ${data.remarks !== '' && data.remarks !== null ? `'${(data.remarks).toUpperCase()}'` : null}, 1, ${user.id}, '${date}'` })
                            .condition(`RETURNING id`)
                            .build()).rows[0];

            await new Builder(`tbl_stocks`).update(`status= 0`).condition(`WHERE id= ${data.stock_id}`).build();

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = iss.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        console.log(data);
    }
}

module.exports = Issuance;