// Function
const Builder = require("../../../function/builder");

class Toner {
    save = async (data, id) => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, model, type, condition, color, date_received`, 
                            values: `${id}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null}, ${data.type ? `'${data.type}'` : null},
                                            ${data.condition ? `'${data.condition}'` : null}, ${data.color !== '' ? `'${(data.color).toUpperCase()}'` : null}, 
                                            ${data.date_received !== '' ? `'${data.date_received}'` : null}` })
            .build();
    }

    update = async data => {
        return [];
    }
}

module.exports = Toner;