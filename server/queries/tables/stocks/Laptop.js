// Function
const Builder = require("../../../function/builder");
const Global = require("../../../function/global");

class Laptop {
    save = async (data, id) => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, serial_no, model, cpu, gpu, hdd, ssd, ram, operating_system, power_supply, warranty, hdmi, 
                                            vga, dvi, bluetooth, fingerprint, webcamera, backlit, date_received`, 
                            values: `${id}, ${data.serial_no !== '' ? `'${(data.serial_no).toUpperCase()}'` : null}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                            ${data.cpu !== '' ? `'${(data.cpu).toUpperCase()}'` : null}, ${data.gpu !== '' ? `'${(data.gpu).toUpperCase()}'` : null},
                                            ${data.hdd !== '' ? `'${(data.hdd).toUpperCase()}'` : null}, ${data.ssd !== '' ? `'${(data.ssd).toUpperCase()}'` : null},
                                            ${data.ram !== '' ? `'${(data.ram).toUpperCase()}'` : null}, ${data.operating_system !== '' ? `'${(data.operating_system).toUpperCase()}'` : null},
                                            ${data.power_supply !== '' ? `'${(data.power_supply).toUpperCase()}'` : null}, ${data.warranty !== '' ? `'${(data.warranty).toUpperCase()}'` : null},
                                            ${data.hdmi ? 1 : 0}, ${data.vga ? 1 : 0}, ${data.dvi ? 1 : 0}, ${data.bluetooth ? 1 : 0}, ${data.fingerprint ? 1 : 0}, ${data.webcamera ? 1 : 0}, ${data.backlit ? 1 : 0},
                                            ${data.date_received !== '' ? `'${data.date_received}'` : null}` })
            .build();
    }

    update = async (previeous, current) => {
        let user = JSON.parse(atob(data.token));
        
        if(Global.compare(previeous.category_id, current.category_id)) {
            if(!(serial.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: previeous.id, field: 'category', previous: previeous.category_id,
                    current: current.category_id, action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'serial_no', message: 'Serial number already exist!' }); }
        }
    }
}

module.exports = Laptop;