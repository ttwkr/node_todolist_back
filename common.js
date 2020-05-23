const mysql = require('mysql2');
const env = require('dotenv').config()

const getConnection = () => {
    return mysql.createConnection({
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        port : process.env.DB_PORT,
        database : process.env.DB_DATABASE
    })
}

const dbConnect = () => {
    const connect = getConnection()

    connect.connect((err) => {
        if(err) {
            throw new Error('fail connect')
        }
    })
}

const queryFetch = (query) => {
    const connect = getConnection()

    return connect.query(query, (error, result, fields) => {
        if(error) {
            console.log(error)
            connect.end()          
        }

        connect.end() 
    })
    
}

module.exports = {
    getConnection,
    dbConnect,
    queryFetch
}