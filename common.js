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