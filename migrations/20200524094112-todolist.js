'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('todolist', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      contents : {
          type : Sequelize.TEXT,
          allowNull : false,
      }
    },{
        timestamps: true , 
        paranoid: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('todolist')
  }
};
