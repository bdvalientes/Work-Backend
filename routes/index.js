'use strict'

const express = require('express')
const UserCtrl = require('../controllers/UserCtrl')
const WorkCtrl = require('../controllers/WorkCtrl')
const api = express.Router()
const authUserInfo = require('../controllers/authUser')
const auth = require('../middlewares/auth')


//Crear UserInfo
api.post('/UserInfo',UserCtrl.saveUserInfo)
// Mostrar Todos Los UserInfo 
api.get('/UserInfo',UserCtrl.getUsersInfo)
//Mostrar UserInfo Especifico
api.get('/UserInfo/:UserId',UserCtrl.getUserInfo)
//Eliminar UserInfo 
api.delete('/UserInfo/:UserId',UserCtrl.deleteUserInfo)
//Actualizar UserInfo
api.put('/UserInfo/:UserId',UserCtrl.updateUserInfo)

//Crear UserInfo Con Token
api.post('/signUp',authUserInfo.signUp)
//Ingresar Login User Info
api.post('/signIn',authUserInfo.signIn)

//Probar Token
api.get('/private',auth, (req,res) =>{
    res.status(200).send({message: `Tiene Acceso`})
})

//Crear WorkInfo
api.post('/WorkInfo',WorkCtrl.saveWorkInfo)
//Mostrar Todos Los WorkInfos
api.get('/WorkInfo',WorkCtrl.getWorksInfo)
//Mostrar WorkInfo Especifico
api.get('/WorkInfo/:WorkId',WorkCtrl.getWorkInfo)
//Eliminar Tarea
api.delete('/WorkInfo/:WorkId',WorkCtrl.deleteWorkInfo)
//Actualizar Tarea
api.put('/WorkInfo/:WorkId',WorkCtrl.updateWorkInfo)


module.exports = api