const {Router} = require('express')
const AgendaController= require('./../controllers/agenda.controller')

const router = Router()

const controller= new AgendaController()

router.get('/', async(req,res)=>{
    const agendas = await controller.index()
    res.json({agendas})
})

router.get('/:id', async(req,res)=>{
    try{
        const {id}=req.params
        const agenda= await controller.findOne(id)
        res.status(200).json({agenda})
    } catch (error){
        res.status(404).json({message: error.message})
    }    
})

router.post('/', async(req,res)=>{
    const {fecha,hora_inicio,hora_fin,user_id,lugar,status} = req.body
    const agenda= await controller.create({fecha,hora_inicio,hora_fin,user_id,lugar,status})
    res.status(201).json({agenda})
})

router.put('/', async(req,res)=>{
    const {id}= req.params
    const {fecha='',hora_inicio='',hora_fin='',user_id='',lugar='',status=''}= req.body
    const values={}
    if(fecha) values.fecha= fecha
    if(hora_inicio) values.hora_inicio=hora_inicio
    if(hora_fin) values.hora_fin=hora_fin
    if(user_id) values.user_id=user_id
    if(lugar) values.lugar=lugar
    if(status)values.status=status
    try{
        const agenda = await controller.update(id,values)
        res.status(200).json({agenda})
    } catch (error){
        res.status(404).json({message: error.message})
    }
})

module.exports= router