// Function
const Builder = require("../../../function/builder");
const Global = require("../../../function/global");

class Laptop {
    constructor (data) { this.data = data; }

    save = async id => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, serial_no, model, cpu, gpu, hdd, ssd, ram, operating_system, power_supply, warranty, hdmi, 
                                            vga, dvi, bluetooth, fingerprint, webcamera, backlit, date_received`, 
                            values: `${id}, ${(this.data).serial_no !== '' ? `'${((this.data).serial_no).toUpperCase()}'` : null}, ${(this.data).model !== '' ? `'${((this.data).model).toUpperCase()}'` : null},
                                            ${(this.data).cpu !== '' ? `'${((this.data).cpu).toUpperCase()}'` : null}, ${(this.data).gpu !== '' ? `'${((this.data).gpu).toUpperCase()}'` : null},
                                            ${(this.data).hdd !== '' ? `'${((this.data).hdd).toUpperCase()}'` : null}, ${(this.data).ssd !== '' ? `'${((this.data).ssd).toUpperCase()}'` : null},
                                            ${(this.data).ram !== '' ? `'${((this.data).ram).toUpperCase()}'` : null}, ${(this.data).operating_system !== '' ? `'${((this.data).operating_system).toUpperCase()}'` : null},
                                            ${(this.data).power_supply !== '' ? `'${((this.data).power_supply).toUpperCase()}'` : null}, ${(this.data).warranty !== '' ? `'${((this.data).warranty).toUpperCase()}'` : null},
                                            ${(this.data).hdmi ? 1 : 0}, ${(this.data).vga ? 1 : 0}, ${(this.data).dvi ? 1 : 0}, ${(this.data).bluetooth ? 1 : 0}, ${(this.data).fingerprint ? 1 : 0}, 
                                            ${(this.data).webcamera ? 1 : 0}, ${(this.data).backlit ? 1 : 0}, ${(this.data).date_received !== '' ? `'${(this.data).date_received}'` : null}` })
            .build();
    }

    update = async (prev, errors, audits) => {
        let curr = this.data;
        let user = JSON.parse(atob((this.data).token));
        let date = Global.date(new Date());

        let serial = await new Builder(`tbl_stocks_info`).select().condition(`WHERE serial_no= '${(curr.serial_no).toUpperCase()}'`).build();

        if(Global.compare(prev.brand_id, curr.brand_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'brand', previous: prev.brand_id,
                current: curr.brand_id, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.serial_no, curr.serial_no)) {
            if(!(serial.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'serial_no', previous: prev.serial_no,
                    current: (curr.serial_no).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'serial_no', message: 'Serial number already exist!' }); }
        }

        if(Global.compare(prev.model, curr.model)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'model', previous: prev.model,
                current: curr.model !== '' && curr.model !== null ? (curr.model).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.cpu, curr.cpu)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'cpu', previous: prev.cpu,
                current: curr.cpu !== '' && curr.cpu !== null ? (curr.cpu).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.gpu, curr.gpu)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'gpu', previous: prev.gpu,
                current: curr.gpu !== '' && curr.gpu !== null ? (curr.gpu).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.hdd, curr.hdd)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'hdd', previous: prev.hdd,
                current: curr.hdd !== '' && curr.hdd !== null ? (curr.hdd).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.ssd, curr.ssd)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'ssd', previous: prev.ssd,
                current: curr.ssd !== '' && curr.ssd !== null ? (curr.ssd).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.ram, curr.ram)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'ram', previous: prev.ram,
                current: curr.ram !== '' && curr.ram !== null ? (curr.ram).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.operating_system, curr.operating_system)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'operating_system', previous: prev.operating_system,
                current: curr.operating_system !== '' && curr.operating_system !== null ? (curr.operating_system).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.power_supply, curr.power_supply)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'power_supply', previous: prev.power_supply,
                current: curr.power_supply !== '' && curr.power_supply !== null ? (curr.power_supply).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.warranty, curr.warranty)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'warranty', previous: prev.warranty,
                current: curr.warranty !== '' && curr.warranty !== null ? (curr.warranty).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.hdmi, curr.hdmi ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'hdmi', previous: prev.hdmi,
                current: curr.warranty !== '' && curr.warranty !== null ? (curr.warranty).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }
    }
}

module.exports = Laptop;