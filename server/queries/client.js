// Tables
const Users = require('./tables/Users');
const Company = require('./tables/Company');

const login = data => { return new Users().login(data) }
const profile = id => { return new Users().profile(id) }

const series = table => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().series()); break;
        }
    });
}

const specific = (table, id) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().specific(id)); break;
        }
    });
}

const list = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().list(data)); break;
        }
    });
}

const save = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().save(data)); break;
        }
    });
}

const update = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().update(data)); break;
        }
    });
}

module.exports = {
    login,
    profile,
    series,
    specific,
    list,
    save,
    update
}