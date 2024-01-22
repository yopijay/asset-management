// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_stocks_issuance',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Issuance {
    series = async () => { return (await new Builder(`tbl_stocks_issuance`).select().build()).rows; }

    specific = async id => {
        return (await new Builder(`tbl_stocks_issuance AS iss`)
                        .select(`iss.*, stck.category_id, stck.brand_id, ctg.name AS category`)
                        .join({ table: `tbl_stocks AS stck`, condition: `iss.item_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                        .condition(`WHERE iss.id= ${id}`)
                        .build()).rows;
    }

    excel = async data => {
        let columns = '';
        let searchtxt = '';
        let condition = '';

        switch(data.type) {
            case 'logs': 
                columns= `at.id AS "ID", at.series_no AS "Series no.", CONCAT(CASE WHEN info.serial_no IS NOT NULL AND info.serial_no <> '' THEN info.serial_no ELSE info.model END, 
                                    CASE WHEN ctg.name = 'TONER' THEN CONCAT(' - ', UPPER(info.condition)) ELSE '' END) AS "Item", at.field AS "Field affected", 
                                    UPPER(at.previous) AS "Previous", UPPER(at.current) AS "Current", UPPER(at.action) AS "Action", CONCAT(ubi.lname, ', ', ubi.fname) AS "Accountable",
                                    at.date AS "Date"`;
                searchtxt = `AND iss.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%'`;
        
                switch(JSON.parse(atob(data.token)).role) {
                    case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
                    case 'admin': condition = `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
                    default: 
                }
                
                return (await new Builder(`tbl_audit_trail AS at`)
                                .select(columns)
                                .join({ table: `tbl_stocks_issuance AS iss`, condition: `at.item_id = iss.id`, type: `LEFT` })
                                .join({ table: `tbl_stocks AS stck`, condition: `iss.item_id = stck.id`, type: `LEFT` })
                                .join({ table: `tbl_stocks_info AS info`, condition: `iss.item_id = info.stocks_id`, type: `LEFT` })
                                .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                                .condition(`WHERE at.table_name= 'tbl_stocks_issuance' ${condition} ${data.logssearchtxt !== '' ? searchtxt : ''}
                                                    ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                                .build()).rows;

            default: 
                columns = `iss.id AS "ID", iss.series_no AS "Series no.", CONCAT(it.lname, ', ', it.fname) AS "Issued to", CONCAT(ib.lname, ', ', ib.fname) AS "Issued by",
                                    UPPER(REPLACE(stck.branch, '_', ' ')) AS "Branch", ctg.name AS "Category", brd.name AS "Brand", info.serial_no AS "Serial no.", info.model AS "Model",
                                    iss.date_issued AS "Date issued", iss.note AS "Note"`;
                searchtxt = `(iss.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR ctg.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR it.lname LIKE '%${(data.searchtxt).toUpperCase()}%' OR it.fname LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                        OR it.employee_no LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR ib.lname LIKE '%${(data.searchtxt).toUpperCase()}%' OR ib.fname LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR it.employee_no LIKE '%${(data.searchtxt).toUpperCase()}%')`;

                switch(JSON.parse(atob(data.token)).role) {
                    case 'user': 
                        condition = `WHERE iss.issued_by= ${JSON.parse(atob(data.token)).id} ${data.searchtxt !== '' ? `AND ${searchtxt}` : '' } 
                                                ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                        break;
                    case 'admin':
                        condition = `WHERE (ib.head_id= ${JSON.parse(atob(data.token)).id} OR iss.issued_by= ${JSON.parse(atob(data.token)).id})
                                                ${data.searchtxt !== '' ? `AND ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                        break;
                    default: condition = `${data.searchtxt !== '' ? `WHERE ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                }

                return (await new Builder(`tbl_stocks_issuance AS iss`)
                                .select(columns)
                                .join({ table: `tbl_stocks AS stck`, condition: `iss.item_id = stck.id`, type: `LEFT` })
                                .join({ table: `tbl_stocks_info AS info`, condition: `info.stocks_id = stck.id`, type: `LEFT` })
                                .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                .join({ table: `tbl_brands AS brd`, condition: `stck.brand_id = brd.id`, type: `LEFT` })
                                .join({ table: `tbl_users_info AS ib`, condition: `iss.issued_by = ib.user_id`, type: `LEFT` })
                                .join({ table: `tbl_users_info AS it`, condition: `iss.issued_to = it.user_id`, type: `LEFT` })
                                .condition(condition)
                                .build()).rows;
        }
    }

    list = async data => {
        const columns = `iss.id, iss.series_no, ctg.name AS category, info.serial_no, info.model, CONCAT(it.lname, ', ', it.fname) AS issued_to, 
                                        CONCAT(ib.lname, ', ', ib.fname) AS issued_by, it.employee_no AS it_employee_no, ib.employee_no AS ib_employee_no, 
                                        iss.date_issued, iss.status`;
        const searchtxt = `(iss.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR ctg.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR it.lname LIKE '%${(data.searchtxt).toUpperCase()}%' OR it.fname LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                        OR it.employee_no LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR ib.lname LIKE '%${(data.searchtxt).toUpperCase()}%' OR ib.fname LIKE '%${(data.searchtxt).toUpperCase()}%'
                                        OR it.employee_no LIKE '%${(data.searchtxt).toUpperCase()}%')`;
        let condition = '';

        switch(JSON.parse(atob(data.token)).role) {
            case 'user': 
                condition = `WHERE iss.issued_by= ${JSON.parse(atob(data.token)).id} ${data.searchtxt !== '' ? `AND ${searchtxt}` : '' } 
                                        ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                break;
            case 'admin':
                condition = `WHERE (ib.head_id= ${JSON.parse(atob(data.token)).id} OR iss.issued_by= ${JSON.parse(atob(data.token)).id})
                                        ${data.searchtxt !== '' ? `AND ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                break;
            default: condition = `${data.searchtxt !== '' ? `WHERE ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
        }

        return (await new Builder(`tbl_stocks_issuance AS iss`)
                        .select(columns)
                        .join({ table: `tbl_stocks AS stck`, condition: `iss.item_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_stocks_info AS info`, condition: `iss.item_id = info.stocks_id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS it`, condition: `iss.issued_to = it.user_id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS ib`, condition: `iss.issued_by = ib.user_id`, type: `LEFT` })
                        .condition(condition)
                        .build()).rows;
    }

    logs = async data => {
        let condition = '';
        let search = `AND iss.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%'`;

        switch(JSON.parse(atob(data.token)).role) {
            case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
            case 'admin': condition = `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
            default: 
        }

        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action,
                                        at.user_id, at.date, iss.series_no AS iss_series, info.serial_no, info.model, CONCAT(ubi.lname, ', ', ubi.fname) AS ub_name`)
                        .join({ table: `tbl_stocks_issuance AS iss`, condition: `at.item_id = iss.id`, type: `LEFT` })
                        .join({ table: `tbl_stocks_info AS info`, condition: `iss.item_id = info.stocks_id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_stocks_issuance' ${condition} 
                                            ${data.logssearchtxt !== '' ? search : ''}
                                            ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_stocks_issuance`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }

        if(!(errors.length > 0)) {
            let stck = (await new Builder(`tbl_stocks`).select(`id, quantity`).condition(`WHERE id= ${data.item_id}`).build()).rows[0];
            let iss = (await new Builder(`tbl_stocks_issuance`)
                            .insert({ columns: `series_no, issued_to, issued_by, item_id, date_issued, note, status, created_by, date_created, branch`, 
                                            values: `'${(data.series_no).toUpperCase()}', ${data.issued_to}, ${data.issued_by}, ${data.item_id}, '${data.date_issued}', 
                                                            ${data.note !== null && data.note !== '' ? `'${(data.note).toUpperCase()}'` : null}, 'pending', ${user.id}, '${date}', '${data.branch}'` })
                            .condition(`RETURNING id`)
                            .build()).rows[0];

            await new Builder(`tbl_stocks`).update(`quantity= ${parseInt(stck.quantity) - 1}`).condition(`WHERE id= ${data.item_id}`).build();

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
        
        if(Global.compare(iss.issued_to, data.issued_to)) {
            let curr = (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${data.issued_to}`).build()).rows[0];
            let prev = (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${iss.issued_to}`).build()).rows[0];
            
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: 'issued to', previous: prev.name, 
                                current: curr.name, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(iss.issued_by, data.issued_by)) {
            let curr = (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${data.issued_by}`).build()).rows[0];
            let prev = (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${iss.issued_by}`).build()).rows[0];

            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: 'issued by', previous: prev.name, 
                                current: curr.name, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(iss.issued_date, data.issued_date)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: 'issued date', previous: iss.issued_date, 
                                current: `'${data.issued_date}'`, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(iss.note, data.note)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: 'note', previous: iss.note, 
                                current: data.note !== null && data.note !== '' ? data.note : null, action: 'update', user_id: user.id, date: date });
        }

        await new Builder(`tbl_stocks_issuance`)
            .update(`issued_to= ${data.issued_to}, issued_by= ${data.issued_by}, date_issued= '${data.date_issued}', 
                            note= ${data.note !== '' && data.note !== null ? `'${(data.note).toUpperCase()}'` : null}`)
            .condition(`WHERE id= ${data.id}`)
            .build();

        audits.forEach(data => Global.audit(data));
        return { result: 'success', message: 'Successfully updated!' }
    }
}

module.exports = Issuance;