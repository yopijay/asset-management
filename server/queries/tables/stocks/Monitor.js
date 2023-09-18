// Function
const Builder = require("../../../function/builder");

class Monitor {
    save = async (data, id) => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, serial_no, model, color, power_supply, warranty, hdmi, vga, dvi, date_received, panel, resolution`, 
                            values: `${id}, ${data.serial_no !== '' ? `'${(data.serial_no).toUpperCase()}'` : null}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                            ${data.color !== '' ? `'${(data.color).toUpperCase()}'` : null}, ${data.power_supply !== '' ? `'${(data.power_supply).toUpperCase()}'` : null},
                                            ${data.warranty !== '' ? `'${(data.warranty).toUpperCase()}'` : null}, ${data.hdmi ? 1 : 0}, ${data.vga ? 1 : 0}, ${data.dvi ? 1 : 0}, 
                                            ${data.date_received !== '' ? `'${data.date_received}'` : null},
                                            ${data.panel !== '' ? `'${(data.panel).toUpperCase()}'` : null}, ${data.resolution !== '' ? `'${(data.resolution).toUpperCase()}'` : null}` })
            .build();
    }

    update = async data => {
        return [];
    }
}

module.exports = Monitor;