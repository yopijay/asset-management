const db = require('../connection');

class Builder {
    constructor (table) {
        this._table = table;
        this._query = '';
        this._join = '';
        this._condition = '';
        this._except = '';
    }

    // Customs
    select = (columns = '*') => { this._query = `SELECT ${columns} FROM ${this._table}`; return this; }
    insert = ({ columns, values }) => { this._query = `INSERT INTO ${this._table}(${columns}) VALUES(${values})`; return this; }
    update = (data) => { this._query = `UPDATE ${this._table} SET ${data}`; return this; }
    join = ({ table, condition, type }) => { this._join += ` ${type !== undefined ? type.toUpperCase() : 'LEFT'} JOIN ${table} ON ${condition}`; return this; }
    condition = (condition) => { this._condition = ` ${condition}`; return this; }
    except = (condition) => { this._except = ` EXCEPT ${this._query}${this._join} ${condition}`; return this; }

    // Output
    build = async () => { 
        let qry = `${this._query}${this._join}${this._condition}${this._except}`;
        let res = await db.query(qry);
        return res;
    }

    test = () => { return `${this._query}${this._join}${this._condition}${this._except}`; }
}

module.exports = Builder;