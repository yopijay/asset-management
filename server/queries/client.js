// Tables
const Users = require('./tables/Users');

const login = data => { return new Users().login(data) }
const profile = id => { return new Users().profile(id) }

module.exports = {
    login,
    profile
}