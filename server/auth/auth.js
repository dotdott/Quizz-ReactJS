const mysql = require('mysql');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Kur0k0123',
    database: 'quizz-app'
})

module.exports = pool;