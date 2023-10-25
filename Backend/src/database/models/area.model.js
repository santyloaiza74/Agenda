const { DataTypes, Model } = require('sequelize')

const AREA_TABLE = 'areas'

const AreaSchema= 
{
    id: 
    {
        type: 
            DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
    code: 
    {
        type:
            DataTypes.STRING,
            allowNull: false,
            unique: true
    },
    name:
    {
        type:
            DataTypes.STRING,
            allowNull: false
    },
    observations:
    {
        type:
            DataTypes.TEXT      
    },
    status:
    {
        type:
            DataTypes.BOOLEAN
    }
}
class Area extends Model {
    static associate(models) { }

    static config(sequelize) {
        return { sequelize, tableName: AREA_TABLE, modelName: 'Area', timestamps: false }
    }
}
module.exports = { AREA_TABLE, AreaSchema, Area }