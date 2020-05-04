const mysql = require('mysql2');

const getConnection = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        port : 3306,
        database : 'portfolio'
    })
}

module.exports = {
    getConnection
}