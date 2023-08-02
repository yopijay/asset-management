// Tables
const Users = require('./tables/Users');
const Company = require('./tables/Company');

const login = data => { return new Users().login(data) }
const profile = id => { return new Users().profile(id) }

// const series = table => {
//     return new Promise(async resolve => {
//         switch(table) {
//             case 'tbl_company': resolve(await new Company().series()); break;
//         }
//     });
// }

module.exports = {
    login,
    profile,
    // series
}