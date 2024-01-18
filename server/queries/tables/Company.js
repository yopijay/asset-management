const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_company',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Company {
    series = async () =>{ return (await new Builder(`tbl_company`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_company`).select().condition(`WHERE id= ${id}`).build()).rows; }

    dropdown = async data => {
        switch(data.type) {
            case 'nav': return [];
            default: return [{ id: 0, name: '-- SELECT AN ITEM BELOW --' }]
                            .concat((await new Builder(`tbl_company`).select(`id, name, extension`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows);
        }
    }

    logs = async data => {
        let condition = '';
        let search = `AND (at.field LIKE '%${(data.logssearchtxt).toLowerCase()}%' OR cmp.name LIKE '%${(data.logssearchtxt).toUpperCase()}%'
                                OR cmp.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%' OR at.series_no LIKE '%${(data.logssearchtxt).toUpperCase()}%')`;

        switch(JSON.parse(atob(data.token)).role) {
            case 'user': condition = `AND at.user_id= ${JSON.parse(atob(data.token)).id}`; break;
            case 'admin': condition= `AND (at.user_id= ${JSON.parse(atob(data.token)).id} OR ubi.head_id= ${JSON.parse(atob(data.token)).id})`; break;
            default:
        }

        return (await new Builder(`tbl_audit_trail AS at`)
                        .select(`at.id, at.series_no AS at_series, at.table_name, at.item_id, at.field, at.previous, at.current, at.action, 
                                        at.user_id, at.date, cmp.series_no AS cmp_series, cmp.name, CONCAT(ubi.lname, ', ', ubi.fname) AS ub_name`)
                        .join({ table: `tbl_company AS cmp`, condition: `at.item_id = cmp.id`, type: `LEFT` })
                        .join({ table: `tbl_users_info AS ubi`, condition: `at.user_id = ubi.user_id`, type: `LEFT` })
                        .condition(`WHERE at.table_name= 'tbl_company' ${condition} ${data.logssearchtxt !== '' ? search : ''}
                                            ORDER BY at.${data.logsorderby} ${(data.logssort).toUpperCase()} ${data.limit !== '' ? `LIMIT ${data.limit}` : ''}`)
                        .build()).rows;
    }

    list = async data => {
        return (await new Builder(`tbl_company AS cmp`)
                        .select(`cmp.id, cmp.series_no, cmp.name, cmp.telephone, cmp.address, cmp.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, cmp.date_created`)
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = cmp.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ?
                                                `WHERE cmp.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' OR cmp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} 
                                                ORDER BY cmp.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    search = async data => {
        return (await new Builder(`tbl_company AS cmp`)
                        .select(`cmp.id, cmp.series_no, cmp.name, cmp.telephone, cmp.address, cmp.status, CONCAT(cb.lname, ', ', cb.fname, ' ', cb.mname) AS created_by, cmp.date_created`)
                        .join({ table: `tbl_users_info AS cb`, condition: `cb.user_id = cmp.created_by`, type: `LEFT` })
                        .condition(`${data.searchtxt !== '' ? `WHERE cmp.series_no LIKE '%${(data.searchtxt).toUpperCase()}%' 
                                                OR cmp.name LIKE '%${(data.searchtxt).toUpperCase()}%'` : ''} ORDER BY cmp.${data.orderby} ${(data.sort).toUpperCase()}`)
                        .build()).rows;
    }

    save = async data => {
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let errors = [];

        let series = await new Builder(`tbl_company`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        let name = await new Builder(`tbl_company`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Company already exist!' }); }

        if(!(errors.length > 0)) {
            let cmp = (await new Builder(`tbl_company`)
                                .insert({ columns: `series_no, name, telephone, description, address, status, created_by, date_created, extension`, 
                                                values: `'${(data.series_no).toUpperCase()}', '${(data.name).toUpperCase()}', '${data.telephone}',
                                                                ${data.description !== '' ? `'${(data.description).toUpperCase()}'` : null}, 
                                                                ${data.address !== '' ? `'${(data.address).toUpperCase()}'` : null}, ${data.status ? 1 : 0},
                                                                ${user.id}, '${date}', '${(data.extension).toLowerCase()}'` })
                                .condition(`RETURNING id`)
                                .build()).rows[0];

            audit.series_no = Global.randomizer(7);
            audit.field = 'all';
            audit.item_id = cmp.id;
            audit.action = 'create';
            audit.user_id = user.id;
            audit.date = date;
            
            Global.audit(audit);
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: errors } }
    }

    update = async data => {
        let cmp = (await new Builder(`tbl_company`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = Global.date(new Date());
        let user = JSON.parse(atob(data.token));
        let audits = [];
        let errors = [];

        let name = await new Builder(`tbl_company`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        if(Global.compare(cmp.name, data.name)) {
            if(!(name.rowCount > 0)) {
                audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_company', item_id: cmp.id, field: 'name', previous: cmp.name,
                    current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
            }
            else { errors.push({ name: 'name', message: 'Name already exist!' }); }
        }

        if(Global.compare(cmp.extension, data.extension)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_company', item_id: cmp.id, field: 'extension', previous: cmp.extension,
                current: data.extension !== '' && data.extension !== null ? (data.extension).toLowerCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(cmp.telephone, data.telephone)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_company', item_id: cmp.id, field: 'telephone', previous: cmp.telephone,
                current: data.telephone !== '' && data.telephone !== null ? data.telephone : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(cmp.description, data.description)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_company', item_id: cmp.id, field: 'description', previous: cmp.description,
                current: data.description !== '' && data.description !== null ? (data.description).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(cmp.address, data.address)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_company', item_id: cmp.id, field: 'address', previous: cmp.address,
                current: data.address !== '' && data.address !== null ? (data.address).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        }

        if(Global.compare(cmp.status, data.status ? 1 : 0)) {
            audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_company', item_id: cmp.id, field: 'status', previous: cmp.status === 1 ? 'Active' : 'Inactive', 
                                    current: data.status ? 'Active' : 'Inactive', action: 'update', user_id: user.id, date: date });
        }

        if(!(errors.length >0)) {
            await new Builder(`tbl_company`)
                .update(`name= '${(data.name).toUpperCase()}', telephone= ${data.telephone !== '' && data.telephone !== null ? `'${data.telephone}'` : null}, 
                    description= ${data.description !== '' && data.description !== null ? `'${(data.description).toUpperCase()}'` : null}, 
                    address= ${data.address !== '' && data.address !== null ? `'${(data.address).toUpperCase()}'` : null}, status= ${data.status ? 1 : 0}, 
                    updated_by= ${user.id}, date_updated= '${date}', extension= '${data.extension}'`)
                .condition(`WHERE id= ${data.id}`)
                .build();

            audits.forEach(data => Global.audit(data));
            return { result: 'success', message: 'Successfully updated!' }
        }
        else { return { result: 'error', error: errors } }
    }
}

module.exports = Company;