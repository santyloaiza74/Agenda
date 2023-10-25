'use strict';
const { DataTypes } = require('sequelize')
const { AGENDA_TABLE } = require('../models/agenda.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(AGENDA_TABLE, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fecha: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      hora_inicio: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false
      },
      hora_fin: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER
      },
      lugar: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('agendas');
  }
};
