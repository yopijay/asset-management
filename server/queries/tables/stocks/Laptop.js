// Function
const Builder = require("../../../function/builder");
const Global = require("../../../function/global");

class Laptop {
    constructor (data) { this.data = data; }

    save = async id => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stocks_id, serial_no, model, cpu, gpu, hdd, ssd, ram, os, power_supply, warranty, hdmi, 
                                            vga, dvi, bluetooth, fingerprint, camera`, 
                            values: `${id}, ${(this.data).serial_no !== '' ? `'${((this.data).serial_no).toUpperCase()}'` : null}, ${(this.data).model !== '' ? `'${((this.data).model).toUpperCase()}'` : null},
                                            ${(this.data).cpu !== '' ? `'${((this.data).cpu).toUpperCase()}'` : null}, ${(this.data).gpu !== '' ? `'${((this.data).gpu).toUpperCase()}'` : null},
                                            ${(this.data).hdd !== '' ? `'${((this.data).hdd).toUpperCase()}'` : null}, ${(this.data).ssd !== '' ? `'${((this.data).ssd).toUpperCase()}'` : null},
                                            ${(this.data).ram !== '' ? `'${((this.data).ram).toUpperCase()}'` : null}, ${(this.data).os !== '' ? `'${((this.data).os).toUpperCase()}'` : null},
                                            ${(this.data).power_supply !== '' ? `'${((this.data).power_supply).toUpperCase()}'` : null}, 
                                            ${(this.data).warranty !== '' ? `'${((this.data).warranty).toUpperCase()}'` : null}, ${(this.data).hdmi ? 1 : 0}, ${(this.data).vga ? 1 : 0}, ${(this.data).dvi ? 1 : 0}, 
                                            ${(this.data).bluetooth ? 1 : 0}, ${(this.data).fingerprint ? 1 : 0}, ${(this.data).camera ? 1 : 0}` })
            .build();
    }

    update = async prev => {
        let curr = this.data;
        let user = JSON.parse(atob((this.data).token));
        let date = Global.date(new Date());
        let audits = [];
        let errors = [];

        let serial = await new Builder(`tbl_stocks_info`).select().condition(`WHERE serial_no= '${(curr.serial_no).toUpperCase()}'`).build();

        if(Global.compare(prev.brand_id, curr.brand_id)) {
            let _curr = (await new Builder(`tbl_brands`).select(`name`).condition(`WHERE id= ${curr.brand_id}`).build()).rows[0];
            let _prev = (await new Builder(`tbl_brands`).select(`name`).condition(`WHERE id= ${prev.brand_id}`).build()).rows[0];

            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'brand', previous: _prev.name,
                current: _curr.name, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.serial_no, curr.serial_no)) {
            if(!(serial.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'serial no', previous: prev.serial_no,
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

        if(Global.compare(prev.os, curr.os)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'os', previous: prev.os,
                current: curr.os !== '' && curr.os !== null ? (curr.os).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.power_supply, curr.power_supply)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'power supply', previous: prev.power_supply,
                current: curr.power_supply !== '' && curr.power_supply !== null ? (curr.power_supply).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.warranty, curr.warranty)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'warranty', previous: prev.warranty,
                current: curr.warranty !== '' && curr.warranty !== null ? (curr.warranty).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.hdmi, curr.hdmi ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'hdmi', previous: prev.hdmi === 1 ? 'Yes' : 'No',
                current: curr.hdmi ? 'Yes' : 'No', action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.vga, curr.vga ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'vga', previous: prev.vga === 1 ? 'Yes' : 'No',
                current: curr.vga ? 'Yes' : 'No', action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.dvi, curr.dvi ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'dvi', previous: prev.dvi === 1 ? 'Yes' : 'No',
                current: curr.dvi ? 'Yes' : 'No', action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.bluetooth, curr.bluetooth ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'bluetooth', previous: prev.bluetooth === 1 ? 'Yes' : 'No',
                current: curr.bluetooth ? 'Yes' : 'No' , action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.fingerprint, curr.fingerprint ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'fingerprint', previous: prev.fingerprint === 1 ? 'Yes' : 'No',
                current: curr.fingerprint ? 'Yes' : 'No', action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.camera, curr.camera ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'camera', previous: prev.camera === 1 ? 'Yes' : 'No',
                current: curr.camera ? 'Yes' : 'No', action: 'update', user_id: user.id, date: date });
        }

        // if(Global.compare(prev.date_received, curr.date_received)) {
        //     audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'date_received', previous: prev.date_received,
        //         current: curr.date_received !== '' && curr.date_received !== null ? curr.date_received : null, action: 'update', user_id: user.id, date: date });
        // }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_stocks`)
                .update(`brand_id= ${curr.brand_id}, updated_by= ${user.id}, date_updated= '${date}', branch= '${curr.branch}'`)
                .condition(`WHERE id= ${curr.id}`)
                .build();

            await new Builder(`tbl_stocks_info`)
                .update(`serial_no= '${(curr.serial_no).toUpperCase()}', model= ${curr.model !== '' && curr.model !== null ? `'${(curr.model).toUpperCase()}'` : null},
                                cpu= ${curr.cpu !== '' && curr.cpu !== null ? `'${(curr.cpu).toUpperCase()}'` : null}, gpu= ${curr.gpu !== '' && curr.gpu !== null ? `'${(curr.gpu).toUpperCase()}'` : null},
                                hdd= ${curr.hdd !== '' && curr.hdd !== null ? `'${(curr.hdd).toUpperCase()}'` : null}, ssd= ${curr.ssd !== '' && curr.ssd !== null ? `'${(curr.ssd).toUpperCase()}'` : null},
                                ram= ${curr.ram !== '' && curr.ram !== null ? `'${(curr.ram).toUpperCase()}'` : null}, 
                                os= ${curr.os !== '' && curr.os !== null ? `'${(curr.os).toUpperCase()}'` : null},
                                power_supply= ${curr.power_supply !== '' && curr.power_supply !== null ? `'${(curr.power_supply).toUpperCase()}'` : null},
                                warranty= ${curr.warranty !== '' && curr.warranty !== null ? `'${(curr.warranty).toUpperCase()}'` : null}, hdmi= ${curr.hdmi ? 1 : 0}, vga= ${curr.vga ? 1 : 0}, 
                                dvi= ${curr.dvi ? 1 : 0}, bluetooth= ${curr.bluetooth ? 1 : 0}, fingerprint= ${curr.fingerprint ? 1 : 0}, camera= ${curr.camera ? 1 : 0}`)
                .condition(`WHERE stocks_id= ${curr.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Laptop;