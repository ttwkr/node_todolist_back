'use strict'

// const common = require('../common'); // db 연결 모듈 호출
const {todolist} = require('../models');
const aws = require('aws-sdk');
require('dotenv').config()

aws.config.update(
    {
        region:'ap-northeast-2'
    }
)

const listTopic = new aws.SNS(
    {
        apiVersion: process.env.version //특정 버전만 입력하자
    }
).listTopics({}).promise();

const sendMail = (params) => {
    return new aws.SNS(
        {
            apiVersion : process.env.version
        }
    ).publish(params).promise()
}

const excute = async (req, res) => {

    const result = await todolist.findAll();

    res.send(result)

    //기존 디비 연결
    /*
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
    */
}

const addContents = async (req, res) => {

    const result = await todolist.create(
        {
            contents : req.body.contents
        }
    ).then( result => {

        const params = {
            Message : req.body.contents,
            TopicArn : process.env.SNS_ARN
        }
        sendMail(params).then( data => {
            console.log(data.MessageId);
        }).catch (err => {
            console.error(err, err.stack)
        })

        res.send(`success add ${result}`)
    }).catch(err => {
        res.send(err)
    })

//     common.dbConnect()

//     let query = `insert into todolist (contents) values ('${req.body.contents}')`
    
//     let result = common.queryFetch(query)

//     if(!result) {
//         res.send('fail add')
//     }
//     res.send('success add')
}

const deleteContent = (req, res)=> {

    const result = todolist.destroy(
        {
            where : {
                id : req.body.id
            }
        }
    ).then(result => {
        res.send('success delete')
    }).catch( err => {
        res.send('fail delete', err)
    })
//     common.dbConnect()
    
//     let query = `delete from todolist where id = ${req.body.id}`
    
//     const result = common.queryFetch(query)

//     if(!result) {
//         res.send('fail delete')
//     }
//     res.send('success delete')
}

module.exports = {
    excute,
    addContents,
    deleteContent
}

