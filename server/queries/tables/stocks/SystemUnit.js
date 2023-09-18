// Function
const Builder = require("../../../function/builder");

class SystemUnit {
    save = async (data, id) => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, serial_no, model, cpu, gpu, hdd, ssd, ram, operating_system, power_supply, warranty, hdmi, vga, dvi, bluetooth, wifi, date_received`, 
                            values: `${id}, ${data.serial_no !== '' ? `'${(data.serial_no).toUpperCase()}'` : null}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                            ${data.cpu !== '' ? `'${(data.cpu).toUpperCase()}'` : null}, ${data.gpu !== '' ? `'${(data.gpu).toUpperCase()}'` : null},
                                            ${data.hdd !== '' ? `'${(data.hdd).toUpperCase()}'` : null}, ${data.ssd !== '' ? `'${(data.ssd).toUpperCase()}'` : null},
                                            ${data.ram !== '' ? `'${(data.ram).toUpperCase()}'` : null}, ${data.operating_system !== '' ? `'${(data.operating_system).toUpperCase()}'` : null},
                                            ${data.power_supply !== '' ? `'${(data.power_supply).toUpperCase()}'` : null}, ${data.warranty !== '' ? `'${(data.warranty).toUpperCase()}'` : null},
                                            ${data.hdmi ? 1 : 0}, ${data.vga ? 1 : 0}, ${data.dvi ? 1 : 0}, ${data.bluetooth ? 1 : 0}, ${data.wifi ? 1 : 0}, 
                                            ${data.date_received !== '' ? `'${data.date_received}'`: null}` })
            .build();
    }

    update = async data => {
        return [];
    }
}

module.exports = SystemUnit;