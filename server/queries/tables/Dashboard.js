const Builder = require("../../function/builder"); // Query builder

class Dashboard {
    main = async data => {
        let summ = [];
        let permission = JSON.parse(data.permission);

        if(data.user_level !== 'superadmin' && permission !== null) {
            for (let key1 in permission) {
                for (let key2 in permission[key1]) {
                    if(permission[key1][key2].list)
                        switch(key2) {
                            case 'stocks': summ.push({ name: 'stocks', quantity: parseInt((await new Builder(`tbl_stocks`).select(`SUM(quantity) AS quantity`).build()).rows[0].quantity) }); break;
                            case 'modules': summ.push({ name: 'modules', quantity: (await new Builder(`tbl_modules`).select().build()).rowCount }); break;
                            case 'users': summ.push({ name: 'users', quantity: (await new Builder(`tbl_users`).select().build()).rowCount }); break;
                            case 'products': summ.push({ name: 'products', quantity: 0 }); break;
                        }
                }
            }
        }
        else {
            summ.push({ name: 'stocks', quantity: parseInt((await new Builder(`tbl_stocks`).select(`SUM(quantity) AS quantity`).build()).rows[0].quantity) });
            summ.push({ name: 'modules', quantity: (await new Builder(`tbl_modules`).select().build()).rowCount });
            summ.push({ name: 'users', quantity: (await new Builder(`tbl_users`).select().build()).rowCount });
            summ.push({ name: 'products', quantity: 0 });
        }

        return summ;
    }

    userperbranch = async data => {
        
    }
}

module.exports = Dashboard;