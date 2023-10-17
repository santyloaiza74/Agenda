const UserService = require('../services/user.service')

class UserController{
    constructor(){
        this.service = new UserService()
    }

    async index(){
        const users = await this.service.getAll()
        return users
    }
    async create(name,email,password,status){
        const user = await this.service.create(name,email,password,status)
        return user
    }
    async delete(id){
        const user = await this.service.delete(id)
        return user
    }
    async Modificar(id,name,email,password,status){
        const user= await this.service.Modificar(id,name,email,password,status)
        return user
    }
    async getOne(id){
        const user=await this.service.getOne(id)
        return user
    }
}

module.exports = UserController