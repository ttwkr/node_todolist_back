const express = require('express');
const router = express();
const todolist = require('../todolist')

var server = router.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

router.get('/', (req, res) => {
    res.json({'asdf' : 'hi'})
})

router.get('/todolist', todolist.excute)