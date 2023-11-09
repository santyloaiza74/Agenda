const UserService = require('../services/user.service')

class UserController{
    constructor(){
        this.service = new UserService()
    }

    async index(){
        const users = await this.service.getAll()
        return users
    }
    async create(name,email,password,status,areaId,area){
        const user = await this.service.create(name,email,password,status,areaId,area)
        return user
    }
    async delete(id){
        const user = await this.service.delete(id)
        if(!user){
            throw new Error('Usuario no encontrado')
        }
        return user
    }
    async getOne(id){
        const user=await this.service.getOne(id)
        if(!user){
            throw new Error('Usuario no encontrado')
        }
        delete user.dataValues.password
        return user
    }
    async update(id,values){
        const user= await this.service.update(id,values)
        if(!user){
            throw new Error('Usuario no encontrado')
        }
        return user

    }
}

module.exports = UserController