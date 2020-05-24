'use strict';

module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('todolist', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contents : {
            type : DataTypes.TEXT,
            allowNull : false,
        }
    }, {
        timestamps: true , 
        paranoid: true
    })
}
