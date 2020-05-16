'use strict'

const common = require('../common');

const join = (req, res) => {
    common.dbConnect()

    let form = req.body.data.form
    let query = `insert into user (user_id, password, email)
                values ('${form.member_id}', '${form.password}', '${form.email}')`
    const result = common.queryFetch(query);

    if(!result) {
        res.send('fail join')
    }
    res.send('success join')
}

module.exports = {
    join
}