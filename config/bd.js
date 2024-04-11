const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Qazwsx12@',
    database: 'Teste_Node'

})

module.exports = connection;