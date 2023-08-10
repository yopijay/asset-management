const Builder = require("../../function/builder"); // Query builder
const Global = require("../../function/global"); // Function

const audit = { series_no: '', table_name: 'tbl_department',  item_id: 0, field: '', previous: null, current: null, action: '', user_id: 0, date: '' }; // Used for audit trail
class Department {
    series = async () =>{ return (await new Builder(`tbl_department`).select().build()).rows; }
    specific = async id => { return (await new Builder(`tbl_department`).select().condition(`WHERE id= ${id}`).build()).rows; }

    logs = async data => {
        return [];
    }

    list = async data => {
        return []
    }

    search = async data => {
        return [];
    }

    save = async data => {
        return data;
        // let date = Global.date(new Date());
        // let user = JSON.parse(atob(data.token));
        // let errors = [];

        // let series = await new Builder(`tbl_department`).select().condition(`WHERE series_no= '${(data.series_no).toUpperCase()}'`).build();
        // let name = await new Builder(`tbl_department`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        // if(series.rowCount > 0) { errors.push({ name: 'series_no', message: 'Series number already exist!' }); }
        // if(name.rowCount > 0) { errors.push({ name: 'name', message: 'Company already exist!' }); }

        // if(!(errors.length > 0)) {
        //     let cmp = (await new Builder(`tbl_department`)
        //                         .insert({ columns: `series_no, name, telephone, description, address, status, created_by, date_created`, 
        //                                         values: `'${(data.series_no).toUpperCase()}', '${(data.name).toUpperCase()}', '${data.telephone}',
        //                                                         ${data.description !== '' ? `'${(data.description).toUpperCase()}'` : null}, 
        //                                                         ${data.address !== '' ? `'${(data.address).toUpperCase()}'` : null}, ${data.status ? 1 : 0},
        //                                                         ${user.id}, '${date}'` })
        //                         .condition(`RETURNING id`)
        //                         .build()).rows[0];

        //     audit.series_no = Global.randomizer(7);
        //     audit.field = 'all';
        //     audit.item_id = cmp.id;
        //     audit.action = 'create';
        //     audit.user_id = user.id;
        //     audit.date = date;
            
        //     Global.audit(audit);
        //     return { result: 'success', message: 'Successfully saved!' }
        // }
        // else { return { result: 'error', error: errors } }
    }

    update = async data => {
        return data;
        // let cmp = (await new Builder(`tbl_department`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        // let date = Global.date(new Date());
        // let user = JSON.parse(atob(data.token));
        // let audits = [];
        // let errors = [];

        // let name = await new Builder(`tbl_department`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build();

        // if(Global.compare(cmp.name, data.name)) {
        //     if(!(name.rowCount > 0)) {
        //         audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: cmp.id, field: 'name', previous: cmp.name,
        //             current: (data.name).toUpperCase(), action: 'update', user_id: user.id, date: date });
        //     }
        //     else { errors.push({ name: 'name', message: 'Name already exist!' }); }
        // }

        // if(Global.compare(cmp.telephone, data.telephone)) {
        //     audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: cmp.id, field: 'telephone', previous: cmp.telephone,
        //         current: data.telephone !== '' && data.telephone !== null ? data.telephone : null, action: 'update', user_id: user.id, date: date });
        // }

        // if(Global.compare(cmp.description, data.description)) {
        //     audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: cmp.id, field: 'description', previous: cmp.description,
        //         current: data.description !== '' && data.description !== null ? (data.description).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        // }

        // if(Global.compare(cmp.address, data.address)) {
        //     audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: cmp.id, field: 'address', previous: cmp.address,
        //         current: data.address !== '' && data.address !== null ? (data.address).toUpperCase() : null, action: 'update', user_id: user.id, date: date });
        // }

        // if(Global.compare(cmp.status, data.status ? 1 : 0)) {
        //     audits.push({ series_no: Global.randomizer(7), table_name: 'tbl_department', item_id: cmp.id, field: 'status', previous: cmp.status, 
        //                             current: data.status ? 1 : 0, action: 'update', user_id: user.id, date: date });
        // }

        // if(!(errors.length >0)) {
        //     await new Builder(`tbl_department`)
        //         .update(`name= '${(data.name).toUpperCase()}', telephone= ${data.telephone !== '' && data.telephone !== null ? `'${data.telephone}'` : null}, 
        //             description= ${data.description !== '' && data.description !== null ? `'${(data.description).toUpperCase()}'` : null}, 
        //             address= ${data.address !== '' && data.address !== null ? `'${(data.address).toUpperCase()}'` : null}, status= ${data.status ? 1 : 0}, 
        //             updated_by= ${user.id}, date_updated= '${date}'`)
        //         .condition(`WHERE id= ${data.id}`)
        //         .build();

        //     audits.forEach(data => Global.audit(data));
        //     return { result: 'success', message: 'Successfully updated!' }
        // }
        // else { return { result: 'error', error: errors } }
    }
}

module.exports = Department;