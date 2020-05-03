const express = require('express');
const router = express();
const todolist = require('../todolist')

var server = router.listen(8000, function(){
    console.log("Express server has started on port 8000")
});

router.get('/api/todolist', todolist.excute)