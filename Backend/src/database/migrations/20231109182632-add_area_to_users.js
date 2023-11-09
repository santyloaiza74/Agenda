'use strict';
const {USER_TABLE} =require('../models/user.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE,'area_id',{
      type: Sequelize.DataTypes.INTEGER,
      references:{
        model: 'area',
        key: 'id'
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE,'area_id')
  }
};
