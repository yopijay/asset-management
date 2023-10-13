// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_stocks_issuance',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Issuance {
    series = async () => { return (await new Builder(`tbl_stocks_issuance`).select().build()).rows; }

    specific = async id => {
        return (await new Builder(`tbl_stocks_issuance AS iss`)
                        .select(`iss.id, iss.series_no, iss.remarks, iss.branch, stck.category_id, stck.brand_id, stck.id AS stock_id, stck.quantity, info.stock_id, info.serial_no, info.model, 
                                        info.type, info.condition, info.color, info.cpu, info.gpu, info.hdd, info.ssd, info.ram, info.operating_system, info.power_supply, info.warranty, 
                                        info.hdmi, info.vga, info.dvi, info.bluetooth, info.wifi, info.fingerprint, info.webcamera, info.backlit, info.date_received, info.panel, info.resolution, 
                                        ctg.name AS category, it.company_id, it.department_id, it.position_id, iss.issued_to`)
                        .join({ table: `tbl_stocks AS stck`, condition: `iss.stock_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_stocks_info AS info`, condition: `iss.stock_id = info.stock_id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS it`, condition: `iss.issued_to = it.user_id`, type: `LEFT` })
                        .condition(`WHERE iss.id= ${id}`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_stocks_issuance AS iss`)
                        .select(`iss.id, iss.series_no, iss.date_issued, CONCAT(it.lname, ', ', it.fname, ' ', it.mname) AS issued_to, 
                                        CONCAT(ib.lname, ', ', ib.fname, ' ', ib.mname) AS issued_by, info.serial_no, info.model`)
                        .join({ table: `tbl_stocks_info AS info`, condition: `iss.stock_id = info.stock_id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS it`, condition: `it.user_id = iss.issued_to`, type: `LEFT` })
                        .join({ table: `tbl_employee AS ib`, condition: `ib.user_id = iss.issued_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE iss.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.serial_no= '%${(data.searchtxt).toUpperCase()}%'
                                            OR info.model= '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_stocks_issuance AS iss`)
                        .select(`iss.id, iss.series_no, iss.date_issued, CONCAT(it.lname, ', ', it.fname, ' ', it.mname) AS issued_to, 
                                        CONCAT(ib.lname, ', ', ib.fname, ' ', ib.mname) AS issued_by, info.serial_no, info.model`)
                        .join({ table: `tbl_stocks_info AS info`, condition: `iss.stock_id = info.stock_id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS it`, condition: `it.user_id = iss.issued_to`, type: `LEFT` })
                        .join({ table: `tbl_employee AS ib`, condition: `ib.user_id = iss.issued_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE iss.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.serial_no= '%${(data.searchtxt).toUpperCase()}%'
                                            OR info.model= '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    logs = async data => { return []; }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_stocks_issuance`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }

        if(!(errors.length > 0)) {
            let iss = (await new Builder(`tbl_stocks_issuance`)
                            .insert({ columns: `series_no, stock_id, issued_to, issued_by, date_issued, remarks, created_by, date_created, branch`, 
                                            values: `'${(data.series_no).toUpperCase()}', ${data.stock_id}, ${data.issued_to}, ${user.id}, '${date}', 
                                                            ${data.remarks !== '' && data.remarks !== null ? `'${(data.remarks).toUpperCase()}'` : null}, ${user.id}, '${date}',
                                                            '${data.branch}'` })
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
        let iss = (await new Builder(`tbl_stocks_issuance`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];

        if(Global.compare(iss.stock_id, data.stock_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: 'stock_id', previous: iss.stock_id, 
                                    current: data.stock_id, action: 'update', user_id: user.id, date: date });

            await new Builder(`tbl_stocks`).update(`status= 1`).condition(`WHERE id= ${iss.stock_id}`).build();
            await new Builder(`tbl_stocks`).update(`status= 0`).condition(`WHERE id= ${data.stock_id}`).build();
        }

        if(Global.compare(iss.remarks, data.remarks)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_company', item_id: iss.id, field: 'remarks', previous: iss.remarks,
                current: data.remarks !== '' && data.remarks !== null ? (data.remarks).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        await new Builder(`tbl_stocks_issuance`)
            .update(`stock_id= ${data.stock_id}, remarks= ${data.remarks !== '' && data.remarks !== null ? `'${(data.remarks).toUpperCase()}'` : null}`)
            .condition(`WHERE id= ${data.id}`)
            .build();

        audits.forEach(data => Global.audit(data));
        return { result: 'success', message: 'Successfully updated!' }
    }
}

module.exports = Issuance;