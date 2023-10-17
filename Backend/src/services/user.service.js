const { where } = require('sequelize')
const {models} = require('../libs/sequelize')

class UserService {
    constructor(){
        this.model = models.User
    }
    async getAll(){
        const users = await this.model.findAll()
        return users
    }
    async create(name,email,password,status){
        const user = await this.model.create({name,email,password,status})
        return user
    }
    async delete(id){
        const user =  this.getOne(id)
        if(!user)return null
        await this.model.destroy({where:{id:id}})
        return user
    }
    async Modificar(id,name,email,password,status){
        const user = await this.model.update({name,email,password,status},{where:{id:id}})
        return user
    }
    async getOne(id){
        const user = await this.model.findByPk(id)
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