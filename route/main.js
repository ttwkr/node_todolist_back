const express = require('express');
const router = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const todolist = require('../todolist')

router.use(cors());
router.use(bodyParser.json())
var server = router.listen(8000, function(){
    console.log("Express server has started on port 8000")
});

router.get('/api/todolist', todolist.excute)
router.post('/api/add/todolist',todolist.addContents)