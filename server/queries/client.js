// Tables
const Users = require('./tables/Users');
const Company = require('./tables/Company');
const Modules = require('./tables/Modules');
const Department = require('./tables/Department');
const Position = require('./tables/Position');
const Category = require('./tables/Category');
const Brands = require('./tables/Brands');
const Stocks = require('./tables/Stocks');
const Issuance = require('./tables/Issuance');
const Routes = require('./tables/Routes');
const Received = require('./tables/Received');

const login = data => { return new Users().login(data); }
const profile = id => { return new Users().profile(id); }
const permission = data => { return new Users().permission(data); }
const route = () => { return new Routes().navigation(); }
const scan = async data => { return new Received().scan(data); }

const dashboard = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().dashboard(data)); break;
            case 'tbl_stocks': resolve(await new Stocks().dashboard(data)); break;
            case 'tbl_modules': resolve(await new Modules().dashboard(data)); break;
        }
    });
}

const series = table => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().series()); break;
            case 'tbl_routes': resolve(await new Routes().series()); break;
            case 'tbl_modules': resolve(await new Modules().series()); break;
            case 'tbl_company': resolve(await new Company().series()); break;
            case 'tbl_department': resolve(await new Department().series()); break;
            case 'tbl_position': resolve(await new Position().series()); break;
            case 'tbl_category': resolve(await new Category().series()); break;
            case 'tbl_brands': resolve(await new Brands().series()); break;
            case 'tbl_stocks': resolve(await new Stocks().series()); break;
            case 'tbl_stocks_issuance': resolve(await new Issuance().series()); break;
        }
    });
}

const specific = (table, id) => {
    console.log(table, id);
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().specific(id)); break;
            case 'tbl_routes': resolve(await new Routes().specific(id)); break;
            case 'tbl_modules': resolve(await new Modules().specific(id)); break;
            case 'tbl_company': resolve(await new Company().specific(id)); break;
            case 'tbl_department': resolve(await new Department().specific(id)); break;
            case 'tbl_position': resolve(await new Position().specific(id)); break;
            case 'tbl_category': resolve(await new Category().specific(id)); break;
            case 'tbl_brands': resolve(await new Brands().specific(id)); break;
            case 'tbl_stocks': resolve(await new Stocks().specific(id)); break;
            case 'tbl_stocks_issuance': resolve(await new Issuance().specific(id)); break;
            case 'tbl_stocks_received': resolve(await new Received().specific(id)); break;
        }
    });
}

const list = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().list(data)); break;
            case 'tbl_routes': resolve(await new Routes().list(data)); break;
            case 'tbl_modules': resolve(await new Modules().list(data)); break;
            case 'tbl_company': resolve(await new Company().list(data)); break;
            case 'tbl_department': resolve(await new Department().list(data)); break;
            case 'tbl_position': resolve(await new Position().list(data)); break;
            case 'tbl_category': resolve(await new Category().list(data)); break;
            case 'tbl_brands': resolve(await new Brands().list(data)); break;
            case 'tbl_stocks': resolve(await new Stocks().list(data)); break;
            case 'tbl_stocks_issuance': resolve(await new Issuance().list(data)); break;
            case 'tbl_stocks_received': resolve(await new Received().list(data)); break;
        }
    });
}

const excel = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_stocks_issuance': resolve(await new Issuance().excel(data)); break;
            case 'tbl_stocks_received': resolve(await new Received().excel(data)); break;
            case 'tbl_stocks': resolve(await new Stocks().excel(data)); break;
            case 'tbl_brands': resolve(await new Brands().excel(data)); break;
            case 'tbl_category': resolve(await new Category().excel(data)); break;
            case 'tbl_company': resolve(await new Company().excel(data)); break;
            case 'tbl_department': resolve(await new Department().excel(data)); break;
            case 'tbl_position': resolve(await new Position().excel(data)); break;
            case 'tbl_routes': resolve(await new Routes().excel(data)); break;
            case 'tbl_modules': resolve(await new Modules().excel(data)); break;
            case 'tbl_users': resolve(await new Users().excel(data)); break;
        }
    });
}

const logs = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().logs(data)); break;
            case 'tbl_routes': resolve(await new Routes().logs(data)); break;
            case 'tbl_modules': resolve(await new Modules().logs(data)); break;
            case 'tbl_company': resolve(await new Company().logs(data)); break;
            case 'tbl_department': resolve(await new Department().logs(data)); break;
            case 'tbl_position': resolve(await new Position().logs(data)); break;
            case 'tbl_category': resolve(await new Category().logs(data)); break;
            case 'tbl_brands': resolve(await new Brands().logs(data)); break;
            case 'tbl_stocks': resolve(await new Stocks().logs(data)); break;
            case 'tbl_stocks_issuance': resolve(await new Issuance().logs(data)); break;
            case 'tbl_stocks_received': resolve(await new Received().logs(data)); break;
        }
    });
}

const save = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().save(data)); break;
            case 'tbl_routes': resolve(await new Routes().save(data)); break;
            case 'tbl_modules': resolve(await new Modules().save(data)); break;
            case 'tbl_company': resolve(await new Company().save(data)); break;
            case 'tbl_department': resolve(await new Department().save(data)); break;
            case 'tbl_position': resolve(await new Position().save(data)); break;
            case 'tbl_category': resolve(await new Category().save(data)); break;
            case 'tbl_brands': resolve(await new Brands().save(data)); break;
            case 'tbl_stocks': resolve(await new Stocks().save(data)); break;
            case 'tbl_stocks_issuance': resolve(await new Issuance().save(data)); break;
        }
    });
}

const update = (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_users': resolve(await new Users().update(data)); break;
            case 'tbl_routes': resolve(await new Routes().update(data)); break;
            case 'tbl_modules': resolve(await new Modules().update(data)); break;
            case 'tbl_company': resolve(await new Company().update(data)); break;
            case 'tbl_department': resolve(await new Department().update(data)); break;
            case 'tbl_position': resolve(await new Position().update(data)); break;
            case 'tbl_category': resolve(await new Category().update(data)); break;
            case 'tbl_brands': resolve(await new Brands().update(data)); break;
            case 'tbl_stocks': resolve(await new Stocks().update(data)); break;
            case 'tbl_stocks_issuance': resolve(await new Issuance().update(data)); break;
            case 'tbl_stocks_received': resolve(await new Received().update(data)); break;
        }
    });
}

const dropdown = async (table, data) => {
    return new Promise(async resolve => {
        switch(table) {
            case 'tbl_routes': resolve(await new Routes().dropdown(data)); break;
            case 'tbl_modules': resolve(await new Modules().dropdown(data)); break;
            case 'tbl_users': resolve(await new Users().dropdown(data)); break;
            case 'tbl_company': resolve(await new Company().dropdown(data)); break;
            case 'tbl_department': resolve(await new Department().dropdown(data)); break;
            case 'tbl_position': resolve(await new Position().dropdown(data)); break;
            case 'tbl_category': resolve(await new Category().dropdown(data)); break;
            case 'tbl_brands': resolve(await new Brands().dropdown(data)); break;
            case 'tbl_stocks': resolve(await new Stocks().dropdown(data)); break;
        }
    });
}

module.exports = {
    dashboard,
    route,
    login,
    profile,
    series,
    specific,
    list,
    logs,
    save,
    update,
    dropdown,
    permission,
    excel,
    scan
    // testing
}