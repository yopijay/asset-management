// Function
const Global = require("../../function/global");
const Builder = require('../../function/builder');

const audit = { series_no: '', table_name: 'tbl_assets',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Assets {
    series = async () => { return (await new Builder(`tbl_assets`).select().build()).rows; }
    specific = async id => {
        return (await new Builder(`tbl_assets AS asst`)
                        .select(`asst.*, info.*, brd.name AS brand`)
                        .join({ table: `tbl_assets_info AS info`, condition: `info.assets_id = asst.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `info.brand_id = brd.id`, type: `LEFT` })
                        .condition(`WHERE asst.id= ${id}`)
                        .build()).rows;
    }
    
    logs = async data => {
        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, at.user_id, at.date, asst.series_no AS asst_series, asst.serial_no`)
                        .join({ table: `tbl_assets AS asst`, condition: `at.item_id = asst.id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_assets' ORDER BY at.date DESC LIMIT 3`)
                        .build()).rows;
    }
    
    list = async data => {
        return (await new Builder(`tbl_assets AS asst`)
                        .select(`asst.id, asst.series_no, asst.serial_no, asst.status, info.type, brd.name AS brand, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, asst.date_created`)
                        .join({ table: `tbl_assets_info AS info`, condition: `info.assets_id = asst.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `info.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `asst.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE asst.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR asst.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY asst.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_assets AS asst`)
                        .select(`asst.id, asst.series_no, asst.serial_no, asst.status, info.type, brd.name AS brand, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, asst.date_created`)
                        .join({ table: `tbl_assets_info AS info`, condition: `info.assets_id = asst.id`, type: `LEFT` })
                        .join({ table: `tbl_brands AS brd`, condition: `info.brand_id = brd.id`, type: `LEFT` })
                        .join({ table: `tbl_employee AS cb`, condition: `asst.created_by = cb.user_id`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE asst.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR asst.serial_no LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                            ORDER BY asst.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_assets`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let serial = await new Builder(`tbl_assets`).select().condition(`WHERE serial_no= '${(data.serial_no).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(serial.rowCount > 0) { errors.push({ name: 'serial_no', message: 'Serial already used!' }); }

        if(!(errors.length > 0)) {
            let asst = (await new Builder(`tbl_assets`)
                                .insert({ columns: `series_no, serial_no, status, created_by, date_created`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${(data.serial_no).toUpperCase()}', ${data.status ? 1 : 0}, ${user.id}, '${date}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            switch(data.type) {
                case 'monitor':
                    await new Builder(`tbl_assets_info`)
                        .insert({ columns: `assets_id, type, brand_id, model, panel, resolution, color, power_supply, warranty, hdmi, vga, dvi`, 
                                        values: `${asst.id}, '${data.type}', ${data.brand_id}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                                        ${data.panel !== '' ? `'${(data.panel).toUpperCase()}'` : null}, ${data.resolution !== '' ? `'${(data.resolution).toUpperCase()}'` : null},
                                                        ${data.color !== '' ? `'${(data.color).toUpperCase()}'` : null}, ${data.power_supply !== '' ? `'${(data.power_supply).toUpperCase()}'` : null},
                                                        ${data.warranty !== '' ? `'${(data.warranty).toUpperCase()}'` : null}, ${data.hdmi ? 1 : 0}, ${data.vga ? 1 : 0}, ${data.dvi ? 1 : 0}` })
                        .build();
                    break;
                
                case 'laptop': 
                    await new Builder(`tbl_assets_info`)
                        .insert({ columns: `assets_id, type, brand_id, model, cpu, gpu, hdd, ssd, ram, os, power_supply, warranty, hdmi, vga, dvi, bluetooth, fingerprint, webcam, backlit_keyboard`, 
                                        values: `${asst.id}, '${data.type}', ${data.brand_id}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                                        ${data.cpu !== '' ? `'${(data.cpu).toUpperCase()}'` : null}, ${data.gpu !== '' ? `'${(data.gpu).toUpperCase()}'` : null},
                                                        ${data.hdd !== '' ? `'${(data.hdd).toUpperCase()}'` : null}, ${data.ssd !== '' ? `'${(data.ssd).toUpperCase()}'` : null},
                                                        ${data.ram !== '' ? `'${(data.ram).toUpperCase()}'` : null}, ${data.os !== '' ? `'${(data.os).toUpperCase()}'` : null},
                                                        ${data.power_supply !== '' ? `'${(data.power_supply).toUpperCase()}'` : null}, ${data.warranty !== '' ? `'${(data.warranty).toUpperCase()}'` : null},
                                                        ${data.hdmi ? 1 : 0}, ${data.vga ? 1 : 0}, ${data.dvi ? 1 : 0}, ${data.bluetooth ? 1 : 0}, ${data.fingerprint ? 1 : 0}, ${data.webcam ? 1 : 0},
                                                        ${data.backlit_keyboard ? 1 : 0}` })
                        .build();
                    break;
                case 'system_unit': 
                    await new Builder(`tbl_assets_info`)
                        .insert({ columns: `assets_id, type, brand_id, model, cpu, gpu, hdd, ssd, ram, os, power_supply, warranty, hdmi, vga, dvi, bluetooth, wifi`, 
                                        values: `${asst.id}, '${data.type}', ${data.brand_id}, ${data.model !== '' ? `'${(data.model).toUpperCase()}'` : null},
                                                        ${data.cpu !== '' ? `'${(data.cpu).toUpperCase()}'` : null}, ${data.gpu !== '' ? `'${(data.gpu).toUpperCase()}'` : null},
                                                        ${data.hdd !== '' ? `'${(data.hdd).toUpperCase()}'` : null}, ${data.ssd !== '' ? `'${(data.ssd).toUpperCase()}'` : null},
                                                        ${data.ram !== '' ? `'${(data.ram).toUpperCase()}'` : null}, ${data.os !== '' ? `'${(data.os).toUpperCase()}'` : null},
                                                        ${data.power_supply !== '' ? `'${(data.power_supply).toUpperCase()}'` : null}, ${data.warranty !== '' ? `'${(data.warranty).toUpperCase()}'` : null},
                                                        ${data.hdmi ? 1 : 0}, ${data.vga ? 1 : 0}, ${data.dvi ? 1 : 0}, ${data.bluetooth ? 1 : 0}, ${data.wifi ? 1 : 0}` })
                        .build();
                    break;
            }

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = asst.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);

            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let asst = (await new Builder(`tbl_assets AS asst`)
                            .select(`asst.*, info.*`).join({ table: `tbl_assets_info AS info`, condition: `info.assets_id = asst.id`, type: `LEFT` })
                            .condition(`WHERE asst.id = ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];
        
        let serial = await new Builder(`tbl_assets`).select().condition(`WHERE serial_no= '${(data.serial_no).toUpperCase()}'`).build();

        if(Global.compare(asst.serial_no, data.serial_no)) {
            if(!(serial.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'serial_no', previous: asst.serial_no,
                    current: (data.serial_no).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'serial_no', message: 'Serial no already used!' }); }
        }

        if(Global.compare(asst.brand_id, data.brand_id)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'brand_id', previous: asst.brand_id,
                current: data.brand_id, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asst.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'status', previous: asst.status, 
                                    current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asst.model, data.model)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'model', previous: asst.model,
                current: data.model !== '' && data.model !== null ? (data.model).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(data.type === 'system_unit' && data.type === 'laptop') {
            if(Global.compare(asst.cpu, data.cpu)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'cpu', previous: asst.cpu,
                    current: data.cpu !== '' && data.cpu !== null ? (data.cpu).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
            }
    
            if(Global.compare(asst.gpu, data.gpu)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'gpu', previous: asst.gpu,
                    current: data.gpu !== '' && data.gpu !== null ? (data.gpu).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
            }
    
            if(Global.compare(asst.hdd, data.hdd)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'hdd', previous: asst.hdd,
                    current: data.hdd !== '' && data.hdd !== null ? (data.hdd).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
            }
    
            if(Global.compare(asst.ssd, data.ssd)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'ssd', previous: asst.ssd,
                    current: data.ssd !== '' && data.ssd !== null ? (data.ssd).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
            }
    
            if(Global.compare(asst.ram, data.ram)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'ram', previous: asst.ram,
                    current: data.ram !== '' && data.ram !== null ? (data.ram).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
            }
    
            if(Global.compare(asst.os, data.os)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'os', previous: asst.os,
                    current: data.os !== '' && data.os !== null ? (data.os).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
            }

            if(Global.compare(asst.bluetooth, data.bluetooth ? 1 : 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'bluetooth', previous: asst.bluetooth, 
                                        current: data.bluetooth ? 1 : 0, action: 'update', user_id: user.id, date: date });
            }
        }

        if(Global.compare(asst.power_supply, data.power_supply)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'power_supply', previous: asst.power_supply,
                current: data.power_supply !== '' && data.power_supply !== null ? (data.power_supply).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asst.warranty, data.warranty)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'warranty', previous: asst.warranty,
                current: data.warranty !== '' && data.warranty !== null ? (data.warranty).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asst.hdmi, data.hdmi ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'hdmi', previous: asst.hdmi, 
                                    current: data.hdmi ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asst.vga, data.vga ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'vga', previous: asst.vga, 
                                    current: data.vga ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(asst.dvi, data.dvi ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'dvi', previous: asst.dvi, 
                                    current: data.dvi ? 1 : 0, action: 'update', user_id: user.id, date: date });
        }

        if(data.type === 'system_unit') {
            if(Global.compare(asst.wifi, data.wifi ? 1 : 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'wifi', previous: asst.wifi, 
                                        current: data.wifi ? 1 : 0, action: 'update', user_id: user.id, date: date });
            }
        }

        if(data.type === 'laptop') {
            if(Global.compare(asst.fingerprint, data.fingerprint ? 1 : 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'fingerprint', previous: asst.fingerprint, 
                                        current: data.fingerprint ? 1 : 0, action: 'update', user_id: user.id, date: date });
            }
    
            if(Global.compare(asst.webcamera, data.webcamera ? 1 : 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'webcamera', previous: asst.webcamera, 
                                        current: data.webcamera ? 1 : 0, action: 'update', user_id: user.id, date: date });
            }
    
            if(Global.compare(asst.backlit_keyboard, data.backlit_keyboard ? 1 : 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_assets', item_id: asst.id, field: 'backlit_keyboard', previous: asst.backlit_keyboard, 
                                        current: data.backlit_keyboard ? 1 : 0, action: 'update', user_id: user.id, date: date });
            }
        }

        if(!(errors.length > 0)) {
            await new Builder(`tbl_assets`)
                .update(`serial_no= '${(data.serial_no).toUpperCase()}', status= ${data.status ? 1 : 0}, updated_by= ${user.id}, date_updated= '${date}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            switch(data.type) {
                case 'monitor':
                    await new Builder(`tbl_assets_info`)
                        .update(`model= ${data.model !== '' && data.model !== null ? `'${(data.model).toUpperCase()}'` : null},
                                        panel= ${data.panel !== '' && data.panel !== null ? `'${(data.panel).toUpperCase()}'` : null}, 
                                        resolution= ${data.resolution !== '' && data.resolution !== null ? `'${(data.resolution).toUpperCase()}'` : null},
                                        color= ${data.color !== '' && data.color !== null ? `'${(data.color).toUpperCase()}'` : null}, 
                                        power_supply= ${data.power_supply !== '' && data.power_supply !== null ? `'${(data.power_supply).toUpperCase()}'` : null},
                                        warranty= ${data.warranty !== '' && data.warranty !== null ? `'${(data.warranty).toUpperCase()}'` : null}, 
                                        hdmi= ${data.hdmi ? 1 : 0}, vga= ${data.vga ? 1 : 0}, dvi= ${data.dvi ? 1 : 0}`)
                        .condition(`WHERE assets_id= ${data.id}`)
                        .build();
                    break;
                case 'laptop': 
                    await new Builder(`tbl_assets_info`)
                        .update(`model= ${data.model !== '' && data.model !== null ? `'${(data.model).toUpperCase()}'` : null},
                                        cpu= ${data.cpu !== '' && data.cpu !== null ? `'${(data.cpu).toUpperCase()}'` : null}, 
                                        gpu= ${data.gpu !== '' && data.gpu !== null ? `'${(data.gpu).toUpperCase()}'` : null},
                                        hdd= ${data.hdd !== '' && data.hdd !== null ? `'${(data.hdd).toUpperCase()}'` : null}, 
                                        ssd= ${data.ssd !== '' && data.ssd !== null ? `'${(data.ssd).toUpperCase()}'` : null},
                                        ram= ${data.ram !== '' && data.ram !== null ? `'${(data.ram).toUpperCase()}'` : null}, 
                                        os= ${data.os !== '' && data.os !== null ? `'${(data.os).toUpperCase()}'` : null},
                                        power_supply= ${data.power_supply !== '' && data.power_supply !== null ? `'${(data.power_supply).toUpperCase()}'` : null},
                                        warranty= ${data.warranty !== '' && data.warranty !== null ? `'${(data.warranty).toUpperCase()}'` : null}, 
                                        hdmi= ${data.hdmi ? 1 : 0}, vga= ${data.vga ? 1 : 0}, dvi= ${data.dvi ? 1 : 0}, bluetooth= ${data.bluetooth ? 1 : 0}, fingerprint= ${data.fingerprint ? 1 : 0},
                                        webcamera= ${data.webcamera ? 1 : 0}, backlit_keyboard= ${data.backlit_keyboard ? 1 : 0}`)
                        .condition(`WHERE assets_id= ${data.id}`)
                        .build();
                    break;
                case 'system_unit': 
                    await new Builder(`tbl_assets_info`)
                        .update(`model= ${data.model !== '' && data.model !== null ? `'${(data.model).toUpperCase()}'` : null},
                                        cpu= ${data.cpu !== '' && data.cpu !== null ? `'${(data.cpu).toUpperCase()}'` : null}, 
                                        gpu= ${data.gpu !== '' && data.gpu !== null ? `'${(data.gpu).toUpperCase()}'` : null},
                                        hdd= ${data.hdd !== '' && data.hdd !== null ? `'${(data.hdd).toUpperCase()}'` : null}, 
                                        ssd= ${data.ssd !== '' && data.ssd !== null ? `'${(data.ssd).toUpperCase()}'` : null},
                                        ram= ${data.ram !== '' && data.ram !== null ? `'${(data.ram).toUpperCase()}'` : null}, 
                                        os= ${data.os !== '' && data.os !== null ? `'${(data.os).toUpperCase()}'` : null},
                                        power_supply= ${data.power_supply !== '' && data.power_supply !== null ? `'${(data.power_supply).toUpperCase()}'` : null},
                                        warranty= ${data.warranty !== '' && data.warranty !== null ? `'${(data.warranty).toUpperCase()}'` : null}, 
                                        hdmi= ${data.hdmi ? 1 : 0}, vga= ${data.vga ? 1 : 0}, dvi= ${data.dvi ? 1 : 0}, bluetooth= ${data.bluetooth ? 1 : 0}, wifi= ${data.wifi ? 1 : 0}`)
                        .condition(`WHERE assets_id= ${data.id}`)
                        .build();
                    break;
            }

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Assets;