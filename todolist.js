'use strict'

const common = require('./common'); // db 연결 모듈 호출

module.exports.excute = async (req, res) => {
    
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

