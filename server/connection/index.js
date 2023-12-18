// Libraries
const Pool = require('pg').Pool;

const config = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
} : {
    user: 'postgres',
    host: 'localhost',
    database: 'db_ams',
    password: 'root',
    port: 5432
}

const pool = new Pool(config);
module.exports = pool;

// const mysql = require('mysql');

// const config = {
//     host: '100.100.100.20',
//     user: 'kenneth',
//     password: 'kenneth',
//     database: 'kci'
// }

// const conn = mysql.createConnection(config);
// module.exports = conn;