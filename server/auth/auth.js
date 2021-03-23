const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b1912875a0c578',
    password: 'c23c71c4',
    database: 'heroku_3cf670ea41a7b6e'
})

module.exports = pool;