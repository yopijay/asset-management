// Function
const Builder = require("../../../function/builder");
const Global = require("../../../function/global");

class Monitor {
    constructor (data) { this.data = data; }

    save = async id => {
        await new Builder(`tbl_stocks_info`)
            .insert({ columns: `stock_id, serial_no, model, color, power_supply, warranty, hdmi, vga, dvi, date_received, panel, resolution`, 
                            values: `${id}, ${(this.data).serial_no !== '' ? `'${((this.data).serial_no).toUpperCase()}'` : null}, ${(this.data).model !== '' ? `'${((this.data).model).toUpperCase()}'` : null},
                                            ${(this.data).color !== '' ? `'${((this.data).color).toUpperCase()}'` : null}, ${(this.data).power_supply !== '' ? `'${((this.data).power_supply).toUpperCase()}'` : null},
                                            ${(this.data).warranty !== '' ? `'${((this.data).warranty).toUpperCase()}'` : null}, ${(this.data).hdmi ? 1 : 0}, ${(this.data).vga ? 1 : 0}, ${(this.data).dvi ? 1 : 0}, 
                                            ${(this.data).date_received !== '' ? `'${(this.data).date_received}'` : null},
                                            ${(this.data).panel !== '' ? `'${((this.data).panel).toUpperCase()}'` : null}, ${(this.data).resolution !== '' ? `'${((this.data).resolution).toUpperCase()}'` : null}` })
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

        if(Global.compare(prev.panel, curr.panel)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'panel', previous: prev.panel,
                current: curr.panel !== '' && curr.panel !== null ? (curr.panel).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.resolution, curr.resolution)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'resolution', previous: prev.resolution,
                current: curr.resolution !== '' && curr.resolution !== null ? (curr.resolution).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.color, curr.color)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'color', previous: prev.color,
                current: curr.color !== '' && curr.color !== null ? (curr.color).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.power_supply, curr.power_supply)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'power_supply', previous: prev.power_supply,
                current: curr.power_supply !== '' && curr.power_supply !== null ? (curr.power_supply).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(prev.warranty, curr.warranty)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'warranty', previous: prev.warranty,
                current: curr.warranty !== '' && curr.warranty !== null ? (curr.warranty).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(parseInt(prev.hdmi), curr.hdmi ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'hdmi', previous: prev.hdmi,
                current: curr.hdmi ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.vga, curr.vga ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'vga', previous: prev.vga,
                current: curr.vga ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }
        
        if(Global.compare(prev.dvi, curr.dvi ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_stocks', item_id: prev.id, field: 'dvi', previous: prev.dvi,
                current: curr.dvi ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_stocks`).update(`brand_id= ${curr.brand_id}, updated_by= ${user.id}, date_updated= '${date}'`).condition(`WHERE id= ${curr.id}`).build();

            await new Builder(`tbl_stocks_info`)
                .update(`serial_no= '${curr.serial_no}', model= ${curr.model !== '' && curr.model !== null ? `'${(curr.model).toUpperCase()}'` : null},
                                panel= ${curr.panel !== '' && curr.panel !== null ? `'${(curr.panel).toUpperCase()}'` : null}, 
                                resolution= ${curr.resolution !== '' && curr.resolution !== null ? `'${(curr.resolution).toUpperCase()}'` : null},
                                color= ${curr.color !== '' && curr.color !== null ? `'${(curr.color).toUpperCase()}'` : null}, 
                                power_supply= ${curr.power_supply !== '' && curr.power_supply !== null ? `'${(curr.power_supply).toUpperCase()}'` : null},
                                warranty= ${curr.warranty !== '' && curr.warranty !== null ? `'${(curr.warranty).toUpperCase()}'` : null}, 
                                hdmi= ${curr.hdmi ? 1 : 0}, vga= ${curr.vga ? 1 : 0}, dvi= ${curr.dvi ? 1 : 0}, 
                                date_received= ${curr.date_received !== '' && curr.date_received !== null ? `'${curr.date_received}'` : null}`)
                .condition(`WHERE stock_id= ${curr.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Monitor;