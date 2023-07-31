const Builder = require("./builder"); /// Query builder

const date = (date) => {
    let year = date.getFullYear();
    let month = `${ (date.getMonth() + 1) >= 10 ? '' : '0' }${ date.getMonth() + 1 }`;
    let day = `${date.getDate() >= 10 ? '' : '0'}${date.getDate() }`;
    let hr = `${ (date.getHours()) >= 10 ? '' : '0' }${ date.getHours() }`;
    let min = `${ (date.getMinutes()) >= 10 ? '' : '0' }${date.getMinutes() }`;
    let sec = `${ (date.getSeconds()) >= 10 ? '' : '0' }${date.getSeconds() }`;

    return `${year}-${month}-${day}T${hr}:${min}:${sec}`;
}

const audit = async (data) => {
    let cols = '';
    let vals = '';

    for(let count = 0; count < (Object.entries(data)).length; count++) {
        let _keys = Object.entries(data)[count][0];
        let _vals = Object.entries(data)[count][1];

        cols += `${ count === 0 ? '' : ', ' }${ _keys }`;
        vals += `${ count === 0 ? '' : ', ' }${ _keys === 'item_id' || _keys === 'user_id' ? _vals : _vals !== null ? `'${_vals}'` : null}`;
    }

    await new Builder(`tbl_audit_trail`).insert({ columns: cols, values: vals }).build();
}

const randomizer = (length) => {
    let result = '';
    
    for (let i = 0; i < length; i++) { 
        result += ('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789').charAt(Math.floor(Math.random() * ('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789').length)); 
    }
    return result;
}

const compare = (_old, _new) => {
    let __old = _old !== null && _old !== undefined && _old !== '' ? Number.isInteger(_old) ? _old : _old.toUpperCase() : null;
    let __new = _new !== null && _new !== undefined && _new !== '' ? Number.isInteger(_new) ? _new : _new.toUpperCase() : null;
    
    return __old !== __new;
}

const series = ({ label, count, limit= 7 }) => { return `${label}${('0000000' + count).substr(('0000000' + count).length - limit)}`; }

module.exports = { 
    randomizer,
    audit,
    date,
    compare,
    series
}