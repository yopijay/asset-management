// Libraries
const encrypt = require('bcrypt');

// Function
const Builder = require('../../function/builder');
const { generate, refresh } = require('../../function/token');

class Users {
    login = async data => {
        let user = await new Builder(`tbl_users`).select().condition(`WHERE email= '${data.email}'`).build();
        
        if(user.rowCount > 0) {
            if(user.rows[0].status === 1) {
                if(await encrypt.compare(data.password, user.rows[0].password)) { return { result: 'success', token: generate(user.rows[0].id), timeout: 3600 } }
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
}

module.exports = Users;