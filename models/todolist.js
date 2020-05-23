'use strict';

const common = require('../common');

const todolist = common.sequelize.define('todolist', {
        id : {
            type : common.Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contents : {
            type : common.Sequelize.DataTypes.TEXT,
            allowNull : false,
        }
    }, {
    timestamps: true , 
    paranoid: true
})

module.exports = {
    todolist
}
