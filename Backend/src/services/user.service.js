const { where } = require('sequelize')
const {models} = require('../libs/sequelize')

class UserService {
    constructor(){
        this.model = models.User
    }
    async getAll(){
        const users = await this.model.findAll({include: 'area'})
        return users
    }
    async create(name,email,password,status,areaId,area){
        if(areaId && area){
            throw new Error("fdgdfgdfgdfsgdfgdssdgdsfgfgd")
        }
        const values={
            name,
            email,
            password,
            status,
            areaId,
            area
        }
        if(areaId)values.areaId=areaId
        if(area)values.area=area
        const user = await this.model.create(values,{include:[{association:'area'}]})
        return user
    }
    async delete(id){
        const user = await getOne(id)
        if(!user)return null
        await user.destroy()
        return user.id
    }
    async getOne(id){
        const user = await this.model.findByPk(id,{include:'area'})
        return user
    }
    async update(id, values){
        const user= await this.model.findByPk(id)
        if(!user){
            return null
        }
        const updateUser=await user.update(values)
        return updateUser
    }
}

module.exports = UserService