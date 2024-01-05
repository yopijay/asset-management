const Builder = require("../../function/builder"); // Query builder

class Dashboard {
    main = async data => {
        let summ = [];
        let permission = JSON.parse(data.permission);
        let user = (await new Builder(`tbl_users_info`).select().condition(`WHERE user_id= ${data.id}`).build()).rows[0];

        if(data.user_level === 'superadmin') {
            summ.push({ name: 'stocks', quantity: parseInt((await new Builder(`tbl_stocks`).select(`SUM(quantity) AS quantity`).build()).rows[0].quantity) });
            summ.push({ name: 'modules', quantity: (await new Builder(`tbl_modules`).select().build()).rowCount });
            summ.push({ name: 'users', quantity: (await new Builder(`tbl_users`).select().build()).rowCount });
            summ.push({ name: 'products', quantity: 0 });
        }
        else {
            if(permission !== null) {
                for (let key1 in permission) {
                    for (let key2 in permission[key1]) {
                        if(permission[key1][key2].list)
                            switch(key2) {
                                case 'stocks': summ.push({ name: 'stocks', quantity: parseInt((await new Builder(`tbl_stocks`).select(`SUM(quantity) AS quantity`).condition(`WHERE branch= '${user.branch}'`).build()).rows[0].quantity) }); break;
                                case 'modules': summ.push({ name: 'modules', quantity: (await new Builder(`tbl_modules`).select().build()).rowCount }); break;
                                case 'users': summ.push({ name: 'users', quantity: (await new Builder(`tbl_users AS usr`).select().join({ table: `tbl_users_info AS info`, condition: `info.user_id = usr.id`, type: `LEFT` }).condition(`WHERE info.branch= '${user.branch}'`).build()).rowCount }); break;
                                case 'products': summ.push({ name: 'products', quantity: 0 }); break;
                            }
                    }
                }
            }
        }

        return summ;
    }

    userperbranch = async data => {
        return [];
    }

    stocks = async data => {
        let stocks = [];
        let permission = JSON.parse(data.permission);
        let categories = (await new Builder(`tbl_category`).select().build()).rows;
        let qty = 0;
        let onhand = 0;
        
        if(data.user_level === 'superadmin') {
            for(let count = 0; count < categories.length; count++) {
                if((categories[count].name).toLowerCase() !== 'toner') {
                    qty = parseInt((await new Builder(`tbl_stocks`).select().condition(`WHERE category_id= ${categories[count].id}`).build()).rowCount);
                    onhand = parseInt((await new Builder(`tbl_stocks`).select(`SUM(quantity) AS quantity`).condition(`WHERE category_id= ${categories[count].id}`).build()).rows[0].quantity);
                }
                stocks.push({ name: (categories[count].name).toLowerCase(), quantity: qty, onhand: (onhand/qty) * 100, issued: ((qty - onhand)/qty) * 100 });
            }
        }
        else {
            if(permission !== null) {

            }
        }

        return stocks;
    }
}

module.exports = Dashboard;