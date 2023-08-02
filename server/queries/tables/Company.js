const Builder = require("../../function/builder"); // Query builder

class Company {
    series = async () =>{ return (await Builder(`tbl_company`).select().build()).rows; }
}

module.exports = Company;