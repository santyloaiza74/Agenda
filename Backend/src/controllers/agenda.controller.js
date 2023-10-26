const AgendaService = require('./../services/agenda.service')

class AgendaController{
    constructor(){
        this.service = new AgendaService()
    }
    async index(){
        const agendas = await this.service.getAll()
        return agendas
    }
    async create(fecha,hora_inicio,hora_fin,user_id,lugar,status){
        const agenda = await this.service.createAgenda(fecha,hora_inicio,hora_fin,user_id,lugar,status)
        return agenda
    }
    async findOne(id){
        const agenda= await this.service.getOne(id)
        if(!agenda){
            throw new Error('Agenda no encontrada')
        }
        return agenda
    }
    async update(id, values){
        const agenda= await this.service.updateAgenda(id,values)
        if(!agenda){
            throw new Error('Agenda no encontrada')
        }
        return agenda
    }
    async delete(id){
        const agenda = await this.service.deleteAgenda(id)
        if(!agenda){
            throw new Error('Agenda no encontrada')
        }
        return agenda
    }
}
module.exports= AgendaController