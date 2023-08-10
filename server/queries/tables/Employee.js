const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: '',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Employee