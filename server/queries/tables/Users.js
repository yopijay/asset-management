// Libraries
const encrypt = require('bcrypt');

// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');
const { generate } = require('../../function/token');

const audit = { series_no: '', table_name: 'tbl_users',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Users {
    series = async () =>{ return (await new Builder(`tbl_users`).select().except(`WHERE id= 1`).build()).rows; }
    specific = async id => { 
        let disabled = {};
        let data = (await new Builder(`tbl_users AS usr`)
                            .select(`usr.*, info.*, perm.permission`)
                            .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                            .join({ table: `tbl_users_permission AS perm`, condition: `perm.user_id = usr.id`, type: `LEFT` })
                            .condition(`WHERE usr.id= ${id}`)
                            .build()).rows;

        if(data[0]) {
            for(let key1 in JSON.parse(data[0].permission)) {
                for(let key2 in JSON.parse(data[0].permission)[key1]) {
                    disabled[key2] = !JSON.parse(data[0].permission)[key1][key2].list
                }
            }
    
            data[0]['disabled'] = disabled;
        }
        return data;
    }

    dashboard = async data => {
        const { id, user_level, branch } = data;

        let qry = ``;
        let users = {};
        const brnch = [ 'quezon_ave', 'sto_domingo', 'manila', 'cavite' ];
        const cmp = (await new Builder(`tbl_company`).select().condition(`WHERE status = 1`).build()).rows;

        switch(user_level) {
            case 'superadmin': 
                qry = `(usr.id != 1 OR usr.user_level != 'superadmin') AND (info.employment_status != 'resigned' OR usr.status != 0)`;

                users['total'] = (await new Builder(`tbl_users AS usr`).select().join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` }).condition(`WHERE ${qry}`).build()).rowCount;

                users['perbranch'] = [];
                for(let count = 0; count < brnch.length; count++) {
                    (users['perbranch'])
                        .push({ branch: brnch[count], 
                                        total: (await new Builder(`tbl_users AS usr`).select()
                                                    .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })                
                                                    .condition(`WHERE ${qry} AND info.branch= '${brnch[count]}'`).build()).rowCount });
                }

                users['percompany'] = [];
                for(let count = 0; count < cmp.length; count++) {
                    (users['percompany'])
                        .push({ company: cmp[count].name, 
                                        total: (await new Builder(`tbl_users AS usr`).select()
                                                        .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                                                        .condition(`WHERE ${qry} AND info.company_id= ${cmp[count].id}`).build()).rowCount });
                }
                break;
            default:
                    qry = `info.branch= '${branch}' AND (usr.id != 1 OR usr.user_level != 'superadmin') AND (info.employment_status != 'resigned' OR usr.status = 0)`;

                    users['total'] = (await new Builder(`tbl_users AS usr`).select().join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: ` LEFT` }).condition(`WHERE ${qry}`).build()).rowCount;
                    users['girls'] = (await new Builder(`tbl_users AS usr`).select().join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` }).condition(`WHERE ${qry} AND info.gender= 'female'`).build()).rowCount;
                    users['boys'] = (await new Builder(`tbl_users AS usr`).select().join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` }).condition(`WHERE ${qry} AND info.gender= 'male'`).build()).rowCount;

                    users['percompany'] = [];
                    for(let count = 0; count < cmp.length; count++) {
                        (users['percompany'])
                            .push({ company: cmp[count].name, 
                                            total: (await new Builder(`tbl_users AS usr`).select()
                                                            .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                                                            .condition(`WHERE ${qry} AND info.company_id= ${cmp[count].id}`).build()).rowCount });
                    }
        }

        return users;
    }

    excel = async data => {
        const today = `${parseInt((new Date()).getMonth()) + 1}${(new Date()).getDate()}${(new Date()).getFullYear()}`;
        let columns = '';
        let condition = '';

        switch(data.type) {
            case 'logs':
                columns = `at.id AS "ID", at.series_no AS "Series no.", CONCAT(info.lname, ', ', info.fname) AS "Employee name", at.field AS "Field affected", 
                                    LEFT(UPPER(at.previous), 100) AS "Previous", LEFT(UPPER(at.current), 100) AS "Current", 
                                    UPPER(at.action) AS "Action", CONCAT(ubi.lname, ', ', ubi.fname) AS "Accountable", at.date AS "Date"`;
                searchtxt = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR info.employee_no LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                        OR info.fname LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR info.lname LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                        OR usr.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR at.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%')`;

                switch(JSON.parse(atob(data.token)).role) {
                    case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
                    case 'admin': condition= `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
                    default:
                }

                return [{
                    sheets: [{
                        sheetname: 'Logs',
                        data: (await new Builder(`tbl_audit_trail AS at`)
                                    .select(columns)
                                    .join({ table: `tbl_users AS usr`, condition: `at.item_id = usr.id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS info`, condition: `at.item_id = info.user_id`, type: `LEFT` })
                                    .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                                    .condition(`WHERE at.table_name= 'tbl_users' ${condition} ${data.logssearchtxt !== '' ? search : ''}
                                                        ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                                    .build()).rows
                    }],
                    filename: `Employee Logs-${today}`
                }];

            default:
                let xlsx = [];
                let emp = {};

                let type = ['employee', 'permission'];
                let company = (await new Builder(`tbl_company`).select(`id, name`).build()).rows;
                let route = ((await new Builder(`tbl_routes`).select(`id, route`).condition(`WHERE status= 1`).build()).rows).concat({ id: 0, route: 'SETUP' });
                let permission = (await new Builder(`tbl_users_permission AS prm`)
                                                .select(`prm.*, CONCAT(info.lname, ', ', info.fname) AS name`)
                                                .join({ table: `tbl_users_info AS info`, condition: `prm.user_id = info.user_id`, type: `LEFT` })
                                                .build()).rows;

                for(let tp = 0; tp < type.length; tp++) {
                    switch(type[tp]) {
                        case 'permission':
                            
                            for(let rts = 0; rts < route.length; rts++) {
                                let _sheets = [];
                                let modules = (await new Builder(`tbl_modules`).select().condition(`WHERE route_id= ${route[rts].id}`).build()).rows;

                                if(route[rts].id === 0) {
                                    ['users', 'route', 'modules'].forEach(mdl => {
                                        let _data = [];

                                        permission.forEach(prm => {
                                            if(prm.permission !== null) {
                                                let prms = JSON.parse(prm.permission);

                                                if(mdl === 'users') {
                                                    _data.push({
                                                        "ID": prm.user_id,
                                                        "Employee name": prm.name,
                                                        "List": prms['setup'][mdl].list &&
                                                                    prms['setup'][mdl].list !== null ? '/' : 'X',
                                                        "Create": prms['setup'][mdl].create &&
                                                                    prms['setup'][mdl].create !== null ? '/' : 'X',
                                                        "Update": prms['setup'][mdl].update &&
                                                                    prms['setup'][mdl].update !== null ? '/' : 'X',
                                                        "View": prms['setup'][mdl].view &&
                                                                    prms['setup'][mdl].view !== null ? '/' : 'X',
                                                        "Logs": prms['setup'][mdl].logs &&
                                                                    prms['setup'][mdl].logs !== null ? '/' : 'X',
                                                        "Export": prms['setup'][mdl].export &&
                                                                    prms['setup'][mdl].export !== null ? '/' : 'X',
                                                        "Permission": prms['setup'][mdl].permission &&
                                                                    prms['setup'][mdl].permission !== null ? '/' : 'X'
                                                    });
                                                }
                                                else {
                                                    _data.push({
                                                        "ID": prm.user_id,
                                                        "Employee name": prm.name,
                                                        "List": prms['setup'][mdl].list &&
                                                                    prms['setup'][mdl].list !== null ? '/' : 'X',
                                                        "Create": prms['setup'][mdl].create &&
                                                                    prms['setup'][mdl].create !== null ? '/' : 'X',
                                                        "Update": prms['setup'][mdl].update &&
                                                                    prms['setup'][mdl].update !== null ? '/' : 'X',
                                                        "View": prms['setup'][mdl].view &&
                                                                    prms['setup'][mdl].view !== null ? '/' : 'X',
                                                        "Logs": prms['setup'][mdl].logs &&
                                                                    prms['setup'][mdl].logs !== null ? '/' : 'X',
                                                        "Export": prms['setup'][mdl].export &&
                                                                    prms['setup'][mdl].export !== null ? '/' : 'X'
                                                    });
                                                }
                                            }
                                        });

                                        _sheets.push({ sheetname: (mdl).toUpperCase(), data: _data });
                                    });
                                }
                                else {
                                    for(let mdl = 0; mdl < modules.length; mdl++) {
                                        let _data = [];
    
                                        permission.forEach(prm => {
                                            if(prm.permission !== null) {
                                                let prms = JSON.parse(prm.permission);
    
                                                _data.push({
                                                    "ID": prm.user_id,
                                                    "Employee name": prm.name,
                                                    "List": prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].list &&
                                                                prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].list !== null ? '/' : 'X',
                                                    "Create": prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].create &&
                                                                prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].create !== null ? '/' : 'X',
                                                    "Update": prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].update &&
                                                                prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].update !== null ? '/' : 'X',
                                                    "View": prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].view &&
                                                                prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].view !== null ? '/' : 'X',
                                                    "Logs": prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].logs &&
                                                                prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].logs !== null ? '/' : 'X',
                                                    "Export": prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].export &&
                                                                prms[(route[rts].route).toLowerCase()][(modules[mdl].name).toLowerCase()].export !== null ? '/' : 'X'
                                                });
                                            }
                                        });
    
                                        _sheets.push({ sheetname: modules[mdl].name, data: _data });
                                    }
                                }

                                xlsx.push({
                                    filename: `Permission (${route[rts].route})-${today}`,
                                    sheets: _sheets
                                });
                            }

                            break;

                        default:
                            columns = `usr.id AS "ID", usr.series_no AS "Series no.", info.employee_no AS "Employee no.", info.rfid AS "RFID", usr.email AS "Email", 
                                                cmp.name AS "Company", dpt.name AS "Department", pst.name AS "Position", CONCAT(head.lname, ', ', head.fname) AS "Immediate supervisor",
                                                info.lname AS "Last name", info.fname AS "First name", info.mname AS "Middle name", info.address AS "Address", UPPER(info.gender) AS "Gender", 
                                                UPPER(usr.user_level) AS "User level", UPPER(info.employment_status) AS "Employment status",
                                                CASE WHEN usr.status > 0 THEN 'ACTIVE' ELSE 'INACTIVE' END AS "Status"`;
                            emp['filename'] = `Employee List-${today}`;
                            emp['sheets'] = [];

                            emp['sheets']
                                .push({ sheetname: 'ALL',
                                            data: (await new Builder(`tbl_users AS usr`)
                                                        .select(columns)
                                                        .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                                                        .join({ table: `tbl_company AS cmp`, condition: `info.company_id = cmp.id`, type: `LEFT` })
                                                        .join({ table: `tbl_department AS dpt`, condition: `info.department_id = dpt.id`, type: `LEFT` })
                                                        .join({ table: `tbl_position AS pst`, condition: `info.position_id = pst.id`, type: `LEFT` })
                                                        .join({ table: `tbl_users_info AS head`, condition: `info.head_id = head.user_id`, type: `LEFT` })
                                                        .condition(`WHERE ${JSON.parse(atob(data.token)).role !== 'superadmin' ? `info.branch= '${JSON.parse(atob(data.token)).branch}' AND` : ''} 
                                                                            ${data.searchtxt !== '' ? `(info.fname LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.lname LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                                            OR info.employee_no LIKE '%${data.searchtxt}%') AND ` : ''}
                                                                            (usr.id != 1 AND usr.id != ${JSON.parse(atob(data.token)).id}) ORDER BY ${data.orderby} ${(data.sort).toUpperCase()}`)
                                                        .build()).rows });

                            if(data.searchtxt === '') {
                                for(let count = 0; count < company.length; count++) {
                                    emp['sheets']
                                        .push({ sheetname: company[count].name,
                                                    data: (await new Builder(`tbl_users AS usr`)
                                                                .select(columns)
                                                                .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                                                                .join({ table: `tbl_company AS cmp`, condition: `info.company_id = cmp.id`, type: `LEFT` })
                                                                .join({ table: `tbl_department AS dpt`, condition: `info.department_id = dpt.id`, type: `LEFT` })
                                                                .join({ table: `tbl_position AS pst`, condition: `info.position_id = pst.id`, type: `LEFT` })
                                                                .join({ table: `tbl_users_info AS head`, condition: `info.head_id = head.user_id`, type: `LEFT` })
                                                                .condition(`WHERE info.company_id= ${company[count].id}
                                                                                    ${JSON.parse(atob(data.token)).role !== 'superadmin' ? `AND info.branch= '${JSON.parse(atob(data.token)).branch}' AND` : ''}
                                                                                    ${data.searchtxt !== '' ? `(info.fname LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.lname LIKE '%${(data.searchtxt).toUpperCase()}%'
                                                                                    OR info.employee_no LIKE '%${data.searchtxt}%') AND ` : ''} (usr.id != 1 AND usr.id != ${JSON.parse(atob(data.token)).id}) 
                                                                                    ORDER BY ${data.orderby} ${(data.sort).toUpperCase()}`)
                                                                .build()).rows })
                                }
                            }
                            xlsx.push(emp);
                        }
                }
            
            return xlsx;
        }
    }
    
    logs = async data => {
        let condition = '';
        let search = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR info.employee_no LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                OR info.fname LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR info.lname LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                OR usr.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR at.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%')`;

        switch(JSON.parse(atob(data.token)).role) {
            case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
            case 'admin': condition= `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
            default:
        }

        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, 
                                    at.date, usr.series_no AS usr_series, info.employee_no, CONCAT(ubi.lname, ', ', ubi.fname) AS ub_name`)
                        .join({ table: `tbl_users AS usr`, condition: `at.item_id = usr.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS info`, condition: `at.item_id = info.user_id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_users' ${condition} ${data.logssearchtxt !== '' ? search : ''}
                                            ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                        .build()).rows;
    }

    login = async data => {
        let user = await new Builder(`tbl_users AS usr`)
                            .select()
                            .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                            .condition(`WHERE email= '${data.email}'`)
                            .build();

        if(user.rowCount > 0) {
            if(user.rows[0].status === 1) { 
                if(await encrypt.compare(data.password, user.rows[0].password)) { return { result: 'success', token: generate(user.rows[0]), timeout: 3600 } }
                else { return { result: 'error', error: [{ name: 'password', message: 'Incorrect password or email!' }] } }
            }
            else { return { result: 'error', error: [{ name: 'email', message: 'This email is deactivated, please contact the admins to reactivate it again!' }] } }
        }
        else { return { result: 'error', error: [{ name: 'email', message: 'Email doesn`t exist!' }] } }
    }
 
    profile = async id => {
        return (await new Builder(`tbl_users AS usr`)
                        .select(`usr.id, usr.email, usr.user_level, info.employee_no, info.rfid, info.fname, info.mname, info.lname, info.employment_status, info.profile, perm.permission, info.branch,
                                        info.address, info.gender`)
                        .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                        .join({ table: `tbl_users_permission AS perm`, condition: `perm.user_id = usr.id`, type: `LEFT` })
                        .condition(`WHERE usr.id= ${id}`)
                        .build()).rows;
    }

    list = async data => {
        let user = JSON.parse(atob(data.token));
        let branch = (await new Builder(`tbl_users_info`).select(`branch`).condition(`WHERE user_id= ${user.id}`).build()).rows[0].branch;

        return (await new Builder(`tbl_users AS usr`)
                        .select(`usr.id, usr.email, usr.user_level, usr.status, info.employee_no, info.rfid, info.fname, info.mname, info.lname, 
                                    cmp.name AS company, dpt.name AS department, pst.name AS position, info.profile`)
                        .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                        .join({ table: `tbl_company AS cmp`, condition: `info.company_id = cmp.id`, type: `LEFT` })
                        .join({ table: `tbl_department AS dpt`, condition: `info.department_id = dpt.id`, type: `LEFT` })
                        .join({ table: `tbl_position AS pst `, condition: `info.position_id = pst.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS cb`, condition: `usr.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`WHERE ${user.role !== 'superadmin' ? `info.branch= '${branch}' AND` : ''} 
                                            ${data.searchtxt !== '' ? `(info.fname LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.lname LIKE '%${(data.searchtxt).toUpperCase()}%'
                                            OR info.employee_no LIKE '%${data.searchtxt}%') AND ` : ''}
                                            (usr.id != 1 AND usr.id != ${user.id}) ORDER BY ${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        let user = JSON.parse(atob(data.token));
        let branch = (await new Builder(`tbl_users_info`).select(`branch`).condition(`WHERE user_id= ${user.id}`).build()).rows[0].branch;

        return (await new Builder(`tbl_users AS usr`)
                        .select(`usr.id, usr.email, usr.user_level, usr.status, info.employee_no, info.rfid, info.fname, info.mname, info.lname, 
                                    cmp.name AS company, dpt.name AS department, pst.name AS position, info.profile`)
                        .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` })
                        .join({ table: `tbl_company AS cmp`, condition: `info.company_id = cmp.id`, type: `LEFT` })
                        .join({ table: `tbl_department AS dpt`, condition: `info.department_id = dpt.id`, type: `LEFT` })
                        .join({ table: `tbl_position AS pst `, condition: `info.position_id = pst.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS cb`, condition: `usr.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`WHERE ${user.role !== 'superadmin' ? `info.branch= '${branch}' AND` : ''} 
                                            ${data.searchtxt !== '' ? `(info.fname LIKE '%${(data.searchtxt).toUpperCase()}%' OR info.lname LIKE '%${(data.searchtxt).toUpperCase()}%'
                                            OR info.employee_no LIKE '%${data.searchtxt}%') AND ` : ''}
                                            (usr.id != 1 AND usr.id != ${user.id}) ORDER BY ${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    dropdown = async data => {
        switch(data.type) {
            case 'per-position':
                return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                    .concat((await new Builder(`tbl_users AS usr`)
                                    .select(`usr.id, CONCAT(info.lname, ', ', info.fname) AS name`)
                                    .join({ table: `tbl_users_info AS info`, condition: 'info.user_id = usr.id', type: `LEFT` })
                                    .condition(`WHERE company_id= ${data.company_id} AND department_id= ${data.department_id} 
                                                        AND position_id= ${data.position_id} AND usr.status= 1 ORDER BY info.lname ASC`).build()).rows)
            default: 
                return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                    .concat((await new Builder(`tbl_users AS usr`)
                                    .select(`usr.id, CONCAT(info.lname, ', ', info.fname) AS name`)
                                    .join({ table: `tbl_users_info AS info`, condition: 'info.user_id = usr.id', type: `LEFT` })
                                    .condition(`WHERE usr.status= 1 ORDER BY info.lname ASC`).build()).rows);
        }
    }

    save = async data => {
        let count = (await this.series()).length;
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];
        
        let email = await new Builder(`tbl_users`).select().condition(`WHERE email= '${data.email}'`).build();
        let employeeno = await new Builder(`tbl_users_info`).select().condition(`WHERE employee_no= '${data.employee_no}'`).build();
        let rfid = await new Builder(`tbl_users_info`).select().condition(`WHERE rfid= '${data.rfid}'`).build();
        let name = await new Builder(`tbl_users_info`).select().condition(`WHERE fname= '${(data.fname).toUpperCase()}' AND lname= '${(data.lname).toUpperCase()}'`).build();

        if(email.rowCount > 0) { errors.push({ name: 'email', message: 'Email already used!' }); }
        if(employeeno.rowCount > 0) { errors.push({ name: 'employee_no', message: 'Employee no already used!' }); }
        if(data.rfid !== '' && rfid.rowCount > 0) { errors.push({ name: 'rfid', message: 'Employee no already used!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'lname', message: 'Name already exist!' }); }

        if(!(errors.length > 0)) {
            let pass = await encrypt.hash(data.password, 10);
            let usr = (await new Builder(`tbl_users`)
                            .insert({ columns: `series_no, email, password, user_level, status, created_by, date_created`, 
                                            values: `'${Global.series({ label: 'USR-', count: count+1, limit: 7 })}', '${data.email}', '${pass}', '${data.user_level}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                            .condition(`RETURNING id`)
                            .build()).rows[0];
                            
            await new Builder(`tbl_users_info`)
                .insert({ columns: `user_id, employee_no, rfid, branch, company_id, department_id, position_id, fname, mname, lname, address, employment_status, profile, gender, head_id`, 
                                values: `${usr.id}, '${data.employee_no}', ${data.rfid !== '' ? `'${data.rfid}'` : null}, '${data.branch}', ${data.company_id}, ${data.department_id}, 
                                                ${data.position_id !== undefined ? data.position_id : null}, '${(data.fname).toUpperCase()}', 
                                                ${data.mname !== '' ? `'${(data.mname).toUpperCase()}'` : null}, '${(data.lname).toUpperCase()}', 
                                                ${data.address !== '' ? `'${(data.address).toUpperCase()}'` : null}, '${data.employment_status}', '${data.profile}', '${data.gender}', ${data.head_id}` })
                .build();

            await new Builder(`tbl_users_permission`).insert({ columns: `user_id`, values: `${usr.id}` }).build();

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = usr.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let usr = (await new Builder(`tbl_users AS usr`).select()
                            .join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` }).condition(`WHERE usr.id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let email = await new Builder(`tbl_users`).select().condition(`WHERE email= '${data.email}'`).build();
        let name = await new Builder(`tbl_users_info`).select().condition(`WHERE fname= '${(data.fname).toUpperCase()}' AND lname= '${(data.lname).toUpperCase()}'`).build();
        let employeeno = await new Builder(`tbl_users_info`).select().condition(`WHERE employee_no= '${data.employee_no}'`).build();
        let rfid = await new Builder(`tbl_users_info`).select().condition(`WHERE rfid= '${data.rfid}'`).build();

        if(Global.compare(usr.email, data.email)) {
            if(!(email.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'email', previous: usr.email,
                    current: data.email, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'email', message: 'Email already used!' }); }
        }

        if(Global.compare(usr.fname, data.fname)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'first name', previous: usr.fname,
                    current: (data.fname).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'fname', message: `First name with surname: ${(data.lname).toUpperCase()} already exist!` }); }
        }

        if(Global.compare(usr.mname, data.mname)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'middle name', previous: usr.mname,
                current: data.mname !== '' && data.mname !== null ? (data.mname).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.lname, data.lname)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'last name', previous: usr.lname,
                    current: (data.lname).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'lname', message: `Name already exist!` }); }
        }

        if(Global.compare(usr.address, data.address)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'address', previous: usr.address,
                current: data.address !== null && data.address !== '' ? (data.address).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.employee_no, data.employee_no)) {
            if(!(employeeno.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'employee no', previous: usr.employee_no,
                    current: data.employee_no, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'employee_no', message: 'Employee no. already used!' }); }
        }

        if(Global.compare(usr.rfid, data.rfid)) {
            if(!(rfid.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'rfid', previous: usr.rfid,
                    current: data.rfid !== null && data.rfid !== '' ? data.rfid : null, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'rfid', message: 'RFID already used!' }); }
        }

        if(Global.compare(usr.branch, data.branch)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'branch', previous: usr.branch,
                current: data.branch, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.user_level, data.user_level)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'user level', previous: usr.user_level,
                current: data.user_level, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.employment_status, data.employment_status)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'employement status', previous: usr.employment_status,
                current: data.employment_status, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.gender, data.gender)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'gender', previous: usr.gender,
                current: data.gender, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.profile, data.profile)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'profile', previous: usr.profile,
                current: data.profile, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.company_id, data.company_id)) {
            let prev = (await new Builder(`tbl_company`).select(`name`).condition(`WHERE id= ${usr.company_id}`).build()).rows[0];
            let curr = (await new Builder(`tbl_company`).select(`name`).condition(`WHERE id= ${data.company_id}`).build()).rows[0];

            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'company', previous: prev.name,
                current: curr.name, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.department_id, data.department_id)) {
            let prev = (await new Builder(`tbl_department`).select(`name`).condition(`WHERE id= ${usr.department_id}`).build()).rows[0];
            let curr = (await new Builder(`tbl_department`).select(`name`).condition(`WHERE id= ${data.department_id}`).build()).rows[0];

            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'department', previous: prev.name,
                current: curr.name, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.position_id, data.position_id)) {
            let prev = (await new Builder(`tbl_position`).select(`name`).condition(`WHERE id= ${usr.position_id}`).build()).rows[0];
            let curr = (await new Builder(`tbl_position`).select(`name`).condition(`WHERE id= ${data.position_id}`).build()).rows[0];

            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'position', previous: prev.name,
                current: curr.name, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.head_id, data.head_id)) {
            let prev = (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${usr.head_id}`).build()).rows[0];
            let curr = (await new Builder(`tbl_users_info`).select(`CONCAT(lname, ', ', fname) AS name`).condition(`WHERE user_id= ${data.head_id}`).build()).rows[0];
            
            console.log(prev);
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'head', previous: prev.name,
                current: curr.name, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(usr.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_users', item_id: usr.id, field: 'status', previous: usr.status === 1 ? 'Active' : 'Inactive', 
                                    current: data.status ? 'Active' : 'Inactive', action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_users`)
                .update(`email= '${data.email}', user_level= '${data.user_level}', status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();
            
            await new Builder(`tbl_users_info`)
                .update(`employee_no= '${data.employee_no}', rfid= ${data.rfid !== null && data.rfid !== '' ? `'${data.rfid}'` : null}, branch= '${data.branch}', 
                                company_id= ${data.company_id}, department_id= ${data.department_id}, position_id= ${data.position_id}, 
                                fname= '${(data.fname).toUpperCase()}', mname= ${data.mname !== null && data.mname !== '' ? `'${(data.mname).toUpperCase()}'` : null},
                                lname= '${(data.lname).toUpperCase()}', address= ${data.address !== '' && data.address !== null ? `'${(data.address).toUpperCase()}'` : null},
                                employment_status= '${data.employment_status}', profile= '${data.profile}', gender= '${data.gender}', head_id= ${data.head_id}`)
                .condition(`WHERE user_id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }

    permission = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));

        await new Builder(`tbl_users_permission`)
            .update(`permission= '${JSON.stringify(data.permission)}', updated_by= ${user.id}, date_updated= '${date}'`)
            .condition(`WHERE user_id= ${data.id}`)
            .build();

        return { result: 'success', message: 'Successfully saved!' }
    }
}

module.exports = Users;