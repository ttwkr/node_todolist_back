'use strict'

const common = require('../common'); // db 연결 모듈 호출

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
    common.dbConnect()

    let query = `insert into todolist (contents) values ('${req.body.contents}')`
    
    let result = common.queryFetch(query)

    if(!result) {
        res.send('fail add')
    }
    res.send('success add')
}

const deleteContent = (req, res)=> {
    common.dbConnect()
    
    let query = `delete from todolist where id = ${req.body.id}`
    
    const result = common.queryFetch(query)

    if(!result) {
        res.send('fail delete')
    }
    res.send('success delete')
}

module.exports = {
    excute,
    addContents,
    deleteContent
}

