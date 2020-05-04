'use strict'

const common = require('./common'); // db 연결 모듈 호출

const excute = async (req, res) => {
    
    const connection = await common.getConnection() //db 연결

    connection.connect( (err) => {
        if(err) {
            throw new Error('fail connect')
        }
    })

    connection.query('select * from todolist', (error, result, fields) => {
        if(error) {
            console.log(error)
        }
        console.log(result)
        res.send(result)
    })

    connection.end()
}

const addContents = (req, res) => {
    const connection = common.getConnection()

    connection.connect( (err) => {
        if(err) {
            throw new Error('fail connect')
        }
    })

    connection.query(`insert into todolist (contents) values (${req.body.contents})`, (error, result, fields) => {
        if(error) {
            console.log(error)
        }
        console.log(result)
        res.send('success')
    })

    connection.end()
}

module.exports = {
    excute,
    addContents
}

