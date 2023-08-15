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
        return (await new Builder(`tbl_users AS usr`)
                        .select(`usr.*, emp.*`)
                        .join({ table: `tbl_employee AS emp`, condition: `emp.user_id = usr.id`, type: `LEFT` })
                        .condition(`WHERE usr.id= ${id}`)
                        .build()).rows;
    }
    
    logs = async data => {
        return [];
    }

    login = async data => {
        let user = await new Builder(`tbl_users`).select().condition(`WHERE email= '${data.email}'`).build();
        
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
                        .select(`usr.id, usr.email, usr.user_level, emp.employee_no, emp.rfid, emp.fname, emp.mname, emp.lname`)
                        .join({ table: `tbl_employee AS emp`, condition: `emp.user_id = usr.id`, type: `LEFT` })
                        .condition(`WHERE usr.id= ${id}`)
                        .build()).rows;
    }

    list = async data => {
        return [];
    }

    search = async data => {
        return [];
    }

    dropdown = async data => {
        return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
            .concat((await new Builder(`tbl_users AS usr`)
                            .select(`usr.id, CONCAT(emp.lname, ', ', emp.fname) AS name`)
                            .join({ table: `tbl_employee AS emp`, condition: 'emp.user_id = usr.id', type: `LEFT` })
                            .condition(`WHERE usr.status= 1 ORDER BY emp.lname ASC`).build()).rows);
    }

    save = async data => {
        let count = (await this.series()).length;
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];
        
        let email = await new Builder(`tbl_users`).select().condition(`WHERE email= '${data.email}'`).build();
        let employeeno = await new Builder(`tbl_employee`).select().condition(`WHERE employee_no= '${data.employee_no}'`).build();
        let rfid = await new Builder(`tbl_employee`).select().condition(`WHERE rfid= '${data.rfid}'`).build();
        let fname = await new Builder(`tbl_employee`).select().condition(`WHERE fname= '${(data.fname).toUpperCase()}'`).build();
        let lname = await new Builder(`tbl_employee`).select().condition(`WHERE lname= '${(data.lname).toUpperCase()}'`).build();

        if(email.rowCount > 0) { errors.push({ name: 'email', message: 'Email already used!' }); }
        if(employeeno.rowCount > 0) { errors.push({ name: 'employee_no', message: 'Employee no already used!' }); }
        if(rfid.rowCount > 0) { errors.push({ name: 'rfid', message: 'Employee no already used!' }); }
        if(fname.rowCount > 0 && lname.rowCount > 0) { errors.push({ name: 'lname', message: 'Name already exist!' }); }

        if(!(errors.length > 0)) {
            let pass = await encrypt.hash(data.password, 10);
            let usr = (await new Builder(`tbl_users`)
                            .insert({ columns: `series_no, email, password, user_level, status, created_by, date_created`, 
                                            values: `'${Global.series({ label: 'USR-', count: count, limit: 7 })}', '${data.email}', '${pass}', '${data.user_level}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                            .condition(`RETURNING id`)
                            .build()).rows[0];
                            
            console.log(new Builder(`tbl_employee`)
                .insert({ columns: `user_id, employee_no, rfid, branch, company_id, department_id, position_id, fname, mname, lname, address`, 
                                values: `${usr.id}, '${data.employee_no}', '${data.rfid}', '${data.branch}', ${data.company_id}, ${data.department_id}, ${data.position_id}, 
                                                '${(data.fname).toUpperCase()}', ${data.mname !== '' ? `'${(data.mname).toUpperCase()}'` : null}, '${(data.lname).toUpperCase()}',
                                                ${data.address !== '' ? `'${(data.address).toUpperCase()}'` : null}` })
                .test());

            // audit.series_no = Global.randomizer(7);
            // audit.field = 'all';
            // audit.item_id = usr.id;
            // audit.action = 'create';
            // audit.user_id = user.id;
            // audit.date = date;
            
            // Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        return [];
    }
}

module.exports = Users;