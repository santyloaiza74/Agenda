const {Router} = require('express')
const UserController = require('../controllers/user.controller')
const { Association } = require('sequelize')

const router = Router()

const controller = new UserController()

router.get('/', async (req, res)=>{
    const users = await controller.index()
    res.json({users})
})

router.post('/',async (req,res)=>{
    const {name,email,password,status} = req.body
    const user = await controller.create(name,email,password,status)
    res.status(201).json({user})
})

router.delete('/',async (req,res)=>{
    const {id}= req.body
    const user= await controller.delete(id)
    res.status(201).json({user})
})

router.put('/', async(req,res)=>{
    const {id,name,email,password,status} = req.body
    const user = await controller.Modificar(id,name,email,password,status)
    res.status(201).json(user)
})

router.get('/:id', async(req,res)=>{
    const {id}= req.params
    console.log(id)
    const user= await controller.getOne(id)
    res.status(201).json({user})
})

module.exports = router