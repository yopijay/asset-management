// Tables
const Users = require('./tables/Users');
const Company = require('./tables/Company');
const Module = require('./tables/Module');
const Submodule = require('./tables/Submodule');
const Department = require('./tables/Department');
const Position = require('./tables/Position');
const Brands = require('./tables/Brands');
const Assets = require('./tables/Assets');
const Supplies = require('./tables/Supplies');

const login = data => { return new Users().login(data); }
const profile = id => { return new Users().profile(id); }
const navs = id => { return new Submodule().navs(id); }

const series = table => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().series()); break;
            case 'tbl_module': resolve(await new Module().series()); break;
            case 'tbl_sub_module': resolve(await new Submodule().series()); break;
            case 'tbl_company': resolve(await new Company().series()); break;
            case 'tbl_department': resolve(await new Department().series()); break;
            case 'tbl_position': resolve(await new Position().series()); break;
            case 'tbl_brands': resolve(await new Brands().series()); break;
            case 'tbl_assets': resolve(await new Assets().series()); break;
            case 'tbl_supplies': resolve(await new Supplies().series()); break;
        }
    });
}

const specific = (table, id) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().specific(id)); break;
            case 'tbl_module': resolve(await new Module().specific(id)); break;
            case 'tbl_sub_module': resolve(await new Submodule().specific(id)); break;
            case 'tbl_company': resolve(await new Company().specific(id)); break;
            case 'tbl_department': resolve(await new Department().specific(id)); break;
            case 'tbl_position': resolve(await new Position().specific(id)); break;
            case 'tbl_brands': resolve(await new Brands().specific(id)); break;
            case 'tbl_assets': resolve(await new Assets().specific(id)); break;
            case 'tbl_supplies': resolve(await new Supplies().specific(id)); break;
        }
    });
}

const list = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().list(data)); break;
            case 'tbl_module': resolve(await new Module().list(data)); break;
            case 'tbl_sub_module': resolve(await new Submodule().list(data)); break;
            case 'tbl_company': resolve(await new Company().list(data)); break;
            case 'tbl_department': resolve(await new Department().list(data)); break;
            case 'tbl_position': resolve(await new Position().list(data)); break;
            case 'tbl_brands': resolve(await new Brands().list(data)); break;
            case 'tbl_assets': resolve(await new Assets().list(data)); break;
            case 'tbl_supplies': resolve(await new Supplies().list(data)); break;
        }
    });
}

const logs = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().logs(data)); break;
            case 'tbl_module': resolve(await new Module().logs(data)); break;
            case 'tbl_sub_module': resolve(await new Submodule().logs(data)); break;
            case 'tbl_company': resolve(await new Company().logs(data)); break;
            case 'tbl_department': resolve(await new Department().logs(data)); break;
            case 'tbl_position': resolve(await new Position().logs(data)); break;
            case 'tbl_brands': resolve(await new Brands().logs(data)); break;
            case 'tbl_assets': resolve(await new Assets().logs(data)); break;
            case 'tbl_supplies': resolve(await new Supplies().logs(data)); break;
        }
    });
}

const save = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().save(data)); break;
            case 'tbl_module': resolve(await new Module().save(data)); break;
            case 'tbl_sub_module': resolve(await new Submodule().save(data)); break;
            case 'tbl_company': resolve(await new Company().save(data)); break;
            case 'tbl_department': resolve(await new Department().save(data)); break;
            case 'tbl_position': resolve(await new Position().save(data)); break;
            case 'tbl_brands': resolve(await new Brands().save(data)); break;
            case 'tbl_assets': resolve(await new Assets().save(data)); break;
            case 'tbl_supplies': resolve(await new Supplies().save(data)); break;
        }
    });
}

const update = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().update(data)); break;
            case 'tbl_module': resolve(await new Module().update(data)); break;
            case 'tbl_sub_module': resolve(await new Submodule().update(data)); break;
            case 'tbl_company': resolve(await new Company().update(data)); break;
            case 'tbl_department': resolve(await new Department().update(data)); break;
            case 'tbl_position': resolve(await new Position().update(data)); break;
            case 'tbl_brands': resolve(await new Brands().update(data)); break;
            case 'tbl_assets': resolve(await new Assets().update(data)); break;
            case 'tbl_supplies': resolve(await new Supplies().update(data)); break;
        }
    });
}

const search = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().search(data)); break;
            case 'tbl_module': resolve(await new Module().search(data)); break;
            case 'tbl_sub_module': resolve(await new SubmitEvent().search(data)); break;
            case 'tbl_company': resolve(await new Company().search(data)); break;
            case 'tbl_department': resolve(await new Department().search(data)); break;
            case 'tbl_position': resolve(await new Position().search(data)); break;
            case 'tbl_brands': resolve(await new Brands().search(data)); break;
            case 'tbl_assets': resolve(await new Assets().search(data)); break;
            case 'tbl_supplies': resolve(await new Supplies().search(data)); break;
        }
    });
}

const dropdown = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_module': resolve(await new Module().dropdown(data)); break;
            case 'tbl_sub_module': resolve(await new Submodule().dropdown(data)); break;
            case 'tbl_users': resolve(await new Users().dropdown(data)); break;
            case 'tbl_company': resolve(await new Company().dropdown(data)); break;
            case 'tbl_department': resolve(await new Department().dropdown(data)); break;
            case 'tbl_position': resolve(await new Position().dropdown(data)); break;
            case 'tbl_brands': resolve(await new Brands().dropdown(data)); break;
            case 'tbl_assets': resolve(await new Assets().dropdown(data)); break;
            case 'tbl_supplies': resolve(await new Supplies().dropdown(data)); break;
        }
    });
}

module.exports = {
    login,
    profile,
    series,
    specific,
    list,
    logs,
    search,
    save,
    update,
    dropdown,
    navs
}