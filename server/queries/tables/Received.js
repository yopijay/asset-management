// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_stocks_issuance',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Received {
    specific = async id => {
        return (await new Builder(`tbl_stocks_issuance AS rec`)
                        .select(`rec.*, stck.category_id, stck.brand_id, ctg.name AS category`)
                        .join({ table: `tbl_stocks AS stck`, condition: `rec.item_id = stck.id`, type: `LEFT` })
                        .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                        .condition(`WHERE rec.id= ${id}`)
                        .build()).rows;
    }

    scan = async data => {
        let user = JSON.parse(atob(data.token));
        let stock = await new Builder(`tbl_stocks_issuance`).select('id, status').condition(`WHERE item_id= ${data.id}${user.role === 'user' ? ` AND issued_to= ${user.id}` : ''}`).build();

        if(stock.rowCount > 0) {
            switch(stock.rows[0].status) {
                case 'pending': return { result: 'success', id: stock.rows[0].id };
                default: return { result: 'received', message: 'Asset already received!' }
            }
        }
        else { return { result: 'error', message: 'Item is not issued to you!' } }
    }

    list = async data => {
        let user = JSON.parse(atob(data.token));

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

        switch(user.role) {
            case 'user':
                condition = `WHERE iss.issued_to= ${user.id}
                                        ${data.category_id !== 'all' ? ` AND stck.category_id= ${data.category_id}` : ''}
                                        ${data.searchtxt !== '' ? ` AND ${searchtxt}` : '' } 
                                        ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                break;
            case 'admin':
                condition = `WHERE (ib.head_id= ${user.id} OR iss.issued_to= ${user.id})
                                        ${data.category_id !== 'all' ? ` AND stck.category_id= ${data.category_id}` : ''}
                                        ${data.searchtxt !== '' ? ` AND ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                break;
            default: 
                condition = `${data.category_id !== 'all' || data.searchtxt !== '' ? 'WHERE' : ''} ${data.category_id !== 'all' ? `stck.category_id= ${data.category_id}` : ''}
                                        ${data.category_id !== 'all' && data.searchtxt !== '' ? 'AND' : ''}
                                        ${data.searchtxt !== '' ? ` ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
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

    excel = async data => {
        let user = JSON.parse(atob(data.token));
        const today = `${parseInt((new Date()).getMonth()) + 1}${(new Date()).getDate()}${(new Date()).getFullYear()}`;
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
                
                return [{
                    sheets: [{
                        sheetname: 'Logs',
                        data: (await new Builder(`tbl_audit_trail AS at`)
                                    .select(columns)
                                    .join({ table: `tbl_stocks_issuance AS iss`, condition: `at.item_id = iss.id`, type: `LEFT` })
                                    .join({ table: `tbl_stocks AS stck`, condition: `iss.item_id = stck.id`, type: `LEFT` })
                                    .join({ table: `tbl_stocks_info AS info`, condition: `iss.item_id = info.stocks_id`, type: `LEFT` })
                                    .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                                    .condition(`WHERE at.table_name= 'tbl_stocks_issuance' ${condition} ${data.logssearchtxt !== '' ? searchtxt : ''}
                                                        ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                                    .build()).rows
                    }],
                    filename: `Received Logs-${today}`
                }];

            default:
                columns = `iss.id AS "ID" , iss.series_no AS "Series no.", ctg.name AS "Category", info.serial_no AS "Serial no.", info.model AS "Model",
                                    CONCAT(ib.lname, ', ', ib.fname) AS "Issued by", ib.employee_no AS "Employee no.", iss.date_issued AS "Date issued", UPPER(iss.status) AS "Status"`;
                searchtxt = `(iss.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR ctg.name LIKE '%${(data.searchtxt).toUpperCase()}%'
                                    OR info.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.model LIKE '%${(data.searchtxt).toUpperCase()}%'
                                    OR ib.lname LIKE '%${(data.searchtxt).toUpperCase()}%' OR ib.fname LIKE '%${(data.searchtxt).toUpperCase()}%'
                                    OR it.employee_no LIKE '%${(data.searchtxt).toUpperCase()}%')`;
                condition = '';

                switch(user.role) {
                    case 'user':
                        condition = `WHERE iss.issued_to= ${user.id}
                                                ${data.category_id !== 'all' ? ` AND stck.category_id= ${data.category_id}` : ''}
                                                ${data.searchtxt !== '' ? ` AND ${searchtxt}` : '' } 
                                                ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                        break;
                    case 'admin':
                        condition = `WHERE (ib.head_id= ${user.id} OR iss.issued_to= ${user.id})
                                                ${data.category_id !== 'all' ? ` AND stck.category_id= ${data.category_id}` : ''}
                                                ${data.searchtxt !== '' ? ` AND ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                        break;
                    default: 
                        condition = `${data.category_id !== 'all' || data.searchtxt !== '' ? 'WHERE' : ''} ${data.category_id !== 'all' ? `stck.category_id= ${data.category_id}` : ''}
                                                ${data.category_id !== 'all' && data.searchtxt !== '' ? 'AND' : ''}
                                                ${data.searchtxt !== '' ? ` ${searchtxt}` : '' } ORDER BY iss.${data.orderby} ${(data.sort).toUpperCase()}`;
                }

                return [{
                    sheets: [{
                        sheetname: 'All',
                        data: (await new Builder(`tbl_stocks_issuance AS iss`)
                                    .select(columns)
                                    .join({ table: `tbl_stocks AS stck`, condition: `iss.item_id = stck.id`, type: `LEFT` })
                                    .join({ table: `tbl_stocks_info AS info`, condition: `iss.item_id = info.stocks_id`, type: `LEFT` })
                                    .join({ table: `tbl_category AS ctg`, condition: `stck.category_id = ctg.id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS ib`, condition: `iss.issued_by = ib.user_id`, type: `LEFT` })
                                    .condition(condition)
                                    .build()).rows
                    }],
                    filename: `Received-${today}`
                }];
        }
    }

    update = async data => {
        let user = JSON.parse(atob(data.token));
        let date = Global.date(new Date());
        let audits = [];
        let iss = (await new Builder(`tbl_stocks_issuance`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];

        if(Global.compare(iss.status, data.status)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: 'status', previous: iss.status, 
                                current: data.status, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(iss[`${data.status}_by`], user.id)) {
            let curr = (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${user.id}`).build()).rows[0];
            let prev = iss[`${data.status}_by`] !== null ? (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${iss[`${data.status}_by`]}`).build()).rows[0] : null;
            
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: `${data.status}_by`, previous: prev !== null ? prev.name : null, 
                                current: curr.name, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(iss[`date_${data.status}`], date)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks_issuance', item_id: iss.id, field: `date_${data.status}`, 
                                    previous: iss[`date_${data.status}`] !== null ? iss[`date_${data.status}`] : null, 
                                    current: date, action: 'update', user_id: user.id, date: date });
        }

        if(data.status === 'returned') { await new Builder(`tbl_stocks`).update(`quantity= 1`).condition(`WHERE id= ${iss.item_id}`).build(); }

        await new Builder(`tbl_stocks_issuance`).update(`date_${data.status}= '${date}', ${data.status}_by= ${user.id}, status= '${data.status}'`).condition(`WHERE id= ${data.id}`).build();
        audits.forEach(data => Global.audit(data));

        return { result: 'success', message: `Item ${data.status}!` }
    }
}

module.exports = Received;