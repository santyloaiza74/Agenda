const {models} = require('./../libs/sequelize')
const {where}= require('sequelize')

class AgendaService{
    constructor(){
        this.model= models.Agenda
    }
    async getAll(){
        const agendas = await this.model.findAll()
        return agendas
    }
    async getOne(id){
        const agenda= await this.model.findByPk(id)
        return agenda
    }
    async createAgenda(fecha,hora_inicio,hora_fin,user_id,lugar,status){
        const agenda= await this.model.create(fecha,hora_inicio,hora_fin,user_id,lugar,status)
        return agenda
    }
    async deleteAgenda(id){
        const agenda= await this.getOne(id)
        if(!agenda)return null
        await agenda.destroy()
        return agenda.id
    }
    async updateAgenda(id, values){
        const agenda= await this.getOne(id)
        if(!agenda)return null
        await agenda.update(values)
        return agenda
    }
}
module.exports= AgendaService