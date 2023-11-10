const { DataTypes, Model} = require('sequelize')
const USER_TABLE = 'users'

const UserSchema = {
    id: {
        type:
            DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type:
            DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:
            DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type:
            DataTypes.STRING,
        allowNull: false
    },
    status: {
        type:
            DataTypes.BOOLEAN,
        defaultValue: false
    },
    areaid:{
        field: 'area_id',
        type: DataTypes.INTEGER,
        references:{
            model: 'areas',
            key: 'id'
        }
    }
}

class User extends Model {
    static associate(models) {
        this.belongsTo(models.Area,{as:'area',foreignKey:'areaid'})
    }

    static config(sequelize) {
        return { sequelize, tableName: USER_TABLE, modelName: 'User', timestamps: false }
    }
}

module.exports = { USER_TABLE, UserSchema, User }