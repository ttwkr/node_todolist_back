const express = require('express');
const sequelize = require('../models').sequelize
const router = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const todolist = require('../api/todolist')
const member = require('../api/member')


sequelize.sync()
router.use(cors());
router.use(bodyParser.json())
var server = router.listen(8000, function(){
    console.log("Express server has started on port 8000")
});

//totolist

router.get('/api/todolist', todolist.excute)
router.post('/api/add/todolist',todolist.addContents)
router.delete('/api/delete/todolist',todolist.deleteContent);

//member join

// router.post('/api/member/join', member.join);