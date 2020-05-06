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
            res.send('fail listing')
        }
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

    let query = `insert into todolist (contents) values ('${req.body.contents}')`
    console.log(query)
    connection.query(query, (error, result, fields) => {
        if(error) {
            console.log(error)
            res.send('fail add')
        }
        res.send('success')
    })

    connection.end()
}

const deleteContent = (req, res)=> {
    const connection = common.getConnection();

    connection.connect( (err) => {
        if(err){
            throw new Error('fail connect')
        }
    })
    
    let query = `delete from todolist where id = ${req.body.id}`
    
    connection.query(query, (error, result, fields) => {
        if(error) {
            console.log(error)
            res.send('fail')
        }
        console.log(result)
        res.send('success')
    })

    connection.end()
}

module.exports = {
    excute,
    addContents,
    deleteContent
}

