// Function
const Builder = require("../../../function/builder");

class Laptop {
    save = async (data, id) => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, serial_no, model, cpu, gpu, hdd, ssd, ram, operating_system, power_supply, warranty, hdmi, 
                                            vga, dvi, bluetooth, wifi, fingerprint, webcamera, backlit`, 
                            values: `${id}, ${data.serial_no !== '' ? `'${(data.serial_no).toUpperCase()}'` : null}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                            ${data.cpu !== '' ? `'${(data.cpu).toUpperCase()}'` : null}, ${data.gpu !== '' ? `'${(data.gpu).toUpperCase()}'` : null},
                                            ${data.hdd !== '' ? `'${(data.hdd).toUpperCase()}'` : null}, ${data.ssd !== '' ? `'${(data.ssd).toUpperCase()}'` : null},
                                            ${data.ram !== '' ? `'${(data.ram).toUpperCase()}'` : null}, ${data.operating_system !== '' ? `'${(data.operating_system).toUpperCase()}'` : null}` })
            .build();
    }

    update = async data => {
        return [];
    }
}

module.exports = Laptop;