// Tables
const Users = require('./tables/Users');
const Company = require('./tables/Company');
const Module = require('./tables/Module');

const login = data => { return new Users().login(data) }
const profile = id => { return new Users().profile(id) }

const series = table => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().series()); break;
            case 'tbl_module': resolve(await new Module().series()); break;
        }
    });
}

const specific = (table, id) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().specific(id)); break;
            case 'tbl_module': resolve(await new Module().specific(id)); break;
        }
    });
}

const list = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().list(data)); break;
            case 'tbl_module': resolve(await new Module().list(data)); break;
        }
    });
}

const save = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().save(data)); break;
            case 'tbl_module': resolve(await new Module().save(data)); break;
        }
    });
}

const update = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().update(data)); break;
            case 'tbl_module': resolve(await new Module().update(data)); break;
        }
    });
}

const search = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_company': resolve(await new Company().search(data)); break;
            case 'tbl_module': resolve(await new Module().search(data)); break;
        }
    });
}

module.exports = {
    login,
    profile,
    series,
    specific,
    list,
    search,
    save,
    update
}