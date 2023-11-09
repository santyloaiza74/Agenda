const {Router} = require('express')
const UserController = require('../controllers/user.controller')

const router = Router()

const controller = new UserController()

router.get('/', async (req, res)=>{
    const users = await controller.index()
    res.json({users})
})

router.post('/',async (req,res)=>{
    const {name,email,password,status,areaId,area} = req.body
    const user = await controller.create(name,email,password,status,areaId,area)
    res.status(201).json({user})
})

router.delete('/:id',async (req,res)=>{
    const {id}= req.params
    try {
        const user= await controller.delete(id)
        res.status(201).json({user})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
})

// router.put('/', async(req,res)=>{
//     const {id,name,email,password,status} = req.body
//     const user = await controller.Modificar(id,name,email,password,status)
//     res.status(201).json(user)
// })

router.put('/:id', async(req,res)=>{
    const {id}= req.params
    const {email= '',name= '', status='', password='',areaId='',area=''} = req.body
    const values = {}
    if(email){
        values.email= email
    }
    if(name){
        values.name=name
    }
    if(status){
        values.status=status
    }
    if(password){
        values.password=password
    }
    if(areaId)values.areaId=areaId
    if(area)values.area=area
    try{
        const user = await controller.update(id,values)
        res.status(200).json({user})
    }
    catch(error)
    {
        res.status(404).json({message: error.message})
    }
})

router.get('/:id', async(req,res)=>{
    try
    {
        const {id}= req.params
        const user= await controller.getOne(id)
        res.status(200).json({user})
    }
    catch(error)
    {
        res.status(404).json({message: error.message})
    }
})

module.exports = router