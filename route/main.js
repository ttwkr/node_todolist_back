const getlist = require('../todolist')

module.exports = function(app) {
    app.get('/todolist', (req, res)=>{
        res.json('index.html')
    });
    app.get('/about', (req, res) => {
        res.render('about.html');
    })
}