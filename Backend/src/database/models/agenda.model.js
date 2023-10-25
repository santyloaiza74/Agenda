const { DataTypes, Model } = require('sequelize')

const AGENDA_TABLE= 'agendas'

const AgendaSchema={
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_inicio:{
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_fin:{
        type: DataTypes.TIME,
        allowNull: false
    },
    user_id:{
        type:DataTypes.INTEGER
    },
    lugar:{
        type: DataTypes.STRING,
        allowNull:false
    },
    status:{
        type: DataTypes.BOOLEAN
    }
}
class Agenda extends Model {
    static associate(models) { }

    static config(sequelize) {
        return { sequelize, tableName: AGENDA_TABLE, modelName: 'Agenda', timestamps: false }
    }
}
module.exports = { AGENDA_TABLE, AgendaSchema, Agenda}